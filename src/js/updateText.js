// resetBase()
import refs from "./refs";
export default function updateText() {
    if (window.innerWidth > 767) {
        refs.logo.textContent = 'Filmoteka';
    } else {
        refs.logo.textContent = '';
    }
  }
  function handleResize() {
    requestAnimationFrame(updateText);
  }
  
  updateText();
  
  window.addEventListener('resize', handleResize);
  
