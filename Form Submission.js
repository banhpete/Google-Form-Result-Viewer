/*------------ Form Submission functions ------------ */
function formSubmission() {
  var formResponseData = formResponseSheet.getDataRange().getValues();
  var data = dataSheet.getDataRange().getValues();
  var currentDevelopers = addNewDevelopers(formResponseData, data);
  updateDeveloperRows(formResponseData, data, currentDevelopers);
}

function updateDeveloperRows(formResponseData, data, currentDevelopers) {
  var tempObj = {};
  var developerIndex = findColumnInRow(0, "Developer Name", formResponseData);
  const ROW_FORM_INDEX = 4;

  for (let i = 0; i < currentDevelopers.length; i++) {
    tempObj[currentDevelopers[i]] = [];
  }

  for (let i = 1; i < formResponseData.length; i++) {
    if (currentDevelopers.includes(formResponseData[i][developerIndex])) {
      tempObj[formResponseData[i][developerIndex]].push((i + 1).toString());
    }
  }
  for (let i = 0; i < currentDevelopers.length; i++) {
    dataSheet
      .getRange(i + 2, ROW_FORM_INDEX)
      .setValue(tempObj[currentDevelopers[i]].toString());
  }
}

function addNewDevelopers(formResponseData, data) {
  var currentDevelopers = [];
  const CUR_DEV_ARR_INDEX = 0;

  for (let i = 1; i < data.length; i++) {
    currentDevelopers.push(data[i][CUR_DEV_ARR_INDEX]);
  }

  var developerIndex = findColumnInRow(0, "Developer Name", formResponseData);

  for (let i = 1; i < formResponseData.length; i++) {
    if (!currentDevelopers.includes(formResponseData[i][developerIndex])) {
      dataSheet
        .getRange(dataSheet.getLastRow() + 1, CUR_DEV_ARR_INDEX + 1)
        .setValue(formResponseData[i][developerIndex]);
      currentDevelopers.push(formResponseData[i][developerIndex]);
    }
  }

  return currentDevelopers;
}
