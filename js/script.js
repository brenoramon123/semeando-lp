import initToolTip from "./modules/tooltip.js";
import initAnimationScroll from "./modules/animationScroll.js";


initToolTip();
initAnimationScroll();
document.addEventListener("DOMContentLoaded", function () {
    const endDate = new Date("2024-02-01T00:00:00Z").getTime();
  
    // Atualiza a mensagem de escassez
    const scarcityMarquee = document.getElementById("scarcity-marquee");
    scarcityMarquee.innerHTML = getScarcityMessage();
  
    // Atualiza a mensagem a cada segundo (pode ajustar conforme necessário)
    setInterval(function () {
      scarcityMarquee.innerHTML = getScarcityMessage();
    }, 1000);
  
    function getScarcityMessage() {
      const currentDate = new Date().getTime();
      const timeDifference = endDate - currentDate;
  
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        return `Aproveite nossa promoção! Tempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        return "Promoção encerrada! Confira nossos outros produtos.";
      }
    }
  });
new SimpleAnime();