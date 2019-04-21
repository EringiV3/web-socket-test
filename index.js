var server = require('ws').Server;
var s = new server({port:8080});

s.on('connection',function(ws){

    // クライアントからデータが送信されてきたらそれを表示して、こちらも最後にクライアントにデータを送り返す
    ws.on('message',function(message){
        msg = JSON.parse(message);
        console.log("Received: "+msg.type); // クライアントから送られてきたJSONのtypeキーに対応する値をコンソールに表示

        s.clients.forEach(function(client){
            
            client.send(JSON.stringify({"name": "hagi"})); // クライアントにデータを送信
        });
    });

    ws.on('close',function(){
        console.log('I lost a client');
    });

});