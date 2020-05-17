let playAudioBtn = document.getElementById("playAudioBtn");
let selectedSura = document.getElementById("suraMenu");
let suraContainer = document.getElementById("suraContainer");
let pauseAudioBtn = document.getElementById("pauseAudioBtn");

let isPlaying = false;
let isPlayingClickOnAya = false;

let searchState = async (input) => {
  let res = await fetch("./quran.json");
  let states = await res.json();

  let matches = states.filter((state) => {
    return state;
  });
  //   console.log(matches);
  showData(matches[0].sura, input);
};

function showData(data, input) {
  let suraContainer = document.getElementById("suraContainer");
  let caliOne = document.getElementById("caliOne");
  let quranName = document.getElementById("quranName");
  let sideBar = document.querySelector('.d-flex');
  caliOne.style.display = "none";
  quranName.style.display = "none";

  const mq = window.matchMedia("(max-width: 768px)");
  if (mq.matches) {
    $(sideBar).removeClass('toggled');
  }

  playAudioBtn.style.display = "block";
  pauseAudioBtn.style.display = "none";

  for (let v in data) {
    if (v === input) {
      suraContainer.innerHTML = "";
      let name = document.createElement("div");
      name.classList.add("suraname");
      name.innerHTML = `${data[v].attr.bn} | ${data[v].attr.ar} | ${data[v].attr.en} (${data[v].attr.index})`;

      suraContainer.appendChild(name);

      // let source = `<source src="${data[v].attr.audio}" type="audio/mpeg"> Your browser does not support the audio element.`;

      // let audio = document.createElement("audio");
      // audio.setAttribute("controls", "");
      // audio.innerHTML = source;
      // audio.id = "fullAudio";
      // suraContainer.appendChild(audio);
      // audio.pause();
      let ar = document.createElement("span");
      let bn = document.createElement("span");
      let en = document.createElement("span");

      for (let i = 0; i < data[v].attr.len; i++) {
        // console.log(ar);
        ar.classList.add("ar");
        bn.classList.add("bn");
        en.classList.add("en");

        // console.log(data[v].aya[i + 1].ar);

        ar.innerHTML += `<span class="aya" id="${data[v].attr.index}:${i + 1}">${data[v].aya[i+1].ar} <a href="#${data[v].attr.index}:${i + 1}">${data[v].aya[i + 1].no}</a><span class="trans card text-white bg-info"><span class="card-header">${data[v].attr.bn} | ${data[v].attr.index}:${i + 1}</span><span class="card-body"><p class="card-text">${data[v].aya[i + 1].bn}</p></span></span></span>`;
        /*transFixed class to show translation in fixed way*/

        bn.innerHTML += data[v].aya[i + 1].bn;
        en.innerHTML += data[v].aya[i + 1].en;

        suraContainer.appendChild(ar);
        suraContainer.appendChild(bn);
        suraContainer.appendChild(en);
      }
    }
  }

  showTranslation();
}
selectedSura.addEventListener("change", () => searchState(selectedSura.value));

function playAudio(aya = 1, doubleClicked = "") {

  pauseAudioBtn.style.display = "block";
  playAudioBtn.style.display = "none";

  let audio = document.createElement("audio");
  console.log(" I am playing", aya);

  let src = "";
  let totalAya = document.querySelectorAll("span.aya");
  // console.log(totalAya);
  let firstElm = $("span.aya").first();
  let suraNumber = $(firstElm).attr("id").split(":")[0];
  let ayatNum = aya ? aya : $(firstElm).attr("id").split(":")[1];
  /**
   * Ayat Selection start
   */
  $(firstElm).addClass("selected");
  $(firstElm).siblings().removeClass("selected");

  /*Show First Translation with Audio in Desktop*/
  $(firstElm).children("span").show();
  $(firstElm).siblings().children("span").hide();

  const mq = window.matchMedia("(max-width: 768px)");
  if (mq.matches) {
    $(firstElm).children("span").addClass("transFixed").css({
      transform: "translate(-0, -0) !important",
    });

    $(firstElm).siblings().children("span").removeClass("transFixed").hide();
    $(firstElm).children("span").removeClass("trans");
  }
  /**
   * Ayat Selection End
   */
  let modifiedSuraNumber = 1;

  if (suraNumber < 10) {
    modifiedSuraNumber = "00" + suraNumber;
  } else if (suraNumber > 10 && suraNumber < 100) {
    modifiedSuraNumber = "0" + suraNumber;
  } else {
    modifiedSuraNumber = suraNumber;
  }

  let modifiedAyatNum = 1;

  if (ayatNum <= 9) {
    modifiedAyatNum = "00" + ayatNum;
  } else if (ayatNum > 9 && ayatNum < 100) {
    modifiedAyatNum = "0" + ayatNum;
  } else {
    modifiedAyatNum = ayatNum;
  }
  console.log(modifiedAyatNum);
  src = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${modifiedSuraNumber}${modifiedAyatNum}.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;

  audio.innerHTML = src;

  togglePlay(audio);

  document.getElementById("pauseAudioBtn").addEventListener("click", function () {
    // audio.pause();
    playAudioBtn.style.display ="block";
    pauseAudioBtn.style.display ="none";
    togglePlay(audio);
  });
  /**
   * Play/Pause Start its working perfectly
   */
   totalAya[aya - 1].addEventListener("click", function () {
    if(audio.paused){
      
     togglePlay(audio);
      isPlayingClickOnAya = true;
    }else{
      togglePlay(audio);
      isPlayingClickOnAya = false;

    }
    playAudioBtn.innerHTML = "&#9658;";
  });

  /**
   * Play/Pause end
   */

  audio.addEventListener("ended", function () {
    if (ayatNum < totalAya.length) {
      playAudio(ayatNum + 1);
      // console.log("audio ended, i am calling in if conditon");
    }
    $(totalAya[aya]).addClass("selected");
    $(totalAya[aya]).siblings().removeClass("selected");

    /*Show Translation with Audio in Desktop*/

    $(totalAya[aya]).children("span").show().animate(
      {
        opacity: 1,
      },
      "slow"
    );
    $(totalAya[aya]).siblings().children("span").hide();

    /*Show Translation with Audio in Mobile*/
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      $(totalAya[aya]).children("span").addClass("transFixed").css({
        transform: "translate(-0, -0) !important",
      });

      $(totalAya[aya])
        .siblings()
        .children("span")
        .removeClass("transFixed")
        .hide();
      $(totalAya[aya]).children("span").removeClass("trans");
    }
  });
  console.log(" I am recurseive");
} //Audio Playing Function end

function showTranslation() {
  console.log("i am claing... showTranslation");
  let totalAya = document.querySelectorAll("#suraContainer span>span.aya");

  for (let i = 0; i < totalAya.length; i++) {
    //totalAya[i] is showing each aya

    totalAya[i].addEventListener("dblclick", function (e) {
      e.preventDefault();
      let audio = document.createElement("audio");
      let suraNumber = $(this).attr("id").split(":")[0];
      let ayatNum = $(this).attr("id").split(":")[1];

      let modifiedSuraNumber = 1;

      if (suraNumber < 10) {
        modifiedSuraNumber = "00" + suraNumber;
      } else if (suraNumber > 10 && suraNumber < 100) {
        modifiedSuraNumber = "0" + suraNumber;
      } else {
        modifiedSuraNumber = suraNumber;
      }

      let modifiedAyatNum = 1;

      if (ayatNum <= 9) {
        modifiedAyatNum = "00" + ayatNum;
      } else if (ayatNum > 9 && ayatNum < 100) {
        modifiedAyatNum = "0" + ayatNum;
      } else {
        modifiedAyatNum = ayatNum;
      }

      src = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${modifiedSuraNumber}${modifiedAyatNum}.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;

      console.log(this + ayatNum + "I am after doucble click");

      audio.innerHTML = src;
      $(totalAya[i]).addClass("selected");
      $(totalAya[i]).siblings().removeClass("selected");
      togglePlay(audio);

     
    });

    /**
     *  Show Translation
     *  Mobile Css Fixning display block
     **/

    totalAya[i].addEventListener("click", function (e) {
      e.preventDefault();
      $(totalAya[i]).addClass("selected");
      $(totalAya[i]).siblings().removeClass("selected");
    });

    totalAya[i].addEventListener("mouseover", function (e) {
      e.preventDefault();
      $(this).addClass("hover");
      $(this).siblings().removeClass("hover");

      let hoverAya = document.querySelector(
        "#suraContainer span>span.aya.hover"
      );
      hoverAya.addEventListener("mousemove", function (es) {
        $(this).children("span.trans").show().animate(
          {
            opacity: 1,
          },
          "slow"
        );
        $(this).children("span.trans").css({
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -100%)"
        });

        const mq = window.matchMedia("(max-width: 768px)");
        if (mq.matches) {
          $(this).children("span").addClass("transFixed").css({
            transform: "translate(-0, -0) !important",
          });

          $(this).siblings().children("span").removeClass("transFixed").hide();
          $(this).children("span").removeClass("trans");
        }
      });

      $(this).siblings().children("span.trans").hide();
    });

    totalAya[i].addEventListener("mouseleave", function (e) {
      $(this).find(".trans").hide();
    });
  } //for Loop End
}

function togglePlay(audio) {
  if (isPlayingClickOnAya) {
    audio.pause();
    audio.currentTime = 0;
    playAudioBtn.innerHTML = "&#9658;";

  } else {
    audio.play();
    pauseAudioBtn.innerHTML = "||";
    audio.currentTime = 0;
  }

  audio.onplaying = function () {
    isPlayingClickOnAya = true;
  };
  audio.onpause = function () {
    isPlayingClickOnAya = false;
  };

  // audio.onended = function () { };
}

function nightModeOnOff() {}

// body {
//   background: #2d5075;
// }

// .suraContainer .ar span.aya a {
//   color: #31d0a4;
// }
// .suraContainer .ar span.aya {
//   padding: 10px;
//   position: relative;
//   border-bottom: 1px solid #f9ef86;
//   color: #e3e3e3;
// }
// *, ::after, ::before {
//   box-sizing: border-box;
// }
// .suraContainer .ar {
//   text-align: justify;
//   font-family: "KFGQPC Uthman Taha Naskh", KFGQPC_Naskh;
//   font-size: 3.15em;
//   font-weight: normal;
//   background: #2d5075;
//   padding: 30px 55px;
// }

// function selectedAyaForAudio(suraNumber, ayatNum) {

//     setTimeout(function(){
//         let totalAyat = document.querySelectorAll("#suraContainer span>span.aya");
//         // let audioTime = 0;
//         // for (let ayatNum = 0; ayatNum < totalAyat.length; ayatNum++) {

//             src = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${
//                 suraNumber < 100 ? "00" + suraNumber : suraNumber}${ ayatNum<100 ? "00"+(ayatNum):ayatNum }.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;

//            srcArr.push(src);

//             $(totalAyat).first().addClass("selected");
//             $(totalAyat).siblings().removeClass("selected");

//             audio.innerHTML = src;
//             audio.play();
//             console.log(src);
//             audioTime = audio.duration;

//             console.log( audioTime);
//             $(totalAyat[ayatNum]).removeClass("selected");
//             $(totalAyat[ayatNum]).next().addClass("selected");
//         // }

//     }, document.getElementsByName('audio').duration * 1000);

// audio.addEventListener('ended', function(e){
//     $(totalAyat[ayatNum]).next().addClass("selected");
//     $(totalAyat[ayatNum]).next().siblings().removeClass("selected");

//         console.log("i am setTimeout calling before playing ");
//         let next = $(totalAyat[ayatNum]).next()[0].getAttribute('id').split(":");

//           console.log(next, "I am next aya");
//         // selectedAyaForAudio()
//         selectedAyaForAudio(next[0], next[i]);
//         playAudio();

//         console.log("i am setTimeout calling after playing ");

// });
// let ayatNumber = "";
// if (totalAyat.length < 100) {
//     ayatNumber += "00" + totalAyat.length;
// } else {
//     ayatNumber += totalAyat.length;
// }

// $(totalAyat).first().addClass("selected");

// let ayatAudioSouce = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${
//                         id < 100 ? "00" + id : id}${i<100 ? "00"+i:i}.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;

// $(totalAyat).siblings().removeClass("selected");

// $(totalAyat).first().addClass("selected");
// $(totalAyat).first().removeClass("selected");
// audio.pause();

// playAudio(audio, i, id, totalAyat[i]);

// let ayatAudioSouce = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${
// id < 100 ? "00" + id : id}${i<100 ? "00"+i:i}.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;

// console.log(ayatAudioSouce);
// audio.innerHTML = ayatAudioSouce;

// console.log(ayatAudioSouce);
// console.log(self);

// console.log(i);
// totalAyat[i].addEventListener("click", function (e) {
// $(this).addClass("selected");
// $(this).siblings().removeClass("selected");

//     playAudio(audio, i, id, this);
//     $( this).removeClass("selected");
//     $( this).next().addClass("selected");
//     console.log(i + "I am i for loop Click Event");

//  });

//  audio.addEventListener('ended', function(){
//     $( totalAyat[i]).removeClass("selected");
//     $( totalAyat[i]).next().addClass("selected");
//     // console.log('Audio Ended on', this);
//     // togglePlay(audio);
// });

//     // alert('Audio Ended in for loop');

//     selectedAyaForAudio(id);
// //    if(i<totalAyat.length){
// //         playAudio(audio, id, totalAyat[i]);

// //     }

//     console.log(i + "I am i for loop audio ended Event");
//     playAudio(audio, id, totalAyat[i]);
// });

// }
// togglePlay(audio,id);

//    console.log(totalAyat.length);
//    togglePlay(audio);
// }

// function playNextAyaAudio(){

// }
// function playAudio(audio, i, id, self){
//         // console.log(self);
//         // console.log("I am play Audio Function");
//         // console.log(id, self, self.children[0].hash.split(":")[1]);
//         $(self).addClass("selected");
//         $(self).siblings().removeClass("selected");

//     let ayatAudioSouce = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${
//         id < 100 ? "00" + id : id}${i<100 ? "00"+i:i}.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;

//         // console.log(ayatAudioSouce);
//         audio.innerHTML = ayatAudioSouce;

//         console.log(ayatAudioSouce);
//         console.log(self);
//         togglePlay(audio,id);

// }
// .addEventListener("click", () => searchState(selecTedSura.value));

// function playAudioOnClickOnAya(totalAyat, i, id) {
//     let audio = document.createElement("audio");

//     totalAyat[i].addEventListener("click", function (e) {
//         $(this).addClass("selected");
//         $(this).siblings().removeClass("selected");

//         let ayatAudioSouce = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${
//             id < 100 ? "00" + id : id
//             }${
//             this.children[0].hash.split(":")[1] < 100
//                 ? "00" + this.children[0].hash.split(":")[1]
//                 : this.children[0].hash.split(":")[1]
//             }.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;
//         // console.log(ayatAudioSouce);
//         audio.innerHTML = ayatAudioSouce;

//         togglePlay(audio, totalAyat, i, id);

//     });

// }

// function PlayNextAyas(id){

//     $(this).addClass("selected");
//     $(this).siblings().removeClass("selected");

//     let ayatAudioSouce = `<source src="https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/${
//         id < 100 ? "00" + id : id
//         }${
//         this.children[0].hash.split(":")[1] < 100
//             ? "00" + this.children[0].hash.split(":")[1]
//             : this.children[0].hash.split(":")[1]
//         }.mp3" type="audio/mpeg"> Your browser does not support the audio element.`;
//     // console.log(ayatAudioSouce);
//     audio.innerHTML = ayatAudioSouce;

//     togglePlay(audio, totalAyat, i, id);

// }
