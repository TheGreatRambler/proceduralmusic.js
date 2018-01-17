(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.porceduralmusic = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
    var proceduralmusic = {};
    var markov;
    
    // markov-chains.js https://github.com/bdchauvette/markov-chains
    var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,p){a!=Array.prototype&&a!=Object.prototype&&(a[l]=p.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(l){return $jscomp.SYMBOL_PREFIX+(l||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var l=0;return $jscomp.iteratorPrototype(function(){return l<a.length?{done:!1,value:a[l++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
(function(){function a(a){if(Array.isArray(a)){for(var c=0,b=Array(a.length);c<a.length;c++)b[c]=a[c];return b}return Array.from(a)}function l(a){a=Array.isArray(a)?a:[a];return JSON.stringify(a.map(JSON.stringify))}function p(a,c){for(var b=0,e=2>=arguments.length||void 0===arguments[2]?a.length:arguments[2];b<e;){var d=Math.floor((b+e)/2);c<a[d]?e=d:b=d+1}return b}var q=function(){return function(a,c){if(Array.isArray(a))return a;$jscomp.initSymbol();$jscomp.initSymbolIterator();if(Symbol.iterator in
Object(a)){var b=[],e=!0,d=!1,h=void 0;try{$jscomp.initSymbol();$jscomp.initSymbolIterator();for(var k=a[Symbol.iterator](),f;!(e=(f=k.next()).done)&&(b.push(f.value),!c||b.length!==c);e=!0);}catch(g){d=!0,h=g}finally{try{if(!e&&k["return"])k["return"]()}finally{if(d)throw h;}}return b}throw new TypeError("Invalid attempt to destructure non-iterable instance");}}(),x=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=
!0);Object.defineProperty(a,d.key,d)}}return function(c,b,e){b&&a(c.prototype,b);e&&a(c,e);return c}}();markov=function(){function m(a){var b=(1>=arguments.length||void 0===arguments[1]?{}:arguments[1]).stateSize;b=void 0===b?1:b;if(!(this instanceof m))throw new TypeError("Cannot call a class as a function");this.stateSize=b;this.model=a instanceof Map?a:m.build(a,{stateSize:b})}x(m,[{key:"toJSON",value:function(){var c=[],b=!0,e=!1,d=void 0;try{$jscomp.initSymbol();$jscomp.initSymbolIterator();
for(var h=this.model[Symbol.iterator](),k;!(b=(k=h.next()).done);b=!0){var f=q(k.value,2);c.push([f[0],[].concat(a(f[1]))])}}catch(g){e=!0,d=g}finally{try{!b&&h["return"]&&h["return"]()}finally{if(e)throw d;}}return c}},{key:"move",value:function(c){c=l(c);var b=this.model.get(c);if(b){c=[];var e=[],d=!0,h=!1,k=void 0;try{$jscomp.initSymbol();$jscomp.initSymbolIterator();for(var f=b.values()[Symbol.iterator](),g;!(d=(g=f.next()).done);d=!0){var t=g.value,u=t.count;c.push(t.value);e.push(u)}}catch(n){h=
!0,k=n}finally{try{!d&&f["return"]&&f["return"]()}finally{if(h)throw k;}}f=e.reduce(function(b,c){var d=b[b.length-1]||0;return[].concat(a(b),[d+c])},[]);f=p(f,Math.random()*f[f.length-1]);return c[f]}}},{key:"generate",value:function(){function c(c,g,n){for(;;)switch(b){case 0:d=h=0>=f.length||void 0===f[0]?Array(k.stateSize).fill("@@MARKOV_CHAIN_BEGIN"):f[0];case 1:e=k.move(d);if(void 0!==e&&"@@MARKOV_CHAIN_END"!==e){b=3;break}b=-1;return{value:void 0,done:!0};case 3:return b=4,{value:e,done:!1};
case 4:if(1!=c){b=5;break}b=-1;throw n;case 5:d=[].concat(a(d.slice(1)),[e]);b=1;break;case 2:b=-1;default:return{value:void 0,done:!0}}}var b=0,e,d,h,k=this,f=arguments,g={next:function(a){return c(0,a,void 0)},"throw":function(a){return c(1,void 0,a)},"return":function(a){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();g[Symbol.iterator]=function(){return this};return g}},{key:"walk",value:function(c){return[].concat(a(this.generate(c)))}}],[{key:"build",value:function(c){var b=
(1>=arguments.length||void 0===arguments[1]?{}:arguments[1]).stateSize;b=void 0===b?1:b;if(!Array.isArray(c))throw Error("Corpus must be a List or an Array");var e=new Map,d=Array(b).fill("@@MARKOV_CHAIN_BEGIN"),h=!0,k=!1,f=void 0;try{$jscomp.initSymbol();$jscomp.initSymbolIterator();for(var g=c[Symbol.iterator](),t;!(h=(t=g.next()).done);h=!0){var u=t.value;if(!Array.isArray(u))throw Error("Invalid run in corpus: Must be an array");for(var n=[].concat(a(d),a(u),["@@MARKOV_CHAIN_END"]),r=0;r<u.length+
1;r++){var m=r+b,v=l(n.slice(r,m)),p=n[m],q=(0,JSON.stringify)(p);e.has(v)||e.set(v,new Map);var w=e.get(v);w.has(q)||w.set(q,{value:p,count:0});w.get(q).count+=1}}}catch(y){k=!0,f=y}finally{try{!h&&g["return"]&&g["return"]()}finally{if(k)throw f;}}return e}},{key:"fromJSON",value:function(a){var b=void 0;a=JSON.parse(a).map(function(a,c){var d=q(a,2),e=d[0];d=d[1];var f=JSON.parse(e).length;if(0===c)b=f;else if(f!==b)throw Error("Inconsistent state size. "+("Expected "+b+" but got "+f+" ("+e+")."));
f=new Map;var g=!0,l=!1,m=void 0;try{$jscomp.initSymbol();$jscomp.initSymbolIterator();for(var n=d[Symbol.iterator](),r;!(g=(r=n.next()).done);g=!0){var p=q(r.value,2);f.set(p[0],Object.assign({},p[1]))}}catch(v){l=!0,m=v}finally{try{!g&&n["return"]&&n["return"]()}finally{if(l)throw m;}}return[e,f]});return new m(new Map(a),{stateSize:b})}}]);return m}()})();
    
  proceduralmusic.start = function(music) {
    this.firstmusic = new markov(states);
  };
  
  proceduralmusic.start.prototype.nextNote() {
    return this.firstmusic.walk();
  };

  return proceduralmusic;
}));
