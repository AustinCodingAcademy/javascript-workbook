# Austin Code Academy
## HTML Intermediate Tests

### Quickstart
#### Set up
1. Be sure to have [Node.js](https://nodejs.org/) installed.
2. Type `sudo npm install -g mocha` in your terminal

#### Run a single test
1. Navigate into individual lesson folder (eg.`cd 00LessonZero/`)
2. Run `mocha` in your terminal to run the tests.
3. Edit lesson script (eg. _LessonZero.js_) to make the tests pass!

#### Run all tests
1. Simply run `npm test`

### Longstart
#### Let's pass some tests!
Tests are a great way to make sure you code works the way you planned it would, and to make sure you don't break something in the future. We will be using them to test our understanding of the lesson.

1. Our test repository is located at https://github.com/AustinCodingAcademy/HTMLIntermediateSection2Tests.
2. Click the 'Fork' button (choose your account if prompted).
3. Copy the HTTPS clone URL
4. In your terminal, navigate (using `cd`) into a directory where you want to start keeping your repositories.
5. Clone your new repository by typing `git clone <forked clone URL>` (without carets "<>", ditto for future examples)
![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
6. Add the base repository as an upstream `git remote add upstream git@github.com:AustinCodingAcademy/HTMLIntermediateSection2Tests.git`

6. Navigate into the directory `cd HTMLIntermediateSection2Tests`
7. Type `sudo npm install -g mocha` in your terminal. Enter your password if prompted.
8. Navigate into 00LessonZero in your terminal (`cd 00LessonZero/`)
9. Run `mocha`
10. Watch the test fail :(
11. Open `LessonZero.js`.
12. Change the `return false;` statement to `return true;`
13. Run `mocha` again and watch the test pass!

#### Tips
1. Below each comment with the specs, try to do what it is asking. Be sure to always `return` your answer.
2. You can also look at the tests in `test/LessonOneTest.js` to try and read the test examples.
3. Run `mocha` after each attempt to see if the tests pass.

#### Push to Github and create a PR
1. When finished, commit your changes and push to GitHub
```bash
git status
git add LessonZero.js
git commit -m "Lesson Zero Tests passing!"
git push origin master
```
.2. Now go to your forked repository on GitHub. A little yellow box should have popped up asking you to make a Pull Request. Click to review.

.3. Click "Create Pull Request"

.4. Everytime you make a change and push to GitHub, this PR will automatically update. No need to do it more than once.

#### Get latest test updates
1. To get the latest test updates, be sure to have a "clean working directory" by committing or removing all of your changes. You check for a "clean working environment" by running `git status` and makeing sure no files show up.
2. Run `git pull upstream master`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)
