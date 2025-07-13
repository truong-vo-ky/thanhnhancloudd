function showLoginBox() {
  closeAllAuthBoxes();
  document.querySelector('.login-box').classList.add('fade-in', 'show');
}
function showRegisterBox() {
  closeAllAuthBoxes();
  document.querySelector('.register-box').classList.add('fade-in', 'show');
}
function showPaymentBox() {
  closeAllAuthBoxes();
  document.querySelector('.payment-box').classList.add('fade-in', 'show');
}
function closeAllAuthBoxes() {
  document.querySelectorAll('.auth-box').forEach(box => {
    box.classList.remove('show');
  });
}
function handleLogin() {
  console.log("Đăng nhập được kích hoạt");
}
function handleRegister() {
  console.log("Đăng ký được kích hoạt");
}
