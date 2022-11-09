function adaugaUtilizator() {
    let email = document.getElementById('email').value;
    function Validate()
    {
        let regex = /^([a-z\d-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        if (regex.test(email)) {
            if(localStorage.getItem(email)) {
                alert("The account already exists!");
                return 0;
            }
            return 1;
        }
        else {
            alert("Your email is not valid!")
            return 0
        }
    }
    if(Validate()) {
        let utilizator = {
            email: document.getElementById('email').value,
            username: document.getElementById('username'),
            parola: document.getElementById('parola').value
        }
        localStorage.setItem(email, utilizator['parola']);
        window.open('login.html', '_blank');
    }
}