export default function getValidInput(res) {
    var message;
    message = document.getElementById("message");
    message.innerHTML = "";
    try {
    if (!res) throw "invalid Input";
    else message.innerHTML = ""
  } catch (err) {
    message.innerHTML = err;
  }
}
