---
title: MVC Framework
week: 4
---

## MVC Framework
The MVC Framework is a useful way of thinking about and organizing your code for a web app. Different languages have different preferred ways of organizing code, but it is usually a close variant to MVC.

MVC stands for:
* Model
* View
* Controller

Ok... but what are these things? Let's look at each one. Note, I like to think of things as MCV (model, controller, view) because that is how the data flows:

**Model**
Think of a model as equal to a class that you have created to represent something in your app. For example, in our animal-tracking app, we had a class to represent an Cow. The class is the model. The model can interact with the database (through an ORM) to retrieve data for a given instance of that class (a single cow). It can also perform functions that you have included in the class (eat, sleep, moo, etc.).

**Controller**
The controller is what handles an incoming request to your server and decide what it should send back to the user. In the web app we build last week, the controller contained the logic to generate a new joke and call the `render` function. In a bigger web app, the controller helps to decide which models to interact with and which functions to call on those models, in order to generate a response for the user.

**View**
This is what the user actually sees when they visit the page. It could likely be shown in html and have variables that are passed in from the controller. In our jokes web app, this was our template, called `home.html`. You could add HTML markup around what we had in that template so that the user sees something pretty instead of plain text

Why are these separations important? Most programs have thousands of lines of code or more. Using a predictable pattern helps you find bugs more quickly, presents a more straightforward flow, and is easier to maintain.

In reality, you could write an entire app in one file if you wanted to... BUT that would be a pain to manage. Following the MVC design pattern adds sanity to what you're building.

Luckily for us, Django is set up to use the MVC pattern out of the box, so you would have to try really hard not to adhere to it.