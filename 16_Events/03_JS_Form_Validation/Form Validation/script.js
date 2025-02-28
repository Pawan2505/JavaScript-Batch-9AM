
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

    let nameRegex = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
    
    if (!(nameRegex.test(name))) {
        seterror(
          "fname",
          "username only contain letters, numbers, and underscores and Must be between 6 to 20 characters long"
        );
        isvalid = false;
    }
  

       let email = document.forms["myForm"]["femail"].value;

       let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       if (!emailRegex.test(email)) {
         seterror(
           "femail",
           "enter valid email"
         );
         isvalid = false;
    }
    
        let phone = document.forms["myForm"]["fphone"].value;

        let phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
          seterror("fphone", "enter 10 digit number");
          isvalid = false;
    }
    
        let password = document.forms["myForm"]["fpassword"].value;

        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
          seterror("fpassword", "Minimum length of 8 characters");
          isvalid = false;
        }

    let cpassword = document.forms["myForm"]["fcpassword"].value;

    if (cpassword  != password) {
      seterror("fcpassword", "Passowrd is not same");
      isvalid = false;
    }

    return isvalid;
}