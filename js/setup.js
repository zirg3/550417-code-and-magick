'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomWizard = function (name1, name2, coat, eyes) {
  var wizard = {
    name: name1[Math.floor(Math.random() * name1.length)] + ' ' + name2[Math.floor(Math.random() * name2.length)],
    coatColor: coat[Math.floor(Math.random() * coat.length)],
    eyesColor: eyes[Math.floor(Math.random() * eyes.length)]
  };
  return wizard;
};

var createWizard = [];
for (var i = 0; i < 4; i++) {
  createWizard[i] = randomWizard(FIRST_NAME, SECOND_NAME, COAT_COLOR, EYES_COLOR);
}

var fragment = document.createDocumentFragment();
for (var j = 0; j < createWizard.length; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = createWizard[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = createWizard[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = createWizard[j].eyesColor;
  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);
userDialog = document.querySelector('.setup-similar').classList.remove('hidden');
