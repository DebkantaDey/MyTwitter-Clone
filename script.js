//Dom elements
const mainpage=document.querySelector('.main-page');

const loginpage=document.querySelector('.login-page');

const middlecontent=document.querySelector('.middle-content');

const btnTop=document.querySelector('.btn-top');

const newsFeedpage=document.querySelector('.feeds-page');

const loginModal=document.querySelector('.login-modal');

const modalx=document.querySelector('.login-modal');

const loginFormBtn=document.querySelector('.login-form-btn');

const postBtn=document.querySelector('.post-btn');

const modalWrapper=document.querySelector('.modal-wrapper');

const modal=document.querySelector('.modal');

const postModal=document.querySelector('.modal-header i');

const modalpostBtn=document.querySelector('.modal-header button');

const modalFooterPlus=document.querySelector('.modal-footer span');

const modalInput=document.querySelector('.modal-input');

const user=document.querySelector('.user');

const sidebar=document.querySelector('.sidebar');

const sidebarWrapper=document.querySelector('.sidebar-wrapper');

const xbtn=document.querySelector('.sidebar-header i');

const toggel=document.querySelector('.toggle');

const circle=document.querySelector('.circle');

const icon1=document.getElementById('icon1');

const icon2=document.getElementById('icon2');

const fiheart1=document.getElementById('fiheart1');

const fiheart2=document.getElementById('fiheart2');

const sheart1=document.getElementById('sheart1');

const sheart2=document.getElementById('sheart2');

const theart1=document.getElementById('theart1');

const theart2=document.getElementById('theart2');

const fheart1=document.getElementById('fheart1');

const fheart2=document.getElementById('fheart2');

const fvheart1=document.getElementById('fvheart1');

const fvheart2=document.getElementById('fvheart2');


/**************************************************** */

//main page
const goToLoginPage=()=>{
    mainpage.style.display='none';
    loginpage.style.display='grid';    
};
middlecontent.addEventListener('click',e =>
{
    if(e.target.classList[1] === 'main-btn'){
        goToLoginPage();
    }
     
});
btnTop.addEventListener('click', ()=>{
    const inputUserInfo=document.querySelector('.user-info');
    const inputPassword=document.querySelector('.password');
    if(inputUserInfo.value !== '' && inputPassword.value !== ''){
        mainpage.style.display='none';
        newsFeedpage.style.display='block';
    }
    else{
        goToLoginPage();
        loginModal.style.display='block';
    }
});
//login page
modalx.addEventListener('click',()=>{
    loginModal.style.display = 'none';

});
loginFormBtn.addEventListener('click', ()=>{
    const loginUserInfo=document.querySelector('.login-user-info');
    const loginPassword=document.querySelector('.login-password');
    if(loginUserInfo.value!==''&&loginPassword.value!==''){
        loginpage.style.display='none';
        newsFeedpage.style.display='block';
    }
    else{
        loginModal.style.display='block';
    }
});
//news feed page
//post modal
postBtn.addEventListener('click', ()=>{
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-display');
});
const changeOpacity= x =>{
    modalpostBtn.style.opacity= x;
    modalFooterPlus.style.opacity=x;

}
postModal.addEventListener('click',()=>{
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');
    if(modalInput.value !== ''){
        modalInput.value = '';
        changeOpacity(0.5);
    }
});
modalInput.addEventListener('keypress', e=>{
    if(e.target.value !== ''){
        changeOpacity(1);
    }
});
modalInput.addEventListener('blur', e=>{
    if(e.target.value === ''){
        changeOpacity(0.5);
    }
});
user.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');

});
xbtn.addEventListener('click', ()=>
{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});
//dark mode
const darkElements1=document.querySelectorAll('.dark-mode-1');
const darkElements2=document.querySelectorAll('.dark-mode-2');
const lightTexts=document.querySelectorAll('.light-text');
const borders=document.querySelectorAll('.border');

toggel.addEventListener('click',()=>{
    circle.classList.toggle('.move');
    Array.from(darkElements1).map(darkEl1=> darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map(darkEl2=> darkEl2.classList.toggle('dark-2'));
    Array.from(lightTexts).map(lighTexts=> lighTexts.classList.toggle('light'));
    Array.from(borders).map(border=> border.classList.toggle('border-color'));
});

function showIcon1(event){
    icon1.style.display='none';
    icon2.style.display='grid';
    return false;
}
function showIcon2(event){
    icon1.style.display='grid';
    icon2.style.display='none';
    return false;
}

function showfiHeart1(){
    fiheart1.style.display='none';
    fiheart2.style.display='inline-block';
    fiheart2.style.color="red";
    console.log("It is working");
    return false;
}
function showfiHeart2(){
    fiheart1.style.display='inline-block';
    fiheart2.style.display='none';
    return false;
}
function showsHeart1(){
    sheart1.style.display='none';
    sheart2.style.display='inline-block';
    sheart2.style.color="red";
    console.log("It is working");
    return false;
}
function showsHeart2(){
    sheart1.style.display='inline-block';
    sheart2.style.display='none';
    return false;
}
function showtHeart1(){
    theart1.style.display='none';
    theart2.style.display='inline-block';
    theart2.style.color="red";
    console.log("It is working");
    return false;
}
function showtHeart2(){
    theart1.style.display='inline-block';
    theart2.style.display='none';
    return false;
}
function showfHeart1(){
    fheart1.style.display='none';
    fheart2.style.display='inline-block';
    fheart2.style.color="red";
    console.log("It is working");
    return false;
}
function showfHeart2(){
    fheart1.style.display='inline-block';
    fheart2.style.display='none';
    return false;
}
function showfvHeart1(){
    fvheart1.style.display='none';
    fvheart2.style.display='inline-block';
    fvheart2.style.color="red";
    console.log("It is working");
    return false;
}


function showfvHeart2(){
    fvheart1.style.display='inline-block';
    fvheart2.style.display='none';
    return false;
}


function moving()
{
    let count =1;
    let move=document.getElementsByClassName('circle');
    if(count==1){
        move.style.transform=translateX(10);
        count=0;
    }
    else{
        move.style.transform=translateX(0);
        count=1;
    }
}
