const PubSub = require('../helpers/pub_sub.js')


const StockView = function(container){
  this.container = container
}

StockView.prototype.bindEvents = function () {
  PubSub.subscribe('StockPick:stock-info-ready', (event) => {
    const companyInfo = event.detail
    console.log('event', event)
    this.render(companyInfo)
  })
}

StockView.prototype.render = function (data) {

  const stockSymbol = document.createElement('h3')
  stockSymbol.textContent = data.symbol
  this.container.appendChild(stockSymbol)

  const stockRevenue = document.createElement('h3')
  stockRevenue.textContent = data.financials[0].Revenue
  this.container.appendChild(stockRevenue)

  const stockRevenue = document.createElement('h3')
  stockRevenue.textContent = data.financials[0].Revenue
  this.container.appendChild(stockRevenue)
};

StockView.prototype.removeChild = function (data) {
  const element = document.getElementById(data);
    element.parentNode.removeChild(element);
}

// StockView.prototype.companyCodeRender = function (data) {
//   const CompanySymbol = document.createElement('h3')
//   CompanySymbol.textContent = data.symbol
//   this.container.appendChild(CompanySymbol)
// };
//
// StockView.prototype.companyInfoRender = function (data) {
//   const CompanyInfoRender = document.createElement('p')
//   const firstMonth = data.symbol
//   console.log(firstMonth)
//   CompanyInfoRender.textContent = firstMonth.Revenue
//   console.log(firstMonth.Revenue)
//   this.container.appendChild(CompanyInfoRender)
// };


module.exports = StockView
