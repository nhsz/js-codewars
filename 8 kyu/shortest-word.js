const findShort = s => {
  const listOfWords = s.split(' ');
  return listOfWords.reduce((min, currWord) => Math.min(min, currWord.length), listOfWords[0].length);
}
