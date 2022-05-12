let btns = document.querySelectorAll(".artdeco-button__text");
btns.forEach((element) => {
  if (element.innerText === "Connect") {
    setInterval(() => {
      element.click();
    }, 2000);
  }
});
