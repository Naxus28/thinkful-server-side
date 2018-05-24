# REST APIs and models

REST (REpresentational State Transfer) is a style of software architecture, a set of principles for designing APIs.

When creating a REST API, our primary concern is communicating the state of resources. A resource could be something like a shopping list, a blog post, a set of blog posts, a representation of a user, etc.

There are four generic operations that most REST APIs support: creating new resources, reading or retrieving existing resources, updating resources, and deleting resources. This is where the acronym CRUD comes from (create, read, update, delete), and you'll frequently hear developers talk about basic CRUD operations, or CRUD applications.

A RESTful API exposes resources through URLs. For instance, you might have a single endpoint, /users, that is for exposing user resources. When a client makes a GET request to /users, the API might return a list of all users. When clients make a GET request to /users/my-unique-user-id, the API would return a single object representing the user with that ID. This same endpoint (/users) could be used for creating, updating, and deleting users as well.

Note what we do not do when creating a REST API. When creating an endpoint for creating a new user, we don't use the URL /users/add-new-user.

Instead, endpoints are nouns (that is, things), and we use HTTP methods as verbs to indicate the appropriate actions. We use GET for reading or retrieving, POST for creating, PUT (and in some cases PATCH, but we'll use PUT in this course) for updating resources, and DELETE for deleting resources.

## Model layer

When building REST APIs with Express and other modern server-side frameworks, we usually separate out our storage layer (that is, our database) from our API layer by using models. We won't cover databases until Unit 2 of this course, so as we build out the shopping list/recipes app, we'll be using volatile (in memory) storage; but nevertheless, the principle of decoupling API and storage layers applies here as well.


Best practice is to create "thin" APIs with a minimal amount of logic. Models are where the logic for sourcing and manipulating data should live. This will become more apparent in Unit 2 as we begin to work with MongoDB and Mongoose to model our data, but you'll get a taste of it in the remainder of this lesson.