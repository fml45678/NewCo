const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I4QOCAuUvW4lOB5RbWZQSfYFJWfJUoUOED3H93zahLgpksdUKmSK23daYNRVKgt6tYyueiyRBjcPz3dDFP0ohO700lxTdEPUj"
);

// api

// App config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
