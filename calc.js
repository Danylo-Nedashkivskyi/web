
window.onload = function() {
  var input = document.querySelector('input[type="text"]');
  var buttons = document.querySelectorAll('button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var value = this.value;

      if (value === '=') {
        try {
          var result = eval(input.value);
          input.value = result;
        } catch (error) {
          input.value = 'Error';
        }
      } else if (value === 'all-clear') {
        input.value = '';
      } else {
        input.value += value;
      }
    });
  });
};
   