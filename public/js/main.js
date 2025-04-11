
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
    // Sélectionner tous les éléments nécessaires
    const filterInputs = document.querySelectorAll('.filter-checkbox');
    const menuItems = document.querySelectorAll('.menu-item');
    const filterLabels = document.querySelectorAll('.menu-filter label');
    
    // Fonction pour afficher les éléments du menu en fonction du filtre sélectionné
    function filterMenu(filterValue) {
      // Réinitialiser tous les éléments d'accessibilité
      filterLabels.forEach(label => {
        label.setAttribute('aria-selected', 'false');
      });
      
      // Marquer le filtre actif comme sélectionné
      document.querySelector(`label[for="${filterValue}"]`).setAttribute('aria-selected', 'true');
      
      // Cacher d'abord tous les éléments
      menuItems.forEach(item => {
        item.style.display = 'none';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
      });
      
      // Déterminer quels éléments afficher
      let itemsToShow;
      if (filterValue === 'filter-all') {
        itemsToShow = menuItems;
      } else {
        const category = filterValue.replace('filter-', '');
        itemsToShow = document.querySelectorAll(`.menu-item.${category}`);
      }
      
      // Afficher les éléments avec une animation
      setTimeout(() => {
        itemsToShow.forEach((item, index) => {
          setTimeout(() => {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 10);
          }, index * 100); // Délai progressif pour une animation en cascade
        });
      }, 50);
    }
    
    // Ajouter les écouteurs d'événements aux boutons de filtrage
    filterInputs.forEach(input => {
      input.addEventListener('change', function() {
        filterMenu(this.id);
      });
    });
    
    // Gérer la navigation au clavier pour l'accessibilité
    filterLabels.forEach(label => {
      label.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          document.getElementById(this.getAttribute('for')).checked = true;
          filterMenu(this.getAttribute('for'));
        }
      });
    });
    
    // Initialiser le menu avec le filtre "All" sélectionné par défaut
    filterMenu('filter-all');
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
