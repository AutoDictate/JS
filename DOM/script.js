var number  = Math.floor(Math.random()*10)+1
var points = Number(10)
function check(){
    var n = Number(document.getElementById("num").value)
    var res = document.getElementById("result")
    var scores = document.getElementById("score")
    if(points>0)
    {
            if(n==number){
            res.innerHTML = "You are Right"
            alert("You won the Game !!!!")
            location.reload()
        }
        else{
            points  = points-1
            res.textContent = "You are Wrong"
            scores.textContent = "Your Score : "+points
        }
    }
    else{
        alert("Just restart the Game")
        location.reload()
    }
}