class StorageException {
  constructor(message) {
    this.message = message;
    this.name = "StorageException";
  }
};

class ApiException{
  constructor(message, status) {
    this.message = message;
    this.status = status;
    this.name = "ApiException";
  }
}


export {
  ApiException,
  StorageException
};