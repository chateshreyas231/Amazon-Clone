const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
//const { request, response } = require('express');
const stripe = require("stripe")({/*'Stripe Secret Key'*/})

const app = express();

app.use(cors({origin: true}));
app.use(express.json());


app.get('/',(request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;

     console.log("payment recived>>", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)


