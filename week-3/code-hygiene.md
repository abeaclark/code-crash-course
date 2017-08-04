## Code Hygiene
We previously talked about keeping your code clean by using single-purpose functions as much as is reasonable. Now, let's talk about code formatting. Just like we have rules for indentation, spacing, etc. in English, coding languages also have these rules. Each language has different guidelines.

For example, HTML is a tree structure. The best practice is to indent each level of the tree. Compare the following:

BAD:
```
<div class="container">
<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png">
<div id="caption" class="container">
The google logo
</div>
<div>
<div>
Hello
</div>
</div>
</div>
```
GOOD:
```
<div class="container">
  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png">
  <div id="caption" class="container">
    The google logo
  </div>
  <div>
    <div>
      Hello
    </div>
  </div>
</div>
```
The second example is much easier to read, isn't it? This is a VERY short HTML file and it already gets hard to read without indentation.

In Python, tabbing is even more important because the tabbing determines where classes, functions, etc. start and end.

This would result in an error:
```
def my_function():
print("hello")
```
But this works well:
```
def my_function():
    print("hello")
```
These guidelines are easy to ignore when you are beginning. It seems like lots of effort to make sure things are formatted correctly. Take the time to learn the formatting and use it.

One of the best ways to learn (in my opinion) is to install a "[linter](https://en.wikipedia.org/wiki/Lint_(software))" for Sublime Text. This will highlight your code when it sees something out of order. It's a bit like spell-check for code.

:white_check_mark: Install a linter in your sublime text:
* [Install Sublime Linter](http://sublimelinter.readthedocs.io/en/latest/installation.html#installing-via-pc). This is the general package that lets you "lint" your code. We'll now need to install language-specific linting libraries
* [Install the flake8 plugin](https://github.com/SublimeLinter/SublimeLinter-flake8). Use the option for python3 because that is the version of python we will prefer for applications going forward.
* Lets make sure everything is working. Save a file called `test.py`. Open the file in sublime and paste the ugly python code from above that is not indented into the file. You should see some highlighting indicating the error. If you put your cursor on the line, you should see a hint at the bottom showing what is wrong.