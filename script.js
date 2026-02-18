console.log("Hello !");

const randomNumberButton = document.getElementById("random-number");
randomNumberButton.addEventListener("click", () => {
  document.getElementById("resultat").textContent = Math.random();
});
