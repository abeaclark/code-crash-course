---
title: Use Github
week: 2
---

## Use Github
Now, you have your first functioning piece of code that you can show the world. We should use git to make dealing with this code easier, and more fool-proof.

Why git? Git is a version control system for programmers. It is helpful when you are the only one working on a project, and it is ESSENTIAL when multiple people are working on a project. Git is the language / framework you use to version control your projects, github is a cloud-based host that will put your code online for you and others to access.

Let's get started with git.
First, we'll set up git for you overall system. Include your github username and the email you use with github in these commands:
```
git config --global user.name "abeaclark"
git config --global user.email myEmail@gmail.com
```
Move into the base directory of your site (this is where your `index.html` is). Then, initiate git
```
git init
```
You should see a message saying it was initialized. This means that git is now tracking changes in your repo. 

Let's see what you have changed and not saved so far
```
git status
```
You should see a list of all of the files that are in your current directory. This is because you haven't "pressed save" (called "committing your code" in git jargon). So, we want to save our work.

Git allows you to selectively save some of your work. This is good if you made changes to several files, but only feel confident in the changes you made to some of them. You can choose to save only those files.

The way you tell git you want to save a file is by using the `git add <PATH TO FILE>` command. In our case, we want to save ALL of our files (since this is our first commit). We do this with the following command (Note that `.` means "all files in the current directory"):
```
git add .
```
Take a look at what this did for us:
```
git status
```
Now you should see something that says "Changes to be committed" with a list of your files. Great! We just told git that we want to save those files. Now it's time to actually save them. We do this by "committing" our code. A commit is a save point. To make life easier on developers who want to know what you did since the last time you saved, we are required to add a commit message. This describes what you did in the code. We can specify our message, and commit our code with this command:
```
git commit -m "Initial Commit"
```
The `-m` is called a flag. The flag means, I'm going to type the commit message right here in the command line. I chose to name the commit "Initial Commit" because it is the first time we are saving.

Now, let's see what the status is.
```
git status
```
Great, nothing to commit, we have saved all of our current work.

Now, earlier we talked about github. Github allows you to publish your code online so that other people can use it, or as a way to collaborate with a team. Let's push our code there.

First, we need to go to github.com and create a "repository" for our code. To do this, navigate to your profile, then the "Repositories" tab, then select "Create New Repository". (You may find another path that works for you, the key is, create a new repository). You can name it whatever you want, I'll name mine "first_project". (Note that I do not use spaces in my naming, this makes life MUCH easier for programmers). You can leave the rest of the settings as github has them by default.

Once you have created a blank repository, we need to have a way to "push" our local code into our cloud-based repository. To do this, copy the clone url for the git repository (should end in `.git` and is often behind the "Clone or Download" button). Mine looks like this: `https://github.com/abeaclark/first_project.git`.

Return to your terminal. We need to tell our local git repository that our cloud git repository exists.
```
git remote add origin <GIT URL>
```
This command has several parts:
* `git` uses the git command line tool
* `remote` tells git you are giving it a location to find a remote version of the git repository
* `add` tells git you are adding a new remote location (currently there are none)
* `origin` is what you name the cloud version found on github ("origin" is the conventional name, but can be whatever you like).
* `<GIT URL>` tells git which url to point at

Now git knows that it can communicate with your github repository ("repo" for short). Let's push our current code there.

```
git push origin master
```
This command pushes your current code to github. Did you notice the word `master` in the command? This is because git has the concept of multiple "branches". A branch, you can think of as one version of the code that someone is working on. The "master" branch is most up-to-date version of the code.

If you return to the github UI, you should now see that your code has appeared in the repo. Yay!

#### Github Integrations
One really nice feature of github is that it can integrate with lots of different services to make your life easier. One of them is Netlify! We can link github and netlify so that whenever you push code to master, it will automatically deploy that code to your live site. This is much nicer than having to drag and drop the files each time.

If you return to Netlify, you should see an option to create site from git. When you press this, it will walk you through oAuth-ing into github and then selecting the correct repository. After you get this set up, every time you run the command `git push origin master`, it will update your current site to reflect the code changes.