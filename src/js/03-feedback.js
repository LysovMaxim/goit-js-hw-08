const formEl = document.querySelector(".feedback-form");
console.dir(formEl);



formEl.addEventListener("input", (event) => {
      const {
    elements: { email, message }
  } = event.currentTarget;
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }))

    let messages = localStorage.getItem("feedback-form-state")
    console.log(messages)

    let parseMessage = JSON.parse(messages);
    console.log(parseMessage)

    if (parseMessage) {
        formEl.email.value = parseMessage.email
    }
});


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
              const {
    elements: { email, message }
          } = event.currentTarget;
    console.log({ email: email.value, message: message.value })
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");


})

