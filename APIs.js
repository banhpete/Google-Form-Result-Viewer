/*------------ API functions for Client Side ------------ */
function dataRetrieveFor(urlCode = "test") {
  var data = dataSheet.getDataRange().getValues();
  var formResponseData = formResponseSheet.getDataRange().getValues();
  var passCodeIndexData = findColumnInRow(0, passCodeHeading, data);
  var rowIndexData = findColumnInRow(0, rowsOfFormHeading, data);
  var passCodeCheck = findRowInCol(passCodeIndexData, urlCode, data);
  var nameIndexData = findColumnInRow(0, nameHeadingInSheet, data);
  if (passCodeCheck) {
    var rowIndexesForm = data[passCodeCheck][rowIndexData].split(",");
    rowIndexesForm.push(1);
    var dataArr = [];
    var name = data[passCodeCheck][nameIndexData];
    dataArr.push(name);
    for (let i = 0; i < rowIndexesForm.length; i++) {
      let tempObj = {};
      for (let j = 0; j < formResponseData[0].length; j++) {
        tempObj[j] = formResponseData[parseInt(rowIndexesForm[i]) - 1][
          j
        ].toString();
      }
      dataArr.push(tempObj);
    }
    return dataArr;
  } else {
    return false;
  }
}

function urlGen(email = "test") {
  var data = dataSheet.getDataRange().getValues();
  var emailIndexData = findColumnInRow(0, emailHeading, data);
  var passCodeIndexData = findColumnInRow(0, passCodeHeading, data);
  var emailCheck = findRowInCol(emailIndexData, email, data);
  var name = data[emailCheck][0];
  if (emailCheck) {
    var url = randChars();
    dataSheet.getRange(emailCheck + 1, passCodeIndexData + 1).setValue(url);
    MailApp.sendEmail({
      to: email,
      subject: "Link to view Google Form Submission",
      htmlBody:
        "Hi " +
        name +
        ", <br><br>To view your google form submissions please visit the following link:<br>https://script.google.com/macros/s/AKfycby-eKCuqc6SaQHpa9-K7_G2Rgzi2ss2A4ChAfNxfdkBjXY7SZ8_/exec?passCode=" +
        url +
        ".<br><br>Please bookmark this page for future references.<br><br>For any questions or concern please contact the admin of the Google Form.",
    });
    return "Email found, user will receieve email with URL to view Google Form Sub";
  }
  return "No email found";
}
