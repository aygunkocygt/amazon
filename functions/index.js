const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_BE6Fx7bE2MswA7x1dOr5ieuf007nh2oXhq');

 // API

 // App config

 const app = express();

 //Middlewares

 app.use(cors({ origin: true }));
 app.use(express.json());

 //API routes

 app.get('/', ( request, response ) => response.status(200).send('hello world'));

 app.post('/payments/create', async (request, response) => {
     const total = request.query.total;

     console.log('Payment Request Recieved:', total);

     const paymentIntent = await stripe.paymentIntents.create({
         amount: total, //submits  of the currency
         currency: "usd",
     });

     // ok - created
     response.status(201).send({
         clientSecret: paymentIntent.client_secret,
     });
 });

 //Listen command

 exports.api = functions.https.onRequest(app)

// Example endpoınt
 //http://localhost:5001/challenge-190ec/us-central1/api