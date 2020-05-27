/*------------ Form Submission functions ------------ */
function formSubmission() {
  var formResponseData = formResponseSheet.getDataRange().getValues();
  var data = dataSheet.getDataRange().getValues();
  var currentDevelopers = addNewNames(formResponseData, data);
  updateDeveloperRows(formResponseData, data, currentDevelopers);
}

function updateDeveloperRows(formResponseData, data, currentDevelopers) {
  var tempObj = {};
  var nameIndexForm = findColumnInRow(0, nameHeadingInSheet, formResponseData);
  var rowIndexData = findColumnInRow(0, rowsOfFormHeading, data);

  for (let i = 0; i < currentDevelopers.length; i++) {
    tempObj[currentDevelopers[i]] = [];
  }

  for (let i = 1; i < formResponseData.length; i++) {
    if (currentDevelopers.includes(formResponseData[i][nameIndexForm])) {
      tempObj[formResponseData[i][nameIndexForm]].push((i + 1).toString());
    }
  }
  for (let i = 0; i < currentDevelopers.length; i++) {
    dataSheet
      .getRange(i + 2, rowIndexData + 1)
      .setValue(tempObj[currentDevelopers[i]].toString());
  }
}

function addNewNames(formResponseData, data) {
  var currentDevelopers = [];
  var nameIndexData = findColumnInRow(0, nameHeadingInSheet, data);
  var nameIndexForm = findColumnInRow(0, nameHeadingInSheet, formResponseData);

  for (let i = 1; i < data.length; i++) {
    currentDevelopers.push(data[i][nameIndexData]);
  }

  for (let i = 1; i < formResponseData.length; i++) {
    if (!currentDevelopers.includes(formResponseData[i][nameIndexForm])) {
      dataSheet
        .getRange(dataSheet.getLastRow() + 1, nameIndexData + 1)
        .setValue(formResponseData[i][nameIndexForm]);
      currentDevelopers.push(formResponseData[i][nameIndexForm]);
    }
  }

  return currentDevelopers;
}
