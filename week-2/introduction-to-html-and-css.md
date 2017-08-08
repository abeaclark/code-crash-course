---
title: Introduction to HTML & CSS
week: 2
---

## Introduction to HTML & CSS
HTML and CSS are basic elements to web development. HTML controls the content of the page, css controls the styling.

Example HTML:
```
<div class="container">
  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png">
  <div id="caption" class="container">
    The google logo
  </div>
</div>
```

Example CSS:
```
.container {
  width: "100px";
  height: "100px";
  background-color: "blue";
}

#caption {
  font-size: "36px";
}

div {
  border: "2px solid black";
}

img {
  border: "1px solid green";
}
```

In the HTML, you will notice a few things:
* There are several types of elements (`div` and `img` in this example)
* elements can have attributes (`src`, `id`, `class`, for example)
* elements are nested

In the css, you will notice a few things:
* There are different prefixes (nothing, a period, a hash mark)
  - no prefix means you are targeting an element (like `div` or `img)
  - a period prefix means you are targeting all elements of a certain class (like `container`)
  - a hash prefix means you are targeting a single element identified by id (like `caption`). `id`s given to elements must be unique on the page

:white_check_mark: Do the [Codecademy HTML & CSS course](https://www.codecademy.com/learn/learn-html-css)

#### Resources:
* [HTML cheatsheet](http://www.simplehtmlguide.com/cheatsheet.php)
* CSS Frameworks:
  - [Twitter Bootstrap](http://getbootstrap.com/getting-started/#examples)
  - [Zurb Foundation](http://zurb.com/responsive)
* [Flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (not supported by all browsers, but makes CSS MUCH EASIER)