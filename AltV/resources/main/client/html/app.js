document.addEventListener('DOMContentLoaded', (e) => {
    hide();
    //hideh1();
});

function show() {
    document.getElementById("body").style.display = "block";
}

function hide() {
    document.getElementById("body").style.display = "none";
}

function showh1() {
    document.getElementById("devserver").style.display = "block";
}
function hideh1() {
    document.getElementById("devserver").style.display = "none";
}

if('alt' in window){
    alt.on('show', show);
    alt.on('hide', hide);

    alt.on('showh1', showh1);
    alt.on('hideh1', hideh1);
}