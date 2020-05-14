



// const quran = {
//   sura_1: [
//     {
     
//       attr: {
//         ar: "الفاتحة",
//         bn: "সূরা আল-ফাতেহা",
//         en: "Surat Al-Fātiĥah",
//         audio: 'http://www.quraanshareef.org/audio/1-Surah-Al-Fatihah.mp3' ,
//       },
//      aya:{
//       aya_1: {
//         ar: "بِسْمِ اللّهِ الرَّحْمـَنِ الرَّحِيمِ",
//         bn: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
//         en: "In the name of Allah, most benevolent, ever-merciful.",
//       },
//       aya_2: {
//         ar: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ",
//         bn: "যাবতীয় প্রশংসা আল্লাহ তা’আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
//         en: "Praise be to Allah, the Cherisher and Sustainer of the worlds;",
//       },
//       aya_3: {
//         ar: "الرَّحْمـنِ الرَّحِيمِ",
//         bn: "যিনি নিতান্ত মেহেরবান ও দয়ালু।",
//         en: "Most Gracious, Most Merciful;",
//       },
//       aya_4: {
//         ar: "مَـالِكِ يَوْمِ الدِّينِ",
//         bn: "যিনি বিচার দিনের মালিক।",
//         en: "Master of the Day of Judgment.",
//       },
//       aya_5: {
//         ar: "إِيَّاكَ نَعْبُدُ وإِيَّاكَ نَسْتَعِينُ",
//         bn: "আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।",
//         en: "Thee do we worship, and Thine aid we seek.",
//       },
//       aya_6: {
//         ar: "اهدِنَــــا الصِّرَاطَ المُستَقِيم",
//         bn: "আমাদেরকে সরল পথ দেখাও,",
//         en: "Show us the straight way,       ",
//       },
//       aya_7: {
//         ar: "صِرَاطَ الَّذِينَ أَنعَمتَ عَلَيهِمْ غَيرِ المَغضُوبِ عَلَيهِمْ وَلاَ الضَّالِّينَ",
//         bn: "সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।",
//         en: "The way of those on whom Thou hast bestowed Thy Grace, those whose (portion) is not wrath, and who go not astray.",
//       },
//      }
//     },
//   ],
//   sura_2: [
//     {
//       audio: 'http://www.quraanshareef.org/audio/1-Surah-Al-Fatihah.mp3' ,
//       name: {
//         ar: "الفاتحة",
//         bn: "সূরা আল-ফাতেহা",
//         en: "Surat Al-Bakara",
//       },
//       aya_1: {
//         ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
//         bn: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
//         en: "In the name of Allah, most benevolent, ever-merciful.",
//       },
//       aya_2: {
//         ar: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ",
//         bn: "যাবতীয় প্রশংসা আল্লাহ তা’আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
//         en: "Praise be to Allah, the Cherisher and Sustainer of the worlds;",
//       },
//     },
//   ],
//   sura_3: [
//     {
//       audio: 'http://www.quraanshareef.org/audio/1-Surah-Al-Fatihah.mp3' ,
//       name: {
//         ar: "الفاتحة",
//         bn: "সূরা আল-ফাতেহা",
//         en: "Surat Al-Imran",
//       },
//       aya_1: {
//         ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
//         bn: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
//         en: "In the name of Allah, most benevolent, ever-merciful.",
//       },
//       aya_2: {
//         ar: "الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ",
//         bn: "যাবতীয় প্রশংসা আল্লাহ তা’আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
//         en: "Praise be to Allah, the Cherisher and Sustainer of the worlds;",
//       },
//     },
//   ],
// };

// // console.log(quran.sura_1[0].audio);
// // for(let v in quran){
// //   console.log(quran[v][0].name.ar);
// //   // console.log(v);
// // }

// // quranObj(quran);













// function showSura(data){

 
 
//         let suraContainer = document.getElementById('suraContainer');
        
//         let name = document.createElement('div');
//         name.classList.add('name');
//         name.innerHTML = myObj.attr.bn + " " + myObj.attr.ar  + " " + myObj.attr.en;
    
//         suraContainer.appendChild(name);
    
//         let val = Object.values(myObj.aya);
    
//         for(let i=0; i<val.length; i++){
         
//            let ar = document.createElement('span');
//            let bn = document.createElement('span');
//            let en = document.createElement('span');
    
          
//            ar.classList.add('ar');
//            bn.classList.add('bn');
//            en.classList.add('en');
          
    
//            ar.innerHTML = val[i].ar;
//            bn.innerHTML = val[i].bn;
//            en.innerHTML = val[i].en;
    
          
//            suraContainer.appendChild(ar);
//            suraContainer.appendChild(bn);
//            suraContainer.appendChild(en);
    
//         }
       
//     }
// }


 