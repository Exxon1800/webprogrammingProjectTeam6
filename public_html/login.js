// Get the <span> element that closes the modal
span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === document.getElementById('myModal1')) {
        document.getElementById('myModal1').style.display = "none";
    }
    if (event.target === document.getElementById('myModal2')) {
        document.getElementById('myModal2').style.display = "none";
    }
}

function loginPopup() {
    document.getElementById('myModal1').style.display = "block";
    document.getElementById('LoginButton').addEventListener('click', login);
}

function login() {
    var user = document.getElementById('logemail').value;
    var keyvalue = localStorage.getItem(user);
    var lastrecord = localStorage.getItem(keyvalue);

    var databox = document.getElementById('databox');
    databox.innerHTML = lastrecord;

    document.getElementById('myModal1').style.display = "none";
}

function closeLogin() {
    document.getElementById('myModal1').style.display = "none";
}

function signupPopup() {
    document.getElementById('myModal2').style.display = "block";
    document.getElementById('SignUpButton').addEventListener('click', newitem);
}

function newitem() {
    var key = document.getElementById('signemail').value;
    var value = key + 'value';
    localStorage.setItem(key, value);
    localStorage.setItem(value, '');
    document.getElementById('myModal2').style.display = "none";
}

function closeSignup() {
    document.getElementById('myModal2').style.display = "none";
}

function search() {
    var username = document.getElementById('logemail').value;
    var keyvalue = localStorage.getItem(username);
    var lastrecord = localStorage.getItem(keyvalue);

    var record = document.getElementById('sidebar-search').value;
    var newrecord = lastrecord + '<br>' + record;

    localStorage.setItem(keyvalue, newrecord);

    var recentrecord = localStorage.getItem(keyvalue);
    var databox = document.getElementById('databox');
    databox.innerHTML = recentrecord;
}

function clearmemory() {
    var username = document.getElementById('logemail').value;
    var keyvalue = localStorage.getItem(username);
    localStorage.removeItem(keyvalue);

    var result = localStorage.getItem(keyvalue);
    var databox = document.getElementById('databox');
    databox.innerHTML = result;
}


