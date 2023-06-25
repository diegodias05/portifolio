document.addEventListener("DOMContentLoaded", () => {

    new TypeIt (".animated", {  
        speed: 100,
        loop: true,

    })
    .type("Front-end", {delay:900})
    .delete(9)
    .type("Back-end", {delay:900})
    .delete(8)
    .type("Full Stsck", {delay:900})
    .pause(600)
    .delete(3)
    .type("ack", {delay:500})
    .go()

} )