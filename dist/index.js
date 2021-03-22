!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PniWizard",[],t):"object"==typeof exports?exports.PniWizard=t():e.PniWizard=t()}(self,function(){return(()=>{"use strict";var i={855:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicImages=void 0;function i(){var i=this;this.imageUrls=[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ariadna.jpg/150px-Ariadna.jpg",text:"Image-1"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tsvetaeva.jpg/220px-Tsvetaeva.jpg",text:"Image-2"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyEq8nxSVOckNpMhPULQz3ZBcyfayCuyca3wDGyhYXMgwOHCDZ",text:"Image-3"},{src:"https://robertmullineux.com.au/wp-content/uploads/2018/12/woocommerce-get-shop-url-robert-mullineux-wordpress-byron-bay.jpg",text:"Image-4"}],this.wizardWrapper=function(){var e=document.getElementsByClassName("pni-wizard-body")[0],t='<div class="image-wrapper">';i.imageUrls.forEach(function(e){t+='<figure class="image-fig image-1">\n            <img src='+e.src+' alt="1">\n            <figcaption>'+e.text+"</figcaption>\n          </figure>"}),t+="</div>",e.innerHTML=t}}t.DynamicImages=i},22:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.configureWizard=t.resetInteractiveWizard=t.closeInteractiveWizard=t.openInteractiveWizard=void 0;var n=new(i(729).PniWizard),r=n.openInteractiveWizard,o=n.closeInteractiveWizard,i=n.resetInteractiveWizard,n=n.configureWizard;t.openInteractiveWizard=r,t.closeInteractiveWizard=o,t.resetInteractiveWizard=i,t.configureWizard=n},729:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PniWizard=void 0;var n=i(261);i(307);i=function(){var t=this;this.openInteractiveWizard=function(){t.wf.openInteractiveWizard()},this.closeInteractiveWizard=function(){t.wf.closeInteractiveWizard()},this.resetInteractiveWizard=function(){t.wf.resetInteractiveWizard()},this.configureWizard=function(e){t.wf.configureWizard(e)},this.wf=new n.PopulateWizard};t.PniWizard=i},261:function(e,t,i){var n=this&&this.__awaiter||function(e,s,a,u){return new(a=a||Promise)(function(i,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(n,r)}o((u=u.apply(e,s||[])).next())})},a=this&&this.__generator||function(i,n){var r,o,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){a.label=t[1];break}if(6===t[0]&&a.label<s[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=n.call(i,a)}catch(e){t=[6,e],o=0}finally{r=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PopulateWizard=void 0;var o=i(855),s=i(652),i=(r.prototype.fetchFirstQuestion=function(){return n(this,void 0,void 0,function(){var t;return a(this,function(e){switch(e.label){case 0:return[4,fetch(this.dynamicsQuestionApi)];case 1:return[4,e.sent().json()];case 2:return t=e.sent(),this.questions.push(t[0]),[2]}})})},r.prototype.initializeFirstQuestion=function(){var t=this;document.querySelector(".pni-wizard-body").innerHTML=this.wizardService.addQuestionAnswerHtml(0,this.questions);var e="answerOptions"+this.currentQuestionIndex;document.getElementById(e).addEventListener("change",function(e){return t.handleOptionChange(e,0)})},r.prototype.setQuestionsQuery=function(e,t,i){this.questionList.push({sequence:e,choice:t,attrvalue:i})},r.prototype.configuringWizard=function(e){var t=e.getAttribute("positioning");this.tracking=!(!e.getAttribute("tracking")||"true"!=e.getAttribute("tracking")),t&&"true"==t&&this.wizardService.wizardPositioning(e.getAttribute("top"),e.getAttribute("right"),e.getAttribute("left")),e.getAttribute("color")&&document.documentElement.style.setProperty("--defaultTheme",e.getAttribute("color"))},r);function r(){var r=this;this.currentQuestionIndex=0,this.questionsApiRetryCount=0,this.questions=[],this.dynamicsQuestionApi="https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/",this.questionList=[],this.tracking=!1,this.isImageGamification=!1,this.productCartegory="",this.displayProducts=function(e){},this.handleOptionChange=function(e,t){var i=r.questions[t],n=i.Question;i.Sequence==r.currentQuestionIndex?r.showNextQuestion(i.Sequence,e.target.value):(r.reevaluateQuestions(t),r.currentQuestionIndex=r.questions.length,r.showNextQuestion(i.Sequence,e.target.value),r.wizardService.showHideResetButton(r.questions)),r.tracking&&r.wizardService.triggerTrackingEvent(t,n,e.target.value)},this.reevaluateQuestions=function(i){r.questionList=r.questionList.filter(function(e,t){return t<i}),r.questions.forEach(function(e,t){i<t&&document.getElementById("pni-question"+t).remove()}),r.questions=r.questions.filter(function(e,t){return t<=i})},this.setNewQuestion=function(){return n(r,void 0,void 0,function(){var t;return a(this,function(e){switch(e.label){case 0:return[4,this.wizardService.fetchNewQuestion(this.dynamicsQuestionApi,this.questionList)];case 1:return[4,e.sent().json()];case 2:return(t=e.sent(),this.wizardService.disableEnableChoiceDropdown(!0),window.parent.postMessage(t[0].Products,"https://satish0543.wixsite.com"),t&&t[0]&&1<=t[0].Choices.length)?(this.questions.push(t[0]),[2,!0]):(this.displayProducts(t[0].Products),this.questionList.pop(),[2,null])}})})},this.renderImageGamification=function(){r.dynamicImages.wizardWrapper()},this.populateWizard=function(e,t){r.questionsApiRetryCount=0,r.currentQuestionIndex=0,r.wizardService.initializeWizard(e,t),r.isImageGamification?r.renderImageGamification():(r.initializeFirstQuestion(),r.currentQuestionIndex=r.questions[0].Sequence),r.wizardService.addResetButton(),r.configuringWizard(e),t||e.classList.add("active"),document.getElementById("pni-wizard-closeBtn").addEventListener("click",r.closeInteractiveWizard),document.getElementById("pni-reset-button").addEventListener("click",r.resetInteractiveWizard)},this.openInteractiveWizard=function(){var e=!!(t=document.getElementsByTagName("Analytics-Wizard")[0]),t=t||document.getElementById("pni-interactive-wizard"),i=r.questions&&1<=r.questions.length;t&&!r.wizardService.isPniWizardOpen()&&i?r.populateWizard(t,e):!r.wizardService.isPniWizardOpen()&&!i&&r.questionsApiRetryCount<30&&(r.questionsApiRetryCount++,setTimeout(function(){r.openInteractiveWizard()},250))},this.showNextQuestion=function(o,s){return n(r,void 0,void 0,function(){var t,i,n,r=this;return a(this,function(e){switch(e.label){case 0:return this.wizardService.isPniWizardOpen()&&this.currentQuestionIndex==this.questions.length&&s?(this.setQuestionsQuery(o,s,this.productCartegory),[4,this.setNewQuestion()]):[3,2];case 1:return e.sent()&&(t=document.querySelector(".pni-wizard-body"),n=this.wizardService.addQuestionAnswerHtml(this.currentQuestionIndex,this.questions),t.insertAdjacentHTML("beforeend",n),i=this.currentQuestionIndex,n="answerOptions"+i,document.getElementById(n).addEventListener("change",function(e){return r.handleOptionChange(e,i)}),this.currentQuestionIndex=this.currentQuestionIndex+1,this.wizardService.showHideResetButton(this.questions),this.displayProducts(this.questions[this.questions.length-1].Products)),[3,3];case 2:this.wizardService.isPniWizardOpen()&&!s&&window.parent.postMessage(this.questions[this.questions.length-1].Products,"https://satish0543.wixsite.com"),e.label=3;case 3:return[2]}})})},this.configureWizard=function(e){r.displayProducts=e||r.displayProducts},this.resetWizard=function(){r.questions=[r.questions[0]],r.questionList=[],r.wizardService.showHideResetButton(r.questions)},this.resetInteractiveWizard=function(){r.resetWizard(),r.closeInteractiveWizard(),r.openInteractiveWizard(),window.parent.postMessage(void 0,"https://satish0543.wixsite.com")},this.closeInteractiveWizard=function(){document.getElementsByTagName("Analytics-Wizard")[0].innerHTML="",r.resetWizard()},this.fetchFirstQuestion(),this.dynamicImages=new o.DynamicImages,this.wizardService=new s.WizardService}t.PopulateWizard=i},652:function(e,t){var n=this&&this.__awaiter||function(e,s,a,u){return new(a=a||Promise)(function(i,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(n,r)}o((u=u.apply(e,s||[])).next())})},r=this&&this.__generator||function(i,n){var r,o,s,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,o=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){a.label=t[1];break}if(6===t[0]&&a.label<s[1]){a.label=s[1],s=t;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(t);break}s[2]&&a.ops.pop(),a.trys.pop();continue}t=n.call(i,a)}catch(e){t=[6,e],o=0}finally{r=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.WizardService=void 0;var i=(o.prototype.getWizardContent=function(){return'<div class="pni-wizard-header pni-color-theme-background">\n                    <div class="title">Let me help You!</div>\n                    <button data-close-button class="close-button" id=\'pni-wizard-closeBtn\'>&times;</button>\n                </div>\n            <div class="pni-wizard-body"></div>'},o.prototype.removeRepetitiveElements=function(){document.querySelectorAll("[id=pni-interactive-wizard]").forEach(function(e){e.remove()})},o.prototype.initializeWizard=function(e,t){t&&this.removeRepetitiveElements(),e.innerHTML=t?'<div class="pni-wizard active" id="pni-interactive-wizard">'+this.getWizardContent()+"</div>":this.getWizardContent()},o.prototype.wizardPositioning=function(e,t,i){i=t?this.defaultLeftPosition:i;var n=document.getElementById("pni-interactive-wizard");e=e||this.defaultTopPosition,t=t||this.defaultRightPosition,i=i||this.defaultLeftPosition,n.style.top=e,n.style.right=t,n.style.left=i},o.prototype.disableEnableChoiceDropdown=function(e){var t=document.querySelectorAll("[class=pni-select-css]");e?(t.forEach(function(e){e.removeAttribute("disabled")}),document.getElementById("pni-reset-button").removeAttribute("disabled")):(t.forEach(function(e){e.setAttribute("disabled","disabled")}),document.getElementById("pni-reset-button").setAttribute("disabled","disabled"))},o.prototype.fetchNewQuestion=function(t,i){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return this.disableEnableChoiceDropdown(!1),[4,fetch(t,{method:"POST",body:JSON.stringify(i)})];case 1:return[2,e.sent()]}})})},o.prototype.isPniWizardOpen=function(){var e=document.getElementById("pni-interactive-wizard");return e&&e.classList.contains("active")},o.prototype.triggerTrackingEvent=function(e,t,i){i={eventType:"user_answered_question",eventData:{sequence_id:e,questionText:t,answerValue:i}};window.pniTrackingEvent(i)},o.prototype.showHideResetButton=function(e){document.getElementById("pni-reset-button")&&1<e.length?document.getElementById("pni-reset-button").style.visibility="visible":document.getElementById("pni-reset-button")&&(document.getElementById("pni-reset-button").style.visibility="hidden")},o.prototype.addQuestionAnswerHtml=function(e,t){for(var i=t[e],t=i.Choices,n="<div class=\"pni-questions\" style='text-align: center; margin-bottom: 10px' id='pni-question"+e+'\'>\n        <div class="pni-question"> '+i.Question+'</div>\n        <div style=\'text-align: right; margin-top: 10px\'>\n        <select class="pni-select-css" name="answerOptions'+e+'" id="answerOptions'+e+'">\n        <option value="">Select</option>\n        </div>\n        ',r=0,o=t;r<o.length;r++){var s=o[r];n+='<option value="'+s+'">'+s+"</option>"}return n+="</select></div > "},o);function o(){this.defaultTopPosition="25%",this.defaultRightPosition="2%",this.defaultLeftPosition="unset",this.addResetButton=function(){document.querySelector("#pni-interactive-wizard").insertAdjacentHTML("beforeend","<button id='pni-reset-button' class='pni-reset-button pni-color-theme' style=\"visibility: hidden;\">Reset</button>")}}t.WizardService=i},307:(e,t,i)=>{i.r(t)}},n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return i[e].call(t.exports,t,t.exports,r),t.exports}return r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(22)})()});