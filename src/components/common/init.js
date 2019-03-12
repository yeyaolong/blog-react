const Init = function () {
    let bodyWidth = document.body.clientWidth;
    let bodyHeight = document.body.clientHeight;

    let htmlDom = document.getElementsByTagName("html")[0];
    htmlDom.style.cssText = 'font-size: 16px;';
}

export default Init