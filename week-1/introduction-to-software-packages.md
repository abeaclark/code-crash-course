## Introduction to Software Packages
Thank goodness, you don't have to start from scratch every time you write software. Developers have written and published lots of tools to help you along the way. Lots of times, for simple projects you can simple string together pieces of code that others have written!

You have likely heard of lots of languages (Python, Java, Javascript, Go, Ruby, R, etc.). The list could go on and on. Each language generally has the same basic functionality, but different benefits and tradeoffs. Typically the core language will contain functionality that is needed for almost any program (like logic operators, math, etc.).

Then, people write "packages" that you can add to the language that do specialized tasks (Like handling interactions with a database, sending an email, encrypting passwords, etc.). This way, any user of the language doesn't have to have all of the code to do every possible thing under the sun, but can mix and match packages to suit their needs.

Each language also has a package manager. The role of the package manager is to make sure that you know the version of each package you are using at any given time, as well as giving you a simple way to receive update to that package or add new packages.

#### Common Languages and their package managers:

**Language** | **Package Manager** | **File name**
--- | --- | ---
Javascript | npm | `package.json`
Python | pip | `requirements.txt`
Ruby | gems | `gemfile`
obj C, swift | cocoapods | `podfile`

We will be using Python and Javascript primarily in these lessons. Do you remember seeing some of these package managers during the `Setup your dev machine` step?

Here is an [example package.json file](https://github.com/sahat/hackathon-starter/blob/master/package.json) from a node.js app. node.js is how you run javascript when not in the browser.

:white_check_mark: Do the following:
* Read over the file, what do you notice?
* Look at the `dependencies` section. Google a few of the names in this format `node.js github <PACKAGE NAME HERE>`. See if you can figure out what several of the packages do based on the README in each repository you find.

Packages are typically "Open Source", which means that they are maintained and developed by a community of developers. The code is often hosted on github for development. Then, it is periodically "pushed" to the package management service (`npm`, `pip`, etc.). Each time the developer pushes new code, she adds a new version tag. Version tags use the [Semantic Versioning spec](http://semver.org/).

The numbers you see next to each package refer to the version of the package you want to use in the app.
