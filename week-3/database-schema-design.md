---
title: Database Schema Design
week: 3
---

## Database Schema Design
Two popular type of of databases are `Relational Databases` (ex: postgres, mysql, sqlite) and `Non-relational databases` (ex: mongoDB). Each has advantages. Most people start with Relational Databases, because they have a lot of advantages out of the box, and fit the majority of use cases.

A relational database has many different tables. The tables are linked together through `primary keys` and `foreign keys`. Tables typically correspond with classes or relationships in your code.

A `primary key` is the unique identifier for a given object. This is usually assigned the label `id` or `pk`.
A `foreign key` is located in one table to link it to another table. The foreign key that is stored in one table is linked to the primary key in another table.

Each table has multiple roles. You can think of the table corresponding to a `class` and a row in the table corresponding to an `instance` of the class. (Table is the `Cow` model, row is a single cow).

Here is an example:
-----
#### Table Name: Owner
**column** | **role** 
--- | ---
id | primary key
name | attribute
age | attribute
address | foreign key

#### Table Name: Pet
**column** | **role** 
--- | ---
id | primary key
name | attribute
breed | attribute
owner | foreign key

#### Table Name: Address
**column** | **role** 
--- | ---
id | primary key
street_address | attribute
zipcode | attribute
state | attribute
-----
This schema illustrates a simple database structure with `Owner`, `Pet`, and `Address`.
* A `Pet` belongs to an `Owner`, therefore the pet has a foreign key called `owner`. This foreign key maps to the primary key on the `Owner` table
* An `Owner` has one address, therefore the `Owner` table has a foreign key called `address`. This foreign key maps to the primary key on the `Address` table.

There are several types of relationships you can have in a database. Here are the most common:
* One-to-One
* One-many
* Many-to-One

The names are pretty self-explanatory, but lets look at some examples of each.

:white_check_mark: Decide which relationship best matches each of the following examples:
* Orange tree and each of the oranges on the tree
* A person and their current spouse
* Stores and it's Customers

Here is a good way to think about these relationships: fill in the blanks in the following sentences:
* A `<Model #1>` can have `<One or Many>` `<Model #2>`
* A `<Model #2>` can have `<One or Many>` `<Model #1>`

Then think through the sentences you formed:
* If you chose `One` and `One` in each sentence, it is a `One-to-One` relationship
* If you chose a combination of `Many` and `One` for the two sentences, it is a `One-to-Many` relationship
* If you chose `Many` and `Many`, it is a `Many-to-Many` relationship

In our first example, we only modeled `One-to-One` (Owner <--> Address) and `One-to-Many` (Owner<-->Pet) relationships. How do you make a `Many-to-Many` relationship?

You need another table. The additional table holds the two foreign keys of the rows you are trying to link. It is called a `Join Table`.

Here is an example:
-----
#### Table Name: Doctor
**column** | **role** 
--- | ---
id | primary key
name | attribute
specialty | attribute
years_experience | attribute

#### Table Name: Patient
**column** | **role** 
--- | ---
id | primary key
name | attribute
ssn | attribute
ethnicity | attribute

#### Table Name: DoctorPatient
**column** | **role** 
--- | ---
id | primary key
doctor | foreign key
patient | foreign key
-----

In this example, a `Patient` can have multiple `Doctors` and a `Doctor` can have multiple `Patients`. So, we need a join table. Typically, join table names are a concatenation of the each of the individual table names. In this case, `DoctorPatient`. The join table is very simple. It contains an `id` that identifies the linkage. Then it has two foreign keys, one pointing to the `Doctor` and another pointing to the `Patient` in the relationship.

Resources:
* 