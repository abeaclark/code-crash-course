## REST APIs
What is an API? An API is an interface that allows you to interact with another system. We are going to focus on web APIs, which are a series of URL endpoints that create the interface for another website.

Have you ever noticed that URLs have a pattern? They do! REST is a specification that defines a general pattern to use when developers design an interface for other developers to access over the internet. It is NOT the only way to design an API, but it is a popular one.

At the core, a REST API is designed around resources. Let's think of resources as a class that models a real-life thing. To demonstrate, let's image we have a system with the following resources:

* User
  - A user may have many animals
* Animal

We have learned that the most common operations you will need to do are CRUD operations (Create, Read, Update, Destroy). The REST framework helps you create an interface to do this.

The framework makes use of different types of requests. For our example, we will stick to `GET`, `POST`, and `DELETE` requests, but you may see things like `PATCH` or `PUT`.

`GET` requests are used to read data, without modifying anything on the server
`POST` requests are used to modify data on the server or perform an action

Here are a few endpoints you could create for this system. Note: `<ID>` symbolizes an ID of the given resource such as `12AKFJ34` or `SKJDSDLKJ2323` that uniquely identifies it.
```
# Display all of the users in the system
GET /users

# Display a single user, identified by their <ID>
GET /users/<ID>

# Create a single user (you would send up data like first_name, last_name, etc. to populate the user instance)
POST /users

# Update a single user (you would send up data that you want to change about a user)
POST /users/<ID>

# Delete a single user
DELETE /users/<ID>
```

Additionally, routes can give you access to nested resources:

```
# Display all of the animals owned by a single user
GET /users/<ID>/animals

# Create an animal that is owned by a user
POST /users/<ID>/animals
```

:white_check_mark: Download the [Postman Client](). This is a helpful tool that allows you to make API requests to test. You can also do this on the command line using [curl](https://zaiste.net/posts/introduction_to_curl/), but postman is a better UI. See if you can get a response back from one of these APIs. Play around a bit to get the hang of it:
 * [Github API](https://developer.github.com/v3/repos/#list-your-repositories) The base URL is: https://api.github.com/
* [Star Wars API](https://swapi.co/)
* [Hacker News](https://github.com/HackerNews/API#items)

NOTE: some APIs, or some parts of APIs will require Authentication. We'll cover this later.

Resources:
* [REST Beginners Guide](https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340)
