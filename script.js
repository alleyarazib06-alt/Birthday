const message = `HAPPY BIRTHDAY!\nI just want to take a moment to appreciate you for everything you’ve done for me. From our matrik days till now, you’ve never once left my side. Whether I’m sad, happy, stressed, or completely lost, you’re always there — even when you’re busy. And honestly, that means the world to me. Not everyone gets a friend who stays through every season of life, but I’m lucky because I have you.\n\nYou’ve been my comfort, my support system, my safe place, and my person to run to when everything feels too much. Thank you for always listening, always checking on me, and always showing up without me asking. You’ve been such a constant in my life, and I appreciate you more than you know.\n\nI hope this new year of your life brings you endless happiness, good health, success in every direction, and so much love. You deserve all the beautiful things in this world. And I truly pray that our friendship lasts sampai kita tua — sampai rambut kita dah putih, sampai tangan kita dah menggigil, sampai kita tak ingat semua benda… tapi kita masih ingat each other.\n\nAnd I want you to know this: I’ll always be here for you. Just like how you’ve always been there for me. No matter what happens, no matter how busy life gets, no matter where we end up later, if you ever need me — even at your lowest — I’ll show up. I’ll always choose to be there for you the way you’ve been there for me.\n\nSo today, celebrate yourself. Happy Birthday again, my precious friend. Let’s stay in each other’s lives until forever.. LOBEUSOMUCHHHHH.\n\n\nlalaygbaikdancantik `;

function showLetter() {
  const intro = document.getElementById("introText");
  const button = document.querySelector(".btn");
  const popup = document.getElementById("popup");
  const typedText = document.getElementById("typedText");
  const music = document.getElementById("bgMusic");

  music.play();

  // Fade out intro
  intro.style.opacity = 0;

  // Hide button
  button.style.display = "none";

  // Delay for fade out
  setTimeout(() => {
    popup.classList.add("show"); // show letter + image

    // Typewriter animation
    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 500);
}
