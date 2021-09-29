let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

function createParagraph(words) {
  let pragraph = '';

  words.forEach((word) => {
    pragraph += word + ' ';
  });

  return pragraph;
}

console.log(createParagraph(words));
