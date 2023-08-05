# proyecto_fs

*Frontend:*

cd Frontend

npm i axios

npm run start

*Backedn:*

cd Backend

npm i nodemon express jsonwebtoken jest supertest bcrypt dotenv pg cors

Probar credenciales de acceso con los datos de **artistsDB.json**

### Auth: Register

POST: localhost:3000/auth/register
BODY: {
"username": "test",
"email": "test@mail.com",
"password": "test"
}

### Auth: Login

POST: localhost:3000/auth/login
BODY: {
"email": "test@mail.com",
"password": "test"
}

### Artworks: Create

HEADER: BEARER TOKEN
POST: localhost:3000/artworks
BODY: {
"title": "test",
"description": "test",
"price": 1000,
"url_image": "test"
}