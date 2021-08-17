// Get References
let mainContent = document.getElementById('main-content');
let navLinks = document.getElementsByClassName('menu-item');

/**
 * loadContent is a function that request the content of clicked
 * navigation link then it will load the response html to the
 * main content 
 */
function loadContent (url){
    
    fetch(url).then( response => {
        return response.text();
    }).then( htmlContent => {
        mainContent.innerHTML = htmlContent;
    }).catch(error => {
        mainContent.innerHTML = "<p> Something wrong in the request </p>";
    });

}

/**
 * selectContent is a function that prevents the default behaviour 
 * of link tag. This function call the loadContent passing the 
 * href value of the a tag.
 */
function selectContent(e){
    e.preventDefault();
    let url = this.href; 

    loadContent(url);
}

// Register links for click event
for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", selectContent, false);
}


 