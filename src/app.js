
const StockSelect = require('./views/select_view.js')
const StockView = require('./views/stock_view.js')
const StockPick = require('./models/stock_pick.js')



document.addEventListener('DOMContentLoaded', () => {

  const element = document.querySelector("#input_stock_pick")
  const companyName = new StockSelect(element)
  companyName.bindEvents()

  const container = document.querySelector("#stockInfo")
  const stockView = new StockView(container)
  stockView.bindEvents()



  const stockPickInfo = new StockPick(`https://financialmodelingprep.com/api/v3/financials/income-statement/`)
  stockPickInfo.bindEvents()
  });


/**

User enters company code and submits ->
Select view publishes choice/selection ->
Stock pick model subscribed to Select view publishing channel will get stock data using company code ->
When stock data comes into model (request finishes successfully) it will publish that data ->
Stock view subscribed to the Stock pick model publishing channel will render stock data

*/
