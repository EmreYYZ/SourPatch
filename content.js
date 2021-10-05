// CREATE STYLE
var styleEl = document.createElement("style");

// Append <style> element to <head>
document.head.appendChild(styleEl);

// Grab style element's sheet
var styleSheet = styleEl.sheet;

let storageData = {
  reklamlar: "on",
  karma: "on",
  eksiseyler: "on",
  pena: "on",
  favori: "on",
};

// REKLAMLAR REFERENCES
if (storageData.reklamlar) {
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
if (storageData.pena) {
  // Hides pena video
  styleSheet.insertRule(`#video { display: none !important }`, styleSheet.cssRules.length);
  // removes pena logo from the navigation
  styleSheet.insertRule(`.pena-logo-container { display: none !important; }`, styleSheet.cssRules.length);
}

// FAVORILERI GIZLE
if (storageData.favori) {
  /* hides the favorite count */
  styleSheet.insertRule(`.favorite-count { display: none !important }`, styleSheet.cssRules.length);

  // Fav butonunu limon yap.
  const favButonlari = document.querySelectorAll(`.favorite-link`);
  favButonlari.forEach((favButonu) => (favButonu.innerHTML = `🍋`));

  // favori buton lokasyonunu ayarla
  styleSheet.insertRule(
    `.favorite-link { margin-right: 0.5rem !important; opacity: 0.6 !important; text-decoration: none !important; }`,
    styleSheet.cssRules.length
  );

  // Favori limonuna opasite ver favorilenmis entrylerde.
  styleSheet.insertRule(`.favorited { opacity: 1 !important }`, styleSheet.cssRules.length);

  // Favorinin hover state'i
  styleSheet.insertRule(`.favorite-link:hover { opacity: 1 !important; text-decoration: none !important }`, styleSheet.cssRules.length);
}

// EKSISEYLER REFERENCES

if (storageData.eksiseyler) {
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
if (storageData.karma) {
  // hides karma information and entry count badge (i.e "azimli") on profile page
  styleSheet.insertRule(`#user-badges { display: none; }`, styleSheet.cssRules.length);
}
