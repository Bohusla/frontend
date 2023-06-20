function signUp(e) {
  // console.log('its work');
  e.preventDefault();
  let data = {
    "username": document.getElementById("name").value,
    "password": document.getElementById("psw").value,

    "confirm_password": document.getElementById('psw-repeat').value,
    
  };
  console.log('data', data);
  fetch(serverUrl + "/signup", {
    "headers": {
      "content-type": "application/json",
    },
    "body": JSON.stringify(data),
    "method": "POST",

  })
    .then(response => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // localStorage
      localStorage.setItem('id', data.id);
      localStorage.setItem('jwt', data.jwt);

    });

}

/*
signup.js:11     POST http://65.109.13.139:9191/signup 400 (Bad Request)
errors
: 
{errors: {…}, _message: 'User validation failed', name: 'ValidationError', message: 'User validation failed: username: Error, expected `username` to be unique. Value: `nb`'
*/
