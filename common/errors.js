class Errors{
  static get SomeErrorOccurred(){
    return {
      status: 409,
      error: 'SomeErrorOccurred',
      message: 'Some error occurred.'
    }
  }
}


module.exports = Errors