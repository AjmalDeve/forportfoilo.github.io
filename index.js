// const navAnime = document.getElementById('anim'),
// let nav = new IntersectionObserver((entry,obsever)=>{
    //     let [enter]=entry;
    //     console.log(enter)
    //     if(enter.isIntersecting){
        //        navAnime.classList.add('navAnim') 
        //     }else{
            //         navAnime.classList.remove('navAnim') 
            
            //     }
            // },{
                //     root:null,
                //     threshold:0
                // })
                // nav.observe(navAnime);
                
                
const leftAnime = document.getElementById('left_anim'),
      rightAnime = document.getElementById('right_anim');
let leftA = new IntersectionObserver((inL,ob)=>{
    let [inLL]=inL;
    // console.log(entr)
    if(inLL.isIntersecting){
       leftAnime.classList.add('leftAnim') 
    }
},{
    root:null,
    threshold:0
})
leftA.observe(leftAnime)

let righA = new IntersectionObserver((e,o)=>{
    let [en]=e;
    console.log(en)
    if(en.isIntersecting){
       rightAnime.classList.add('rightAnim') 
    }
},{
    root:null,
    threshold:0
})
righA.observe(rightAnime);


// home animation 
let mainHome = document.getElementById('main_hme'),
     home_hy = document.getElementById('home_hy'),
     home_name= document.getElementById('home_name'),
     home_mortIN = document.getElementById('home_mortIN'),
     home_btn = document.getElementById('home_btn'),
     home_scroll = document.getElementById('home_scroll'),
     home_intro = document.getElementById('home_intro');

let home = new IntersectionObserver((inter,ob)=>{
    let [e]=inter;
    // console.log(en)
    if(e.isIntersecting){
       home_hy.classList.add('hy') 
       home_name.classList.add('nameA') 
       home_mortIN.classList.add('mortIN') 
       home_btn.classList.add('btnA') 
       home_intro.classList.add('introo') 
       home_scroll.classList.add('scroll') 
    }else{
        home_name.classList.remove('nameA') 
        home_hy.classList.remove('hy') 
        home_mortIN.classList.remove('mortIN') 
        home_btn.classList.remove('btnA') 
        home_intro.classList.remove('introo') 
        home_scroll.classList.remove('scroll') 

    }
},{
    root:null,
    threshold:0
})
home.observe(mainHome);



// **** about section anim code
const aboutSection = document.getElementById('about_section');
const aboutLeft = document.getElementById('about_left');
const aboutRight = document.getElementById('about_right');

let aboutAnim = new IntersectionObserver((inr,obser)=>{
    let [ib]=inr;
    if(ib.isIntersecting){        
        // aboutLeft.style.paddingTop = '0px';
        aboutLeft.style.paddingTop = '0px';
        aboutRight.style.paddingTop = '0px';
        aboutLeft.style.opacity = '1'
        aboutRight.style.opacity = '1'
    }else{
              // aboutLeft.style.paddingTop = '0px';
              aboutLeft.style.paddingTop = '100px';
              aboutLeft.style.opacity = '0'
              aboutRight.style.paddingTop = '200px';
              aboutRight.style.opacity = '0'
    }
},{
    root:null,
    threshold:0
})
aboutAnim.observe(aboutSection)

// ***** skills anime code

const skillsSection = document.getElementById('skill_section');
const skillsLeft = document.getElementById('skill_up');
const skillsRight = document.getElementById('skill_down');

let skillsAnim = new IntersectionObserver((inrs,obsers)=>{
    let [iss]=inrs;
    if(iss.isIntersecting){        
        // aboutLeft.style.paddingTop = '0px';
        skillsLeft.style.paddingTop = '0px';
        skillsRight.style.paddingTop = '0px';
        skillsLeft.style.opacity = '1'
        skillsRight.style.opacity = '1'
    }else{
              // aboutLeft.style.paddingTop = '0px';
              skillsLeft.style.paddingTop = '100px';
              skillsLeft.style.opacity = '0'
              skillsRight.style.paddingTop = '100px';
              skillsRight.style.opacity = '0'
            }
        },{
            root:null,
            threshold:0
        })
 skillsAnim.observe(skillsSection)
        
        
        
//******** Project anime code */
const porjectSection = document.getElementById('project_anim');

const projectBoxs = document.getElementsByClassName('one');

let projectAnim = new IntersectionObserver((inrp,obserp)=>{
    let [ip]=inrp;
    if(ip.isIntersecting){        
        for(let i = 0 ; i<projectBoxs.length;i++){
            projectBoxs[i].style.marginTop = '10px';
            projectBoxs[i].style.opacity = '1';
            // console.log(i)
        }
    }
    },{
            root:null,
            threshold:0 
    })
        projectAnim.observe(porjectSection)

// **** nav bar code
const nav = document.getElementById('nav_show');
let navShow = document.getElementById('nav');
nav.addEventListener('click',()=>{
    navShow.style.top= '0%';
    
})
const closeBtn = document.getElementById('close_btn');
closeBtn.addEventListener('click',()=>{  
    navShow.style.top= '-100%';
})

let as = document.getElementsByClassName('a');
for(let i = 0; i < as.length; i++){
    as[i].addEventListener('click',()=>{
        navShow.style.top= '-100%';

    })
};


// back to home anim in form .. code
const backToHomeAnim = document.getElementById('anim_back_to_home');
const backToformAnim = document.getElementById('form');
const backToHomeA = new IntersectionObserver((ob,obb)=>{
    let [interB]=ob;
    if(interB.isIntersecting){
        backToformAnim.style.opacity = '1';
        backToformAnim.style.marginTop = '0px'
    }
    
},{
    root:null,
    threshold:0
});
// backToHomeA.observe(backToHomeAnim);

// show the get into touch form 
// *** home btn show the another form (get into touch)

home_btn.addEventListener("click",()=>{
    backToHomeAnim.style.top  = '0%'
    backToHomeAnim.style.opacity  = '1'
})
// *** close btn for  (another form)
let closeBtnForFormAnother = document.getElementById('anotherBtnClose');
closeBtnForFormAnother.addEventListener("click",()=>{
    backToHomeAnim.style.top = '100%' 
    backToHomeAnim.style.opacity = '0.4' 
    
})

// **** thanks page code
let btnOfThanksPage = document.getElementById('close_btn_of_thanksPage');
let thanksPage = document.getElementById('pageOfThanks'); 
btnOfThanksPage.addEventListener('click',()=>{
    backToHomeAnim.style.opacity = '0.4'
    backToHomeAnim.style.top = '100%'
    thanksPage.style.top = '100%'
    thanksPage.style.opacity = '0.4'

});
// ***** form code
const fun = (e)=>{
    event.preventDefault();

    

    // if form is sumbit succes fully and then fire this btn
    thanksPage.style.top = '0%'
    thanksPage.style.opacity = '1'
}

