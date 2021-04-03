$(document).ready(function(){
    // STYIKY NAV 
    $(".js-serviecs-waypoints").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky")
        }
    });



// / Portfolio fillter(Mixitup)
    var mixer = mixitup('.container');
});
// SCROLL ANIMETION
AOS.init({
    duration: 1500,
});
// Hamberger menu
function openNav(){
    document.getElementById ("myNav").style.width="100%";
}
function colseNav(){
    document.getElementById("myNav").style.width="0%"
}