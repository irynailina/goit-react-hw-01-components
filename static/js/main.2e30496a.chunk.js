(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profileContainer:"profile_profileContainer__1qYZb",imageContainer:"profile_imageContainer__29nR3",name:"profile_name__ZktcE",tag:"profile_tag__3-b6C",location:"profile_location__3igBV",profileList:"profile_profileList__Crm5x",profileListItem:"profile_profileListItem__s1yJR",profileData:"profile_profileData__2zuyF",profileNumbers:"profile_profileNumbers__1pVBn"}},function(e,a,t){e.exports={statisticsContainer:"statistics_statisticsContainer__2W3TH",statsBlock:"statistics_statsBlock__3Z5yA",title:"statistics_title__1dIj4",statList:"statistics_statList__q1nFO",item:"statistics_item__J_Nn3",label:"statistics_label__2cq8y",percentage:"statistics_percentage__34rMO"}},function(e,a,t){e.exports={friendList:"friendList_friendList__1fMLo",item:"friendList_item__WiQ3b",status:"friendList_status__vlYLY",online:"friendList_online__2zwgz friendList_status__vlYLY",name:"friendList_name__3Qtsz"}},function(e,a,t){e.exports={transactionHistory:"transactionHistory_transactionHistory__2xONM",thead:"transactionHistory_thead__3uDh6",tbody:"transactionHistory_tbody__25d2I",trOdd:"transactionHistory_trOdd__17RZQ",trEven:"transactionHistory_trEven__2OMfG"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(19)},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),s=t.n(i),c=t(1),l=t.n(c),o=function(e){var a=e.name,t=e.tag,n=e.location,i=e.avatar,s=e.stats;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.a.profileContainer},r.a.createElement("div",{className:"description"},r.a.createElement("img",{src:i,alt:"user avatar",className:l.a.imageContainer}),r.a.createElement("p",{className:l.a.name},a),r.a.createElement("p",{className:l.a.tag},"@".concat(t)),r.a.createElement("p",{className:l.a.location},n)),r.a.createElement("ul",{className:l.a.profileList},r.a.createElement("li",{className:l.a.profileListItem},r.a.createElement("span",{className:l.a.profileData},"Followers"),r.a.createElement("span",{className:l.a.profileNumbers},s.followers)),r.a.createElement("li",{className:l.a.profileListItem},r.a.createElement("span",{className:l.a.profileData},"Views"),r.a.createElement("span",{className:l.a.profileNumbers},s.views)),r.a.createElement("li",{className:l.a.profileListItem},r.a.createElement("span",{className:l.a.profileData},"Likes"),r.a.createElement("span",{className:l.a.profileNumbers},s.likes)))))};o.defaultProps={avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMUo6atjJpnQlDCBp-HKEKEs1Y_CIJE1bE7JMQg18IReqKA8ee&usqp=CAU"};var m=t(2),d=t.n(m),p=function(e){var a=e.stat,t=a.label,n=a.percentage;return r.a.createElement("li",{className:d.a.item,style:{backgroundColor:"rgb("+Math.round(256*Math.random())+", "+Math.round(256*Math.random())+", "+Math.round(256*Math.random())+")"}},r.a.createElement("span",{className:d.a.label},t),r.a.createElement("span",{className:d.a.percentage},"".concat(n,"%")))},u=function(e){var a=e.title,t=e.stats;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:d.a.statisticsContainer},r.a.createElement("div",{className:d.a.statsBlock},a&&r.a.createElement("h2",{className:d.a.title},a),r.a.createElement("ul",{className:d.a.statList},t.map((function(e){return r.a.createElement(p,{key:e.id,stat:e})}))))))},f=t(8),b=t.n(f),_=t(3),y=t.n(_),E=function(e){var a=e.friend,t=a.isOnline,n=a.avatar,i=a.name;return r.a.createElement("li",{className:y.a.item},r.a.createElement("span",{className:t?y.a.online:y.a.status},t),r.a.createElement("img",{className:"avatar",src:n,alt:"",width:"48"}),r.a.createElement("p",{className:y.a.name},i))};E.defaultProps={friend:b.a.shape({avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMUo6atjJpnQlDCBp-HKEKEs1Y_CIJE1bE7JMQg18IReqKA8ee&usqp=CAU"})};var g=function(e){var a=e.friends;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:y.a.friendList},a.map((function(e){return r.a.createElement(E,{key:e.id,friend:e})}))))},N=t(4),v=t.n(N),h=function(e){var a=e.item,t=a.type,n=a.amount,i=a.currency,s=e.idx;return r.a.createElement("tr",{className:s%2===0?v.a.trEven:v.a.trOdd},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,i))},w=function(e){var a=e.items;return r.a.createElement("table",{className:v.a.transactionHistory},r.a.createElement("thead",{className:v.a.thead},r.a.createElement("tr",null,r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",{className:v.a.tbody},a.map((function(e,a){return r.a.createElement(h,{key:e.id,item:e,idx:a})}))))},L=t(5),C=t(9),O=t(10),M=t(11),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{name:L.name,tag:L.tag,location:L.location,avatar:L.avatar,stats:L.stats}),r.a.createElement(u,{title:"UPLOAD STATS",stats:C}),r.a.createElement(g,{friends:O}),r.a.createElement(w,{items:M}))};s.a.render(r.a.createElement(J,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.2e30496a.chunk.js.map