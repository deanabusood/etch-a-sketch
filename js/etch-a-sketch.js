
function createPad(size = 16){
    const pad = document.querySelector(".pad");
    let totalDivs = size * size;
    let width = 960 / size;

    for(let i = 0; i < totalDivs; i++){
        let div = document.createElement("div");
        div.classList.add("inner-pad");
        div.setAttribute("style", "background-color: white");

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });


        pad.appendChild(div);
    }
}

function changePadSize(size){
    if(size >= 2 && size <= 100){
    const padDivs = document.querySelectorAll(".inner-pad");
        padDivs.forEach(pad => {
        pad.remove();
    });
    createPad(size);
    }  
    else{
        //alert or do trigger something
        return;
    }
}

function clearPad(){
    const padDivs = document.querySelectorAll(".inner-pad");
        padDivs.forEach(pad => {
        pad.style.backgroundColor = "white";
    });
}


createPad();

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () =>{
    clearPad();
});