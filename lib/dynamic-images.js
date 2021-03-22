"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicImages = void 0;
var DynamicImages = (function () {
    function DynamicImages() {
        var _this = this;
        this.imageUrls = [{ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ariadna.jpg/150px-Ariadna.jpg', text: 'Image-1' }, { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tsvetaeva.jpg/220px-Tsvetaeva.jpg', text: 'Image-2' }, { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyEq8nxSVOckNpMhPULQz3ZBcyfayCuyca3wDGyhYXMgwOHCDZ', text: 'Image-3' }, { src: 'https://robertmullineux.com.au/wp-content/uploads/2018/12/woocommerce-get-shop-url-robert-mullineux-wordpress-byron-bay.jpg', text: 'Image-4' }];
        this.wizardWrapper = function () {
            var elementDiv = document.getElementsByClassName('pni-wizard-body')[0];
            var imageWrapperHtml = "<div class=\"image-wrapper\">";
            _this.imageUrls.forEach(function (image) {
                imageWrapperHtml += "<figure class=\"image-fig image-1\">\n            <img src=" + image.src + " alt=\"1\">\n            <figcaption>" + image.text + "</figcaption>\n          </figure>";
            });
            imageWrapperHtml += "</div>";
            elementDiv.innerHTML = imageWrapperHtml;
        };
    }
    ;
    return DynamicImages;
}());
exports.DynamicImages = DynamicImages;
//# sourceMappingURL=dynamic-images.js.map