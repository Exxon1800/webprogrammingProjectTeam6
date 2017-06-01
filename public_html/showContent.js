selectedLang = "Korean"; //initial value

function langSelect(language) {
    selectedLang = language;
    //show selected catagory when the language is changed
    if (document.getElementById("char").classList.contains("selected")) {
        selectedCatagory = "char";
    } else if (document.getElementById("word").classList.contains("selected")) {
        selectedCatagory = "word";
    } else {
        selectedCatagory = "sent";
    }
    selected(selectedCatagory);
    listSelect(selectedLang);
}

function listSelect(language) {
    var koreanChar = document.querySelectorAll(".koreanChar");
    var vietChar = document.querySelectorAll(".vietChar");
    var nederChar = document.querySelectorAll(".nederChar");
    //initiate
    if (language === "Korean") {
        koreanChar[0].classList.add("list-opened");
        koreanChar[1].classList.add("list-opened");
        vietChar[0].classList.remove("list-opened");
        vietChar[1].classList.remove("list-opened");
        nederChar[0].classList.remove("list-opened");
        nederChar[1].classList.remove("list-opened");
    } else if (language === "Viet") {
        koreanChar[0].classList.remove("list-opened");
        koreanChar[1].classList.remove("list-opened");
        vietChar[0].classList.add("list-opened");
        vietChar[1].classList.add("list-opened");
        nederChar[0].classList.remove("list-opened");
        nederChar[1].classList.remove("list-opened");

    }else {
        koreanChar[0].classList.remove("list-opened");
        koreanChar[1].classList.remove("list-opened");
        vietChar[0].classList.remove("list-opened");
        vietChar[1].classList.remove("list-opened");
        nederChar[0].classList.add("list-opened");
        nederChar[1].classList.add("list-opened");
    }

}

function selected(cat) {
    selectedCatagory = cat;
    fullSelection = selectedCatagory.concat(selectedLang);

    //show the selected marker at the right catagory
    switch (selectedCatagory) {
        case "char":
            document.getElementById("char").classList.add("selected");
            document.getElementById("word").classList.remove("selected");
            document.getElementById("sent").classList.remove("selected");
            break;
        case "word":
            document.getElementById("char").classList.remove("selected");
            document.getElementById("word").classList.add("selected");
            document.getElementById("sent").classList.remove("selected");
            break;
        default:
            document.getElementById("char").classList.remove("selected");
            document.getElementById("word").classList.remove("selected");
            document.getElementById("sent").classList.add("selected");
    }

//selects which page(id) to show
    //hide all the pages
    document.getElementById("charKorean").style.display = "none";
    document.getElementById("wordKorean").style.display = "none";
    document.getElementById("sentKorean").style.display = "none";
    document.getElementById("charViet").style.display = "none";
    document.getElementById("wordViet").style.display = "none";
    document.getElementById("sentViet").style.display = "none";
    document.getElementById("charNederlands").style.display = "none";
    document.getElementById("wordNederlands").style.display = "none";
    document.getElementById("sentNederlands").style.display = "none";
    //show only the one that was selected
    document.getElementById(fullSelection).style.display = "block";

}
