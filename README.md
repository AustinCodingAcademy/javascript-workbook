![](http://static1.squarespace.com/static/538f3fcde4b05c5fecc7a40e/t/538f48a4e4b00d94e8c253b3/1453396632576/?format=400w)
# Intermediate Workbook

## Claiming your workbook
1. Click the 'Fork' button (choose your account if prompted).
1. If you haven't set up your SSH keys yet, follow the instructions helpful [instructions](https://help.github.com/articles/generating-an-ssh-key/)
1. Copy the SSH clone URL (don't use the default HTTPS URL)
1. In your terminal, navigate (using `cd`) into a directory where you want to start keeping your repositories.
1. Clone your new repository by typing `git clone <forked clone URL>` (without carets "<>", ditto for future examples)
![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Add the base repository as an upstream `git remote add upstream git@github.com:AustinCodingAcademy/intermediate-workbook.git`

### Push to Github and create a PR
1. Make the change to the JS function indicated in `test/00LessonZeroTest.js`
1. When finished, commit your changes and push to GitHub

  ```bash
  git status
  git add test/00LessonZeroTest.js
  git commit -m "Lesson Zero Tests passing!"
  git push origin gh-pages
  ```
1. Now go to your forked repository on GitHub. A little yellow box should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Everytime you make a change and push to GitHub, this PR will automatically update. No need to do it more than once.

#### Get latest test updates
1. To get the latest test updates, be sure to have a "clean working directory" by committing or removing all of your changes. You check for a "clean working environment" by running `git status` and making sure no files show up.
2. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

## Running Tests
Tests are a great way to make sure you code works the way you planned it would, and to make sure you don't break something in the future. We will be using them to test our understanding of the lesson.


### Run a single test
To run a single test on an app, test, or a kata, simply run `npm test apps/01PigLatin.js`, etc.

### Run all tests in the `test/` directory
Simply run `npm test` in the project directory.
