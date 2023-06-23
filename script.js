var steps = document.querySelectorAll('.step');
var body = document.querySelector('body');
var html = document.querySelector('html');

for (var i=0; i < steps.length; i++) {
  var element = steps[i];
  element.onclick = function() {
    var num = this.dataset.step;
    addStep(num);
  }
};

function addStep(num) {
  html.className += ' step' + num;
}