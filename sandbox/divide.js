function divide(a, b) {
    // TODO : empêcher la division par zéro

    if (b === 0) {
        throw new Error("la division par zéro n'est pas permise");
    }
    return a / b;
}

export { divide };
