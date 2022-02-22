
function createPad(size = 16){
    const pad = document.querySelector(".pad");
    let totalDivs = size * size;
    let width = 960 / size;

    for(let i = 0; i < totalDivs; i++){
        let div = document.createElement("div");
        div.classList.add("inner-pad");
        div.setAttribute("style", "background-color: white;");

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "darkolivegreen";
        });

        pad.appendChild(div);
    }
}

function changePadSize(size){
    if(size >= 2 && size <= 100){
    const padDivs = document.querySelectorAll(".inner-pad");
        padDivs.forEach(div => {
        div.remove();
    });
    createPad(size);
    }  
    else{
        //alert or do trigger something
        return;
    }
}

//applies function for each button clicked
function buttonClicked(button){
    if(button == "color-button"){
        triggerColor();
    }
    else if(button == "eraser-button"){
        triggerEraser();
    }
    else if(button == "clear-button"){
        clearPad();
    }
}

// event listener added on every button
const buttons = document.querySelectorAll("button");
buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        buttonClicked(button.id);
    });
});

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



createPad();

