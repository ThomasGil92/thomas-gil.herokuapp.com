 To run this app

Just download it and complete the .env files with your own environment variables. in the root

There is one .env file at the root of the application and one the client directory for the react part of the app.

If you have question => tgil849@gmail.com 

.env for the backend:
PORT=8000
MONGO_URI=[YOUR MONGONDB DATABASE CONNECTION STRING]
JWT_SECRET=[YOUR SECRET STRING FOR JSONWEBTOKEN]

.env for the react app:
REACT_APP_API_URL=http://localhost:8000/api
SKIP_PREFLIGHT_CHECK=true


DEPLOYED SITE => https://thomas-gil.herokuapp.com
