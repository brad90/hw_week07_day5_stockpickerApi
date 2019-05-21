const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const StockPick = function(url){
  this.url = url
  this.company = []

}


StockPick.prototype.bindEvents = function () {
  PubSub.subscribe("Stock-input: user company name inputted", (event) => {
    let UsersCompanySearch = event.detail.toUpperCase()
    console.log("This is the company name", UsersCompanySearch);

    const PreUrl = this.url
    const request = new RequestHelper(PreUrl + UsersCompanySearch);
    console.log("This is the request", request);
    request.get()
    .then((data) => {
      const companyInfo = data;
      console.log("what is this? ", companyInfo)
      PubSub.publish('StockPick:stock-info-ready', companyInfo)
    })

  })
};

// StockPick.prototype.getData = function (companyName) {
//   const request = new RequestHelper(this.url + `${UsersCompanySearch}` + '?datatype=json');
//   console.log(request);
//   request.get()
//   .then((data) => {
//     this.company = data;
//     PubSub.publish('StockPick:stock-info-ready', this.company)
//   })
// }


module.exports = StockPick;
