describe('pizza', function() {
    describe('priceIt', function() {
        it('will return a price of 1 for a topping with multiplier 0, size multiplier 0, crust multiplier 0', function() {
            var testPizza = Object.create(pizza);
            testPizza.pizza_size = 0;
            testPizza.crust = 0;
            testPizza.meat_toppings = 0;
            testPizza.cheese = 0;
            testPizza.sauce = 0;
            testPizza.veggie_toppings = 0;
            testPizza.pizza_quantity = 0;
            expect(testPizza.priceIt()).to.equal(1);
        });
      });
    });
