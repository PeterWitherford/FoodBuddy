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

ribbutton.onclick = function(){addToBasket(ribs)}
ccmbutton.onclick = function(){addToBasket(ccm)}
cfrbutton.onclick = function(){addToBasket(cfr)}
ccbutton.onclick = function(){addToBasket(cc)}
sscbutton.onclick = function(){addToBasket(ssc)}


function addToBasket(item){
    basket.push(item);
    console.log(item.longName + "added to basket");
    notify(item.longName + "added to basket",1)
}

function notify(message,status){
$('.kdnotification-title').html(message);
funcking();
if(status==1){
$('#notification').css({'background-color':'rgba(0,0,0,.4)'}).fadeIn('slow').delay(5000).fadeOut('slow');
}else{
$('#notification').css({'background-color':'rgba(216,0,12,.6)'}).fadeIn('slow').delay(3000).fadeOut('slow');
}
}

function funcking(){
      var kd=$('.kdnotification');
      var viewportHeight = $(window).height(),
          viewportWidth = $(window).width(),
          kdheight = kd.height(),kdwidth = kd.width(),
          hdiff = viewportHeight - kdheight,
          vdiff = viewportWidth - kdwidth,
          left= vdiff/2,
          top = hdiff/2;
      kd.css({'top':top+'px','left':left+'px'});
    }
