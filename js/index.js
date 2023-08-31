// const name = prompt('Enter your name:');
// const imageURL = prompt('Enter the image URL Untuk Foto Profile:');

// const nameElement = document.getElementById('name');
// const imageElement = document.getElementById('userImage');

// nameElement.textContent = name;
// imageElement.src = imageURL;

// nav

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.remove('active');
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'none';
});

// data
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["message"].value;

    if (name === "" || birthDate === "" || gender === "" || messages === "") {
        alert("Data tidak boleh kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}