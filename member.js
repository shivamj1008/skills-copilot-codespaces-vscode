function skillsMember() {
  const skills = document.querySelectorAll('.skill');
  const skillContainer = document.querySelector('.skills-container');
  const skillContainerHeight = skillContainer.clientHeight;

  skills.forEach((skill) => {
    skill.style.height = `${skillContainerHeight}px`;
  });
}