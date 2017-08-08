---
title: Introduction to Object-oriented programming
week: 2
---

## Introduction to Object-oriented programming

How is code organized? A popular paradigm is `Object Oriented Programming`. This approach involves creating small, specialized groups of code that pertain to a certain domain. An easy way to think of it is that the code is parallel to real life objects. Here is an example:

-----
#### Animal Example
Let's say we want to represent different kinds of animals in code.

Animals may share many of the same characteristics (such as having a name, eating, and sleeping). Different categories have different special characteristics that are not shared between all animals (for example, dogs and cats have legs, while snakes do not).

In object-oriented programming, we represent animals by using `classes`. You can think of a class as a generic representation of something, kind of like a form that each individual animal can fill in with their specific details.

Let's Psuedocode how classes representing animals could look:

###### Animal Class:
* `name` -- Type: "attribute" -- (ex: "Zebra", "Horse", "Cow")
* `age` -- Type: "attribute" -- (ex: 1, 4, 7)
* `eat_food` -- Type: "function" -- (ex: when you call the `eat_food` function, the animal eats food)
* `sleep` -- Type: "function" -- (ex: when you call the `sleep` function, the animal sleeps)

###### Snake Class <-- Inherits from: Animal Class:
* `date_of_last_skin_shedding` -- Type: "attribute" -- (ex: "10/13/17")
* `slither` -- Type: "function" -- (ex: when you call the `slither` function, the snake moves by slithering across the ground)

###### Cow Class <-- Inherits from: Animal Class:
* `average_milk_production` -- Type: "attribute" -- (ex: 1.4 gallons)
* `make_moo_sound` -- Type: "function" -- (ex: "MOOOOOOO!!!")

-----

We just created classes for two animals, and a general class that is inherited into these two classes. Inheritance means that you give all of the parent functionality to the child. Then, the child can modify or add to that functionality.

So, in this case a `Cow` will also have `name` & `age` attributes, as well as `eat_food` & `sleep` functions. However, neither the `Animal` nor `Snake` classes have `average_milk_production` as an attribute. This makes sense, because it is an attribute that is specific to cows.

#### Why / How do you use classes?
Classes are great building blocks for your application. If you are tracking animals in the zoo, you want a standardized way to refer to the animals so that you know what to expect when you are writing and reading data. Also, as seen, you can group functions that are specific to one domain. This helps a lot with code cleanliness, readability, and usability.

An `Instance` represents one occurrence of a Class. For example, in a heard of cows, each cow is one instance of the `Cow` class. The instance stores values that are specific to that cow. This makes sense, because you want to name one cow "Bessie" and another "Andrew".

In python classes look like this:
```
class Animal(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def eat_food(self):
        print('eating food')
    
    def sleep(self):
        print('sleeping')

class Cow(Animal):
    def __init__(self, name, age, average_milk_production):
        self.name = name
        self.age = age
        self.average_milk_production = average_milk_production

    def make_moo_sound(self):
        print ('MooOOooOO!')

```
You can use them like this:
```
cow = Cow('Bess', 16, 3.4)
cow.age
# => 16
cow.eat()
# => 'eating food'
cow.make_moo_sound()
# => 'MooOOooOO!'
```

:white_check_mark: Practice: Design classes to represent the following scenarios (Can do in psuedocode, python, or both!)
* You own a farm. You have an orchard, livestock, equipment, and workers to keep track of.
* You are creating a video game with different characters. Each may have some similar and some different abilities / attributes.

#### References:
* https://www.udacity.com/wiki/classes
