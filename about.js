const burgerMenu = document.querySelector('.mobile-burger')
const flyout = document.querySelector('.mobile-nav')

burgerMenu.addEventListener('click', () => {
    console.log('clicked! test')
    flyout.classList.toggle('open')
})





fetch('../json/data.json')
    .then(res => res.json())
    
    .then((data) => {
        console.log(data)

        const projects = document.querySelector('#portfolio')

        data.projects.forEach(pieceOfWork => {

            projects.innerHTML +=
            `
            <div class='portfolio-card'>
                <img src="${pieceOfWork.img}" alt="${pieceOfWork.altText}" class="portfolio-image">
                <p class="project-title">${pieceOfWork.Title}</p>
                <p>${pieceOfWork.desc}</p>
                <p>${pieceOfWork.longdesc}</p>
                <div class='portf-icons'>
                    <a href="${pieceOfWork.live}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i>
                    <a href="${pieceOfWork.git}" target="_blank"><i class="fa-brands fa-github"></a></i>
                </div>
            </div>
            `
        })
    })

