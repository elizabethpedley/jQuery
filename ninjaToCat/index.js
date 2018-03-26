$(document).ready(function(){
    $('.cat').hide();
    $('.container').click(function(){
        $('img', this).toggle();
    });
})