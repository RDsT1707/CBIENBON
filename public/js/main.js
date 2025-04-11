
  const playBtn = document.getElementById('playVideo');
  const closeBtn = document.getElementById('closeVideo');
  const video = document.getElementById('heroVideo');
  const videoContainer = document.getElementById('videoContainer');

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoContainer.classList.add('active');
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    videoContainer.classList.remove('active');
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments de filtre
    const filterItems = document.querySelectorAll('.menu-filter li');
    // Sélectionner tous les éléments du menu
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Ajouter un écouteur de clic à chaque élément de filtre
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Supprimer la classe active de tous les filtres
            filterItems.forEach(filter => {
                filter.classList.remove('filter-active');
                filter.setAttribute('aria-selected', 'false');
            });
            
            // Ajouter la classe active au filtre cliqué
            this.classList.add('filter-active');
            this.setAttribute('aria-selected', 'true');
            
            // Obtenir la valeur du filtre
            const filterValue = this.getAttribute('data-filter');
            
            // Afficher/masquer les éléments de menu en fonction du filtre
            menuItems.forEach(menuItem => {
                // Masquer d'abord tous les éléments avec une transition d'opacité
                menuItem.style.opacity = '0';
                menuItem.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    if (filterValue === 'all' || menuItem.classList.contains(filterValue)) {
                        menuItem.style.display = 'flex';
                        setTimeout(() => {
                            menuItem.style.opacity = '1';
                        }, 50);
                    } else {
                        menuItem.style.display = 'none';
                    }
                }, 300); // Attendre que l'animation d'opacité soit terminée
            });
        });
    });
    
    // Ajouter la navigation au clavier pour l'accessibilité
    filterItems.forEach(item => {
        item.addEventListener('keydown', function(e) {
            // Activer le filtre avec la touche Entrée ou Espace
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

window.onscroll = function() {
  var button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
