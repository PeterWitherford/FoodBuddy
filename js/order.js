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
var food = document.createElement("p");

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
    food.appendChild(document.createTextNode(item.longName + " £" + item.price+"0"));
    list.appendChild(food);
    runningTotal = 0;
    for(var i = 0, len = basket.length; i < len; i++) {
    runningTotal += basket[i].price;
}
    total.innerHTML = (runningTotal)
}


//Request payment
// UI elements
var donateButton = document.getElementById('confirm');
var successMsg = document.getElementById('success');
var errorMsg = document.getElementById('error');

/**
 * Configuration for our payment. Notes:
 *   - basic-card: We're taking a card payment. Other options may come in the future.
 *   - We duplicate the payment network names in supportedMethods, to support older format (Samsung Internet v5.0)
 *   - The spec includes 'supportedTypes' (credit/debit/prepaid) but this does not have browser support yet
 *   - These are example payment networks. Others are available! See:
 *     https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/#methoddata-parameter
 */
var methodData = [{
  supportedMethods: ['basic-card', 'visa', 'mastercard', 'amex'],
  data: {
    supportedNetworks: ['visa', 'mastercard', 'amex']
  }
}];

var details = {total: {label: 'Test payment', amount: {currency: 'GBP', value: '0.00'}}};


function processPaymentDetails(uiResult) {
  return new Promise(function (resolve) {
    setTimeout(function() {
      resolve(uiResult);
    }, 2000);
  });
}

function showSuccess() {
  donateButton.style.display = 'none';
  errorMsg.style.display = 'none';
  successMsg.style.display = 'block';
}

function showError() {
  donateButton.style.display = 'none';
  errorMsg.style.display = 'block';
  successMsg.style.display = 'none';
}

function onDonateButtonClick() {

  // Initialise the PaymentRequest with our configuration
  // We could also pass in additional options as a 3rd parameter here, such as:
  // {requestShipping: true, requestPayerEmail: true, requestPayerPhone: true};
  var paymentRequest = new PaymentRequest(methodData, details);

  // Show the native UI
  paymentRequest.show()
    .then(function(uiResult) {
      processPaymentDetails(uiResult)
        .then(function(uiResult) {
          uiResult.complete('success');
          showSuccess();
        });
    })
    .catch(function(error) {
      console.warn('Unable to complete purchase', error);
      // D'oh. Inform the user the purchase could not be completed...
      showError();
    });
}

donateButton.addEventListener('click', onDonateButtonClick);


