(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // <-- 替换成你自己的 EmailJS Public Key
})();

document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function () {
      alert("预约成功发送！");
    }, function (error) {
      alert("发送失败：" + JSON.stringify(error));
    });
});
