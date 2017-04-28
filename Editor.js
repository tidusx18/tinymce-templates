import DOMInterface from './Dom';
import TinymceInterface from './TinyMCE';

var DOM = new DOMInterface(); // NOTE: Should tinyMCE just inherit DOMInterface?
var MCE = new TinymceInterface(); // NOTE: Should TextEditor just inherit TinyMCE?


function TextEditor(tinymceInstance) {
  this.instance = tinymceInstance;
  this.editorId = escapeCharacters(tinymceInstance.id);
  this.tableRowNode = DOM.getChild(`#${this.editorId}_toolbar2 tr`, 0, document);
  // this.variableColumnId = 'variableContentColumn';
  // NOTE: Add constants/disctionary?
}

// NOTE: Make a "Menu building" object/class? Separate this more granular functions?
TextEditor.prototype.buildMenu = function (iconsList) {
  var topLevel = DOM.makeNode( this.__buildToplevel__(iconsList) );
  DOM.setStyle({ // NOTE: Make reusable "Styles" object?
    width: '120px',
    'max-width': '120px'
    }, topLevel.querySelector("select"));
  this.__addNode__(this.tableRowNode, topLevel);

  var subLevels = this.__buildSublevels__(iconsList);
  subLevels.forEach( function(sublevel) {
    var subMenu = DOM.makeNode(sublevel)
    DOM.setStyle({
      width: '120px',
      'max-width': '120px',
      display:'none'
      }, subMenu.querySelector("select"));
    this.__addNode__(this.tableRowNode, subMenu);
  }, this);

  // Add event listeners
  // NOTE: Clean up event listeners (naming, reuse, etc)
  var that = this; // NOTE: Better way to pass 'this'?
  var topLevelSelect = DOM.getChild('#main-style-select select', 0, this.tableRowNode);
  var submenuSelects = DOM.getChildren('.tinymce-menu', this.tableRowNode);
  var styleObject = {};

  // NOTE: Make event listener functions?
  topLevelSelect.addEventListener('change', function() {
    var topLevelSelectedOption = topLevelSelect.item(topLevelSelect.selectedIndex).innerText;
    styleObject = that.__searchObject__(iconsList, topLevelSelectedOption);
    that.toggleDisplayedMenu(topLevelSelectedOption, submenuSelects);
    // NOTE: Save selection
  });

  submenuSelects.forEach( function(subMenu) {
    var select = DOM.getChild(`#${subMenu.id} select`, 0, this.tableRowNode);
    select.addEventListener('change', function() {
      var styleOption = topLevelSelect.item(topLevelSelect.selectedIndex).innerText;
      var iconTypeOption = select.item(select.selectedIndex).innerText;
      var iconTypeObject =  that.__searchObject__(styleObject, iconTypeOption);
      that.__setHtml__( iconTypeObject.html ); //NOTE: Refactor with makeNode?
      that.__resetSelectMenu__(this);
    });
  }, this);
};

TextEditor.prototype.__buildToplevel__ = function (enumerableList) {
  var emmetString = 'td#main-style-select > select.mceNativeListBox > option {Select a Style}';
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
          emmetString += ` + option {${enumerableList[item][subItem].title}}`; // Note blank space at start of String
        }
      }
    }
    emmetStringList.push(emmetString);
  }
  return emmetStringList;
};

// NOTE: Return the appended node for reference?
TextEditor.prototype.__addNode__ = function (parentNode, node) {
  var lastChild = parentNode.lastChild.cloneNode(true);
  parentNode.removeChild(parentNode.lastChild);
  parentNode.appendChild(node);
  parentNode.appendChild(lastChild);
};

// NOTE: Refactor toggleDisplayedMenu to be more reusable? (i.e. can be applied to any menu element)
TextEditor.prototype.toggleDisplayedMenu = function (target, nodeList) {
  for (var node of nodeList) {
    var select = DOM.getChild(`#${node.id} select`, 0, this.tableRowNode);
    if ( node.id.includes( target.replace('Style ', '') ) ) { // NOTE: Determine better condition?
      DOM.setStyle({display: 'block'}, select);
    } else {
      DOM.setStyle({display: 'none'}, select);
    }
  }
};

// NOTE: Consolidate repetative vars/simplify if logic
TextEditor.prototype.__setHtml__ = function (content) {
  var targetId = 'template-column2';
  var currentContent = '';
  if ( MCE.getColumn2(this.instance, targetId) ) {
    currentContent = MCE.getColumn2(this.instance, targetId).innerHTML;
    console.log('currentContent: ', currentContent);
    MCE.setContent(this.instance, content);
    var targetNode = MCE.getColumn2(this.instance, targetId);
    // MCE.setHTML(this.instance, targetNode, currentContent); // NOTE: Debug undefined error
    targetNode.innerHTML = currentContent;
  } else {
    currentContent = MCE.getContent(this.instance);
    console.log('No existing second column.');
    MCE.setContent(this.instance, content);
    var targetNode = MCE.getColumn2(this.instance, targetId);
    // MCE.setHTML(this.instance, targetNode, currentContent);
    targetNode.innerHTML = currentContent;
  }
};

TextEditor.prototype.__searchObject__ = function (object, queryTerm) {
  for (var key in object) {
    var value = object[key];
    if (typeof value === 'Object' && value.title !== queryTerm) {
      this.searchObject(value);
    }
    if (value.title === queryTerm) {
      return value;
    }
  }
};

TextEditor.prototype.__getMenus__ = function () {
  // Gets menu elements that were added to tinymce
};

TextEditor.prototype.__setEventListener__ = function () { // NOTE: Makes sense as function?
  // Adds an event listenser to elements in tinymce
};

TextEditor.prototype.__resetSelectMenu__ = function (eventOriginNode) {
  // Resets a select menu to display the first/default option
  eventOriginNode.selectedIndex = 0;
};

TextEditor.prototype.__saveSelectedOption__ = function () {
  // Stores the main select boxe's selection. GM local storage?
};

TextEditor.prototype.sample = function () {
  //
};

/**
 * Helper functions
 */
 function escapeCharacters(string) {
   var newString = CSS.escape(string);

  //  var charactersToEscape= {
  //    // '|\.': '\\.', NOTE: Syntax to include '.' here instead of in separate if statement?
  //    '/': '\\/',
  //    '"': '\\"',
  //    "'": "\\'"
  //  };

  //  if (newString.includes('\.')) {
  //    newString = newString.replace( new RegExp(/[.]/, 'g'), '\\.');
  //  }
   //
  //  for (char in charactersToEscape) {
  //    if ( newString.includes(char) ) {
  //      console.log(char);
  //      newString = newString.replace(new RegExp(char, 'g'), charactersToEscape[char]);
  //    }
  //  }

   return newString;
 }

export default TextEditor;
