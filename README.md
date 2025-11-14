# 🏆 Hackathon Jury Repository

This repository aggregates submissions from all participating teams for evaluation by the jury.

## 📂 Structure

```
hackathon-jury/
├── README.md                  # This file
├── SUBMISSION.md              # Instructions for teams
├── aggregate-teams.sh         # Aggregation script
├── AGGREGATION_REPORT.md      # Generated report (after aggregation)
└── teams/                     # Team submissions
    ├── team-alpha/
    ├── team-beta/
    └── team-gamma/
```

## 👨‍⚖️ For Jury Members

Each team's submission is in the `teams/<team-name>/` directory.

Check `AGGREGATION_REPORT.md` for:
- Aggregation timestamp
- Last commit metadata from each team
- File counts and stats

## 🚀 Running the Aggregation

### ✅ Prerequisites

- Git installed
- Access to team repositories (HTTPS, authenticated if private)
- In the jury repo root directory

### ⚙️ Configuration

Create your configuration file:

```bash
# Copy example config
cp config.example.sh config.sh

# Edit with your actual teams
nano config.sh
```

Set your teams in `config.sh`:

```bash
export GITHUB_ORG="your-org"

export TEAMS=(
    "team-alpha:https://github.com/your-org/team-alpha"
    "team-beta:https://github.com/your-org/team-beta"
    "team-gamma:https://github.com/your-org/team-gamma"
)

export DEADLINE="2025-11-14 18:00:00"
```

### 💻 Basic Usage

The script **automatically loads `config.sh`** if it exists:

```bash
# Standard aggregation (auto-loads config.sh)
./aggregate-teams.sh

# Dry run mode (preview without committing)
DRY_RUN=1 ./aggregate-teams.sh
```

You can also manually source the config if needed:
```bash
# Manual config loading
source config.sh && ./aggregate-teams.sh
```

### 🔄 What the Script Does

1. **Clones** each team repository (shallow clone, latest commit only)
2. **Copies** files to `teams/<team-name>/` (excluding .git)
3. **Extracts** metadata:
   - Last commit hash
   - Commit timestamp
   - Author
   - Commit message
4. **Creates** `.metadata.txt` in each team directory
5. **Commits** each team separately with descriptive message
6. **Generates** `AGGREGATION_REPORT.md` with summary
7. **Pushes** to origin/main

### 🛡️ Error Handling

The script handles:
- **Inaccessible repositories**: Logs error, continues with other teams
- **Network failures**: Clear error messages
- **Divergent branches**: Standard git push (will fail if remote diverged)

If push fails:
```bash
git pull --rebase origin main
git push origin main
```

### 📺 Output Example

```
==> Processing team: team-alpha

[INFO] Cloning https://github.com/org/team-alpha...
[SUCCESS] Cloned successfully
[INFO] Extracting metadata...
[INFO] Copying files to teams/team-alpha...
[SUCCESS] Copied files and created metadata
[INFO] Committing changes...
[SUCCESS] Committed team-alpha
```

## ⏰ Timeline

1. **Before Deadline**: Share `SUBMISSION.md` with teams
2. **At Deadline**: Run `./aggregate-teams.sh`
3. **After Aggregation**: Review `AGGREGATION_REPORT.md` and team directories
4. **Evaluation**: Access all submissions in `teams/` directory

## 📋 Metadata Files

Each team directory contains `.metadata.txt`:

```
Team: team-alpha
Repository: https://github.com/org/team-alpha
Aggregation Time: 2025-11-14T18:05:00+00:00
Deadline: 2025-11-14 18:00:00

Last Commit Info:
Hash: abc123def456...
Date: 2025-11-14 17:58:32 +0000
Author: John Doe
Message: Final submission - implement user dashboard
```

## 🔧 Troubleshooting

### 🔐 Authentication Issues

For private repositories:
```bash
# Use GitHub personal access token
git config --global credential.helper store
# Then enter credentials on first clone
```

Or configure tokens in `config.sh` repository URLs:
```bash
export TEAMS=(
    "team-alpha:https://USERNAME:TOKEN@github.com/org/team-alpha"
    "team-beta:https://USERNAME:TOKEN@github.com/org/team-beta"
)
```

### 🔍 Team Repo Not Found

- Verify repository URL
- Check repository visibility (public/private)
- Confirm access permissions

### 🚫 Script Won't Execute

```bash
chmod +x aggregate-teams.sh
```

## 🎯 Advanced Usage

### 📝 Custom Team List

Create a config file:
```bash
# teams.conf
export TEAMS=(
    "team-one:https://github.com/org/team-one"
    "team-two:https://github.com/org/team-two"
)

source teams.conf
./aggregate-teams.sh
```

### 🔁 Re-aggregate Single Team

```bash
# Remove team directory
rm -rf teams/team-alpha

# Edit config.sh to include only team-alpha in TEAMS array
nano config.sh

# Run script
source config.sh && ./aggregate-teams.sh
```

## 📌 Notes

- Script uses `rsync` for file copying (should be pre-installed on most Linux systems)
- Shallow clones (`--depth 1`) minimize bandwidth
- Each team gets individual commit for audit trail
- Temp clones stored in `/tmp/`, auto-cleaned after processing

## 💬 Support

Issues with aggregation? Check:
1. Network connectivity to GitHub
2. Repository access permissions
3. Git configuration (user.name, user.email)
4. Disk space in `/tmp/`
