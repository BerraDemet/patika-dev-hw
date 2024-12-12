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

let container = document.querySelector("#buttons");

for (let i = 0; i < letters.length; i++) {
    let newButton = document.createElement("button");
    newButton.textContent = letters[i];
    container.appendChild(newButton);

    newButton.addEventListener("click", function () {
        let audio = new Audio(sounds[i]);
        audio.play();
        newButton.classList.add("active");

        setTimeout(() => {
            newButton.classList.remove("active");
        }, 100);
    });
}


document.addEventListener("keydown", function (event) {
    let index = letters.indexOf(event.key.toUpperCase());

    if (index !== -1) {
        let button = container.children[index];


        let audio = new Audio(sounds[index]);
        audio.play();


        button.classList.add("active");

        setTimeout(() => {
            button.classList.remove("active");
        }, 100);
    }
});
