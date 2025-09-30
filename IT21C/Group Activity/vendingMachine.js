class VendingMachine{
    #balance = 100;
    #inventory = {
        chips: {price:10, stock: 5},
        soda: {price:15, stock: 5},
        candy: {price:2, stock: 10}

    }

    insertMoney(amount){
        if (amount > 0){
            this.#balance += amount;
            console.log(`\nYou inserted $${amount}. Current Balance $${this.#balance}`);
            
        } else {
            console.log("Not enough amount");
        }
    }
    
    selectItem(item){
        if (! this.#inventory [item]){
            console.log ("Item not available");
        }
        let product = this.#inventory [item]
        if (product.stock <= 0){
            console.log (`$${item} is out of stock.`);
            return;
        }
        if (this.#balance < product.price){
            console.log ("Not enough balance");
            return;
        }
        this.#balance -= product.price;
        product.stock --;
        console.log (`You bought ${item} for $${product.price}. Remaining Balance: ${this.#balance}`);

    }

    developerMode(password){
        if(password === "vendingOwner"){
            console.log ("\n== MENU ==");
            console.log ("Balance:",this.#balance);
            console.log ("Inventory:", this.#inventory);
        }else{
            console.log("Acces Denied!");
        }
    }
    }

    var vm = new VendingMachine();
    vm.insertMoney(10);
    vm.selectItem("chips");
    vm.selectItem("soda");
    vm.selectItem("soda");
    vm.developerMode("vendingOwner");
    