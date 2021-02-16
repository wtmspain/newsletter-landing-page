const reasons = [
    "Para saber lo qué pasa el próximo mes",
    "Para aprender de eventos que te perdiste",
    "Para enterarte de lo que está pasando en la comunidad",
    "Para conocer mejor a Women Techmakers",
    "Para conocer a otras comunidades amigas"
]

function setRandomReason() {
    const reason = reasons[Math.floor(reasons.length * Math.random())];
    const randomReasons = document.getElementById("random-reasons")
    randomReasons.innerText = reason

}

document.addEventListener("DOMContentLoaded", function() {
    setRandomReason()
    setInterval(setRandomReason, 3000)
  });
