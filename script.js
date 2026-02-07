const messages = [
    "Sure jud ka😏?",
    "Sure najud na🥹??",
    "Weh positive jud na😢?",
    "Sige na Pookie please🥹🙏...",
    "Just think about it!",
    "If mag no ka, I will be really sad jud...",
    "I will be very sad na😟...",
    "sad nako mo hilak jud ko😭...",
    "Ok sige, I will stop asking na😩...",
    "atik ra, say yes na please!❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}