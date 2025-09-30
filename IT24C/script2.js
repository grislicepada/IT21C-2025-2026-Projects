
function updateDisplay(){
    let inputText = document.getElementById("textbox").value;
    document.getElementById("display.immerText = inputText");
    displayText.textContent.value;

}
let quotes = ["Never give up, God has a better plan for you","Mo Laban or LABAN?", "Don't watch the clock, do what it does. KEEP GOING!"];

document.getElementById("btn").addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText=quotes[randomIndex]
});
