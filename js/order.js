$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

function MenuItem(id,longName,price){
    this.id = id;
    this.longName = longName;
    this.price = price;
  }

var basket=[];
var list = document.getElementById("basketItems");
var total = document.getElementById("total");
var runningTotal;
var food = document.createElement("li");

var ribs = new MenuItem("ribs", "Spare Ribs in Barbecue Sauce", 4.60);
var ccm = new MenuItem("ccm", "Chicken Chow Mein", 4.20);
var cfr = new MenuItem("cfr", "Chicken Fried Rice", 4.20);
var cc = new MenuItem("cc", "Curry Chicken", 4.70);
var ssc = new MenuItem("ssc", "Sweet and Sour Chicken Crispy Balls", 4.00);

var basketTotal =document.getElementById("basketTotal");
var ribbutton=document.getElementById("ribs");
var ccmbutton=document.getElementById("ccm");
var cfrbutton=document.getElementById("cfr");
var ccbutton=document.getElementById("cc");
var sscbutton=document.getElementById("ssc");

ribbutton.onclick = function(){addToBasket(ribs,runningTotal)}
ccmbutton.onclick = function(){addToBasket(ccm,runningTotal)}
cfrbutton.onclick = function(){addToBasket(cfr,runningTotal)}
ccbutton.onclick = function(){addToBasket(cc,runningTotal)}
sscbutton.onclick = function(){addToBasket(ssc,runningTotal)}


function addToBasket(item, runningTotal){
    basket.push(item);
    Materialize.toast(item.longName + " added to basket", 4000);
    basketTotal.innerHTML=("("+basket.length+")") 
    food.appendChild(document.createTextNode(item.longName + "£" + item.price+"0"));
    list.appendChild(food);
    runningTotal = 0;
    for(var i = 0, len = basket.length; i < len; i++) {
    runningTotal += basket[i].price;
}
    total.innerHTML = (runningTotal)
}

