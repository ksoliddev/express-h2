export class RouterParser {

private response : any;

public parse(req : any, res : any, next : any) {
  res.send = res.end;
  res.json = res.end;
  this.response = res;
  res.status = this.setStatus;
  next();
}

private setStatus(status : any) {
  this.response.statusCode = status;
  return this.response;
}

}