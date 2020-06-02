let BASE_URL = `https://everyayah.com/data/Alafasy_128kbps/`;
// let BASE_URL = `https://everyayah.com/data/Abdurrahmaan_As-Sudais_64kbps/`;
// let BASE_URL = `https://everyayah.com/data/Abdullah_Basfar_64kbps/`;
// let BASE_URL = `https://everyayah.com/data/Abu_Bakr_Ash-Shaatree_64kbps/`;
// let BASE_URL = `https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/`;


let playAudioBtn = document.getElementById("playAudioBtn");
let selectedSura = document.getElementById("suraMenu");
let suraContainer = document.getElementById("suraContainer");
let quranContainer = document.querySelector(".quranContainer");
let dFlexToggle = document.getElementById("menu-toggle");
let showSideBar = document.getElementById("showSideBar");
let pauseAudioBtn = document.getElementById("pauseAudioBtn");
// let translationContainer = document.getElementById(" translationContainer");

let langSelection = document.getElementById("langSelection");

let customtransBnEnCheckBox = document.getElementById("customtransBnEnCheckBox");

let translationSection = document.getElementById("translationSection");
let showOnlyTranslationEL = document.getElementById("showOnlyTranslation");

let autoScrollonOff = document.getElementById("autoScrollonOff");
let translationWithVideoOnOff = document.getElementById(
  "translationWithVideoOnOff"
);
let translationFixedOnOff = document.getElementById("translationFixedOnOff");
let translationOffMouseOver = document.getElementById(
  "translationOffMouseOver"
);

let caliOne = document.getElementById("caliOne");
let quranName = document.getElementById("quranName");
let sideBar = document.querySelector(".d-flex");

const mq = window.matchMedia("(max-width: 768px)");
const mq460 = window.matchMedia("(max-width: 460px)");

let allflase = false;
let isPlaying = false;
let isPlayingClickOnAya = false;
let autoScroll = false;
let translation = false;
let translationFixed = false;
let translationMouseOver = false;

let msg = document.createElement('span');

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

  $("#customtransBnEn").hide();
  msg.innerHTML= '';
  $(translationSection).show();
  showOnlyTranslationEL.removeAttribute('checked');
  

  if (isPlayingClickOnAya) {
    alert("Please Pause Audio First to Change Sura");
    return false;
  }
  let suraContainer = document.getElementById("suraContainer");
  if (input == "") {
    quranContainer.style.backgroundImage = 'url("../assets/cover_page.png")';
    suraContainer.innerHTML = "";
    caliOne.style.display = "none";
    quranName.style.display = "flex";

    playAudioBtn.style.display = "none";
    pauseAudioBtn.style.display = "none";

    if (mq.matches) {
      console.log('media query matched', mq);
      $(sideBar).addClass("toggled");
    }
  } else {
    allflase = true;
    quranContainer.style.backgroundImage = "url('')";

    caliOne.style.display = "none";
    quranName.style.display = "none";

    // const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      $(sideBar).removeClass("toggled");
    }

    playAudioBtn.style.display = "block";
    pauseAudioBtn.style.display = "none";

    for (let v in data) {
      if (v === input) {
        suraContainer.innerHTML = "";
        let suraname = document.createElement("div");
        suraname.classList.add("suraname");
        suraname.innerHTML = `${data[v].attr.bn} | ${data[v].attr.ar} | ${data[v].attr.en} (${data[v].attr.index})`;

        suraContainer.appendChild(suraname);

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

          ar.innerHTML += `<span class="aya" id="${data[v].attr.index}:${
            i + 1
            }">${data[v].aya[i + 1].ar} <a href="#${data[v].attr.index}:${
            i + 1
            }">${
            data[v].aya[i + 1].no
            }</a><span class="trans card text-white bg-info"><span class="card-header">${
            data[v].attr.bn
            } | ${data[v].attr.index}:${
            i + 1
            }</span><span class="card-body"><p class="card-text">${
            data[v].aya[i + 1].bn
            }</p></span></span></span>`;
          /*transFixed class to show translation in fixed way*/

          
              bn.innerHTML += `<span id="${data[v].attr.index}:${i + 1}" class="bn_${(i + 1)} langTrans"> <a href='#${(i + 1)}'>(${(i + 1)})</a> ${data[v].aya[i + 1].bn }</span >`;           
            
           
              en.innerHTML += `<span id="${data[v].attr.index}:${i + 1}" class="en_${(i + 1)} langTrans"> <a href='#${(i + 1)}'>(${(i + 1)})</a> ${data[v].aya[i + 1].en }</span >`;  
         
         

          suraContainer.appendChild(ar);
          suraContainer.appendChild(bn);
          suraContainer.appendChild(en);

          showOnlyTranslationHideArabic(data[v], i);
        }
      }
    }

    showTranslation();

  }

  /**
   * EVENT will EXECUTE AFTER SELECT THE SURA
   */

  /**
   * Auto Scrolling On Off (autoScrollonOff) (autoScroll=false)
   */

  autoScrollonOff.addEventListener("change", function (e) {
    this.setAttribute("checked", "checked");
    if (this.checked) {
      this.setAttribute("checked", "checked");
      console.log(this.getAttribute("checked"), "true Block");
      autoScroll = true;
    } else {
      autoScroll = false;
      this.removeAttribute("checked");
      console.log(this.getAttribute("checked"), "false Block");
    }
  });

  /**
   * Translation On Off (translationWithVideoOnOff) (translation=false)
   */
  translationWithVideoOnOff.addEventListener("change", function (e) {
    this.setAttribute("checked", "checked");
    if (this.checked) {
      

      this.setAttribute("checked", "checked");
      console.log(this.getAttribute("checked"), "true Block");
      translation = true;
    } else {

      
      translation = false;
      this.removeAttribute("checked");
      console.log(this.getAttribute("checked"), "false Block");
    }
  });

  /**
   * translationFixed  on off (EL: TranslationFixedOnOff) (translationFixed=false) : fn: showTranslationFixed
   */

  // translationFixedOnOff.addEventListener('change', function (e) {
  //     this.setAttribute('checked', 'checked');
  //   if(this.checked){
  //     this.setAttribute('checked', 'checked');
  //     console.log(this.getAttribute('checked'), "true Block");

  //     translationFixed=true;
  //     showTranslationFixed();
  //   }else{
  //     translationFixed=false;
  //     this.removeAttribute('checked');
  //     console.log(this.getAttribute('checked'), "false Block");
  //     showTranslationFixed();
  //   }
  // });

  /**
   * translationOffMouseOver  on off (EL: translationOffMouseOver) (translationMouseOver=false) fn: showHideTranslationMouseOver
   */
  translationEventListner(
    translationOffMouseOver,
    translationMouseOver,
    showHideTranslationMouseOver
  );
  // translationEventListner(translationWithVideoOnOff, translationFixed, showTranslationFixed);
  translationEventListner(
    translationFixedOnOff,
    translationFixed,
    showTranslationFixed
  );
} // Play Audio Function

selectedSura.addEventListener("change", () => searchState(selectedSura.value));

/**
 * TranslationFixedOnOff function
 * Show Fixed
 */


function showTranslationFixed(checkdOrNot) {
  
  if (checkdOrNot) {
    
    translationOffMouseOver.removeAttribute('checked', "");
    translationWithVideoOnOff.removeAttribute('checked', "");
    $(".aya").children("span.card").addClass("transFixed");
    $(".aya").children("span.card").removeClass("trans");
    $(".aya").css({
      display: 'block',
      position: 'relative'
    });

    $(translationOffMouseOver).parent().hide();
    $(translationWithVideoOnOff).parent().hide();
    // console.log('I am fixed on', showOnlyTranslationEL.setAttribute('checked',''));
    
    //hiding translation only wrapper showOnlyTranslationHideArabic()
    // $(langSelection).hide();
    showOnlyTranslationEL.removeAttribute('checked', '');
    // customtransBnEnCheckBox.removeAttribute('checked');
    // $(customtransBnEnCheckBox).hide();
    showTranslationOnly = false;
    $('.ar').show();
    $('.aya').show();
    $('.transFrame').hide();

    translationOffMouseOver.removeAttribute('checked', '');

  } else {
   
    //showing translation only wrapper showOnlyTranslationHideArabic()
    $(langSelection).show();
    // showOnlyTranslationEL.removeAttribute('checked', '');


    translationMouseOver = translationOffMouseOver.getAttribute('checked') == 'checked' ? true : false;
    if (translationMouseOver == true) {


      $(".aya").children("span.card").addClass("trans");
      $(".aya").children("span.card").removeClass("transFixed");
      // translationOffMouseOver.add('checked');


    } else {

      $(".aya").children("span.card").removeClass("transFixed");
      $(".aya").children("span.card").addClass("overTransHide");
      translationOffMouseOver.removeAttribute('checked');
    }

    $(".aya").css({
      display: 'inline',
      position: 'relative'
    });

    //show Hover checkbox
    $(translationOffMouseOver).parent().show();
    $(translationWithVideoOnOff).parent().show();

    // translationOffMouseOver.setAttribute('checked', "checked");

    translationFixed = false;
  }
}


/**
 * showHideTranslationMouseOver function
 * Show/Hide on Hover
 */
function showHideTranslationMouseOver(checkdOrNot) {
  if (checkdOrNot || translationFixed) {

     
    $("span.card").addClass("trans");
    $("span.card").removeClass('transAyaByAya');
    // $("span.card").removeClass('transFixed');


  } else {
     

    translationFixed = false;
    $("span.card").removeClass('trans');
    $("span.card").addClass('overTransHide');
    $('span.trans').hide();
  }
}

/**
 * Translation Event Listner
 */
function translationEventListner(element, checkdOrNot, cbfn) {
  element.addEventListener("change", function (e) {
    console.log(element);
    console.log("i am here 1");
    element.setAttribute("checked", "checked");
    if (element.checked) {
      

      element.setAttribute("checked", "checked");
      console.log(element.getAttribute("checked"), "true Block");

      checkdOrNot = true;

      cbfn(checkdOrNot);
      console.log(element);
    } else {
       
      checkdOrNot = false;
      element.removeAttribute("checked");
      console.log(
        element.getAttribute("checked"),
        "false Block- translationMouseOver",
        translationMouseOver
      );
      console.log("i am here 3 mouseover");
      cbfn(checkdOrNot);
      console.log(element, "Hello flase");
    }
  });
 
}

/**
 * PlayAudio Function startn
 */
// let msg = document.createElement('span');
//     msg.innerHTML = "Click On Current Running Aya To Pause Audio";
//     playPauseHolder.appendChild(msg);
playAudioBtn.addEventListener('click', function(){
  console.log(' i m clicked');

if(msg.innerHTML == ''){
    msg.innerHTML = "To Play/Pause Recitation Click On Running/Current Aya";
    msg.classList.add('playPauseMsg');
    playPauseHolder.appendChild(msg);
  }

});

function playAudio(aya = 1, doubleClicked = "") {
  pauseAudioBtn.style.display = "none";
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

  showTranslationWithVideo(firstElm, "", totalAya.length, ayatNum);

  /**
   * Check weather Translation is on or not and show translatin for first element (Mobile included)
   */
  // if(translation){
  // /*Show First Translation with Audio in Desktop*/
  // $(firstElm).children("span").show();
  // $(firstElm).siblings().children("span").hide();

  // // const mq = window.matchMedia("(max-width: 768px)");
  // if (mq.matches) {
  //   $(firstElm).children("span").addClass("transFixed").css({
  //     transform: "translate(-0, -0) !important",
  //   });

  //   $(firstElm).siblings().children("span").removeClass("transFixed").hide();
  //   $(firstElm).children("span").removeClass("trans");
  // }
  //  }
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
  // console.log(modifiedAyatNum);
  let url = `${BASE_URL}${modifiedSuraNumber}${modifiedAyatNum}.mp3`;
  src = `<source src="${url}" type="audio/mpeg"> Your browser does not support the audio element.`;

  audio.innerHTML = src;
  togglePlay(audio);

  document
    .getElementById("pauseAudioBtn")
    .addEventListener("click", function () {
      // audio.pause();
      playAudioBtn.style.display = "none";
      pauseAudioBtn.style.display = "none";
      togglePlay(audio);
    });

  /**
   * Play/Pause Start its working perfectly
   */
  totalAya[aya - 1].addEventListener("click", function () {

    if (audio.paused) {
      togglePlay(audio);
      isPlayingClickOnAya = true;
      playAudioBtn.style.display = "none";
      pauseAudioBtn.style.display = "none";
     
      // $(this).siblings('span').removedClass('paused');
      $(this).removeClass('paused');
      $(this).siblings('.aya').removeClass('paused');
      
    } else {
     
      togglePlay(audio);
      isPlayingClickOnAya = false;
      playAudioBtn.style.display = "none";
      pauseAudioBtn.style.display = "none";
      $(this).addClass('paused');
      $(this).siblings('.aya').removeClass('paused');
      
      
     
    }
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

    /**
     *  Audio Puase after End of Sura
     **/

    if (totalAya.length == aya) {
      audio.pause();
      pauseAudioBtn.style.display = "none";
      playAudioBtn.style.display = "none";
      playAudioBtn.innerHTML = "Play";

    }

    /**
     * Auto Scrolling
     *
     */
    
  
   
    let isPaused = false;
   
 function scrollingPlays(){
     
          isPaused = true;
          if (mq.matches) {
            console.log("i am scrolling... for mobile");
            setInterval(function(){
              window.scrollBy({
                top: 1,
                behavior: "smooth",
              });
            }, 200);             
           
    
          } else {
            console.log("i am scrolling... for dekstop");
            
            setInterval(function(){
              window.scrollBy({
                top: 1,
                behavior: "smooth",
              });
            }, 200);
             
          }
    }
    
 
    if (autoScroll == true && !isPaused) {
        
            scrollingPlays();
        
      }
      
    
   
 
    // if (autoScroll == true && !isPaused) {
    //   console.log('i am auto scrolling...', autoScroll);

    //   if (!isPaused) {
      
    //       scrollingPlays();
       
      

    //   }

    // } else {
    //   isPaused = true;
    //   // console.log('i am not auto scrolling...', autoScroll);
    //   clearInterval(() => {
    //     scrollingPlays();
    //   }, 300);

    // }

    /**
     * Check weather Translation is on or not and show translatin for first element (Mobile included)
     */

    /*Show Translation with Audio in Desktop*/
    showTranslationWithVideo(firstElm, totalAya[aya], totalAya.length, ayatNum);
    // if(translation){
    //     $(totalAya[aya]).children("span").show().animate({
    //         opacity: 1,
    //       },"slow");
    //     $(totalAya[aya]).siblings().children("span").hide();

    //     /*Show Translation with Audio in Mobile*/
    //     if (mq.matches) {
    //       $(totalAya[aya]).children("span").addClass("transFixed").css({
    //         transform: "translate(-0, -0) !important",
    //       });

    //       $(totalAya[aya])
    //         .siblings()
    //         .children("span")
    //         .removeClass("transFixed")
    //         .hide();
    //       $(totalAya[aya]).children("span").removeClass("trans");
    //     }
    // }
  });
  console.log(" I am recurseive");
} //Audio Playing Function end

function showTranslationWithVideo(firstElm, singleAya, totalaya, ayatNum) {
  /**
   * Check weather Translation is on or not and show translatin for first element (Mobile included)
   */

  if (translation) {
    if (translationMouseOver == false) {
      $(firstElm).children('span').addClass('transAyaByAya');
      $(singleAya).children('span').hide();
      $(singleAya).siblings().children('span').hide();
      $(singleAya).children('span').addClass('transAyaByAya');
    } else {
      $(singleAya).children('span').removeClass('transAyaByAya');
    }
    /*Show First Translation with Audio in Desktop*/
    if (ayatNum == totalaya) {
      $(firstElm).children("span").hide();

      return false;
    }
    $(firstElm).children("span").show();
    $(firstElm).siblings().children("span").hide();



    // const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      $(firstElm).children("span").addClass("transFixed").css({
        transform: "translate(-0, -0) !important",
      });

      $(firstElm).siblings().children("span").removeClass("transFixed").hide();
      $(firstElm).children("span").removeClass("trans");
    }

    $(singleAya).children("span").show().animate({
        opacity: 1,
      },
      "slow"
    );
    $(singleAya).siblings().children("span").hide();

    /*Show Translation with Audio in Mobile*/
    if (mq.matches) {
      $(singleAya).children("span").addClass("transFixed").css({
        transform: "translate(-0, -0) !important",
      });

      $(singleAya).siblings().children("span").removeClass("transFixed").hide();
      $(singleAya).children("span").removeClass("trans");
    }
  } else {
    $("span.trans").hide();
    $("span.transFixed").hide();
    $("span.transAyaByAya").hide();

  }
}

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
     
      let url = `${BASE_URL}/${modifiedSuraNumber}${modifiedAyatNum}.mp3`;
      src = `<source src="${url}" type="audio/mpeg"> Your browser does not support the audio element.`;

      console.log(this + ayatNum + "I am after doucble click");

      audio.innerHTML = src;
      $(totalAya[i]).addClass("selected");
      $(totalAya[i]).siblings().removeClass("selected");

      //Auto Scrolling...
      // totalAya[i].scrollIntoView({ behavior: 'smooth', block: 'center' });

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

    console.log(translationMouseOver + "is working....");

    totalAya[i].addEventListener("mouseover", function (e) {
      e.preventDefault();

      /**
       * Check Weather Translation setting is on or not on Mouse Over
       */

      $(this).addClass("hover");
      $(this).siblings().removeClass("hover");

      let hoverAya = document.querySelector(
        "#suraContainer span>span.aya.hover"
      );
      hoverAya.addEventListener("mousemove", function (es) {
        $(this).children("span.trans").show().animate({
            opacity: 1,
          },
          "slow"
        );
        $(this).children("span.trans").css({
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -100%)",
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

console.log(
  translationMouseOver +
  "out side of function checking working or not working...."
);

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



/**
 * ShowTranslationOnly
 * Show Translation Only
 */
 

function showOnlyTranslationHideArabic(data, i) {
  let bntrans = document.querySelector('.bn');
  let entrans = document.querySelector('.en');

 
  $(langSelection).show();

  showOnlyTranslationEL.addEventListener('change', function () {
    $(bntrans).show();
    $('.ar').hide();

    $(bntrans).addClass('transFrame');
    $(entrans).removeClass('transFrame');
    $('.langTrans').hover(function () {
      // console.log('i am hover', this);
        $(this).addClass('transHover');
        $(this).css({
          padding: '10px'
        });
    }, function () {
        $(this).removeClass('transHover');
    });



        showTranslationOnly = true;
   
        if (this.checked && showTranslationOnly) {
          $('#customtransBnEn').show();
          // console.log('i am checked', this);
      
          // $(customtransBnEnCheckBox).show();
          customtransBnEnCheckBox.addEventListener('change', function () {
              this.setAttribute('checked', 'checked');
              if (this.checked) {
                
                $(bntrans).hide();
                $(entrans).show();

                $(entrans).addClass('transFrame');
                $(bntrans).removeClass('transFrame');
                $('.langTrans').hover(function () {
                  console.log('i am hover', this);
                    $(this).addClass('transHover');
                    $(this).css({
                      padding: '10px'
                    });
                }, function () {
                    $(this).removeClass('transHover');
                });
              
              }else{
                $(bntrans).show();
                $(entrans).hide();

                $(bntrans).addClass('transFrame');
                $(entrans).removeClass('transFrame');
                $('.langTrans').hover(function () {
                  console.log('i am hover', this);
                    $(this).addClass('transHover');
                    $(this).css({
                      padding: '10px'
                    });
                }, function () {
                    $(this).removeClass('transHover');
                });
               
              }
 

            $('.ar').hide();
   

          });
          
          //mouseover and leave on Translation
      
        } else {
          $(bntrans).hide();
          $(entrans).hide();


          $('#customtransBnEn').hide();
          showTranslationOnly = false;
          customtransBnEnCheckBox.removeAttribute('checked');
          // console.log('i am not checked', this);
       
          $('.ar').show();
      
          $('.transFrame').hide();
      
        }
    
      
      
   
  }); //showOnlyTranslationEL

}