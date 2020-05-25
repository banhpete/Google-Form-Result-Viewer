/*------------ API functions for Client Side ------------ */
function dataRetrieveFor(urlCode = "abc") {
  var data = dataSheet.getDataRange().getValues();
  var formResponseData = formResponseSheet.getDataRange().getValues();
  const URL_ARR_INDEX = 2;
  const ROW_ARR_INDEX = 3;
  var rowIndexes = data[findRowInCol(URL_ARR_INDEX, urlCode, data)][
    ROW_ARR_INDEX
  ].split(",");
  console.log(rowIndexes);
  var dataArr = [];
  for (let i = 0; i < rowIndexes.length; i++) {
    let tempObj = {};
    for (let j = 0; j < formResponseData[0].length; j++) {
      tempObj[j] = formResponseData[parseInt(rowIndexes[i]) - 1][j];
    }
    dataArr.push(tempObj);
  }
  return dataArr;
}

function urlGen(email = "Annasitu8@gmail.com") {
  var data = dataSheet.getDataRange().getValues();
  var formResponseData = formResponseSheet.getDataRange().getValues();
  const EMAIL_ARR_INDEX = 1;
  const URL_ARR_INDEX = 2;
  if (findRowInCol(EMAIL_ARR_INDEX, email.toLowerCase(), data)) {
    var url = randChars();
    dataSheet
      .getRange(
        findRowInCol(EMAIL_ARR_INDEX, email, data) + 1,
        URL_ARR_INDEX + 1
      )
      .setValue(url);
    return "Email found, user will receieve email with URL to view Google Form Sub";
  }
  return "No email found";
}
