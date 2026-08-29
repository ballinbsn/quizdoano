/* ===== CONFIG do checkout — preencha antes de publicar ===== */
window.CONFIG = window.CONFIG || {};

/* URL pública do backend Pix (PinPay) depois de publicado no Railway.
   SEM barra no final. Ex.: https://shein-checkout-backend-production.up.railway.app */
window.CONFIG.BACKEND_URL = "https://api-quiz-production-987b.up.railway.app";

(function () {
  var u = window.CONFIG.BACKEND_URL || "";
  if (!u || u.indexOf("SEU-BACKEND") !== -1 || u.indexOf("localhost") !== -1) {
    console.warn(
      "[checkout] CONFIG.BACKEND_URL ainda não aponta pro backend publicado — " +
        "o Pix não vai funcionar até trocar em 7/js/config.js."
    );
  }
})();
