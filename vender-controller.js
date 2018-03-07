function VenderController() {
  //private parts
  var venderService = new VenderService();
  var elemId = document.getElementById("money");
  var itemsElem = document.getElementById("items");
  //items is an array we need to get from the service and give to drawItems

  function drawItems(items) {
    var template = "";
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      template += `
       <div class="col-2 outline">
           <h3>${item.name}</h3>
           <p>${item.description}</p>
           <p>$${item.price}</p>
           <p>Qty: ${item.amount}</p>
           <button class="btn btn-success" onclick="app.controllers.venderController.purchaseItem('${
             item.id
           }')">${item.id}</button>
       </div>
    `;
    }
    itemsElem.innerHTML = template;
    //we will take in a paramter(items) and iterate over it to build
    //a template to draw to the screen.
  }

  //public parts
  this.addMoney = function() {
    elemId.textContent = "money: $" + venderService.addMoney();
  };

  this.purchaseItem = function(id) {
    venderService.purchaseItem(id, drawItems);
    elemId.textContent = "money: $" + venderService.getMoney();
  };
  //we need a function to take money from our "view" and pass it to our service

  venderService.onLoad(drawItems)
}