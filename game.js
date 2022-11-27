const images = []
for (let i = 1; i <= 15; i++) {
  images.push({ imgSrc: 'images/pm1_' + i + '.gif' })
  images.push({ imgSrc: 'images/pm1_' + i + '.gif' });
};
const shaffleAraay = () => {
  return images.sort(() => (0.5 - Math.random()))

}
// shaffleAraay();
// console.log(images)

const section = document.querySelector('section');

const cardsToHtml = () => {
  const cards = shaffleAraay();

  cards.forEach(cardsItem => {
    const card = document.createElement("div")
    const face = document.createElement("img")
    const back = document.createElement("div")
    section.appendChild(card)
    card.classList.add("card")
    card.appendChild(face)
    face.classList.add("face")
    face.src = cardsItem.imgSrc
    card.appendChild(back)
    back.classList.add("back")

    card.addEventListener("click", () => {
      card.classList.toggle("clicked");  
      card.classList.add("opend")
      console.log(card);
      // console.log(face);
      matchedCards();
    });
  });
}
const matchedCards = () => {
  // console.log()  
  // const clickedCards = e.target;
  // clickedCards.classList.add("fliped");
  let flipedCards = document.querySelectorAll(".opend");
  console.log(flipedCards.length);
      if (flipedCards.length === 2) {   
        if ((flipedCards[flipedCards.length-1].children[0].getAttribute("src")) != (flipedCards[flipedCards.length-2].children[0].getAttribute("src"))){
            console.log("not match");
            flipedCards.forEach((card) => {
              setTimeout(()=>{
                card.classList.toggle("clicked");
                card.classList.remove("opend")
              },800)
            
          });
        } else if((flipedCards[flipedCards.length-1].children[0].getAttribute("src")) === (flipedCards[flipedCards.length-2].children[0].getAttribute("src"))){
         
          flipedCards.forEach((card) => {
            // console.log(card);
          //  card.classList.remove("clicked");
          card.classList.remove("opend")
           card.style.pointerEvents = "none";
           flipedCards = 0;
           console.log(flipedCards)
            });
         
        }
        
      }

};

