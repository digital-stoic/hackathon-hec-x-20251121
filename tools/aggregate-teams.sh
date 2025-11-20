#!/bin/bash

# Hackathon Team Aggregation Script
# Clones team repositories and aggregates them into a jury repo

# ============================================================================
# CONFIGURATION
# ============================================================================
#
# 📝 Load configuration from config.sh
#
# This script will automatically load config.sh if it exists
# Otherwise, you can set environment variables before running
#
# ============================================================================

# Auto-load config.sh if it exists (before set -euo pipefail)
if [ -f "config.sh" ]; then
    echo "📝 Loading configuration from config.sh..."
    source config.sh
fi

# Enable strict error handling AFTER loading config
set -euo pipefail

# 🔐 Ensure SSH agent is available (if SSH_AUTH_SOCK is set in environment)
# This allows the script to use SSH keys for git operations
if [ -n "${SSH_AUTH_SOCK:-}" ]; then
    export SSH_AUTH_SOCK
fi

# GitHub organization or username (set via config.sh)
GITHUB_ORG="${GITHUB_ORG:-}"

# Team repositories array (set via config.sh)
# Format: "team-name:repo-url"
# TEAMS array should now be populated from config.sh

# Target directory for aggregated teams
TEAMS_DIR="teams"

# Deadline (set via config.sh)
DEADLINE="${DEADLINE:-}"

# Dry run mode (set to 1 to preview without committing)
DRY_RUN="${DRY_RUN:-0}"

# ============================================================================
# COLORS
# ============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# ============================================================================
# FUNCTIONS
# ============================================================================

log_info() {
    echo -e "${BLUE}ℹ️  [INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}✅ [SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠️  [WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}❌ [ERROR]${NC} $1"
}

log_step() {
    echo -e "\n${MAGENTA}🚀 ==>${NC} ${CYAN}$1${NC}\n"
}

# Get last commit info from a repo
get_last_commit_info() {
    local repo_path=$1
    pushd "$repo_path" > /dev/null
    local commit_hash=$(git rev-parse HEAD)
    local commit_date=$(git log -1 --format=%ci)
    local commit_author=$(git log -1 --format="%an")
    local commit_message=$(git log -1 --format=%s)
    popd > /dev/null

    echo "Hash: $commit_hash"
    echo "Date: $commit_date"
    echo "Author: $commit_author"
    echo "Message: $commit_message"
}

# Clone or update a team repository
clone_team_repo() {
    local team_name=$1
    local repo_url=$2
    local temp_dir="/tmp/hackathon-clone-$$-$team_name"

    log_step "Processing team: $team_name 👥"

    # Clone to temp directory
    log_info "📦 Cloning $repo_url..."
    if ! git clone --depth 1 "$repo_url" "$temp_dir" 2>/dev/null; then
        log_error "Failed to clone repository for $team_name"
        return 1
    fi

    log_success "Cloned successfully 📥"

    # Get commit info
    log_info "🔍 Extracting metadata..."
    local commit_info=$(get_last_commit_info "$temp_dir")
    local commit_hash=$(echo "$commit_info" | grep "Hash:" | cut -d' ' -f2)
    local commit_date=$(echo "$commit_info" | grep "Date:" | cut -d' ' -f2-)

    # Create team directory
    local team_dir="$TEAMS_DIR/$team_name"
    mkdir -p "$team_dir"

    # Copy files (excluding .git)
    log_info "📁 Copying files to $team_dir..."
    rsync -a --exclude='.git' "$temp_dir/" "$team_dir/"

    # Create metadata file
    cat > "$team_dir/.metadata.txt" <<EOF
Team: $team_name
Repository: $repo_url
Aggregation Time: $(date -Iseconds)
Deadline: $DEADLINE

Last Commit Info:
$commit_info
EOF

    log_success "Copied files and created metadata 📝"

    # Cleanup temp directory
    rm -rf "$temp_dir"

    # Git operations
    if [ "$DRY_RUN" -eq 0 ]; then
        log_info "💾 Committing changes..."
        git add "$team_dir" >/dev/null 2>&1
        git commit -q -m "Aggregate $team_name submission

Source: $repo_url
Commit: $commit_hash
Aggregated: $(date -Iseconds)
Deadline: $DEADLINE"
        log_success "Committed $team_name 🔖"
    else
        log_warning "DRY RUN: Would commit $team_name 🔍"
        git add "$team_dir" >/dev/null 2>&1
    fi

    return 0
}

# Generate aggregation report
generate_report() {
    local report_file="AGGREGATION_REPORT.md"

    log_step "Generating aggregation report 📊"

    local success_count=0
    local fail_count=0

    # Create report header
    cat > "$report_file" <<EOF
# 🏆 Hackathon Aggregation Report

**Generated:** $(date -Iseconds)
**Deadline:** $DEADLINE

## 📊 Summary

| Team Name | Status | Last Commit Time | Repository |
|-----------|--------|------------------|------------|
EOF

    # Process each team and add to table
    for team_entry in "${TEAMS[@]}"; do
        local team_name="${team_entry%%:*}"
        local repo_url="${team_entry#*:}"
        local team_dir="$TEAMS_DIR/$team_name"

        if [ -d "$team_dir" ] && [ -f "$team_dir/.metadata.txt" ]; then
            success_count=$((success_count + 1))

            # Extract last commit date from metadata
            local commit_date=$(grep "Date:" "$team_dir/.metadata.txt" | cut -d' ' -f2-)
            local commit_hash=$(grep "Hash:" "$team_dir/.metadata.txt" | cut -d' ' -f2)
            local repo_link=$(grep "Repository:" "$team_dir/.metadata.txt" | cut -d' ' -f2)

            # Add table row
            echo "| **$team_name** | ✅ Success | \`$commit_date\` | [$repo_link]($repo_link) |" >> "$report_file"
        else
            fail_count=$((fail_count + 1))

            # Add failed row
            echo "| **$team_name** | ❌ Failed | N/A | [$repo_url]($repo_url) |" >> "$report_file"
        fi
    done

    # Add statistics footer
    cat >> "$report_file" <<EOF

---

## 📈 Statistics

- **Total Teams:** ${#TEAMS[@]}
- **Successful:** $success_count ✅
- **Failed:** $fail_count ❌

EOF

    # Add detailed metadata section
    echo "## 📋 Detailed Metadata" >> "$report_file"
    echo "" >> "$report_file"

    for team_entry in "${TEAMS[@]}"; do
        local team_name="${team_entry%%:*}"
        local team_dir="$TEAMS_DIR/$team_name"

        if [ -d "$team_dir" ] && [ -f "$team_dir/.metadata.txt" ]; then
            echo "<details>" >> "$report_file"
            echo "<summary><strong>$team_name</strong> - Click to expand</summary>" >> "$report_file"
            echo "" >> "$report_file"
            echo '```' >> "$report_file"
            cat "$team_dir/.metadata.txt" >> "$report_file"
            echo '```' >> "$report_file"

            # Count files
            local file_count=$(find "$team_dir" -type f ! -name '.metadata.txt' | wc -l)
            echo "" >> "$report_file"
            echo "**Files:** $file_count" >> "$report_file"
            echo "" >> "$report_file"
            echo "</details>" >> "$report_file"
            echo "" >> "$report_file"
        fi
    done

    log_success "Report generated: $report_file 📄"

    if [ "$DRY_RUN" -eq 0 ]; then
        git add "$report_file" >/dev/null 2>&1
        git commit -q -m "Add aggregation report" || true
    fi
}

# ============================================================================
# MAIN
# ============================================================================

main() {
    log_step "Starting Hackathon Team Aggregation 🏁"

    # Validate configuration
    if [ ${#TEAMS[@]} -eq 0 ]; then
        log_error "No teams configured! 🚫"
        echo ""
        echo "Please configure your teams:"
        echo "  1. Copy config.example.sh to config.sh"
        echo "  2. Edit config.sh with your team repositories"
        echo "  3. Run: source config.sh && ./aggregate-teams.sh"
        echo ""
        exit 1
    fi

    if [ -z "$GITHUB_ORG" ]; then
        log_warning "GITHUB_ORG not set (this is OK if teams have full URLs) ⚠️"
    fi

    if [ "$DRY_RUN" -eq 1 ]; then
        log_warning "Running in DRY RUN mode - no commits will be made 👀"
    fi

    # Ensure we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log_error "Not in a git repository. Please run this script from the jury repo root. 🚫"
        exit 1
    fi

    # Create teams directory if it doesn't exist
    mkdir -p "$TEAMS_DIR"

    # Track success/failure
    local success_count=0
    local fail_count=0

    # Process each team
    for team_entry in "${TEAMS[@]}"; do
        local team_name="${team_entry%%:*}"
        local repo_url="${team_entry#*:}"

        if clone_team_repo "$team_name" "$repo_url"; then
            success_count=$((success_count + 1))
        else
            fail_count=$((fail_count + 1))
        fi
    done

    # Generate report
    generate_report

    # Final summary
    log_step "Aggregation Complete 🏆"
    log_info "✨ Successful: $success_count"
    log_info "💥 Failed: $fail_count"

    if [ "$DRY_RUN" -eq 0 ]; then
        log_info "☁️  Pushing to origin..."
        if git push origin main >/dev/null 2>&1; then
            log_success "Pushed to origin/main 🚢"
        else
            log_error "Failed to push to origin 🔥"
            exit 1
        fi
    else
        log_warning "DRY RUN: Would push to origin/main 🎭"
    fi

    log_success "All done! 🎉✨🎊"
}

# Run main function
main