let userInput: unknown;
let userNameStr: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userNameStr = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('an error occured!', 500);
