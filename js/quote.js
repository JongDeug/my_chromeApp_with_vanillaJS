const quotes = [
    { quote : "Seeing is believing." },
    { quote : "Whatever you do, make it pay."},
    { quote : "Time is gold."},
    { quote : "Pain past is pleasure."},
    { quote : "She can do, he can do, why not me?"},
    { quote : "Life is venture or nothing."},
    { quote : "No pain no gain."},
    { quote : "Do not count the eggs before they hatch."},
    { quote : "Let bygones be bygones."},
    { quote : "No sweat, no sweet."},
    { quote : "You will never know until you try."},
];

const quotesContainer = document.querySelector("#quote");

// paint quotes randomly
function paintQuotes(){
    const index = Math.floor(Math.random()*quotes.length);
    quotesContainer.innerText = `Today Quote : ${quotes[index].quote}`;
}
paintQuotes();
