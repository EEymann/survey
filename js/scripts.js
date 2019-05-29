$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    $(".person1").text(person1Input);

    var selectedBeverage = $('#beverage option:selected').text();
    $(".favoriteBeverage").text(selectedBeverage);

    var selectedFood = $('#food option:selected').text();
    $(".favoriteFood").text(selectedFood);

    var selectedColor = $('#color').val();
    $(".favoriteColor").text(selectedColor);

    $("#story").show();

    event.preventDefault();
  });
});

