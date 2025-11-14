#!/bin/bash

# Quick test script to validate aggregation workflow
# This creates mock team repos locally to test the aggregation script

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info() { echo -e "${CYAN}🧪 [TEST]${NC} $1"; }
log_success() { echo -e "${GREEN}✅ [PASS]${NC} $1"; }
log_error() { echo -e "${RED}❌ [FAIL]${NC} $1"; }

TEST_DIR="/tmp/hackathon-test-$$"
CURRENT_DIR=$(pwd)

cleanup() {
    log_info "🧹 Cleaning up test environment..."
    rm -rf "$TEST_DIR"
}

trap cleanup EXIT

log_info "🏗️  Creating test environment in $TEST_DIR"
mkdir -p "$TEST_DIR"

# Create 3 mock team repositories
for team in alpha beta gamma; do
    log_info "👥 Creating team-${team} repository..."

    team_dir="$TEST_DIR/team-${team}"
    mkdir -p "$team_dir"
    cd "$team_dir"

    git init
    git config user.email "test@hackathon.test"
    git config user.name "Test User"

    # Create mock project structure (like Lovable would generate)
    cat > README.md <<EOF
# Team ${team^} - Hackathon Project

This is team ${team}'s submission.
EOF

    mkdir -p src components
    cat > src/index.js <<EOF
// Team ${team} main entry point
console.log('Hello from team ${team}');
EOF

    cat > components/App.js <<EOF
// Team ${team} App component
export default function App() {
    return <div>Team ${team} App</div>;
}
EOF

    cat > package.json <<EOF
{
    "name": "team-${team}-hackathon",
    "version": "1.0.0",
    "description": "Hackathon submission for team ${team}"
}
EOF

    git add .
    git commit -m "Initial commit - Team ${team} project setup"

    # Simulate additional work
    echo "// Feature implementation" >> src/index.js
    git add .
    git commit -m "Add main feature"

    echo "// Final touches" >> src/index.js
    git add .
    git commit -m "Final submission - team ${team}"

    log_success "Created team-${team} with 3 commits 📦"
done

cd "$CURRENT_DIR"

# Create test config
log_info "⚙️  Creating test configuration..."

cat > test-config.sh <<EOF
export GITHUB_ORG="test"
export DEADLINE="$(date -Iseconds)"
export TEAMS=(
    "team-alpha:${TEST_DIR}/team-alpha"
    "team-beta:${TEST_DIR}/team-beta"
    "team-gamma:${TEST_DIR}/team-gamma"
)
export DRY_RUN=0
EOF

log_success "Test configuration created 📝"

# Run aggregation in dry-run mode first
log_info "🎭 Running aggregation in DRY RUN mode..."
DRY_RUN=1 GITHUB_ORG="test" \
    TEAMS=("team-alpha:${TEST_DIR}/team-alpha" "team-beta:${TEST_DIR}/team-beta" "team-gamma:${TEST_DIR}/team-gamma") \
    ./aggregate-teams.sh

log_success "Dry run completed 🎯"

# Ask user if they want to run actual aggregation
echo ""
read -p "$(echo -e ${YELLOW}🚀 Run actual aggregation with commits? [y/N]:${NC} )" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    log_info "🏃 Running actual aggregation..."

    source test-config.sh
    ./aggregate-teams.sh

    log_success "Aggregation completed! 🎉"

    # Show results
    echo ""
    log_info "📊 Results:"
    ls -la teams/

    echo ""
    log_info "📜 Git log:"
    git log --oneline -10

    echo ""
    log_info "📄 Aggregation report:"
    cat AGGREGATION_REPORT.md

else
    log_info "⏭️  Skipped actual aggregation"
fi

log_success "Test completed! 🎊"
