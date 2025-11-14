# Technical Setup Guide - Organizers & Jury

Complete technical guide for setting up and running the team aggregation system.

## Navigation

- [Main README](README.md) - Overview and links
- [Submission Guide](SUBMISSION.md) - For participants
- [Quick Reference](QUICKSTART.md) - Command cheat sheet
- [Aggregation Report](AGGREGATION_REPORT.md) - Results (after aggregation)

---

## Prerequisites

- Git installed
- Bash shell (Linux/macOS/WSL)
- SSH key configured for the jury repository (for pushing)
- Access to team repositories (HTTPS for cloning)
- `rsync` installed (usually pre-installed)

## Authentication Setup

### SSH Authentication for Jury Repo

The aggregation script pushes to the jury repository using SSH:

```bash
# Set your SSH agent socket (if not already set)
export SSH_AUTH_SOCK=/path/to/your/ssh/agent/socket

# Verify SSH key is loaded
ssh-add -l

# Test access to jury repo
ssh -T git@github.com
```

### HTTPS for Team Repos

Team repositories are cloned using HTTPS (anonymous/public access). For private team repos, see the Private Repositories section below.

## Configuration

### Step 1: Create Config File

```bash
# Copy the example configuration
cp config.example.sh config.sh

# Edit with your teams
nano config.sh
```

### Step 2: Configure Teams

Edit `config.sh`:

```bash
#!/bin/bash

# GitHub organization (if applicable)
export GITHUB_ORG="your-github-org"

# Hackathon deadline
export DEADLINE="2025-11-21 18:00:00"

# Team repositories
# Format: "team-name:repo-url"
export TEAMS=(
    "team-alpha:https://github.com/your-org/team-alpha-repo"
    "team-beta:https://github.com/your-org/team-beta-repo"
    "team-gamma:https://github.com/your-org/team-gamma-repo"
)

# Dry run mode (0 = normal, 1 = preview only)
export DRY_RUN=0
```

### Step 3: Test Configuration

```bash
# Load config and verify
source config.sh
echo "Teams configured: ${#TEAMS[@]}"
echo "First team: ${TEAMS[0]}"

# Test with dry run
DRY_RUN=1 ./aggregate-teams.sh
```

## Running the Aggregation

### Standard Usage

The script automatically loads `config.sh` if it exists:

```bash
# Run aggregation (auto-loads config.sh)
./aggregate-teams.sh
```

You can also manually source the config:

```bash
# Manual config loading
source config.sh && ./aggregate-teams.sh
```

### Dry Run Mode

Preview what will happen without making commits:

```bash
# Dry run (preview only)
DRY_RUN=1 ./aggregate-teams.sh
```

### What the Script Does

1. **Clones** each team repository (shallow clone, latest commit only)
2. **Copies** files to `teams/<team-name>/` (excluding .git)
3. **Extracts** metadata:
   - Last commit hash
   - Commit timestamp
   - Author information
   - Commit message
4. **Creates** `.metadata.txt` in each team directory
5. **Commits** each team separately with descriptive message
6. **Generates** `AGGREGATION_REPORT.md` with summary table
7. **Pushes** to origin/main

### Expected Output

```
🚀 ==> Starting Hackathon Team Aggregation 🏁

🚀 ==> Processing team: team-alpha 👥

ℹ️  [INFO] 📦 Cloning https://github.com/org/team-alpha...
✅ [SUCCESS] Cloned successfully 📥
ℹ️  [INFO] 🔍 Extracting metadata...
ℹ️  [INFO] 📁 Copying files to teams/team-alpha...
✅ [SUCCESS] Copied files and created metadata 📝
ℹ️  [INFO] 💾 Committing changes...
✅ [SUCCESS] Committed team-alpha 🔖

🚀 ==> Generating aggregation report 📊

✅ [SUCCESS] Report generated: AGGREGATION_REPORT.md 📄

🚀 ==> Aggregation Complete 🏆

ℹ️  [INFO] ✨ Successful: 3
ℹ️  [INFO] 💥 Failed: 0
ℹ️  [INFO] ☁️  Pushing to origin...
✅ [SUCCESS] Pushed to origin/main 🚢
✅ [SUCCESS] All done! 🎉✨🎊
```

## Verification

### Check Aggregated Teams

```bash
# List team directories
ls -la teams/

# View report
cat AGGREGATION_REPORT.md

# Check metadata for a team
cat teams/team-alpha/.metadata.txt

# View git log
git log --oneline -10
```

### Metadata File Format

Each team directory contains `.metadata.txt`:

```
Team: team-alpha
Repository: https://github.com/org/team-alpha
Aggregation Time: 2025-11-21T18:05:00+00:00
Deadline: 2025-11-21 18:00:00

Last Commit Info:
Hash: abc123def456...
Date: 2025-11-21 17:58:32 +0000
Author: John Doe
Message: Final submission - implement user dashboard
```

### Aggregation Report

The generated `AGGREGATION_REPORT.md` includes:

- Summary table with team names, status, commit times, repo links
- Statistics (total teams, successful, failed)
- Detailed metadata for each team (expandable sections)
- File counts per team

## Troubleshooting

### Configuration Issues

**TEAMS array is empty:**

```bash
# Check if config is loaded
source config.sh
echo "${#TEAMS[@]}"

# Should output: number of teams
```

**Script can't find config.sh:**

```bash
# Ensure config.sh exists in the same directory
ls -la config.sh

# Make sure it's not in .gitignore for testing
```

### Repository Access Issues

**Clone fails - repository not found:**

```bash
# Test repository URL manually
git clone --depth 1 https://github.com/org/team-name

# Check if repo is private and needs authentication
```

**SSH push fails:**

```bash
# Verify SSH key is loaded
ssh-add -l

# Test GitHub SSH access
ssh -T git@github.com

# Check git remote
git remote -v
```

### Error Handling

**Script fails - divergent branches:**

```bash
# Pull with rebase
git pull --rebase origin main

# Run script again
./aggregate-teams.sh
```

**Permission denied on script:**

```bash
# Make script executable
chmod +x aggregate-teams.sh
```

**Git add errors:**

All git operations are now quiet. If you see errors, check:
- Disk space
- Git repository is valid: `git status`
- You're in the repository root

## Private Repositories

For private team repositories, you have several options:

### Option 1: Personal Access Token in URL

```bash
export TEAMS=(
    "team-1:https://USERNAME:TOKEN@github.com/org/team-1"
    "team-2:https://USERNAME:TOKEN@github.com/org/team-2"
)
```

### Option 2: Git Credential Helper

```bash
# Store credentials
git config --global credential.helper store

# First clone will prompt for credentials
# Subsequent clones will use stored credentials
```

### Option 3: SSH URLs for Team Repos

```bash
export TEAMS=(
    "team-1:git@github.com:org/team-1.git"
    "team-2:git@github.com:org/team-2.git"
)
```

Note: This requires SSH access to team repositories.

## Advanced Usage

### Re-aggregate Single Team

```bash
# Remove team directory
rm -rf teams/team-alpha

# Edit config.sh to include only that team (or leave all)
nano config.sh

# Run script - it will only process missing teams
./aggregate-teams.sh
```

### Custom Configuration File

```bash
# Create alternative config
cp config.example.sh production-config.sh

# Edit it
nano production-config.sh

# Use it
source production-config.sh && ./aggregate-teams.sh
```

### Scheduled Aggregation

```bash
# Run at specific time using at
echo "./aggregate-teams.sh" | at 18:00

# Or using cron (crontab -e)
0 18 21 11 * cd /path/to/repo && ./aggregate-teams.sh
```

## Timeline

1. **Before Hackathon**:
   - Set up jury repository
   - Configure `config.sh` with team URLs
   - Test with `DRY_RUN=1`
   - Share `SUBMISSION.md` with participants

2. **During Hackathon**:
   - Monitor team progress (optional)
   - Ensure all team repositories are accessible

3. **At Deadline**:
   - Run `./aggregate-teams.sh`
   - Verify `AGGREGATION_REPORT.md`
   - Check all teams in `teams/` directory

4. **After Aggregation**:
   - Review metadata for late submissions
   - Provide access to jury members
   - Begin evaluation

## Support

Common issues:
- Network connectivity to GitHub
- Repository access permissions
- Git configuration (user.name, user.email)
- Disk space in `/tmp/` (for temporary clones)
- SSH authentication for pushing

For script issues, run with bash debugging:

```bash
bash -x ./aggregate-teams.sh
```

---

[Back to Main README](README.md) | [View Submission Guide](SUBMISSION.md) | [Quick Reference](QUICKSTART.md)
