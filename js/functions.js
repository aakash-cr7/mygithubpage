function heartBeat() {
    console.log('heartbeat');
    $('#myheart').animate({
        fontSize: '24px',
        opacity: 0.8,
    }, 700, function() {
        $('#myheart').animate({
            fontSize: '29px',
            opacity: 1,
        }, 700, function() {
            heartBeat();
        });
    });
}
