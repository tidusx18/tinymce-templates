// ==UserScript==
// @name         Canvas Editor HTML Templates
// @version      0.1.4
// @description  Adds two selectbox (dropdown) menus to Canvas TinyMCE editors with pre-defined HTML templates.
// @author       Daniel Victoriano <victoriano518@gmail.com>
// @match        https://fiu.instructure.com/*
// @grant        none
// @run-at       document-idle
// @noframes

// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function DOMInterface () {
  this.__activeDom__ = null;
  this.__parser__ = new DOMParser();
}
/**
  @param {DOM Node} dom - The DOM Node to set as the active DOM Node for applicable functions.
*/
DOMInterface.prototype.setActiveDom = function (dom) {
  this.__activeDom__ = dom;
};

/**
  Sets the active DOM Node to null.
*/
DOMInterface.prototype.clearActiveDom = function () {
  this.__activeDom__ = null;
};


DOMInterface.prototype.useDocument = function () {
  return document;
};

DOMInterface.prototype.stringToDom = function (str) {
  return this.__parser__.parseFromString(str, "text/html");
};

/**********************************
  Set of Mutatable DOM functions
**********************************/

DOMInterface.prototype.addText = function (text, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  domNode.appendChild(document.createTextNode(text));

  return domNode.cloneNode(true);
};

DOMInterface.prototype.replaceText = function (text, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  domNode.innerText = text;

  return domNode.cloneNode(true);
};

/**
  Sets a set of attributes to the DOM Node.
  Part of the set of Mutatable DOM functions.

  @param {Object} attributes - The set of attributes to apply to the DOM Node.
  @param {DOM Node} dom - (Optional) The DOM Node to apply the attributes to.
  @param {boolean} updateActiveDom - (Optional) If this dom should update the active DOM Node.

  @return {DOM Node} - DOM Node with the new attributes.
*/
DOMInterface.prototype.setAttr = function (attributes, dom, updateActiveDom) {
  var attr;
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  for (attr in attributes) {
    domNode.setAttribute(attr, attributes[attr]);
  }

  return domNode.cloneNode(true);
};

DOMInterface.prototype.setStyle = function (styles, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);
  var style;
  var styleStr = '';
  if (!domNode) {
    return null;
  }

  for (style in styles) {
    // styleStr += `${style}: ${styles[style]};`;
    domNode.style[style] = styles[style];
  }
  // console.log(styleStr);
  // domNode.setAttribute('style', styleStr);

  return domNode.cloneNode(true);
};

/**
  Adds the classes to the DOM Node.
  Part of the set of Mutatable DOM functions.

  @param {String[]} classes - Array of CSS classes to apply to the dom.
  @param {DOM Node} dom - (Optional) The DOM Node to apply the attributes to.
  @param {boolean} updateActiveDom - (Optional) If this dom should update the active DOM Node.

  @return {DOM Node} - DOM Node with the new attributes.
*/
DOMInterface.prototype.addClasses = function (classes, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  if (classes instanceof Array) {
    classes.forEach(function (c) {
      domNode.classList.add(c);
    });
  } else {
    domNode.classList.add(classes);
  }
  return domNode.cloneNode(true);
};

DOMInterface.prototype.removeClasses = function (classes, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  if (classes instanceof Array) {
    classes.forEach(function (c) {
      domNode.classList.remove(c);
    });
  } else {
    domNode.classList.remove(classes);
  }
  return domNode.cloneNode(true);
};

DOMInterface.prototype.toggleClasses = function (classes, value, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  if (classes instanceof Array) {
    classes.forEach(function (c) {
      if (value !== null) {
        domNode.classList.toggle(c, value);
      } else {
        domNode.classList.toggle(c);
      }
    });
  } else {
    if (value !== null) {
      domNode.classList.toggle(classes, value);
    } else {
      domNode.classList.toggle(classes);
    }

  }
  return domNode.cloneNode(true);
};

/**
  Gets the DOM Node with the id.
  Part of the set of Mutatable DOM functions.

  @param {String} id - ID of the DOM Node to return.
  @param {DOM Node} dom - (Optional) The DOM Node to apply the attributes to.
  @param {boolean} updateActiveDom - (Optional) If this dom should update the active DOM Node.

  @return {DOM Node}
*/
DOMInterface.prototype.getId = function (id, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  return domNode.getElementById(id);
};

/**
  Gets the children of the DOM Node.
  Part of the set of Mutatable DOM functions.

  @param {String} q - (Optional) Query string. If not provided, then all children are returned.
  @param {DOM Node} dom - (Optional) The DOM Node to apply the attributes to.
  @param {boolean} updateActiveDom - (Optional) If this dom should update the active DOM Node.

  @return: {DOM Node[]}
*/
DOMInterface.prototype.getChildren = function (q, dom, updateActiveDom) {
  var domNode = this.chainDom(dom, updateActiveDom);

  if (!domNode) {
    return null;
  }

  if (q) {
    return toArray(domNode.querySelectorAll(q));
  } else {
    return toArray(domNode.children);
  }
};

/**
  Gets a child of the DOM Node.
  Part of the set of Mutatable DOM functions.

  @param {String} q - (Optional) Query string. If not provided, then all children are returned.
  @param {Int} i - (Optional) index of the child. If not provided, then first child is returned.
  @param {DOM Node} dom - (Optional) The DOM Node to apply the attributes to.
  @param {boolean} updateActiveDom - (Optional) If this dom should update the active DOM Node.
  @return: DOM node
*/
DOMInterface.prototype.getChild = function (q, i, dom, updateActiveDom) {
  var children;
  var index;
  var domNode = this.chainDom(dom, updateActiveDom);
  if (!domNode) {
    return null;
  }

  index = i || 0;
  children = this.getChildren(q, domNode);

  if (index === 0 && (!children || children.length === 0)) {
    return null;
  }
  return children[index];
};

DOMInterface.prototype.deleteChild = function (q, i, dom, updateActiveDom) {
  var children;
  var index;
  var domNode = this.chainDom(dom, updateActiveDom);
  if (!domNode) {
    return null;
  }

  index = i || 0;
  children = this.getChildren(q, domNode);

  if (index === 0 && (!children || children.length === 0)) {
    return null;
  }
  children[index].remove();
  return domNode.cloneNode(true);
};

/**
  @private
  Private helper for the Mutatable DOM functions.

  @param {DOM Node} dom - Passed DOM Node to use.
  @param {boolean} updateActiveDom - If this dom should update the active DOM Node.
*/
DOMInterface.prototype.chainDom = function (dom, updateActiveDom) {
  if (updateActiveDom) {
    this.setActiveDom(dom);
  }

  return dom || this.__activeDom__;
};


/*********************************
  Set of DOM Creation functions
*********************************/


/**
  Builds an SVG DOM Node from an Emmet styled string. See https://emmet.io/ for more details.
  Only supports >, +, and * currently.

  @param {String} emmetString - Emmet styled string.

  @return {DOM Node}
*/
DOMInterface.prototype.makeSvg = function (emmetString) {
  return this.__makeNode__(emmetString, function (node) {
    return document.createElementNS("http://www.w3.org/2000/svg", node);
  });
};

/**
  Builds a DOM Node from an Emmet styled string. See https://emmet.io/ for more details.
  Only supports >, +, and * currently.

  @param {String} emmetString - Emmet styled string.

  @return {DOM Node}
*/
DOMInterface.prototype.makeNode = function (emmetString) {
  return this.__makeNode__(emmetString, function (node) {
    return document.createElement(node);
  });
};

/**
  @private
  Private helper to make DOM Nodes.

  @param {String} emmetString - Emmet styled string.
  @param {function} create - Function to return a DOM Node
*/
DOMInterface.prototype.__makeNode__ = function (emmetString, create) {
  var ops = {
    '>': 1,
    '+': 2,
    //'^',
    '*': 0
  };

  var tokens = tokenize(emmetString);
  // console.log(tokens);
  var opStack = [];
  var nodeStack = [];
  var dom = null;
  while (tokens.length > 0) {
    var t = tokens.shift();
    // console.log(`token: ${t}`);
    var isOp = null;
    var op;
    for (op in ops) {
      if (t === op) {
        isOp = t;
      }
    }
    // Opperator
    if (isOp) {
      if (opStack.length > 0) {
        if (isOp === '*') {
          // Is multiplication op
          // console.log('Multiplying');
          var count = parseInt(tokens.shift());
          var nodes = [];
          var temp = nodeStack.pop();
          var i;
          for (i = 0; i < count; i++) {
            nodes.push(temp.cloneNode(true));
            // nodeStack.push(temp.cloneNode(true));
            // opStack.push('+');
          }
          // nodeStack.push(temp.cloneNode(true));
          nodeStack.push(nodes);
        } else if (opStack.length === 0 || ops[opStack[opStack.length - 1]] <= ops[isOp]) {
          // Peek to see if you can add to op stack
          opStack.push(isOp);
          // console.log(`Adding ${isOp} to opStack`);
        } else {
          // evaluate
          nodeStack.push(this.__evaluateNodeStack__(opStack, nodeStack));
          opStack.push(isOp);
          // console.log(`Adding ${isOp} to opStack post eval`);
          // console.log(`Adding ${nodeStack[nodeStack.length - 1]} to nodeStack`);
        }
      } else {
        opStack.push(isOp);
        // console.log(`Adding ${isOp} to opStack`);
      }
    } else {
      // Node
      var node = t.split('#');
      var id = null;
      var classes = [];
      if (node.length > 1) {
        classes = node[1].split('.');
        id = classes[0];
        classes.shift();
        node = node[0];
      } else {
        classes = node[0].split('.');
        node = classes[0];
        classes.shift();
      }

      // generate node with ID and classes
      // add to node stack
      if (node.includes('{')) {
        var n = nodeStack.pop();
        n.append(this.__makeTextNode__(node));
        this.setActiveDom(n);
      } else {
        this.setActiveDom(create(node));
        if (id) {
          this.setAttr({"id": id});
        }
        if (classes.length > 0) {
          this.addClasses(classes);
        }
      }
      nodeStack.push(this.__activeDom__.cloneNode(true));
      this.clearActiveDom();
      // console.log(`adding ${nodeStack[nodeStack.length - 1]} to nodeStack`);
    }
  }

  return this.__evaluateNodeStack__(opStack, nodeStack);
};

/**
  @private
  Private helper to join DOM Nodes

  @param {String[]} opStack - Stack of opperators
  @param {DOM Node[]} nodeStack - Stack of DOM Nodes

  @return {DOM Node} - The resulting DOM Node after evaluating the stacks.
*/
DOMInterface.prototype.__evaluateNodeStack__ = function (opStack, nodeStack) {
  // console.log('Evaluating stack');
  // console.log(opStack, nodeStack);
  var n1;
  var n2;
  var op;

  while (opStack.length > 0) {
    n1 = nodeStack.pop();
    op = opStack.pop();
    n2 = nodeStack.pop();
    // console.log('n1', n1);
    // console.log(`op: ${op}`);
    // console.log('n2', n2);
    switch (op) {
      case '>':
        if (n2 instanceof Array) {
          // console.log('n2 is array', n1, n2);
          n2 = n2.map(function (item) {
            item.appendChild(n1);
            return item.cloneNode(true);
          });
        } else if (n1 instanceof Array) {
          // console.log('n1 is array', n1, n2);
          var lastChild = n2;
          while (lastChild.children.length > 0) {
            lastChild = lastChild.children[lastChild.children.length - 1];
          }
          n1.forEach(function (item) {
            lastChild.appendChild(item.cloneNode(true));
          });
        } else {
          // console.log('neither are arrays', n1, n2);
          // n2.appendChild(n1);
          var lastChild = n2;
          while (lastChild.children.length > 0) {
            lastChild = lastChild.children[lastChild.children.length - 1];
          }
          // console.log('last child');
          // console.log(lastChild);

          lastChild.append(n1);
        }
        nodeStack.push(n2);
        break;
      case '+':
        // var lastChild = n2;
        // if (lastChild.parentElement) {
        //   console.log('has a parent');
        //   while (lastChild.children.length > 0) {
        //     lastChild = lastChild.children[lastChild.children.length - 1];
        //   }
        //   if (n1 instanceof Array) {
        //     n1.forEach(function (item) {
        //       lastChild.parentElement.appendChild(item);
        //     });
        //   } else {
        //     lastChild.parentElement.appendChild(n1);
        //   }
        //   nodeStack.push(n2);
        // } else {
        //   console.log('no parent');
        //   if (n1 instanceof Array) {
        //     nodeStack.push(n1.push(n2));
        //   } else {
        //     nodeStack.push([n2, n1]);
        //   }
        // }
        if (n2 instanceof Array) {
          if (n1 instanceof Array) {
            n1.forEach(function (item) {
              n2.push(item);
            });
            nodeStack.push(n2);
          } else {
            n2.push(n1);
            nodeStack.push(n2);
          }
        } else if (n1 instanceof Array) {
          n1.unshift(n2);
          nodeStack.push(n1);
        } else {
          nodeStack.push([n2, n1]);
        }
        break;
      case '^':
        break;
      default:
    }
  }

  // console.log('result', nodeStack[nodeStack.length - 1]);
  return nodeStack.pop();
};

DOMInterface.prototype.__makeTextNode__ = function (text) {
  return document.createTextNode(text.substr(1, text.length-2).trim());
};


/********************************
  Set of DOM Utility functions
********************************/


DOMInterface.prototype.getUrl = function (link) {
  if (link) {
    return link.getAttribute('href');
  }
  return null;
};

DOMInterface.prototype.getAttr = function (attr, dom) {
  return dom.getAttribute(attr);
};

/**
  @param {String} url - URL to get the parameters from. If empty: uses current document url.
  @return {Object} - key:value from the parameters.
*/
DOMInterface.prototype.getParameters = function (url) {
  url = url || document.URL;
  var parameters = {};
  var parseParams = url.split('?')[1];
  parseParams = parseParams.split('&');
  parseParams = parseParams.forEach(function (pair) {
    var temp = {};
    var splitPair = pair.split('=');
    temp[splitPair[0]] = splitPair[1];
    parameters = Object.assign({}, temp, parameters);
  });

  return parameters;
};



/****************************
  Set of Helper functions
*****************************/


function tokenize (emmetString) {
  // Handle text spaces later
  var tokens = emmetString.split(' ');
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i].includes('{')) {
      // console.log(`Found starting token ${tokens[i]}`);
      while (tokens.length > i + 1 &&
        !tokens[i].includes('}') &&
        !tokens[i+1].includes('}')) {
          // console.log(`Joining next token ${tokens[i+1]}`);
          tokens[i] = `${tokens[i]} ${tokens.splice(i+1, 1)[0].trim()}`;
          // console.log(`Updated text token ${tokens[i]}`);
      }
      if (tokens.length > i + 1 && !tokens[i].includes('}')) {
        // Add the last } token
        // console.log(`Joining last token ${tokens[i+1]}`);
        tokens[i] = `${tokens[i]} ${tokens.splice(i+1, 1)[0].trim()}`;
      }
      tokens[i] = tokens[i].trim();
    }
  }
  return tokens;
}

function toArray (arrayCollection) {
  var foo = [];
  var i = 0;

  for (; i < arrayCollection.length; i++) {
    foo.push(arrayCollection[i]);
  }

  return foo;
}

/* harmony default export */ __webpack_exports__["a"] = (DOMInterface);


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TinymceInterface() {
}

// Fires event with editor details as editors are rendered (async)
// TinymceInterface.prototype.getInstances = function () {
//   try {
//     return tinyMCE.onAddEditor.add( function(mgr,ed) {
//       ed.onPostRender.add( function(ed, cm) {
//         var event = new CustomEvent('EditorAdded', {'detail': ed});
//         return document.dispatchEvent(event);
//       });
//     });
//   } catch(e) {
//     console.log('error', e);
//   }
// };

TinymceInterface.prototype.getInstances = function () {
  try {
    // console.log(tinyMCE);
    tinymce.on('AddEditor', function(e) {
      // console.log(e);
      // console.log(tinymce.get(e.editor.id).getContent())
      e.editor.on('init', function(editor) {
        // console.log(editor);
        var event = new CustomEvent('EditorAdded', {'detail': editor.target});
        document.dispatchEvent(event);
      });
    });
  } catch(e) {
    console.log('error', e);
  }
};

// Gets the HTML content of editor instance
TinymceInterface.prototype.getContent = function (instance) {
  return instance.getContent();
};

// Sets the HTML content of editor instance
TinymceInterface.prototype.setContent = function (instance, content) {
  instance.setContent(content, {format: 'raw'});
};

// NOTE: Debug undefined error
// TinymceInterface.prototype.setHTML = function (instance, target, content) {
//   instance.DOM.setHTML(target, content);
// };

// Gets the HTML content of second column in editor instance
TinymceInterface.prototype.getColumn2 = function (instance, domId) {
  if ( instance.dom.get(domId) ) {
    return instance.dom.get(domId);
  } else {
    return false;
  }
};

TinymceInterface.prototype.isEmpty = function (instance) {
  var root = instance.dom.getRoot();
  return instance.dom.isEmpty(root);
};

/* harmony default export */ __webpack_exports__["a"] = (TinymceInterface);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconList; });
// regex /title: '[^Style](.+)'/ig

var iconList = { // Use array instead?
    style_1: {
        title: 'Style 1',
        weeklyOverview: {
            title: 'Weekly Overview',
            altText: 'Image of Weekly Overview Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Read.png',
            defaultHTML: `
          ​<p><strong>Overview:</strong></p>
          <p><strong>Objective:</strong></p>
          <p><strong>To-do List:</strong></p>
          <p><strong>Module available from</strong></p>
        `,
            customStyles: `border: 9px solid #0f2089; width: 889px; height: auto; padding: 20px 0 0 20px;`
        },
        discussion: {
            title: 'Discussion',
            altText: 'Image of Discussion Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Discuss.png',
            defaultHTML: ``
        },
        information: {
            title: 'Information',
            altText: 'Image of Information | Read Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Read.png',
            defaultHTML: ``
        },
        assessment: {
            title: 'Assessment',
            altText: 'Image of Assessment Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Submit.png',
            defaultHTML: `<p>Select the link above or on the "Assessments" portion of the course menu to the left of the screen in order to complete your assessment by its due date noted in the syllabus.</p>`
        },
        assignment: {
            title: 'Assignment',
            altText: 'Image of Assignment Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Review.png',
            defaultHTML: `<p>Select the link above or on the "Assignment Dropbox" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
        },
        adobeconnect: {
            title: 'Adobe Connect',
            altText: 'Image of Adobe Connect Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Watch.png',
            defaultHTML: `<p>Select the link above to be directed to the “<strong>Adobe Connect</strong>” section of the course. There you will have access to the scheduled Adobe Connect session.</p>`
        },
        pearson: {
            title: 'Pearson',
            altText: 'Image of Pearson Resources Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Pearson%20MyComLab.png',
            defaultHTML: ``
        },
        youseeu: {
            title: 'YouSeeU Generic Assignment',
            altText: 'Image of YouSeeU Assignment icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/af6e6b24-6633-467a-a4ed-4a85ecaa1764/source.png',
            defaultHTML: `
          <p>The link above will take you to&nbsp;YouSeeU.</p>
          <p>Assignments: You will have multiple module assignments throughout the semester. Assignments can include&nbsp;various&nbsp;short answer. The assignments open at 5:00 am on the assigned day. You can enter the assignment as often as you wish during the availability period. These assignments are all due by 11:55 pm on the assigned day.</p>
          <p>For technical difficulties with&nbsp;YouSeeU&nbsp;please go to&nbsp;<a href="http://YouSeeU.com/support" target="_blank">YouSeeU&nbsp;Technical Support</a>.</p>
          `
        },
        youseeu: {
            title: 'YouSeeU Blank Content',
            altText: 'Image of YouSeeU Assignment icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/af6e6b24-6633-467a-a4ed-4a85ecaa1764/source.png',
            defaultHTML: ``
        }
    },
    style_2: {
        title: 'Style 2',
        week1: {
            title: 'Week 1',
            altText: 'Image of Week 1 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%201.jpg',
            defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
        },
        week2: {
            title: 'Week 2',
            altText: 'Image of Week 2 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%202.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week3: {
            title: 'Week 3',
            altText: 'Image of Week 3 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%203.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week4: {
            title: 'Week 4',
            altText: 'Image of Week 4 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%204.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week5: {
            title: 'Week 5',
            altText: 'Image of Week 5 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%205.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week6: {
            title: 'Week 6',
            altText: 'Image of Week 6 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%206.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week7: {
            title: 'Week 7',
            altText: 'Image of Week 7 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%207.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week8: {
            title: 'Week 8',
            altText: 'Image of Week 8 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%208.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week9: {
            title: 'Week 9',
            altText: 'Image of Week 9 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%209.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week10: {
            title: 'Week 10',
            altText: 'Image of Week 10 Content Icon',
            iconSrc: 'http://vivomedia.fiu.edu/565c6ef653560/Week%2010.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week11: {
            title: 'Week 11',
            altText: 'Image of Week 11 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2011.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week12: {
            title: 'Week 12',
            altText: 'Image of Week 12 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2012.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week13: {
            title: 'Week 13',
            altText: 'Image of Week 13 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2013.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week14: {
            title: 'Week 14',
            altText: 'Image of Week 14 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2014.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week15: {
            title: 'Week 15',
            altText: 'Image of Week 15 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2015.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        week16: {
            title: 'Week 16',
            altText: 'Image of Week 16 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2016.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        }
    },
    style_3: {
        title: 'Style 3',
        module1: {
            title: 'Module 1',
            altText: 'Image of Module 1 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module01_speech_bubble.jpg',
            defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
        },
        module2: {
            title: 'Module 2',
            altText: 'Image of Module 2 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module02_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module3: {
            title: 'Module 3',
            altText: 'Image of Module 3 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module03_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module4: {
            title: 'Module 4',
            altText: 'Image of Module 4 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module04_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module5: {
            title: 'Module 5',
            altText: 'Image of Module 5 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module05_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module6: {
            title: 'Module 6',
            altText: 'Image of Module 6 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module06_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module7: {
            title: 'Module 7',
            altText: 'Image of Module 7 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module07_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module8: {
            title: 'Module 8',
            altText: 'Image of Module 8 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module08_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module9: {
            title: 'Module 9',
            altText: 'Image of Module 9 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module09_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module10: {
            title: 'Module 10',
            altText: 'Image of Module 10 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module10_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module11: {
            title: 'Module 11',
            altText: 'Image of Module 11 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module11_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module12: {
            title: 'Module 12',
            altText: 'Image of Module 12 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module12_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module13: {
            title: 'Module 13',
            altText: 'Image of Module 13 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module13_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module14: {
            title: 'Module 14',
            altText: 'Image of Module 14 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module14_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module15: {
            title: 'Module 15',
            altText: 'Image of Module 15 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module15_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        },
        module16: {
            title: 'Module 16',
            altText: 'Image of Module 16 Content Icon',
            iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Module16_speech_bubble.jpg',
            defaultHTML: `
      <p><strong>Module available from</strong></p>
      <p><b>Topics Covered</b>:</p>`
        }
    }

};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_TinyMCE__ = __webpack_require__(20);


// import getFromStorage from 'Storage/get';
// import setToStorage from 'Storage/set';

var DOM = new __WEBPACK_IMPORTED_MODULE_0_dom__["a" /* default */](); // NOTE: Should tinyMCE inherit DOMInterface?
var MCE = new __WEBPACK_IMPORTED_MODULE_1_TinyMCE__["a" /* default */](); // NOTE: Should TextEditor inherit TinyMCE?



function TextEditor(tinymceInstance) {
  this.instance = tinymceInstance;
  this.editorId = escapeCharacters(tinymceInstance.id);
  // this.tableRowNode = DOM.getChild(`.mce-first[role="toolbar"] .mce-btn-group > div`, 0, this.instance.getContainer());
  this.tableRowNode = DOM.getChild(`#mceu_40-body`, 0, this.instance.getContainer());
  this.contentColumnId = `${this.editorId}`;
  // console.log(tinymce.get(this.instance.id).contentDocument);
  // NOTE: Add constants/dictionary?
}

// NOTE: Make a "Menu building" object/class?
TextEditor.prototype.buildMenu = function (iconsList) {
  var topLevel = DOM.makeNode( this.__buildToplevel__(iconsList) );
  DOM.setStyle({ // NOTE: Make reusable "Styles" constants?
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
    setToStorage('topLevelSelect', topLevelSelect.selectedIndex);
  });

  submenuSelects.forEach( function(subMenu) {
    var select = DOM.getChild(`#${subMenu.id} select`, 0, this.tableRowNode);
    select.addEventListener('change', function() {
      var styleOption = topLevelSelect.item(topLevelSelect.selectedIndex).innerText;
      var iconTypeOption = select.item(select.selectedIndex).innerText;
      var iconTypeObject =  that.__searchObject__(styleObject, iconTypeOption);
      that.__setHtml__( iconTypeObject );
      that.__resetSelectMenu__(this);
    });
  }, this);

  setSelection('topLevelSelect', topLevel.querySelector('select'));
};

TextEditor.prototype.__buildToplevel__ = function (optionsList) {
  var emmetString = 'div#main-style-select.mce-widget.mce-btn > select > option {Select a Style}';
  for (var item in optionsList) { // First level
    if ( typeof optionsList[item] === "object" ) {
      emmetString += ` + option {${optionsList[item].title}}`; // Note blank space at start of String
    }
  }
  return emmetString;
};

TextEditor.prototype.__buildSublevels__ = function (optionsList) {
  var emmetStringList = [];
  for (var item in optionsList) { // First level
    var emmetString = `div#${item}-select.tinymce-menu.mce-widget.mce-btn > select > option {Select an Icon}`;
    if ( typeof optionsList[item] === "object" ) {
      for (var subItem in optionsList[item]) { // Second level
        if ( typeof optionsList[item][subItem] === "object" ) {
          emmetString += ` + option {${optionsList[item][subItem].title}}`; // Note blank space at start of String
        }
      }
    }
    emmetStringList.push(emmetString);
  }
  return emmetStringList;
};

// NOTE: Return the appended node for reference?
TextEditor.prototype.__addNode__ = function (parentNode, node) {
  // var lastChild = parentNode.lastChild.cloneNode(true);
  // parentNode.removeChild(parentNode.lastChild);
  parentNode.appendChild(node);
  console.log('Select element added with ID: ', node.id);
  // parentNode.appendChild(lastChild);
};

// NOTE: Refactor toggleDisplayedMenu to be more reusable? (i.e. can be applied to any menu element)
TextEditor.prototype.toggleDisplayedMenu = function (target, menus) {
  for (var menu of menus) {
    var select = DOM.getChild(`#${menu.id} select`, 0, this.tableRowNode);
    if ( menu.id.includes( target.replace('Style ', '') ) ) { // NOTE: Determine better condition?
      DOM.setStyle({display: 'block'}, select);
    } else {
      DOM.setStyle({display: 'none'}, select);
    }
  }
};

// NOTE: Consolidate repetative vars/simplify if logic
TextEditor.prototype.__setHtml__ = function (content) {
  var targetId = `${this.contentColumnId}_col2`;
  var uniqueId = `${this.contentColumnId}`;
  var currentContent = MCE.getColumn2(this.instance, targetId);

  if ( currentContent ) {
    console.log('Adding template. Col 2 exists.', currentContent);
    if (getFromStorage('lastContent').trim() === currentContent.innerHTML.trim()) {
        currentContent = content.defaultHTML;
        setToStorage('lastContent', currentContent);
    } else {
      currentContent = currentContent.innerHTML;
    }
  }
  else if ( !currentContent && !MCE.isEmpty(this.instance) ) {
    console.log('Adding template. Col 2 does not exist, but there is content.');
    currentContent = MCE.getContent(this.instance);
  }
  else if ( MCE.isEmpty(this.instance) ) {
    console.log('Adding template. Editor is empty.');
    currentContent = content.defaultHTML;
    setToStorage('lastContent', currentContent);
  }

  var htmlTemplate =
  `<div style="display: flex;"">
    <div id="${uniqueId}_col1" style="min-width: 100px; max-width: 100px; padding: 0px 15px 0px 0px;">
      <img alt="${content.altText}" style="width: 100px;" src="${content.iconSrc}" />
    </div>
    <div style="display: flex;">
      <div id="${uniqueId}_col2">
        <p>some text</p>
        ${currentContent}
      </div>
    </div>
  </div>`;

  MCE.setContent(this.instance, htmlTemplate);
  var targetNode = MCE.getColumn2(this.instance, targetId);
  targetNode.innerHTML = currentContent;
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

function setSelection(key, selectBox) {
  if( getFromStorage(key) ) {
    selectBox.selectedIndex = getFromStorage(key);
    selectBox.dispatchEvent(new Event('change'));
  }
}

function setToStorage (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  // GM_setValue(key, value);
}

function getFromStorage (key) {
  return JSON.parse(localStorage.getItem(key));
  // console.log('get: ', key,GM_getValue(key, null));
  // return JSON.parse(GM_getValue(key, null));
  // return GM_getValue(key, null);
}



/* harmony default export */ __webpack_exports__["a"] = (TextEditor);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_TinyMCE__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Editor__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_TinyMCE_IconTemplates__ = __webpack_require__(22);




var MCE = new __WEBPACK_IMPORTED_MODULE_0_TinyMCE__["a" /* default */]();
var icons = __WEBPACK_IMPORTED_MODULE_2_TinyMCE_IconTemplates__["a" /* iconList */];

function init(instance) {
  var editor = new __WEBPACK_IMPORTED_MODULE_1_Editor__["a" /* default */](instance);
  editor.buildMenu(icons);
}

window.addEventListener('load', function(event) {
  // console.log('TinyMCE Loaded: ', tinymce);
  MCE.getInstances();
});

document.addEventListener('EditorAdded', function(event) {
  // console.log(event);
  var editor = event.detail;
  init(editor);
});

/***/ })

/******/ });
