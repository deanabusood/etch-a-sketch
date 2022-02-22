
function createPad(size = 16){
    const pad = document.querySelector(".pad");
    let totalDivs = size * size;
    let divSize = `${800/size}px`;

    pad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


    for(let i = 0; i < totalDivs; i++){
        let padDiv = document.createElement("div");

        padDiv.style.height = `${divSize}px`;
        padDiv.style.width = `${divSize}px`;
        padDiv.classList.add("inner-pad");

        padDiv.addEventListener('mouseover', () => {
            padDiv.style.background = "darkolivegreen";
        });
        pad.appendChild(padDiv);
    }
}

function changePadSize(){
    const size = prompt("Input a number between 2-100");
    
    if(size >= 2 && size <= 100){
    const padDivs = document.querySelectorAll(".inner-pad");
        padDivs.forEach(div => {
        div.remove();
    });
    createPad(size);
    }  
    else{
        alert("Please input a valid number between 2-100");
    }
}

// controls black button
function triggerColor(){
    const padDivs = document.querySelectorAll(".inner-pad");
        padDivs.forEach(div => {
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "darkolivegreen";
        });
    });
}

// controls eraser button
function triggerEraser(){
    const padDivs = document.querySelectorAll(".inner-pad");
        padDivs.forEach(div => {
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "white";
        });
    });
}

// controls clear button
function clearPad(){
    const padDivs = document.querySelectorAll(".inner-pad");
    padDivs.forEach(div => {
    div.style.backgroundColor = "white";
});   
}

// event listener added on every button
const buttons = document.querySelectorAll("button");
buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        buttonClicked(button.id);
    });
});

// applies function for each button clicked
function buttonClicked(button){
    if(button == "color-button"){
        triggerColor();
    }
    else if(button == "eraser-button"){
        triggerEraser();
    }
    else if(button == "changepad-button"){
        changePadSize();
    }
    else if(button == "clear-button"){
        clearPad();
    }
}


createPad();