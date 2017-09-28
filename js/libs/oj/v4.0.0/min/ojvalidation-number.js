/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojL10n!ojtranslations/nls/localeElements","ojs/ojvalidation-base"],function(a){a.wn=function(){this.Init()};o_("NumberConverter",a.wn,a);a.f.ya(a.wn,a.hm,"oj.NumberConverter");a.wn.prototype.Init=function(c){a.wn.O.Init.call(this,c)};a.f.j("NumberConverter.prototype.Init",{Init:a.wn.prototype.Init});a.wn.prototype.format=function(c){return a.wn.O.format.call(this,c)};a.f.j("NumberConverter.prototype.format",{format:a.wn.prototype.format});a.wn.prototype.parse=function(c){return a.wn.O.parse.call(this,
c)};a.f.j("NumberConverter.prototype.parse",{parse:a.wn.prototype.parse});a.pq=function(a){this.Init(a)};o_("NumberRangeValidator",a.pq,a);a.f.ya(a.pq,a.Oo,"oj.NumberRangeValidator");a.pq.prototype.Init=function(c){a.pq.O.Init.call(this);c&&(this.Gk=c.min,this.El=c.max,this.vd=a.Va.$K(c.converter),this.NI=c.hint||{},this.KH=c.messageSummary||{},this.JH=c.messageDetail||{})};a.f.j("NumberRangeValidator.prototype.Init",{Init:a.pq.prototype.Init});a.pq.prototype.validate=function(c){var b=c?c.toString():
c,d=parseFloat(b),e=this.KH,f=this.JH,h=f.rangeOverflow,k=f.rangeUnderflow,f=f.exact,g=e.rangeOverflow,e=e.rangeUnderflow,m=void 0!==this.Gk?parseFloat(this.Gk):null,p=void 0!==this.El?parseFloat(this.El):null,t=m&&this.vd?this.vd.format(m):m,r=p&&this.vd?this.vd.format(p):p,n="",q="",s=null,u=a.va;if(null===c)return c;if(null!==m&&null!==p){if(d>=m&&d<=p||m>p)return b}else if(null!==m){if(d>=m)return b}else if(null===p||d<=p)return b;null!==p&&null!==m&&m===p?(s={value:c,num:r},q=f?u.bd(f,s):u.R("oj-validator.range.number.messageDetail.exact",
s),d>p?n=g?g:u.R("oj-validator.range.number.messageSummary.rangeOverflow"):d<m&&(n=g?e:u.R("oj-validator.range.number.messageSummary.rangeUnderflow"))):null!==p&&d>p?(s={value:c,max:r},n=g?g:u.R("oj-validator.range.number.messageSummary.rangeOverflow"),q=h?u.bd(h,s):u.R("oj-validator.range.number.messageDetail.rangeOverflow",s)):null!==m&&d<m&&(s={value:c,min:t},n=e?e:u.R("oj-validator.range.number.messageSummary.rangeUnderflow"),q=k?u.bd(k,s):u.R("oj-validator.range.number.messageDetail.rangeUnderflow",
s));throw new a.um(n,q);};a.f.j("NumberRangeValidator.prototype.validate",{validate:a.pq.prototype.validate});a.pq.prototype.$e=function(){var c=null,b=this.NI,d=b.inRange,e=b.exact,f=b.min,b=b.max,h=a.va,k=void 0!==this.Gk?parseFloat(this.Gk):null,g=void 0!==this.El?parseFloat(this.El):null,m=k&&this.vd?this.vd.format(k):k,p=g&&this.vd?this.vd.format(g):g;null!==k&&null!==g?c=k!==g?d?h.bd(d,{min:m,max:p}):h.R("oj-validator.range.number.hint.inRange",{min:m,max:p}):e?h.bd(e,{num:m}):h.R("oj-validator.range.number.hint.exact",
{num:m}):null!==k?c=f?h.bd(f,{min:m}):h.R("oj-validator.range.number.hint.min",{min:m}):null!==g&&(c=b?h.bd(b,{max:p}):h.R("oj-validator.range.number.hint.max",{max:p}));return c};a.f.j("NumberRangeValidator.prototype.getHint",{$e:a.pq.prototype.$e});a.Qg=function(a){this.Init(a)};o_("IntlNumberConverter",a.Qg,a);a.f.ya(a.Qg,a.wn,"oj.IntlNumberConverter");a.Qg.prototype.Init=function(c){a.Qg.O.Init.call(this,c)};a.f.j("IntlNumberConverter.prototype.Init",{Init:a.Qg.prototype.Init});a.Qg.prototype.Qn=
function(){this.FK||(this.FK=g.Ta());return this.FK};a.Qg.prototype.format=function(c){var b,d,e;if(null==c||"string"===typeof c&&0===a.Xa.trim(""+c).length||"number"===typeof c&&isNaN(c))return"";b=a.sa.Uj();d=a.vb.ol();e=this.resolvedOptions();try{return this.Qn().format(c,d,e,b)}catch(f){throw c=this.lw(f,c),c;}};a.f.j("IntlNumberConverter.prototype.format",{format:a.Qg.prototype.format});a.Qg.prototype.$e=function(){return null};a.f.j("IntlNumberConverter.prototype.getHint",{$e:a.Qg.prototype.$e});
a.Qg.prototype.Rl=function(){return a.Qg.O.Rl.call(this)};a.f.j("IntlNumberConverter.prototype.getOptions",{Rl:a.Qg.prototype.Rl});a.Qg.prototype.parse=function(c){var b,d,e;if(null==c||""===c)return null;b=a.sa.Uj();d=a.vb.ol();e=this.resolvedOptions();try{return this.Qn().parse(a.Xa.trim(c),d,e,b)}catch(f){throw c=this.lw(f,c),c;}};a.f.j("IntlNumberConverter.prototype.parse",{parse:a.Qg.prototype.parse});a.Qg.prototype.resolvedOptions=function(){var c;c=a.sa.Uj();var b;if(c!==this.sD||!this.XJ){b=
a.vb.ol();try{if(!b)return a.D.error("locale bundle for the current locale %s is unavailable",c),{};this.XJ=this.Qn().resolvedOptions(b,this.Rl(),c);this.sD=c}catch(d){throw c=this.lw(d),c;}}return this.XJ};a.f.j("IntlNumberConverter.prototype.resolvedOptions",{resolvedOptions:a.Qg.prototype.resolvedOptions});a.Qg.prototype.lw=function(c,b){var d,e,f=c.errorInfo,h;if(f){e=f.errorCode;f=f.parameterMap;a.C.Oj(f);switch(e){case "optionTypesMismatch":case "optionTypeInvalid":d=a.Va.hC(e,f);break;case "optionOutOfRange":d=
a.Va.hC(e,f);break;case "optionValueInvalid":d=a.Va.hC(e,f);break;case "decimalFormatMismatch":h="oj-converter.number.decimalFormatMismatch.summary";break;case "currencyFormatMismatch":h="oj-converter.number.currencyFormatMismatch.summary";break;case "percentFormatMismatch":h="oj-converter.number.percentFormatMismatch.summary";break;case "unsupportedParseFormat":e=a.va.R("oj-converter.number.decimalFormatUnsupportedParse.summary"),d=a.va.R("oj-converter.number.decimalFormatUnsupportedParse.detail"),
d=new a.pg(e,d)}h&&(e=a.va.R(h,{value:b||f.value,format:f.format}),d=a.va.R("oj-converter.hint.detail",{exampleValue:this.WP()}),d=new a.pg(e,d))}d||(d=e=c.message,d=new a.pg(e,d));return d};a.Qg.prototype.WP=function(){var c="";try{c=this.format(12345.98765)}catch(b){b instanceof a.pg&&(c="",a.D.error("error retrieving hint value in format"))}finally{return c}};a.iya=function(){return{createConverter:function(c){return new a.Qg(c)}}}();a.Ma.GY(a.Rh.CONVERTER_TYPE_NUMBER,a.iya);a.jya=function(){return{createValidator:function(c){return new a.pq(c)}}}();
a.Ma.iC(a.Yf.VALIDATOR_TYPE_NUMBERRANGE,a.jya);var g;g=function(){function c(){return{format:function(a,b,c,e){if(2>=arguments.length||void 0===c)c={useGrouping:!0,style:"decimal"};n(c,"OraNumberConverter.format");var h={};r(b,h,c,e);return d(a,c,b,h,e)},parse:function(a,b,c,d){if("number"===typeof a)return a;if("[object Number]"===Object.prototype.toString.call(a))return Number(a);if(2>=arguments.length||void 0===c)c={useGrouping:!0,style:"decimal"};n(c,"OraNumberConverter.parse");return e(a,b,c,
d)},resolvedOptions:function(b,c,d){if(3>arguments.length||void 0===d)d=a.N.Tw(b);if(2>arguments.length||void 0===c)c={useGrouping:!0,style:"decimal"};var e=V(b,c,d);return aa(e,c,d)}}}var b,d,e,f,h,k,g,m,p,t,r,n,q,s,u,v,w,x,y,z,A,D,F,E,I,G,H,C,B,P,K,N,Q,M,O,V,aa,U=/^[+\-]?infinity$/i,Z=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,ja=/([^+-.0-9]*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?).*$/,T=/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,ka=/(^0\.0*)([^0].*$)/,fa={trillion:[1E14,1E13,1E12],billion:[1E11,1E10,1E9],million:[1E8,1E7,
1E6],thousand:[1E5,1E4,1E3]},ga={trillion:1E12,billion:1E9,million:1E6,thousand:1E3},ca={HALF_UP:"ceil",HALF_DOWN:"floor",DEFAULT:"round"};b=function(a,b,c){var d;for(d=a.length;d<b;d+=1)a=c?"0"+a:a+"0";return a};w=function(a,b,c,d){var e=new RangeError(a+" is out of range.  Enter a value between "+b+" and "+c+" for "+d);e.errorInfo={errorCode:"numberOptionOutOfRange",parameterMap:{value:a,minValue:b,maxValue:c,propertyName:d}};throw e;};A=function(a,b,c,d,e){a=a[b];return void 0!==a?(a=Number(a),
(isNaN(a)||a<c||a>d)&&w(a,c,d,b),Math.floor(a)):e};u=function(a,b){if(void 0===b)return"latn";var c=D(b);void 0===a.numbers["symbols-numberSystem-"+c]&&(c="latn");return c};v=function(a){return a.split("-")[0]};D=function(a){a=a||"en-US";var b=a.indexOf("-u-nu-"),c="latn";-1!==b&&(c=a.substr(b+6,4));return c};r=function(b,c,d,e){var h=a.N.Kh(b);e=u(h,e);c.numberingSystemKey=e;c.numberingSystem="symbols-numberSystem-"+e;c.lenientParse=d.lenientParse||"full";if(void 0!==d.pattern&&0<d.pattern.length)e=
d.pattern;else{switch(d.style){case "decimal":e="decimalFormats-numberSystem-";break;case "currency":e="currencyFormats-numberSystem-";break;case "percent":e="percentFormats-numberSystem-";break;default:e="decimalFormats-numberSystem-"}e+=c.numberingSystemKey;e=h.numbers[e].standard;var f=d.decimalFormat;void 0===f&&(f=d.currencyFormat);void 0===f||"decimal"!==d.style&&"currency"!==d.style||(c.shortDecimalFormat=h.numbers["decimalFormats-numberSystem-latn"][f].decimalFormat)}var f=h.numbers[c.numberingSystem].decimal,
k=h.numbers[c.numberingSystem].group,m=d.separators;if(void 0!==m){c.separators=m;var s=m.decimal,t=m.group;void 0!==s&&""!==s&&(f=m.decimal);void 0!==t&&(k=m.group)}m=v(a.N.Tw(b));c.plurals=b.supplemental.plurals;c.lang=m;c.pat=e;c.minusSign=h.numbers[c.numberingSystem].minusSign;c.decimalSeparator=f;c.exponential=h.numbers[c.numberingSystem].exponential;c.groupingSeparator=k;c.currencyDisplay=d.currencyDisplay;void 0!==d.currency&&(c.currencyCode=d.currency.toUpperCase());void 0!==d.unit&&(c.unit=
d.unit.toLowerCase());c.style=d.style;g(d,e,h,c);void 0===d.pattern&&(c.minimumIntegerDigits=A(d,"minimumIntegerDigits",1,21,c.minimumIntegerDigits),void 0!==d.maximumFractionDigits&&(c.maximumFractionDigits=A(d,"maximumFractionDigits",0,20,c.maximumFractionDigits),c.maximumFractionDigits<c.minimumFractionDigits&&(c.minimumFractionDigits=c.maximumFractionDigits)),void 0!==d.minimumFractionDigits&&(c.minimumFractionDigits=A(d,"minimumFractionDigits",0,20,c.minimumFractionDigits)),c.maximumFractionDigits<
c.minimumFractionDigits&&(c.maximumFractionDigits=c.minimumFractionDigits))};s=function(a){var b=new TypeError('The property "currency" is required when the property "'+a+'" is "currency". An accepted value is a three-letter ISO 4217 currency code.');b.errorInfo={errorCode:"optionTypesMismatch",parameterMap:{propertyName:a,propertyValue:"currency",requiredPropertyName:"currency",requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};throw b;};P=function(a){var b=new TypeError('The property "unit" is required when the property "'+
a+'" is "unit". An accepted value is  "byte" or "bit".');b.errorInfo={errorCode:"optionTypesMismatch",parameterMap:{propertyName:a,propertyValue:"unit",requiredPropertyName:"unit",requiredPropertyValueValid:"byte or bit"}};throw b;};I=function(a){var b;b=Error("long and short "+a+" are not supported for parsing");b.errorInfo={errorCode:"unsupportedParseFormat",parameterMap:{shortFormats:a}};throw b;};n=function(b,c){var d=a.N.$i(b,c),e=d("style","string",["currency","decimal","percent","unit","perMill"],
"decimal");if("decimal"===e||"currency"===e){var h="decimal"===e?"decimalFormat":"currencyFormat",e=d(h,"string",["standard","short","long"]);"OraNumberConverter.parse"===c&&void 0!==e&&"standard"!==e&&I(h)}h=d("currency","string");"currency"===e&&void 0===h&&s("style");h=d("unit","string");"unit"===e&&void 0===h&&P("style");d("roundingMode","string",["HALF_UP","HALF_DOWN","HALF_EVEN"],"DEFAULT");d("lenientParse","string",["none","full"],"full")};B=function(b,c,d,e){var h,f;1099511627776<=b?(h="digital-tera",
f=b/1099511627776):1073741824<=b?(h="digital-giga",f=b/1073741824):1048576<=b?(h="digital-mega",f=b/1048576):1024<=b?(h="digital-kilo",f=b/1024):(h="digital-",f=b);h+=d.unit;b=d.plurals[d.lang](f);b="unitPattern-count-"+b;c=G(f,c,d);return c=a.N.EXa(e.units.narrow[h][b],[c])};C=function(a,b,c){function d(a){var b=0,c=0,e=0,h="";if("0"!==a[0]){for(;"0"!==a[b]&&b<a.length;)b++;h=a.substr(0,b);e=b}for(b=e;b<a.length;b++)if("0"===a[b])c++;else break;return[h,c]}var e=function(a){var b,c,d;for(b in fa)for(d=
fa[b].length,c=0;c<d;c++)if(fa[b][c]<=a)return[b,fa[b][c]];return[a,null]}(a),h="";if(null!==e[1]){var h=c.plurals[c.lang](Math.floor(a/ga[e[0]])),f=""+e[1]+"-count-"+h,f=c.shortDecimalFormat[f];void 0===f&&(f=""+e[1]+"-count-other",f=c.shortDecimalFormat[f]);var k=d(f),g=k[1],h=k[0];if(g<f.length){var l=1*Math.pow(10,g),l=e[1]/l*10;a/=l}}e="";void 0!==f&&(e=f.substr(g+k[0].length));a=G(a,b,c);e=e.replace(/'\.'/g,".");return h+a+e};H=function(a,c){var d=a+"",e=0,h=d.split(/e/i),f=h[0];ka.lastIndex=
0;var k=ka.exec(f);null!==k?(e=k[1].length-1,f=k[2]):f=f.replace(".","");var k=1<h.length?parseInt(h[1],10):0,h=parseInt(f,10),g=c.minimumIntegerDigits+c.maximumFractionDigits;f.length>g&&(g-=f.length,h=Math.round(h*Math.pow(10,g)));g=c.minimumIntegerDigits+c.minimumFractionDigits;h=b(h+"",g,!1);k=-1!==d.indexOf(".")?k-(c.minimumIntegerDigits-d.indexOf(".")+e):k-(g-f.length-c.minimumFractionDigits);d=Math.abs(k);d=b(d+"",c.minExponentDigits,!0);0>k&&(d=c.minusSign+d);e=h.slice(0,c.minimumIntegerDigits);
return e=0<h.slice(c.minimumIntegerDigits).length?e+(c.decimalSeparator+h.slice(c.minimumIntegerDigits)+c.exponential+d):e+(c.exponential+d)};G=function(a,c,d){var e=d.groupingSize,h=d.groupingSize0,f=d.decimalSeparator,k,g=(a+"").split(/e/i),l=1<g.length?parseInt(g[1],10):0;k=g[0];var g=k.split("."),m=1<g.length?g[1]:"",s;1<g.length&&m.length>l&&(s=Math.min(d.maximumFractionDigits,m.length-l),a=x(a,s,c.roundingMode||"DEFAULT"));g=(a+"").split(/e/i);l=1<g.length?parseInt(g[1],10):0;k=g[0];g=k.split(".");
k=g[0];m=1<g.length?g[1]:"";0<l?(m=b(m,l,!1),k+=m.slice(0,l),m=m.substr(l)):0>l&&(l=-l,k=b(k,l+1,!0),m=k.slice(-l,k.length)+m,k=k.slice(0,-l));m=0<s&&0<m.length?f+(m.length>s?m.slice(0,s):b(m,s,!1)):0<d.minimumFractionDigits?f:"";m=b(m,f.length+d.minimumFractionDigits,!1);a=d.groupingSeparator;f="";!1===c.useGrouping&&void 0===c.pattern&&(a="");k=b(k,d.minimumIntegerDigits,!0);c=k.length-1;for(m=1<m.length?m:"";0<=c;){if(0===e||e>c)return e=k.slice(0,c+1)+(f.length?a+f+m:m);f=k.slice(c-e+1,c+1)+(f.length?
a+f:"");c-=e;0<h&&(e=h)}return e=k.slice(0,c+1)+a+f+m};F=function(a,b,c){if("HALF_DOWN"===c||"HALF_EVEN"===c)a=a.substr(b),a=parseInt(a,10),5<a&&(c="HALF_UP");return c};x=function(a,b,c){var d=a.toString().split(".");if(void 0===d[1])return a;if("5"===d[1][b]&&"DEFAULT"!==c)return c=F(d[1],b,c),c=z(d,c,b),y(a,-b,c,d);b=Math.pow(10,b);b=Math.round(a*b)/b;return isFinite(b)?b:a};z=function(a,b,c){var d=ca[b];"HALF_EVEN"===b&&(d=0===(0===c?parseInt(a[0][a[0].length-1],10):parseInt(a[1][c-1],10))%2?ca.HALF_DOWN:
ca.HALF_UP);return d};y=function(a,b,c,d){if(0===b)return"5"===d[1][0]?Math[c](a):Math.round(a);d=a.toString().split("e");a=d[0];d=d[1];a=a+"e"+(d?parseInt(d,10)-b:-b);a=parseFloat(a);a=Math[c](a);d=a.toString().split("e");a=d[0];d=d[1];a=a+"e"+(d?parseInt(d,10)+b:b);return a=parseFloat(a)};d=function(b,c,d,e,h){var f=a.N.Kh(d);if(!isFinite(b))return Infinity===b||-Infinity===b?f.numbers[e.numberingSystem].infinity:f.numbers[e.numberingSystem].nan;d=Math.abs(b);!0===e.isPercent||"percent"===c.style?
d*=100:!0===e.isPerMill&&(d*=1E3);var k=c.decimalFormat;void 0===k&&(k=c.currencyFormat);var g=c.style;d="decimal"!==g&&"currency"!==g||void 0===k||"standard"===k?!0===e.useExponentialNotation?H(d,e):"unit"===g?B(d,c,e,f):G(d,c,e):C(d,c,e);c="";c=0>b&&0!==d-0?c+(e.negativePrefix+d+e.negativeSuffix):c+(e.positivePrefix+d+e.positiveSuffix);b=D(h);void 0===a.N.js[b]&&(b="latn");if("latn"!==b){h=[];for(e=0;e<c.length;e++)"0"<=c[e]&&"9">=c[e]?h.push(a.N.js[b][c[e]]):h.push(c[e]);return h.join("")}return c};
m=function(b,c,d,e){var h,f=a.N.rs(b),g="",l=!1,m=new RegExp("^"+e.numbers[d.numberingSystem].plusSign.replace(T,"\\$1")),f=f.replace(m,""),s=a.N.rs(d.positivePrefix),t=a.N.rs(d.positiveSuffix),r=a.N.rs(d.negativePrefix),m=a.N.rs(d.negativeSuffix),q=new RegExp("^"+(s||"").replace(T,"\\$1")),n=new RegExp((t||"").replace(T,"\\$1")+"$"),u=new RegExp("^"+(r||"").replace(T,"\\$1")),v=new RegExp((m||"").replace(T,"\\$1")+"$");if(!0===u.test(f)&&!0===v.test(f))f=f.replace(u,""),f=f.replace(v,""),g="-",l=
!0;else if(!0===q.test(f)&&!0===n.test(f))f=f.replace(q,""),f=f.replace(n,""),g="+",l=!0;else if("currency"===c.style){var n=q=d.currencyCode,w;void 0!==e.numbers.currencies[q]&&(n=e.numbers.currencies[q].symbol);void 0===d.currencyDisplay||"symbol"===d.currencyDisplay?w=n:"code"===d.currencyDisplay&&(w=q);void 0!==w&&(e=(s||"").replace(w,""),t=(t||"").replace(w,""),r=(r||"").replace(w,""),w=(m||"").replace(w,""),q=new RegExp(("^"+e).replace(T,"\\$1")),n=new RegExp(t.replace(T,"\\$1")+"$"),u=new RegExp(("^"+
r).replace(T,"\\$1")),v=new RegExp(w.replace(T,"\\$1")+"$"),!0===u.test(f)&&!0===v.test(f)?(f=f.replace(u,""),f=f.replace(v,""),g="-",l=!0):!0===q.test(f)&&!0===n.test(f)&&(f=f.replace(q,""),f=f.replace(n,""),g="+",l=!0))}l?h=[g,f]:"full"===d.lenientParse?(h=p(f,d),h[2]=!0):k(c.style,d,b);return h};p=function(b,c){var d=c.groupingSeparator,e=c.decimalSeparator,h=c.minusSign,f="",k="",g=a.N.$k(c.exponential);b=a.N.$k(b);b=b.split(g).join("E");b=b.split(d).join("");g=d.replace(/\u00A0/g," ");d!==g&&
(b=b.split(g).join(""));b=b.split(e).join(".");"."===b.charAt(0)&&(b=b.substr(1),k=".");b=b.replace(h,"-");d=ja.exec(b);k+=d[2];a.N.pn(k,"-")?(k=k.substr(1),f="-"):a.N.pn(b,"+")&&(k=k.substr(1),f="+");return[f,k]};t=function(b,c){var d=c.minusSign,e=c.plusSign,h;b=a.N.rs(b);d=a.N.rs(d);e=a.N.rs(e);a.N.pn(b,d)?h=["-",b.substr(d.length)]:a.N.pn(b,a.N.rs(e))&&(h=["+",b.substr(e.length)]);return h||["",b]};f=function(b,c){var d=D(c);if(void 0===a.N.js[d])return b;var e,h=[];for(e=0;e<b.length;e++){var f=
a.N.js[d].indexOf(b[e]);-1!==f?h.push(f):h.push(b[e])}return h.join("")};h=function(b,c){var d={},e=c.decimalSeparator,h=c.groupingSeparator;b=b.replace(/ /g,"");var f=c.exponential,k,g=b.indexOf(f.toLowerCase());0>g&&(g=b.indexOf(a.N.$k(f)));0>g?(k=b,d.exponent=null):(k=b.substr(0,g),d.exponent=b.substr(g+f.length));g=k.indexOf(e);0>g?(f=k,d.fraction=null):(f=k.substr(0,g),d.fraction=k.substr(g+e.length));f=f.split(h).join("");e=h.replace(/\u00A0/g," ");h!==e&&(f=f.split(e).join(""));d.integer=f;
return d};E=function(b,c,d,e){isNaN(b)&&k(c.style,d,e);!0===d.isPercent||"percent"===c.style?b/=100:!0===d.isPerMill&&(b/=1E3);a.N.$i(c,"OraNumberConverter.parse")("roundDuringParse","boolean",[!0,!1],!1)&&(b=q(b,d,c));return b};k=function(a,b,c){var d,e;d="Unparsable number "+c+" The expected number pattern is "+b.pat;switch(a){case "decimal":e="decimalFormatMismatch";break;case "currency":e="currencyFormatMismatch";break;case "percent":e="percentFormatMismatch"}a=Error(d);a.errorInfo={errorCode:e,
parameterMap:{value:c,format:b.pat}};throw a;};e=function(b,c,d,e){var g=a.N.Kh(c),l={},s=f(b,e);r(c,l,d,e);c=NaN;e=s.replace(/ /g,"");if(U.test(e))return c=parseFloat(s);e=m(s,d,l,g);var g=e[0],q=e[1],g=g||"+";if(e[2])return c=parseFloat(g+q),E(c,d,l,b);var n=h(q,l);e=n.fraction;q=n.exponent;g+=n.integer;null!==e&&(g+="."+e);null!==q&&(e=t(q,l),g+="e"+(e[0]||"+")+e[1]);Z.test(g)?c=parseFloat(g):"full"===l.lenientParse?(g=p(s,l),c=parseFloat(g[0]+g[1])):k(d.style,l,b);return E(c,d,l,b)};var S,R,L,
J;O=function(a){var b;b=new SyntaxError('Unexpected character(s) encountered in the pattern "'+a+' An example of a valid pattern is "#,##0.###".');b.errorInfo={errorCode:"optionValueInvalid",parameterMap:{propertyName:"pattern",propertyValue:a,propertyValueHint:"#,##0.###"}};throw b;};N=function(a,b,c){return null!==(new RegExp(c,"i")).exec(a.substr(b,c.length))};M=function(a,b){var c={};null!==S&&(b.positivePrefix=Q(S,a,b,c));null!==R&&(b.positiveSuffix=Q(R,a,b,c));null!==L&&(b.negativePrefix=Q(L,
a,b,c));null!==J&&(b.negativeSuffix=Q(J,a,b,c));void 0!==c.name&&(b.positiveSuffix="\u00a0"+c.name,b.positivePrefix="","ar"===b.lang?(b.negativeSuffix=a.numbers[b.numberingSystem].minusSign+"\u00a0"+c.name,b.negativePrefix=""):(b.negativeSuffix="\u00a0"+c.name,b.negativePrefix=a.numbers[b.numberingSystem].minusSign))};Q=function(a,b,c,d){for(var e="",h=0;h<a.length;){var f=a.charAt(h++);if("'"!==f){switch(f){case "\u00a4":var k=f=c.currencyCode,g=f;void 0!==b.numbers.currencies[f]&&(k=b.numbers.currencies[f].displayName,
g=b.numbers.currencies[f].symbol);void 0===c.currencyDisplay||"symbol"===c.currencyDisplay?f=g:"code"!==c.currencyDisplay&&(f=k,d.name=f);break;case "%":f=b.numbers[c.numberingSystem].percentSign;break;case "\u2030":f=b.numbers[c.numberingSystem].perMille;break;case "-":f=b.numbers[c.numberingSystem].minusSign}e=e.concat(f)}}return e};g=function(a,b,c,d){for(var e=!1,h=!1,f=0,k=0,g=!0,l=1;0<=l&&k<b.length;--l){for(var m=!1,t="",r="",p=-1,q=1,n=0,u=0,v=0,w=-1,F=-1,C,E=0,g=!0,G=k;G<b.length;++G){var B=
b.charAt(G);switch(E){case 0:case 2:if(m){if("'"===B){G+1<b.length&&"'"===b.charAt(G+1)?(++G,g?t=t.concat("''"):r=r.concat("''")):m=!1;continue}}else if("#"===B||"0"===B||","===B||"."===B){E=1;--G;continue}else if("\u00a4"===B){void 0===a.currency&&s("style");a.style="currency";(B=G+1<b.length&&"\u00a4"===b.charAt(G+1))&&++G;g?t=t.concat(B?"'\u00a4\u00a4":"'\u00a4"):r=r.concat(B?"'\u00a4\u00a4":"'\u00a4");continue}else if("'"===B){if("'"===B){G+1<b.length&&"'"===b.charAt(G+1)?(++G,g?t=t.concat("''"):
r=r.concat("''")):m=!0;continue}}else if(";"===B){0!==E&&0!==l||O(b);k=G+1;G=b.length;continue}else if("%"===B){a.style="percent";1!==q&&O(b);d.isPercent=!0;q=100;g?t=t.concat("'%"):r=r.concat("'%");continue}else if("\u2030"===B){1!==q&&O(b);a.style="perMill";d.isPerMill=!0;q=1E3;g?t=t.concat("'\u2030"):r=r.concat("'\u2030");continue}else if("-"===B){g?t=t.concat("'-"):r=r.concat("'-");continue}g?t=t.concat(B):r=r.concat(B);break;case 1:if(1===l)++f;else{0===--f&&(E=2,g=!1);continue}if("#"===B)0<
u?++v:++n,0<=w&&0>p&&++w;else if("0"===B)0<v&&O(b),++u,0<=w&&0>p&&++w;else if(","===B)F=w,w=0;else if("."===B)0<=p&&O(b),p=n+u+v;else if(N(b,G,"E")){h&&O(b);h=!0;C=0;for(G+=1;G<b.length&&"0"===b.charAt(G);)++C,++f,++G;(1>n+u||1>C)&&O(b);E=2;g=!1;--G}else E=2,g=!1,--G,--f}}0===u&&0<n&&0<=p&&(u=p,0===u&&++u,v=n-u,n=u-1,u=1);(0>p&&0<v||0<=p&&(p<n||p>n+u)||0===w||m)&&O(b);1===l?(S=t,R=r,L=S,J=R,m=n+u+v,d.minimumIntegerDigits=(0<=p?p:m)-n,d.maximumIntegerDigits=h?n+d.minimumIntegerDigits:2147483647,d.maximumFractionDigits=
0<=p?m-p:0,d.minimumFractionDigits=0<=p?n+u-p:0,d.groupingSize=0<w?w:0,d.groupingSize0=F):(L=t,J=r,e=!0)}0===b.length&&(S=R="",d.minimumIntegerDigits=0,d.maximumIntegerDigits=2147483647,d.minimumFractionDigits=0,d.maximumFractionDigits=2147483647);d.useExponentialNotation=h;d.minExponentDigits=C;if(!e||0===L.localeCompare(S)&&0===J.localeCompare(R))"currency"===a.style&&"ar"===d.lang?(J=R+"'\u200f-",L=S):(J=R,L="'-"+S);M(c,d)};q=function(a,b,c){var d=0>a;a=x(Math.abs(a),b.maximumFractionDigits,c.roundingMode||
"DEFAULT");return d?-a:a};V=function(b,c,d){var e={};n(c,"OraNumberConverter.resolvedOptions");r(b,e,c,d);e.numberingSystemKey=D(d);void 0===a.N.js[e.numberingSystemKey]&&(e.numberingSystemKey="latn");return e};aa=function(a,b,c){c={locale:c,style:void 0===b.style?"decimal":b.style,useGrouping:void 0===b.useGrouping?!0:b.useGrouping,numberingSystem:a.numberingSystemKey};c.minimumIntegerDigits=a.minimumIntegerDigits;c.minimumFractionDigits=a.minimumFractionDigits;c.maximumFractionDigits=a.maximumFractionDigits;
"decimal"===b.style&&void 0!==b.decimalFormat&&(c.decimalFormat=b.decimalFormat);"currency"===b.style&&void 0!==b.currencyFormat&&(c.currencyFormat=b.currencyFormat);"currency"===b.style&&(c.currency=b.currency,c.currencyDisplay=void 0===b.currencyDisplay?"symbol":b.currencyDisplay);void 0!==b.unit&&(c.unit=b.unit);void 0!==b.pattern&&(c.pattern=b.pattern);var d=b.roundingMode;b=b.roundDuringParse;void 0!==d&&(c.roundingMode=d);void 0!==b&&(c.roundDuringParse=b);b=a.lenientParse;void 0!==b&&(c.lenientParse=
b);a=a.separators;void 0!==a&&(c.separators=a);return c};return{Ta:function(){K||(K=c());return K}}}()});