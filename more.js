$(document).ready(

function () {

$(".more").slice(0, 10).fadeIn(500);

if ($(".more:hidden").length > 0) {
$('#loadmore').show();
}

$("#loadmore").on('click', function (e) {
e.preventDefault(); 

$(".more:hidden").slice(0, 10).slideDown(1000);

if ($(".more:hidden").length == 0) {
$("#loadmore").fadeOut("fast");
}

});
});
