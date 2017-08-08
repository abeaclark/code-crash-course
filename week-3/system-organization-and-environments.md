---
title: System Organization and Environments
week: 3
---

## System Organization and Environments
The filesystem of a computer is divided into a tree. When you type `cd` into your terminal, it takes you to `~` directory, which is like home base. From there, if you type `ls`, you'll see `Desktop`, `Downloads`, etc.

As a programmer, you're going to have lots of projects. I recommend making a `projects` folder at your root directory level:
```
cd
mkdir projects
```
Then, you can make folders inside the projects folder for each of your individual projects. This is nice, because wherever you are in the terminal, you can always just type `cd ~/projects` and you are back in your projects folder.

Computers also have the concept of Environments. Environments describe what is available to a program running in a certain scope. For now, let's focus on two scopes: global and local.

Your computer has lots of programs installed at the global scope (You installed homebrew, for example, in the global scope). This means, no matter what folder you go into, you will be able to use the `brew` command in your terminal.

When you install packages for your specific projects, however, you want to install these in the local scope. Why? Here are a few reasons:
* At some point you will have many projects that use the same packages. One project may be configured to use version `2.1` of a package and another project may be configured to use version `3.2`. If you have the package installed in the global scope, both projects are required to have the same version number
* When you deploy your applications on the cloud, you will need to tell the could provider all of the dependencies your app has, so that the computer in the cloud can install them before running your app. Installing dependencies in the local scope for your projects also helps you keep a list of all of the dependencies of your app.

Different package managers handle the installation of packages in different ways. Let's look at `npm` and `pip`.

#### npm
npm is the package manager for node.js (javascript). The command to install a package and save it to your dependencies file (`package.json`) looks like this:
```
npm install -save <PACKAGE NAME>`
```
By default, this command installs the package in the local scope. It saves the files associated with the downloaded packages in a folder called `node_modules`. These packages are only accessible in the current directory.

If you do want to install a package in the global scope, then you need to add a flag like this:
```
npm install -g -save <PACKAGE NAME>`
```

Let's practice with npm:
```
# initiate your project with npm, this will create a package.json to track your packages
# just press enter until the prompt finishes to accept the default values
npm init

# install your first package, and save it to your package.json
npm install one-liner-joke --save

# You should now see a directory called `node_modules`
ls

# open the javascript REPL
node

# import the package and assign it to a variable
var oneLinerJoke = require('one-liner-joke');

# use the package
oneLinerJoke.getRandomJoke()

# exit the javascript REPL
<control> c <control> c
```

#### pip
pip is the package manager for python. By default, it installs packages in the global scope. As we learned earlier, this will start to cause problems if there are multiples of the same package required in the global scope.

For python projects, you should always use something called `virtualenv`. This stands for "Virtual Environment". Essentially, it makes `pip` believe that your current directory is the global scope, and it installs packages there.

`virtualenv` and `pip` are a bit more complicated to use than `npm`, so here are a few important commands. We'll assume we are setting up a new python project:

```
# go to your projects directory
cd ~/projects

# create a new directory for your project
mkdir test_project

# initialize the project with a virtualenv
# the `-p` flag means we want to specify which version of python to use (2.7 is installed by default on your mac, but we installed 3.6.0 with pyenv)
# venv is the name of the virtual environment you are creating
# Subsitute your user name for <USER_NAME>
# If you don't know your user name, type this command `cd && cd .. && ls`. You should see it there.
virtualenv -p /Users/<USER_NAME>/.pyenv/versions/3.6.0/bin/python3.6 venv
source venv/bin/activate

# When you type `ls` you should see a new directory called `venv`
ls

# We need to activate the virtual environment
source venv/bin/activate

# Now we are working in a virtual env, so we can install python dependencies!
pip install pyjokes

# Start up the python REPL to test out this package
python

# Import the package into your current REPL session
import pyjokes

# Now test it out
pyjokes.get_joke()

# You probably didn't laugh, that's ok. Exit the REPL
exit()

# Let's practice exiting your virtual Environment. To get back into it, we'll need to use the `source` command from above

deactivate
```
