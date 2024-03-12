const { Client } = require('pulsar-client');

async function consumeMessages() {
    const client = new Client({
        serviceUrl: 'pulsar://localhost:6650',
    });

    const consumer = await client.subscribe({
        topic: 'data',
        subscription: 'my-subscription',
        subscriptionType: 'Exclusive',
    });

    console.log('Pulsar Consumer is running...');

    while (true) {
        try {
            const message = await consumer.receive();
            console.log(`Received message: ${message.getData().toString()}`);
            await consumer.acknowledge(message);
        } catch (error) {
            console.error(`Error while consuming message: ${error.message}`);
            // Handle errors such as reconnecting to the Pulsar cluster
        }
    }
}

consumeMessages().catch(console.error);
