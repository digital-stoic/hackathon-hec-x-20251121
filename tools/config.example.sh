#!/bin/bash

# 🎯 Example Configuration for Hackathon Team Aggregation
# 📝 Copy this file to config.sh and update with your actual values

# 🏢 GitHub organization or username where team repositories are hosted
export GITHUB_ORG="your-github-org"

# ⏰ Deadline (for logging and metadata)
export DEADLINE="2025-11-21 18:00:00"

# 👥 Team repositories - format: "team-name:repo-url"
# 🔗 Replace with actual team repository URLs from Lovable/GitHub
# Using HTTPS for public/anonymous cloning (recommended for Lovable repos)
export TEAMS=(
    "team-alpha:https://github.com/${GITHUB_ORG}/team-alpha-repo"
    "team-beta:https://github.com/${GITHUB_ORG}/team-beta-repo"
    "team-gamma:https://github.com/${GITHUB_ORG}/team-gamma-repo"
)

# 💡 Teams in different organizations:
# export TEAMS=(
#     "team-alpha:https://github.com/team-alpha-org/hackathon-project"
#     "team-beta:https://github.com/team-beta-org/hackathon-project"
#     "team-gamma:https://github.com/another-org/team-gamma-app"
# )

# 🔐 Private team repos (with tokens):
# export TEAMS=(
#     "team-alpha:https://USERNAME:TOKEN@github.com/org/team-alpha"
# )

# 📝 Note:
# - Team repos use HTTPS (public/anonymous clone)
# - Aggregator repo uses SSH (authenticated push with SSH keys)
# - Set SSH_AUTH_SOCK in your terminal for SSH authentication

# 🎭 Optional: Dry run mode (1 = preview without committing, 0 = normal)
export DRY_RUN=0