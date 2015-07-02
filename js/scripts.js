//Pizza object with priceIt method
var pizza = {
  priceIt: function() {
    return 0 + (this.pizza_size * 1)
             + (this.crust * 1)
             + (this.meat_toppings * 1)
             + (this.extra_cheese * 1)
             + (this.sauce + 0)
             + (this.veggie_toppings * 1)
  }
};
