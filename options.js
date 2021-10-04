const clickbutton = document.querySelector(".clickme");
const importantDiv = document.querySelector(".important");
const settingsDiv = document.querySelector(".settings");
const activeSettings = document.querySelector("#activeSettings");
const settingsForm = document.querySelector("#settingsForm");

// fix browser bug
// https://github.com/mdn/webextensions-examples/issues/194
var browser = browser || chrome;

const activeSettingList = [];

const settingsList = [
  { name: "Remove Ads", id: "ads", isChecked: true },
  { name: "Remove EksiSeyler references", id: "eksiseyler", isChecked: true },
  { name: "Remove Pena references", id: "pena", isChecked: true },
  { name: "Hide Favorite counts", id: "favorites", isChecked: true },
];

function setActiveSettings(settingID) {
  activeSettingList.push(settingID);
}

clickbutton.addEventListener("click", (e) => {
  e.preventDefault();
});

// create each setting as a div/checkbox
settingsList.forEach((setting) => {
  settingsDiv.innerHTML += `<div><input type="checkbox" id="${setting.id}" data-title="${setting.name}" name="${setting.id}" ${
    setting.isChecked ? "checked" : null
  } /><label for="${setting.id}">${setting.name}</label></div>`;
});

// submit settings
const handleSubmit = (e) => {
  e.preventDefault();

  // convert form data to an object
  const data = new FormData(e.target);
  const options = Object.fromEntries(data.entries());

  // Clear Storage
  browser.storage.sync.clear();
  // Save new settings to sync extension storage.
  browser.storage.sync.set(options, function () {
    console.log("Data is saved.");
    browser.storage.sync.get(null, function (result) {
      console.log(result);
    });
  });
  // console.log(browser.storage.sync.get);
};

settingsForm.addEventListener("submit", handleSubmit);

const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", displayCheck);
});

function displayCheck(e) {
  if (e.target.checked) {
    console.log(e.target);
    activeSettingList.push({
      name: e.target.dataset.title,
      id: e.target.name,
    });
  } else {
    activeSettingList.splice(activeSettingList.indexOf(activeSettingList.find((setting) => setting.id === e.target.name)), 1);
  }

  console.log("Checkbox clicked");

  activeSettingList.forEach((activeSetting) => {
    activeSettings.innerHTML += `<span>${activeSetting.name}</span>`;
  });
}
