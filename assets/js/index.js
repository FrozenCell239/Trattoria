// Hiding/showing the navbar when scrolling down/up
let previous_scroll_position = window.scrollY;
window.onscroll = function(){
    let current_scroll_position = window.scrollY;
    if(previous_scroll_position > current_scroll_position){
        document.getElementsByTagName("nav")[0].style.top = "0";
    }
    else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    };
    previous_scroll_position = current_scroll_position;
};