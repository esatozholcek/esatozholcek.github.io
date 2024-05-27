document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('footer');
    const mainContent = document.querySelector('.container');
    const donorContainer = document.querySelector('.donor-container');
    

    function adjustContentHeight() {
      const headerHeight = header.offsetHeight;
      const footerHeight = footer.offsetHeight;
      const windowHeight = window.innerHeight;
      if (donorContainer) {
        const contentHeight = windowHeight - headerHeight - footerHeight - 50;
        donorContainer.style.minHeight = `${contentHeight}px`;
      } else {
        const contentHeight = windowHeight - headerHeight - footerHeight - 50;
        mainContent.style.minHeight = `${contentHeight}px`;
      }
      
    }
  
    adjustContentHeight();
  
    window.addEventListener('resize', adjustContentHeight);
  });