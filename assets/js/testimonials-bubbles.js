document.addEventListener('DOMContentLoaded', function () {
const testimonials = [
    {
        text: `"Positivus helped us revamp our digital marketing and we saw a 40% increase in conversions within months. Their team is knowledgeable and proactive."`,
        author: "John Smith",
        position: "Marketing Director at XYZ Corp"
    },
    {
        text: `"Our social media engagement doubled after working with Positivus. Their creative approach and attention to detail made a real difference."`,
        author: "Jane Doe",
        position: "CEO at ABC Ltd"
    },
    {
        text: `"The SEO improvements from Positivus put us ahead of competitors. We appreciate their transparency and regular updates."`,
        author: "Emily Johnson",
        position: "CMO at Example Inc"
    },
    {
        text: `"Positivus delivered a beautiful new website and improved our brand image. The project was on time and exceeded our expectations."`,
        author: "Michael Lee",
        position: "Head of Communications at Delta Group"
    },
    {
        text: `"We rely on Positivus for ongoing digital strategy. Their insights and expertise have been invaluable to our growth."`,
        author: "Sarah Williams",
        position: "VP of Sales at FutureTech"
    }
];

  let currentIndex = 0;
  const leftSpeechBubbleText = document.getElementById('editable-speech-text-left')
  const leftSpeechBubbleAuthor = document.getElementById('editable-speech-author-left')
  const leftSpeechBubblePosition = document.getElementById('editable-speech-position-left')

  const speechBubbleText = document.getElementById('editable-speech-text');
  const speechBubbleAuthor = document.getElementById('editable-speech-author');
  const speechBubblePosition = document.getElementById('editable-speech-position');

  const rightSpeechBubbleText = document.getElementById('editable-speech-text-right')
  const rightSpeechBubbleAuthor = document.getElementById('editable-speech-author-right')
  const rightSpeechBubblePosition = document.getElementById('editable-speech-position-right')
  const stars = document.querySelectorAll('.testimonials-star');
  const leftArrow = document.querySelector('.testimonials-left-arrow');
  const rightArrow = document.querySelector('.testimonials-right-arrow');

  function updateTestimonial() {
    if (currentIndex > 0){
        leftSpeechBubbleText.textContent = testimonials[currentIndex - 1].text;
        leftSpeechBubbleAuthor.textContent = testimonials[currentIndex - 1].author;
        leftSpeechBubblePosition.textContent = testimonials[currentIndex - 1].position;
    }else{
        leftSpeechBubbleText.textContent = testimonials[testimonials.length - 1].text;
        leftSpeechBubbleAuthor.textContent = testimonials[testimonials.length - 1].author;
        leftSpeechBubblePosition.textContent = testimonials[testimonials.length - 1].position;
    }

    speechBubbleText.textContent = testimonials[currentIndex].text;
    speechBubbleAuthor.textContent = testimonials[currentIndex].author;
    speechBubblePosition.textContent = testimonials[currentIndex].position;

    if (currentIndex < testimonials.length - 1) {
        rightSpeechBubbleText.textContent = testimonials[currentIndex + 1].text;
        rightSpeechBubbleAuthor.textContent = testimonials[currentIndex + 1].author;
        rightSpeechBubblePosition.textContent = testimonials[currentIndex + 1].position;
    } else {
        rightSpeechBubbleText.textContent = testimonials[0].text;
        rightSpeechBubbleAuthor.textContent = testimonials[0].author;
        rightSpeechBubblePosition.textContent = testimonials[0].position;
    }

    stars.forEach((star, i) => {
      if (i === currentIndex) {
        star.classList.add('testimonials-star-active');
        star.src = 'images/star-green.svg';
      } else {
        star.classList.remove('testimonials-star-active');
        star.src = 'images/star.svg';
      }
    });

    leftArrow.style.opacity = currentIndex === 0 ? '0.3' : '1';
    rightArrow.style.opacity = currentIndex === testimonials.length - 1 ? '0.3' : '1';
  }

  leftArrow.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateTestimonial();
    }
  });

  rightArrow.addEventListener('click', function () {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
      updateTestimonial();
    }
  });

  updateTestimonial();
});