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
  name.setAttribute('value', chief); // "Tom"
  
&lt;/script&gt;</pre>
