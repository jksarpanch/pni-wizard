"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicImages = void 0;
var DynamicImages = (function () {
    function DynamicImages(imageDataList, wizardService) {
        var _this = this;
        this.imageUrls = [{ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ariadna.jpg/150px-Ariadna.jpg', text: 'Image-1', imageName: '1' }, { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tsvetaeva.jpg/220px-Tsvetaeva.jpg', text: 'Image-2', imageName: '2' }, { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyEq8nxSVOckNpMhPULQz3ZBcyfayCuyca3wDGyhYXMgwOHCDZ', text: 'Image-3', imageName: '3' }, { src: 'https://robertmullineux.com.au/wp-content/uploads/2018/12/woocommerce-get-shop-url-robert-mullineux-wordpress-byron-bay.jpg', text: 'Image-4', imageName: '4' }];
        this.fetchProducts = function (imageName) { return __awaiter(_this, void 0, void 0, function () {
            var products, newProds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wizardService.fetchNewQuestion('https://pni-dev-p2p-web-api.pnidev.com/api/imagegamification/', { 'S1': imageName })];
                    case 1:
                        products = _a.sent();
                        return [4, products.json()];
                    case 2:
                        newProds = _a.sent();
                        this.wizardService.displayProducts(newProds);
                        return [2];
                }
            });
        }); };
        this.handleImageClick = function (event) {
            console.log(event.currentTarget.getAttribute("name"));
            var imageName = event.currentTarget.getAttribute("name");
            _this.fetchProducts(imageName);
        };
        this.showImages = function () {
            var elementDiv = document.getElementsByClassName('pni-wizard-body')[0];
            var imageWrapperHtml = "<div class=\"image-wrapper\">";
            _this.imageDataList.forEach(function (image) {
                imageWrapperHtml += "<figure class=\"image-fig image-1\" id='" + ('image' + image.image_name.toString()) + "' name='" + image.image_name.toString() + "'>\n            <img src=" + image.image_url[0] + " alt=\"1\">\n            <figcaption>" + 'Image' + "</figcaption>\n          </figure>";
            });
            imageWrapperHtml += "</div>";
            elementDiv.innerHTML = imageWrapperHtml;
        };
        this.renderImageWizard = function () {
            _this.showImages();
            _this.imageDataList.forEach(function (image) {
                document.getElementById('image' + image.image_name.toString()).addEventListener("click", _this.handleImageClick);
            });
        };
        this.imageDataList = imageDataList;
        this.wizardService = wizardService;
    }
    ;
    return DynamicImages;
}());
exports.DynamicImages = DynamicImages;
//# sourceMappingURL=dynamic-images.js.map