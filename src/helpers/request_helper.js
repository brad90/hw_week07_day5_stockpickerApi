const RequestHelper = function (url) {
 this.url = url;
};

RequestHelper.prototype.get = function () {
 return fetch(this.url)
   .then(response => response.json())
   .catch(err => console.log("Error in get:", err))
   response.setHeader('Content-Type', 'text/html');
   console.log("this is the RH response",response);
};

module.exports = RequestHelper;
