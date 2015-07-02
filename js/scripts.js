//Pizza object with priceIt method
var pizza = {
  priceIt: function() {
    return 1 + (this.pizza_size * 1)
             + (this.crust * 1)
             + (this.meat_toppings * 1)
             + (this.cheese * 1)
             + (this.sauce + 0)
             + (this.veggie_toppings * 1)
             + (this.pizza_quantity * 1)
  }
};

$(document).ready(function() {

  $('#order-form').submit(function(event){
    event.preventDefault();

    //sets size selection
    var select_size = parseInt($('#select_size').val());

    //sets crust selection
    var select_crust = parseInt($('#select_crust').val());

    //sets sauce selection
    var select_sauce = parseInt($('#select_sauce').val());

    //sets cheese selection
    var extra_cheese = parseInt($('#extra_cheese').val());

    //adds checked meat toppings
    var meat_topping_multiplier = 0;
    $(':checkbox:checked.topping-selection').each(function() {
      meat_topping_multiplier += +this.value;
    })

    var pizza_order = Object.create(pizza);

    pizza_order.pizza_size = select_size;
    pizza_order.crust = select_crust;
    pizza_order.meat_toppings = meat_topping_multiplier;
    pizza_order.cheese = extra_cheese;
    pizza_order.sauce = select_sauce;

  })
})
