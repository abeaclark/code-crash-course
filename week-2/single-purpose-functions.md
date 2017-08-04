## Single-purpose Functions
Code that is easily readable and reusable is extremely important. It is likely that code you write today will be edited a year from now by someone who has no idea how it is structured. Clearly-named, single-purpose functions can be a powerful tool to aid code readability and reuse. It also helps to keep you code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Take the following example:
```
from random import randint
def new(data):
  user = {}

  username = data['first_name'] + data['last_name']
  while len(username) < 10
    username += str(randint(0,9))
  user.username = username

  is_valid = False
  if len(data['ssn']) == 9:
    if data['ssn'][0] == 0:
      is_valid = True

  user.is_valid = is_valid

  return user
```
Compared with:
```
from random import randint
def new_user(data):
  user = {}
  user.username = create_username(data)
  user.is_valid = validate_user(data)
  return user

def create_username(data)
  username = data['first_name'] + data['last_name']
  while len(username) < 10
    username += str(randint(0,9))
  return username

def validate_user(data)
  is_valid = False
  if len(data['ssn']) == 9:
    if data['ssn'][0] == 0:
      is_valid = True

  return is_valid
```
Strive to keep your functions as simple as possible. Name them things that make sense and describe the specific action. When you get good at this, reading your code become incredibly easy!

:white_check_mark: Do the following:
* Consider: Why is the second example easier to read?
* Create a function that will print the lyrics to [YMCA](http://www.azlyrics.com/lyrics/villagepeople/ymca.html). Try to keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as much as is reasonable. Make the code readable.