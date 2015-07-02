describe('pizza', function() {
    describe('priceIt', function() {
        it('will return a price of 10 for a topping with multiplier 0, size multiplier 0, crust multiplier 0', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = 0;
            testPizza.pizza_size = 0;
            testPizza.crust = 0;
            expect(testPizza.priceIt()).to.equal(10);
        });
        it('will return a price of 12 a topping with multiplier 1, size multiplier 0, crust multiplier 0', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = 1;
            testPizza.pizza_size = 0;
            testPizza.crust = 0;
            expect(testPizza.priceIt()).to.equal(12);
        });
        it('will return a price of 12 a topping with multiplier -1, size multiplier 0, crust multiplier 0', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = -1;
            testPizza.pizza_size = 0;
            testPizza.crust = 0;
            expect(testPizza.priceIt()).to.equal(8);
        });
        it('will return a price of 13 for a topping with multiplier 0, size multiplier 1, crust multiplier 0', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = 0;
            testPizza.pizza_size = 1;
            testPizza.crust = 0;
            expect(testPizza.priceIt()).to.equal(13);
        });
        it('will return a price of 15 for a topping with multiplier 1, size multiplier 1, crust multiplier 0', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = 1;
            testPizza.pizza_size = 1;
            testPizza.crust = 0;
            expect(testPizza.priceIt()).to.equal(15);
        });
        it('will return a price of 16 for a topping with multiplier 0, size multiplier 0, crust multiplier 1', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = 0;
            testPizza.pizza_size = 0;
            testPizza.crust = 1;
            expect(testPizza.priceIt()).to.equal(13);
        });
        it('will return a price of 16 for a topping with multiplier 1, size multiplier 1, crust multiplier 1', function() {
            var testPizza = Object.create(pizza);
            testPizza.topping = 1;
            testPizza.pizza_size = 1;
            testPizza.crust = 1;
            expect(testPizza.priceIt()).to.equal(18);
        });
    });
});
