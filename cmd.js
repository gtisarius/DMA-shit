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
    window.alert("4$ A8O$ GHMABG! MH H__$K 9NM 9EHH@  MBF$  8G@ LP$8M")
    window.alert("4$ LA8EE _B!AM HG MA$ 9$80A$L  P$ LA8EE _B!AM HG MA$ E8G@BG! !KHNG@L  P$ LA8EE _B!AM BG MA$ _B$E@L 8G@ BG MA$ LMK$$ML  P$ LA8EE _B!AM BG MA$ ABEEL  P$ LA8EE G$O$K LNKK$G@$K     4BGLMHG jANK0ABEE")
    window.alert("mHK MA$ G$QM @8KD FHGMAL  P$ PBEE P8!$ 8 P8K G$O$K L$$G 9R 8GR _HK0$ H_ F8G  mHK P$ 8K$ oHNL$ iHHE")
    window.alert("6HN F8R M8D$ HNK EBO$L")
    window.alert("iNM RHN EE G$O$K M8D$")
    window.alert("v2y myllkvtg")
    window.alert("nsvyph kvt2z ivvsg")
    let chosenImage = document.getElementById("houseBoolLogo")
    chosenImage.style.visibility = "visible"
    chosenImage.style.display = "block"
}

function loginYouScoundrel() {
    username = prompt("Please enter your username.")
    password = prompt("Please enter your password.")
    if (username == "housebool") {
        if (password == "ciscouberalles") {
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