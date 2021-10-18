/*
    Пароль на странице
*/
const password = prompt('Введіть пароль');
if (password == "111") {  
         window.onload;
} else {  
      window.location.href = 'https://google.com';  
}
/*
    Поиск по странице
    
             
  <form action="javascript:void();" onsubmit="if(this.t1.value!='')parent.findString(this.t1.value);return(false);">
      <input type="text" id="t1" name="t1" value="" class="form-control" placeholder="Пошук на сторінці..." >
      <input type="submit" name="b1" value="Пошук" class="btn">
  </form>
             
   form {
    display: flex;
    flex-direction: row;
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}
.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    border-color: #6c757d;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin-left: 5px;
}

.btn:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}

.btn:focus {
    box-shadow: 0 0 0 0.25rem rgb(108 117 125 / 50%);
}
*/
var TRange=null;

function findString (str) {
 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {

  // CODE FOR BROWSERS THAT SUPPORT window.find

  strFound=self.find(str);
  if (!strFound) {
   strFound=self.find(str,0,1);
   while (self.find(str,0,1)) continue;
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {

  // EXPLORER-SPECIFIC CODE

  if (TRange!=null) {
   TRange.collapse(false);
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
     
  if (TRange==null || strFound==0) {
   TRange=self.document.body.createTextRange();
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
 }
 
 if (!strFound) alert("Текст '"+str+"' не знайдений!")
 return;
}
/*
    Аккордеон
*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
