window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.remove('header-transparent');
      header.classList.add('header-blurry');
    } else {
      header.classList.remove('header-blurry');
      header.classList.add('header-transparent');
    }
  });


// Updated infinite slider script for both directions
function setupInfiniteSlider(sliderId, direction, speed) {
  const slider = document.getElementById(sliderId);
  const sliderContent = slider.innerHTML;
  slider.innerHTML = sliderContent + sliderContent; // Duplicate the content for smooth looping

  let position = 0;
  const totalWidth = slider.scrollWidth / 2;

  function animate() {
      // Adjust position based on the direction and speed
      position += direction * speed / 60;

      // Handle the loop for both left (-1) and right (1) directions
      if (direction === -1 && Math.abs(position) >= totalWidth) {
          position = 0; // Reset when moving left and reaching the end
      } else if (direction === 1 && position >= 0) {
          position = -totalWidth; // Reset when moving right and reaching the start
      }

      // Apply the new position
      slider.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
  }

  animate();
}

setupInfiniteSlider('slider1', -1, 50);  // Move left
setupInfiniteSlider('slider2', 1, 40);   // Move right
setupInfiniteSlider('slider3', -1, 60);  // Move left


document.addEventListener('DOMContentLoaded', function() {
    const eventItems = document.querySelectorAll('.event-item');
    
    eventItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle active class
        this.classList.toggle('active');
        
        // Close other open items
        eventItems.forEach(otherItem => {
          if (otherItem !== this && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            let collapsibleElement = otherItem.querySelector('.collapse');
            if (collapsibleElement) {
              bootstrap.Collapse.getInstance(collapsibleElement).hide();
            }
          }
        });
      });
    });
  });