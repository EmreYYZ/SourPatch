var browser = browser || chrome;

// CREATE STYLE
var styleEl = document.createElement("style");

// Append <style> element to <head>
document.head.appendChild(styleEl);

// Grab style element's sheet
var styleSheet = styleEl.sheet;

browser.storage.sync.get(null, function (storageData) {
  console.log(storageData.rules === true);
  let storageArray = storageData.rules;
  let reklamlar = storageArray[storageArray.findIndex((e) => e.id === "reklamlar")];
  let pena = storageArray[storageArray.findIndex((e) => e.id === "pena")];
  let favori = storageArray[storageArray.findIndex((e) => e.id === "favori")];
  let eksiseyler = storageArray[storageArray.findIndex((e) => e.id === "eksiseyler")];
  let karma = storageArray[storageArray.findIndex((e) => e.id === "karma")];

  // REKLAMLAR REFERENCES
  if (reklamlar.isChecked) {
    console.log("🍋 Reklamlar siliniyor...");

    // under top ad
    styleSheet.insertRule(`.under-top-ad {display: none !important}`, styleSheet.cssRules.length);

    // other ads
    // sidebar and footer
    styleSheet.insertRule(`.bottom-ads { display: none !important }`, styleSheet.cssRules.length);
    styleSheet.insertRule(`.stick-ad { display: none !important }`, styleSheet.cssRules.length);
    styleSheet.insertRule(`#sticky-ad { display: none !important }`, styleSheet.cssRules.length);
    styleSheet.insertRule(`.ad-double-click { display: none !important }`, styleSheet.cssRules.length);
    styleSheet.insertRule(`.ad-banner { display: none !important }`, styleSheet.cssRules.length);
    styleSheet.insertRule(`.ad-1x1 { display: none !important }`, styleSheet.cssRules.length);
    styleSheet.insertRule(`#ad_unit { display: none !important }`, styleSheet.cssRules.length);

    // sol frame sponsorlu reklam basliklarini kaldir
    styleSheet.insertRule(`.sponsored { display: none !important }`, styleSheet.cssRules.length);
  }

  // PENA REFERENCES
  if (pena.isChecked === true) {
    console.log("🍋 Pena referanslari kaldiriliyor...");

    // Hides pena video
    styleSheet.insertRule(`#video { display: none !important }`, styleSheet.cssRules.length);
    // removes pena logo from the navigation
    styleSheet.insertRule(`.pena-logo-container { display: none !important; }`, styleSheet.cssRules.length);
  }

  // FAVORILERI GIZLE
  if (favori.isChecked === true) {
    console.log("🍋 Favori butonlari degistiriliyor...");
    /* hides the favorite count */
    styleSheet.insertRule(`.favorite-count { display: none !important }`, styleSheet.cssRules.length);

    // favori buton lokasyonunu ayarla
    styleSheet.insertRule(
      `.favorite-link { margin-right: 0.5rem !important; opacity: 0.6 !important; text-decoration: none !important; }`,
      styleSheet.cssRules.length
    );

    // Favori limonuna opasite ver favorilenmis entrylerde.
    styleSheet.insertRule(`.favorited { opacity: 1 !important }`, styleSheet.cssRules.length);

    // Favorinin hover state'i
    styleSheet.insertRule(`.favorite-link:hover { opacity: 1 !important; text-decoration: none !important }`, styleSheet.cssRules.length);

    // Fav butonunu limon yap.
    const favButonlari = document.querySelectorAll(`.favorite-link`);
    favButonlari.forEach((favButonu) => (favButonu.textContent = `🍋`));
  }

  // EKSISEYLER REFERENCES

  if (eksiseyler.isChecked === true) {
    console.log("🍋 EksiSeyler referanslari kaldiriliyor...");

    // Hides eksiseyler related articles on the sidebar (right)
    styleSheet.insertRule(`iframe[title="ekşi şeyler"] { display: none !important; }`, styleSheet.cssRules.length);

    // Hides eksiseyler video on sagframe
    // styleSheet.insertRule(
    //   `#aside > iframe { display: none !important; } #eksiseyler-author-embed { display: none !important; }`,
    //   styleSheet.cssRules.length
    // );

    styleSheet.insertRule(`#aside > iframe { display: none !important; }`, styleSheet.cssRules.length);

    // removes eksiseyler logo from header
    styleSheet.insertRule(`div.eksiseyler-logo-container { display: none !important; }`, styleSheet.cssRules.length);
  }

  // KARMA REFERENCES
  if (karma.isChecked === true) {
    console.log("🍋 Karma ile ilgili belirtecler kaldiriliyor...");

    // hides karma information and entry count badge (i.e "azimli") on profile page
    styleSheet.insertRule(`#user-badges { display: none; }`, styleSheet.cssRules.length);
  }
});
