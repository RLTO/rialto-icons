#!/bin/bash
# Set release branch
BRANCH="lib"

# I'm Antonio!
git config user.email "system@rial.to"
git config user.name "Antonio"
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch
git remote set-url origin https://${GITHUB_TOKEN}@github.com/RLTO/rialto-icons.git

# Add README
git add README.md
git commit -m "Update README.md [ci skip]"
git push

# Checkout library branch
git reset --hard origin/master
git checkout $BRANCH
git reset --hard origin/master

# Install dependencies
yarn
rm -rf dist/
rm -rf svgo/
mkdir dist/
mkdir svgo/
python3 icon_to_component.py
cp -r src/* dist/
cp package.json dist/

# Update package
rm *
rm -rf icons/ svgo/ scripts/ src/
mv dist/* .
rm -rf dist
git add -A
npm version patch -m "Release %s [ci skip]" --force

# Push the latest changes
git push -f --follow-tags origin $BRANCH