## Models and Migrations
Up to this point, we have been running without a database. This means that we have no reliable way to persist data on the server. Let's look at how to set up a database to work with Django. This will allow us to persist data in our models and will finally get rid of this annoying error you have been seeing:
```
You have 13 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
```

### Postgres
Postgres is a popular SQL-based database. Another popular one you may have heard about is mySQl. They are pretty similar, but for not we will use postgres.

You should have already installed postgres on your system in Week 1. Check to make sure Postgres is running by typing:
```
psql
```
If it says command not found, then you need to run these commands from Week 1 to install and start Postgres:
```
brew install postgresql && brew services start postgresql
# Note: type `brew tap homebrew/services` first if you do not have brew services
```
If you get an error that says that it couldn't connect to the server, you probably just need to start the server:
```
brew services start postgresql
```
Most likely you got the following error:
```
psql: FATAL:  database "<YOUR USERNAME>" does not exist
```
Here is why you get that error: the command `psql` is designed to bring you into a REPL that gives you access to one of your local databases (Your single postgres installation can host lots of DBs). By default, it assumes that you are trying to access a database that is named your username. For example, my username is `Abe`, so postgres looks for a database called `Abe` to give you access to.

Well, we haven't created any databases yet, so it has nothing to access. Create one now that is named that same as your username:
```
createdb `whoami`
# Note: `whoami` returns your username, you can try running it on its own to experiment
```
Great, now run `psql` again.
You should see something like this:
```
psql (9.6.3)
Type "help" for help.

<YOUR USERNAME>=#
```
This means that we are inside your Postgres REPL for the database named after your username. We can do lots of stuff in here, like create tables, add rows, delete things, etc. But for now, let's practice the most important command (exiting the REPL). You may be inclined to try `<control> C` or `exit`. These won't work. Here is the command that gets you back out:
```
\q <enter>
```
Now you should be back into your standard terminal.

In order for Django to access postgres, you will need to set up two things:
* A database instance for this specific postgres app to write/read data to/from
* A postgres "user" for the Django app to use to access the postgres DB (think, username and password)

Let's set this up with the following commands. For this practice, we'll be creating a new Django App called "django_with_postgres", so let's use that name for our database and db user as well:
```
# Enter the postgres REPL
psql

# Create a DB for your new Django app to use
# NOTE: All lines in the postgres REPL must end with a semicolon
CREATE DATABASE django_with_postgres;

# Create a user for your app to use and assign it a password
CREATE USER django_with_postgres_user WITH PASSWORD 'myPassword';

# Give the user you just created access to all actions on your postgres DB:
GRANT ALL PRIVILEGES ON DATABASE django_with_postgres TO django_with_postgres_user;

# Exit
\q
```
### Set up Django to Access Postgres
Let's create a new Django project that we will use to experience with models, migrations, and postgres.
```
# Move to your projects directory
cd ~/projects

# Create a new django project called `django_with_postgres`
django-admin startproject django_with_postgres

cd django_with_postgres

# create a virtual environment for our new project and activate it
# Subsitute your user name for <USER_NAME>
# If you don't know your user name, type this command `cd && cd .. && ls`. You should see it there.
virtualenv -p /Users/<USER_NAME>/.pyenv/versions/3.6.0/bin/python3.6 venv
source venv/bin/activate

# We'll need to reinstall Django in the local scope so that the app has access to it
pip install django

# Create a requirements.txt file to track our dependencies
touch requirements.txt

# Write all currently installed packages to our requirements.txt file
pip freeze > requirements.txt
```
Make sure your new app runs, debug any errors if not
```
python manage.py runserver
```
Postgres requires a special package to work, install it and add it to `requirements.txt`
```
pip install psycopg2
pip freeze > requirements.txt
```
Alter the Django config to use postgres instead of sqlite. Change the `DATABASES` section of `settings.py` to include the details needed for postgres.
* `NAME` should be the name of the database you created earlier (I called it `django_with_postgres`)
* `USER` should be the user you gave access to the database (I used `django_with_postgress_user`)
* `PASSWORD` should be the password you set earlier (I used `myPassword`)
* Postgres runs on port 5432 of localhost by default

Note that for a real project, you should keep things like passwords using a safer method. 
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'django_with_postgres',
        'USER': 'django_with_postgres_user',
        'PASSWORD': 'myPassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### Models & Migrations
Let's test out our database connection by creating and running our base migrations. Migrations are files that tell your database what SQL commands it should run to set it up in the way you intend to use it. Luckily, Django takes care of creating these for us based on how we design the model structure. As you have seen by the following error whenever you start the server, there are already some outstanding migrations that need to be run:
```
You have 13 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
```
We haven't made any models yet, but Django has some built in models and configurations that it stores in the database. For these, it has already created the migrations, but we need to run them. Even though Django has already created these migrations we will still run through both vital steps for migrations:
* create migrations (Django looks at the current state of the code and adds any migrations needed to make the database match the model structure)
* run migrations (Django applies all of the migration files that have not yet been run to you postgres database)
```
# Make the migrations. Since we haven't created any models yet, you will see "No changes detected"
python manage.py makemigrations

# Run the migrations to alter the postgres DB
python manage.py migrate 
```
Now that we have postgres set up, let's add our first model. Django models are just like python models, they can have associated attributes and functions. For now we'll just focus on the attributes. The attributes will actually become items that are saved into the database. We'll create a few simple models that we designed earlier when we talked about database schemas. 

Table Name: Owner

column	role
id	primary key
name	attribute
age	attribute
address	foreign key

Table Name: Pet

column	role
id	primary key
name	attribute
breed	attribute
owner	foreign key

Table Name: Address

column	role
id	primary key
street_address	attribute
zipcode	attribute
state	attribute

Let's create a new "apps" (directory) at the root of the project to hold the apps (subsections) of this django projects. Then, let's create a diretory called `animal_tracker`. To represent these models in code, create a folder called `models` inside the `animal_tracker` directory. At each level, we'll make sure to create an `__init__.py` so that Django sees them.
```
mkdir apps
touch apps/__init__.py
mkdir apps/animal_tracker
touch apps/animal_tracker/__init__.py
mkdir apps/animal_tracker/models
```
Now, create a file for each of the models we want to represent. Also, create the `__init__.py` so that Django knows about this directory
```
cd apps/animal_tracker/models
touch __init__.py
touch owner.py
touch pet.py
touch address.py
cd ../../..
```
Next, we need to add the attributes for each model so that Django knows what the database tables should look like.

:green-check-mark: Read about how Django Models work:
* [Django Models](https://docs.djangoproject.com/en/1.11/topics/db/models/)

There are few key things that you need to do when writing models files:
* Inherit from the Django base model class at `django.db.models`
* Choose the appropriate field type for each attribute (`CharField`, `IntegerField`, etc.) and add any needed additional information (default value, character length, etc.)
* Make any linkages (One-to-One, One-to-Many, Many-to-Many)

If you are feeling brave, read through the documentation on Django models and try to create the models files to represent the three tables above.

Note that it is also helpful to import all of your model files in the the `__init__.py` file. This will make it so that when you want to import one of your models into a file somewhere else in your project you can import them in a concise manner:
```
# This is what it can look like if you import your models into __init__.py
from django_with_postgres.models import Owner, Pet, Address

# Otherwise, you have to import them from their individual files like this (lame!)
from django_with_postgres.models.owner import Owner
from django_with_postgres.models.pet import Pet
from django_with_postgres.models.address import Address
```
Here are my solutions:
#### __init__.py
```
from .owner import Owner
from .pet import Pet
from .address import Address
```
#### owner.py
```
from django.db import models
from apps.animal_tracker.models import Address

class Owner(models.Model):
    name = models.CharField(max_length=128, null=True)
    age = models.IntegerField(null=True)
    address = models.ForeignKey(Address)
```
#### pet.py
```
from django.db import models
from apps.animal_tracker.models import Owner

class Pet(models.Model):
    name = models.CharField(max_length=128)
    breed = models.CharField(max_length=128)
    owner = models.ForeignKey(Owner, related_name='pets')
```
#### address.py
```
from django.db import models

class Address(models.Model):
    street_address = models.CharField(max_length=256)
    zipcode = models.CharField(max_length=5)
    state = models.CharField(max_length=2)
```

Make your files look like this (or try your own version if you want) and run:
```
python manage.py makemigrations
```
It probably says:
```
No changes detected
```
Ah, man! We just made a bunch of changes to our models files but Django doesn't seem to see them. Why not?

Well, we never added this new app to our `settings.py`, so Django doesn't know about it. Do that now:
```
# settings.py
...

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'apps.animal_tracker',
]

...
```
Now run `python manage.py makemigrations` again.

It likely still says `No Changes Detected`. This is because it is the first time we are running migrations on the `animal_tracker` app. The first time, we need to specify the name of the app after the `makemigrations` command:
```
python manage.py makemigrations animal_tracker
```
Now, you should see the successful operation:
```
Migrations for 'animal_tracker':
  apps/animal_tracker/migrations/0001_initial.py
    - Create model Address
    - Create model Owner
    - Create model Pet
```
Next, we need to apply the migrations:
```
python manage.py migrate
```
Great, so now our DB should reflect the model structure in our app. Let's test it out.

To test it, we will make use of Django's build in `shell` command. This puts you into a python REPL but it also loads all of the Django models and configuration so that you can access your application programmatically through the command line. It is great for testing models and connections.

Open the Django Shell:
```
python manage.py shell
```
Now we are in a python REPL. We want to test out our models. To do so, we need to import them into the REPL session.
```
# The asterisk is a wildcard which means to import all of the models mentioned in the file (in this case apps/animal_tracker/models/__init__.py )
from apps.animal_tracker.models import *
```
Now we can do several commands to test that our models are working:
```
# Create an Address
address_instance = Address.objects.create(street_address='123 Main St', zipcode='99231', state='CA')

# Check to make sure that attributes are being set
# This should return `99231`
address_instance.zipcode

# This method shows you all of the addresses in the database
# There should currently be one address
Address.objects.all()

# We can create another address
# Since we added `null=True`
address_instance_2 = Address.objects.create(street_address='Other Address', zipcode='11111', state='NY')

# Now this should return 2 addresses
Address.objects.all()

# You can also look for a specific subset of addresses using `filter
Address.objects.filter(zipcode='11111')

# Create an owner that has an address equal to `address_instance`
owner = Owner.objects.create(name='Abe', age=27, address=address_instance)

# This should return 1 owner
Owner.objects.all()

# Create a pet that is owned by that owner
pet = Pet.objects.create(name='Charlie', breed='Poodle', owner=owner)

# Check our relationships
owner.pets.all()
owner.address

# Great, things are working, let's exit the REPL
exit()
```
