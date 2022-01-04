https://dmitriy-1986.github.io/tel-connect/

Пример доступа к атрибутам value, name
https://itchief.ru/javascript/attributes-and-properties
<pre>
<input name="name" type="text" value="Bob">
</pre>
<script>
  var name = document.querySelector('input[name="name"]'); // получим элемент
  
  // получим значение атрибута value у элемента
  name.getAttribute('value'); // "Bob"
  
  // получим значение DOM-свойства value
  name.value; // "Bob"
  
  // обновим значение атрибута value, установим ему новое значение
name.setAttribute('value', 'Tom'); // "Tom"
  
</script>
