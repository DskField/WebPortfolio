let myLet;

function toggleList() {
    $("li").slideToggle();
}

function collapseList() {
    myLet = setTimeout(
        toggleList,
        5000
    );
}