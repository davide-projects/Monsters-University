$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.menuSmartphone').toggleClass('open');
        $(this).toggleClass('open');
        // Aggiorna aria-expanded per accessibilità
        var expanded = $(this).hasClass('open') ? 'true' : 'false';
        $(this).attr('aria-expanded', expanded);
    });
});