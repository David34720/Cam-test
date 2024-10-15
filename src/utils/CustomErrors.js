// ! class abstraite
class CustomError extends Error {
    statusCode;
}

class BadRequest extends CustomError {
    statusCode = 400;
}

class NotFound extends CustomError {
    statusCode = 404;
    constructor() {
        super("La ressource n'existe pas");
    }
}

export { BadRequest, NotFound };
