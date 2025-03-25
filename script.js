document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Appel initial pour afficher le contenu visible dès le chargement
});

function voirProjet(projet) {
  alert("Vous allez voir les détails du projet : " + projet);
  // Redirection possible vers une page dédiée
  // window.location.href = "details-" + projet + ".html";
}

function voirProjet(fichier) {
  window.open(fichier, "_blank"); // Ouvre le fichier dans un nouvel onglet
}
