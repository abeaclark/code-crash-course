---
title: Templating Languages
week: 4
---

## Templating Languages
Templating languages help you include variables and logic inside a shell of static content. For example, on your web site, lot's of your content will be the same on every page, and lots of the content on a given page won't change depending on the user. But, there are certain elements you want to update, such as the user's name when they log in. Templating give you a way to do this.

Here is an example of some HTML that we could use on a site. This is the page a user sees after they login:
```
<!DOCTYPE html>
<html>
  <body>
    <div>
      Bluefin Retail
    </div>
    <h1>Welcome, Jason</h1>
    <p>This is your profile page</p>
    <p>Name: Jason Willis</p>
    <p>Phone Number: 3604640368</p>
    <p>Birthday: 02/13/1990</p>

    <h3>Past Transactions:</h3>
    <ul>
      <li>01/13/2017, $45.00</li>
      <li>09/27/2016, $15.00</li>
      <li>04/12/2016, $75.00</li>
    </ul>
  </body>
</html>
```
So, one approach could be to hand code a different file like this for each user. Then update the file by hand when the user makes a change. I hope you are cringing!

Templating makes this easier. Templating let's us use variables in our views so that we can add in content dynamically.

For this example, lets assume that our controller passes in the following as context (The controller, of course got the data from the model for the given user):
```
context = {
  'first_name': 'Jason',
  'last_name': 'Willis',
  'phone_number': '3604640368',
  'birthday': '02/13/1990',
  'past_transactions': [
    { 'date': '01/13/2017', 'value': '$45.00'},
    { 'date': '09/27/2016', 'value': '$15.00'},
    { 'date': '04/12/2016', 'value': '$75.00'},
  ]
}
```
Take a look at the data. You'll notice that it includes a few characteristics about the user, as well as a list of past transactions. Let's plug this data into our template using django's templating language. Then we can talk about what each part does.
```
<!DOCTYPE html>
<html>
  <body>
    <div>
      Bluefin Retail
    </div>
    <h1>Welcome, {{first_name}}</h1>
    <p>This is your profile page</p>
    <p>Name: {{first_name}} {{last_name}}</p>
    <p>Phone Number: {{phone_number}}</p>
    <p>Birthday: {{birthday}}</p>

    <h3>Past Transactions:</h3>
    <ul>
    {% for transaction in past_transactions %}
      <li>{{transaction.date}}, {{transaction.value}}</li>
    {% endfor %}
    </ul>
  </body>
</html>
```

Take a look at the code. Can you recognize what is going on?

There are two types of brackets in use:
* `{{` `}}` -- These brackets are for single-line functions, like simply accessing a variable that is passed in.
* `{%` `%}` -- These brackets are for multi-line functions, like a for loop. You'll notice that they come in pairs; there is an opening line and a closing line. The code above uses a loop to iterate through the transactions and create elements to represent them. Even though this line `<li>{{transaction.date}}, {{transaction.value}}</li>` only appears once in the code, it will be displayed three times on the page because it will be rendered once for each item in the `past_transactions` array.

The last major important thing that templates enable is using fragments. Fragments are snippets of template code that appear in multiple places in your site. Instead of having to write that code in every template, you can include it in one fragment and use that fragment in other template.

An example of this would be the title bar of a site. in the example above, let's consider these lines:
```
<div>
 Bluefin Retail
</div>
```
Let's say we have multiple pages in this site and we want the title to be displayed on all of them. We should make it a fragment!

To do this, we would create a file called `title_bar_fragment.html` and save it in our templates directory. Then, we will add the title bar code to that file. Lastly, we'll adjust our logged in template to include the title bar fragment. It would look like this when we're done:

**title_bar_fragment.html**
```
<div>
 Bluefin Retail
</div>
```

**logged_in.html**
```
<!DOCTYPE html>
<html>
  <body>
    {% include "title_bar_fragment.html" %}
    <h1>Welcome, {{first_name}}</h1>
    <p>This is your profile page</p>
    <p>Name: {{first_name}} {{last_name}}</p>
    <p>Phone Number: {{phone_number}}</p>
    <p>Birthday: {{birthday}}</p>

    <h3>Past Transactions:</h3>
    <ul>
    {% for transaction in past_transactions %}
      <li>{{transaction.date}}, {{transaction.value}}</li>
    {% endfor %}
    </ul>
  </body>
</html>
```

A cool part about fragments is that they can also use variables! If we want to use variables, we can just pass them into the fragment. Let's say we wanted the person's name to be the title of the site (silly, but just for example).

We could adjust our `title_bar_fragment.html` to look like this:
```
<div>
  {{first_name}} {{last_name}}
</div>
```
And change the line in `logged_in.html` where we call the fragment to look like this:
```
{% include "title_bar_fragment.html" with first_name=first_name last_name=last_name %}
```
There are lots more things you can do with templates, but this is a good start!