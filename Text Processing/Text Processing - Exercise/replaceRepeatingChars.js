function replaceRepeatingChars(text) {
  let output = text[0];
  let textLength = text.length;

  for (let i = 1; i < textLength; i++) {
    let currentElement = text[i];
    let prevElement = text[i - 1];

    if (currentElement !== prevElement) {
      output += currentElement;
    }
  }

  console.log(output);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
