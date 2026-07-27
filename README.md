# Web_Agente_BimBam
Contiene el index.html con la configuración del chat. 
# 🤖 BimBam Agent v2.0

Asistente Inteligente basado en IA para atención al cliente de **BimBam Buy**.

El proyecto implementa un sistema **RAG (Retrieval-Augmented Generation)** utilizando documentos PDF de la empresa para responder preguntas sobre garantías, devoluciones, tiempos de envío, métodos de pago, programa de afiliados y demás información corporativa.

El sistema está compuesto por:

- Backend desarrollado en **Python + Flask**
- Motor RAG con **LangChain + FAISS**
- Embeddings mediante **HuggingFace**
- Modelo LLM servido desde **OpenRouter**
- Frontend desarrollado en **HTML + CSS + JavaScript**
- Backend desplegado en **Railway**
- Frontend desplegado en **Netlify**

---

# Arquitectura

```
Usuario
    │
    ▼
Frontend (Netlify)
    │
    ▼
Flask API (Railway)
    │
    ▼
RAG Manager
    │
    ├── FAISS
    ├── Embeddings HuggingFace
    ├── PDFs
    ▼
OpenRouter (LLM)
```

---

# Tecnologías utilizadas

## Backend

- Python 3.11
- Flask
- Flask-CORS
- Gunicorn
- LangChain
- FAISS
- HuggingFace Embeddings
- OpenRouter API
- PyMuPDF
- RecursiveCharacterTextSplitter

---

## Frontend

- HTML5
- CSS3
- JavaScript ES6
- Fetch API
- Animación de escritura (Typing Indicator)
- Diseño Responsive
- Glassmorphism UI

---

# Funcionalidades

✔ Chat inteligente

✔ Recuperación de información mediante RAG

✔ Consulta únicamente sobre documentos internos

✔ Respuestas usando OpenRouter

✔ Índice FAISS persistente

✔ Consultas rápidas

✔ Indicador de escritura

✔ Historial local

✔ Botón para limpiar conversación

✔ Compatible con móviles

---

# Estructura del proyecto

```
Agente_Bim_Bam_Buy/

│
├── app.py
├── config.py
├── routes.py
├── rag_manager.py
├── crear_indice.py
├── requirements.txt
├── render.yaml
│
├── pdfs/
│      Programa_Afiliados.pdf
│      Garantias.pdf
│      Reembolsos.pdf
│      Pagos.pdf
│      Envios.pdf
│
├── vectorstore/
│      index.faiss
│      index.pkl
│
├── templates/
│
├── static/
│
└── README.md
```

---

# Instalación

## Clonar

```bash
git clone https://github.com/EditionDP/Agente_Bim_Bam_Buy.git

cd Agente_Bim_Bam_Buy
```

---

## Crear entorno virtual

Windows

```bash
python -m venv .venv

.venv\Scripts\activate
```

Linux

```bash
python3 -m venv .venv

source .venv/bin/activate
```

---

## Instalar dependencias

```bash
pip install -r requirements.txt
```

---

# Variables de entorno

Crear un archivo `.env`

```text
OPENROUTER_API_KEY=xxxxxxxxxxxxxxxx

MODEL_NAME=meta-llama/llama-3.3-70b-instruct

EMBEDDING_MODEL=sentence-transformers/all-MiniLM-L6-v2

OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

TEMPERATURE=0
```

---

# Construcción del índice

Los documentos PDF deben estar en

```
pdfs/
```

Luego ejecutar

```bash
python crear_indice.py
```

Esto genera

```
vectorstore/

index.faiss

index.pkl
```

Estos archivos deben incluirse en el despliegue para evitar reconstruir el índice.

---

# Ejecutar localmente

```bash
python app.py
```

Servidor

```
http://localhost:5000
```

---

# Endpoints

## Estado

GET

```
/status
```

Respuesta

```json
{
    "success": true,
    "data": {
        "status":"online"
    }
}
```

---

## Health

GET

```
/health
```

---

## Consultar

POST

```
/preguntar
```

Body

```json
{
    "pregunta":"¿Qué cubre la garantía?"
}
```

Respuesta

```json
{
    "success":true,
    "data":{
        "respuesta":"..."
    }
}
```

---

# Frontend

El frontend es una SPA desarrollada únicamente con HTML, CSS y JavaScript.

Características:

- Interfaz tipo chat.
- Animación de escritura.
- Preguntas rápidas.
- Diseño responsivo.
- Comunicación mediante Fetch API.
- Limpieza del historial.
- Indicador visual de estado del asistente.

La URL del backend se configura mediante una constante:

```javascript
const URL_CHAT_OFICIAL =
"https://agente-bimbam-buy-production.up.railway.app/preguntar";
```

---

# Despliegue

## Backend

Railway

Comando de inicio

```text
gunicorn app:app
```

Variables configuradas desde Railway.

---

## Frontend

Netlify

Simplemente publicar el proyecto HTML.

---

# Configuración CORS

El backend permite conexiones desde

```python
https://agentebimbam.netlify.app
```

y

```python
localhost
```

mediante Flask-CORS.

---

# Modelo utilizado

LLM

```
meta-llama/llama-3.3-70b-instruct
```

Proveedor

```
OpenRouter
```

Embeddings

```
sentence-transformers/all-MiniLM-L6-v2
```

Vector Store

```
FAISS
```

---

# Flujo RAG

```
Pregunta

↓

Embeddings

↓

FAISS

↓

Recuperación de documentos

↓

Construcción del contexto

↓

OpenRouter

↓

Respuesta
```

---

# Autor

**Carlos**

Proyecto desarrollado como solución de IA para **BimBam Buy**, integrando técnicas modernas de Retrieval-Augmented Generation (RAG), modelos de lenguaje de gran escala y una interfaz web para soporte inteligente al cliente.

---

# Licencia

Proyecto desarrollado con fines educativos y demostrativos.
