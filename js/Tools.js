

var level= 1;
var websocket;
var serverUrl = "ws://192.168.0.35:1337/";
var WebSocketObject = window.WebSocket || window.MozWebSocket;


function sendWebSocketMessage(messageObject){
    websocket.send(JSON.stringify(messageObject));
}
function initWebSocket()
{
// Check if browser has an implementation of WebSocket (older Mozilla browsers used MozWebSocket)
    var WebSocketObject = window.WebSocket || window.MozWebSocket;

    if(WebSocketObject)
    {
    // Create the WebSocket object
        websocket = new WebSocketObject(serverUrl);
        // Setup the event handlers
        websocket.onopen = function()
        {
            displayMessage("WebSocket Connection Opened");
            document.getElementById("sendmessage").disabled = false;
        };
        websocket.onclose = function(){
            displayMessage("WebSocket Connection Closed");
            document.getElementById("sendmessage").disabled = true;
        };
        websocket.onerror = function(){
            displayMessage("Connection Error Occured");
        };
        websocket.onmessage = function(message){
            displayMessage("Received Message: <i>"+message.data+"</i>");
        };
    } 
    else {
        displayMessage("Your Browser does not support WebSockets");
    }
}
function sendMessage(){
// readyState can be CONNECTING,OPEN,CLOSING,CLOSED
    if (websocket.readyState = websocket.OPEN)
    {
        var message = 'Ignacio Joakin';
        displayMessage("Sending Message: <i>"+message+"</i>");
        sendWebSocketMessage({type:"login", dato:message });
    } 
    else 
    {
        displayMessage("Cannot send message. The WebSocket connection isn't open");
    }
}

function getCanvas()
{
var searchEles = document.getElementById("gameContainer").children;
        var gamecanvas;
        for(var i = 0; i < searchEles.length; i++) {
            if(searchEles[i].tagName == 'CANVAS') {
                return searchEles[i];
                //gamecanvas = searchEles[i];
            }
        }	
}
