function sum(a, b) {
    return a + b;
};
function nativeNull() {
    return null;
};

//expect(sum(41, 2)).toBe(43);

module.exports = { sum, nativeNull };
