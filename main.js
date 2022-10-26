function increase_number(id){
    let number = parseInt(document.getElementById(id).textContent);
    document.getElementById(id).textContent = number+1;
}
function decrease_number(id){
    let number = parseInt(document.getElementById(id).textContent);
    if (number > 1){
        document.getElementById(id).textContent = number-1;
    }
}
function hide_elements(){
    let elements = document.getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.add("hidden");
    }
}

function return_elements(){
    let elements = document.getElementsByClassName("element");
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.remove("hidden");
    }
}

function check_checked(){
    let elements = document.getElementsByClassName("tocheck");
    let bool = false;
    for (let i = 0; i < elements.length; i++){
        if (elements[i].checked){
            bool = true;
            break;
        }
    }
    return bool;
}

function show_all(){
    if (document.getElementById("all").checked == false){
        hide_elements();
    }
    else{
        return_elements();
        let elements = document.getElementsByClassName("tocheck");
        for (let i = 0; i < elements.length; i++){
            elements[i].checked = false;
        }
    }
}

function show_some_content(className, idName){
    if (document.getElementById("all").checked == true){
        hide_elements();
        document.getElementById("all").checked = false;
    }
    let elements = document.getElementsByClassName(className);
    if (document.getElementById(idName).checked == false){
        for (let i = 0; i < elements.length; i++){
            elements[i].classList.add("hidden");
        }
    }
    else{
        if (check_checked){
            for (let i = 0; i < elements.length; i++){
                elements[i].classList.remove("hidden");
            }
        }
        else{
            hide_elements();
            for (let i = 0; i < elements.length; i++){
                elements[i].classList.remove("hidden");
            }
        }
    }
}