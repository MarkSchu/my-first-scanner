const scan = (source) => {

    let startCursor = 0;
    let endCursor = 0;
    let tokens = [];

    const scanToken = () => {

        const character = source[endCursor];
        endCursor++;

        if (character === '(') {
            const token = source.slice(startCursor, endCursor);
            tokens.push(token);
        }
        else if (character === ')') {
            const token = source.slice(startCursor, endCursor);
            tokens.push(token);
        }
        else if (character === '&') {
            const token = source.slice(startCursor, endCursor);
            tokens.push(token);
        }
        else if (character === 'v') {
            const token = source.slice(startCursor, endCursor);
            tokens.push(token);
        }
        else if (character === '~') {
            const token = source.slice(startCursor, endCursor);
            tokens.push(token);
        }
        else if (character === '-') {
            const nextCharacter = source[endCursor];
            endCursor++;
            if (nextCharacter === '>') {
                const token = source.slice(startCursor, endCursor);
                tokens.push(token);
            }
        }
        else if (character === 'p' || character === 'q' || character === 'r') {
            const token = source.slice(startCursor, endCursor);
            tokens.push(token);
        }
        else {
            throw `Uh... I was not expecting ${character}`;
        }
    }

    while(endCursor < source.length) {
        startCursor = endCursor;
        scanToken();
    }

    return tokens;
}

module.exports = scan;
