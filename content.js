console.log("SourPatch suan kosuyor...");
const favButonlari = document.querySelectorAll(`.favorite-link`);
// like voted, dislike voted
favButonlari.forEach(favButonu => favButonu.innerHTML = `🍋`)