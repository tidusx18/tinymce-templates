import DOMInterface from './Dom';
import tinyMCE from './TinyMCE';
import { iconList } from './Icons';

var DOM = new DOMInterface();
var icons = iconList;

function TextEditor(tinymceInstance) {
  this.editorId = tinymceInstance.id;
  this.tableRowNode = DOM.getChild(`#${this.editorId}_toolbar2 tr`, null, document, null);
  // this.variableColumnId = 'variableContentColumn';
}

TextEditor.prototype.buildMenu = function () {
  console.log(icons);
  console.log( this.__buildToplevel__(icons) );
  console.log( this.__buildSublevels__(icons) );
  var topLevel = DOM.makeNode( this.__buildToplevel__(icons) );
  this.__appendNode__(this.tableRowNode, topLevel);

  var subLevels = this.__buildSublevels__(icons);
  subLevels.forEach( function(sublevel) {
    var subMenu = DOM.makeNode(sublevel)
    this.__appendNode__(this.tableRowNode, subMenu);
  }, this);
};

TextEditor.prototype.__appendNode__ = function (parentNode, node) {
  var lastChild = parentNode.lastChild.cloneNode(true);
  parentNode.removeChild(parentNode.lastChild);
  parentNode.appendChild(node);
  parentNode.appendChild(lastChild);
};

// TextEditor.prototype.__buildEmmetString__ = function (enumerableList, level) {
//   return level(enumerableList);
// };

TextEditor.prototype.__buildToplevel__ = function (enumerableList) {
  var emmetString = 'td > select > option {Select a Style}';
  for (var item in enumerableList) { // First level
    if ( typeof enumerableList[item] === "object" ) {
      emmetString += ` + option {${enumerableList[item].title}}`; // Note blank space at start of String
    }
  }
  return emmetString;
};

TextEditor.prototype.__buildSublevels__ = function (enumerableList) {
  var emmetStringList = [];
  for (var item in enumerableList) { // First level
    var emmetString = 'td > select > option {Select an Icon}';
    if ( typeof enumerableList[item] === "object" ) {
      for (var subItem in enumerableList[item]) { // Second level
        console.log('enumerableList[item]: ' + enumerableList[item]);
        console.log('enumerableList[subItem]: ' + enumerableList[subItem]);
        console.log('enumerableList[item][subItem]: ' + enumerableList[item][subItem]);
        // console.log('enumerableList[item][subItem][iconTypes]: ' + enumerableList[item][subItem][iconTypes]);
        if ( typeof enumerableList[item][subItem] === "object" ) {
          console.log(subItem);
          emmetString += ` + option {${enumerableList[item][subItem].title}}`; // Note blank space at start of String
        }
      }
    }
    emmetStringList.push(emmetString);
  }
  return emmetStringList;
};

TextEditor.prototype.addContent = function () {
  // Adds HTML template to tinymce
};

export default TextEditor;
