const inputText = document.getElementById("in")
const text = document.getElementById("text-area")

inputText.onkeyup = () =>{
    let a = inputText.value
    text.innerText = a
}