const positiveSum = arr => arr.reduce((accum, curr) => accum + (curr > 0 ? curr : 0), 0);
