/*------------ API functions for Client Side ------------ */
function dataRetrieveFor(urlCode="abc") {
  var data = dataSheet.getDataRange().getValues();
  var formResponseData = formResponseSheet.getDataRange().getValues();
  const URL_ARR_INDEX = 2;
  const ROW_ARR_INDEX = 3;
  var rowIndexes = data[findRowInCol(URL_ARR_INDEX,urlCode,data)][ROW_ARR_INDEX].split(',');
  console.log(rowIndexes);
  var dataArr = [];
  for(let i =0; i<rowIndexes.length; i++){
    let tempObj = {};
    for(let j=0; j<formResponseData[0].length; j++){
      tempObj[j] = formResponseData[parseInt(rowIndexes[i])-1][j]
    }
    dataArr.push(tempObj);
  }
  return dataArr
}