 var formResponseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
 var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

/*------------ General Functions ------------ */
function findColumnInRow(row, string, arr){
  let colIndex = 0;
  for(let i=0; i<arr[0].length; i++){
    if(arr[row][i].include(string)){
      colIndex=i;
      return colIndex;
    }
  }
  return colIndex;
}


function findRowInCol(col, string, arr){
  let rowIndex = 0;
  for(let i=0; i<arr.length; i++){
    Logger.log(arr[i][col]);
    if(arr[i][col].include(string)){
      rowIndex=i;
      return rowIndex
    }
  }
  return rowIndex;
}

function randChars(){
  var url = "";
  var randNum = 0;
  for(let i=0; i<16; i++){
    randNum = Math.floor(48+Math.random()*75);
    while((randNum > 57 && randNum < 65) || (randNum > 90 && randNum < 97)){
      randNum = Math.floor(48+Math.random()*75)
     }
    url += String.fromCharCode(randNum)
  }
  return url
}