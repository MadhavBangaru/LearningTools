const amqp = require('amqplib/callback_api');

//Step 1: Create connection
amqp.connect('amqp://localhost',(err,connection)=>{
    if(err){
        throw err;
    }
    // Step 2: Create Channel

    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }

        //Step 3: Assert Queue
        const QUEUE = 'codingtest'
        channel.assertQueue(QUEUE);

        //Step 4 : Receive Messages
        channel.consume(QUEUE,(msg)=>{
            console.log(`Message received: ${msg.content}`)
        },{
            noAck:true
        })
    })

})