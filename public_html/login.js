// Get the <span> element that closes the modal
span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function loginPopup() {
    document.getElementById('myModal').style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeLogin() {
    document.getElementById('myModal').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}