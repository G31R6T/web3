// Function to check if the password and confirm password match
function checkPasswordMatch() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();
    if (password !== confirmPassword) {
      $("#confirm-password").css("border-color", "red");
    } else {
      $("#confirm-password").css("border-color", "");
    }
  }
  
  $(document).ready(function() {
    // Check if the password and confirm password match when the user inputs
    $("#password, #confirm-password").on("input", checkPasswordMatch);
  
    // Validate the settings form when submitted
    $("#settings-form").on("submit", function(event) {
      event.preventDefault();
  
      // Check if the username is empty
      if ($("#username").val().trim() === "") {
        alert("用户名不能为空");
        return false;
      }
  
      // Check if the email is empty
      if ($("#email").val().trim() === "") {
        alert("邮箱不能为空");
        return false;
      }
  
      // Check if the password is empty
      const password = $("#password").val();
      if (password.trim() === "") {
        alert("密码不能为空");
        return false;
      }
  
      // Check if the confirm password is empty
      const confirmPassword = $("#confirm-password").val();
      if (confirmPassword.trim() === "") {
        alert("确认密码不能为空");
        return false;
      }
  
      // Check if the password matches
      if (password !== confirmPassword) {
        alert("密码不匹配，请重新输入");
        return false;
      }
  
      // Add your backend code here to handle the submission of the settings form
      // For example: submit the form data using AJAX and handle the response
      alert("设置已保存");
    });
  });
  