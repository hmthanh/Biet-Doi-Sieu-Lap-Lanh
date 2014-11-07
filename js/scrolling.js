document.onkeydown = checkShortcuts;

var idWeb = ['home',
    'about', 'member-avatar', 'header2',
    'services', 'header3',
    'work', 'header4',
    'blog', 'header-five',
    'contact'];
var scrollIdx = 0;

function goToByScrollbyID(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},3000);
}

function checkShortcuts(event) {
    switch(event.keyCode){
        case 13:
        case 74:
            ScrollWebDown();
            break;
        case 27:
        case 75:
            ScrollWebUp();
            break;
        default:
            break;
    }
}

function ScrollWebUp(){
    scrollIdx--;
    if (scrollIdx <= 0)
        scrollIdx = 0;

    goToByScrollbyID(idWeb[scrollIdx]);
}
function ScrollWebDown(){
    scrollIdx++;
    if (scrollIdx > idWeb.length)
        scrollIdx = idWeb.length-1;

    goToByScrollbyID(idWeb[scrollIdx]);
}