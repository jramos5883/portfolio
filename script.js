// Comment
function sendMail(params) {
  const tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_06nu99m", "template_79kmp2a", tempParams)
    .then(function (res) {
      console.log("Success", res.status);
    });
}
