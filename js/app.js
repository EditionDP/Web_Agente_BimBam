// ========================================
// Configuración
// ========================================

const CONFIG = {

    API_URL: "https://agente-bimbam-buy-production.up.railway.app/preguntar"

};


// ========================================
// Enviar mensaje
// ========================================

async function enviarMensaje() {

    const inputElement = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');
    const statusElement = document.getElementById('agent-status');

    const texto = inputElement.value.trim();

    if (!texto) return;

    agregarMensaje(texto, 'user');

    inputElement.value = '';

    inputElement.disabled = true;
    sendButton.disabled = true;

    statusElement.innerText = "Escribiendo...";
    statusElement.style.color = "#3b82f6";

    const indicadorCarga = mostrarIndicadorCarga();

    try {

        const respuesta = await fetch(CONFIG.API_URL, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                pregunta: texto
            })

        });

        const data = await respuesta.json();

        indicadorCarga.remove();

        agregarMensaje(

            data?.data?.respuesta ||

            "No fue posible obtener respuesta.",

            'bot'

        );

    }

    catch (error) {

        console.error(error);

        indicadorCarga.remove();

        agregarMensaje(

            "Lo siento, no pude conectarme con el servidor central en este momento.",

            'bot'

        );

    }

    finally {

        inputElement.disabled = false;
        sendButton.disabled = false;

        statusElement.innerText = "Agente Activo";
        statusElement.style.color = "#4ade80";

        inputElement.focus();

    }

}


// ========================================
// Animación de escritura
// ========================================

function mostrarIndicadorCarga() {

    const contenedor = document.getElementById('chat-messages');

    const div = document.createElement('div');

    div.className = 'message bot';

    div.innerHTML = `
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    contenedor.appendChild(div);

    contenedor.scrollTop = contenedor.scrollHeight;

    return div;

}


// ========================================
// Enter
// ========================================

function evaluarEnter(event) {

    if (event.key === 'Enter') {

        enviarMensaje();

    }

}


// ========================================
// Preguntas frecuentes
// ========================================

function enviarSugerencia(textoFaq) {

    document.getElementById('user-input').value = textoFaq;

    enviarMensaje();

}


// ========================================
// Limpiar chat
// ========================================

function limpiarChat() {

    const contenedor = document.getElementById('chat-messages');

    contenedor.innerHTML = `
        <div class="message bot">
            ¡Historial borrado con éxito! ¿En qué otra cosa te puedo colaborar hoy?
        </div>
    `;

}
