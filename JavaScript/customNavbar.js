$(document).ready(function(){
    $('.hamburger-btn').click(function(){
        $('.menuSmartphone').toggleClass('open');
        $(this).toggleClass('open');
        // Aggiorna aria-expanded per accessibilità
        let expanded = $(this).hasClass('open') ? 'true' : 'false';
        $(this).attr('aria-expanded', expanded);
    });
});