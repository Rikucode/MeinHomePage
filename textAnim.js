let progress = 0;

window.addEventListener("load", ()=>{
  let interval = setInterval(()=>{
    document.getElementById("text1").style.opacity = progress;
    progress += 0.01;
  }, 10);
    //bg.opacity from 0 to 100
  setTimeout(()=>{
    progress = 1;
    clearInterval(interval);
    interval = setInterval(()=>{
      document.getElementById("text1").style.opacity = progress;
      progress -= 0.01;
  }, 10);
}, 1000);
  setTimeout(()=>{
    progress = 0;
    document.getElementById("text1").remove();
    clearInterval (interval);
    interval = setInterval(()=>{
      document.getElementById("text2").style.opacity = progress;
      progress += 0.01;
    }, 10);
  }, 2500);
  setTimeout(()=>{
    progress = 1;
    clearInterval (interval);
    interval = setInterval(()=>{
      document.getElementById("text2").style.opacity = progress;
      progress -= 0.01;
    }, 10);
  }, 4000);
  setTimeout(()=>{
    progress = 0;
    document.getElementById("text2").remove();
    clearInterval (interval);
    interval = setInterval(()=>{
      document.getElementById("text3").style.opacity = progress;
      progress += 0.01;
    }, 10);
  }, 5500);
  setTimeout(()=>{
    progress = 1;
    clearInterval(interval);
    interval = setInterval(()=>{
      document.getElementById("text3").style.opacity = progress;
      progress -= 0.01;
    },10);
  },7000);
  setTimeout(()=>{
    progress = 0;
    document.getElementById("text3").remove();
    clearInterval(interval);
    // progress = 1;
    // // interval = setInterval(()=>{
    // //   document.getElementById("column1").style.marginTop = progress * 100 +"%";
    // //   progress -= 0.01;
    // //   console.log(progress);
    // },20);
  },8500);
  // setTimeout(()=>{
  //   progress = 0;
  //   clearInterval(interval);
  //
  // }, 11560);
});
