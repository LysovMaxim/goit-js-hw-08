const e=document.querySelector(".feedback-form");console.dir(e),e.addEventListener("input",(t=>{const{elements:{email:a,message:l}}=t.currentTarget;localStorage.setItem("feedback-form-state",JSON.stringify({email:a.value,message:l.value}));let o=localStorage.getItem("feedback-form-state");console.log(o);let s=JSON.parse(o);console.log(s),s&&(e.email.value=s.email)})),e.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:a}}=e.currentTarget;console.log({email:t.value,message:a.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.751f4bef.js.map
