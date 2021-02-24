!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PniWizard",[],e):"object"==typeof exports?exports.PniWizard=e():t.PniWizard=e()}(self,function(){return(()=>{"use strict";var n={22:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.showNextQuestion=e.closeInteractiveWizard=e.openInteractiveWizard=void 0;var i=new(n(729).PniWizard),o=i.openInteractiveWizard,n=i.closeInteractiveWizard,i=i.showNextQuestion;e.openInteractiveWizard=o,e.closeInteractiveWizard=n,e.showNextQuestion=i},729:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PniWizard=void 0;var i=n(300);n(307);n=function(){var t=this;this.openInteractiveWizard=function(){t.wf.interactiveWizard()},this.closeInteractiveWizard=function(){t.wf.closeInteractiveWizard()},this.showNextQuestion=function(){t.wf.showNextQuestion()},this.wf=new i.WizardFunctions};e.PniWizard=n},300:function(t,e){var i=this&&this.__awaiter||function(t,s,a,u){return new(a=a||Promise)(function(n,e){function i(t){try{r(u.next(t))}catch(t){e(t)}}function o(t){try{r(u.throw(t))}catch(t){e(t)}}function r(t){var e;t.done?n(t.value):((e=t.value)instanceof a?e:new a(function(t){t(e)})).then(i,o)}r((u=u.apply(t,s||[])).next())})},a=this&&this.__generator||function(n,i){var o,r,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(s=2&e[0]?r.return:e[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,e[1])).done)return s;switch(r=0,(e=s?[2&e[0],s.value]:e)[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,r=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=i.call(n,a)}catch(t){e=[6,t],r=0}finally{o=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.WizardFunctions=void 0;var n=(o.prototype.fetchedQuestions=function(n){return i(this,void 0,void 0,function(){var e;return a(this,function(t){switch(t.label){case 0:return[4,fetch("https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/"+n)];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),console.log(e),this.questions.push(e[0]),[2]}})})},o.prototype.setCurrentQuestionIndex=function(t){this.currentQuestionIndex=t},o.prototype.getWizardContent=function(){return'<div class="pni-wizard-header pni-color-theme">\n    <div class="title">Let me help You!</div>\n    <button data-close-button class="close-button" id=\'pni-wizard-closeBtn\'>&times;</button>\n    </div>\n    <div class="pni-wizard-body">\n        <div class="pni-questions"></div>\n    </div>'},o.prototype.initializeWizard=function(t,e){e&&this.removeRepetitiveElements(),t.innerHTML=e?'<div class="pni-wizard active" id="pni-interactive-wizard">'+this.getWizardContent()+"</div>":this.getWizardContent()},o.prototype.addQuestionAnswerHtml=function(t){for(var e=this.questions[t],n=e.Choices,i='<div class="pni-questions" style=\'text-align: center; margin-bottom: 10px\'>\n        <div class="pni-question"> '+e.Question+'</div>\n        <div style=\'text-align: right; margin-top: 10px\'>\n        <select class="select-css" name="answerOptions'+t+'" id="answerOptions'+t+'">\n        <option value="">Select</option>\n        </div>\n        ',o=0;o<n.length;o++)i+='<option value="'+n[o]+'">'+n[o]+"</option>";return i+="</select></div > "},o.prototype.initializeFirstQuestion=function(){var e=this;document.querySelector(".pni-wizard-body").innerHTML=this.addQuestionAnswerHtml(0);var t="answerOptions"+this.currentQuestionIndex;document.getElementById(t).addEventListener("change",function(t){return e.handleOptionChange(t,0)})},o.prototype.isPniWizardOpen=function(){var t=document.getElementById("pni-interactive-wizard");return t&&t.classList.contains("active")},o.prototype.clearAllQuestions=function(){document.querySelector(".pni-wizard-body").innerHTML=""},o.prototype.wizardPositioning=function(t){var e=t.getAttribute("top"),n=(i=t.getAttribute("right"))?this.defaultLeftPosition:t.getAttribute("left"),t=document.getElementById("pni-interactive-wizard"),e=e||this.defaultTopPosition,i=i||this.defaultRightPosition,n=n||this.defaultLeftPosition;t.style.top=e,t.style.right=i,t.style.left=n},o.prototype.setQuestionsQuery=function(t,e){e=String(t)+"/"+String(e)+"/";this.queryParams+=e},o.prototype.showNextQuestion=function(r,s){return i(this,void 0,void 0,function(){var e,n,i,o=this;return a(this,function(t){switch(t.label){case 0:return this.isPniWizardOpen()&&this.currentQuestionIndex==this.questions.length?(this.setQuestionsQuery(r,s),[4,fetch("https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/"+this.queryParams)]):[3,3];case 1:return[4,t.sent().json()];case 2:i=t.sent(),this.questions.push(i[0]),e=document.querySelector(".pni-wizard-body"),i=this.addQuestionAnswerHtml(this.currentQuestionIndex),e.insertAdjacentHTML("beforeend",i),n=this.currentQuestionIndex,i="answerOptions"+n,document.getElementById(i).addEventListener("change",function(t){return o.handleOptionChange(t,n)}),this.setCurrentQuestionIndex(this.currentQuestionIndex+1),t.label=3;case 3:return[2]}})})},o.prototype.removeRepetitiveElements=function(){for(var t=document.querySelectorAll("[id=pni-interactive-wizard]"),e=0;e<t.length;e++)t[e].remove()},o);function o(){var i=this;this.currentQuestionIndex=0,this.questionsApiRetryCount=0,this.questions=[],this.defaultTopPosition="25%",this.defaultRightPosition="2%",this.defaultLeftPosition="unset",this.handleOptionChange=function(t,e){var n=i.questions[e],e=n.Question;parseInt(n.Sequence)==i.currentQuestionIndex&&i.showNextQuestion(n.Sequence,t.target.value);t.target.value},this.queryParams="",this.closeInteractiveWizard=function(){document.getElementsByTagName("Analytics-Wizard")[0].innerHTML=""},this.populateWizard=function(t,e){i.questionsApiRetryCount=0,i.setCurrentQuestionIndex(0),i.initializeWizard(t,e),i.initializeFirstQuestion(),i.setCurrentQuestionIndex(i.questions[0].Sequence);var n=t.getAttribute("positioning");n&&"true"==n&&i.wizardPositioning(t),e||t.classList.add("active"),document.getElementById("pni-wizard-closeBtn").addEventListener("click",i.closeInteractiveWizard)},this.interactiveWizard=function(){var t=!!(e=document.getElementsByTagName("Analytics-Wizard")[0]),e=e||document.getElementById("pni-interactive-wizard"),n=i.questions&&1<=i.questions.length;e&&!i.isPniWizardOpen()&&n?i.populateWizard(e,t):!i.isPniWizardOpen()&&!n&&i.questionsApiRetryCount<30&&(console.log("Tried",i.questionsApiRetryCount),i.questionsApiRetryCount++,setTimeout(function(){i.interactiveWizard()},250))},this.fetchedQuestions("")}e.WizardFunctions=n},307:(t,e,n)=>{n.r(e)}},i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={exports:{}};return n[t].call(e.exports,e,e.exports,o),e.exports}return o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(22)})()});