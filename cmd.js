function reveal(id) {
    switch(id){
        case 'message':
            let encodedMessage = document.getElementsByClassName(id);

            document.querySelectorAll('.message').forEach(function(element) {
                element.style.display = "block";
                element.style.visibility = "visible";
            });
            break;
        case 'web-counter':
            let webCountImage = document.getElementById(id);
            webCountImage.style.display = "block";
            webCountImage.style.visibility = "visible";
            break;
    };
};

function giveCreditWhereCreditIsDue() {
    window.alert("The following is a message for this so-called 'Order of 33'")
    window.alert("p_ RHN L$$D MH _BG@ MA$ 0K$8MHK H_ MABL P$9LBM$  EHHD GH _NKMA$K MA8G MA$ K$E8MBO$ H_ tHK!8G h@8FL  4BMA EHO$  1j")
    let chosenImage = document.getElementById("houseBoolLogo")
    chosenImage.style.visibility = "visible"
    chosenImage.style.display = "block"
}

function loginYouScoundrel() {
    username = prompt("Please enter your username.")
    password = prompt("Please enter your password.")
    if (username == "1") {
        if (password == "2") {
            if (confirm("Access granted!\n\nIdentity confirmed, file will now download.")) {
                download()
            } else {
                download()
            }
        } else {
            window.alert("Access denied.")
        }
    }
}

function download() {
    link = document.createElement("a")
    link.href = "./whistle.mp4"
    link.target = "_blank"
    link.download = "noTakesiesBacksies.mp4"
    link.click()
}