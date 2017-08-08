---
title: Your first Web App
week: 3
---

## Your first Web App
Great, now let's make this web app useful for something!

We'll create a simple app that displays a different joke every time you refresh the page.

First, let's create an "app" inside django. An app is just a grouping for your code. They are designed to help separate code within your project into chunks based on function. Today, we only are going to have one major purpose for our project, but let's create a separate app anyway.

```
# This assumes you are in the base directory of your project
# Let's make a folder for our app
mkdir jokes

# create the `init` file that we need in every folder
touch jokes/__init__.py

# create a file for our views
touch jokes/views.py
``` 
create a folder and file for our template:
```
mkdir jokes/templates
touch jokes/templates/home.html

```
We're going to need the jokes package from earlier
```
pip install pyjokes
```
Cool, now let's write some code to make a useful app.

Open your app files in sublime
```
subl .
```
We need to add a view to our `views.py` file:
```
from django.views import View
from django.shortcuts import render

class Home(View):
    def get(self, request):
        context = {
            'joke': 'This is my joke!'
        }
        return render(request, "home.html", context)
```
* That code creates a class called `Home` that inherits from Django's class called `View`.
* Then, we create a function called `get` that will perform the logic we need to return a page to the user. The function is called `get` because when you type a webpage into your browser, you are actually doing a [`GET`](https://www.w3schools.com/tags/ref_httpmethods.asp) request to the server.
* We define a dictionary called `context`. These are all of the variables we want to have access to inside of our template.
* The template is rendered using the `render` function provided by django.

Add this view to our `urls.py` file. You need to import `Home` from `jokes.views`:
```
from django.conf.urls import url
from django.contrib import admin
from jokes.views import Home

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', Home.as_view()),
]
```

Update your `settings.py` so that it knows you added a new app to your project. Remember the variable you saw in `settings.py` called `INSTALLED_APPS`? Let's add the name of our new app to the end of the list. Mine looks like this:
```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'jokes',
]
```
Now, try it out!
```
python manage.py runserver
```
Now visit [http://localhost:8000](http://localhost:8000). You should see an error page that says something like:
`TemplateDoesNotExist at /`.

Hmmmm... why isn't this working? Oh, it's because we haven't told django where to find our templates.

You probably remember that when we looked at our `settings.py` file, we saw there was a variable called `TEMPLATES`. It has a lot of configuration in it, but the line we really care about is:
```
'DIRS': [],
```
This variable tells django where to find our templates. BUT... it's empty. So let's fill it in with the path to the templates directory we created.
```
'DIRS': ['jokes/templates'],
```
Save this and refresh the page. Aha! A blank page (better than an error!).

Add some text to our template so that we can make sure it is working. Add the following to `home.html`:
```
Check out this funny joke: What did the Pirate say on his 80th birthday? ... "Aye Matey!"
```

Save it and refresh the page. You should see your joke. Congrats!

People are going to get bored if they see that joke every time. Let's make it dynamic.

Take a minute to think about how we could do this? What would you do?

Let's add some logic to our view to get a joke and set it to a variable in `context`. Edit your view to look like this:
```
from django.http import HttpResponse
from django.views import View
from django.shortcuts import render
import pyjokes

class Home(View):
    def get(self, request):
        context = {
            'joke': pyjokes.get_joke()
        }
        return render(request, "home.html", context)
```

Now, we need to be able to access the variable `joke` in our view. Luckily, it's already available, we just need to know how to get it.

Django templates use a templating language. This is simply a way to imbed variables and logic into an html document. In django, multi-line functions use a syntax like this `{% CODE_HERE %}` and variables are accessed like this `{{ variable }}`.

For now, let's just edit our template to use the variable we are passing in. Change your `home.html`:
```
Check out this funny joke: {{ joke }}
```
The `{{ joke }}` in our template now will pull from the context we are passing into our view.

Save and refresh. A new joke!

Refresh again, another new joke! You just created a dynamic website. Nice!
