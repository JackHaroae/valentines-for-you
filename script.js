const messages = [
    "Sure kana ba jan😏?",
    "Sure kana talaga🥹??",
    "Weh positive kaba jan😢?",
    "Sige na Pookie please🥹🙏...",
    "Just think about it!",
    "If mag no ka, I will be really sad...",
    "I will be very sad na😟...",
    "i yes mo na lab😭...",
    "Ok sige, I will stop asking na😩...",
    "say yes na please!❤️"
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