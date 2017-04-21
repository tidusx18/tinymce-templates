import DOMInterface from './Dom';
import tinyMCE from './TinyMCE';

var DOM = new DOMInterface();

function TextEditor(tinymceInstance) {
  this.editorId = tinymceInstance.id;
  this.tableRowNode = DOM.getChild(`#${this.editorId}_toolbar2 tr`, 0, document);
  // this.variableColumnId = 'variableContentColumn';
}

// NOTE: Make a "Menu building" class that inherits Editor??
TextEditor.prototype.buildMenu = function (iconsList) {
  var topLevel = DOM.makeNode( this.__buildToplevel__(iconsList) );
  DOM.setStyle({ // NOTE: Bring out to pre-defined "Styles" object?? Less clutter...
    width: '120px',
    'max-width': '120px'
    }, topLevel.querySelector("select"));
  this.__appendNode__(this.tableRowNode, topLevel);

  var subLevels = this.__buildSublevels__(iconsList);
  subLevels.forEach( function(sublevel) {
    var subMenu = DOM.makeNode(sublevel)
    DOM.setStyle({
      width: '120px',
      'max-width': '120px',
      display:'none'
      }, subMenu.querySelector("select"));
    this.__appendNode__(this.tableRowNode, subMenu);
  }, this);

  // Add event listeners NOTE: Clean this up later
  var topLevelSelect = DOM.getChild('#main-style-select select', 0, this.tableRowNode);
  var menuList = DOM.getChildren('.tinymce-menu', this.tableRowNode);
  var that = this; // NOTE: Better way to pass 'this'?
  topLevelSelect.addEventListener('change', function() {
    var selectedOptionText = topLevelSelect.item(topLevelSelect.selectedIndex).innerText;
    console.log(selectedOptionText);
    that.menuDisplay('display', selectedOptionText, menuList);
  });
};

// NOTE: Return the appended node for easier reference in other parts of code?
TextEditor.prototype.__appendNode__ = function (parentNode, node) {
  var lastChild = parentNode.lastChild.cloneNode(true);
  parentNode.removeChild(parentNode.lastChild);
  parentNode.appendChild(node);
  parentNode.appendChild(lastChild);
};

TextEditor.prototype.__buildToplevel__ = function (enumerableList) {
  var emmetString = 'td#main-style-select.tinymce-menu > select.mceNativeListBox > option {Select a Style}';
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
    var emmetString = `td#${item}-select.tinymce-menu > select.mceNativeListBox > option {Select an Icon}`;
    if ( typeof enumerableList[item] === "object" ) {
      for (var subItem in enumerableList[item]) { // Second level
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

TextEditor.prototype.menuDisplay = function (displayOption, target, nodeList) {
  console.log(nodeList);
  for (var node of nodeList) {
    if ( node.id.includes( target.replace('Style ', '') ) ) { // NOTE: Use better condition
      var nodeSelect = DOM.getChild(`#${node.id} select`, 0, this.tableRowNode);
      console.log('BEFORE: ' + nodeSelect);
      DOM.setStyle({display: 'display'}, nodeSelect);
      console.log('AFTER: ' + nodeSelect);
    } else {
      // DOM.setStyle({display: none}, node);
    }
  }
};

TextEditor.prototype.addContent = function () {
  // Adds HTML template to tinymce
};

export default TextEditor;
