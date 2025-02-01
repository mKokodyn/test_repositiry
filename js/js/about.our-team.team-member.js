const teamMembersArray = [
  {
    id: "1",
    name: "Mary Stone",
    imageSource:
      "./img/about-page-photo/team-photo/carousel-mary-stone-gourmet-chef.webp",
    role: "Gourmet Chef",
  },

  {
    id: "2",
    name: "John Palmer",
    imageSource:
      "./img/about-page-photo/team-photo/carousel-john-palmer-sauce-chef.webp",
    role: "Sauce Chef",
  },

  {
    id: "3",
    name: "Jessica Clower",
    imageSource:
      "./img/about-page-photo/team-photo/carousel-jessica-clower-meat-specialist.webp",
    role: "Meat Specialist",
  },

  {
    id: "4",
    name: "Helen Smith",
    imageSource:
      "./img/about-page-photo/team-photo/carousel-helen-smith-burger-master.webp",
    role: "Burger Master",
  },
];

function renderTeamMembers(teamMembers){
  let teamMembersHTML = "";
    for(const member of teamMembers){
      teamMembersHTML += `<article class="carousel__item">
          <div class="carousel__image-wrapper">
            <img class="carousel__image" width="250"
              src="${member.imageSource}"
              alt="${member.name} - ${member.role}" />
          </div>
          <h4 class="carousel__name">${member.name}</h4>
          <h5 class="carousel__role">${member.role}</h5>
        </article>`;

        break;
    }
    const teamMembersContainer = document.querySelector(".carousel__track");
    teamMembersContainer.innerHTML = teamMembersHTML;
}
renderTeamMembers(teamMembersArray);

