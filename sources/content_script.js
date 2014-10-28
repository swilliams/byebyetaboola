function getTaboolaElements() {
  return document.querySelectorAll('[id^=taboola]');
}

function deleteTaboolaElements(taboolaElements) {
  for (var idx = 0; idx < taboolaElements.length; idx += 1) {
    var el = taboolaElements[idx];
    el.remove();
  }
}

function goTime() {
  var taboolaElements = getTaboolaElements();
  deleteTaboolaElements(taboolaElements);
}

window.onload = goTime;

