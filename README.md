# Blog Backend API

This is a RESTful API for a Blog application built with Node.js, Express, MongoDB, and JWT authentication. It supports CRUD operations for posts and comments with user authentication and authorization. Jest is used for testing the API endpoints.

## Features

- User authentication with JWT
- CRUD operations for Posts
- CRUD operations for Comments
- MongoDB database integration
- Environment variable management with dotenv
- Unit and integration testing with Jest and Supertest

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- dotenv
- Jest (testing framework)
- Supertest (for API testing)

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB (running locally or hosted)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend

2. Install dependencies:

   ```bash
   npm init -y
   npm install express mongoose dotenv bcryptjs jsonwebtoken

3. Create a .env file in the root of the backend folder and add the following variables:

   ```bash
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/blogdb
   JWT_SECRET=your_jwt_secret_key_here

4. Start the Server

   ```bash
   node server.js

5. Install jest and supertest for testing

   ```bash
   npm install --save-dev jest supertest
   npm test

## API Endpoints

### Posts
- `GET /api/posts` — Get all posts

- `POST /api/posts` — Create a new post (requires authentication)

- `GET /api/posts/:id` — Get a single post by ID

- `PUT /api/posts/:id` — Update a post (requires authentication)

- `DELETE /api/posts/:id` — Delete a post (requires authentication)

### Comments
- `GET /api/comments?post_id={post_id}` — Get all comments for a post

- `POST /api/comments` — Create a new comment (requires authentication)

- `GET /api/comments/:id` — Get a single comment by ID

- `PUT /api/comments/:id` — Update a comment (requires authentication)

- `DELETE /api/comments/:id` — Delete a comment (requires authentication)

