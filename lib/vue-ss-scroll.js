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
          now && typeof now === 'function' && 
            now(e, {scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft});
        }
      } else if(el.addEventListener) {
        past && typeof past === 'function' && 
          el.removeEventListener('scroll', past);
        el.addEventListener('scroll',function(e) {
          now && typeof now === 'function' &&
            now(e, {scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
        });
      } else {
        past && typeof past === 'function' && 
          el.detachEvent('onscroll', past);
        el.attach('onscroll', function(e) {
          now && typeof now === 'function' &&
            now(e, {scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
        })
      }
    }

    Vue.directive('ss-scroll', {
      bind: function(el, binding) {
        console.log(binding);
        handleListeners(el, binding.value);
      },
      update: function(el, binding) {
        handleListeners(el, binding.value, binding.oldValue);
      },
      unbind: function(el, binding) {
        handleListeners(el, false, binding.value); 
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
