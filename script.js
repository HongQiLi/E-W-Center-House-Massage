(function () {
  emailjs.init("pgKx0WvrBQwzrCL59")
})();

document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    date: document.querySelector("[name='date']").value,
    time: document.querySelector("[name='time']").value,
    duration: document.querySelector("[name='duration']").value,
    type: document.querySelector("[name='type']").value,
    pressure: document.querySelector("[name='pressure']").value,
    notes: document.querySelector("[name='notes']").value
  };

  emailjs.send("e&w.centerhouse", "template_p19sg0i", params)
    .then(() => {
      alert("✅ 预约成功，确认邮件已发送！");
    }, (error) => {
      alert("❌ 邮件发送失败: " + error.text);
    });
});
