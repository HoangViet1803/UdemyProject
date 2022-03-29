window.addEventListener("load", function() {
        truncateCardTitle();
        truncateCardName();
    })
    // truncate_Card_Title
function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    for (var i = 0; i < cardList.length - 1; i++) {
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 40);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
// truncate Card_text_name
function truncateCardName() {
    var cardListName = document.getElementsByClassName("card-text-name");
    for (var i = 0; i < cardListName.length - 1; i++) {
        var text = cardListName[i].innerHTML;
        var newText = truncateString(text, 12);
        cardListName[i].innerHTML = newText;
    }
}
// SIDEBAR MINI
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#DarkMode_check');
toggleBtn.addEventListener('click', function() {
    sidebarMini.classList.toggle('is-opened');
})
switchBtn.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('darkMode');
})