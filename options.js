const importantDiv = document.querySelector(".important");
const settingsDiv = document.querySelector(".settings");
const settingsForm = document.querySelector("#settingsForm");

// fix browser bug
// https://github.com/mdn/webextensions-examples/issues/194
var browser = browser || chrome;

const activeSettingList = [];

let settingsList = {
  rules: [
    { name: "Reklamlari gizle", id: "reklamlar", isChecked: true },
    { name: "Karma ve seviye referanslarini gizle", id: "karma", isChecked: true },
    { name: "EksiSeyler referanslarini gizle", id: "eksiseyler", isChecked: true },
    { name: "Pena referanslarini gizle", id: "pena", isChecked: true },
    { name: "Favori sayilarini gizle", id: "favori", isChecked: true },
    { name: "Avatarlari gizle", id: "avatar", isChecked: true },
  ],
};

// Check if the local storage has the settings
browser.storage.sync.get(null, function (result) {
  if (!result.rules) {
    writeToDatabase(settingsList);
  } else {
    // Clear settings list
    settingsDiv.innerHTML = "";

    // create each setting as a div/checkbox
    result.rules.forEach((setting) => {
      settingsDiv.innerHTML += `<div><input type="checkbox" id="${setting.id}" data-title="${setting.name}" name="${setting.id}" ${
        setting.isChecked ? "checked" : ""
      } /><label for="${setting.id}">${setting.name}</label></div>`;
    });
  }
});

// write the rules to the database
const writeToDatabase = (settingsObject) => {
  let options = settingsObject;

  // clear previous data in the database
  browser.storage.sync.clear();
  // Save new settings to sync extension storage.
  browser.storage.sync.set(options, function () {
    browser.storage.sync.get(null, function (result) {
      rewriteCheckboxUI();
    });
  });
};

// this one handles the click on the submit button.

const handleSubmitClick = (e) => {
  e.preventDefault();
  let newSet = { rules: [] };

  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  // check each checkbox for checked state
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      // recreate the og checkbox data with the checkbox state
      let trueRule = {
        name: checkbox.dataset.title,
        id: checkbox.id,
        isChecked: true,
      };
      // push the data to newset
      newSet.rules.push(trueRule);
    } else if (!checkbox.checked) {
      // recreate the og checkbox data with the checkbox state
      let falseRule = {
        name: checkbox.dataset.title,
        id: checkbox.id,
        isChecked: false,
      };
      // push the data to newset
      newSet.rules.push(falseRule);
    } else {
      console.log("Hata var hocam. Kodun checkbox kismiyla ilgili olsa gerek, foreach'e bi bak.");
    }
  });
  // write the new settings/rules object to the browser storage
  writeToDatabase(newSet);
};

// add a listener to the submit button
document.querySelector("#submit").addEventListener("click", handleSubmitClick);

function rewriteCheckboxUI() {
  // get saved settings
  browser.storage.sync.get(null, function (result) {
    // change default settings into the updated settings
    let rulesToWrite = result.rules;

    // Clear settings list
    settingsDiv.innerHTML = "";

    // create each setting as a div/checkbox
    rulesToWrite.forEach((setting) => {
      settingsDiv.innerHTML += `<div><input type="checkbox" id="${setting.id}" data-title="${setting.name}" name="${setting.id}" ${
        setting.isChecked ? "checked" : ""
      } /><label for="${setting.id}">${setting.name}</label></div>`;
    });
  });
}
