document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM entièrement chargé et analysé");

    // Suppression du flou des images au passage par dessus
    const projects = document.querySelectorAll('.cover img');
    console.log(`Nombre de projets trouvés : ${projects.length}`);

    
    projects.forEach((project, index) => {

        // Ajout du listener pour l'événement 'mouseover'
        project.addEventListener('mouseover', () => {
            project.classList.remove('not-active');
        });

        // Ajout du listener pour l'évènement 'mouseout'
        project.addEventListener('mouseout', ()=>{
            project.classList.add('not-active');
        })

    });
});



// Projet
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        let bgColor = card.style.backgroundColor;
        if (bgColor === 'rgb(255, 255, 255)' || bgColor === '') {
            card.style.backgroundColor = '#00FF00';
        } else {
            card.style.backgroundColor = '#fff';
        }
    });
});


