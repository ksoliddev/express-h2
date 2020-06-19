
let response = null;

module.exports = function parse(req, res, next) {
  res.send = res.end;
  res.json = res.end;
  response = res;
  res.status = setStatus;
  next();
}

function setStatus(status) {
  response.statusCode = status;
  return response;
}
