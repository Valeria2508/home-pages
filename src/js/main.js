import "../css/style.css"

// script.js

// Seleccionar elementos
const greeting = document.getElementById('greeting');
const message = document.getElementById('message');
const wishes = document.getElementById('wishes');

// Mensajes que cambian con tiempo
const messages = [
    "¡Hola, Tim Berners-Lee! 🎉",
    "Eres una inspiración para el mundo de la web. 🌐",
    "¡Que este año sea increíble para todos nosotros! 💻",
    "Espero que todos consigan sus metas este año. ✨"
];

// Cambiar texto cada 3 segundos
let index = 0;
setInterval(() => {
    greeting.textContent = messages[index];
    index = (index + 1) % messages.length;
}, 3000);

// Agregar un efecto interactivo al pasar el ratón
wishes.addEventListener('mouseover', () => {
    wishes.style.color = '#ff4500';
    wishes.textContent = "¡Tú puedes lograrlo! 💪";
});

wishes.addEventListener('mouseleave', () => {
    wishes.style.color = '#7fff00';
    wishes.textContent = "Espero que todos consigan el trabajo de sus sueños este año. 💼✨";
});
