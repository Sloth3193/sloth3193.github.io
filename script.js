const pcBuilds = [
  {
    budget: 500,
    parts: ['CPU: Intel i3', 'GPU: GTX 1050', 'RAM: 8GB DDR4', 'Storage: 256GB SSD'],
  },
  {
    budget: 1000,
    parts: ['CPU: Ryzen 5', 'GPU: RTX 2060', 'RAM: 16GB DDR4', 'Storage: 512GB SSD'],
  },
  {
    budget: 1500,
    parts: ['CPU: Ryzen 7', 'GPU: RTX 3070', 'RAM: 32GB DDR4', 'Storage: 1TB SSD'],
  }
  // Add more builds as needed
];

function getBuilds() {
  const budgetInput = document.getElementById('budgetInput').value;
  const buildsContainer = document.getElementById('buildsContainer');

  // Clear previous builds
  buildsContainer.innerHTML = '';

  // Filter builds by budget
  const filteredBuilds = pcBuilds.filter(build => build.budget <= budgetInput);

  if (filteredBuilds.length > 0) {
    filteredBuilds.forEach(build => {
      const buildCard = document.createElement('div');
      buildCard.classList.add('build-card');

      let buildHtml = `<h3>Build for $${build.budget}</h3><ul>`;
      build.parts.forEach(part => {
        buildHtml += `<li>${part}</li>`;
      });
      buildHtml += '</ul><button onclick="copyBuild(this)">Copy Build</button>';

      buildCard.innerHTML = buildHtml;
      buildsContainer.appendChild(buildCard);
    });
  } else {
    buildsContainer.innerHTML = '<p>No builds found for your budget.</p>';
  }
}

function copyBuild(button) {
  const buildText = button.previousSibling.textContent;
  navigator.clipboard.writeText(buildText).then(() => {
    alert('Build copied to clipboard!');
  });
}