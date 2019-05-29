$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    $(".person1").text(person1Input);

    var beverage = $("#beverage").val();
    $("#beverage").text(beverage);



    $("#story").show();

    event.preventDefault();
  });
});

var favoriteColor = $("#color").val();