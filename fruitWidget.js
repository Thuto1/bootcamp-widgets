function fruitWidget() {
    return {
        fruits: [
            { id: 1, name: 'Apple', price: 15 },
            { id: 2, name: 'Orange', price: 25 },
            { id: 3, name: 'Banana', price: 12 },
            { id: 4, name: 'Grapes', price: 30 },
            { id: 5, name: 'Pineapple', price: 18 },
            { id: 6, name: 'Mango', price: 22 },
            { id: 7, name: 'Watermelon', price: 8 },
        ],

        filteredFruits: [],
        showMessage: false,

        filteredFruits: [],
        showOver20() {
            this.filteredFruits = this.fruits.filter(fruit => fruit.price > 20);
            this.showMessage = true;
            this.clearResultsAfterDelay();
        },
        showUnder20() {
            this.filteredFruits = this.fruits.filter(fruit => fruit.price <= 20);
            this.showMessage = true;
            this.clearResultsAfterDelay();
        },
        clearResultsAfterDelay() {
            setTimeout(() => {
                this.showMessage = false;
                this.filteredFruits = [];
            }, 9000);
        }
       
    };
}

