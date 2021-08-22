const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


// sr.reveal(`.fullPageContent,
//             .serviceContent
//             `,{
//     origin: 'top',
//     interval: 100,
// })

sr.reveal(`.uberContent, 
.angebotKurse`,
{
    origin: 'left',
})

sr.reveal(`.contentKursPic`,{
    origin: 'right',
    interval: 100,


// sr.reveal(`.about__img-overlay, 
//            .video__content,
//            .subscribe__form`,{
//     origin: 'right',
//     interval: 100,
})