
// A simple sound service to play sounds on interactions
// This enhances accessibility for visually impaired users

// Sound for navigation interactions
const clickSound = new Audio('/click-sound.mp3');

// Function to play the click sound
export const playClickSound = () => {
  // Reset the audio to start from beginning if already playing
  clickSound.currentTime = 0;
  
  // Play the sound
  clickSound.play().catch(error => {
    // Handle any errors silently but log them
    console.error('Error playing click sound:', error);
  });
};

// Global click handler to add to interactive elements
export const addSoundToInteractiveElements = () => {
  // Use event delegation to capture clicks on interactive elements
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    
    // Check if the clicked element is a button, link, or other interactive element
    if (
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.closest('button') ||
      target.closest('a') ||
      target.getAttribute('role') === 'button' ||
      target.classList.contains('interactive')
    ) {
      playClickSound();
    }
  });
};
