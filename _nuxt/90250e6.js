(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{389:function(e,t,r){var content=r(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("6018341c",content,!0,{sourceMap:!1})},397:function(e,t,r){"use strict";r(389)},398:function(e,t,r){var n=r(21)(!1);n.push([e.i,"a[data-v-791fa659]{display:inline-block;font-size:1.15em}@media screen and (min-width:768px){a[data-v-791fa659]{font-size:1.5em}}.if-wrap[data-v-791fa659]{overflow:hidden;padding-top:66.666666%;position:relative}.if-wrap iframe[data-v-791fa659]{border:0;height:100%;left:0;position:absolute;top:0;width:100%}",""]),e.exports=n},421:function(e,t,r){"use strict";var n={props:{item:{type:Object,default:function(){return{}}}},data:function(){return{isClicked:!1}},methods:{imgClicked:function(){this.isClicked&&(this.isClicked=!0),document.location.href="/theater/".concat(this.item.id)}}},o=(r(397),r(4)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"tac"},[r("a",{attrs:{href:"/theater/"+e.item.id}},[e._v(e._s(e.item.title))])]),e._v(" "),r("div",{staticClass:"tac fs075"},[r("a",{attrs:{href:"/theater/"+e.item.id}},[e._v("\n      "+e._s(e.item.division)+", "+e._s(e.item.stagedPeriod))])]),e._v(" "),r("div",[r("img",{directives:[{name:"show",rawName:"v-show",value:e.item.noVideo||!e.isClicked,expression:"item.noVideo || !isClicked"}],staticClass:"p resp",attrs:{src:e.item.imgUrl,alt:"Spacer"},on:{click:function(t){return e.imgClicked()}}}),e._v(" "),e.item.noVideo?e._e():r("div",{directives:[{name:"show",rawName:"v-show",value:e.isClicked,expression:"isClicked"}],staticClass:"if-wrap"},[r("iframe",{attrs:{src:e.item.videoUrl,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}),[],!1,null,"791fa659",null);t.a=component.exports},427:function(e,t,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("09adc128",content,!0,{sourceMap:!1})},466:function(e,t,r){"use strict";r(427)},467:function(e,t,r){var n=r(21)(!1);n.push([e.i,".wmax-1200[data-v-0e9b1ad0]{max-width:1200px}a[data-v-0e9b1ad0]{display:inline-block;font-size:1.15em;padding-top:1em}@media screen and (min-width:768px){a[data-v-0e9b1ad0]{font-size:1.5em}}@media screen and (min-width:426px){.pr1-x[data-v-0e9b1ad0]{padding-right:.5em}}@media screen and (min-width:426px){.pl1-x[data-v-0e9b1ad0]{padding-left:.5em}}.youtube[data-v-0e9b1ad0]{width:100px}",""]),e.exports=n},560:function(e,t,r){"use strict";r.r(t);var n=r(386),o={auth:!1,components:{Show:r(421).a},data:function(){return{theater:[],theaterData:n.a.getTheaterData()}}},l=(r(466),r(4)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb1"},[r("div",{staticClass:"pure-gx wmax-1200 marg-ctr"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._l(e.theaterData,(function(e,t){return r("div",{key:t,staticClass:"pure-u-1 pure-u-sm-1-2 tar pr1-x"},[r("div",[r("show",{staticClass:"pt1",attrs:{item:e}})],1)])})),e._v(" "),e._e(),e._v(" "),e._e()],2)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pure-u-1-1 tal px1"},[r("h2",{staticClass:"tac pt1"},[e._v("King Theater Arts")]),e._v('\n      King School Theater presents dramas, comedies, and musicals in Lower,\n      Middle, and Upper Schools. All Grade 5 students perform in the annual\n      Grade 5 musical. The Middle School performs a play in the fall and a\n      musical in the spring. The Upper School similarly mounts a fall play and\n      spring musical. The Upper School theater arts program is honored to have\n      been invited the past two summers to participate in the prestigious\n      Edinburgh Festival Fringe in Scotland, most recently performing "You\'re\n      a Good Man, Charlie Brown."\n    ')])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pure-u-1-1 tac"},[r("a",{attrs:{href:"https://www.youtube.com/playlist?list=PLaLYWy9rgT7QBPwSqPKlMA7wiP2UzOQFF",target:"_blank"}},[r("span",{staticClass:"ffa2 fs1 dib pr05"},[e._v("Watch on")]),r("img",{staticClass:"youtube",attrs:{src:"https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"}})])])}],!1,null,"0e9b1ad0",null);t.default=component.exports}}]);