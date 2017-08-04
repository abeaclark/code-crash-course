## Your first static site
Let's be honest, you want to make something cool. Lets start with your personal site. When we are done, we'll have your site up on the web so you can show it off.

:white_check_mark: Do the Following:
1) Come up with a basic design for your site (I recommend a single page for now). Here are [some examples](https://onepagelove.com/gallery/personal) to give you inspiration.
2) Code the design using HTML and CSS. Call the file html file `index.html` and the css file `main.css`. When you're done you should have something that looks like this:

File Structure:
```
my_site/
  index.html
  main.css
```
index.html:
```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div class="container">
      <h1>Abe's site</h1>
      <p>Hello everyone!</p>
    </div>
  </body>
</html>
```
main.css
```
.container {
  background-color: 'blue';
}
```
3) Get a [netlify account](https://app.netlify.com/signup) (FREE AND EASY!!! YAY!)
  * While signing up for Netlify, it will ask you to drop in the files for your site. Drop a folder containing `index.html` and `main.css`.
4) Follow the link they give you... and BAM! Up on the world wide web.