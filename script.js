const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const usernameInput = document.getElementById("usernameInput");
const typingText = document.getElementById("typingText");
const themeToggle = document.getElementById("themeToggle");

function sendMessage() {

  const message = messageInput.value.trim();
  const username = usernameInput.value.trim() || "Anonymous";

  if (message === "") return;

  const messageElement = document.createElement("div");
  messageElement.classList.add("message");

  messageElement.innerHTML = `
    <div class="username">${username}</div>
    <div>${message}</div>
  `;

  chatBox.appendChild(messageElement);

  messageInput.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}

function addEmoji(emoji) {
  messageInput.value += emoji;
  messageInput.focus();
}

messageInput.addEventListener("keypress", function(event) {

  typingText.style.display = "block";

  clearTimeout(window.typingTimer);

  window.typingTimer = setTimeout(() => {
    typingText.style.display = "none";
  }, 1000);

  if (event.key === "Enter") {
    sendMessage();
  }
});

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

});
