const messages = [
    "Bebe nu ai apasat corect..",
    "Nu ai apasat corect.. asa-i?!!",
    "Afirmativ?? Chiar asa??",
    "Te rog pookie!!!!",
    "Mai gandeste-te odata..",
    "Daca spui nu.. o sa plang..",
    "O sa fiu foarte trist..",
    "O sa fiu extrem extrem de trist..",
    "Bine.. nu mai intreb..",
    "Glumeam! Te rog spune DA!"
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