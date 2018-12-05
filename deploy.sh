#!/bin/bash
# Set release branch
BRANCH="lib"

# I'm Antonio!
git config user.email "system@rial.to"
git config user.name "Antonio"
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch
git remote set-url origin https://${GITHUB_TOKEN}@github.com/RLTO/rialto-icons.git

# Checkout library branch
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

# Update icon library package
rm *
rm -rf icons/ svgo/ scripts/ src/
mv dist/* .
rm -rf dist
npm version patch -m "Release %s [ci skip]" --force
git add -A
git push -f --follow-tags origin $BRANCH

# Add README and bump package.json version
git reset --hard origin/master
git checkout master
npm version patch --force --no-git-tag-version
node scripts/build.js
git add README.md package.json
git commit -m "Update README.md and library version [ci skip]"
git push