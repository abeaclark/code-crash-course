## ORMs
An Object Relational Mapper is a layer that sits on top of SQL to allow you to interact with the database in the language you are using for the rest of your app. Otherwise, you would need to write custom SQL for everything you want to do. Luckily, some nice people have written packages to abstract the SQL away for you.

Look at how simple Django's ORM makes these actions:
```
# create
User.objects.create(name="Abe")

# get
user = User.objects.get(id=123)

# update
user.update(name="Jackie")

# delete
user.delete()
```
The most commonly used functions of most Apps are [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete).
