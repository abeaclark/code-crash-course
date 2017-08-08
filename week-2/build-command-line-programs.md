---
title: Build command-line programs
week: 2
---

## Build command-line programs
The command line is a simple interface, which makes it great for experimenting with new code concepts. Here is an example script to show you how you can work with the command line:
```
# To run this code
# save it to a file
# in the terminal, cd into the directory where you saved it
# then type: `python <NAME OF FILE WITH EXTENSION>` in the terminal

exit = False

while not exit:
    welcome_prompt = '''
    Welcome to the command line. How are you feeling?
    1) Great
    2) Scared
    3) Sleepy

    Please respond with the number of your choice (1, 2, or 3)\n
    '''
    response = input(welcome_prompt)

    if response == 1:
        print("Awesome!")
    elif response == 2:
        print("Don't be scared, you're doing great")
    elif response == 3:
        print("Get some rest!")
    else:
        print("hmmm.... I don't recognize that response")

    print('')
    print('')
    print('')

    exit_response = input("Would you like to change your answer? 1) Yes 2) No \n")

    if exit_response == 2:
        exit = True

```
Without running the file, can you trace the code to understand how it will progress? Now, run the program and see if you were right!

To run the code, save it to a file called test.py (note, `.py` signifies that it is a python file). Then to run it, go to where you saved it in your directory, type `python test.py`. Here is the full example, assuming I save the code as test.py on my Desktop:
```
# This brings you back to your home directory
cd

# Move to Desktop directory
cd Desktop

# Run the file
python test.py
```

Now it's your turn.

:white_check_mark: Using your new Object Oriented Programming skills, create a program that is a basic CRM for a business. It should do the following:
* Have classes internally to represent Employees and Customers
* Employees should have a `name`, `ssn`, `annual_salary`
* Customers should have a `name`, `email`, `credit_card_number`
* The program should present a menu that allows you to add an employee, add a customer, and view a list of employees or customers

This is a relatively challenging assignment. Take a few minutes to strategize / psuedocode how you can tackle this.
* Could you benefit from class inheritance?
* What can you learn from the code above?
* How can you store data? (An array would be a good option)
* How can you use code structures like loops?
* How can you organize your code so that it is readable and clear?