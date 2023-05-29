let currentDate = new Date().getFullYear();
document.getElementById("date").innerHTML=`&copy; ${currentDate} Project Association Of Computer And Electronics. All rights reserved.`

function updateResponsiveStyles() {
    const windowWidth = window.innerWidth;
  
 
    if (windowWidth <= 768) {
      document.querySelector('.contact-container').style.flexDirection = 'column';
      document.querySelector('.left-contact').style.width = '100%';
      document.querySelector('.middle-contact').style.width = '100%';
      document.querySelector('.middle-contact').style.right = '0';
      document.querySelector('.middle-contact').style.top = '0';
      const socialIcons = document.querySelectorAll('.fb img, .insta img, .email img');
      socialIcons.forEach(icon => {
        icon.style.position = 'static';
        icon.style.marginTop = '20px';
      });
    } else {
      
      document.querySelector('.contact-container').style.flexDirection = 'row';
      document.querySelector('.left-contact').style.width = '50%';
      document.querySelector('.middle-contact').style.width = '30%';
      document.querySelector('.middle-contact').style.right = '170px';
      document.querySelector('.middle-contact').style.top = '20px';
      const socialIcons = document.querySelectorAll('.fb img, .insta img, .email img');
      socialIcons.forEach(icon => {
        icon.style.position = 'relative';
        icon.style.marginTop = '0';
      });
    }
  
    
    if (windowWidth <= 480) {
      document.querySelector('.con').style.marginLeft = '0';
      document.querySelector('.con').style.fontSize = '20px';
      const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
      inputs.forEach(input => {
        input.style.height = '50px';
      });
      const socialIcons = document.querySelectorAll('.fb img, .insta img, .email img');
      socialIcons.forEach(icon => {
        icon.style.display = 'block';
        icon.style.margin = '20px auto';
      });
    } else {

      document.querySelector('.con').style.marginLeft = '100px';
      document.querySelector('.con').style.fontSize = '25px';
      const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
      inputs.forEach(input => {
        input.style.height = '70px';
      });
      const socialIcons = document.querySelectorAll('.fb img, .insta img, .email img');
      socialIcons.forEach(icon => {
        icon.style.display = 'initial';
        icon.style.margin = '0';
      });
    }
  }
  
  
  updateResponsiveStyles();
  

  window.addEventListener('resize', updateResponsiveStyles);
  