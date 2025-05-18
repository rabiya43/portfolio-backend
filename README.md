# portfolio-backend
This is the backend API for a portfolio website built using Node.js, Express, and MongoDB.

## Features
- CRUD operations for Education, Skills, Projects, and Work Experience
- RESTful API architecture
- MongoDB integration using Mongoose
- CORS enabled for frontend connection
- `.env` for sensitive configuration

## Installation

```bash
npm install
```

## Running the Server

```bash
npm run dev  # for development with nodemon
npm start    # for production
```

## Environment Variables
Create a `.env` file in the root with the following:

```env
MONGO_URI=mongodb://localhost:27017/portfolioDB
PORT=5000
```

## Folder Structure
```
portfolio-backend/
├── controllers/
├── models/
├── routes/
├── config/
├── .env
├── server.js
├── package.json
└── README.md
```

## API Endpoints

Each module has full CRUD support:
- `GET /api/[entity]`
- `GET /api/[entity]/:id`
- `POST /api/[entity]`
- `PUT /api/[entity]/:id`
- `DELETE /api/[entity]/:id`

## Postman Collection
Import the Postman collection in `/postman_collection.json` to test all endpoints.

---