import Tinymce from './TinyMCE';
import Editor from './Editor';
import { iconList } from './Icons';

setTimeout(function() {
  var MCE = new Tinymce();
  var instances = MCE.getInstances();
  var icons = iconList;

  instances.forEach( function(instance) {
    let editor = new Editor(instance);
    editor.buildMenu(icons);
    // editor.setEventListener();
  });


}, 2000);
