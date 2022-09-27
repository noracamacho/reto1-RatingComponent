
function getValue(value) {
    if(document.getElementsByClassName("rating-btn-selected")[0]) {
        document.getElementsByClassName("rating-btn-selected")[0].classList.remove("rating-btn-selected");
    }
    document.getElementsByClassName(value)[0].classList.add("rating-btn-selected");
    result.innerHTML = 'You selected '+ value + ' out of 5';
    document.getElementsByClassName("submit-btn")[0].setAttribute("onclick","submitElement()"); 
}

function submitElement() {
    document.getElementsByClassName("box-1")[0].style.display = "none";
    document.getElementsByClassName("box-2")[0].style.display = "flex";
}

function returnElement() {
    document.getElementsByClassName('box-1')[0].style.display = "flex";
    document.getElementsByClassName("box-2")[0].style.display = "none";
    document.getElementsByClassName("submit-btn")[0].setAttribute("onclick",""); 
    document.getElementsByClassName("rating-btn-selected")[0].classList.remove("rating-btn-selected");
}