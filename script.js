let firstInp = document.querySelector(".first");
let secondInp = document.querySelector(".second");
let similarity = document.querySelector(".similarity");

let percentage = document.querySelector(".percent");
similarity.addEventListener("click", () => {
  let firstInpVal = firstInp.value;
  let secondInpVal = secondInp.value;
  let firstInpArr = firstInpVal.split(" ");
  let secondInpArr = secondInpVal.split(" ");
  let stringJoin = firstInpVal.concat(" ", secondInpVal);
  let strToArr = stringJoin.split(" ");
  let uniqueWords = new Set(strToArr);
  let uniqueWordsArr = Array.from(uniqueWords).length;
  console.log(uniqueWordsArr);
  let commonWords = [];
  for (let i = 0; i < firstInpArr.length; i++) {
    for (let j = 0; j < secondInpArr.length; j++) {
      if (firstInpArr[i] === secondInpArr[j]) {
        commonWords.push(firstInpArr[i]);
      }
    }
  }
  let similarityPercent = ((commonWords.length / uniqueWordsArr) * 100).toFixed(
    2
  );
  document.querySelector(
    ".percent"
  ).innerHTML = `Similarity: ${similarityPercent}%`;
});
