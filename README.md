[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages)

![](http://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png)
# Austin Coding Academy

## JavaScript Workbook

### Claiming your workbook
1. Click the 'Fork' button (choose your account if prompted).
1. Copy HTTPS URL from your forked repository
1. In your terminal (or in git bash, for Windows people), navigate (using `cd`)
into a directory where you want to start keeping your repositories.
1. Clone your new repository by typing `git clone <forked clone URL>` (the HTTPS
URL you copied above)
  ![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Now go into the new directory by using `cd javascript-workbook`
1. Add the base repository as an upstream
`git remote add upstream https://github.com/AustinCodingAcademy/javascript-workbook.git`
1. Check the configuration of your remotes with `git remote -v`, it should look
very similar to this (except it'll be YOUR username)

```bash
$ git remote -v

origin  git@github.com:username/javascript-workbook.git (fetch)
origin  git@github.com:username/javascript-workbook.git (push)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (fetch)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (push)
```

### Push to Github and create a PR
1. From your project directory, run `npm install` to tell NPM to install all the
node modules we use in this class
1. Use Atom (or another editor) to make the change to the `index.html` file in
the top level directory. Change `Hello World!` to `Hello <your name>!`
1. When you're finished, stage your file, commit your changes, and push to
GitHub using the following commands:
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```

1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.

#### Get latest workbook updates
1. To get the latest code/homework/test updates, be sure to have a "clean
working directory" by committing or removing all of your changes. You check for
a "clean working environment" by running `git status` and making sure no files
show up.

1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

### Running the apps
Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests
Tests are a great way to make sure you code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run a the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter
Simply run `npm run lint`

#### Running the Server
1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
