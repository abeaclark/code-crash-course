## Authentication
When you visit a site like Facebook or Twitter, how does the site know who you are? How does it know to show you *your* news feed and not your brother's news feed?

Websites use different forms of Authentication to verify who you are and then deliver the content you are authorized to access.

Generally, authentication usually happens by using a unique identifier that is sent in a header of a request. See below for brief descriptions of common authentication practices:

### No Auth
One option is to have no auth. This is ok for sites where you don't need to customize much for the user, or show them anything that is unique to them. This may work if you have a static blog, for example, where you want to show the same content to everyone. To use no auth, you simply send requests without any special headers or parameters.

### Session Auth
Session auth is generally used in systems where the backend server also sends down the html content for the user. On the first request, the server sends a unique token that is saved in the browser and sent up with each subsequent request.

### Basic Auth
Basic auth asks you to send a username and password with your requests. This is pretty uncommon these days because it is less secure to send these important credentials with every request. Instead, other authentication schemes ask you for these credentials once, then swap them for a unique token that the server will recognize

### Token Authentication
Token Authentication involves the server assigning a token that uniquely identifies the user. In some cases, this token may have an expiration time, where it is no longer valid. In those cases, the server typically also provides an endpoint where you can "refresh" a token. This means you trade your token that will soon expire for a fresh one that has a longer expiry. This is used to help keep people logged in if they visit the site within a time frame, but log them out if not. One popular token type is called JSON Web Token. This token allows you to include other meta information imbedded inside the token.

### oAuth
oAuth is a protocol that is used to log in using another service's login. You have most definitely done this. Anywhere you see a button that says "Log in with Google", or "Log in with Facebook", oAuth is being used.
