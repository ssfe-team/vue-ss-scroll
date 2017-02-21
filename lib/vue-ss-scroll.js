/*
 * vue-ss-scroll v0.1.0
 * author: bianhao
 *
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueRouter = factory());
}(this, (function () { 'use strict';

  var ssScroll = {};

  ssScroll.install = function(Vue) {
    
    var handleListeners = function(el, now, past) {
      if(el === document.body) {
        document.onscroll = function(e) {
          now && now(e, {scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft});
        } else if(el.addEventListener) {
          past && el.removeEventListener('scroll', past);
          el.addEventListener('scroll',function(e) {
            now && now(e, {scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
          });
        } else {
          past && el.detachEvent('onscroll', past);
          el.attach('onscroll', function(e) {
            now && now(e, {scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
          })
        }
      }
    }

    Vue.directive('ss-scroll', {
      bind: function() {
        
      }
    });

  }

  var inBrowser = typeof window !== 'undefined';

  if(inBrowser && window.Vue) {
    // in Browser && Global Mode
    window.Vue.use(ssScroll);
  }

  return ssScroll;

})));
