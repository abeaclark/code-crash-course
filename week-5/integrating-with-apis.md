---
title: Integrating With APIs
week: 5
---

## Integrating With APIs
It's time to practice working with APIs. We can work with APIs on the frontend or backend, so we will practice both!

### Frontend (Javascript)
Let's show off our github account to people! We will add a list of our github repositories to our personal site so that people know how good at coding we are.

We will be using the [List User Repos endpoint of the github api](https://developer.github.com/v3/repos/#list-user-repositories)

Take a few minutes to see if you can get the API to work for you in [Postman](https://www.getpostman.com/). You should be able to make a `GET` request, inputing your own github username, and see a list of your repos.

For me, the request looks like this:
```
GET https://api.github.com/users/abeaclark/repos
```
Let's look at the response. We get an array with objects inside. Each object represents one of our repos. You can look through the attributes to see all of the information that is available to you regarding that repo. Github even gives you other urls you can request to see expanded information.

Let's add this to our mobile site. To do so, we will need to use javascript. So, let's create another file called `main.js` in the root directory of our project.
```
touch main.js
```
This is where we will put the javascript we are using.

To make things more fun, let's require people to press a button in order to see our repositories (instead of just displaying them)

This means, that we will need to add a few things to our html file:
* A button that fires of a javascript request when it is pressed
* A container that will hold the repo names when we get them back

In our JS file, we will need the following:
* A function that requests our current repos from github when a button is pressed
* A function that adds the repos list to the HTML

Take a few minutes to try to do this on your own. It's ok if you get stumped for a little while (Even I did for a bit creating this demo).

Here is how I would approach it:

**index.html:**
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Abe's site</h1>
      <p>Hello everyone!</p>
    </div>
    <button id="showRepos">
    Check out my Repos!
    </button>
    <ul id="repoContainer">
    </ul>
    <script src="main.js"></script>
  </body>
</html>
```
**main.js:**
```
jQuery(document).ready(function($) {

  function getRepos() {
    $.get("https://api.github.com/users/abeaclark/repos")
      .then(function(data) {
        var repoContainer = $('#repoContainer')
        displayRepos(repoContainer, data)
      })
  }

  function displayRepos(container, repos) {
    $.each(repos, function(index, repo){
      container.append('<li>' + repo.name + '</li>')
    })
  }

  var button = $('#showRepos')
  button.on( 'click', getRepos) 
});
```

A few notes:
* I required jquery in my html document so that I could use some of Jquery's methods (some helpful methods that Javascript doesn't have)
* I wrap my javascript/jquery code in a function `jQuery(document).ready(function($) { ... })`. This makes sure that your javascript doesn't run until the browser has finished rendering the DOM. If you don't do this, you'll notice some very annoying and hard to debug errors
* I assign the elements that I want to change an `id` so that I can find them easily in my javascript
* Inside `getRepos` I use the javascript promise that jquery `$.get()` returns to wait to display the repos until after they have returned from the API call

If you are feeling excited by this activity, try adding some of these:
* Style this list to look nice
* Also show the description for each repository
* Allow the user to input a github username and retrieve the repos for that user
* Be prepared for an error in the API call. Add a [`.catch`](http://odetocode.com/blogs/scott/archive/2015/10/01/javascript-promises-and-error-handling.aspx) function that will show an error on the screen when the API request fails.

#### CORS
CORS ([Cross Origin Resource Sharing](https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/)) is a security measure that servers use. You can read up on it, but the details are a little hard to swallow at first. What you need to know is that often API requests will fail if you are serving your file directly from the file system. That is what we were doing in the example above. And example of this can be seen if you open your `index.html` from above and reveal the developer console (`<COMMAND>` `<OPTION>` `i`). We are going to make a call to another API that enforces this standard.

Paste this code into your web console (To get an inspirational quote from [this API](https://quotesondesign.com/api-v4-0/):
```
$.get('http://quotesondesign.com/wp-json/posts')
```
You should see an error come back that looks like this:
```
XMLHttpRequest cannot load http://quotesondesign.com/wp-json/posts. The 'Access-Control-Allow-Origin' header has a value 'http://localhost:8000' that is not equal to the supplied origin. Origin 'null' is therefore not allowed access.
```
This error cost me nearly 15hrs at the first hackathon I attended. One common reason for this error is that you are not serving your content from a web server, you are just opening the file directly from your computer. You can tell this because if you look in your URL bar, you will see something like this:
```
file:///Users/<USERNAME>/Desktop/test/index.html
```
When you serve files using a web server, it will look more like this:
```
localhost:8000
```
But, we really want to include and be able to test this API. How can we? Well, we need to server our files on a server.

Luckily there is a simple way to do this using a built-in python function. In your terminal, navigate into the base directory for your site (where you have `index.html`). Then run this function:
```
python -m SimpleHTTPServer
```
You will see something like this:
```
Serving HTTP on 0.0.0.0 port 8000 ...
```
That means that your site is being served on a simple web server on port 8000.

To see your site, visit [http://localhost:8000](http://localhost:8000)

Now, let's try the API command from before:
```
$.get('http://quotesondesign.com/wp-json/posts')
```
It should work! If you change the code like this, you should see the response printed:
```
$.get('http://quotesondesign.com/wp-json/posts').then(function(data){ console.log(data)})
```
You may sometimes see this error for other reasons (such as leaving out an API key), but this is always a good thing to check first!

### Backend (Python)
If we can access APIs on the frontend, why would we want to do it on the backend. There are a few reasons, but one of the most important is when you are required to use secret keys to access the API. If we include the keys on the front end, they will be accessible to anyone. This is a problem. Let's say you are using an API that costs you $0.01/request. If someone gets ahold of your key, they could make unlimited requests on your account and rack up quite a bill!

Let's practice this. We'll modify our service so that people can text the joke to a friend!

Here is an overview of how we'll do this:
* Create another Controller (Called `View` in Django) that will accept the phone number and call the Twilio API to send a text
* Add a text input and a button to our current joke page that allows someone to send us their phone number
* Add message on the front end to show that the text was sent successfully
* Add backend code to call the Twilio API inside of our controller

Let's add another url and controller to the app. We'll send the phone number and the text of the joke to this endpoint. Then, this endpoint will trigger the Twilio API to send a text message. Then it will let our frontend know that everything worked (Or send back error text if it didn't).

Create a new controller inside your `views.py` file. You can add it underneath your `Home` class. You will also need to import `HttpResponse`:
```

from django.http import HttpResponse
from django.views import View
from django.shortcuts import render
from django.http import HttpResponse
import pyjokes

class Home(View):
   ... Your Home Code here ...

class TextJoke(View):
    def post(self, request):
        print(request.POST)
        return HttpResponse("Success")
```
Then we need to add this to our `urls.py` file. Add the import and a line to the `urlpatterns`.
```
from django.conf.urls import url
from django.contrib import admin
from jokes.views import Home, TextJoke

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', Home.as_view()),
    url(r'^send-text', TextJoke.as_view()),
]
```
Great! Let's visit our new endpoint to check it out. Run your server and visit [http://localhost:8000/send-test](http://localhost:8000/send-test).

Interesting...I saw the same exact page as our based route. There was a funny joke, but not what I was hoping to see.

Why isn't it working correctly? Well, it has to do with the order that our urls are listed in. Since the urls use regex, Django starts testing the requested url from the top down in the url list. In our case, it looks at `r'^'` first (which corresponds to nothing after the base url). The problem with this is that EVERY url will match this pattern, because there isn't really any pattern to match. The way around this is the change the order of our urls. Bump the home page url down to the bottom of the list:
```
from django.conf.urls import url
from django.contrib import admin
from jokes.views import Home, TextJoke

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^send-text', TextJoke.as_view()),
    url(r'^', Home.as_view()),
]
```
Now if you refresh the page, what happens? I got a white screen. What were you expecting? I was expecting the text "Success". Hmmm... Why isn't it working?

Go back to your `views.py` file and compare the code for the `Home` view with the code for the `TextJoke` view.

One important difference is the name of the function inside the class. In the `Home` view, the function name is `get`, but in the `TextJoke` view, the function name is `post`. You probably guessed, this determines how you are able to access the endpoint. If we want to get the response we are looking for, we need to send a post request to that endpoint.

By default the web browser performs a `get` request when you type in a url. To do a post request, let's use Postman.

Do a POST request to [http://localhost:8000/send-text](http://localhost:8000/send-text)

You likely got another error (Do you hate me yet???). Mine has a lot of text output, but this is the main part:
```
<p>CSRF verification failed. Request aborted.</p>
<p>You are seeing this message because this site requires a CSRF cookie when submitting forms. This cookie is required for security reasons, to ensure that your browser is not being hijacked by third parties.</p>
```
Feel free to research about [CSRF verification](http://www.squarefree.com/securitytips/web-developers.html#CSRF). In short, it is a security measure to make sure that it is the frontend of your site talking to the backend and not someone trying to pretend they are your frontend. This is important if you are serving your html from you backend (That's what we are doing in this example).

What's the solution? Well, Let's move on to the next part of our current project, and we'll see how it is handled.

Let's edit our template to add a form that will call our API endpoint.
```
Check out this funny joke: {{ joke }}
<br>
<br>
Text yourself this joke:
<form action="/send-text/" method="post">
	{% csrf_token %}
    <label for="phone-number">Phone Number</label>
    <input id="phone-number" type="phone-number" name="phone-number">
    <input type="hidden" id="joke" name="joke" value="{{joke}}">
    <input type="submit" value="Send Text">
</form>
```
Take a look at the code above:
* The `input`s are wrapped in a `form` element. This automatically sends the data to the url in the `action` attribute
* The `action` attribute is directed to the endpoint we created and then `method` makes sure it is a POST request
* The `{% csrf_token %}` takes care of the security issue we ran into earlier (Django makes this easy)
* The `label` and `input` for the phone number make it clear to the user where to type their number
* The `input` for the joke is hidden, and the value is set to `{{ joke }}`. This means that the current joke will be sent to our endpoint as well
* The final input is of type `submit`. This means it is will be a button that submits the form and calls the `action` method

Refresh your browser on the home page. you should see the form. Give it a try!

You will be taken to the new page at `/send-text/` that shows success!

Next, sign up on [Twilio](https://www.twilio.com/) for an account. Each account comes with test account credentials, so you shouldn't have to pay any money up front.

Go to ` Phone Numbers > Tools > Test Credentials ` ([Direct Link](https://www.twilio.com/console/phone-numbers/dev-tools/test-credentials)) and take note of these two test keys; You will need them to access the API:
* TEST ACCOUNT SID
* TEST AUTH TOKEN

Install the twilio python sdk
```
pip install twilio
```
Then, add code to send a text message to your `views.py`. I broke it out into a helper method called `sendTextMessage`.
```
from django.http import HttpResponse
from django.views import View
from django.shortcuts import render
from django.http import HttpResponse
import pyjokes
from twilio.rest import Client

# Your Account SID
account_sid = "AC23ca8d59856f5a920b63242af3b8b9e2"
# Your Test Auth Token
auth_token  = "ce26ed0fb2dc5513e85d6c3ba716c1d9"
# Instantiate the twilio SDK with your values
client = Client(account_sid, auth_token)

# Helper method for sending text messages
def sendTextMessage(phone_number, body):
    return client.messages.create(
        to=phone_number,
        from_='+15005550006',
        body=body)

class Home(View):
    def get(self, request):
        context = {
            'joke': pyjokes.get_joke()
        }
        return render(request, "home.html", context)

class TextJoke(View):
    def post(self, request):
        print(request.POST)
        phone_number = request.POST.get('phone-number')
        joke = request.POST.get('joke')
        try:
            sendTextMessage(phone_number, joke)
        except:
            return HttpResponse("There was an error sending the message")
        return HttpResponse("Success")
```
Above, you will also noticed that I wrapped the `sendTextMessage` helper method in a Try/Except block. A Try Except block is a common pattern found in programming languages. You use it when you have a part of your code that may throw an error if something goes wrong. In this case, we wrap the `sendTextMessage` helper method in a Try block because if there is an error, we want to display a different message to the user. The except block determines what happens if the try block finds an error.

In this case, we want to return the text "There was an error sending the message" if there is an error calling twilio, but return "Success" if not. A great place for a Try/Except block.

Now, if you run this code and submit a valid phone number, you should see "Success" on the new screen. If you input an invalid phone number, you should see the error message.

One thing you probably noticed is that in either case, you don't actually get the text message. This is OK! Unfortunately, Twilio actually doesn't let you send a real text message with test credentials. For that you need to sign up for a real account and pay a little money. Your choice if you would like to! But, we can still practice as if the text message is being sent, because if the twilio code doesn't return an error, we know it worked!

Congrats! You've got a form that calls an API.