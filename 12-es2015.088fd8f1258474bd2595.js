(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{fpVi:function(t,e,o){"use strict";o.r(e);var r=o("ofXK"),i=o("3Pt+"),n=o("tyNb"),a=o("1kSV"),l=o("pzo4"),s=o("fXoL");const b=["labelImport"];let c=(()=>{class t{constructor(){this.fileToUpload=null,this.formImport=new i.h({importFile:new i.e("",i.w.required)})}onFileChange(t){this.labelImport.nativeElement.innerText=Array.from(t).map(t=>t.name).join(", "),this.fileToUpload=t.item(0)}import(){console.log("import "+this.fileToUpload.name)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["app-basic"]],viewQuery:function(t,e){var o;1&t&&s.Pc(b,!0),2&t&&s.Fc(o=s.jc())&&(e.labelImport=o.first)},decls:155,vars:0,consts:[[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"m-b-0","text-white"],["action","#"],[1,"card-body"],[1,"card-title"],[1,"form-body"],[1,"row","p-t-20"],[1,"col-md-6"],[1,"form-group"],[1,"control-label"],["type","text","id","firstName","placeholder","John doe",1,"form-control"],["type","text","id","lastName","placeholder","doe",1,"form-control"],["type","text","id","firstName","placeholder","+20456 xxxx xxx",1,"form-control"],["type","text","id","lastName","placeholder","joe@ymail.com",1,"form-control"],[1,"form-group","has-success"],[1,"form-control","custom-select"],["value",""],[1,"form-control-feedback"],["type","date",1,"form-control"],["data-placeholder","Choose a Room","tabindex","1",1,"form-control","custom-select"],["value","Room -111"],["value","Room -112"],["value","Room -113"],["value","Room -114"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio11","name","customRadio",1,"custom-control-input"],["for","customRadio11",1,"custom-control-label"],["type","radio","id","customRadio22","name","customRadio",1,"custom-control-input"],["for","customRadio22",1,"custom-control-label"],["data-placeholder","Choose a Category","tabindex","1",1,"form-control","custom-select"],[1,"card-title","m-t-40"],[1,"col-md-12"],["type","text",1,"form-control"],[1,"form-actions"],["type","submit",1,"btn","btn-success"],[1,"fa","fa-check"],["type","button",1,"btn","btn-dark"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"h4",4),s.Uc(5," Room Booking"),s.Vb(),s.Vb(),s.Wb(6,"form",5),s.Wb(7,"div",6),s.Wb(8,"h4",7),s.Uc(9,"Person Info"),s.Vb(),s.Vb(),s.Rb(10,"hr"),s.Wb(11,"div",8),s.Wb(12,"div",6),s.Wb(13,"div",9),s.Wb(14,"div",10),s.Wb(15,"div",11),s.Wb(16,"label",12),s.Uc(17,"First Name"),s.Vb(),s.Rb(18,"input",13),s.Vb(),s.Vb(),s.Wb(19,"div",10),s.Wb(20,"div",11),s.Wb(21,"label",12),s.Uc(22,"Last Name"),s.Vb(),s.Rb(23,"input",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(24,"div",9),s.Wb(25,"div",10),s.Wb(26,"div",11),s.Wb(27,"label",12),s.Uc(28,"Phone Number"),s.Vb(),s.Rb(29,"input",15),s.Vb(),s.Vb(),s.Wb(30,"div",10),s.Wb(31,"div",11),s.Wb(32,"label",12),s.Uc(33,"Email"),s.Vb(),s.Rb(34,"input",16),s.Vb(),s.Vb(),s.Vb(),s.Wb(35,"div",0),s.Wb(36,"div",10),s.Wb(37,"div",17),s.Wb(38,"label",12),s.Uc(39,"Gender"),s.Vb(),s.Wb(40,"select",18),s.Wb(41,"option",19),s.Uc(42,"Male"),s.Vb(),s.Wb(43,"option",19),s.Uc(44,"Female"),s.Vb(),s.Vb(),s.Wb(45,"small",20),s.Uc(46," Select gender "),s.Vb(),s.Vb(),s.Vb(),s.Wb(47,"div",10),s.Wb(48,"div",11),s.Wb(49,"label",12),s.Uc(50,"Check Out Day"),s.Vb(),s.Rb(51,"input",21),s.Vb(),s.Vb(),s.Vb(),s.Wb(52,"div",0),s.Wb(53,"div",10),s.Wb(54,"div",11),s.Wb(55,"label",12),s.Uc(56,"Select Room"),s.Vb(),s.Wb(57,"select",22),s.Wb(58,"option",23),s.Uc(59,"Room 111"),s.Vb(),s.Wb(60,"option",24),s.Uc(61,"Room 112"),s.Vb(),s.Wb(62,"option",25),s.Uc(63,"Room 115"),s.Vb(),s.Wb(64,"option",26),s.Uc(65,"Room 114"),s.Vb(),s.Vb(),s.Wb(66,"small",20),s.Uc(67," Select a Room "),s.Vb(),s.Vb(),s.Vb(),s.Wb(68,"div",10),s.Wb(69,"div",11),s.Wb(70,"label",12),s.Uc(71,"Romm Category"),s.Vb(),s.Wb(72,"div",27),s.Rb(73,"input",28),s.Wb(74,"label",29),s.Uc(75,"VIP"),s.Vb(),s.Vb(),s.Wb(76,"div",27),s.Rb(77,"input",30),s.Wb(78,"label",31),s.Uc(79,"Normal"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(80,"div",0),s.Wb(81,"div",10),s.Wb(82,"div",11),s.Wb(83,"label",12),s.Uc(84,"Total Days "),s.Vb(),s.Wb(85,"select",32),s.Wb(86,"option",23),s.Uc(87,"1"),s.Vb(),s.Wb(88,"option",24),s.Uc(89,"2"),s.Vb(),s.Wb(90,"option",25),s.Uc(91,"3"),s.Vb(),s.Wb(92,"option",26),s.Uc(93,"7"),s.Vb(),s.Wb(94,"option",26),s.Uc(95,"15"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(96,"div",10),s.Wb(97,"div",11),s.Wb(98,"label",12),s.Uc(99,"Parking"),s.Vb(),s.Wb(100,"div",27),s.Rb(101,"input",28),s.Wb(102,"label",29),s.Uc(103,"yes"),s.Vb(),s.Vb(),s.Wb(104,"div",27),s.Rb(105,"input",30),s.Wb(106,"label",31),s.Uc(107,"No"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(108,"h4",33),s.Uc(109,"Address"),s.Vb(),s.Vb(),s.Rb(110,"hr"),s.Wb(111,"div",6),s.Wb(112,"div",0),s.Wb(113,"div",34),s.Wb(114,"div",11),s.Wb(115,"label"),s.Uc(116,"Street"),s.Vb(),s.Rb(117,"input",35),s.Vb(),s.Vb(),s.Vb(),s.Wb(118,"div",0),s.Wb(119,"div",10),s.Wb(120,"div",11),s.Wb(121,"label"),s.Uc(122,"City"),s.Vb(),s.Rb(123,"input",35),s.Vb(),s.Vb(),s.Wb(124,"div",10),s.Wb(125,"div",11),s.Wb(126,"label"),s.Uc(127,"State"),s.Vb(),s.Rb(128,"input",35),s.Vb(),s.Vb(),s.Vb(),s.Wb(129,"div",0),s.Wb(130,"div",10),s.Wb(131,"div",11),s.Wb(132,"label"),s.Uc(133,"Post Code"),s.Vb(),s.Rb(134,"input",35),s.Vb(),s.Vb(),s.Wb(135,"div",10),s.Wb(136,"div",11),s.Wb(137,"label"),s.Uc(138,"Country"),s.Vb(),s.Wb(139,"select",18),s.Wb(140,"option"),s.Uc(141,"--Select your Country--"),s.Vb(),s.Wb(142,"option"),s.Uc(143,"India"),s.Vb(),s.Wb(144,"option"),s.Uc(145,"Sri Lanka"),s.Vb(),s.Wb(146,"option"),s.Uc(147,"USA"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(148,"div",36),s.Wb(149,"div",6),s.Wb(150,"button",37),s.Rb(151,"i",38),s.Uc(152," Save"),s.Vb(),s.Wb(153,"button",39),s.Uc(154,"Cancel"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb())},directives:[i.y,i.n,i.o,i.q,i.x],styles:[""]}),t})();function d(t){return null!=t}function u(t){try{const e=new Date(t);return!isNaN(e.getTime())}catch(e){return!1}}function m(t){try{if(t._d instanceof Date){const e=t._d,o=+e.getMonth()+1,r=+e.getDate();return`${e.getFullYear()}-${f(o)}-${f(r)}`}if("object"==typeof t&&null!=t.year&&null!=t.month&&null!=t.day){const e=+t.day;return`${t.year}-${f(+t.month)}-${f(e)}`}}catch(e){}return t}function f(t){return t<10?`0${t}`:t}o("mrSG");const p=t=>{let e,o=!1,r=t;const n=t instanceof i.e||t instanceof i.p;return a=>{if(!o&&n&&(o=!0,t.valueChanges.subscribe(()=>{a.updateValueAndValidity()})),n&&(r=t.value),e=m(r),!(u(e)||e instanceof Function)){if(null==e)return null;if(n)return{maxDate:{error:"maxDate is invalid"}};throw Error("maxDate value must be or return a formatted date")}if(d(i.w.required(a)))return null;const l=new Date(m(a.value)).getTime();return u(l)?(e instanceof Function&&(e=e()),l<=new Date(e).getTime()?null:n?{maxDate:{control:t,value:t.value}}:{maxDate:{value:r,control:void 0}}):{value:!0}}},v={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},h=t=>e=>{if(d(i.w.required(e)))return null;const o=e.value;return new RegExp(v[t]||v.all).test(o)?null:{uuid:!0}},g={provide:i.k,useExisting:Object(s.T)(()=>V),multi:!0};let V=(()=>{let t=class{validate(t){return(t=>{if(d(i.w.required(t)))return null;const e=t.value.replace(/[^0-9]+/g,"");if(!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(e))return{creditCard:!0};let o,r,n,a=0;for(let i=e.length-1;i>=0;i--)o=e.substring(i,i+1),r=parseInt(o,10),n?(r*=2,a+=r>=10?r%10+1:r):a+=r,n=!n;return Boolean(a%10==0&&e)?null:{creditCard:!0}})(t)}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Lb({type:t,selectors:[["","creditCard","","formControlName",""],["","creditCard","","formControl",""],["","creditCard","","ngModel",""]],features:[s.Ab([g])]}),t})();const W={provide:i.k,useExisting:Object(s.T)(()=>w),multi:!0};let w=(()=>{let t=class{ngOnInit(){this.validator=p(this.maxDate)}ngOnChanges(t){for(const e in t)"maxDate"===e&&(this.validator=p(t[e].currentValue),this.onChange&&this.onChange())}validate(t){return this.validator(t)}registerOnValidatorChange(t){this.onChange=t}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Lb({type:t,selectors:[["","maxDate","","formControlName",""],["","maxDate","","formControl",""],["","maxDate","","ngModel",""]],inputs:{maxDate:"maxDate"},features:[s.Ab([W]),s.zb]}),t})();const y={provide:i.k,useExisting:Object(s.T)(()=>S),multi:!0};let S=(()=>{let t=class{validate(t){return d(i.w.required(e=t))?null:/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e.value)?null:{number:!0};var e}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Lb({type:t,selectors:[["","number","","formControlName",""],["","number","","formControl",""],["","number","","ngModel",""]],features:[s.Ab([y])]}),t})();const x={provide:i.k,useExisting:Object(s.T)(()=>k),multi:!0};let k=(()=>{let t=class{validate(t){return d(i.w.required(e=t))?null:/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e.value)?null:{url:!0};var e}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Lb({type:t,selectors:[["","url","","formControlName",""],["","url","","formControl",""],["","url","","ngModel",""]],features:[s.Ab([x])]}),t})();const U={provide:i.k,useExisting:Object(s.T)(()=>C),multi:!0};let C=(()=>{let t=class{ngOnInit(){this.validator=h(this.uuid)}ngOnChanges(t){for(const e in t)"uuid"===e&&(this.validator=h(t[e].currentValue),this.onChange&&this.onChange())}validate(t){return this.validator(t)}registerOnValidatorChange(t){this.onChange=t}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Lb({type:t,selectors:[["","uuid","","formControlName",""],["","uuid","","formControl",""],["","uuid","","ngModel",""]],inputs:{uuid:"uuid"},features:[s.Ab([U]),s.zb]}),t})(),F=(()=>{let t=class{};return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)}}),t})();const M=["f"],D=["vform"];function R(t,e){1&t&&(s.Wb(0,"small",36),s.Uc(1,"creditCard error"),s.Vb())}function A(t,e){1&t&&(s.Wb(0,"small",36),s.Uc(1,"maxDate error"),s.Vb())}function N(t,e){1&t&&(s.Wb(0,"small",36),s.Uc(1,"Fax number "),s.Vb())}function B(t,e){1&t&&(s.Wb(0,"small",36),s.Uc(1,"phone"),s.Vb())}function I(t,e){1&t&&(s.Wb(0,"small",36),s.Uc(1,"hotel@ymail.com"),s.Vb())}function T(t,e){1&t&&(s.Wb(0,"small",36),s.Uc(1,"Tax id"),s.Vb())}let P=(()=>{class t{constructor(){this.radioOptions=["Choose this","Choose me"]}ngOnInit(){this.regularForm=new i.h({inputEmail:new i.e(null,[i.w.required,i.w.email]),password:new i.e(null,[i.w.required,i.w.minLength(4),i.w.maxLength(24)]),textArea:new i.e(null,[i.w.required]),radioOption:new i.e("Option one is this")},{updateOn:"blur"})}onReactiveFormSubmit(){this.regularForm.reset()}onTemplateFormSubmit(){this.floatingLabelForm.reset()}onCustomFormSubmit(){this.validationForm.reset()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){var o;1&t&&(s.Pc(M,!0),s.Pc(D,!0)),2&t&&(s.Fc(o=s.jc())&&(e.floatingLabelForm=o.first),s.Fc(o=s.jc())&&(e.validationForm=o.first))},decls:57,vars:6,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header","bg-success"],[1,"card-title","mb-0","text-white"],[1,"card-body"],[1,"card-block"],[3,"ngSubmit"],["vform","ngForm"],[1,"form-group"],["for","required"],["type","text","ngModel","","name","required","required","","placeholder","Hotel Name ",1,"form-control"],["required","ngModel"],["for","creditCard"],["type","text","ngModel","","name","creditCard","placeholder","AFSFFSFSFSFSFFFSF^^&%$$%%%%","creditCard","",1,"form-control"],["creditCard","ngModel"],["class","form-text text-danger",4,"ngIf"],["for","maxDate"],["type","date","ngModel","","name","maxDate","placeholder","maxDate 2017-11-11","maxDate","2017-11-11",1,"form-control"],["maxDate","ngModel"],["for","number"],["type","text","ngModel","","name","number","placeholder","number","number","",1,"form-control"],["number","ngModel"],["for","phone"],["type","text","ngModel","","name","phone","placeholder","phone","phone","",1,"form-control"],["phone","ngModel"],["for","url"],["type","text","ngModel","","name","url","placeholder","Email","url","",1,"form-control"],["url","ngModel"],["for","uuid"],["type","text","ngModel","","name","uuid","placeholder","Tax id","uuid","",1,"form-control"],["uuid","ngModel"],[1,"form-group","row"],[1,"col-md-12"],["type","button",1,"btn","btn-success","btn-raised","mr-1"],["type","button",1,"btn","btn-dark","btn-raised"],[1,"form-text","text-danger"]],template:function(t,e){if(1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"h4",4),s.Uc(5,"General Settings"),s.Vb(),s.Vb(),s.Wb(6,"div",5),s.Wb(7,"div",6),s.Wb(8,"form",7,8),s.ic("ngSubmit",(function(){return e.onCustomFormSubmit()})),s.Wb(10,"div",9),s.Wb(11,"label",10),s.Uc(12,"Hotel Name"),s.Vb(),s.Rb(13,"input",11,12),s.Vb(),s.Wb(15,"div",9),s.Wb(16,"label",13),s.Uc(17,"Stripe API KEY"),s.Vb(),s.Rb(18,"input",14,15),s.Sc(20,R,2,0,"small",16),s.Vb(),s.Wb(21,"div",9),s.Wb(22,"label",17),s.Uc(23,"Date & Year Setup"),s.Vb(),s.Rb(24,"input",18,19),s.Sc(26,A,2,0,"small",16),s.Vb(),s.Wb(27,"div",9),s.Wb(28,"label",20),s.Uc(29,"Fax Number"),s.Vb(),s.Rb(30,"input",21,22),s.Sc(32,N,2,0,"small",16),s.Vb(),s.Wb(33,"div",9),s.Wb(34,"label",23),s.Uc(35,"Phone"),s.Vb(),s.Rb(36,"input",24,25),s.Sc(38,B,2,0,"small",16),s.Vb(),s.Wb(39,"div",9),s.Wb(40,"label",26),s.Uc(41,"Email"),s.Vb(),s.Rb(42,"input",27,28),s.Sc(44,I,2,0,"small",16),s.Vb(),s.Wb(45,"div",9),s.Wb(46,"label",29),s.Uc(47,"Tax id"),s.Vb(),s.Rb(48,"input",30,31),s.Sc(50,T,2,0,"small",16),s.Vb(),s.Vb(),s.Vb(),s.Wb(51,"div",32),s.Wb(52,"div",33),s.Wb(53,"button",34),s.Uc(54,"Submit"),s.Vb(),s.Wb(55,"button",35),s.Uc(56,"Cancel"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t){const t=s.Gc(19),e=s.Gc(25),o=s.Gc(31),r=s.Gc(37),i=s.Gc(43),n=s.Gc(49);s.Bb(20),s.tc("ngIf",null==t.errors?null:t.errors.creditCard),s.Bb(6),s.tc("ngIf",null==e.errors?null:e.errors.maxDate),s.Bb(6),s.tc("ngIf",null==o.errors?null:o.errors.number),s.Bb(6),s.tc("ngIf",null==r.errors?null:r.errors.phone),s.Bb(6),s.tc("ngIf",null==i.errors?null:i.errors.url),s.Bb(6),s.tc("ngIf",null==n.errors?null:n.errors.uuid)}},directives:[i.y,i.n,i.o,i.b,i.m,i.p,i.u,V,r.u,w,S,k,C],encapsulation:2}),t})();var z=o("Egam");const O=[{path:"",children:[{path:"formbasic",component:c,data:{title:"Room Booking",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Room Booking"}]}},{path:"formvalidation",component:P,data:{title:"Settings",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Settings"}]}},{path:"multiselect",component:(()=>{class t{constructor(){this.dropdownList=[],this.cities=[],this.selectedItems=[],this.singleselectedItems=[],this.dropdownSettings={},this.singledropdownSettings={},this.closeDropdownSelection=!1}ngOnInit(){this.dropdownList=[{item_id:1,item_text:"Mumbai"},{item_id:2,item_text:"Bangaluru"},{item_id:3,item_text:"Pune"},{item_id:4,item_text:"Navsari"},{item_id:5,item_text:"New Delhi"}],this.cities=["Mumbai","New Delhi","Bangaluru","Pune","Navsari"],this.selectedItems=[{item_id:3,item_text:"Pune"},{item_id:4,item_text:"Navsari"}],this.singleselectedItems=["Pune"],this.singledropdownSettings={singleSelection:!0,selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0,closeDropDownOnSelection:this.closeDropdownSelection},this.dropdownSettings={singleSelection:!1,idField:"item_id",textField:"item_text",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0}}onItemSelect(t){console.log(t)}onSelectAll(t){console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["app-multiselect"]],decls:10,vars:7,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"placeholder","data","ngModel","settings","ngModelChange","onSelect","onSelectAll"],[1,"card-title","mt-4"],["name","city",3,"data","ngModel","settings","ngModelChange","onSelect"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"h4",4),s.Uc(5,"Multiple Select"),s.Vb(),s.Wb(6,"ng-multiselect-dropdown",5),s.ic("ngModelChange",(function(t){return e.selectedItems=t}))("onSelect",(function(t){return e.onItemSelect(t)}))("onSelectAll",(function(t){return e.onSelectAll(t)})),s.Vb(),s.Wb(7,"h4",6),s.Uc(8,"Single Select"),s.Vb(),s.Wb(9,"ng-multiselect-dropdown",7),s.ic("ngModelChange",(function(t){return e.singleselectedItems=t}))("onSelect",(function(t){return e.onItemSelect(t)})),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Bb(6),s.tc("placeholder","custom placeholder")("data",e.dropdownList)("ngModel",e.selectedItems)("settings",e.dropdownSettings),s.Bb(3),s.tc("data",e.cities)("ngModel",e.singleselectedItems)("settings",e.singledropdownSettings))},directives:[z.a,i.m,i.p],styles:[""]}),t})(),data:{title:"Multiselect",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Multiselect"}]}},{path:"ngx",loadChildren:()=>Promise.resolve().then(o.bind(null,"pzo4")).then(t=>t.NGXFormWizardModule)}]}];o.d(e,"FormModule",(function(){return q}));let q=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[r.c,i.t,a.u,n.j.forChild(O),i.j,z.b,l.NGXFormWizardModule,F]]}),t})()},pzo4:function(t,e,o){"use strict";o.r(e);var r=o("tyNb"),i=o("fXoL"),n=o("ofXK");let a=(()=>{class t{constructor(t,e){this.router=t,this.route=e,this.page="Personal"}ngOnInit(){this.router.events.subscribe(t=>{let e=this.route.root;for(;void 0!==e.children[0];)e=e.children[0];this.page=e.snapshot.data.title})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(r.f),i.Qb(r.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["msw-navbar"]],decls:18,vars:4,consts:[[1,"wizard-navbar"],[1,"liner"],[1,"active","flex-fill"],["uiSrefActive","active","uiSref","personal","data-toggle","tab","title","personal",3,"ngClass"],[1,"round-tabs","one"],[1,"icon-user"],[1,"flex-fill"],["uiSrefActive","active","uiSref","work","data-toggle","tab","title","work",3,"ngClass"],[1,"round-tabs","two"],[1,"icon-briefcase"],["uiSrefActive","active","uiSref","address","data-toggle","tab","title","address",3,"ngClass"],[1,"round-tabs","three"],[1,"icon-location-pin"],["uiSrefActive","active","uiSref","result","data-toggle","tab","title","completed",3,"ngClass"],[1,"round-tabs","four"],[1,"icon-cursor"]],template:function(t,e){1&t&&(i.Wb(0,"ul",0),i.Rb(1,"div",1),i.Wb(2,"li",2),i.Wb(3,"a",3),i.Wb(4,"span",4),i.Rb(5,"i",5),i.Vb(),i.Vb(),i.Vb(),i.Wb(6,"li",6),i.Wb(7,"a",7),i.Wb(8,"span",8),i.Rb(9,"i",9),i.Vb(),i.Vb(),i.Vb(),i.Wb(10,"li",6),i.Wb(11,"a",10),i.Wb(12,"span",11),i.Rb(13,"i",12),i.Vb(),i.Vb(),i.Vb(),i.Wb(14,"li",6),i.Wb(15,"a",13),i.Wb(16,"span",14),i.Rb(17,"i",15),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&t&&(i.Bb(3),i.tc("ngClass","Personal"===e.page?"nav-link active":"nav-link"),i.Bb(4),i.tc("ngClass","Work"===e.page?"nav-link active":"nav-link"),i.Bb(4),i.tc("ngClass","Address"===e.page?"nav-link active":"nav-link"),i.Bb(4),i.tc("ngClass","Result"===e.page?"nav-link active":"nav-link"))},directives:[n.r],styles:[""]}),t})(),l=(()=>{class t{constructor(t,e){this.router=t,this.route=e}ngOnInit(){this.router.navigate(["/forms/ngx/wizard"],{skipLocationChange:!0})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(r.f),i.Qb(r.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["multi-step-wizard-app"]],decls:8,vars:0,consts:[["id","ngx"],[1,"card"],[1,"card-body"],[1,"card-block"],[1,"board"],[1,"tab-content"]],template:function(t,e){1&t&&(i.Wb(0,"section",0),i.Wb(1,"div",1),i.Wb(2,"div",2),i.Wb(3,"div",3),i.Wb(4,"div",4),i.Rb(5,"msw-navbar"),i.Wb(6,"div",5),i.Rb(7,"router-outlet"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb())},directives:[a,r.k],styles:[".tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]{padding-top:20px}.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:8px}.ng-valid.required[_ngcontent-%COMP%], .ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid #42a948}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}"]}),t})();class s{constructor(){this.firstName="",this.lastName="",this.email="",this.work="",this.street="",this.city="",this.state="",this.zip=""}clear(){this.firstName="",this.lastName="",this.email="",this.work="",this.street="",this.city="",this.state="",this.zip=""}}let b=(()=>{class t{constructor(){this.workflow=[{step:"personal",valid:!1},{step:"work",valid:!1},{step:"address",valid:!1},{step:"result",valid:!1}]}validateStep(t){for(var e=!1,o=0;o<this.workflow.length&&!e;o++)this.workflow[o].step===t&&(e=this.workflow[o].valid=!0)}resetSteps(){this.workflow.forEach(t=>{t.valid=!1})}getFirstInvalidStep(t){for(var e=!1,o=!0,r="",i=0;i<this.workflow.length&&!e&&o;i++){let n=this.workflow[i];n.step===t?(e=!0,r=""):(o=n.valid,r=n.step)}return r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Mb({token:t,factory:t.\u0275fac}),t})(),c=(()=>{class t{constructor(t){this.workflowService=t,this.formData=new s,this.isPersonalFormValid=!1,this.isWorkFormValid=!1,this.isAddressFormValid=!1}getPersonal(){return{firstName:this.formData.firstName,lastName:this.formData.lastName,email:this.formData.email}}setPersonal(t){this.isPersonalFormValid=!0,this.formData.firstName=t.firstName,this.formData.lastName=t.lastName,this.formData.email=t.email,this.workflowService.validateStep("personal")}getWork(){return this.formData.work}setWork(t){this.isWorkFormValid=!0,this.formData.work=t,this.workflowService.validateStep("work")}getAddress(){return{street:this.formData.street,city:this.formData.city,state:this.formData.state,zip:this.formData.zip}}setAddress(t){this.isAddressFormValid=!0,this.formData.street=t.street,this.formData.city=t.city,this.formData.state=t.state,this.formData.zip=t.zip,this.workflowService.validateStep("address")}getFormData(){return this.formData}resetFormData(){return this.workflowService.resetSteps(),this.formData.clear(),this.isPersonalFormValid=this.isWorkFormValid=this.isAddressFormValid=!1,this.formData}isFormValid(){return this.isPersonalFormValid&&this.isWorkFormValid&&this.isAddressFormValid}}return t.\u0275fac=function(e){return new(e||t)(i.ec(b))},t.\u0275prov=i.Mb({token:t,factory:t.\u0275fac}),t})();var d=o("3Pt+");function u(t,e){1&t&&(i.Wb(0,"small",21),i.Uc(1,"This field is required!"),i.Vb())}function m(t,e){1&t&&(i.Wb(0,"small",21),i.Uc(1,"This field is required!"),i.Vb())}function f(t,e){1&t&&(i.Wb(0,"small",22),i.Uc(1,"Please enter a valid email!"),i.Vb())}function p(t,e){1&t&&(i.Wb(0,"small",26),i.Uc(1,"This field is required!"),i.Vb())}function v(t,e){1&t&&(i.Wb(0,"small",26),i.Uc(1,"This field is required!"),i.Vb())}function h(t,e){1&t&&(i.Wb(0,"small",26),i.Uc(1,"This field is required!"),i.Vb())}function g(t,e){1&t&&(i.Wb(0,"small",26),i.Uc(1,"This field is required!"),i.Vb())}const V=[{path:"",component:l,data:{title:"ngx-wizard"},children:[{path:"wizard",component:(()=>{class t{constructor(t,e,o,r){this.router=t,this.route=e,this.formDataService=o,this.workflowService=r,this.title="Please tell us about yourself."}ngOnInit(){this.personal=this.formDataService.getPersonal()}save(t){t.valid&&(this.formDataService.setPersonal(this.personal),this.workflowService.getFirstInvalidStep("work"),this.router.navigateByUrl("/forms/ngx/work",{relativeTo:this.route.parent,skipLocationChange:!0}))}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(r.f),i.Qb(r.a),i.Qb(c),i.Qb(b))},t.\u0275cmp=i.Kb({type:t,selectors:[["mt-wizard-personal"]],decls:32,vars:8,consts:[["novalidate","",1,"editForm"],["personalForm","ngForm"],[1,"tab-pane","active"],[1,"font-medium-2","text-center"],[1,"row"],[1,"col-12"],[1,"col-12","col-sm-6"],[1,"form-group"],["for","firstname",1,"form-control-label"],["required","","id","firstname","name","firstname","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["firstname","ngModel"],["class","form-text text-muted danger",4,"ngIf"],["for","lastname",1,"form-control-label"],["required","","id","lastname","name","lastname","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["lastname","ngModel"],["for","email",1,"form-control-label"],["required","","email","","id","email","name","email","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["email","ngModel"],["class","form-text text-danger",4,"ngIf"],[1,"form-group","text-center"],["type","button","uiSref","work",1,"btn","btn-success","btn-raised",3,"disabled","click"],[1,"form-text","text-muted","danger"],[1,"form-text","text-danger"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"form",0,1),i.Wb(2,"div",2),i.Wb(3,"p",3),i.Uc(4),i.Vb(),i.Rb(5,"br"),i.Wb(6,"div",4),i.Wb(7,"div",5),i.Wb(8,"div",4),i.Wb(9,"div",6),i.Wb(10,"div",7),i.Wb(11,"label",8),i.Uc(12,"First Name"),i.Vb(),i.Wb(13,"input",9,10),i.ic("ngModelChange",(function(t){return e.personal.firstName=t})),i.Vb(),i.Sc(15,u,2,0,"small",11),i.Vb(),i.Vb(),i.Wb(16,"div",6),i.Wb(17,"div",7),i.Wb(18,"label",12),i.Uc(19,"Last Name"),i.Vb(),i.Wb(20,"input",13,14),i.ic("ngModelChange",(function(t){return e.personal.lastName=t})),i.Vb(),i.Sc(22,m,2,0,"small",11),i.Vb(),i.Vb(),i.Vb(),i.Wb(23,"div",7),i.Wb(24,"label",15),i.Uc(25,"Email"),i.Vb(),i.Wb(26,"input",16,17),i.ic("ngModelChange",(function(t){return e.personal.email=t})),i.Vb(),i.Sc(28,f,2,0,"small",18),i.Vb(),i.Wb(29,"div",19),i.Wb(30,"button",20),i.ic("click",(function(){i.Jc(t);const o=i.Gc(1);return e.save(o)})),i.Uc(31," Next "),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()}if(2&t){const t=i.Gc(1),o=i.Gc(14),r=i.Gc(21),n=i.Gc(27);i.Bb(4),i.Vc(e.title),i.Bb(9),i.tc("ngModel",e.personal.firstName),i.Bb(2),i.tc("ngIf",!o.valid&&(o.dirty||o.touched)),i.Bb(5),i.tc("ngModel",e.personal.lastName),i.Bb(2),i.tc("ngIf",!r.valid&&(r.dirty||r.touched)),i.Bb(4),i.tc("ngModel",e.personal.email),i.Bb(2),i.tc("ngIf",!n.valid&&(n.dirty||n.touched)),i.Bb(2),i.tc("disabled",!t.valid)}},directives:[d.y,d.n,d.o,d.b,d.u,d.m,d.p,n.u,d.c],styles:[""]}),t})(),data:{title:"Personal"}},{path:"work",component:(()=>{class t{constructor(t,e,o,r){this.router=t,this.route=e,this.formDataService=o,this.workflowService=r,this.title="What do you do?"}ngOnInit(){this.workType=this.formDataService.getWork()}save(t){t.valid&&(this.formDataService.setWork(this.workType),this.workflowService.getFirstInvalidStep("work"),this.router.navigate(["address"],{relativeTo:this.route.parent,skipLocationChange:!0}))}cancel(){this.router.navigate(["wizard"],{relativeTo:this.route.parent,skipLocationChange:!0})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(r.f),i.Qb(r.a),i.Qb(c),i.Qb(b))},t.\u0275cmp=i.Kb({type:t,selectors:[["mt-wizard-work"]],decls:29,vars:5,consts:[["novalidate","",1,"editForm"],["workForm","ngForm"],[1,"tab-pane","active"],[1,"head","text-center"],[1,"row"],[1,"col-offset-4","col-10","col-sm-offset-5","col-sm-4"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio1","required","","name","work","value","Design",1,"custom-control-input",3,"ngModel","ngModelChange"],["work","ngModel"],["for","customRadio1",1,"custom-control-label"],["type","radio","id","customRadio2","required","","name","work","value","Code",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customRadio2",1,"custom-control-label"],["type","radio","id","customRadio3","required","","name","work","value","Deploy",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customRadio3",1,"custom-control-label"],[1,"form-group","text-center","space-20"],["uiSref","personal","type","button",1,"btn","btn-raised","btn-secondary","mr-1",3,"click"],["uiSref","address","type","button",1,"btn","btn-raised","btn-info",3,"disabled","click"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"form",0,1),i.Wb(2,"div"),i.Wb(3,"div",2),i.Wb(4,"h4",3),i.Uc(5),i.Vb(),i.Rb(6,"br"),i.Wb(7,"div",4),i.Wb(8,"div",5),i.Wb(9,"div",6),i.Wb(10,"input",7,8),i.ic("ngModelChange",(function(t){return e.workType=t})),i.Vb(),i.Wb(12,"label",9),i.Uc(13,"Design"),i.Vb(),i.Vb(),i.Wb(14,"div",6),i.Wb(15,"input",10,8),i.ic("ngModelChange",(function(t){return e.workType=t})),i.Vb(),i.Wb(17,"label",11),i.Uc(18,"Code"),i.Vb(),i.Vb(),i.Wb(19,"div",6),i.Wb(20,"input",12,8),i.ic("ngModelChange",(function(t){return e.workType=t})),i.Vb(),i.Wb(22,"label",13),i.Uc(23,"Deploy"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Wb(24,"div",14),i.Wb(25,"button",15),i.ic("click",(function(){return e.cancel()})),i.Uc(26," Previous"),i.Vb(),i.Wb(27,"button",16),i.ic("click",(function(){i.Jc(t);const o=i.Gc(1);return e.save(o)})),i.Uc(28," Next "),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()}if(2&t){const t=i.Gc(1);i.Bb(5),i.Vc(e.title),i.Bb(5),i.tc("ngModel",e.workType),i.Bb(5),i.tc("ngModel",e.workType),i.Bb(5),i.tc("ngModel",e.workType),i.Bb(7),i.tc("disabled",!t.valid)}},directives:[d.y,d.n,d.o,d.s,d.b,d.u,d.m,d.p],styles:[""]}),t})(),data:{title:"Work"}},{path:"address",component:(()=>{class t{constructor(t,e,o,r){this.router=t,this.route=e,this.formDataService=o,this.workflowService=r,this.title="Where do you live?"}ngOnInit(){this.address=this.formDataService.getAddress()}save(t){t.valid&&(this.formDataService.setAddress(this.address),this.workflowService.getFirstInvalidStep("work"),this.router.navigate(["result"],{relativeTo:this.route.parent,skipLocationChange:!0}))}cancel(){this.router.navigate(["work"],{relativeTo:this.route.parent,skipLocationChange:!0})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(r.f),i.Qb(r.a),i.Qb(c),i.Qb(b))},t.\u0275cmp=i.Kb({type:t,selectors:[["mt-wizard-address"]],decls:41,vars:10,consts:[["novalidate","",1,"editForm"],["addressForm","ngForm"],[1,"tab-pane","active"],[1,"head","text-center"],[1,"row"],[1,"col-sm-12"],[1,"form-group"],["for","street",1,"form-control-label"],["required","","id","street","name","street","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["street","ngModel"],["class","form-text text-muted danger",4,"ngIf"],[1,"col-12","col-sm-4"],["for","city",1,"form-control-label"],["required","","id","city","name","city","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["city","ngModel"],[1,"col-4","col-sm-offset-1","col-sm-3"],["for","state",1,"form-control-label"],["required","","id","state","name","state","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["state","ngModel"],[1,"col-offset-1","col-7","col-sm-offset-1","col-sm-3"],["for","zip",1,"form-control-label"],["required","","id","zip","name","zip","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["zip","ngModel"],[1,"form-group","text-center"],["uiSref","work","type","button",1,"btn","btn-raised","btn-secondary","mr-1",3,"click"],["uiSref","result","type","button",1,"btn","btn-raised","btn-info",3,"disabled","click"],[1,"form-text","text-muted","danger"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"form",0,1),i.Wb(2,"div",2),i.Wb(3,"h4",3),i.Uc(4),i.Vb(),i.Rb(5,"br"),i.Wb(6,"div",4),i.Wb(7,"div",5),i.Wb(8,"div",6),i.Wb(9,"label",7),i.Uc(10,"Street Address"),i.Vb(),i.Wb(11,"input",8,9),i.ic("ngModelChange",(function(t){return e.address.street=t})),i.Vb(),i.Sc(13,p,2,0,"small",10),i.Vb(),i.Wb(14,"div",4),i.Wb(15,"div",11),i.Wb(16,"div",6),i.Wb(17,"label",12),i.Uc(18,"City"),i.Vb(),i.Wb(19,"input",13,14),i.ic("ngModelChange",(function(t){return e.address.city=t})),i.Vb(),i.Sc(21,v,2,0,"small",10),i.Vb(),i.Vb(),i.Wb(22,"div",15),i.Wb(23,"div",6),i.Wb(24,"label",16),i.Uc(25,"State"),i.Vb(),i.Wb(26,"input",17,18),i.ic("ngModelChange",(function(t){return e.address.state=t})),i.Vb(),i.Sc(28,h,2,0,"small",10),i.Vb(),i.Vb(),i.Wb(29,"div",19),i.Wb(30,"div",6),i.Wb(31,"label",20),i.Uc(32,"Zip"),i.Vb(),i.Wb(33,"input",21,22),i.ic("ngModelChange",(function(t){return e.address.zip=t})),i.Vb(),i.Sc(35,g,2,0,"small",10),i.Vb(),i.Vb(),i.Vb(),i.Wb(36,"div",23),i.Wb(37,"button",24),i.ic("click",(function(){return e.cancel()})),i.Uc(38,"Previous"),i.Vb(),i.Wb(39,"button",25),i.ic("click",(function(){i.Jc(t);const o=i.Gc(1);return e.save(o)})),i.Uc(40," Next "),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Vb()}if(2&t){const t=i.Gc(1),o=i.Gc(12),r=i.Gc(20),n=i.Gc(27),a=i.Gc(34);i.Bb(4),i.Vc(e.title),i.Bb(7),i.tc("ngModel",e.address.street),i.Bb(2),i.tc("ngIf",!o.valid&&(o.dirty||o.touched)),i.Bb(6),i.tc("ngModel",e.address.city),i.Bb(2),i.tc("ngIf",!r.valid&&(r.dirty||r.touched)),i.Bb(5),i.tc("ngModel",e.address.state),i.Bb(2),i.tc("ngIf",!n.valid&&(n.dirty||n.touched)),i.Bb(5),i.tc("ngModel",e.address.zip),i.Bb(2),i.tc("ngIf",!a.valid&&(a.dirty||a.touched)),i.Bb(4),i.tc("disabled",!t.valid)}},directives:[d.y,d.n,d.o,d.b,d.u,d.m,d.p,n.u],styles:[""]}),t})(),data:{title:"Address"}},{path:"result",component:(()=>{class t{constructor(t){this.formDataService=t,this.title="Thank You!",this.isFormValid=!1}ngOnInit(){this.formData=this.formDataService.getFormData(),this.isFormValid=this.formDataService.isFormValid()}submit(){alert("Excellent Job!"),this.formData=this.formDataService.resetFormData(),this.isFormValid=!1}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(c))},t.\u0275cmp=i.Kb({type:t,selectors:[["mt-wizard-result"]],inputs:{formData:"formData"},decls:42,vars:7,consts:[[1,"tab-pane","active"],[1,"head","text-center"],[1,"narrow","text-center"],[1,"row"],[1,"col-offset-1","col-10","col-sm-offset-3","col-sm-8","col-md-offset-4","col-md-8"],[1,"col-3","col-sm-2"],[1,"form-group"],["for","name",1,"form-control-label"],[1,"col-9","col-sm-10"],["for","email",1,"form-control-label"],["for","work",1,"form-control-label"],["for","address",1,"form-control-label"],[1,"text-center"],[1,"btn","btn-success","btn-raised",3,"disabled","click"],[2,"margin-left","10px"],[1,"ft-chevron-right"]],template:function(t,e){1&t&&(i.Wb(0,"div",0),i.Wb(1,"h3",1),i.Uc(2),i.Vb(),i.Wb(3,"p",2),i.Uc(4," Here is a copy of the information you have entered: "),i.Vb(),i.Wb(5,"div",3),i.Wb(6,"div",4),i.Wb(7,"div",3),i.Wb(8,"div",5),i.Wb(9,"div",6),i.Wb(10,"label",7),i.Uc(11,"Name: "),i.Vb(),i.Vb(),i.Vb(),i.Wb(12,"div",8),i.Uc(13),i.Vb(),i.Vb(),i.Wb(14,"div",3),i.Wb(15,"div",5),i.Wb(16,"div",6),i.Wb(17,"label",9),i.Uc(18,"Email: "),i.Vb(),i.Vb(),i.Vb(),i.Wb(19,"div",8),i.Uc(20),i.Vb(),i.Vb(),i.Wb(21,"div",3),i.Wb(22,"div",5),i.Wb(23,"div",6),i.Wb(24,"label",10),i.Uc(25,"Work: "),i.Vb(),i.Vb(),i.Vb(),i.Wb(26,"div",8),i.Uc(27),i.Vb(),i.Vb(),i.Wb(28,"div",3),i.Wb(29,"div",5),i.Wb(30,"div",6),i.Wb(31,"label",11),i.Uc(32,"Address: "),i.Vb(),i.Vb(),i.Vb(),i.Wb(33,"div",8),i.Uc(34),i.Rb(35,"br"),i.Uc(36),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Wb(37,"div",12),i.Wb(38,"button",13),i.ic("click",(function(){return e.submit()})),i.Uc(39," Submit "),i.Wb(40,"span",14),i.Rb(41,"i",15),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&t&&(i.Bb(2),i.Vc(e.title),i.Bb(11),i.Wc(" ",e.formData.firstName+" "+e.formData.lastName," "),i.Bb(7),i.Wc(" ",e.formData.email," "),i.Bb(7),i.Wc(" ",e.formData.work," "),i.Bb(7),i.Wc(" ",e.formData.street," "),i.Bb(2),i.Wc(" ",e.formData.city+" "+e.formData.state+" "+e.formData.zip," "),i.Bb(2),i.tc("disabled",!e.isFormValid))},styles:[""]}),t})(),data:{title:"Result"}}]}];let W=(()=>{class t{}return t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(V)],r.j]}),t})();o.d(e,"NGXFormWizardModule",(function(){return w}));let w=(()=>{class t{}return t.\u0275mod=i.Ob({type:t,bootstrap:[l]}),t.\u0275inj=i.Nb({factory:function(e){return new(e||t)},providers:[{provide:c,useClass:c},{provide:b,useClass:b}],imports:[[n.c,d.j,W]]}),t})()}}]);