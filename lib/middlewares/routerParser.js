
let response = null;

export default function parse(req, res, next) {
  res.send = res.end;
  response = res;
  res.status = setStatus;
  next();
}

function setStatus(status) {
  response.statusCode = status;
  return response;
}
