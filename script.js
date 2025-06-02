// Tambahkan fitur interaktif jika diperlukan nanti
console.log("Website Busana Islami loaded.");

// Klik gambar Gamis Kurtah untuk masuk ke kurtah1.html
document.addEventListener("DOMContentLoaded", function() {
  const kurtahImg = document.querySelector('.product img[alt="Hijab"]');
  if (kurtahImg) {
    kurtahImg.style.cursor = "pointer";
    kurtahImg.addEventListener("click", function() {
      window.location.href = "product/gamiskurtah/kurtah1.html";
    });
  }
});
