function all_love(e){

$('#love-list-'+e).addClass('act');

$('#bg').show();

$('#bg').click(
function() {
$('#love-list-'+e).removeClass('act');
$('#bg').hide();
});

}

function ed_chat(e) {

$(e).addClass('act');
$('#bg').show();

$('#bg').click( function() {
$(e).removeClass('act');
$('#bg').hide();
});

$('a').click( function() {
$(e).removeClass('act');
$('#bg').hide();
});

}

$(document).on('input', '.auto', function () {
$(this).outerHeight(20).outerHeight(this.scrollHeight)
}); 
