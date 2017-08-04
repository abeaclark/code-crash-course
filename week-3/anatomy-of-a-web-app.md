## Anatomy of a Web App
Things are getting exciting. We are going to build our first web app. Last week you deployed some static HTML an CSS. A web app is different because it is hooked up to a database, can serve dynamic content, and do lots of other cool things.

[Django](https://www.djangoproject.com/start/) is the framework we will use to build our web app. It is based on python. Out of the box, it comes with lots features that make it fast to build a functioning web app.

Let's install Django in the global scope so that you can access it's command-line tool to create a new project
```
cd ~/projects
# pip3 is the package manager for python3, since we'll be using python3 for django, let's install it with pip3
pip3 install Django
```

Great. Now you can access the Django [cli](https://en.wikipedia.org/wiki/Command-line_interface). We'll use it to initiate a new Django project:

```
# the name of our project is `first_django_app`
django-admin startproject first_django_app

# now, if you use the `ls` command, you will see a new directory called `first_django_app`
ls

# let's take a look inside
cd first_django_app

# before we forget, let's create a virtual environment for our new project and activate it
# Subsitute your user name for <USER_NAME>
# If you don't know your user name, type this command `cd && cd .. && ls`. You should see it there.
virtualenv -p /Users/<USER_NAME>/.pyenv/versions/3.6.0/bin/python3.6 venv
source venv/bin/activate

# We'll need to reinstall Django in the local scope so that the app has access to it
pip install django

# Let's also create a requirements.txt file to track our dependencies
touch requirements.txt

# Let's write all currently installed packages to our requirements.txt file
# This command is super handy, you should update your requirement.txt file whenever you 
# install a new package (sad that it doesn't do it for you!)
pip freeze > requirements.txt
```

Great, we're setup to see this thing run. Do the following:
```
python manage.py runserver
```
You should see an output like this:
```
$ python manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).

You have 13 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

June 06, 2017 - 20:14:29
Django version 1.11.2, using settings 'first_django_app.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
You probably noticed the warning message. We'll need to take care of that, but first, let's see if our web server is running!

Go to [http://localhost:8000](http://localhost:8000).

You should see a default Django page confirming that your web server is running. Congrats!

Now, let's dive under the hood and start getting familiar with the code that was generated for us.
```
# You should have configured the subl shortcut during the setting up your dev machine step
# The period means "current directory". This command opens the current directory file structure
# in a sublime text editor
subl .
```
Great, now you should have Sublime open with a folder structure that looks something like this:

```
first_django_app/
  first_django_app/
    __init__.py
    settings.py
    urls.py
    wsgi.py
  venv/
  db.sqlite3
  manage.py
  requirements.txt
```
Follow along by looking at the code in each file while I describe their use below:

**__init__.py**:
In Django, each folder is also a `module`. This file, initializes the module. Many times, it will be blank. Wait... why do we need a blank file? Well, this signals to Django that we want the contents of the folder structure to be accessible to the app. It gives us some handy shortcut, like when we are importing code into separate files, we can write is as `import first_django_app.urls.py` instead of having to go and find that file in our filesystem. You can do interesting things with these files, but for now just know that you need it in every new folder you make in a Django app!

**settings.py**:
This file holds the global settings for your app. Lets look at some of the important pieces:
* DEBUG - This toggles whether a "Stack Trace" will be shown when there is an error in your app. For example, if you go to a url of your app, and something goes wrong in the code, it will display useful debugging information about where the error occurred, and what the environment was like at the time. It is very important that this is turned off when you deploy your app, otherwise the world will be able to access sensitive information.

* INSTALLED_APPS - This allows you to control which "apps" you are using in your django project. For now, we'll stick with the basic config.

* MIDDLEWARE_CLASSES - When your server receives requests from the web (for example, someone types in your url), your server automatically does a series of security checks and other operations, like formatting the data. These functions are called `middleware`. The items in this list are the middleware layers Django uses by default.

* TEMPLATES - Django is capable of sending back HTML, CSS, and other assets when a user requests a url. By default, Django uses templates to define what to send back to the user.

* DATABASES - By default, Django uses a database called sqlite3. This is a basic, lightweight database. It won't work for production, but it works for quick testing. Other common options are postgres or mysql. If you wanted to use one of those databases, you would change the configuration here.

**urls.py**:
This file controls which `routes` are exposed to the world, and what code should be executed when a user requests a route. A route is just a url, in a specific pattern. For example, `www.mysite.com/info`, will lead to a different page than `www.mysite.com/pricing`.

The first argument in each url is a regex (a function that will identify specific patterns) that will match the correct route. The second argument is a mapping of where to find the code to execute when the pattern is matched.

So, for `www.mysite.com/pricing`, you will need a url function like this `url(r'^pricing/', <CODE_LOCATION>)` where code location is the code you want executed. That code should return the response you want to show to a user when they visit that url.

**wsgi.py** - We'll skip this for now, this file is used when you deploy the app.

**manage.py** - This file give you access to lots of commands that django comes with out of the box. You run commands by typing `python manage.py <COMMAND_NAME>` in the terminal. You already used one of these commands when you ran the server: `python manage.py runserver`. Other helpful command we will use include: `makemigrations`, `migrate`, `shell`.

**db.sqlite3** - Remember how we said sqlite3 is a lightweight db, not used for production. This file is where that database saves it's data. It will be a binary file, so you can't really read it.

**requirements.txt** - You should already know what this file does, it tracks the packages installed in your app. You can manually update it with `pip freeze > requirements.txt`
