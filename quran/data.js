,
   ,
    "4": {
        "ar": "مَالِكِ يَوْمِ الدِّينِ",
        "bn": "যিনি বিচার দিনের মালিক।",
        "en": "Master of the Day of Judgment.",
        "no": "﴿٤﴾"
    },
    "5": {
        "ar": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "bn": "আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।",
        "en": "Thee do we worship, and Thine aid we seek.",
        "no": "﴿٥﴾"
    },
    "6": {
        "ar": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        "bn": "আমাদেরকে সরল পথ দেখাও,",
        "en": "Show us the straight way,",
        "no": "﴿٦﴾"
    },
    "7": {
        "ar": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        "bn": "সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।",
        "en": "The way of those on whom Thou hast bestowed Thy Grace, those whose (portion) is not wrath, and who go not astray.",
        "no": "﴿٧﴾"
    }





























// var form = new FormData();
// form.append("soundfile", "<file goes here>");

// fetch("https://sms-voice-messages.p.rapidapi.com/call/%252B12167101101/%7Bto_number%7D", {
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "sms-voice-messages.p.rapidapi.com",
// 		"x-rapidapi-key": "bdf3399734msh864079f0cbd6619p1e4e9cjsn7b0e129ec244",
// 		"content-type": "multipart/form-data"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });


dFlexToggle.addEventListener('click', function(){
 
    if(mq.matches){
   
      $(window).scroll(function() {
         if($(window).scrollTop() > 100){
          $(dFlexToggle).addClass('scrolled');
          $('#sidebar-wrapper').css({ position:"fixed", height: "100%", zIndex: "9999", marginTop: "57px", marginLeft: "-20rem", opacity:0 });
  
      }else{
          $(dFlexToggle).removeClass('scrolled');
          $('#sidebar-wrapper').css({ position:"relative", height: "100%", zIndex: "9999", marginTop: "0px", marginLeft: "-0rem", opacity:1 });
          
        }
  
        
     });
    
  }
  // if($(dFlexToggle).hasClass('toggled')){
  //   if($(dFlexToggle).hasClass('scrolled')){
  //     $('.scrolled').on('click', function(e){
  //       $('#sidebar-wrapper').css({ position:"fixed", height: "100%", zIndex: "9999", marginTop: "57px", marginLeft: "0rem", opacity:1 });
  //     });
  //   }else{
  //     $('#sidebar-wrapper').css({ position:"fixed", height: "100%", zIndex: "9999", marginTop: "57px", marginLeft: "-20rem", opacity:0 });
  //   }
  // }else{
  //   $('#sidebar-wrapper').css({ position:"relative", height: "100%", zIndex: "9999", marginTop: "0", marginLeft: "0rem", opacity:1 });
  // }
  
  
  // if($(dFlexToggle).hasClass('toggled')){
  // if(mq460.matches){ 
  //     console.log($(window).scrollTop());
  //     console.log($(window).height());
  //     console.log($(document).height());
  //     $(window).scroll(function() {
    
  //       if($(window).scrollTop() > 100){
  //         // alert(`scrollTop is window.height ${$(window).scrollTop()} ${$(window).height()}`, );
  //         console.log(`scrollTop is window.height ${$(window).scrollTop()} ${$(window).height()}`);
  //         $('#sidebar-wrapper').css({
  //               position:"fixed",
  //               height: "100%",
  //               zIndex: "9999",
  //               marginTop: "57px",
  //               marginLeft: "-17rem"
  
  //         });
  //       }else{
  //         $('#sidebar-wrapper').css({
  //           position:"relative",
  //           height: "100%",
  //           zIndex: "1",
  //           marginTop: "0px",
  //           marginLeft: "-15rem"
  //     });
  //       }
  //    });
  //   }else{
       
  //   }
  // }
//   });
  