let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;
function checkWinner() {
if (
  (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
  (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
  (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||

  (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
  (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
  (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||

  (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
  (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
) {
  document.getElementById("result").innerHTML = `
  <div class="result">Winner is ${currentPlayer}</div>
  <div class="result">Refresh to play again...🕹️</div>`;
gameOver = true;

  return;
  
}
if(!arr.some((e) => e ===null)) {
   document.getElementById("result").innerHTML = `
  <div class="result">It's a Tie</div>
  <div class="result">Refresh to play again...🕹️</div>`;
gameOver = true;
    return;
}


}

function handleClick(el) {
   
  const id = Number(el.id);
   if(arr[id]!=null||gameOver){
        return;
    }
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer == "X" ? "O" : "X";
}