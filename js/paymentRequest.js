const supportedPaymentMethods = [  
  {  
    supportedMethods: ['basic-card'],  
  }  
];  
const paymentDetails = {  
  label: 'Total',  
  amount:{  
    currency: 'USD',  
    value: 0  
  }  
};  
// Options isn't required.  
const options = {};

new PaymentRequest(  
  supportedPaymentMethods,  
  paymentDetails,  
  options  
);