class Response {
  constructor(data, isSuccess) {
    this.success = isSuccess || true;
    this.data = {...data};
  }
}

module.exports = Response;
