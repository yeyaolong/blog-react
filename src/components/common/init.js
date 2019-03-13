;(function (doc, win) {
    var docEl = doc.document;
    var resizeEvt = 'orientationchage' in win ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (clientWidth === undefined) return
        if (clientWidth > 1374) {
            clientWidth = 1374;
        }
        if (clientWidth < 920) {
            clientWidth = 920;
        }

        docEl.style.fontSize = 16 * (clientWidth / 1374) + 'px';
        if (window.orientation === 90) {

        } else {
            document.body.setAttribute('data-orient', 'landscape');
        }

        if (doc.addEventListener === undefined) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    }
})(document, window)