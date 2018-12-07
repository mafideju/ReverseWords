const reverseWords = (string) => {
  const wordsArr = string.split(' ')
  const reversedWordsArr = []

  wordsArr.forEach(word => {
    let reverseWord = ''
    for (var i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i]
    }
    reversedWordsArr.push(reverseWord)
  });
  return reversedWordsArr.join(' ')
}

const test = reverseWords('socorram me subi no onibus em marrocos')
console.log(test)