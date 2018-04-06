BRANCH="lib"
# I'm Antonio!
git config user.email "system@rial.to"
git config user.name "Antonio"
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch
git status
# Add README
git checkout master
git add README.md
git commit -m "Update README.md [ci skip]"
git push
# Checkout library branch
git stash
git checkout $BRANCH
git rebase master
git stash pop
# Update package
git add -f lib/
npm version patch -m "Release %s [ci skip]" --force
# Push the latest changes
git push -f --follow-tags origin $BRANCH