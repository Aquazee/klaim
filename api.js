const Response = require('./common/response');

const ApiService = {};

ApiService.home = function (req, res, next) {
  const data = {
    "info": "Some information about the <b>company</b>."
  }
  sendResponse(res, data)
}

function sendResponse(res, data, isSuccess){
  const response = new Response(data, isSuccess);
  res.send(response);
}

module.exports = ApiService;