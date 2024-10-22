 // toggle flyout menu (mobile only)
const burgerMenu = document.querySelector('.mobile-burger')
const flyout = document.querySelector('.mobile-nav')

burgerMenu.addEventListener('click', () => {
    flyout.classList.toggle('open')
})

// ESC key to toggle flyout menu off
// flyout.addEventListener
// function keyCode(event) {
//     var x = event.keyCode;
//     if (x == 27) {
//         alert("You pressed the Escape key!");
//     }
// }



fetch('data.json')
    .then(res => res.json())
    
    .then((data) => {
        console.log(data)

        const projects = document.querySelector('#portfolio')
        
        data.projects.forEach(pieceOfWork => {
            if (pieceOfWork.featured == "true") {

                projects.innerHTML +=
                    `
            <div class='portfolio-card'>
                <img src="${pieceOfWork.img}" alt="${pieceOfWork.altText}" class="portfolio-image">
                <p class="project-title">${pieceOfWork.Title}</p>
                <p>${pieceOfWork.desc}</p>
                <div class='portf-icons'>
                    <a href="${pieceOfWork.live}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>
                    <a href="${pieceOfWork.git}" target="_blank"><i class="fa-brands fa-github"></a></i>
                </div>
            </div>
            `}
        })
    })

