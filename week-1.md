# Week 1

## Setup your dev machine

Software development makes use of lots of tools that don't come standard on most computers. Many tutorials you will find will say things like "install git", "use brew to install the cli", or something similar. It is easiest if you can set up many of these things up front, that way you are ready when you need them.

I recommend following [this guide](https://github.com/nicolashery/mac-dev-setup) if you are a Mac user.
* Feel free to skip: Consolas, Vim, IPython, Numpy and Scipy, MySQL Workbench, LESS, MongoDB, Redis, Elastic Search

## Sign up for Github

[Github](https://github.com/) -- Github is a cloud-based, free (for public repositories) place for you to store your code. You can collaborate with other developers on projects. You can also find LOTS of very helpful "Packages" that other developers have built that help you accomplish specific tasks in the language of your choice.

### Work through the following resources

	* [What is Github](https://guides.github.com/activities/hello-world/)
	* 

## Software packages
Thank goodness, you don't have to start from scratch every time you write software. Developers have written and published lots of tools to help you along the way. Lots of times, for simple projects you can simple string together pieces of code that others have written!

You have likely heard of lots of languages (Python, Java, Javascript, Go, Ruby, R, etc.). The list could go on and on. Each language generally has the same basic functionality, but different benefits and tradeoffs. Typically the core language will contain functionality that is needed for almost any program (like logic operators, math, etc.).

Then, people write "packages" that you can add to the language that do specialized tasks (Like handling interactions with a database, sending an email, encrypting passwords, etc.). This way, any user of the language doesn't have to have all of the code to do every possible thing under the sun, but can mix and match packages to suit their needs.

Each language also has a package manager. The role of the package manager is to make sure that you know the version of each package you are using at any given time, as well as giving you a simple way to recieve update to that package or add new packages.

#### Common Languages and their package managers:
*Language* | Package Manager | File name
Javascript | npm | `package.json`
Python | pip | `requirements.txt`
Ruby | gems | `gemfile`

We will be using Python and Javascript primarily in these lessons. Do you rember seeing some of these package managers during the `Setup your dev machine` step?

## The command line
Your Mac comes with a program called `Terminal`. You also just installed a program called iTerm. These both give you access to the terminal or "shell" of the computer. This gives you direct access to the Linux or Unix that is running your machine. Everything you can do in the GUI, you can do in the terminal. 

For example, if I want to access the file system, I can do so. Try the following code in your terminal. (Lines with a `#` are comments)

```
# cd stands for 'change directory'. Without a following argument, it gets you back to your base directory, AKA: ~
cd

# ls shows you all of the files that are at the current level of the file tree
ls

# cd <NAME> brings you into a different folder, in this case "Desktop"
cd Desktop

# Now you should see different files and folders then before (you will recognize them as being on your desktop)
ls

# chose a file (not a folder) and type:
open <FILENAME_HERE>

```

This is just an introduction to the command line. This feel VERY unnatural at first, but over time it will become a huge time saver and a basic tool to being a developer.

Work through this course from codecademy: [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line)


