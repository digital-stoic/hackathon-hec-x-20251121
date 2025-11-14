# ⚡ Quick Start Guide

**Navigation:** [Main README](README.md) | [Setup Guide](SETUP.md) | [Submission Guide](SUBMISSION.md)

---

## 🔧 Setup (Before Hackathon)

### 1️⃣ Configure Team Repositories

```bash
# Copy example config
cp config.example.sh config.sh

# Edit with your actual team repos
nano config.sh
```

Update `config.sh`:
```bash
export GITHUB_ORG="your-github-org"
export DEADLINE="2025-11-21 18:00:00"
export TEAMS=(
    "team-alpha:https://github.com/org/team-alpha-lovable-repo"
    "team-beta:https://github.com/org/team-beta-lovable-repo"
    "team-gamma:https://github.com/org/team-gamma-lovable-repo"
)
```

### 2️⃣ Share Instructions with Teams

Send `SUBMISSION.md` to all teams with:
- ⏰ Deadline
- 🔗 Their GitHub repo URL
- 📞 Organizer contact info

### 3️⃣ Test Run (Optional)

```bash
# Dry run to validate config (auto-loads config.sh)
DRY_RUN=1 ./aggregate-teams.sh
```

## 🏁 At Deadline

### 🚀 Run Aggregation

```bash
# Script auto-loads config.sh
./aggregate-teams.sh
```

Output will show:
- 📦 Clone progress for each team
- 🔍 Metadata extraction
- 💾 Commit creation
- ☁️ Push to origin

### ✅ Verify Results

```bash
# Check aggregated teams
ls -la teams/

# View report
cat AGGREGATION_REPORT.md

# Check git log
git log --oneline -10
```

## 🔧 Troubleshooting

### 🚫 Test Won't Clone

Check team repository URLs:
```bash
git clone https://github.com/org/team-alpha
```

### 🔐 Authentication Required

For private repos:
```bash
git config --global credential.helper store
# Then enter credentials on first clone
```

### ⛔ Script Permission Denied

```bash
chmod +x aggregate-teams.sh
```

## 📁 File Structure After Aggregation

```
hackathon-hec-x-20251121/
├── teams/
│   ├── team-alpha/
│   │   ├── .metadata.txt
│   │   ├── src/
│   │   └── ...
│   ├── team-beta/
│   └── team-gamma/
├── AGGREGATION_REPORT.md
├── aggregate-teams.sh
├── config.sh (your config)
└── SUBMISSION.md
```

## 💻 Common Commands

```bash
# Dry run preview
DRY_RUN=1 ./aggregate-teams.sh

# Actual aggregation
./aggregate-teams.sh

# Re-aggregate single team
rm -rf teams/team-alpha
./aggregate-teams.sh

# View specific team metadata
cat teams/team-alpha/.metadata.txt

# Check current config
cat config.sh
```

## 🎯 Next Steps

1. ⚙️ Configure `config.sh` with real team repos
2. 🧪 Test with `DRY_RUN=1`
3. 📨 Share `SUBMISSION.md` with teams
4. 🏁 At deadline, run `./aggregate-teams.sh`
5. 📊 Review `AGGREGATION_REPORT.md`
6. 👨‍⚖️ Evaluate projects in `teams/` directories
