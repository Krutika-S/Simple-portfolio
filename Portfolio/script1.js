// JavaScript for filtering projects based on the search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const projects = document.querySelectorAll('.project');
  
    searchInput.addEventListener('input', function() {
      const searchText = searchInput.value.toLowerCase().trim();
  
      projects.forEach(project => {
        const title = project.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchText)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
  