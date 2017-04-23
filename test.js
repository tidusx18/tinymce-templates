import TinymceInterface from './TinyMCE';
import Editor from './Editor';
import { iconList } from './Icons';

setTimeout(function() {
  var MCE = new TinymceInterface();
  var instances = MCE.getInstances();
  var icons = iconList;
  // console.log(instances);

  instances.forEach( function(instance) {
    let editor = new Editor(instance);
    console.log(editor);
    editor.buildMenu(icons);
    // editor.setEventListener();
  });


}, 2000);
