!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PniWizard",[],t):"object"==typeof exports?exports.PniWizard=t():e.PniWizard=t()}(self,function(){return(()=>{"use strict";var i={855:function(e,t){var r=this&&this.__awaiter||function(e,a,s,u){return new(s=s||Promise)(function(i,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(n,r)}o((u=u.apply(e,a||[])).next())})},o=this&&this.__generator||function(i,n){var r,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(i,s)}catch(e){t=[6,e],o=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicImages=void 0;function i(e,t){var n=this;this.imageUrls=[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ariadna.jpg/150px-Ariadna.jpg",text:"Image-1",imageName:"1"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tsvetaeva.jpg/220px-Tsvetaeva.jpg",text:"Image-2",imageName:"2"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyEq8nxSVOckNpMhPULQz3ZBcyfayCuyca3wDGyhYXMgwOHCDZ",text:"Image-3",imageName:"3"},{src:"https://robertmullineux.com.au/wp-content/uploads/2018/12/woocommerce-get-shop-url-robert-mullineux-wordpress-byron-bay.jpg",text:"Image-4",imageName:"4"}],this.fetchProducts=function(i){return r(n,void 0,void 0,function(){var t;return o(this,function(e){switch(e.label){case 0:return[4,this.wizardService.fetchNewQuestion("https://pni-dev-p2p-web-api.pnidev.com/api/imagegamification/",{S1:i})];case 1:return[4,e.sent().json()];case 2:return t=e.sent(),this.wizardService.displayProducts(t),[2]}})})},this.handleImageClick=function(e){console.log(e.currentTarget.getAttribute("name"));e=e.currentTarget.getAttribute("name");n.fetchProducts(e)},this.showImages=function(){var e=document.getElementsByClassName("pni-wizard-body")[0],t='<div class="image-wrapper">';n.imageDataList.forEach(function(e){t+='<figure class="image-fig image-1" id=\'image'+e.image_name.toString()+"' name='"+e.image_name.toString()+"'>\n            <img src="+e.image_url[0]+' alt="1">\n            <figcaption>Image</figcaption>\n          </figure>'}),t+="</div>",e.innerHTML=t},this.renderImageWizard=function(){n.showImages(),n.imageDataList.forEach(function(e){document.getElementById("image"+e.image_name.toString()).addEventListener("click",n.handleImageClick)})},this.imageDataList=e,this.wizardService=t}t.DynamicImages=i},302:function(e,t){var i=this&&this.__awaiter||function(e,a,s,u){return new(s=s||Promise)(function(i,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(n,r)}o((u=u.apply(e,a||[])).next())})},s=this&&this.__generator||function(i,n){var r,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(i,s)}catch(e){t=[6,e],o=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicQuestions=void 0;var n=(r.prototype.setQuestionsQuery=function(e,t,i){this.questionList.push({sequence:e,choice:t,attrvalue:i})},r.prototype.initializeFirstQuestion=function(){var t=this;document.querySelector(".pni-wizard-body").innerHTML=this.wizardService.addQuestionAnswerHtml(0,this.questions);var e="answerOptions"+this.currentQuestionIndex;document.getElementById(e).addEventListener("change",function(e){return t.handleOptionChange(e,0)})},r);function r(e,t){var r=this;this.currentQuestionIndex=0,this.questions=[],this.questionList=[],this.productCartegory="",this.dynamicsQuestionApi="https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/",this.displayProducts=function(e){},this.setNewQuestion=function(){return i(r,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return[4,this.wizardService.fetchNewQuestion(this.dynamicsQuestionApi,this.questionList)];case 1:return[4,e.sent().json()];case 2:return(t=e.sent(),this.wizardService.disableEnableChoiceDropdown(!0),t&&t[0]&&1<=t[0].Choices.length)?(this.questions.push(t[0]),[2,!0]):(this.wizardService.displayProducts(t[0].Products),this.questionList.pop(),[2,null])}})})},this.showNextQuestion=function(o,a){return i(r,void 0,void 0,function(){var t,i,n,r=this;return s(this,function(e){switch(e.label){case 0:return this.wizardService.isPniWizardOpen()&&this.currentQuestionIndex==this.questions.length&&a?(this.setQuestionsQuery(o,a,this.productCartegory),[4,this.setNewQuestion()]):[3,2];case 1:e.sent()&&(t=document.querySelector(".pni-wizard-body"),n=this.wizardService.addQuestionAnswerHtml(this.currentQuestionIndex,this.questions),t.insertAdjacentHTML("beforeend",n),i=this.currentQuestionIndex,n="answerOptions"+i,document.getElementById(n).addEventListener("change",function(e){return r.handleOptionChange(e,i)}),this.currentQuestionIndex=this.currentQuestionIndex+1,this.wizardService.showHideResetButton(this.questions),this.wizardService.displayProducts(this.questions[this.questions.length-1].Products)),e.label=2;case 2:return[2]}})})},this.reevaluateQuestions=function(i){r.questionList=r.questionList.filter(function(e,t){return t<i}),r.questions.forEach(function(e,t){i<t&&document.getElementById("pni-question"+t).remove()}),r.questions=r.questions.filter(function(e,t){return t<=i})},this.handleOptionChange=function(e,t){var i=r.questions[t],n=i.Question;i.Sequence==r.currentQuestionIndex?r.showNextQuestion(i.Sequence,e.target.value):(r.reevaluateQuestions(t),r.currentQuestionIndex=r.questions.length,r.showNextQuestion(i.Sequence,e.target.value),r.wizardService.showHideResetButton(r.questions)),r.wizardService.tracking&&r.wizardService.triggerTrackingEvent(t,n,e.target.value)},this.renderQuestionsWizard=function(){r.initializeFirstQuestion(),r.currentQuestionIndex=r.questions[0].Sequence},this.resetQuestionsWizard=function(){r.questions=[r.questions[0]],r.currentQuestionIndex=0,r.questionList=[],r.wizardService.showHideResetButton(r.questions)},this.wizardService=t,this.questions=e}t.DynamicQuestions=n},22:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.configureWizard=t.resetInteractiveWizard=t.closeInteractiveWizard=t.openInteractiveWizard=void 0;var n=new(i(729).PniWizard),r=n.openInteractiveWizard,o=n.closeInteractiveWizard,i=n.resetInteractiveWizard,n=n.configureWizard;t.openInteractiveWizard=r,t.closeInteractiveWizard=o,t.resetInteractiveWizard=i,t.configureWizard=n},729:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PniWizard=void 0;var n=i(261);i(307);i=function(){var t=this;this.openInteractiveWizard=function(){t.wf.openInteractiveWizard()},this.closeInteractiveWizard=function(){t.wf.closeInteractiveWizard()},this.resetInteractiveWizard=function(){t.wf.resetInteractiveWizard()},this.configureWizard=function(e){t.wf.configureWizard(e)},this.wf=new n.PopulateWizard};t.PniWizard=i},261:function(e,t,i){var n=this&&this.__awaiter||function(e,a,s,u){return new(s=s||Promise)(function(i,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(n,r)}o((u=u.apply(e,a||[])).next())})},r=this&&this.__generator||function(i,n){var r,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(i,s)}catch(e){t=[6,e],o=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PopulateWizard=void 0;var o=i(855),a=i(652),s=i(302),i=(u.prototype.fetchFirstOption=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return this.isImageGamification?[4,fetch(this.dynamicsImagesApi)]:[3,2];case 1:return t=e.sent(),[3,4];case 2:return[4,fetch(this.dynamicsQuestionApi)];case 3:t=e.sent(),e.label=4;case 4:return[4,t.json()];case 5:return t=e.sent(),this.isImageGamification?(this.imageDataList=t,this.dynamicImages=new o.DynamicImages(t,this.wizardService)):(this.questions=[t[0]],this.dynamicQuestions=new s.DynamicQuestions([t[0]],this.wizardService)),[2]}})})},u.prototype.haveOptionData=function(e){return e&&1<=e.length},u);function u(){var n=this;this.apiRetryCount=0,this.questions=[],this.imageDataList=[],this.dynamicsQuestionApi="https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/",this.dynamicsImagesApi="https://pni-dev-p2p-web-api.pnidev.com/api/imagegamification/",this.isImageGamification=!0,this.displayProducts=function(e){},this.populateWizard=function(e,t){n.apiRetryCount=0,n.wizardService.initializeWizard(e,t),n.isImageGamification?n.dynamicImages.renderImageWizard():n.dynamicQuestions.renderQuestionsWizard(),n.wizardService.addResetButton(),n.wizardService.configuringWizard(e),t||e.classList.add("active"),document.getElementById("pni-wizard-closeBtn").addEventListener("click",n.closeInteractiveWizard),document.getElementById("pni-reset-button").addEventListener("click",n.resetInteractiveWizard)},this.openInteractiveWizard=function(){var e=!!(t=document.getElementsByTagName("Analytics-Wizard")[0]),t=t||document.getElementById("pni-interactive-wizard"),i=n.isImageGamification?n.haveOptionData(n.imageDataList):n.haveOptionData(n.questions);t&&!n.wizardService.isPniWizardOpen()&&i?n.populateWizard(t,e):!n.wizardService.isPniWizardOpen()&&!i&&n.apiRetryCount<30&&(n.apiRetryCount++,setTimeout(function(){n.openInteractiveWizard()},250))},this.configureWizard=function(e){n.wizardService.configureWizard(e)},this.resetWizard=function(){n.isImageGamification?(n.imageDataList=[n.imageDataList[0]],n.wizardService.showHideResetButton(n.imageDataList)):(n.questions=[n.questions[0]],n.dynamicQuestions.resetQuestionsWizard(),n.wizardService.showHideResetButton(n.questions))},this.resetInteractiveWizard=function(){n.resetWizard(),n.closeInteractiveWizard(),n.openInteractiveWizard()},this.closeInteractiveWizard=function(){document.getElementsByTagName("Analytics-Wizard")[0].innerHTML="",n.resetWizard()},this.fetchFirstOption(),this.wizardService=new a.WizardService}t.PopulateWizard=i},652:function(e,t){var n=this&&this.__awaiter||function(e,a,s,u){return new(s=s||Promise)(function(i,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(n,r)}o((u=u.apply(e,a||[])).next())})},r=this&&this.__generator||function(i,n){var r,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(i,s)}catch(e){t=[6,e],o=0}finally{r=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.WizardService=void 0;var i=(o.prototype.getWizardContent=function(){return'<div class="pni-wizard-header pni-color-theme-background">\n                    <div class="title">Let me help You!</div>\n                    <button data-close-button class="close-button" id=\'pni-wizard-closeBtn\'>&times;</button>\n                </div>\n            <div class="pni-wizard-body"></div>'},o.prototype.removeRepetitiveElements=function(){document.querySelectorAll("[id=pni-interactive-wizard]").forEach(function(e){e.remove()})},o.prototype.initializeWizard=function(e,t){t&&this.removeRepetitiveElements(),e.innerHTML=t?'<div class="pni-wizard active" id="pni-interactive-wizard">'+this.getWizardContent()+"</div>":this.getWizardContent()},o.prototype.wizardPositioning=function(e,t,i){i=t?this.defaultLeftPosition:i;var n=document.getElementById("pni-interactive-wizard");e=e||this.defaultTopPosition,t=t||this.defaultRightPosition,i=i||this.defaultLeftPosition,n.style.top=e,n.style.right=t,n.style.left=i},o.prototype.disableEnableChoiceDropdown=function(e){var t=document.querySelectorAll("[class=pni-select-css]");e?(t.forEach(function(e){e.removeAttribute("disabled")}),document.getElementById("pni-reset-button").removeAttribute("disabled")):(t.forEach(function(e){e.setAttribute("disabled","disabled")}),document.getElementById("pni-reset-button").setAttribute("disabled","disabled"))},o.prototype.fetchNewQuestion=function(t,i){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return this.disableEnableChoiceDropdown(!1),[4,fetch(t,{method:"POST",body:JSON.stringify(i)})];case 1:return[2,e.sent()]}})})},o.prototype.isPniWizardOpen=function(){var e=document.getElementById("pni-interactive-wizard");return e&&e.classList.contains("active")},o.prototype.triggerTrackingEvent=function(e,t,i){i={eventType:"user_answered_question",eventData:{sequence_id:e,questionText:t,answerValue:i}};window.pniTrackingEvent(i)},o.prototype.showHideResetButton=function(e){document.getElementById("pni-reset-button")&&1<e.length?document.getElementById("pni-reset-button").style.visibility="visible":document.getElementById("pni-reset-button")&&(document.getElementById("pni-reset-button").style.visibility="hidden")},o.prototype.addQuestionAnswerHtml=function(e,t){for(var i=t[e],t=i.Choices,n="<div class=\"pni-questions\" style='text-align: center; margin-bottom: 10px' id='pni-question"+e+'\'>\n        <div class="pni-question"> '+i.Question+'</div>\n        <div style=\'text-align: right; margin-top: 10px\'>\n        <select class="pni-select-css" name="answerOptions'+e+'" id="answerOptions'+e+'">\n        <option value="">Select</option>\n        </div>\n        ',r=0,o=t;r<o.length;r++){var a=o[r];n+='<option value="'+a+'">'+a+"</option>"}return n+="</select></div > "},o.prototype.configuringWizard=function(e){var t=e.getAttribute("positioning");this.tracking=!(!e.getAttribute("tracking")||"true"!=e.getAttribute("tracking")),t&&"true"==t&&this.wizardPositioning(e.getAttribute("top"),e.getAttribute("right"),e.getAttribute("left")),e.getAttribute("color")&&document.documentElement.style.setProperty("--defaultTheme",e.getAttribute("color"))},o);function o(){var t=this;this.defaultTopPosition="25%",this.defaultRightPosition="2%",this.defaultLeftPosition="unset",this.tracking=!1,this.displayProducts=function(e){},this.addResetButton=function(){document.querySelector("#pni-interactive-wizard").insertAdjacentHTML("beforeend","<button id='pni-reset-button' class='pni-reset-button pni-color-theme' style=\"visibility: hidden;\">Reset</button>")},this.configureWizard=function(e){t.displayProducts=e||t.displayProducts}}t.WizardService=i},307:(e,t,i)=>{i.r(t)}},n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return i[e].call(t.exports,t,t.exports,r),t.exports}return r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(22)})()});