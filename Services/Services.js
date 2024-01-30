function customAlert(message) {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(modal);

    var closeButton = modal.querySelector('.close');
    closeButton.onclick = function() {
        document.body.removeChild(modal);
    }
}

customAlert('Welcome to HealthyMeds Pharmacy! Your health is our priority. Explore our comprehensive services, facilitated by our dedicated team of healthcare professionals committed to your well-being.');


    function customAlert(message) {
        var modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>${message}</p>
            </div>
        `;
        
        document.body.appendChild(modal);

        var closeButton = modal.querySelector('.close');
        closeButton.onclick = function() {
            document.body.removeChild(modal);
        }
    }


    function showSlides() {
        const slides = document.querySelectorAll('.testimonial-slide');
        let slideIndex = 0;
    
        function displaySlides() {
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            slideIndex++;
            
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
    
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(displaySlides, 5000); 
        }
    
        displaySlides();
    }
    
    showSlides();

    


