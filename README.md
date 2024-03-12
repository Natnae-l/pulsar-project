# Pulsar Project

Welcome to the Pulsar Project! This repository contains a simple application that allows you to publish and subscribe to messages using Apache Pulsar, built with Express.js, the pulsar-client library, and dotenv for managing environment variables.

## Setup

Before running the application, make sure to set up your environment variables. Create a .env file in the root of the project and add the following variables:

i = 0


## Installation

To install the necessary dependencies, run:

npm install


## Running the Application
To start the application, first run this on your terminal:

sudo docker run -it -p 6650:6650 -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:2.11.3 bin/pulsar standalone 

Then to start the application,:

npm run start

This will start the Express server, allowing you to publish messages.

node consumer

This will start the consumer, allowing you to subscribe to messages.






## Usage

### Publishing Messages

Just hit http:localhost:3000


### Subscribing to Messages

To subscribe to messages, the application will start listening for messages once the server is running. You can check the console logs for any incoming messages.

## Dependencies

- [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js
- [pulsar-client](https://pulsar.apache.org/docs/en/client-libraries-nodejs/): Node.js client library for Apache Pulsar
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. We welcome any improvements or additional features you'd like to add!

Happy messaging with Pulsar! 🚀🌟
