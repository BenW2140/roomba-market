$(document).ready(function() {
    $("#info").submit(function(event) {
      const nameInput = $("input#name").val();
      const addressInput = $("input#address").val();
    
      $(".name").text(nameInput);
      $(".address").text(addressInput);

      $("#receipt").show();

      event.preventDefault();    
    });
});