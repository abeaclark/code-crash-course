---
title: Psuedocode
week: 2
---

## Psuedocode
Psuedocode is the process of writing words to represent what you will write in code. Psudeocode is language agnostic (this same psuedocode could be implemented in Python, Ruby, etc.). It is a tool to help you organize your thoughts before coding, and also coordinate with other developers to make sure you are all aligned on the vision.

Here is a trivial example:

-----
#### Stock Price Example

**Situation**: you have a list of stock prices for the last month, and you want to find the lowest price.

Psuedocode:
```
* Set a variable `lowest` equal to the first value of the array of prices
* Iterate through all of the values of the array
  - Compare the current value to the value of `lowest`
  - If the current value is lower than `lowest`, set `lowest` equal to the current value
* return lowest
```
This translates into python as:
```
prices = [35.40, 32.10, 35.03, 44.00, 20.00]
lowest = prices[0]
for price in prices:
    if price < lowest:
        lowest = price

return lowest
```
-----

:white_check_mark: Practice: How would you psuedocode the following problems?
* You have a list of first names and a list of last names. Create every possible combination.
* You have a list of random numbers. Organize them from least to greatest.

Resources:
* https://www.khanacademy.org/computing/computer-programming/programming/good-practices/p/planning-with-pseudo-code