// Global Variables Initialized - These grab the sheet by name, if your spreadsheet
// is different change it accordingly. The formResponseSheet is the sheet for
// for the form responses. The dataSheet is where we store data pertraining
// to which rows belong to which user.
const formResponseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  "Form Responses 2"
);
const dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
const nameHeadingInSheet = "Developer Name";
const rowsOfFormHeading = "Rows of Form Submission";
const emailHeading = "Email";
const passCodeHeading = "passCode";

/*------------ General Functions ------------ */
function findColumnInRow(row, string, arr) {
  let colIndex = 0;
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[row][i] == string) {
      colIndex = i;
      return colIndex;
    }
  }
  return colIndex;
}

function findRowInCol(col, string, arr) {
  let rowIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][col] == string) {
      rowIndex = i;
      return rowIndex;
    }
  }
  return rowIndex;
}

function randChars() {
  var url = "";
  var randNum = 0;
  for (let i = 0; i < 16; i++) {
    randNum = Math.floor(48 + Math.random() * 75);
    while ((randNum > 57 && randNum < 65) || (randNum > 90 && randNum < 97)) {
      randNum = Math.floor(48 + Math.random() * 75);
    }
    url += String.fromCharCode(randNum);
  }
  return url;
}

/*------------ Web Apps Functions ------------ */

function doGet(e) {
  // This function allows us to use the Google Web App.
  // Essentially it calls up the html file.
  // Depending if the url has "passCode" in the parameter or not, a different
  // HTML file is served.
  if (e.parameter["passCode"]) {
    var htmltemp = HtmlService.createTemplateFromFile("userData");
    return htmltemp.evaluate();
  } else {
    var htmltemp = HtmlService.createTemplateFromFile("index");
    return htmltemp.evaluate();
  }
}

function include(filename) {
  // Function to allow HTML files to connect with one another. This is important
  // For having HTML files connect with other HTML files that are supposed to be
  // the CSS and JS files
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
