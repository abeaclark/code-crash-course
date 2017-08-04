## Jquery
Jquery is a javascript library that helps make interacting with the DOM easier. You can use it by either downloading the package from NPM, or, simply including a line of code to include it in your base html. In this course we will be focusing on using React for the frontend. When you use React, you shouldn't need Jquery. However, it is still good to know about and to know how to use for several reasons:
* Lots and lots of sites use Jquery in some capacity
* Sometimes you may just want to throw together a landing page or simple site and React is overkill
* You likely will see examples using Jquery when you good answers to questions. Knowing how to recognize it can reduce your confusion about why it won't work in plain javascript

The shortcut for jquery, once it is loaded on a website is `$`.

An example of how jquery can make javascript syntax simpler can be seen below. The follow code will search the window for any instances of the class `.highlight`.

**Vanilla Javascript:**
```
document.getElementsByClass('.highlight')
```
**Jquery:**
```
$('.highlight')
```

Jquery also has a host of helper functions that Javascript does not come with out of the box.

:white_check_mark: Do the [codecademy jquery course](https://www.codecademy.com/learn/jquery)

:white_check_mark: Create a simple To-do list using jquery.
* For version one, simply be able to add items to the list
* If you feel good about your skills, add additional features you would want on your todo list (check off, remove, etc.)