
const StockInput = require('./views/stock_input_name.js')
const StockView = require('./views/stock_view.js')
const StockPick = require('./models/stock_pick.js')



document.addEventListener('DOMContentLoaded', () => {


  const stockPickInfo = new StockPick('https://financialmodelingprep.com/api/v2/financials/income-statement/AAPL?datatype=json')
  stockPickInfo.getData()


})
