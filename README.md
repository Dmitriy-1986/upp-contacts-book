https://dmitriy-1986.github.io/tel-connect/

Пример доступа к атрибутам value, name
https://itchief.ru/javascript/attributes-and-properties

<pre>&lt;input name="name" type="text" value="Bob"&gt;</pre>

<pre>&lt;script&gt;
  const chief = "Михайловська С.В.";
  
  var name = document.querySelector('input[name="name"]'); // получим элемент
  
  // получим значение атрибута value у элемента
  name.getAttribute('value'); 
 
  // получим значение DOM-свойства value
  name.value; 
  
  // обновим значение атрибута value, установим ему новое значение
  name.setAttribute('value', chief); // "Михайловська С.В."
  
&lt;/script&gt;</pre>
<p>
К сведенью: 1 секунда = 1000 миллисекунд.
Значит, 15 000 миллисекунд = 15 секунд.
</p>
<pre>&lt;script&gt
setTimeout(function(){
    location.reload();
}, 15000);
&lt;/script&gt;</pre>
