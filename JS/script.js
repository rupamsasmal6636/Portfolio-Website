$(document).ready(function(){
    $('#menubar').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menubar').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    });
});
function submitalert(){
    alert("Submitted Successfully!");
}
$('#GetFile').on('click', function () {
    $.ajax({
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});