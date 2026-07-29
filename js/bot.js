function agregarMensaje(texto, remitente) {

    const contenedor = document.getElementById("chat-messages");

    const div = document.createElement("div");

    div.className = `message ${remitente}`;

    if (remitente === "bot") {

        div.innerHTML = `
    <div class="bot-message">

        <img src="img/avatarbot.webp" class="bot-avatar">

        <div>${texto}</div>

    </div>
`;

    } else {

        div.innerText = texto;

    }

    contenedor.appendChild(div);

    contenedor.scrollTop = contenedor.scrollHeight;

}


