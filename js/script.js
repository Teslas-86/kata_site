var swiper = new Swiper(".swiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    freeMode: true,

    breakpoints: {

      420: {
        slidesPerView: 1.7,
        spaceBetween: 16
      },

      640: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      }
    }
  });
  
  const brandsBtn = document.querySelector('.brands__extended-button');
  const cards = document.querySelectorAll('.brands__item');

  brandsBtn.addEventListener('click', function() {
    if (brandsBtn.classList.contains("brands__extended-button--collapsed")) {
      for(let card of cards) {
        let cardStyle = getComputedStyle(card);
        if (cardStyle.display === 'none') {
          card.style.display = 'flex';
          card.classList.add('brands__item--extended');
        }
      }
      brandsBtn.textContent = 'Скрыть';
      brandsBtn.classList.remove("brands__extended-button--collapsed");
      brandsBtn.classList.add("brands__extended-button--extended");
    } else {
      for(let card of cards) {
        if (card.classList.contains('brands__item--extended')) {
          card.classList.remove("brands__item--extended")
          card.style.display = 'none';
        }
      }
      brandsBtn.textContent = 'Показать все';
      brandsBtn.classList.remove("brands__extended-button--extended");
      brandsBtn.classList.add("brands__extended-button--collapsed");
    }
  });