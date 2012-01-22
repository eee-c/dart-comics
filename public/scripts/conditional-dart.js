function notDart() {
  var args = Array.prototype.slice.call(arguments)
    , fn_when_no_dart = args.shift();

  if (!document.implementation.hasFeature('dart', '1.0')) {
    fn_when_no_dart.apply(this, args);
  }
}

function loadJsEquivalentScripts() {
  var scripts = document.getElementsByTagName('script');
  for (var i=0; i<scripts.length; i++) {
    loadJsEquivalent(scripts[i]);
  }
}

function loadJsEquivalent(script) {
  if (!script.hasAttribute('src')) return;
  if (!script.hasAttribute('type')) return;
  if (script.getAttribute('type') != 'application/dart') return;

  var js_script = document.createElement('script');
  js_script.setAttribute('src', script.getAttribute('src') + '.js');
  document.body.appendChild(js_script);
}

document.addEventListener("DOMContentLoaded", function() {
  notDart(loadJsEquivalentScripts);
});
