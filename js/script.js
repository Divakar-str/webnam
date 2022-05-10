

/* mobile nav */

function myFunction() {
    var x = document.getElementById("nav");
    var element = document.getElementById("head");
    if (x.className === "nav") {
      x.className += " responsive";
      element.classList.remove("head");
     
    } else {
      x.className = "nav";
      element.classList.remove("head");
     
    }
   
  }


           

/* show hide */
function h1() 
        {  var h = document.getElementById("home"); 
        var a = document.getElementById("about");
        var d = document.getElementById("dept"); 
        var i = document.getElementById("infra"); 
        var p = document.getElementById("place"); 
        var c = document.getElementById("contact");  
           if (h.style.display !== "none") {  
                h.style.display = "block";  

                a.style.display = "none";  
                d.style.display = "none";

                i.style.display = "none";  
                p.style.display = "none"; 

                c.style.display = "none";
            }  
             
            else{
                h.style.display = "block";  

                a.style.display = "none";  
                d.style.display = "none";

                i.style.display = "none";  
                p.style.display = "none"; 

                c.style.display = "none";

            }
       
        
        }    
        
function a1() 
        {  var h = document.getElementById("home"); 
        var a = document.getElementById("about");
        var d = document.getElementById("dept"); 
        var i = document.getElementById("infra"); 
        var p = document.getElementById("place"); 
        var c = document.getElementById("contact");  
           if (a.style.display !== "none") {  
                a.style.display = "block";  

                h.style.display = "none";  
                d.style.display = "none";

                i.style.display = "none";  
                p.style.display = "none"; 

                c.style.display = "none";
            }  
             
            else{
                a.style.display = "block";  

                h.style.display = "none";  
                d.style.display = "none";

                i.style.display = "none";  
                p.style.display = "none"; 

                c.style.display = "none";
            }
       
        
        }    
        
        
function d1() 
        {    var h = document.getElementById("home"); 
        var a = document.getElementById("about");
        var d = document.getElementById("dept"); 
        var i = document.getElementById("infra"); 
        var p = document.getElementById("place"); 
        var c = document.getElementById("contact");
           if (d.style.display !== "none") {  
                d.style.display = "block";

                h.style.display = "none";
                a.style.display = "none";   
                i.style.display = "none";  
                p.style.display = "none"; 
                c.style.display = "none";
            }  
             
            else{

                d.style.display = "block";

                h.style.display = "none";
                a.style.display = "none";   
                i.style.display = "none";  
                p.style.display = "none"; 
                c.style.display = "none";

            }
       
        
        }     
        

function i1() 
        {   var h = document.getElementById("home"); 
        var a = document.getElementById("about");
        var d = document.getElementById("dept"); 
        var i = document.getElementById("infra"); 
        var p = document.getElementById("place"); 
        var c = document.getElementById("contact");

           if (i.style.display !== "none") {  
                i.style.display = "block";  

                h.style.display = "none";
                a.style.display = "none";   
                d.style.display = "none";  
                p.style.display = "none"; 
                c.style.display = "none";
            }  
           
       else{

        i.style.display = "block";  

        h.style.display = "none";
        a.style.display = "none";   
        d.style.display = "none";  
        p.style.display = "none"; 
        c.style.display = "none";

       }
        
        }    
        
        
function p1() 
        {    var h = document.getElementById("home"); 
        var a = document.getElementById("about");
        var d = document.getElementById("dept"); 
        var i = document.getElementById("infra"); 
        var p = document.getElementById("place"); 
        var c = document.getElementById("contact");
           if (p.style.display !== "none") {  
                p.style.display = "block";

                h.style.display = "none";
                a.style.display = "none";   
                i.style.display = "none";  
                d.style.display = "none"; 
                c.style.display = "none";
            }  
             
            else{

                p.style.display = "block";

                h.style.display = "none";
                a.style.display = "none";   
                i.style.display = "none";  
                d.style.display = "none"; 
                c.style.display = "none";

            }
       
        
        }     

function c1() 
        {   var h = document.getElementById("home"); 
            var a = document.getElementById("about");
            var d = document.getElementById("dept"); 
            var i = document.getElementById("infra"); 
            var p = document.getElementById("place"); 
            var c = document.getElementById("contact");

           if (c.style.display !== "none") {  
                c.style.display = "block";  


                h.style.display = "none";
                a.style.display = "none";   
                d.style.display = "none";  
                i.style.display = "none"; 
                p.style.display = "none";
            }  
              
            else{

                c.style.display = "block";  


                h.style.display = "none";
                a.style.display = "none";   
                d.style.display = "none";  
                i.style.display = "none"; 
                p.style.display = "none";

            }
       
        
        }    
        
        
/*slide show*/
 var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3900);    
}


/*typing*/


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #00FF70 }";
  document.body.appendChild(css);
};




//data


var li_elements = document.querySelectorAll(".left nav a");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "college") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "trust") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "chairman") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "correspondent") {
      document.querySelector("." + li_value).style.display = "block";
    }else if (li_value == "principal") {
      document.querySelector("." + li_value).style.display = "block";
    }
    else if (li_value == "it") {
      document.querySelector("." + li_value).style.display = "block";
    }else if (li_value == "ra") {
      document.querySelector("." + li_value).style.display = "block";} 
   else if (li_value == "me") {
    document.querySelector("." + li_value).style.display = "block";} 
    
    else if (li_value == "lib") {
      document.querySelector("." + li_value).style.display = "block";} 
    else if (li_value == "cls") {
        document.querySelector("." + li_value).style.display = "block";} 
    else if (li_value == "hos") {
          document.querySelector("." + li_value).style.display = "block";} 
    else if (li_value == "sprt") {
            document.querySelector("." + li_value).style.display = "block";} 
    else if (li_value == "tran") {
              document.querySelector("." + li_value).style.display = "block";} 
    else if (li_value == "intro") {
                document.querySelector("." + li_value).style.display = "block";} 
    else if (li_value== "tra") {
                  document.querySelector("." + li_value).style.display = "block";} 
    
      else {
      console.log("");
    }
  });
}





