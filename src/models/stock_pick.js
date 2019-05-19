const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const StockPick = function(url){
  this.url = url
}


StockPick.prototype.getData = function () {
  const request = new RequestHelper(this.url);
  request.get()
    .then((data) =>{
      console.log('this should be the stock info:', data);
      PubSub.publish('StockPick: stock-pick-info-ready')
    })
};

module.exports = StockPick;
