const images = [
  "https://64.media.tumblr.com/af71369d88828c7ee9e79bb5a59cbac3/a37532c505d99d9e-d5/s1280x1920/262e875cb030ce25badfc77416e1ef0ee622a2ff.pnj",
  "https://64.media.tumblr.com/27d04ede3595af0529f5537bf413bdf6/a37532c505d99d9e-83/s1280x1920/e2db9ec5d0ddfe0f509e4757ed3a95a60c86e5af.pnj",
  "https://64.media.tumblr.com/660ba3286009fc7f2d35189eac6de691/a37532c505d99d9e-c6/s1280x1920/36ba583237f74c0bda6b378ece521ade6af5ecb4.pnj",
  "https://64.media.tumblr.com/c7653555bbcba5935c20821e0ffdeb78/a37532c505d99d9e-cd/s1280x1920/8415f46861698f9c37297504d4c7e0ac791710a5.pnj",
  "https://64.media.tumblr.com/649e2016422595ab99471ada45bd1390/a37532c505d99d9e-09/s1280x1920/988b176e30d7de746c3f2e79595db61674e77fa4.pnj",
  "https://64.media.tumblr.com/10f09a97473f2414423dd16b85a09cd4/a37532c505d99d9e-8d/s1280x1920/a27a9bac46babc7124028f9afa1acfbac8f874f1.pnj",
  "https://64.media.tumblr.com/f163632e94ae1f7d6b69adca116cb1eb/a37532c505d99d9e-4c/s1280x1920/87db2b55d61637912a9ceb65d10982818a00a1dd.pnj",
  "https://64.media.tumblr.com/14c33bf86707776524852beeb9c80f02/a37532c505d99d9e-1d/s1280x1920/bef70ca2008fd4abf80d7a5c6ff6a46d174b730b.pnj"
  ];

  const toggleBtn = document.getElementById('toggle-btn');
  const imageContainer = document.getElementById('image-container');
  const randomImage = document.getElementById('random-image');

  // Function to generate a random image
  function generateRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      randomImage.src = images[randomIndex];
  }

  // Toggle the image visibility when the button is clicked
  toggleBtn.addEventListener('click', () => {
      if (imageContainer.style.display === 'none') {
          generateRandomImage();
          imageContainer.style.display = 'block';
          toggleBtn.textContent = 'Hide Image';
      } else {
          imageContainer.style.display = 'none';
          toggleBtn.textContent = 'Show Random Image';
      }
  });