!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PniWizard",[],e):"object"==typeof exports?exports.PniWizard=e():t.PniWizard=e()}(self,function(){return(()=>{"use strict";var n={22:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resetInteractiveWizard=e.closeInteractiveWizard=e.openInteractiveWizard=void 0;var i=new(n(729).PniWizard),s=i.openInteractiveWizard,n=i.closeInteractiveWizard,i=i.resetInteractiveWizard;e.openInteractiveWizard=s,e.closeInteractiveWizard=n,e.resetInteractiveWizard=i},729:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.PniWizard=void 0;var i=n(300);n(307);n=function(){var t=this;this.openInteractiveWizard=function(){t.wf.openInteractiveWizard()},this.closeInteractiveWizard=function(){t.wf.closeInteractiveWizard()},this.resetInteractiveWizard=function(){t.wf.clearAllQuestions()},this.wf=new i.WizardFunctions};e.PniWizard=n},300:function(t,e){var n=this&&this.__awaiter||function(t,r,u,a){return new(u=u||Promise)(function(n,e){function i(t){try{o(a.next(t))}catch(t){e(t)}}function s(t){try{o(a.throw(t))}catch(t){e(t)}}function o(t){var e;t.done?n(t.value):((e=t.value)instanceof u?e:new u(function(t){t(e)})).then(i,s)}o((a=a.apply(t,r||[])).next())})},u=this&&this.__generator||function(n,i){var s,o,r,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(s)throw new TypeError("Generator is already executing.");for(;u;)try{if(s=1,o&&(r=2&e[0]?o.return:e[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,e[1])).done)return r;switch(o=0,(e=r?[2&e[0],r.value]:e)[0]){case 0:case 1:r=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,o=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(!(r=0<(r=u.trys).length&&r[r.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!r||e[1]>r[0]&&e[1]<r[3])){u.label=e[1];break}if(6===e[0]&&u.label<r[1]){u.label=r[1],r=e;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(e);break}r[2]&&u.ops.pop(),u.trys.pop();continue}e=i.call(n,u)}catch(t){e=[6,t],o=0}finally{s=r=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.WizardFunctions=void 0;var i=(s.prototype.fetchNewQuestion=function(){return n(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,fetch(this.dynamicsQuestionApi,{method:"POST",body:JSON.stringify(this.questionList)})];case 1:return[2,t.sent()]}})})},s.prototype.fetchFirstQuestion=function(){return n(this,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:return[4,fetch(this.dynamicsQuestionApi)];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),this.questions.push(e[0]),[2]}})})},s.prototype.getWizardContent=function(){return'<div class="pni-wizard-header pni-color-theme-background">\n    <div class="title">Let me help You!</div>\n    <button data-close-button class="close-button" id=\'pni-wizard-closeBtn\'>&times;</button>\n    </div>\n    <div class="pni-wizard-body"></div>'},s.prototype.initializeWizard=function(t,e){e&&this.removeRepetitiveElements(),t.innerHTML=e?'<div class="pni-wizard active" id="pni-interactive-wizard">'+this.getWizardContent()+"</div>":this.getWizardContent()},s.prototype.addQuestionAnswerHtml=function(t){for(var e=this.questions[t],n=e.Choices,i="<div class=\"pni-questions\" style='text-align: center; margin-bottom: 10px' id='pni-question"+t+'\'>\n        <div class="pni-question"> '+e.Question+'</div>\n        <div style=\'text-align: right; margin-top: 10px\'>\n        <select class="pni-select-css" name="answerOptions'+t+'" id="answerOptions'+t+'">\n        <option value="">Select</option>\n        </div>\n        ',s=0,o=n;s<o.length;s++){var r=o[s];i+='<option value="'+r+'">'+r+"</option>"}return i+="</select></div > "},s.prototype.initializeFirstQuestion=function(){var e=this;document.querySelector(".pni-wizard-body").innerHTML=this.addQuestionAnswerHtml(0);var t="answerOptions"+this.currentQuestionIndex;document.getElementById(t).addEventListener("change",function(t){return e.handleOptionChange(t,0)})},s.prototype.isPniWizardOpen=function(){var t=document.getElementById("pni-interactive-wizard");return t&&t.classList.contains("active")},s.prototype.triggerTrackingEvent=function(t,e,n){n={eventType:"user_answered_question",eventData:{sequence_id:t,questionText:e,answerValue:n}};window.pniTrackingEvent(n)},s.prototype.wizardPositioning=function(t){var e=t.getAttribute("top"),n=(i=t.getAttribute("right"))?this.defaultLeftPosition:t.getAttribute("left"),t=document.getElementById("pni-interactive-wizard"),e=e||this.defaultTopPosition,i=i||this.defaultRightPosition,n=n||this.defaultLeftPosition;t.style.top=e,t.style.right=i,t.style.left=n},s.prototype.setQuestionsQuery=function(t,e){this.questionList.push({sequence:t,choice:e})},s.prototype.positioningAndTracking=function(t){var e=t.getAttribute("positioning"),n=t.getAttribute("tracking");e&&"true"==e&&this.wizardPositioning(t),this.tracking=!(!n||"true"!=n)},s.prototype.removeRepetitiveElements=function(){document.querySelectorAll("[id=pni-interactive-wizard]").forEach(function(t){t.remove()})},s.prototype.showHideResetButton=function(){document.getElementById("pni-reset-button")&&1<this.questions.length?document.getElementById("pni-reset-button").style.visibility="visible":document.getElementById("pni-reset-button")&&(document.getElementById("pni-reset-button").style.visibility="hidden")},s.prototype.showNextQuestion=function(o,r){return n(this,void 0,void 0,function(){var e,n,i,s=this;return u(this,function(t){switch(t.label){case 0:return this.isPniWizardOpen()&&this.currentQuestionIndex==this.questions.length&&r?(this.setQuestionsQuery(o,r),[4,this.setNewQuestion()]):[3,2];case 1:return t.sent()&&(e=document.querySelector(".pni-wizard-body"),i=this.addQuestionAnswerHtml(this.currentQuestionIndex),e.insertAdjacentHTML("beforeend",i),n=this.currentQuestionIndex,i="answerOptions"+n,document.getElementById(i).addEventListener("change",function(t){return s.handleOptionChange(t,n)}),this.currentQuestionIndex=this.currentQuestionIndex+1,this.showHideResetButton()),[3,3];case 2:this.isPniWizardOpen()&&!r&&window.parent.postMessage(this.questions[this.questions.length-1].Products,"https://satish0543.wixsite.com"),t.label=3;case 3:return[2]}})})},s);function s(){var s=this;this.currentQuestionIndex=0,this.questionsApiRetryCount=0,this.questions=[],this.defaultTopPosition="25%",this.defaultRightPosition="2%",this.defaultLeftPosition="unset",this.dynamicsQuestionApi="https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/",this.questionList=[],this.tracking=!1,this.handleOptionChange=function(t,e){var n=s.questions[e],i=n.Question;parseInt(n.Sequence)==s.currentQuestionIndex?s.showNextQuestion(n.Sequence,t.target.value):(s.reevaluateQuestions(e),s.currentQuestionIndex=s.questions.length,s.showNextQuestion(n.Sequence,t.target.value),s.showHideResetButton()),s.tracking&&s.triggerTrackingEvent(e,i,t.target.value)},this.reevaluateQuestions=function(n){s.questionList=s.questionList.filter(function(t,e){return e<n}),s.questions.forEach(function(t,e){n<e&&document.getElementById("pni-question"+e).remove()}),s.questions=s.questions.filter(function(t,e){return e<=n})},this.setNewQuestion=function(){return n(s,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:return[4,this.fetchNewQuestion()];case 1:return[4,t.sent().json()];case 2:return(e=t.sent(),window.parent.postMessage(e[0].Products,"https://satish0543.wixsite.com"),e&&e[0]&&1<=e[0].Choices.length)?(this.questions.push(e[0]),[2,!0]):(this.questionList.pop(),[2,null])}})})},this.addResetButton=function(){document.querySelector("#pni-interactive-wizard").insertAdjacentHTML("beforeend","<button id='pni-reset-button' class='pni-reset-button pni-color-theme' style=\"visibility: hidden;\">Reset</button>")},this.populateWizard=function(t,e){s.questionsApiRetryCount=0,s.currentQuestionIndex=0,s.initializeWizard(t,e),s.initializeFirstQuestion(),s.currentQuestionIndex=s.questions[0].Sequence,s.addResetButton(),s.positioningAndTracking(t),e||t.classList.add("active"),document.getElementById("pni-wizard-closeBtn").addEventListener("click",s.closeInteractiveWizard),document.getElementById("pni-reset-button").addEventListener("click",s.clearAllQuestions)},this.openInteractiveWizard=function(){var t=!!(e=document.getElementsByTagName("Analytics-Wizard")[0]),e=e||document.getElementById("pni-interactive-wizard"),n=s.questions&&1<=s.questions.length;e&&!s.isPniWizardOpen()&&n?s.populateWizard(e,t):!s.isPniWizardOpen()&&!n&&s.questionsApiRetryCount<30&&(s.questionsApiRetryCount++,setTimeout(function(){s.openInteractiveWizard()},250))},this.resetWizard=function(){s.questions=[s.questions[0]],s.questionList=[],s.showHideResetButton()},this.clearAllQuestions=function(){s.resetWizard(),s.closeInteractiveWizard(),s.openInteractiveWizard(),window.parent.postMessage(void 0,"https://satish0543.wixsite.com")},this.closeInteractiveWizard=function(){document.getElementsByTagName("Analytics-Wizard")[0].innerHTML="",s.resetWizard()},this.fetchFirstQuestion()}e.WizardFunctions=i},307:(t,e,n)=>{n.r(e)}},i={};function s(t){if(i[t])return i[t].exports;var e=i[t]={exports:{}};return n[t].call(e.exports,e,e.exports,s),e.exports}return s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s(22)})()});