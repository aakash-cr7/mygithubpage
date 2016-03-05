function closeAndOpen(btnId) {
   $('.close-me').on('click', function() {
       $('.hidden-row').fadeOut();
       $('.layer').fadeOut();
   });
   $('.' + btnId).on('click', function() {
       $('.hidden-row').fadeIn();
       $('.layer').fadeIn();
   });
}
