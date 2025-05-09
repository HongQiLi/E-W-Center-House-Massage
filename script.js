(function() {
  emailjs.init("pgKx0WvrBQwzrCL59"); // Public Key
})();

document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("e&w.centerhouse", "template_p19gsoi", this)
    .then(() => {
      alert("✅ 预约成功，确认邮件已发送！");
    }, (error) => {
      alert("❌ 邮件发送失败：" + error.text);
    });
});