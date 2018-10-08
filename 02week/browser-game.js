document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("form1").addEventListener("submit", e =>{
        e.preventDefault();
        const elements = e.target.getElementsByTagName("input");
        const word = elements[0].value;
        const message = pigLatin(word);
        document.getElementById("message").textContent = message;
    });
});
