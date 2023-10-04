$(document).ready(function(){
    $('.next-btn').click(function(e) {
        var item = $(this);
        setTimeout(function(){
            $(item).closest('.choose-bx').hide();
            $(item).closest('.choose-bx').next('.choose-bx').show();
        }, 300);
    });
});
