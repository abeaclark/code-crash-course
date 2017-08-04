## Deploy your Web App:
Right now, only people on our local machine can see these jokes. Let's share with the world. We will use a service called Heroku to deploy our web app. Heroku has a free tier. Essentially they shut off your server when you're not using it to save money. This makes it take several seconds to respond when you first request a page, but after that it works great!

Before you can use Heroku, you need to [create an account](https://signup.heroku.com/login). Do that now. You may be asked for a credit card, but you will not be charged unless you elect to have a non-free plan.

Heroku actually uses a cli to control their deployments. Let's download it.
```
brew install heroku
```
Now, we need to "log in" to the local cli. This command will ask for your credentials. When you type in your password, you won't see it, but it is working. Press enter when you are done.
```
heroku login
```
Great. Now we are authenticated. You should have seen a name (mine was "thawing-woodland-65133") and a url (mine was https://thawing-woodland-65133.herokuapp.com/).
You should have also seen a git address (mine was https://git.heroku.com/thawing-woodland-65133.git). This is because heroku used git to deploy.

This means we need to initiate git for our project. It's simple:
```
git init
```
Take a look at what files are ready to be committed to git
```
git status
```
Some of these files we don't want to track in git. Why? Well, some of them can be created each time you run the program, so it is a waste of space and distracting to check them into git. To handle this, we create a file called `.gitignore` (like git ignore, but all one word) in the base directory of our project. Then, we write the file or folder names or paths that we want to exclude from git.
```
touch .gitignore
```
Open sublime and edit your new `.gitignore` file. Add a line for `venv/` since we don't want to check in our virtual environment (all you have to do is type `venv/` and save). The trailing slash let's git know it is a directory.

**.gitignore:** 
```
venv/
```
Now, check the status again
```
git status
```
You should see that `venv/` is no longer in the list of files ready to be staged.

Then, add and commit our current code:
```
git add .
git commit -m "initial commit"
```
We need to make our local git aware of the remote heroku server. We doe this by adding a remote. You should use the git url you saw when you ran `heroku create` for this variable: `<YOUR GIT URL>`.
```
git remote add heroku <YOUR GIT URL>
```
When we run our server locally, we use `python manage.py runserver`. Heroku needs to know how to run our code when we upload it. For that, heroku asks that we create a file called "Procfile". Create that file in your project directory:
```
touch Procfile
```
Now, let's put in the command to run the server that heroku will run. Add this to your `Procfile`:
```
web: python manage.py runserver "0.0.0.0:$PORT"
```
Great, now we just need to "push" our latest code up to heroku. In this example, `heroku` is the name of the remote we want to push to, and `master` is the git branch we are pushing.
```
git push heroku master
```
You likely got an error readout. Read it through and try to determine what the problem was. What would you google to try to figure out how to overcome this?

One part of my error that stood out is: 
> django.core.exceptions.ImproperlyConfigured: You're using the staticfiles app without having set the STATIC_ROOT setting to a filesystem path.

I googled that error and found that i need to add some lines to my `settings.py` file to make it work.

But, then I read more in the error and saw that you can turn off static collection on heroku. Static files are things like images that you may need to use in your app, but that are not dynamic. In our case, we're not using any photos, so let's just disable static collection

The error message told me to run this. Let's try it.
```
heroku config:set DISABLE_COLLECTSTATIC=1
```
Now try pushing to heroku again to see what happens:
```
git push heroku master
```
Hey, looks like it worked! Let's go to the url and see (visit the url that heroku gave you when you typed `heroku create`). If you can't remember the url, try this:
```
heroku domains
```
You should see it listed there.

Alternatively, you can simply type this in the terminal:
```
heroku open
```

When you visit it, you will see an error message. Darn. But, it says "check your logs for details". Let's do that:
```
heroku logs
```

I see something like: 
> at=error code=H14 desc="No web processes running" method=GET path="/favicon.ico" host=thawing-woodland-65133.herokuapp.com request_id=ea333b95-4160-4aa5-97a1-88374e2d333d fwd="96.68.172.161" dyno= connect= service= status=503 bytes= protocol=http

So I googled "No web processes running django heroku". It seems like other developers have needed to run this code. It essentially allocates 1 machine to run your app. 
```
heroku ps:scale web=1
```

Now try again... Still an error. Let's look back at the logs. Mine have a line that says something like this:
```
2017-06-15T22:16:58.029668+00:00 app[web.1]: ImportError: No module named jokes
```
This is because we forgot an important step! We added a package to our django project, but didn't record it in our `requirements.txt` file. Heroku only installs what we have specified in our requirements.txt file, so it has no idea that we need the module called jokes! 

Do you remember the command to run to update our `requirements.txt` file?
```
pip freeze > requirements.txt
```
Make sure you now add and commit this to git
```
git add .
git commit -m "add jokes module to requirements.txt"
```
Great, try to deploy again and see what happens
```
git push heroku master
```
Now you should see a Django error at the page. Yay! (This means that django launched successfully!)

My error says:
> DisallowedHost at /

Django helps to make sure your site can only run at domains you intent. In your settings.py file, there is a setting called `ALLOWED_HOSTS`. By default it is empty. Change it too look like the following. The asterisk means allow any host (you can change later for better security)
```
ALLOWED_HOSTS = ['*']
```

Add and Commit your code. Then push to heroku. It should work!

You have just deployed a dynamic web app that will show a different joke every time you refresh. Congrats!

