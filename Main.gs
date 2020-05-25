 var formResponseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
 var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

/*------------ General Functions ------------ */
function findColumnInRow(row, string, arr){
  let colIndex = 0;
  for(let i=0; i<arr[0].length; i++){
    if(arr[row][i] === string){
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
    if(arr[i][col] === string){
      rowIndex=i;
      return rowIndex
    }
  }
  return rowIndex;
}