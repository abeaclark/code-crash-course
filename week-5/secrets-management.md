## Secrets Management
When building a site, it is very likely that you will need to include sensitive values that you do not want to expose to the world. How do you keep these safe?

Here are some important things to keep in mind
* And values included in code that will be sent to the client (think an HTML page, javascript frontend app, iOS app, android app, etc.) can be accesses by anyone who downloads/accesses.
* github is accessible to anyone, so don't check private values into git.
* The backend is the only safe place to keep secrets

Many APIs will provide you with multiple keys. One will usually be called the `client key` or `public key`. The words client and public let you know that it is ok for this value to be exposed on the frontend. Conversely, if you see `private_key`, `api_key`, `secret_key` or something like this, you should assume it should be safeguarded.

To manage your secret keys while developing locally (on the backend), I recommend something like [dotenv](https://github.com/theskumar/python-dotenv). The basic steps are:
* Create a file called `.env` in your home directory.
* Save your secrets in `.env` in the format `SECRET_NAME=SECRET`, with one secret per line
* Follow the instructions to add code to your project to source the secrets on startup
* Adjust your `settings.py` file (for django) to get the secret from the environment and set it to a variable in that file

When you want to deploy, services like Heroku have an interface for you to add Environment Variables. This is where you would put the variables that you defined in your `.env` file.