document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let role = document.getElementById("role").value;

    if (username === "" || email === "" || password === "" || dob === "" || role === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Signup Successful!\nUsername: ${username}\nEmail: ${email}\nDOB: ${dob}\nRole: ${role}`);}
    })
