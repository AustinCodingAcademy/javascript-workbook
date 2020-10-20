let arr = ["Mastodon", "Pterodactyl", "Triceratops", "Saber-Toothed Tiger", "Tyrannosaurus"]
let text = "";

const GoGo = () => {
    for (let i = 0; i < arr.length; i++) {
        text += arr[i] + "<br>";
    }
    document.getElementById("message").innerHTML = text;
}