(function(){

'use strict';

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){

  var toBuyList = this;

  toBuyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.boughtItem = function(itemIndex){
    ShoppingListCheckOffService.moveItemToBoughtItemsList(itemIndex);
  }

}


function AlreadyBoughtController(ShoppingListCheckOffService){

    var boughtList = this;

    boughtList.itemsBought = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService (){

    var service = this;

    var itemsToBuy = [
      {
        name: "milk",
        qty:"1"
      },
      {
        name: "eggs",
        qty:"2"
      },
      {
        name: "bread",
        qty:"3"
      },
      {
        name: "butter",
        qty:"4"
      },
      {
        name: "cookies",
        qty:"5"
      }

    ];

    var boughtItems = [];

    service.getItemsToBuy = function(){
      return itemsToBuy;
    }

    service.moveItemToBoughtItemsList = function(itemIndex){
        boughtItems.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
        console.log(boughtItems);
    }

    service.getBoughtItems = function(){
      return boughtItems;
    }
}

})();
