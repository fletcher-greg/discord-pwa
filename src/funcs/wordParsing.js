function calcWords(sentence, amount) {
  let words = sentence.split(" ");
  if (words.length > amount) {
    return words.slice(0, amount + 1).join(" ") + "...";
  }
  return sentence;
}
