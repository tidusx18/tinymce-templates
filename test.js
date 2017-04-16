import Tinymce from './TinyMCE';
import Editor from './Editor';

var MCE = new Tinymce();

var instances = MCE.getInstances();
// console.log(instances);

instances.forEach( function(instance) {
  let editor = new Editor(instance);
  editor.buildMenu();
});
