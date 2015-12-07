new WOW().init();
$(document).ready(function(){
     $('.parallax').parallax();
     heartBeat();
     setInterval(function(){
        $(".scroll-down").effect("bounce", {times:3}, 2500 );
    },3000);
});
