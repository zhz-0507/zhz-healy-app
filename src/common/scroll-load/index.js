let _window = window;
let _document = document;

// 横竖屏切换时 ，orientationchange 与 resize事件都会触发，所以只需监听 resize 即可
let RESIZE_EVENT = "resize";

// 三星某款机型在监听非window容器的scroll事件时，会无限次触发，可以使用touchmove替代
// 但可能会出现 页面加载时触发scroll无法触发scroll与惯性滚动停止时，无法触发的情况
// 综上：依旧采用scroll解决，对于某些机型进行忽略
let EVENT_NAME = "scroll";

function extend(target, source) {
  for (let name in source) {
    if (source.hasOwnProperty(name) && source[name] !== undefined) {
      target[name] = source[name];
    }
  }
  return target;
}
let init = function(self) {
  let options = self.options,
    timer;
  self._handler = function() {
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      self.load();
    }, options.delay);
  };
  self._handler();
  _window.addEventListener(EVENT_NAME, self._handler, false);
  _window.addEventListener(RESIZE_EVENT, self._handler, false);
};
function ScrollLoad(element, options) {
  this.element = element;
  this.options = extend({}, extend(this.defaults, options || {}));
  init(this);
}
let _prototype = ScrollLoad.prototype;
_prototype.defaults = {
  threshold: 200,
  delay: 100,
  load: null
};
_prototype.destroy = function() {
  _window.removeEventListener(EVENT_NAME, this._handler, false);
  _window.removeEventListener(RESIZE_EVENT, this._handler, false);
};
_prototype.load = function() {
  let options = this.options,
    load = options.load;
  this.isVisible(this.element, options.threshold) && load && load();
  return this;
};
_prototype.isVisible = function(element, threshold) {
  //如果节点不可见，则不进行加载
  if (
    element.offsetWidth === 0 &&
    element.offsetHeight === 0 &&
    element.getClientRects().length === 0
  ) {
    return false;
  }
  if (this.belowthefold(element, threshold)) {
    return false;
  }
  return true;
};
_prototype.belowthefold = function(element, threshold) {
  let fold = _window.innerHeight + _window.scrollY;
  return fold <= _document.body.scrollHeight - threshold;
};
export default ScrollLoad;
