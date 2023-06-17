function setError0(error) {
    const fbox = document.getElementById("firstname");
    let a = document.getElementsByClassName("formerror");
    a[0].innerHTML = error;
    fbox.classList.add("error");

}
function setError1(error) {
    const lbox = document.getElementById("lastname");
    let a = document.getElementsByClassName("formerror");
    a[1].innerHTML = error;
    lbox.classList.add("error");
}
function setError2(error) {
    const ebox = document.getElementById("email");
    let a = document.getElementsByClassName("formerror");
    a[2].innerHTML = error;
    ebox.classList.add("error");
}
function setError3(error) {
    const pbox = document.getElementById("password");
    let a = document.getElementsByClassName("formerror");
    a[3].innerHTML = error;
    pbox.classList.add("error");
}
function validateError() {
    var returnval = true;
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    const ename = document.getElementById("email").value;
    const pname = document.getElementById("password").value;

    if (fname.length == 0) {
        setError0("*First name is required");
        returnval = false;
    }
    if (fname.length <= 3 && fname.length>0) {
        setError0("*First name is too short");
        returnval = false;
    }


     if (lname.length == 0) {
        setError1("*Last name is required");
        returnval = false;
    }
    if (ename.length == 0) {
        setError2("*Email Address is required");
        returnval = false;
    }

    if (pname.length == 0) {
        setError3("*Password is required");
        returnval = false;
    }

    


    return returnval;
}


