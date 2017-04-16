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
  console.log(this.__buildEmmetString__(icons, this.__buildToplevel__));
  console.log(this.__buildEmmetString__(icons, this.__buildSublevels__));
  // var topLevel = DOM.makeNode( this.__buildEmmetString__(icons, this.__buildToplevel__) );
  // this.__appendNode__(this.tableRowNode, topLevel);
  //
  // var subLevels = this.__buildEmmetString__(icons, this.__buildSublevels__);
  // subLevels.forEach(sublevel) {
  //   var subMenu = DOM.makeNode(sublevel)
  //   this.__appendNode__(this.tableRowNode, subMenu);
  // }
};

TextEditor.prototype.__appendNode__ = function (parentNode, node) {
  var lastChild = parentNode.lastChild.cloneNode();
  parentNode.removeChild(parentNode.lastChild);
  parentNode.appendChild(node);
  parentNode.appendChild(lastChild);
};

TextEditor.prototype.__buildEmmetString__ = function (enumerableList, level) {
  return this.level(enumerableList);
};

TextEditor.prototype.__buildToplevel__ = function (enumerableList) {
  var emmetString = 'td > select > option {Select a Style}';
  for (var item in enumerableList) { // First level
    if ( enumerableList.hasOwnProperty(item) && typeOf(item) == "object" ) {
      emmetString += ` + option {${item.title}}`; // Note blank space at start of String
    }
  }
  return emmetString;
};

TextEditor.prototype.__buildSublevels__ = function (enumerableList) {
  var emmetStringList = [];
  for (var item in enumerableList) { // First level
    var emmetString = 'td > select > option {Select an Icon}';
    if ( enumerableList.hasOwnProperty(item) && typeOf(item) == "object" ) {
      for (subItem in item) { // Second level
        if ( enumerableList.hasOwnProperty(item) && typeOf(item) == "object" ) {
          emmetString += ` + option {${subItem.title}}`; // Note blank space at start of String
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
