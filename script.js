// ALERT FUNCTION
function showAlert(message) {
    let alertBox = document.getElementById("customAlert");
    alertBox.innerText = message;
    alertBox.classList.remove("hidden");

    setTimeout(() => {
        alertBox.classList.add("hidden");
    }, 3000);
}

// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        showAlert("✅ Login Successful!,but you are under threat");
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("otpPage").classList.remove("hidden");
    } else {
        alert("❌ Invalid Login!,get out*!!!!");
    }
}

// OTP
function verifyOTP() {
    let otp = document.getElementById("otpInput").value;

    if(otp === "1234") {
        showAlert("🔓 Access Granted!");
        document.getElementById("otpPage").classList.add("hidden");
        document.getElementById("portfolioPage").classList.remove("hidden");
        startTyping();
    } else {
        alert("❌ Wrong OTP");
    }
}

// TYPING EFFECT
function startTyping() {
    let text = "BTech Student | Web Developer | UI Designer";
    let i = 0;
    let speed = 50;

    function type() {
        if(i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// SKILL CLICK
function skillClick(skill) {
    showAlert("🔥 You clicked " + skill);
}

// LOAD PROJECTS DYNAMICALLY
function loadProjects() {
    let projects = [
        "Portfolio Website",
        "Login System UI",
        "Banking System in C"
    ];

    let list = document.getElementById("projectList");
    list.innerHTML = "";

    projects.forEach(p => {
        let li = document.createElement("li");
        li.innerText = p;
        list.appendChild(li);
    });

    showAlert("📂 Projects Loaded!");
}
