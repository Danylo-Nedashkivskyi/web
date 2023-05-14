function reg()
{
    let name_s = document.getElementById("name").value;
    let email_s = document.getElementById("email").value;
    let pass_s = document.getElementById("pass").value;
    let pass_r = document.getElementById("pass_repeat").value;

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    function doesEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (doesEmailExist(email_s)) {
        alert("There already is an account with this e-mail!");
        return;
      }
      else{
        if(pass_s === pass_r){
            let newUser = { 
                name: name_s, 
                email: email_s, 
                pass: pass_s,
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
        
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                console.log(`${key}: ${value}`);
              }
    
            alert("You have been registered!");
        }
        else{
            alert("Passwords don't match!");
        }   
      }
}  

function log()
{
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if(users[i].pass === pass){
                    alert("Welcome!");
                    sessionStorage.setItem('logged', '1');
                    sessionStorage.setItem('name', users[i].name);
                    sessionStorage.setItem('email', users[i].email);
                }
                else{
                    alert("Incorrect password!");
                    break;
                }
            }
          }
      }
      else{
        alert("There is no account with this e-mail!");
      }
}   