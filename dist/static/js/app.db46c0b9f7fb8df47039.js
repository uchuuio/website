webpackJsonp([1,0],[function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var o=a(21),i=s(o),n=a(11),r=s(n);new i.default({el:"#app",template:"<App/>",components:{App:r.default}})},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(13),i=s(o),n=a(15),r=s(n),c=a(12),u=s(c);e.default={name:"app",components:{Hero:i.default,Project:r.default,About:u.default}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(14),i=s(o);e.default={name:"about",data:function(){return{}},components:{Member:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hero",data:function(){return{name:"uchuu",subtitle:"宇宙"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"member",props:["image","name","position","description","twitter","github","facebook","soundcloud","link"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project",props:["bg","color","textalign","name","tag","link","github"]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){var s,o;a(9),s=a(1);var i=a(19);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,o;a(10),s=a(2);var i=a(20);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-8be3a526",t.exports=s},function(t,e,a){var s,o;a(8),s=a(3);var i=a(18);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-4efa36ca",t.exports=s},function(t,e,a){var s,o;a(6),s=a(4);var i=a(16);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-35bb992c",t.exports=s},function(t,e,a){var s,o;a(7),s=a(5);var i=a(17);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-37405cf9",t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"member"},[e("img",{staticClass:"mw-100 br-100",attrs:{src:t.image,alt:t.name}})," ",e("h4",[t._s(t.name)])," ",e("h5",[t._s(t.position)])," ",e("p",[t._s(t.description)])," ",t.twitter?e("a",{staticClass:"twitter-link",attrs:{href:"https://twitter.com/"+t.twitter,title:"Follow "+t.name+" on Twitter"}},[e("i",{staticClass:"fa fa-twitter fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()," ",t.github?e("a",{staticClass:"github-link",attrs:{href:"https://github.com/"+t.github,title:"Follow "+t.name+" on Github"}},[e("i",{staticClass:"fa fa-github fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()," ",t.facebook?e("a",{staticClass:"facebook-link",attrs:{href:"https://facebook.com/"+t.facebook,title:"Like "+t.name+" on Facebook"}},[e("i",{staticClass:"fa fa-facebook-square fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()," ",t.soundcloud?e("a",{staticClass:"soundcloud-link",attrs:{href:"https://soundcloud.com/"+t.soundcloud,title:"Follow "+t.name+" on Soundcloud"}},[e("i",{staticClass:"fa fa-soundcloud fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()," ",t.link?e("a",{staticClass:"url-link",attrs:{href:t.link,title:t.name+"'s website"}},[e("i",{staticClass:"fa fa-globe fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"project pa4",style:{background:t.bg,color:t.color,textAlign:t.textalign}},[e("h3",{staticClass:"f2 mt0 di"},[t._s(t.name)])," ",t.github?e("span",{staticClass:"f3"},[" ",e("a",{staticClass:"github-link",style:{color:t.color},attrs:{href:t.github,title:"Check out "+t.name+" on Github"}},[e("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])]):t._e()," ",e("p",{staticClass:"lead"},[t._s(t.tag)])," ",t.link?e("a",{staticClass:"project-link mb0",style:{color:t.color},attrs:{href:t.link,title:"View "+t.name}},["View Project"]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"hero"},[e("div",{staticClass:"herobg"})," ",e("div",{staticClass:"herocontent"},[e("h1",{staticClass:"b f1 f-headline-ns lh-title tc db ma0"},[t._s(t.name)])," ",e("h2",{staticClass:"b f2 lh-title tc db mt0 mb4",staticStyle:{"margin-top":"-30px"}},[t._s(t.subtitle)])," ",t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"navigation tc"},[e("a",{staticClass:"projects-link link f6 f5-ns dib mr3",attrs:{href:"#projects",title:"Projects"}},["Projects"])," ",e("a",{staticClass:"about-link link f6 f5-ns dib mr3",attrs:{href:"#about",title:"About Us"}},["Who We Are"])," ",e("a",{staticClass:"github-link link f6 f5-ns dib mr3",attrs:{href:"https://github.com/uchuuio",title:"Github"}},["Github"])," "])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("hero")," ",e("div",{attrs:{id:"projects"}},[e("project",{attrs:{bg:"#FF4C3B",color:"#fff",textalign:"right",name:"Disbott",tag:"A chatbot for Discord",link:"https://disbott.uchuu.io",github:"https://github.com/uchuuio/disbott"}})," ",e("project",{attrs:{bg:"#0072BB",color:"#fff",textalign:"left",name:"EquationsApp",tag:"App for scientific equations",github:"https://github.com/uchuuio/EquationsApp"}})," ",e("project",{attrs:{bg:"#fff",color:"#111",textalign:"center",name:"Hubble",tag:"A dashboard system",github:"https://github.com/uchuuio/hubble"}})," ",e("project",{attrs:{bg:"#333",color:"#fff",textalign:"right",name:"StyleGuide",tag:"A styleguide to liveby",github:"https://github.com/uchuuio/styleguide"}})])," ",e("about")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"about mw8 mw9-ns center pa3 ph4-ns",attrs:{id:"about"}},[e("h3",{staticClass:"f2 mb1"},["Who We Are"])," ",e("p",["uchuu is a creative multimedia studio incorporating all aspects of multimedia with web development at the forefront. Our team has worked on not only web development but music and videos too. Set up and lead by tomo in the style of Japanese Circles such as Supercell & Honeyworks where the members of the group are not all musicians or artists but come together to work on projects together. Members are encouraged to share their work with other members so we can all lean on each other for support and feedback making everything we do the best it can be!"])," ",e("p",["The team is currently made of:"])," ",e("div",{staticClass:"cf ph2-ns"},[e("div",{staticClass:"fl w-100 w-20-ns pa2"},[e("member",{attrs:{image:"https://avatars3.githubusercontent.com/u/1489059?v=3&s=460",name:"tomo",position:"lead",description:"tomo leads the group working mostly as a developer though is known to do music. tomo likes to work in Javascript and has a great keeness for frontend development. In his spare time, he is learning Japanese, drumming and playing rhythm games.",twitter:"tomouchuu",github:"tomouchuu",link:"https://tomo.uchuu.io"}})])," ",e("div",{staticClass:"fl w-100 w-20-ns pa2"},[e("member",{attrs:{image:"https://scontent.flhr3-1.fna.fbcdn.net/v/t31.0-8/15122966_1810080195906559_6565989952278776640_o.jpg?oh=157072c9162343246cfa6ce74c661647&oe=58F3971A",name:"jess",position:"musician",description:"jess is the group's primary musician and colloborates with tomo and many artists outside of the uchuu group. When not singing she likes to dream about pugs.",twitter:"jessicamoorey",facebook:"jessicamoorevocalist",soundcloud:"jessicamoorevocalist",link:"http://www.jessicamoorevocalist.com/"}})])," ",e("div",{staticClass:"fl w-100 w-20-ns pa2"},[e("member",{attrs:{image:"static/sam.jpg",name:"sam",position:"developer",description:"sam is primarily a backend developer and has been working on disbott with tomo. He is relatively new to development but has great passion for his work and loves to learn. When not developing, Sam likes to play video games.",twitter:"Mcsamwich_",github:"80cmdude"}})])," ",e("div",{staticClass:"fl w-100 w-20-ns pa2"},[e("member",{attrs:{image:"https://avatars0.githubusercontent.com/u/17614920?v=3&s=460",name:"ash",position:"developer",description:"ash does things sometimes",github:"OrochiDesu"}})])," ",e("div",{staticClass:"fl w-100 w-20-ns pa2"},[e("member",{attrs:{image:"https://avatars0.githubusercontent.com/u/20307936?v=3&s=460",name:"dom",position:"developer",description:"dom does things sometimes",github:"Thatdwarf"}})])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.db46c0b9f7fb8df47039.js.map