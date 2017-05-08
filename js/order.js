function MenuItem(id,longName,price){
    this.id = id;
    this.longName = longName;
    this.price = price;
  }

var basket=[];

var ribs = new MenuItem("ribs", "Spare Ribs in Barbecue Sauce", 4.60);
var ccm = new MenuItem("ccm", "Chicken Chow Mein", 4.20);
var cfr = new MenuItem("cfr", "Chicken Fried Rice", 4.20);
var cc = new MenuItem("cc", "Curry Chicken", 4.70);
var scc = new MenuItem("scc", "Sweet and Sour Chicken Crispy Balls", 4.00);

var ribbutton=document.getElementById("ribs");
var ccmbutton=document.getElementById("ccm");
var cfrbutton=document.getElementById("cfr");
var ccbutton=document.getElementById("cc");
var sscbutton=document.getElementById("ssc");

ribbutton.onclick = function(){addToBasket("ribs")}
ccmbutton.onclick = function(){addToBasket("ccm")}
cfrbutton.onclick = function(){addToBasket("cfr")}
ccbutton.onclick = function(){addToBasket("cc")}
sscbutton.onclick = function(){addToBasket("ssc")}


function addToBasket(item){
    basket.push(item);
    console.log(item + "added")
}
