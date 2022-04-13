document.querySelector("#FEFU").addEventListener("click", ()=>{
  document.querySelector("#firstLine").innerHTML = "Да, ДВФУ - это лучший ВУЗ";
  setTimeout(()=>{
    document.querySelector("#firstLine").textContent = "Студент ДВФУ и просто крутой чел.";
  },2000);
});
