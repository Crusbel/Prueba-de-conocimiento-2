
var id_slider = "#my_slider";
var slider_width_init = $(id_slider).width();
var index_slider = 0; 



input_focus('username');
input_focus('email');
input_focus('password');
input_focus('message');
input_focus('search');


$.ajax({
    type: "GET",
    url: "http://test.masuno.pe/images.php",
    data: "data",
    dataType: "json",
    success: function (response) {
        for (var i = 0; i < response.length; i++) {
            $(id_slider).append('<div style="background-image:url('+response[i]+')"></div>');
            mySlider();
        }
        setInterval('animate_slider()',3000);     
    }
});

function mySlider() {
    var slider_elements = 0;
    $(id_slider + " div").each(function () {
        slider_elements ++;
    });
    var slider_width_end = slider_width_init * slider_elements;
    $(id_slider).width(slider_width_end);
    $(id_slider + " div").width(slider_width_init);
}

function animate_slider() {
    var porc = ((index_slider) % $(id_slider+" div").length)+1;
    $(id_slider).animate({'left': -($(id_slider+" div:nth-child("+porc+")").position().left)},800);
    index_slider++;
}

function input_focus(input) {
    $('#'+input).blur(function () { 
        if ($(this).val() != '') {
            $(this).addClass('focused');
        } else {
            $(this).removeClass('focused');
        }
    });
}
