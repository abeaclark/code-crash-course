## Javascript
Javascript is a language that (now) can be used on the frontend (in a browser -- Chrome, Internet Explorer, etc, -- or mobile app -- iOS, Android --) or backend (node.js). This makes it extremely versatile. It is both loved and hated adamantly in the coding community. Regardless of whether it is a good or bad language, it is pervasive and will be important for you to know.

If you are interested in the history or Javascript, check out [this article](https://auth0.com/blog/a-brief-history-of-javascript/). In short, Javascript has evolved, but it's start was as a scripting language for the web that would be understandable by non-coders. It is also referred to as ECMA-script (Eck-ma-skript).

Javascript can be found in two major environments: the browser, and the node.js runtime. Much of the functionality of the language is the same between the two environments, but there are also key differences. You can access the browser javascript runtime by pressing `<Command> <Option> i` on your keyboard. You can access the node.js runtime by typing `node` into your terminal and pressing `<Enter>`.

#### General characteristics
The language uses objects heavily. You can think of an object as similar to the JSON example above, but it can also include functions as attributes. Here is an example of how we could represent a Cow:
```
var cow = {
  "name": "Bessie",
  "children": [
    "Jack",
    "Jill"
  ],
  "moo": function() { console.log('mooOOooOOoo')}
}
```
Paste this code into the browser or node runtime. Can you figure out how to access the attributes of the object? Can you make the cow moo?

Javascript syntax can vary greatly depending on which version of Javascript you are running. For example, here is a comparison of how writing a function would look in the version of Javascript that runs in the browser(1.7), vs. the highest version you can install in your node runtime(ES6).

**Browser**
```
function myFunction(variable) {
  console.log(variable)
}
```

**Newest version in node**
```
const myFunction = (variable) =>
  console.log(variable)
```

#### The browser
In the browser, you are limited to using whatever version of javascript the browser uses. This means that you cannot use the newest syntax being introduced to the language. So, if you are typing code into the console on your web browser, you should use the Javascript 1.7 standard.

Luckily, developers have written tools that can transpile current Javascript into older versions of javascript. One popular tool is called babel. Babel allows you to write a website using the latest javascript, but run it in an older version. In order to do this, you have to "build" your site in order to access it. This means, you need to run it through the babel transpiler before a normal browser will be able to understand it.

The browser also has access to some useful things by default. For example, the `window` or `document` object. Type either one of these into your browser console and press enter. You should see an object. Take a look at this and see what is in there. Pretty useful stuff! You can type almost any letter into your browser and it will start to autocomplete to a variable name. Lot's of things available to you!

#### node.js
Node is what is used for javascript running outside of the browser. For example, if you want to write a server in javascript (similar to what we have practiced with django) you can use node.js. With node, you have more flexibility about which version of javascript you are running. However, many cloud hosting solutions are still limited, so backend node implementations will likely still use a transpiler like babel.

If you try to type `window` or `document` in the node runtime, you will notice that you don't have access to those variables. They are specific to the browser.

:white_check_mark: Do the [codecademy javascript course](https://www.codecademy.com/learn/learn-javascript)

:white_check_mark: Spend some time reading [Eloquent Javascript](http://eloquentjavascript.net/) (Scroll down to table of contents, it's free!). Don't feel like you need to finish it right now, but I would devote time to reading it regularly and then use it as a reference for questions.
