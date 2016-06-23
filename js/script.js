$(document).ready(function() {
  $("form#travel").sumbit(function() {
  var citytype = $("input:radio[name=citytype]:checked").val();
  var beverage = $("input:radio[name=beverage]:checked").val();
  var food = $("input:radio[name=food]:checked").val();
  var entertainment = $("input:radio[name=entertainment]:checked").val();
  var result;

  if (citytype === beach) {
    document.write("A Carribean destination of relaxation and crystal blue waters");
  }

  else {
    document.write("Nowhere");
  }
  $("#output").text(result);
  });
});
