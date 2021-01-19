require('dotenv').config();
const express = require('express'),
  massive = require('massive'),
  session = require('express-session'),
  app = express(),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
  authCtrl = require('./controller/authController'),
  pokeCtrl = require('./controller/pokeController');


app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db);
  console.log(`DB is connected!`)
})

app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout)

app.get('/api/pokemon', pokeCtrl.getCaughtPokemon)
app.post('/api/catch/pokemon', pokeCtrl.catchPokemon)



app.listen(SERVER_PORT, () => console.log(`Server is running on Port: ${SERVER_PORT}`))