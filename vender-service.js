function VenderService(){
  //private parts
  var money = 0

  //our purchaseable items, add some of your own!
  //we could add an id property to these items to display location for purchasing(, D4, etc)
  var items = [
    {
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45,
      id: "A1"
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20,
      id: "A2"
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3,
      id: "A3"
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7,
      id: "A4"
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1,
      id: "A5"
    }
  ]

  //public parts
  this.getMoney = function(){
    return money
  }
  
  this.addMoney = function(){
    money += .25
    return this.getMoney()
  }
  
  this.purchaseItem = function(id, callBack) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (id == item.id && money >= item.price && item.amount > 0) {
        item.amount--
        money -= item.price
        callBack(items)
      }
    }
  }

  this.onLoad = function(cb){
    console.log(cb)
    cb(items)
  }
}