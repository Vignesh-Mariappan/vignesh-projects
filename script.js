(function () {
  fetch('./assets/projects.json')
    .then((response) => {
      return response.json();
    })
    .then((projectsData) => {
      let cardsContainer = document.querySelector('.cards-container');

      // iterate the data array
      projectsData.forEach((project) => {
        // create card div
        let card = document.createElement('div');
        card.classList.add('card');

        // create card link anchor tag
        let cardLink = document.createElement('a');
        cardLink.classList.add('card-link');
        cardLink.setAttribute('href', project.link);
        cardLink.setAttribute('target', '_blank');

        // create card img div
        let cardImgDiv = document.createElement('div');
        cardImgDiv.classList.add('card-img');

        // create img tag
        let cardImg = document.createElement('img');
        cardImg.setAttribute('src', project.imgSrc);
        cardImg.setAttribute('alt', project.title);

        // create card meta info div
        let cardMetaInfo = document.createElement('div');
        cardMetaInfo.classList.add('card-meta-info');

        // create card title div
        let cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = project.title;

        // create card description div
        let cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = project.description;

        // create tech used div
        let cardTechUsed = document.createElement('div');
        cardTechUsed.classList.add('card-tech-used');
        cardTechUsed.textContent = `Technologies Used - ${project.technologies}`;

        // insert img tag inside card img div tag
        cardImgDiv.appendChild(cardImg);

        // insert card title div inside card meta info div
        cardMetaInfo.appendChild(cardTitle);

        // insert card description div inside card meta info div
        cardMetaInfo.appendChild(cardDescription);

        // insert card tech used div inside card meta info
        cardMetaInfo.appendChild(cardTechUsed);

        // insert card img div inside card link a tag
        cardLink.appendChild(cardImgDiv);

        // insert card card meta info inside card link a tag
        cardLink.appendChild(cardMetaInfo);

        // insert anchor tag into card div
        card.appendChild(cardLink);

        // insert card div into card container div
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      document.querySelector('.error-msg').style.display = 'block';
    });
})();
