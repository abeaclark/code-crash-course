## Common Architectures
Let's take a moment and talk about two common architectures:
* Monolith Web App
* API Web App + Javascript Frontend

A monolith web app is what we have built so far using Django. This means that Django serves up HTML and CSS to routes that the end consumer will access. Django also is the backend and holds the models, logic, etc.

An API Web App + Javascript frontend consists of a backend that exposes several API endpionts, but does not serve any HTML or CSS that will be ingested by consumers. Instead it usually serves JSON data that the frontend can then display. The Javascript frontend is completely standalone and only accesses the backend via the API.

Each approach has advantages and disadvantages.

#### Monolith
* ++ Quicker and Easier to architect
* ++ Only one deployment
* -- Generally slower load times
* -- Mixing frontend / backend code can lead to bloat and difficulty coordinating in a team
* -- Not able to deploy to a CDN for speed

#### API Web App + Javascript Frontend
* ++ Much faster load time (typically)
* ++ Can deploy to CDN for global access
* ++ Can easily be used for additional frontends (iOS, Android, etc.)
* -- Multiple deployments
* -- Multiple development environments

In general, I prefer building apps using the API + Javscript frontend model. But, for now we'll keep focusing on the Monolith model because it is a great way to start learning about how to create a CRUD app.