const reasons = [
    "Para saber lo que te espera el próximo mes",
    "Para aprender con eventos pasados",
    "Para entenerarte de lo que hacen nuestras comunidades",
    "Para conocer mejor Women Techmakers"
]

function randomText(reasons) {
    return reasons[Math.floor((Math.random() * 3.99))];
}



document.addEventListener("DOMContentLoaded", function() {
    const randomReasons = document.getElementById("random-reasons")
    randomReasons.innerText = randomText(reasons)
    
  });
