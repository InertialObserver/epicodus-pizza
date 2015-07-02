//Pizza object with priceIt method
var pizza = {
  priceIt: function() {
    return 10 + (this.topping * 2)
              + (this.pizza_size * 3)
              + (this.crust * 3)
  }
};

$(document).ready(function() {

  $('#order-form').submit(function(event){
    event.preventDefault();

    //adds checked toppings to multiplier
    var toppings_multiplier = 0;
    $(':checkbox:checked.topping-selection').each(function() {
      toppings_multiplier += +this.value;
    });

    // SETS SIZE SELECTION TO USER INPUT
      var size_selection = parseInt($('#size-selection').val());

      // SETS CRUST SELECTION TO USER INPUT
      var crust_selection = parseInt($('#crust-selection').val());

    var pizza_order = Object.create(pizza);

    pizza_order.topping = toppings_multiplier;
    pizza_order.pizza_size = size_selection;
    pizza_order.crust = crust_selection;

    var pizza_price = pizza_order.priceIt();
    $('#pizza-price').show();

    $('#order-price').text(pizza_price);

    //unhighlights button when not hover
    $(".btn").mouseup(function() {
      $(this).blur();
    });

  });
});
