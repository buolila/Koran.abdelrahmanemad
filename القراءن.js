// ------------------- تسجيل الدخول وعد الزوار -------------------

const loginContainer = document.getElementById("loginContainer");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");
const mainContainer = document.getElementById("mainContainer");
const welcomeUser = document.getElementById("welcomeUser");
const visitorCountElem = document.getElementById("visitorCount");

// جلب عدد الزوار من التخزين
let visitorsCount = localStorage.getItem("visitorsCount");

if(!visitorsCount){
    visitorsCount = 0;
}

loginBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username && password){

        // زيادة العدد
        visitorsCount++;
        localStorage.setItem("visitorsCount", visitorsCount);

        console.log("دخل الموقع:", username);
        console.log("عدد الزوار:", visitorsCount);

        loginContainer.style.display = "none";
        mainContainer.style.display = "block";

        welcomeUser.textContent = "مرحباً بك: " + username;
        visitorCountElem.textContent = "عدد الزوار: " + visitorsCount;

        const header = document.querySelector("header");
        header.textContent = `📖 القرآن الكريم - مرحباً بك ${username}`;

    } else {
        loginMessage.textContent = "من فضلك أدخل اسم المستخدم وكلمة المرور";
    }
});