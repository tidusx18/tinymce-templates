import Tinymce from './TinyMCE';
import Editor from './Editor';

setTimeout(function() {
  var MCE = new Tinymce();

  var instances = MCE.getInstances();
  // console.log(instances);

  instances.forEach( function(instance) {
    let editor = new Editor(instance);
    editor.buildMenu();
  });
}, 2000);
