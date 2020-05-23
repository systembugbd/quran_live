
let translationSection = document.getElementById("translationSection");

let showOnlyTranslationEL = document.getElementById("showOnlyTranslation");

$(translationSection).show();

showOnlyTranslationHideArabic();


// /**
//  * TranslationFixedOnOff function
//  * Show/Hide on Hover
//  */
// function showHideTranslationMouseOver(checkdOrNot) {
//   if (checkdOrNot || translationFixed) {

//     $("span.card").addClass("trans");
//     $("span.card").removeClass('transAyaByAya');
//     $("span.card").removeClass('transFixed');


//   } else {
//     translationFixed=false;
//     $("span.card").removeClass('trans');
//     $("span.card").addClass('overTransHide');
//     $('span.trans').hide();
//   }
// }


// /**
//  * TranslationFixedOnOff function
//  * Show Fixed
//  */
 

// function showTranslationFixed(checkdOrNot) {
//   if (checkdOrNot) {
//       translationOffMouseOver.removeAttribute('checked', "");
//       translationWithVideoOnOff.removeAttribute('checked', "");
//       $(".aya").children("span.card").addClass("transFixed");
//       $(".aya").children("span.card").removeClass("trans");
//       $(".aya").css({display:'block',position: 'relative'});

//       $(translationOffMouseOver).parent().hide();
//       $(translationWithVideoOnOff).parent().hide();
//       console.log('I am fixed on');
   
//   } else {
//     translationMouseOver = translationOffMouseOver.getAttribute('checked') == 'checked' ? true : false;
//    if(translationMouseOver == true){

      
//       $(".aya").children("span.card").addClass("trans");
//       $(".aya").children("span.card").removeClass("transFixed");
//       translationOffMouseOver.add('checked');


//     }else{
       
//       $(".aya").children("span.card").removeClass("transFixed");
//       $(".aya").children("span.card").addClass("overTransHide");
//        translationOffMouseOver.removeAttribute('checked');
//     }
    
//     $(".aya").css({display:'inline',position: 'relative'});

//     //show Hover checkbox
//     $(translationOffMouseOver).parent().show();
//     $(translationWithVideoOnOff).parent().show();

//     translationOffMouseOver.setAttribute('checked', "checked");

//     translationFixed=false;
//   }
// }




// /**
//  * ShowTranslationOnly
//  * Show Translation Only
//  */
// function showOnlyTranslationHideArabic(){

//   showOnlyTranslationEL.addEventListener('change', function(){
 
//     if(this.checked){
//       showTranslationOnly=true;

//       console.log('Hello I am changing...', showTranslationOnly);
//       $('.arabicAya').hide();
//       $('.aya').css({
//         borderBottom:'none',
//         lineHeight: 'none',
//         padding:'0px'
//       });
//       $('.arabicAya').siblings('span').addClass('transFixed');
//       $('.arabicAya').siblings('span.trans').removeClass('trans');

      
//     }else{
//       $('.arabicAya').show();
//       $('.aya').css({
//         borderBottom:'1px solid #f9ef86',
//         lineHeight: '2.1em',
//         padding:'10px'
//       });
//       $('.arabicAya').siblings('span').addClass('trans');
//       $('.arabicAya').siblings('span.trans').removeClass('transFixed');
//       showTranslationOnly=false;
 
//       console.log('Hello I am changing...', showTranslationOnly);

//     }
    

//   });
// }