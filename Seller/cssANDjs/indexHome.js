let greet = document.getElementById("greet");

setTimeout(() => {
    document.location.href = "/#greetings";
}, 3500);

setInterval(() => {
    let date = new Date();
    console.log(date.getHours());
    if (date.getHours() >= 5 && date.getHours() <= 11)
        greet.innerHTML = "Good Morning";
    else if (date.getHours() > 11 && date.getHours() <= 15)
        greet.innerHTML = "Good Afternoon";
    else if (date.getHours() > 15 && date.getHours() <= 19)
        greet.innerHTML = "Good Evening";
    // else if (date.getHours() > 23 || date.getHours() <= 5)
    //     greet.innerHTML = "Good Evening";
}, 3000);
