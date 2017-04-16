function TinymceInterface() {
  // this.tinyMCE = tinyMCE;
}

// Returns array of editor instances
TinymceInterface.prototype.getInstances = function () {
  return tinyMCE.EditorManager.editors;
};

// Gets the HTML content of editor instance
TinymceInterface.prototype.getContent = function (instance) {
  instance.getContent();
};

// Sets the HTML content of editor instance
TinymceInterface.prototype.setContent = function (instance, content) {
  instance.setContent(content);
};

// export default TinymceInterface;

export default TinymceInterface;
