let bibleBooks = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "Samuel",
  // "2 Samuel",
  "Kings",
  // "2 Kings",
  "Chronicles",
  // "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "Corinthians",
  // "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "Thessalonians",
  // "2 Thessalonians",
  "Timothy",
  // "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "Peter",
  // "2 Peter",
  "John",
  // "2 John",
  // "3 John",
  "Jude",
  "Revelation",
];

// Function to shuffle an array (reusing from previous response)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to shuffle characters within a word
function shuffleWord(word) {
  const characters = word.split("");
  shuffleArray(characters);
  return characters.join("");
}

// Shuffle characters within each book name
bibleBooks = bibleBooks.map(shuffleWord);

// const bookIndexes = {};

const randomNumber = Math.floor(Math.random() * 57);
console.log(randomNumber);

for (let i = 0; i < bibleBooks.length; i++) {
  bibleBooks[i] = bibleBooks[i].toUpperCase();
  // console.log(`${i}: ${bibleBooks[i]}`);
  // bookIndexes[bibleBooks[i]] = i;
}
switch (randomNumber) {
  case 0:
    console.log(`${bibleBooks[0]}`);
    break;
  case 1:
    console.log(`${bibleBooks[1]}`);
    break;
  case 2:
    console.log(`${bibleBooks[2]}`);
    break;
  case 3:
    console.log(`${bibleBooks[3]}`);
    break;
  case 4:
    console.log(`${bibleBooks[4]}`);
    break;
  case 5:
    console.log(`${bibleBooks[5]}`);
    break;
  case 6:
    console.log(`${bibleBooks[6]}`);
    break;
  case 7:
    console.log(`${bibleBooks[7]}`);
    break;
  case 8:
    console.log(`${bibleBooks[8]}`);
    break;
  case 9:
    console.log(`${bibleBooks[9]}`);
    break;
  case 10:
    console.log(`${bibleBooks[10]}`);
    break;
  case 11:
    console.log(`${bibleBooks[11]}`);
    break;
  case 12:
    console.log(`${bibleBooks[12]}`);
    break;
  case 13:
    console.log(`${bibleBooks[13]}`);
    break;
  case 14:
    console.log(`${bibleBooks[14]}`);
    break;
  case 15:
    console.log(`${bibleBooks[15]}`);
    break;
  case 16:
    console.log(`${bibleBooks[16]}`);
    break;
  case 17:
    console.log(`${bibleBooks[17]}`);
    break;
  case 18:
    console.log(`${bibleBooks[18]}`);
    break;
  case 19:
    console.log(`${bibleBooks[19]}`);
    break;
  case 20:
    console.log(`${bibleBooks[20]}`);
    break;
  case 21:
    console.log(`${bibleBooks[21]}`);
    break;
  case 22:
    console.log(`${bibleBooks[22]}`);
    break;
  case 23:
    console.log(`${bibleBooks[23]}`);
    break;
  case 24:
    console.log(`${bibleBooks[24]}`);
    break;
  case 25:
    console.log(`${bibleBooks[25]}`);
    break;
  case 26:
    console.log(`${bibleBooks[26]}`);
    break;
  case 27:
    console.log(`${bibleBooks[27]}`);
    break;
  case 28:
    console.log(`${bibleBooks[28]}`);
    break;
  case 29:
    console.log(`${bibleBooks[29]}`);
    break;
  case 30:
    console.log(`${bibleBooks[30]}`);
    break;
  case 31:
    console.log(`${bibleBooks[31]}`);
    break;
  case 32:
    console.log(`${bibleBooks[32]}`);
    break;
  case 33:
    console.log(`${bibleBooks[33]}`);
    break;
  case 34:
    console.log(`${bibleBooks[34]}`);
    break;
  case 35:
    console.log(`${bibleBooks[35]}`);
    break;
  case 36:
    console.log(`${bibleBooks[36]}`);
    break;
  case 37:
    console.log(`${bibleBooks[37]}`);
    break;
  case 38:
    console.log(`${bibleBooks[38]}`);
    break;
  case 39:
    console.log(`${bibleBooks[39]}`);
    break;
  case 40:
    console.log(`${bibleBooks[40]}`);
    break;
  case 41:
    console.log(`${bibleBooks[41]}`);
    break;
  case 42:
    console.log(`${bibleBooks[42]}`);
    break;
  case 43:
    console.log(`${bibleBooks[43]}`);
    break;
  case 44:
    console.log(`${bibleBooks[44]}`);
    break;
  case 45:
    console.log(`${bibleBooks[45]}`);
    break;
  case 46:
    console.log(`${bibleBooks[46]}`);
    break;
  case 47:
    console.log(`${bibleBooks[47]}`);
    break;
  case 48:
    console.log(`${bibleBooks[48]}`);
    break;
  case 49:
    console.log(`${bibleBooks[49]}`);
    break;
  case 50:
    console.log(`${bibleBooks[50]}`);
    break;
  case 51:
    console.log(`${bibleBooks[51]}`);
    break;
  case 52:
    console.log(`${bibleBooks[52]}`);
    break;
  case 53:
    console.log(`${bibleBooks[53]}`);
    break;
  case 54:
    console.log(`${bibleBooks[54]}`);
    break;
  case 55:
    console.log(`${bibleBooks[55]}`);
    break;
  case 56:
    console.log(`${bibleBooks[56]}`);
    break;
  default:
    console.log(`Not a book`);
}

// console.log(bookIndexes); // Output: { Genesis: 0, Exodus: 1, ... }
function mixedUpBooks(event) {
  // event.preventDefault();
  button.innerHTML = `${bibleBooks[randomNumber]}`;
}
function backToImage(event) {
  // event.preventDefault();
  dbutton.innerHTML = `${button}`;
}

let button = document.querySelector(".guess");
button.addEventListener("click", mixedUpBooks);

let dbutton = document.querySelector(".guess");
dbutton.addEventListener("dblclick", backToImage);
