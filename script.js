
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');

        var contactButton = document.querySelector('.contact-now');
        if (contactButton.style.display === 'none' || contactButton.style.display === '') {
            contactButton.style.display = 'block';
        } else {
            contactButton.style.display = 'none';
        }
        
    });
});


function playVideo() {
    //to play video
}


function copyTestimonial() {
    var firstTestimonial = document.getElementById('testimonial1').innerHTML;
    var secondTestimonial = document.getElementById('testimonial2');
    secondTestimonial.innerHTML = firstTestimonial;

    var paragraph = secondTestimonial.querySelector('.testimonial-text');
    
    paragraph.style.color = '#D3D3D3'; //gray    
}


copyTestimonial();


//create container div for buttons
var buttonContainer = document.createElement("div");
buttonContainer.style.position = "relative";
buttonContainer.style.top = "40%";
buttonContainer.style.transform = "translateY(210%)";
buttonContainer.style.display = "flex";
buttonContainer.style.alignItems = "center";
buttonContainer.style.justifyContent = "flex-end";
buttonContainer.style.width = "90%";
buttonContainer.style.padding = "0 5px";    


// create previous button
var prevButton = document.createElement("img");
prevButton.src = "images/previous.jpg";
prevButton.alt = "Previous";
prevButton.style.cursor = "pointer"; // change cursor to pointer on hover
prevButton.style.width = "30px"; 
prevButton.style.height = "30px"; 
prevButton.style.marginRight = "12px"; 

//create next button
var nextButton = document.createElement("img");
nextButton.src = "images/next.jpg";
nextButton.alt = "Next";
nextButton.style.cursor = "pointer";  // change cursor to pointer on hover
nextButton.style.width = "30px"; 
nextButton.style.height = "30px";    

//add click event listeners to the buttons
prevButton.addEventListener("click", function() {
    console.log("Previous button clicked");
});

nextButton.addEventListener("click", function() {
    console.log("Next button clicked");
});

// append buttons to container
buttonContainer.appendChild(prevButton);
buttonContainer.appendChild(nextButton);

// append container to testimonial2 element
var testimonial2 = document.getElementById("testimonial1");
if (testimonial2) {
    testimonial2.appendChild(buttonContainer);
    
} else {
    console.error("Element with id 'testimonial2' not found.");
}




