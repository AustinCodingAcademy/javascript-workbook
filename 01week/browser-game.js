document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("form1").addEventListener("submit", e =>{
        e.preventDefault();
        const elements = e.target.getElementsByTagName("input");
        const player1 = elements[0].value;
        const player2 = elements[1].value;
        const message = rockPaperScissors(player1, player2);
        document.getElementById("message").textContent = message;
    });
});
