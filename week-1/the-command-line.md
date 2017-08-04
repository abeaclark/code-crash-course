## The Command Line
Your Mac comes with a program called `Terminal`. Later, you will install a program called iTerm. These both give you access to the terminal or "shell" of the computer. This gives you direct access to the Linux or Unix that is running your machine. Everything you can do in the GUI, you can do in the terminal. 

For example, if I want to access the file system, I can do so. 

:white_check_mark: Try the following code in your terminal:

`cd` stands for 'change directory'. Without a following argument, it gets you back to your base directory, AKA: ~
```
cd
```
`ls` shows you all of the files that are at the current level of the file tree
```
ls
```
`cd <NAME>` brings you into a different folder, in this case "Desktop"
```
cd Desktop
```
Now you should see different files and folders then before (you will recognize them as being on your desktop)
```
ls
```
chose a file (not a folder) and type:
```
open <FILENAME_HERE>
```

This is just an introduction to the command line. This feel VERY unnatural at first, but over time it will become a huge time saver and a basic tool to being a developer.

:white_check_mark: Work through this course from codecademy: [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line)

Try to make a habit of using the command line throughout our exercises. Learning the command line is like learning shortcuts in Microsoft Excel; It will make you a power-user over the long-term.

Another nice thing about the command line is that it gives you access to a "Practice Space" for many languages. 

:white_check_mark: Try the following exercise in your terminal:

Type this and press enter:
```
python
```
You should see something like this:
```
Python 2.7.11 (default, Jan 22 2016, 08:29:18)
[GCC 4.2.1 Compatible Apple LLVM 7.0.2 (clang-700.1.81)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
You have just opened up the Python ["REPL"](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop). This gives you power to experiment with python syntax and functions. Try this:
```
while True:
```
Press Enter, Press Tab
```
print('You are going to be a great programmer')
```
press Enter

Ha! Your computer really believes in you! So, we just entered an infinite loop (It will continue forever if you let it). How do we get out?
```
<control> c
```
There, now you should be back to the REPL again.

Ok, we're done experimenting with python for now. Let's get back to our normal terminal. For most things in the Terminal, `<control> c` will kill them. But for REPLs, usually there is a different command. For python, it is: `exit()`

Type this and press enter:
```
exit()
```
Phew... now we're back to where we started.