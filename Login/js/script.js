class Bank {

    validateAccount(accno) {
        return accno in localStorage ? true : false
    }

    authenticate() {
        let acno = accno.value;
        let pass = password.value;
        if (this.validateAccount(acno)) {
            let data = JSON.parse(localStorage.getItem(acno))
            if (data.password == pass) {
                sessionStorage.setItem("user", acno)
                location.href = "../Landing_page/index.html"

            } else {
                alert("Invalid password")
            }
        }
        else {
            alert("Invalid account number")
        }
    }

    
}

var bank = new Bank;