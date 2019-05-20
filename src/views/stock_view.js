const PubSub = require('../helpers/pub_sub.js')


const StockView = function(container){
  this.container = container

}


StockView.prototype.bindEvents = function () {
  PubSub.subscribe('StockPick:stock-info-ready', (event) => {
    const companyInfo = event.detail;
    this.render(companyInfo)
  })
}

StockView.prototype.render = function (data) {

      this.companyCodeRender(data)
};

StockView.prototype.companyCodeRender = function (data) {
  const CompanySymbol = document.createElement('h3')
  CompanySymbol.textContent = data.symbol
  this.container.appendChild(CompanySymbol)
};



module.exports = StockView
