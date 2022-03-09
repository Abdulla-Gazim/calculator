var input = document.getElementById("input");

   function number(num) {
	  input.value = input.value + num;
   }

   function equal() {
	  input.value = eval(input.value);
   }

   function clean() {
	  input.value = "";
   }

