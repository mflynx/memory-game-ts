const shuffleArray = (arr: any[]) => {
  //Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements array[i] and array[j]
  }
  return arr;
};
export default shuffleArray;
