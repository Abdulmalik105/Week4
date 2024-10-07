function calculateExpression(arr) {
    if (arr.length < 1 || arr.length % 2 === 0) {
        return 'Error: Invalid input array';
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const nextNumber = arr[i + 1];
        if (nextNumber === undefined || typeof nextNumber !== 'number') {
            return 'Error: Invalid input array';
        }

        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
            case '×':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber === 0) {
                    return 'Error: Division by zero';
                }
                result /= nextNumber;
                break;
            case '%':
                result %= nextNumber;
                break;
            default:
                return 'Error: Invalid operator';
        }
    }

    return result;
}
