function Validate()
{
    const email = document.getElementById("email").value;
    const parola = document.getElementById("password").value;
    let regex = /^([a-z\d-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regex.test(email)) {
        if(!localStorage.getItem(email)) {
            alert("The account doesn't exist!");
        }
        else {
            if(localStorage.getItem(email) !== parola) {
                alert("Inccorect password!");
            }
            else {
                 window.open('creepypasta.html', '_blank');
            }
        }
    }
    else {
        alert("The email is wrong!")
    }
}