[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7569591264e941f2b366c2bb3c8ee595)](https://www.codacy.com/app/AustinCodingAcademy/javascript-workbook?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AustinCodingAcademy/javascript-workbook&amp;utm_campaign=Badge_Grade)

![](http://static1.squarespace.com/static/538f3fcde4b05c5fecc7a40e/t/538f48a4e4b00d94e8c253b3/1453396632576/?format=400w)

# Javascript Workbook

## Claiming your workbook
1. Click the 'Fork' button (choose your account if prompted).
1. If you haven't set up your SSH keys yet, follow these helpful [instructions](https://help.github.com/articles/generating-an-ssh-key/)
1. Copy the SSH clone URL (don't use the default HTTPS URL) from your forked repository
1. In your terminal (or in git bash, for Windows people), navigate (using `cd`) into a directory where you want to start keeping your repositories.
1. Clone your new repository by typing `git clone <forked clone URL>` (the SSH URL you copied above)
![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Now go into the new directory by using `cd javascript-workbook`
1. Add the base repository as an upstream `git remote add upstream git@github.com:AustinCodingAcademy/javascript-workbook.git`
1. Check the configuration of your remotes with `git remote -v`, it should look very similar to this (except it'll be YOUR username, not `tjefferson08`)
```
19:04 $ git remote -v
origin  git@github.com:tjefferson08/javascript-workbook.git (fetch)
origin  git@github.com:tjefferson08/javascript-workbook.git (push)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (fetch)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (push)
```

### Push to Github and create a PR
1. From your project directory, run `npm install` to tell NPM to install all the node modules we use in this class
1. Use Atom (or another editor) to make the change to the JS function indicated in `test/00LessonZeroTest.js`
1. Make sure the tests pass: run `npm test test/00LessonZeroTest.js` (look in the output for "1 passing")
1. When you're finished, commit your changes and push to GitHub using the following commands:

  ```bash
  git status
  git add test/00LessonZeroTest.js
  git commit -m "Lesson Zero Tests passing"
  git push origin gh-pages
  ```
1. Now go to your forked repository on GitHub (at https://github.com/your-username/javascript-workbook). A little yellow box should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically update. No need to do it more than once.

#### Get latest test updates
1. To get the latest code/homework/test updates, be sure to have a "clean working directory" by committing or removing all of your changes. You check for a "clean working environment" by running `git status` and making sure no files show up.
1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

## Running Tests
Tests are a great way to make sure you code works the way you planned it would, and to make sure you don't break something in the future. We will be using them to test our understanding of the lesson. It's also our main way to assign grades for an assignment.


### Run a single test
To run a single test on an app, test, or a kata, simply run `npm test apps/01PigLatin.js`, etc. If you've installed mocha globally (`npm install -g mocha`), you could run `mocha` directly, e.g. `mocha homework/01LessonOne.js`
