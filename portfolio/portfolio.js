let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

     if(top>=offset && top< offset+ height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add
            ('active');
        })
     }
    })

}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

function sentMail(){

    var params ={
        to_name : document.getElementById("to_name").value ,
        
        from_name :document.getElementById("from_name").value ,
        message :document.getElementById("message").value ,
        
    }
emailjs.send("service_8772uwb","template_dq6auh7",params ).then(function(res){
    alert("thankyou")
})
document.getElementById("to_name").value=''
document.getElementById("from_name").value =''
document.getElementById("message").value=''
}
