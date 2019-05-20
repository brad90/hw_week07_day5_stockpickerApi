const PubSub = require('../helpers/pub_sub.js')

const Stock_input = function(element){
  this.element = element
  ;
}

Stock_input.prototype.bindEvents = function () {

  this.element.addEventListener('submit', (event) => {
    data = event.target.stockname.value;
    PubSub.publish("Stock-input: user company name inputted", data)
    event.preventDefault();
  })
}





module.exports = Stock_input;
