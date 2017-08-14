// ==UserScript==
// @name         Blackboard Editor HTML Templates
// @namespace    https://github.com/redice44
// @supportURL   https://github.com/redice44/bb-util-scripts/issues
// @version      0.1.1
// @description  Adds two selectbox (dropdown) menus to all Blackboard TinyMCE editors with pre-defined HTML templates.
// @author       Daniel Victoriano <victoriano518@gmail.com>
// @match        https://fiu.blackboard.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-body
// ==/UserScript==
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TinymceInterface() {
}

// Fires event with editor details as editors are rendered (async)
TinymceInterface.prototype.getInstances = function () {
  console.log('getInstances called');
  var foo = unsafeWindow.tinyMCE.onAddEditor;
  console.log('worked afer foo: ', foo);
  foo.add( function(mgr,ed) {
    console.log('onAddEditor event fired: ', mgr, ed);
            ed.onPostRender.add( function(ed, cm) {
              console.log('onPostRender event fired: ', mgr, ed);
              var event = new CustomEvent('EditorAdded', {'detail': ed});
              return document.dispatchEvent(event);
            });
          }, window);
  return foo;
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconList; });
var iconList = { // Select array instead?
    style_1: {
      title: 'Style 1',
      welcomeItem: {
        title: 'Welcome Item',
        altText: 'Welcome to the Course',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/8eb709d6-606d-433b-a489-05790af32c1d/source.jpg',
        defaultHTML: `
          <p>My name is <strong>Professor NAME?</strong> and I will be your instructor for this fully online course. I am excited about the opportunity to work with you this semester. Please take a moment to review the information below.</p>
          <ul>
          <li>Learn How to <a href="http://online.fiu.edu/app/webroot/html/blackboardlearn/mastertemplate/getting_started/" target="_blank">Get Started in your Online Course with FIUonline</a>.</li>
          </ul>
          <p>Please review the following:</p>
          <ul>
          <li>Review " <a alt="" target="_blank" href="https://fiu.blackboard.com/bbcswebdav/pid-6676583-dt-content-rid-67289110_1/xid-67289110_1">How to Get Started</a> " in this online course.</li>
          <li>View my <a alt="" target="_blank" href="https://fiu.blackboard.com/bbcswebdav/pid-6676583-dt-content-rid-67289112_1/xid-67289112_1">welcome message</a> </li>
          <li>Review your syllabus </li>
          <li>Review <a alt="" target="_blank" href="https://fiu.blackboard.com/bbcswebdav/pid-6676583-dt-content-rid-67289109_1/xid-67289109_1">Course FAQ</a> </li>
          <li>MyComLab Course ID:</li>
          <li><a alt="" target="_blank" href="https://fiu.blackboard.com/bbcswebdav/pid-6676583-dt-content-rid-67289111_1/xid-67289111_1">Pearson Getting Started Document</a> </li>
          <li>Review FIU's policy on <a href="http://online.fiu.edu/faculty/resources/plagiarism" title="Link" target="_blank" style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-weight: inherit; font-style: inherit; font-family: inherit; font-size: 13px; color: #00507a; text-decoration: underline;">Plagiarism</a></li>
          <li>Complete the Student Satisfaction Survey</li>
          <li>Review Assignment Rubrics</li>
          </ul>
          <p><span style="font-size: 13px;">Unfortunately, there is no Temporary Access to the eBook. You must purchase the eBook in order to access your material prior to the posted due dates. We apologize for the inconvenience. Thank you. </span><strong>Next: Proceed to sign the Student Contract for access to the scheduled course modules.</strong></p>`,
        customStyles: `width: 700px; height: auto; border: 10px solid #2a4d76; padding: 50px; background-image: url('https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/ComArts-Bac_v2B.jpg');`
      },
      weeklyOverview: {
        title: 'Weekly Overview',
        altText: 'Weekly Overview',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Read.png',
        defaultHTML: `
          ​<p><strong>Overview:</strong></p>
          <p><strong>Objective:</strong></p>
          <p><strong>To-do List:</strong></p>
          <p><strong>Module available from</strong></p>
        `,
        customStyles: `border: 9px solid #0f2089; width: 889px; height: auto; padding: 20px 0 0 20px;`
      },
      weeklyFolders: {
        title: 'Weekly Folders',
        altText: 'Weekly Folders',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Complete.png',
        defaultHTML: `
          <p style="margin-bottom: 1em;">This folder contains the scheduled <strong>"Course Modules"</strong> organized into weekly folders. </p>
          <ul>
          <li style="margin-bottom: 1em;"><strong>Modules 1 - 15</strong></li>
          </ul>`
      },
      week1: {
        title: 'Week 1',
        altText: 'Week 1 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%201.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week2: {
        title: 'Week 2',
        altText: 'Week 2 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%202.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week3: {
        title: 'Week 3',
        altText: 'Week 4 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%203.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week4: {
        title: 'Week 4',
        altText: 'Week 4 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%204.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week5: {
        title: 'Week 5',
        altText: 'Week 5 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%205.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week6: {
        title: 'Week 6',
        altText: 'Week 6 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%206.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week7: {
        title: 'Week 7',
        altText: 'Week 7 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%207.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week8: {
        title: 'Week 8',
        altText: 'Week 8 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%208.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week9: {
        title: 'Week 9',
        altText: 'Week 9 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%209.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week10: {
        title: 'Week 10',
        altText: 'Week 10 Content',
        iconSrc: 'http://vivomedia.fiu.edu/565c6ef653560/Week%2010.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week11: {
        title: 'Week 11',
        altText: 'Week 11 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2011.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week12: {
        title: 'Week 12',
        altText: 'Week 12 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2012.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week13: {
        title: 'Week 13',
        altText: 'Week 13 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2013.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week14: {
        title: 'Week 14',
        altText: 'Week 14 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2014.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week15: {
        title: 'Week 15',
        altText: 'Week 15 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2015.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      week16: {
        title: 'Week 16',
        altText: 'Week 16 Content',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Week%2016.jpg',
        defaultHTML: `
          <p><strong>Module available from</strong></p>
          <p><b>Topics Covered</b>:</p>`
      },
      assignmentInstructions: {
        title: 'Assignment Instructions',
        altText: 'Review the Assignment Instructions',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Review.png',
        defaultHTML: `
          <p><strong>Important notice regarding your assignments (please read).</strong></p>
          <p><strong>I) Weekly Assignments (Blackboard)</strong></p>
          <p>Assignments will be due on the following dates:</p>
          <p><strong>II) Weekly Assignments (Pearson MycomLab)</strong></p>
          <p>Assignments will be due on the following dates:</p>
          <p><strong>IMPORTANT:</strong></p>
          Access and review the&nbsp;<a href="https://fiu.blackboard.com/bbcswebdav/pid-6676598-dt-content-rid-67289090_1/xid-67289090_1" target="_blank">Mycomlab instructions</a>&nbsp;for this course. It is strongly recommended that you take the Practice quiz before each attempt to confirm that the quiz tool is working properly with your browser. For technical difficulties with MyComLab please go to&nbsp;<a title="Pearson 24/7 Technical Support" href="http://247pearsoned.custhelp.com/" target="_blank">Pearson 24/7 Technical Support</a>.
          <p>Once you begin your assessment(s) the following message will populate&nbsp;<em>"Force Completion: This Test can be saved and resumed later"</em>. Please note that you<br /> are receiving this message in&nbsp;<strong>error</strong>. All assessments&nbsp;<strong>MUST</strong>&nbsp;be completed within&nbsp;<strong>ONE</strong>&nbsp;sitting. Assessments&nbsp;<strong>CANNOT</strong>&nbsp;be saved and resumed at a later<br /> day/time. If you encounter any technical difficulties, please contact&nbsp;<a title="FIU Online Support Services" href="http://online.fiu.edu/supportservices" target="_blank">FIU Online Support Services</a>.<br /> <br /> <strong>System Maintenance Hours:</strong><br /> <br /> System maintenance is performed weekly between the hours of 11:59 PM on Friday night through 5:00 AM (EST) on Saturday morning. Please do not<br /> attempt any quiz/exam during these hours. We thank you for your patience.</p>
          <p>Almost every household has an unsolved Rubiks Cube but you can esily <a href="https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/" rel="nofollow">solve it</a> learning a few algorithms.</p>
        `
      },
      assessmentInstructions: {
        title: 'Assessment Instructions',
        altText: 'Review the Assessment Instructions',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Review.png',
        defaultHTML: `
          <p>Important notice regarding your test (please read).<br /> <br /> Assessments will be available on the following dates:<br /> <br /> <strong>Entrance Quiz: Available</strong></p>
          <ul>
          <li>Entrance Quiz / Practice Quiz available from&nbsp;</li>
          <li>Mid Term Exam available from </li>
          <li>Final Exam available from</li>
          </ul>
          <p><strong>IMPORTANT:</strong><br /> <br /> It is strongly recommended that you take the Practice quiz before each attempt to confirm that the quiz tool is working properly with your browser.</p>
          <p>Once you begin your assessment(s), the following message will populate&nbsp;<em>"Force Completion: This Test can be saved and resumed later"</em>. Please note that you&nbsp;are receiving this message in&nbsp;<strong>error</strong>. All assessments&nbsp;<strong>MUST</strong>&nbsp;be completed within&nbsp;<strong>ONE</strong>&nbsp;sitting. Assessments&nbsp;<strong>CANNOT</strong>&nbsp;be saved and resumed at a later&nbsp;day/time. If you encounter any technical difficulties, please contact&nbsp;<a title="FIU Online Support Services" href="http://online.fiu.edu/supportservices" target="_blank">FIU Online Support Services</a>&nbsp;if the assessment is being taken in Blackboard. For assessments being taken in Pearson MyCommLab,&nbsp;please go to&nbsp;<a title="Pearson 24/7 Technical Support" href="http://247pearsoned.custhelp.com" target="_blank">Pearson 24/7 Technical Support</a>.<br /> <br /> <strong>System Maintenance Hours:</strong><br /> <br /> System maintenance is performed weekly between the hours of 11:59 PM on Friday night through 5:00 AM (EST) on Saturday morning. Please do not<br /> attempt any quiz/exam during these hours. We thank you for your patience.</p>
          `
      },
      discussion: {
        title: 'Discussion',
        altText: 'Discussion',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Discuss.png',
        defaultHTML: `<p>Select the link above or on the "Discussion Board" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      assessment: {
        title: 'Assessment',
        altText: 'Assessment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Submit.png',
        defaultHTML: `<p>Select the link above or on the "Assessments" portion of the course menu to the left of the screen in order to complete your assessment by its due date noted in the syllabus.</p>`
      },
      assignment: {
        title: 'Assignment',
        altText: 'Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Review.png',
        defaultHTML: `<p>Select the link above or on the "Assignemnt Dropbox" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      adobeconnect: {
        title: 'Adobe Connect',
        altText: 'Adobe Connect',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Watch.png',
        defaultHTML: `<p>Select the link above to be directed to the “<strong>Adobe Connect</strong>” section of the course. There you will have access to the scheduled Adobe Connect session.</p>`
      },
      pearson: {
        title: 'Pearson',
        altText: 'Pearson Resources',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/565c6ef653560/Pearson%20MyComLab.png',
        defaultHTML: ``
      },
      youseeu: {
        title: 'YouSeeU Generic Assignment',
        altText: 'YouSeeU Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/af6e6b24-6633-467a-a4ed-4a85ecaa1764/source.png',
        defaultHTML: `
          <p>The link above will take you to&nbsp;YouSeeU.</p>
          <p>Assignments: You will have multiple module assignments throughout the semester. Assignments can include&nbsp;various&nbsp;short answer. The assignments open at 5:00 am on the assigned day. You can enter the assignment as often as you wish during the availability period. These assignments are all due by 11:55 pm on the assigned day.</p>
          <p>For technical difficulties with&nbsp;YouSeeU&nbsp;please go to&nbsp;<a href="http://YouSeeU.com/support" target="_blank">YouSeeU&nbsp;Technical Support</a>.</p>
          `
      },
      youseeu: {
        title: 'YouSeeU Blank Content',
        altText: 'YouSeeU Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/af6e6b24-6633-467a-a4ed-4a85ecaa1764/source.png',
        defaultHTML: ``
      }
    },
    style_2: {
      title: 'Style 2',
      folder: {
        title: 'Folder',
        altText: 'Folder',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/f92e7c39-7b4e-47ee-9b19-d7397a66858c/source.png',
        defaultHTML: `<p>Select the link above titled "Module #: ..." in order to access all necessary content for this module.</p>`
      },
      todolist: {
        title: 'To Do List',
        altText: 'To Do List',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/81f33db2-aec1-4553-baa6-3366c4efc582/source.png',
        defaultHTML: `<p>For the successful completion of this week, students are required to:</p>
      <p><strong>Read the following:</strong></p>
      <ul>
      <li></li>
      </ul>
      <p><strong>View the following videos</strong></p>
      <ul>
      <li></li>
      </ul>
      <p><strong>Complete</strong></p>
      <ul>
      <li>Participate in</li>
      <li>Complete</li>
      <li>Submit</li>
      </ul>`
      },
      videos: {
        title: 'Videos',
        altText: 'Videos',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/31d08943-107e-4b7d-9801-895521a764f2/source.png',
        defaultHTML: `<p>Select the links below to view this week's videos.</p>`
      },
      discussion: {
        title: 'Discussion',
        altText: 'Discussion',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/51db674e-b6c3-4d54-a24c-23bd15c5f90d/source.png',
        defaultHTML: `<p>Select the link above titled "Discussion Board" or on the "Discussion Board" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      assessment: {
        title: 'Assessment',
        altText: 'Assessment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/63fa5670-1df5-4d4a-a9f9-bf0788fa2651/source.png',
        defaultHTML: `<p>Select the link above titled "Quizzes and Exams" or on the "Assessments" portion of the course menu to the left of the screen in order to complete your assessment by its due date noted in the syllabus.</p>`
      },
      assignment: {
        title: 'Assignment',
        altText: 'Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/5709d05f-5383-43c2-b300-a73ea6052724/source.png',
        defaultHTML: `<p>Select the link above titled "Assignemnt Dropbox" or on the "Assignemnt Dropbox" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      groups: {
        title: 'Groups',
        altText: 'Groups',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/708912d8-21d2-421c-8c7b-4df9b77015d2/source.png',
        defaultHTML: `<p>Select the link above to be directed to the “<strong>Groups</strong>” section of the course.</p>`
      },
      adobeconnect: {
        title: 'Adobe Connect',
        altText: 'Adobe Connect',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/886de176-6d26-4c1d-a6af-a868108aa742/source.png',
        defaultHTML: `<p>Select the link above to be directed to the “<strong>Adobe Connect</strong>” section of the course. There you will have access to the scheduled Adobe Connect session.</p>`
      },
      additionalresources: {
        title: 'Additional Resources',
        altText: 'Additional Resources',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/bad6daba-ab6a-4e9e-b7fe-62ca35cfbf85/source.png',
        defaultHTML: `<p>Select the links below to view the additional resources for this week.</p>`
      },
      announcement: {
        title: 'Announcement',
        altText: 'Announcement',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/3328fce6-e147-44ea-ad40-f836045a9c3c/source.png',
        defaultHTML: ``
      }
    },
    style_3: {
      title: 'Style 3',
      folder: {
        title: 'Folder',
        altText: 'Folder',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/2530deaa-c98d-498e-b2c4-e9bc906dbb55/source.png',
        defaultHTML: `<p>Select the link above titled "Module #: ..." in order to access all necessary content for this module.</p>`
      },
      todolist: {
        title: 'To Do List',
        altText: 'To Do List',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/4d997f56-b053-4737-937b-15ace5b0e2be/source.png',
        defaultHTML: `<p>For the successful completion of this week, students are required to:</p>
        <p><strong>Read the following:</strong></p>
        <ul>
        <li></li>
        </ul>
        <p><strong>View the following videos</strong></p>
        <ul>
        <li></li>
        </ul>
        <p><strong>Complete</strong></p>
        <ul>
        <li>Participate in</li>
        <li>Complete</li>
        <li>Submit</li>
        </ul>`
      },
      discussion: {
        title: 'Discussion',
        altText: 'Discussion',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/72ee46b6-370d-4576-bd69-e1193d037840/source.png',
        defaultHTML: `<p>Select the link above titled "Discussion Board" or on the "Discussion Board" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      assessment: {
        title: 'Assessment',
        altText: 'Assessment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/fe3f86b6-4b89-4ca9-9cd0-bfe27c7e93fb/source.png',
        defaultHTML: `<p>Select the link above titled "Quizzes and Exams" or on the "Assessments" portion of the course menu to the left of the screen in order to complete your assessment by its due date noted in the syllabus.</p>`
      },
      assignment: {
        title: 'Assignment',
        altText: 'Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/dad17077-c8b6-4bf5-8d15-47e0cf4f66d1/source.png',
        defaultHTML: `<p>Select the link above titled "Assignemnt Dropbox" or on the "Assignemnt Dropbox" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      adobeconnect: {
        title: 'Adobe Connect',
        altText: 'Adobe Connect',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/c27bb737-2f34-4968-b5a8-2fc82b7e29d9/source.png',
        defaultHTML: `<p>Select the link above to be directed to the “<strong>Adobe Connect</strong>” section of the course. There you will have access to the scheduled Adobe Connect session.</p>`
      },
      additionalresources: {
        title: 'Additional Resources',
        altText: 'Additional Resources',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/1e5f6de6-1607-4489-a8cb-90dc41f5b0f3/source.png',
        defaultHTML: `<p>Select the links below to view the additional resources for this week.</p>`
      },
      announcement: {
        title: 'Announcement',
        altText: 'Announcement',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/fb3e3b76-ea84-4722-b196-940f20adbb7b/source.png',
        defaultHTML: ``
      }
    },
    style_4: {
      title: 'Style 4',
      folder: {
        title: 'Folder',
        altText: 'Folder',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/dcef2388-ad90-4096-a230-766376fe508d/source.png',
        defaultHTML: `<p>Select the link above titled "Module #: ..." in order to access all necessary content for this module.</p>`
      },
      todolist: {
        title: 'To Do List',
        altText: 'To Do List',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/5015cf00-cd74-42bb-8735-618470db9b13/source.png',
        defaultHTML: `<p>For the successful completion of this week, students are required to:</p>
          <p><strong>Read the following:</strong></p>
          <ul>
          <li></li>
          </ul>
          <p><strong>View the following videos</strong></p>
          <ul>
          <li></li>
          </ul>
          <p><strong>Complete</strong></p>
          <ul>
          <li>Participate in</li>
          <li>Complete</li>
          <li>Submit</li>
          </ul>`
      },
      videos: {
        title: 'Videos',
        altText: 'Videos',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/23972792-dbab-4c62-9779-78a3ac64fb27/source.png',
        defaultHTML: `<p>Select the links below to view this week's videos.</p>`
      },
      discussion: {
        title: 'Discussion',
        altText: 'Discussion',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/6db08e32-e2d5-4ea2-a802-67da8140e6f7/source.png',
        defaultHTML: `<p>Select the link above titled "Discussion Board" or on the "Discussion Board" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      assessment: {
        title: 'Assessment',
        altText: 'Assessment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/b3020f15-ad1a-415c-a882-e63772c047b0/source.png',
        defaultHTML: `<p>Select the link above titled "Quizzes and Exams" or on the "Assessments" portion of the course menu to the left of the screen in order to complete your assessment by its due date noted in the syllabus.</p>`
      },
      assignment: {
        title: 'Assignment',
        altText: 'Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/898d3fa4-f2d6-4e8f-8937-f32101162a85/source.png',
        defaultHTML: `<p>Select the link above titled "Assignemnt Dropbox" or on the "Assignemnt Dropbox" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      additionalresources: {
        title: 'Additional Resources',
        altText: 'Additional Resources',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/ad9b9722-53bd-4080-aa43-ff85bfd93c28/source.png',
        defaultHTML: `<p>Select the links below to view the additional resources for this week.</p>`
      }
    },
    style_5: {
      title: 'Style 5',
      folder: {
        title: 'Folder',
        altText: 'Folder',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/77f5aa74-b19f-4dce-aaa1-05813865cc10/source.png',
        defaultHTML: `<p>Select the link above titled "Module #: ..." in order to access all necessary content for this module.</p>`
      },
      todolist: {
        title: 'To Do List',
        altText: 'To Do List',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/05e84ba3-5467-40ae-9635-2efd078302d4/source.png',
        defaultHTML: `<p>For the successful completion of this week, students are required to:</p>
            <p><strong>Read the following:</strong></p>
            <ul>
            <li></li>
            </ul>
            <p><strong>View the following videos</strong></p>
            <ul>
            <li></li>
            </ul>
            <p><strong>Complete</strong></p>
            <ul>
            <li>Participate in</li>
            <li>Complete</li>
            <li>Submit</li>
            </ul>`
      },
      videos: {
        title: 'Videos',
        altText: 'Videos',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/cebcf070-b0fa-4809-b5bd-f7998ec4b842/source.png',
        defaultHTML: `<p>Select the links below to view this week's videos.</p>`
      },
      discussion: {
        title: 'Discussion',
        altText: 'Discussion',
        iconSrc: '',
        defaultHTML: `<p>Select the link above to participate in this week's discussion when it becomes available.</p>`
      },
      assessment: {
        title: 'Assessment',
        altText: 'Assessment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/2bbb23f3-452c-453d-9129-745d65f26965/source.png',
        defaultHTML: `<p>Select the link above titled "Quizzes and Exams" or on the "Assessments" portion of the course menu to the left of the screen in order to complete your assessment by its due date noted in the syllabus.</p>`
      },
      assignment: {
        title: 'Assignment',
        altText: 'Assignment',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/426e5260-7e82-4218-b144-8d7044efecb9/source.png',
        defaultHTML: `<p>Select the link above titled "Assignemnt Dropbox" or on the "Assignemnt Dropbox" link on the course menu to the left of the screen in order to submit your post by the due date noted in the syllabus.</p>`
      },
      groups: {
        title: 'Groups',
        altText: 'Groups',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/88f846e5-54e9-465e-9742-11b0e0462a01/source.png',
        defaultHTML: `<p>Select the link above to be directed to the “<strong>Groups</strong>” section of the course.</p>`
      },
      adobeconnect: {
        title: 'Adobe Connect',
        altText: 'Adobe Connect',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/451fca68-3c8d-46ac-9779-ad96c8c65d65/source.png',
        defaultHTML: `<p>Select the link above to be directed to the “<strong>Adobe Connect</strong>” section of the course. There you will have access to the scheduled Adobe Connect session.</p>`
      },
      additionalresources: {
        title: 'Additional Resources',
        altText: 'Additional Resources',
        iconSrc: 'https://s3.amazonaws.com/vivomedia.fiu.edu/c91ea83d-b819-4501-8f89-fef49c75d421/source.png',
        defaultHTML: `<p>Select the links below to view the additional resources for this week.</p>`
      }
    }
  };


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_TinyMCE__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_get__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_set__ = __webpack_require__(5);





var DOM = new __WEBPACK_IMPORTED_MODULE_0_dom__["a" /* default */](); // NOTE: Should tinyMCE inherit DOMInterface?
var MCE = new __WEBPACK_IMPORTED_MODULE_1_TinyMCE__["a" /* default */](); // NOTE: Should TextEditor inherit TinyMCE?


function TextEditor(tinymceInstance) {
  this.instance = tinymceInstance;
  this.editorId = escapeCharacters(tinymceInstance.id);
  this.tableRowNode = DOM.getChild(`#${this.editorId}_toolbar2 tr`, 0, document);
  this.contentColumnId = `${this.editorId}`;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Storage_set__["a" /* default */])('topLevelSelect', topLevelSelect.selectedIndex);
  });

  submenuSelects.forEach( function(subMenu) {
    var select = DOM.getChild(`#${subMenu.id} select`, 0, this.tableRowNode);
    select.addEventListener('change', function() {
      var styleOption = topLevelSelect.item(topLevelSelect.selectedIndex).innerText;
      var iconTypeOption = select.item(select.selectedIndex).innerText;
      var iconTypeObject =  that.__searchObject__(styleObject, iconTypeOption);
      try {
        that.__setHtml__( iconTypeObject );
      } catch(err) {
        console.log('Set HTML Error: ', err);
      }
      console.log(this);
      that.__resetSelectMenu__(this);
    });
  }, this);

  setSelection('topLevelSelect', topLevel.querySelector('select'));
};

TextEditor.prototype.__buildToplevel__ = function (optionsList) {
  var emmetString = 'td#main-style-select > select.mceNativeListBox > option {Select a Style}';
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
    var emmetString = `td#${item}-select.tinymce-menu > select.mceNativeListBox > option {Select an Icon}`;
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
  console.log('Select element added with ID: ', node.id);
  var lastChild = parentNode.lastChild.cloneNode(true);
  parentNode.removeChild(parentNode.lastChild);
  parentNode.appendChild(node);
  parentNode.appendChild(lastChild);
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
    console.log('Adding template. Col 2 exists.');
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Storage_get__["a" /* default */])('lastContent').trim() === currentContent.innerHTML.trim()) {
        currentContent = content.defaultHTML;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Storage_set__["a" /* default */])('lastContent', currentContent);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Storage_set__["a" /* default */])('lastContent', currentContent);
  }

  var htmlTemplate =
  `<div style="display: flex; ${content.customStyles}">
    <div id="${uniqueId}_col1">
      <img alt="${content.altText}" style="max-width: 100px; padding: 0 15px 0 0;" src="${content.iconSrc}" />
    </div>
    <div style="display: flex; align-items: center;">
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
  if( __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Storage_get__["a" /* default */])(key) ) {
    selectBox.selectedIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Storage_get__["a" /* default */])(key);
    selectBox.dispatchEvent(new Event('change'));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TextEditor);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function DOMInterface () {
  this.__activeDom__ = null;
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFromStorage;
function getFromStorage (key) {
  // return JSON.parse(__storage__.getItem(key));
  // console.log('get: ', key,GM_getValue(key, null));
  // return JSON.parse(GM_getValue(key, null));
  return GM_getValue(key, null);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setToStorage;
function setToStorage (key, value) {
  // __storage__.setItem(key, JSON.stringify(value));
  GM_setValue(key, value);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_TinyMCE__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Editor__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_TinyMCE_IconTemplates__ = __webpack_require__(1);




var MCE = new __WEBPACK_IMPORTED_MODULE_0_TinyMCE__["a" /* default */]();
var icons = __WEBPACK_IMPORTED_MODULE_2_TinyMCE_IconTemplates__["a" /* iconList */];

function init(instance) {
  var editor = new __WEBPACK_IMPORTED_MODULE_1_Editor__["a" /* default */](instance);
  editor.buildMenu(icons);
}

document.addEventListener('EditorAdded', function(event) {
  console.log('Editor: ', event.detail);
  var editor = event.detail;
  console.log('Editor added with ID: ', event.detail.id);
  init(editor);
});


try {
  MCE.getInstances();
}
  catch(err) {
  console.log('Error: ', err);
}


/***/ })
/******/ ]);
