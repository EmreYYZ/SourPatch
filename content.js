console.log("🍋 SourPatch calisiyor...");

// Fav butonunu limon yap.
const favButonlari = document.querySelectorAll(`.favorite-link`);
favButonlari.forEach((favButonu) => (favButonu.innerHTML = `🍋`));
