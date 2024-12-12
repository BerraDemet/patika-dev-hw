let letters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
let sounds = [
    "assets/boom.wav",
    "assets/clap.wav",
    "assets/hihat.wav",
    "assets/kick.wav",
    "assets/openhat.wav",
    "assets/ride.wav",
    "assets/snare.wav",
    "assets/tink.wav",
    "assets/tom.wav"
];

let buttons = document.querySelector("#buttons");

for (let i = 0; i < letters.length; i++) {
    let newButton = document.createElement("button");
    newButton.textContent = letters[i];
    buttons.appendChild(newButton);

    newButton.addEventListener("click", function () {
        let audio = new Audio(sounds[i]);
        audio.play();
    });
}