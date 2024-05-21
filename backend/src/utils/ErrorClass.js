class ErrorClass extends Error {
  constructor(message, status) {
    super(message);
    this.status = status || 5000;
  }
}

export default ErrorClass;
