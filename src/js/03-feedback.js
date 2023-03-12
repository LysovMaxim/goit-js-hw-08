const formEl = document.querySelector(".feedback-form");
console.log(formEl);



formEl.addEventListener("input", (event) => {
      const {
    elements: { email, message }
  } = event.currentTarget;
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }))

    const messages = localStorage.getItem("feedback-form-state")
    console.log(messages)

    const parseMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(parseMessage)
   
});
