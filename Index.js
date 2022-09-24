let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function i() {
    count = count + 1
    countEl.textContent = count
}

function d() {
    
    if (count <= 0){
        count = 0 
        countEl.textContent = count
    } else{
        count = count - 1
        countEl.textContent = count
    }
}

function a() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}

