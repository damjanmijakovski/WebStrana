
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
     
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //var komentari=document.getElementsByClassName("mySlides").getElementsByClassName("comment_section");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    var dolzina=slides.length;
var ptag=  document.getElementsByClassName("vkupen_broj");
for(var i=0;i<dolzina;i++){
  ptag[i].innerText=dolzina;
}
    slides[slideIndex-1].style.display = "block";
    
  }

  function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    //var h =document.getElementById("header_bckgrnd");
   // h.style.dislpay="none";
    document.getElementById(tabName).style.display = "block";
  }
  var komentar_sekcija=document.getElementsByClassName("comment_section");
  var i;
  /*var comments=[];
  
  
  
for(i=0;i<comment.length;i++){
  comments[i] = null;
}
localStorage.setItem("comments", JSON.stringify(comments));*/
/*var storedComment = JSON.parse(localStorage.getItem("comments"));
for(i=0;i<komentar_sekcija.length;i++){
  komentar_sekcija[i].innerHTML=storedComment[i];
}
console.log(storedComment);
*/
  function addComment(n){
   var slides= document.getElementsByClassName("mySlides");
   var text_body=slides[n-1].getElementsByClassName("like_comment");
   var comment_section=slides[n-1].getElementsByClassName("comment_section");
   var comment=text_body[0].getElementsByClassName("myForm");
   var node = document.createElement("P");
   var textnode = document.createTextNode(comment[0].elements[0].value);
   node.appendChild(textnode);
   comment_section[0].appendChild(node);
  /* storedComment[n-1].appendChild(comment_section[0]);
   localStorage.setItem("comments", JSON.stringify(storedComment));*/
  }
  function upload(){
    var n= document.getElementsByClassName("mySlides").length + 1;
    var forma=document.getElementById("myFile");
    var adresa=forma.elements[0].attributes.value.textContent;
    var column=document.getElementById("Gallery").getElementsByClassName("content_container")[0];
    var modal=document.getElementById("myModal").getElementsByClassName("modal-content")[0];
    var node="<div class=\"content column-33\"><img src=\""+adresa+"\" class=\"image\" onclick=\"openModal();currentSlide("+n+")\"></div>";
    var node_modal="<div class=\"mySlides\"><div class=\"numbertext\">"+n+" / <span class=\"vkupen_broj\"></span></div><div class=\"modal_image\"><img src=\""+adresa+"\"></div><div class=\"like_comment\"><form class=\"myForm\"><textarea name=\"komentar\" id=\"komentar\" cols=\"30\" rows=\"1\" placeholder=\"Comment...\"></textarea> <input type=\"button\" name=\"submit\" id=\"submit\" value=\"comment\" onclick=\"addComment("+n+")\"> </form></div><div class=\"comment_section\"> </div></div>";
    column.innerHTML+=node;
    modal.innerHTML+=node_modal;
  }
  function addBlog(){
    var ime=document.getElementById("Blog_content").elements[0].value;
    var tekst=document.getElementById("Blog_content").elements[1].value;
    var date=new Date();
    datum=date.toDateString;
    var node="<div class=\"blog_text\"><p>"+ime+" </p><p>"+tekst+"</p></div>";
    document.getElementsByClassName("blog_container")[0].innerHTML+=node;
  }
var like=document.getElementsByClassName("like");

var i;
/*var likeovi=[];
for(i=0;i<like.length;i++){
  likeovi[i] = 0;
}
localStorage.setItem("likeovi", JSON.stringify(likeovi));*/
var storedLikeovi = JSON.parse(localStorage.getItem("likeovi"));

console.log(storedLikeovi);
/*for(i=0;i<like.length;i++){
  count[i]=0;
}
var names = [];
names[0] = prompt("New member name?");
names[1] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));
var storedNames = JSON.parse(localStorage.getItem("names"));
*/
for(i=0;i<like.length;i++){
  like[i].innerText="This post has:"+storedLikeovi[i]+" Likes";
}
function lajkovi(n){
  storedLikeovi[n-1]++;
  localStorage.setItem("likeovi", JSON.stringify(storedLikeovi));
  like[n-1].innerText="This post has:"+storedLikeovi[n-1]+" Likes";
}
