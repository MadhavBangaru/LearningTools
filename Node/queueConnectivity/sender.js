const amqp = require('amqplib/callback_api');
const opt = {credentials : require('amqplib').credentials.plain('americas\servicescompsysdev','~t4efs9*yWv56azxPU2?G3bC')}
//Advanced message queuing protocol

//Step 1: Create connection

const USERNAME='americas\servicescompsysdev'
const PASSWORD='~t4efs9*yWv56azxPU2?G3bC'
const SERVER ='paas-rmq-ffl-sit12.us.dell.com'
const CONNURL=`amqp://${SERVER}`
const local='amqp://localhost'
amqp.connect(local,(err,connection)=>{
    if(err){
        throw err;
    }
    // Step 2: Create Channel

    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }

        //Step 3 : Assert Queue
        const QUEUE= 'codingtest'
        channel.assertQueue(QUEUE)
        //Step 4: Send message to queue
        channel.sendToQueue(QUEUE,Buffer.from("Hello world"));
        console.log(`Message is sent to ${QUEUE}`);
    })
})