var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

const btn1 = document.getElementById('btn');


function validateForm() {
    if (document.getElementById('lk').checked) {
        var gender = document.getElementById('lk').value;
    } else if (document.getElementById('pr').checked) {
        var gender = document.getElementById('pr').value;
    } else {
        var gender = "";
    }

    const name = document.getElementById('full-name').value;
    const birthDate = document.getElementById('birth-date').value;
    const messages = document.getElementById('messages').value;
    
    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false
}

function setSenderUI(fullName, birthDate, gender, messages) {
    document.getElementById("current-date").innerHTML =  `<b>Current time</b> : ${Date()}`
    document.getElementById("sender-full-name").innerHTML = `<b>Nama</b> : ${fullName}`
    document.getElementById("sender-birth-date").innerHTML = `<b>Tanggal Lahir</b> : ${birthDate}`
    document.getElementById("sender-gender").innerHTML = `<b>Jenis Kelamin</b> : ${gender}`
    document.getElementById("sender-messages").innerHTML = `<b>Pesan</b> : ${messages}`
}

btn1.addEventListener('click', validateForm);
