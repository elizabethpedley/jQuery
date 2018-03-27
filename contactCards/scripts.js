$(document).ready(function(){
    $('#formContainer').submit(function(){
        var form = $(this).serializeArray();
        console.log(form);
        $('input[type=text], textarea').val('');
        var contents = "<div><h1>" + form[0].value + " " + form[1].value + "</h1><h3>Click for description!</h3><p>"+ form[2].value + "</p></div>";
        $('#cardContainer').append(contents);
        $('#cardContainer p').hide();
        return false;
    })
    $(document).on('click','#cardContainer h3', function(){
        $(this).hide();
        $(this).siblings('h1').hide();
        $(this).siblings('p').show();
    });
});