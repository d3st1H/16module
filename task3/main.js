const wsUrl = "wss://echo-ws-service.herokuapp.com";

const input = document.querySelector(".input-message");
const btnSend = document.querySelector(".j-btn-send");
const winChat = document.querySelector(".chat");
const btnGeo = document.querySelector(".j-send-geo")

let websocket

function myWriteMessage(message) {
    let winMessage = document.createElement("div");
    winMessage.classList.add("box-message");
    winMessage.classList.add("my-message");
    winMessage.innerText = message;
    winChat.appendChild(winMessage);
    input.value = '';

}

function serverWriteMessage(message) {
    let winMessage = document.createElement("div");
    winMessage.classList.add("box-message");
    winMessage.innerText = message;
    winChat.appendChild(winMessage);
}


btnSend.addEventListener("click", async () => {
    message = input.value;

    websoket = new WebSocket(wsUrl);
  
    websoket.onopen = await function (e) {
        serverWriteMessage("Connected");
    };
  
    myWriteMessage(message);
  
    websoket.send(message);
  
    websoket.onmessage = await function (e) {
        serverWriteMessage("Ответ " + e.data);
    };
  });


function sendGeo() {
    winMessage = document.createElement("div");
    winMessage.classList.add("box-message");
    winMessage.classList.add("my-message");
    winMessage.classList.add("my-geo");
    winChat.appendChild(winMessage);
}

  btnGeo.addEventListener("click", () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        myPosition = `https://www.openstreetmap.org/#map=10/${latitude}/${longitude}`;
  
        sendGeo();
        let geoBox = document.querySelector(".my-geo");
        let link = document.createElement("a");
        link.href = myPosition;
        link.target = "_blank";
        link.appendChild(document.createTextNode("Геолокация"));
        geoBox.appendChild(link);
        winMessage.classList.remove("my_geo");
      });
    }
  });
