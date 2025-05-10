// 初始化 EmailJS（请确保已在 HTML 中引入 email.min.js）
(function () {
  emailjs.init("pgKx0WvrBQwzrCL59"); // Public Key
})();

// 监听表单提交事件
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault(); // 阻止默认提交（避免刷新页面）

  // 获取提交按钮，提交时禁用
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // 收集表单参数，与 EmailJS 模板参数名称一致
  const params = {
    user_email: document.querySelector("[name='user_email']").value,
    date: document.querySelector("[name='date']").value,
    time: document.querySelector("[name='time']").value,
    duration: document.querySelector("[name='duration']").value,
    type: document.querySelector("[name='type']").value,
    pressure: document.querySelector("[name='pressure']").value,
    notes: document.querySelector("[name='notes']").value,
  };

  // 发送邮件（服务 ID、模板 ID、参数对象）
  emailjs.send("e&w.centerhouse", "template_p19sg0i", params)
    .then(() => {
      alert("✅ 预约成功，确认邮件已发送！");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Booking";
      document.getElementById("booking-form").reset(); // 清空表单
    })
    .catch((error) => {
      alert("❌ 邮件发送失败: " + error.text);
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Booking";
    });
});
