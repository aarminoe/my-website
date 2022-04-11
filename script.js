const h2 = document.createElement("h2");
h2.textContent = "";
document.querySelector("body").appendChild(h2);

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp"){
        alert("What's up?")
    }
})

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        alert("What did you think was going to happen?")
    }
})

function respond() {
    let str = document.getElementById("text1").value;
    alert (`${str} is an interesting name.`)
}

document.addEventListener("keydown", function (e) {
    if(e.key == "ArrowLeft") {
        alert("Ok, now you're being ridiculous.")
    }
})

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight")
    alert ("CORRECT!!!")
})