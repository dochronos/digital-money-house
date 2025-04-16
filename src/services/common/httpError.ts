export class HttpError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode: number = 500) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export class AccessDeniedError extends HttpError {
    constructor(message: string = 'Acceso denegado') {
      super(message, 403);
      this.name = 'AccessDeniedError';
    }
  }
  
  export class NotFoundError extends HttpError {
    constructor(message: string = 'Recurso no encontrado') {
      super(message, 404);
      this.name = 'NotFoundError';
    }
  }
  
  export class BadRequestError extends HttpError {
    constructor(message: string = 'Solicitud incorrecta') {
      super(message, 400);
      this.name = 'BadRequestError';
    }
  }
  
  export class UnauthorizedError extends HttpError {
    constructor(message: string = 'No autorizado') {
      super(message, 401);
      this.name = 'UnauthorizedError';
    }
  }