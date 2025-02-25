// Select the container where we add the grid in
const container = document.querySelector('.container');

// // Set up grid size
// const gridSize = 16;
// const totalSquares = gridSize * gridSize;

// //Set up container as a grid with css
// container.style.display = 'grid';
// container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
// container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
// container.style.gap = '1px';
// container.style.width = '600px';
// container.style.height = '600px';
// container.style.margin = '0 auto';

// //create the grid squares
// for (let i = 0; i< totalSquares; i++) {
//   const square = document.createElement("div");
//   square.classList.add("grid-square");
//   square.style.backgroundColor = 'transparent';
//   square.style.border = '1px solid black';

//   container.appendChild(square);
// }

// //select the gridsquare
// const gridSquares = document.querySelectorAll('.grid-square');
// gridSquares.forEach(square => {
//   square.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'lightblue';
//   });
// });

//Create a button that appears at the top of the page
const sizeButton = document.createElement('button');
sizeButton.textContent = "Change Grid Size";
sizeButton.style.margin = "20px auto";
sizeButton.style.padding = "8px 16px";
sizeButton.style.display = 'block';

//Add the button to the page, before container
document.body.insertBefore(sizeButton, container);

//Function to create grid of any size
const createGrid = (size) => {
  // First, get the container
  const container = document.querySelector('.container');
  
  // Clear any existing grid
  container.innerHTML = '';
  
  // Set up the container as a grid
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.width = '600px';
  container.style.height = '600px';
  container.style.gap = '0.5px';
  container.style.margin = '8px auto';
  
  // Create the grid squares (size × size)
  const totalSquares = size * size;
  
  for (let i = 0; i < totalSquares; i++) {
    // Create a square
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.border = '1px solid black';
    
    // Add hover effect
    square.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = 'lightblue';
    });
    
    // Add the square to the container
    container.appendChild(square);
  }
}

sizeButton.addEventListener('click', () => {
  let newSize = prompt('Enter number of squares per side(max 100)');
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1) {
    alert('Please enter a positive number!');
    return;
  }

  if (newSize > 100) {
    alert('Max size is 100. Auto-set to 100');
    newSize=100;
  }

  createGrid(newSize);
})

createGrid(16);