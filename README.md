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

6. Generating a JWT Token for Testing

   ```bash
   node generateToken.js

7. User Creation Script

   ```bash
   node createUser.js

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


## Results

## Commenting User Information

![WhatsApp Image 2025-07-18 at 15 11 28_c3240aa7](https://github.com/user-attachments/assets/52328e53-a043-457c-92df-0bc1acde95fa)

## Creating First Posts

![WhatsApp Image 2025-07-18 at 14 51 29_5c481d84](https://github.com/user-attachments/assets/a945727d-939c-4bec-b88e-0df449bf4dd2)

## Giving First Comments

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/4aa94690-473d-4bae-a054-09202c7dfca7" />

## Posts Page

![WhatsApp Image 2025-07-18 at 15 11 04_5c57eacf](https://github.com/user-attachments/assets/d52ec32d-127c-4bb2-b33b-77bfdb62165e)

## Comments Page

![WhatsApp Image 2025-07-18 at 15 10 05_a29e0e2c](https://github.com/user-attachments/assets/742f9eaa-707c-407b-88bf-04a094fa8265)








