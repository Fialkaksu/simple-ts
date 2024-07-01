function concatenation(firstWord = '', secondWord = 'hello') {
    const firstWordTrimmed = firstWord.trim();
    if (!firstWordTrimmed) {
        console.error('First word is required');
        return;
    }
    console.log(`${firstWordTrimmed} ${secondWord}`);
}
export { concatenation };
//# sourceMappingURL=concatenation.js.map