$( document ).ready(function() {
    $('#show h3').hide();
    $('#slideDown h3').hide();
    $('#fadeIn h3').hide();
    $('#data').data('data', {value: 3.14159})

    $('#click button').click(function(){
        alert( ".click() was called" );
    });
    $('#hide button').click(function(){
        $('#hide h3').hide();
    });
    $('#show button').click(function(){
        $('#show h3').show();
    });
    $('#toggle button').click(function(){
        $('#toggle h3').toggle();
    });
    $('#slideDown button').click(function(){
        $('#slideDown h3').slideDown();
    });
    $('#slideUp button').click(function(){
        $('#slideUp h3').slideUp();
    });
    $('#slideToggle button').click(function(){
        $('#slideToggle h3').slideToggle();
    });
    $('#fadeIn button').click(function(){
        $('#fadeIn h3').fadeIn();
    });
    $('#fadeOut button').click(function(){
        $('#fadeOut h3').fadeOut();
    });
    $('#addClass button').click(function(){
        $('#addClass h3').addClass('red');
    });
    $('#before button').click(function(){
        $('#before button').before('<h3>This was added before the button with jQuery!</h3>');
    });
    $('#after button').click(function(){
        $('#after button').after('<h3>This was added after the button with jQuery!</h3>');
    });
    $('#append button').click(function(){
        $('#append').append('<h3>This was appended with jQuery!</h3>');
    });
    $('#html button').click(function(){
        $('#html h3').html('This is the new content that was replaced with jQuery.');
    });
    $('#attr button').click(function(){
        var title = $('#attr h3').attr('title');
        $('#attr div').html(title);
    });
    $('#val button').click(function(){
        $('#val input').val('This is the new value!');
    });
    $('#text button').click(function(){
        var text = $('#text h3').text();
        $('#text div').html(text);
    });
    $('#data button').click(function(){
        $('#data h3 span').html($( "#data" ).data( "data" ).value);
    });
});