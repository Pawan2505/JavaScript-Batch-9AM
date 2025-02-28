
function clearErrors() {
    let errors = document.getElementsByClassName('error')

    for (let item of errors) {
        item.innerHTML = "";
    }
}


function seterror(name, error) {
    let spanelement = document.getElementsByName(name)[0].nextElementSibling;
    
    spanelement.innerHTML = error;
}


function validateForm() {
    clearErrors();

    let isvalid = true;

    let name = document.forms["myForm"]["fname"].value;
    
    if (name.trim().length < 5) {
        seterror("fname", "username length should be more than 5 character");
        isvalid = false;
    }
  

    return isvalid;
}