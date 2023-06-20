
let loginData = {};
function signIn(e) {
    e.preventDefault();
    loginData = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
    };
    console.log(loginData);

    postLogin()
        .then((response) => {
            console.log("Ok", response);
            return response;
        })
        .then(() => {
            document.location.href = "/";
        })
        .catch((errors) => {
            console.log("error", errors);
        });
}

let postLogin = function () {
    return new Promise(function (resolve, reject) {   //promis function
        fetch(serverUrl + "/signin", {
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(loginData),
            "method": "POST",
        })
            .then(response => {
                console.log("responce", response);
                return response.json();
            })
            .then((data) => {
                console.log("data for server", data);
                if (data.error) {
                    reject(data.error) //error
                } else {
                    resolve(data) //sucsess 
                }
            })
    })
}
/*let loginData = {};
function signin(e) {
    e.preventDefault();
    loginData = {
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value,
        // "confirm_password": document.getElementById('psw-repeat').value
    };
    console.log(loginData);

    postLogin
        .then(response => {
            console.log("OK", response);
        })
        .catch((error) => {
            console.log("Eror", error);
        });

}
let postLogin = new Promise(function (resolve, reject) { //promis function
    fetch(serverURL + "signin", {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(loginData),
        "method": "POST",
    })
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log("data for server", data);
            if (data.errors) {
                reject(data.errors) // Error
            } else {
                resolve(data)  //sucsess

            }
        })


})*/
function singUp(e) {
    e.preventDefault();
    console.log('All work');
    let data = {
        "username": document.getElementById('name').value,
        "password": document.getElementById('psw').value,
        "confirm_password": document.getElementById('psw-repeat').value
    };
    console.log('Data: ', data);

    fetch(serverURL + 'signup', {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(data),
        "method": "POST",

    })
        .then(response => {
            return response.json();
        })
        .then((data) => console.log(data));
}