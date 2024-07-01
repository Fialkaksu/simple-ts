function concatenation(firstWord: string = '', secondWord: string = 'hello') {
  const firstWordTrimmed = firstWord.trim();

  if (!firstWordTrimmed) {
    console.error('First word is required');
    return;
  }

  console.log(`${firstWordTrimmed} ${secondWord}`);
}

export { concatenation };