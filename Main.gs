 var formResponseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
 var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');

/*------------ General Functions ------------ */
function findColumn(string, arr){
  let colIndex = 0;
  for(let i=0; i<arr[0].length; i++){
    if(arr[0][i] === string){
      colIndex=i;
    }
  }
  return colIndex;
}
