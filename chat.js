$.get("/chat-list", function(data){
$("#result").html(data);
});

function chat(){
$.ajax({
url : "/chat-list",
type : "post",
dataType:"text",
data : {
msg : $("#msg").val()
},
beforeSend:function(){
$('#click').html('<i class="far fa-spinner fa-pulse"></i>');
},
success : function (data){
$("#result").html(data);
$('#click').html('<i class="fa fa-paper-plane"></i>');
$("#msg").val('');
}
});
}
