const mqtt = require ('mqtt');
var client  = mqtt.connect('mqtts://iot.eclipse.org',{
  will: {
    topic: 'Topic07',
    payload: 'somepayload',
    qos: 1,
    clean: false,
    clientId: 'zxasd123',
    retain: true}});

var num = 0;

client.on('connect',function () {
    client.subscribe('Topic07');
    console.log('client has subscribed successfully');
  });

  client.on('connect', function(){

    setInterval(function(){
                client.publish('Topic07',`Num ${num}` );
                num = num + 1;
              },2000); 
  });

  client.on('message', function (topic, message){
    console.log(message.toString()); //if toString is not given, the message comes as buffer
  });