AOS.init();

const freqtext = document.querySelectorAll(".freqleft");

freqtext.forEach((freqleft) => {
  const question = freqleft.querySelector(".question");

  question.addEventListener("click", () => {
    const isActive = freqleft
      .querySelector(".answer")
      .classList.contains("active-answer");

    freqtext.forEach((otherFreqleft) => {
      otherFreqleft.querySelector(".answer").classList.remove("active-answer");
    });

    if (!isActive)
      freqleft.querySelector(".answer").classList.add("active-answer");
    else freqleft.querySelector(".answer").classList.add("active-answer");
  });
});
