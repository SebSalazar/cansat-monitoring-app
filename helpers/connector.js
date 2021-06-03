var socket = new WebSocket("ws://127.0.0.1:3000");

socket.onopen = () => {
  console.log("Connection opened");
};

socket.onmessage = (event) => {
  var messages = document.getElementsByTagName("ul")[0],
    message = document.createElement("li"),
    content = document.createTextNode(event.data);
  message.appendChild(content);
  messages.appendChild(message);
};

socket.onclose = () => {
  alert("Connection closed");
};

const send = () => {
  socket.send(document.getElementById("portText").value);
};

const sendP = () => {
  socket.send(1);
};
