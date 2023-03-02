const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username} keep going!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);