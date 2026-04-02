function isValid(s) {
    const map = { '(': ')', '{': '}', '[': ']' };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (map[top] !== char) return false;
        }
    }

    return stack.length === 0;
}