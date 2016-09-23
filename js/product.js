 (function(window){


var cartSystem = {};


cartSystem.itemContainer = document.createElement("tr");
cartSystem.cartBody = document.querySelector("#table_body");


cartSystem.cart =  document.querySelector(".cart");

cartSystem.cartParent = cartSystem.cart.parentNode;

//cartSystem.cartItemQty = document.querySelectorAll(".cart-detail").length;

cartSystem.grandTotal = document.getElementById("grand-total").innerHTML;

cartSystem.shipCost = 139.94; 

cartSystem.itemNum = 4;

cartSystem.promoCode = ['5% off', '10% off', '15% off'];

 cartSystem.total = 0;

cartSystem.cartDatabase = {
  item1:{
name:"Microsoft - Surface Pro 4 - 12.3-inch - 128GB - Intel Core m3 - Silver",
price: 899.99,
total: 899.99,
qty: 1    
},
  item2:{
name: "Apple - 9.7-inch iPad Pro with WiFi - 128GB - Silver",
price: 749.99,
total: 749.99,
qty: 1    
},
  item3:{
name: "Samsung - Galaxy View - 18.4-inch - 32GB - Black",
price: 549.99,
total: 549.99,
qty: 1    
},
  item4:{
name: "Apple - 9.7-inch iPad Pro with WiFi - 128GB - Rose Gold",
price: 749.99,
total: 749.99,
qty: 1    
}
};


cartSystem.removeButton = function(item){

  // Get the current item to remove 
 var cartItem = item.parentNode.parentNode;
  
 // Get the cart 
var cart =  document.querySelector(".cart");
  
  
 // Get the id of the current item  
var itemId = item.parentNode.parentNode.id;

  
 // Remove item when buttom click 
this.cartBody.removeChild(cartItem);
delete this.cartDatabase[itemId];
  
  
// Subtract item cart 
this.itemNum--;

// Update total  
this.updateTotal();  
  
// Remove cart after remove last item  
if(this.itemNum === 0){
    this.cartParent.removeChild(cart);
    
 }
 

};



// Update cart database
cartSystem.updateTotal = function(id, qty){
  
 var product = document.getElementById(id);  
    
 var totalPrice;
  
  this.total = this.shipCost;
  

// var idNum = 0; 
 
if(id){
     this.cartDatabase[id].qty = qty;
     this.cartDatabase[id].total = qty * this.cartDatabase[id].price;
 
  
// Update cart item total 
  product.lastChild.previousSibling.innerHTML = "$" + this.cartDatabase[id].total.toFixed(2);
  
  idNum = Number(id.slice(4));
  
  // Update cart item qty
  if(idNum > 4){
    product.childNodes[3].value = qty;
 
  }else{
        product.childNodes[3].childNodes[1].value = qty;         
        
                 }
                 

} 
  

  
// Update total  
for(var i in this.cartDatabase){
     
      this.total += this.cartDatabase[i].total;
     
}
 
 
  // Output total
  document.getElementById("grand-total").innerHTML = "$" + this.total.toFixed(2);


};



cartSystem.updateBySelect = function(item){

  // Get the current item to remove 
var cartItem = item.parentNode.parentNode;


 //console.log(item);

 // Get the id of the current item  
var itemId = item.parentNode.parentNode.id;  
  
// Get the current item qty  
var itemQty = Number(item.value);
  

  
// Remove cart after remove last item  
  
if(this.itemNum === 1){
    this.cartParent.removeChild(this.cart);
 }  
 
  else if(item.value === "0"){
   this.itemNum--;   
   this.cartBody.removeChild(cartItem);
  delete this.cartDatabase[itemId];
   
this.updateTotal(); 
    
  }else{
     this.cartDatabase[itemId].qty = itemQty;
    
 
    this.updateTotal(itemId, itemQty); 
  }
 
};



cartSystem.addItem = function(item){
  
  
var product = item.parentNode.parentNode.childNodes[3].innerHTML;  
var qty =  Number(item.previousSibling.previousSibling.value);  
var price = Number(item.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML.slice(1));
  

   
var total = qty * price;  

var itemId;
  
var itemExist = false; 
  
var newItem;  
  
  
 

for(var i=1; i<= this.itemNum; i++){

  if(this.cartDatabase["item"+i].name === product)     {
    itemId = "item" + i;
    itemExist = true;
    
   }
  
}  

 // Update existing item or create new item in cart 
if(itemExist){  
   
   this.cartDatabase[itemId].qty += qty;
      this.cartDatabase[itemId].price = price;
      this.cartDatabase[itemId].total = Number(total.toFixed(2));  
    
    this.updateTotal(itemId, qty); 
  
}else{  

  
var itemNode = document.createElement("tr");
  
 

    this.itemNum++;
  
  newItem = "item" + this.itemNum;
 
  
 itemNode.setAttribute("class", "cart-detail");
 itemNode.setAttribute("id", newItem);
  
 
 

  this.cartDatabase[newItem] = {};
  
  this.cartDatabase[newItem].name = product;
  this.cartDatabase[newItem].qty += qty;
    
      this.cartDatabase[newItem].price = price;
     this.cartDatabase[newItem].total = Number(total.toFixed(2));   
  
  
  
  
itemNode.innerHTML = '<td class="description">' + product + '</td>' +  
      '<td> <input type="number" min="0" max="10" value="'+ qty + '"  class="qty" onchange="cartSystem.updateBySelect(this)"> </td>' +  '\n' +
      '<td><button class="btn-apply" onclick="cartSystem.removeButton(this)">Remove</button></td>' +  '\n' +
      '<td class="price">$' + price + '</td>'  + '<td class="total">$' + total.toFixed(2)  + '</td>' + '\n' ;
  
  
 this.cartBody.appendChild(itemNode);
  
  
  
 
this.updateTotal();
  
 
}
  
 
  
};

cartSystem.activePromo = function(){
    var promoEntered = document.querySelector(".promo-input").value;
 
 var itemInCart =  document.querySelectorAll(".description");
  
  var itemInCartTotal =  document.querySelectorAll(".cart-detail .total"); 
  var codeUsed = false;
  
 var itemPromo = document.querySelector("#item1 .total"); 
 

 var appleQty = 0;
  
  this.updateTotal();
  
  
  // Get number of Apple product in cart
   for(var i=1;i <= this.itemNum;i++){
 
     if(this.cartDatabase['item'+ i].name.split(" ")[0] === "Apple"){
        appleQty += this.cartDatabase['item'+ i].qty;
       
       
     }
  
}
  
 
  
     if(this.promoCode[0] === promoEntered && !codeUsed){
       
        this.total = this.total -(this.total * 0.05);
       document.getElementById("grand-total").innerHTML = "$" + this.total.toFixed(2);
   
  //console.log(promoOutput.innerHTML);     
document.getElementById("promoDisplay").innerHTML = '5% off promo code used';       
        //console.log(itemPromo.innerHTML);
       
     }else if(this.promoCode[1] === promoEntered && !codeUsed && this.itemNum >= 4){
       
       this.cartDatabase.item1.total =  this.cartDatabase.item1.price -(this.cartDatabase.item1.price * 0.10);
       
    
       itemPromo.innerHTML = "$" + this.cartDatabase.item1.total.toFixed(2);
       document.getElementById("promoDisplay").innerHTML = '10% off promo code used';
       this.updateTotal();
       //document.getElementById("grand-total").innerHTML = "$" + this.total.toFixed(2);
       
     }else if(this.promoCode[2] === promoEntered && !codeUsed && appleQty >= 2){
       
       
     for(var l in this.cartDatabase){
         
        if( this.cartDatabase[l].name.split(" ")[0] === "Apple"){
          this.cartDatabase[l].total = this.cartDatabase[l].total - (this.cartDatabase[l].total * 0.15);
          console.log(this.cartDatabase[l]); 
       }
     }  
        
       
       for(var j=1, k=0;j <= this.itemNum;j++,k++){
         if(itemInCart[j].innerHTML.split(" ")[0] === "Apple"){
           
         itemInCartTotal[k].innerHTML = "$" + this.cartDatabase['item' + j].total.toFixed(2);
         }
       }
      
       this.updateTotal();
       document.getElementById("promoDisplay").innerHTML = '15% off promo code used';
     }

  
    
}; 

window.cartSystem = cartSystem;


})(window);
