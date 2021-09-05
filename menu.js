function opennav() {

document.getElementById("sidebar").style.left = "0";
$("div#overlay").addClass("active");

$("div#overlay").on('click', closenav);

$('a').on('click', closenav);

}

function closenav() {
 document.getElementById("sidebar").style.left = "-300px";
$("div#overlay").removeClass("active");
}
