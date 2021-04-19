// function debounced(fn, time) {
//         let setTimeoutId;
//         return function () {
//                 if (setTimeoutId) {
//                         return;
//                 }

//                 setTimeoutId = setTimeout(() => {
//                         fn.apply(this, arguments);
//                         setTimeoutId = null;
//                 }, time);
//         }
// }
function debounced(func, wait, immediate) {
        var timeout;

        return function executedFunction() {
                var context = this;
                var args = arguments;
                var later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
        }
}

export default debounced;