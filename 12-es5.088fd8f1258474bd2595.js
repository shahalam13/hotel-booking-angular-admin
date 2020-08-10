function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{fpVi:function(e,t,i){"use strict";i.r(t);var n,o=i("ofXK"),r=i("3Pt+"),a=i("tyNb"),l=i("1kSV"),c=i("pzo4"),s=i("fXoL"),b=["labelImport"],d=((n=function(){function e(){_classCallCheck(this,e),this.fileToUpload=null,this.formImport=new r.h({importFile:new r.e("",r.w.required)})}return _createClass(e,[{key:"onFileChange",value:function(e){this.labelImport.nativeElement.innerText=Array.from(e).map((function(e){return e.name})).join(", "),this.fileToUpload=e.item(0)}},{key:"import",value:function(){console.log("import "+this.fileToUpload.name)}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Kb({type:n,selectors:[["app-basic"]],viewQuery:function(e,t){var i;1&e&&s.Pc(b,!0),2&e&&s.Fc(i=s.jc())&&(t.labelImport=i.first)},decls:155,vars:0,consts:[[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"m-b-0","text-white"],["action","#"],[1,"card-body"],[1,"card-title"],[1,"form-body"],[1,"row","p-t-20"],[1,"col-md-6"],[1,"form-group"],[1,"control-label"],["type","text","id","firstName","placeholder","John doe",1,"form-control"],["type","text","id","lastName","placeholder","doe",1,"form-control"],["type","text","id","firstName","placeholder","+20456 xxxx xxx",1,"form-control"],["type","text","id","lastName","placeholder","joe@ymail.com",1,"form-control"],[1,"form-group","has-success"],[1,"form-control","custom-select"],["value",""],[1,"form-control-feedback"],["type","date",1,"form-control"],["data-placeholder","Choose a Room","tabindex","1",1,"form-control","custom-select"],["value","Room -111"],["value","Room -112"],["value","Room -113"],["value","Room -114"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio11","name","customRadio",1,"custom-control-input"],["for","customRadio11",1,"custom-control-label"],["type","radio","id","customRadio22","name","customRadio",1,"custom-control-input"],["for","customRadio22",1,"custom-control-label"],["data-placeholder","Choose a Category","tabindex","1",1,"form-control","custom-select"],[1,"card-title","m-t-40"],[1,"col-md-12"],["type","text",1,"form-control"],[1,"form-actions"],["type","submit",1,"btn","btn-success"],[1,"fa","fa-check"],["type","button",1,"btn","btn-dark"]],template:function(e,t){1&e&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"h4",4),s.Uc(5," Room Booking"),s.Vb(),s.Vb(),s.Wb(6,"form",5),s.Wb(7,"div",6),s.Wb(8,"h4",7),s.Uc(9,"Person Info"),s.Vb(),s.Vb(),s.Rb(10,"hr"),s.Wb(11,"div",8),s.Wb(12,"div",6),s.Wb(13,"div",9),s.Wb(14,"div",10),s.Wb(15,"div",11),s.Wb(16,"label",12),s.Uc(17,"First Name"),s.Vb(),s.Rb(18,"input",13),s.Vb(),s.Vb(),s.Wb(19,"div",10),s.Wb(20,"div",11),s.Wb(21,"label",12),s.Uc(22,"Last Name"),s.Vb(),s.Rb(23,"input",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(24,"div",9),s.Wb(25,"div",10),s.Wb(26,"div",11),s.Wb(27,"label",12),s.Uc(28,"Phone Number"),s.Vb(),s.Rb(29,"input",15),s.Vb(),s.Vb(),s.Wb(30,"div",10),s.Wb(31,"div",11),s.Wb(32,"label",12),s.Uc(33,"Email"),s.Vb(),s.Rb(34,"input",16),s.Vb(),s.Vb(),s.Vb(),s.Wb(35,"div",0),s.Wb(36,"div",10),s.Wb(37,"div",17),s.Wb(38,"label",12),s.Uc(39,"Gender"),s.Vb(),s.Wb(40,"select",18),s.Wb(41,"option",19),s.Uc(42,"Male"),s.Vb(),s.Wb(43,"option",19),s.Uc(44,"Female"),s.Vb(),s.Vb(),s.Wb(45,"small",20),s.Uc(46," Select gender "),s.Vb(),s.Vb(),s.Vb(),s.Wb(47,"div",10),s.Wb(48,"div",11),s.Wb(49,"label",12),s.Uc(50,"Check Out Day"),s.Vb(),s.Rb(51,"input",21),s.Vb(),s.Vb(),s.Vb(),s.Wb(52,"div",0),s.Wb(53,"div",10),s.Wb(54,"div",11),s.Wb(55,"label",12),s.Uc(56,"Select Room"),s.Vb(),s.Wb(57,"select",22),s.Wb(58,"option",23),s.Uc(59,"Room 111"),s.Vb(),s.Wb(60,"option",24),s.Uc(61,"Room 112"),s.Vb(),s.Wb(62,"option",25),s.Uc(63,"Room 115"),s.Vb(),s.Wb(64,"option",26),s.Uc(65,"Room 114"),s.Vb(),s.Vb(),s.Wb(66,"small",20),s.Uc(67," Select a Room "),s.Vb(),s.Vb(),s.Vb(),s.Wb(68,"div",10),s.Wb(69,"div",11),s.Wb(70,"label",12),s.Uc(71,"Romm Category"),s.Vb(),s.Wb(72,"div",27),s.Rb(73,"input",28),s.Wb(74,"label",29),s.Uc(75,"VIP"),s.Vb(),s.Vb(),s.Wb(76,"div",27),s.Rb(77,"input",30),s.Wb(78,"label",31),s.Uc(79,"Normal"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(80,"div",0),s.Wb(81,"div",10),s.Wb(82,"div",11),s.Wb(83,"label",12),s.Uc(84,"Total Days "),s.Vb(),s.Wb(85,"select",32),s.Wb(86,"option",23),s.Uc(87,"1"),s.Vb(),s.Wb(88,"option",24),s.Uc(89,"2"),s.Vb(),s.Wb(90,"option",25),s.Uc(91,"3"),s.Vb(),s.Wb(92,"option",26),s.Uc(93,"7"),s.Vb(),s.Wb(94,"option",26),s.Uc(95,"15"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(96,"div",10),s.Wb(97,"div",11),s.Wb(98,"label",12),s.Uc(99,"Parking"),s.Vb(),s.Wb(100,"div",27),s.Rb(101,"input",28),s.Wb(102,"label",29),s.Uc(103,"yes"),s.Vb(),s.Vb(),s.Wb(104,"div",27),s.Rb(105,"input",30),s.Wb(106,"label",31),s.Uc(107,"No"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(108,"h4",33),s.Uc(109,"Address"),s.Vb(),s.Vb(),s.Rb(110,"hr"),s.Wb(111,"div",6),s.Wb(112,"div",0),s.Wb(113,"div",34),s.Wb(114,"div",11),s.Wb(115,"label"),s.Uc(116,"Street"),s.Vb(),s.Rb(117,"input",35),s.Vb(),s.Vb(),s.Vb(),s.Wb(118,"div",0),s.Wb(119,"div",10),s.Wb(120,"div",11),s.Wb(121,"label"),s.Uc(122,"City"),s.Vb(),s.Rb(123,"input",35),s.Vb(),s.Vb(),s.Wb(124,"div",10),s.Wb(125,"div",11),s.Wb(126,"label"),s.Uc(127,"State"),s.Vb(),s.Rb(128,"input",35),s.Vb(),s.Vb(),s.Vb(),s.Wb(129,"div",0),s.Wb(130,"div",10),s.Wb(131,"div",11),s.Wb(132,"label"),s.Uc(133,"Post Code"),s.Vb(),s.Rb(134,"input",35),s.Vb(),s.Vb(),s.Wb(135,"div",10),s.Wb(136,"div",11),s.Wb(137,"label"),s.Uc(138,"Country"),s.Vb(),s.Wb(139,"select",18),s.Wb(140,"option"),s.Uc(141,"--Select your Country--"),s.Vb(),s.Wb(142,"option"),s.Uc(143,"India"),s.Vb(),s.Wb(144,"option"),s.Uc(145,"Sri Lanka"),s.Vb(),s.Wb(146,"option"),s.Uc(147,"USA"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(148,"div",36),s.Wb(149,"div",6),s.Wb(150,"button",37),s.Rb(151,"i",38),s.Uc(152," Save"),s.Vb(),s.Wb(153,"button",39),s.Uc(154,"Cancel"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb())},directives:[r.y,r.n,r.o,r.q,r.x],styles:[""]}),n);function u(e){return null!=e}function m(e){try{var t=new Date(e);return!isNaN(t.getTime())}catch(i){return!1}}function f(e){try{if(e._d instanceof Date){var t=e._d,i=+t.getMonth()+1,n=+t.getDate();return"".concat(t.getFullYear(),"-").concat(v(i),"-").concat(v(n))}if("object"==typeof e&&null!=e.year&&null!=e.month&&null!=e.day){var o=+e.day;return"".concat(e.year,"-").concat(v(+e.month),"-").concat(v(o))}}catch(r){}return e}function v(e){return e<10?"0".concat(e):e}i("mrSG");var p,h,g,V,W,y,k=function(e){var t,i=!1,n=e,o=e instanceof r.e||e instanceof r.p;return function(a){if(!i&&o&&(i=!0,e.valueChanges.subscribe((function(){a.updateValueAndValidity()}))),o&&(n=e.value),!(m(t=f(n))||t instanceof Function)){if(null==t)return null;if(o)return{maxDate:{error:"maxDate is invalid"}};throw Error("maxDate value must be or return a formatted date")}if(u(r.w.required(a)))return null;var l=new Date(f(a.value)).getTime();return m(l)?(t instanceof Function&&(t=t()),l<=new Date(t).getTime()?null:o?{maxDate:{control:e,value:e.value}}:{maxDate:{value:n,control:void 0}}):{value:!0}}},w={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},C=function(e){return function(t){if(u(r.w.required(t)))return null;var i=t.value;return new RegExp(w[e]||w.all).test(i)?null:{uuid:!0}}},S={provide:r.k,useExisting:Object(s.T)((function(){return x})),multi:!0},x=((p=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"validate",value:function(e){return function(e){if(u(r.w.required(e)))return null;var t=e.value.replace(/[^0-9]+/g,"");if(!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(t))return{creditCard:!0};for(var i,n,o,a=0,l=t.length-1;l>=0;l--)i=t.substring(l,l+1),n=parseInt(i,10),a+=o&&(n*=2)>=10?n%10+1:n,o=!o;return Boolean(a%10==0&&t)?null:{creditCard:!0}}(e)}}]),e}()).\u0275fac=function(e){return new(e||p)},p.\u0275dir=s.Lb({type:p,selectors:[["","creditCard","","formControlName",""],["","creditCard","","formControl",""],["","creditCard","","ngModel",""]],features:[s.Ab([S])]}),p),U={provide:r.k,useExisting:Object(s.T)((function(){return F})),multi:!0},F=((h=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.validator=k(this.maxDate)}},{key:"ngOnChanges",value:function(e){for(var t in e)"maxDate"===t&&(this.validator=k(e[t].currentValue),this.onChange&&this.onChange())}},{key:"validate",value:function(e){return this.validator(e)}},{key:"registerOnValidatorChange",value:function(e){this.onChange=e}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275dir=s.Lb({type:h,selectors:[["","maxDate","","formControlName",""],["","maxDate","","formControl",""],["","maxDate","","ngModel",""]],inputs:{maxDate:"maxDate"},features:[s.Ab([U]),s.zb]}),h),M={provide:r.k,useExisting:Object(s.T)((function(){return D})),multi:!0},D=((g=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"validate",value:function(e){return u(r.w.required(t=e))?null:/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t.value)?null:{number:!0};var t}}]),e}()).\u0275fac=function(e){return new(e||g)},g.\u0275dir=s.Lb({type:g,selectors:[["","number","","formControlName",""],["","number","","formControl",""],["","number","","ngModel",""]],features:[s.Ab([M])]}),g),_={provide:r.k,useExisting:Object(s.T)((function(){return R})),multi:!0},R=((V=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"validate",value:function(e){return u(r.w.required(t=e))?null:/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t.value)?null:{url:!0};var t}}]),e}()).\u0275fac=function(e){return new(e||V)},V.\u0275dir=s.Lb({type:V,selectors:[["","url","","formControlName",""],["","url","","formControl",""],["","url","","ngModel",""]],features:[s.Ab([_])]}),V),A={provide:r.k,useExisting:Object(s.T)((function(){return N})),multi:!0},N=((y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.validator=C(this.uuid)}},{key:"ngOnChanges",value:function(e){for(var t in e)"uuid"===t&&(this.validator=C(e[t].currentValue),this.onChange&&this.onChange())}},{key:"validate",value:function(e){return this.validator(e)}},{key:"registerOnValidatorChange",value:function(e){this.onChange=e}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275dir=s.Lb({type:y,selectors:[["","uuid","","formControlName",""],["","uuid","","formControl",""],["","uuid","","ngModel",""]],inputs:{uuid:"uuid"},features:[s.Ab([A]),s.zb]}),y),B=((W=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:W}),W.\u0275inj=s.Nb({factory:function(e){return new(e||W)}}),W),I=["f"],P=["vform"];function T(e,t){1&e&&(s.Wb(0,"small",36),s.Uc(1,"creditCard error"),s.Vb())}function z(e,t){1&e&&(s.Wb(0,"small",36),s.Uc(1,"maxDate error"),s.Vb())}function O(e,t){1&e&&(s.Wb(0,"small",36),s.Uc(1,"Fax number "),s.Vb())}function q(e,t){1&e&&(s.Wb(0,"small",36),s.Uc(1,"phone"),s.Vb())}function G(e,t){1&e&&(s.Wb(0,"small",36),s.Uc(1,"hotel@ymail.com"),s.Vb())}function L(e,t){1&e&&(s.Wb(0,"small",36),s.Uc(1,"Tax id"),s.Vb())}var j,E,Q=((j=function(){function e(){_classCallCheck(this,e),this.radioOptions=["Choose this","Choose me"]}return _createClass(e,[{key:"ngOnInit",value:function(){this.regularForm=new r.h({inputEmail:new r.e(null,[r.w.required,r.w.email]),password:new r.e(null,[r.w.required,r.w.minLength(4),r.w.maxLength(24)]),textArea:new r.e(null,[r.w.required]),radioOption:new r.e("Option one is this")},{updateOn:"blur"})}},{key:"onReactiveFormSubmit",value:function(){this.regularForm.reset()}},{key:"onTemplateFormSubmit",value:function(){this.floatingLabelForm.reset()}},{key:"onCustomFormSubmit",value:function(){this.validationForm.reset()}}]),e}()).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=s.Kb({type:j,selectors:[["ng-component"]],viewQuery:function(e,t){var i;1&e&&(s.Pc(I,!0),s.Pc(P,!0)),2&e&&(s.Fc(i=s.jc())&&(t.floatingLabelForm=i.first),s.Fc(i=s.jc())&&(t.validationForm=i.first))},decls:57,vars:6,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header","bg-success"],[1,"card-title","mb-0","text-white"],[1,"card-body"],[1,"card-block"],[3,"ngSubmit"],["vform","ngForm"],[1,"form-group"],["for","required"],["type","text","ngModel","","name","required","required","","placeholder","Hotel Name ",1,"form-control"],["required","ngModel"],["for","creditCard"],["type","text","ngModel","","name","creditCard","placeholder","AFSFFSFSFSFSFFFSF^^&%$$%%%%","creditCard","",1,"form-control"],["creditCard","ngModel"],["class","form-text text-danger",4,"ngIf"],["for","maxDate"],["type","date","ngModel","","name","maxDate","placeholder","maxDate 2017-11-11","maxDate","2017-11-11",1,"form-control"],["maxDate","ngModel"],["for","number"],["type","text","ngModel","","name","number","placeholder","number","number","",1,"form-control"],["number","ngModel"],["for","phone"],["type","text","ngModel","","name","phone","placeholder","phone","phone","",1,"form-control"],["phone","ngModel"],["for","url"],["type","text","ngModel","","name","url","placeholder","Email","url","",1,"form-control"],["url","ngModel"],["for","uuid"],["type","text","ngModel","","name","uuid","placeholder","Tax id","uuid","",1,"form-control"],["uuid","ngModel"],[1,"form-group","row"],[1,"col-md-12"],["type","button",1,"btn","btn-success","btn-raised","mr-1"],["type","button",1,"btn","btn-dark","btn-raised"],[1,"form-text","text-danger"]],template:function(e,t){if(1&e&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"h4",4),s.Uc(5,"General Settings"),s.Vb(),s.Vb(),s.Wb(6,"div",5),s.Wb(7,"div",6),s.Wb(8,"form",7,8),s.ic("ngSubmit",(function(){return t.onCustomFormSubmit()})),s.Wb(10,"div",9),s.Wb(11,"label",10),s.Uc(12,"Hotel Name"),s.Vb(),s.Rb(13,"input",11,12),s.Vb(),s.Wb(15,"div",9),s.Wb(16,"label",13),s.Uc(17,"Stripe API KEY"),s.Vb(),s.Rb(18,"input",14,15),s.Sc(20,T,2,0,"small",16),s.Vb(),s.Wb(21,"div",9),s.Wb(22,"label",17),s.Uc(23,"Date & Year Setup"),s.Vb(),s.Rb(24,"input",18,19),s.Sc(26,z,2,0,"small",16),s.Vb(),s.Wb(27,"div",9),s.Wb(28,"label",20),s.Uc(29,"Fax Number"),s.Vb(),s.Rb(30,"input",21,22),s.Sc(32,O,2,0,"small",16),s.Vb(),s.Wb(33,"div",9),s.Wb(34,"label",23),s.Uc(35,"Phone"),s.Vb(),s.Rb(36,"input",24,25),s.Sc(38,q,2,0,"small",16),s.Vb(),s.Wb(39,"div",9),s.Wb(40,"label",26),s.Uc(41,"Email"),s.Vb(),s.Rb(42,"input",27,28),s.Sc(44,G,2,0,"small",16),s.Vb(),s.Wb(45,"div",9),s.Wb(46,"label",29),s.Uc(47,"Tax id"),s.Vb(),s.Rb(48,"input",30,31),s.Sc(50,L,2,0,"small",16),s.Vb(),s.Vb(),s.Vb(),s.Wb(51,"div",32),s.Wb(52,"div",33),s.Wb(53,"button",34),s.Uc(54,"Submit"),s.Vb(),s.Wb(55,"button",35),s.Uc(56,"Cancel"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e){var i=s.Gc(19),n=s.Gc(25),o=s.Gc(31),r=s.Gc(37),a=s.Gc(43),l=s.Gc(49);s.Bb(20),s.tc("ngIf",null==i.errors?null:i.errors.creditCard),s.Bb(6),s.tc("ngIf",null==n.errors?null:n.errors.maxDate),s.Bb(6),s.tc("ngIf",null==o.errors?null:o.errors.number),s.Bb(6),s.tc("ngIf",null==r.errors?null:r.errors.phone),s.Bb(6),s.tc("ngIf",null==a.errors?null:a.errors.url),s.Bb(6),s.tc("ngIf",null==l.errors?null:l.errors.uuid)}},directives:[r.y,r.n,r.o,r.b,r.m,r.p,r.u,x,o.u,F,D,R,N],encapsulation:2}),j),K=i("Egam"),X=[{path:"",children:[{path:"formbasic",component:d,data:{title:"Room Booking",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Room Booking"}]}},{path:"formvalidation",component:Q,data:{title:"Settings",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Settings"}]}},{path:"multiselect",component:(E=function(){function e(){_classCallCheck(this,e),this.dropdownList=[],this.cities=[],this.selectedItems=[],this.singleselectedItems=[],this.dropdownSettings={},this.singledropdownSettings={},this.closeDropdownSelection=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.dropdownList=[{item_id:1,item_text:"Mumbai"},{item_id:2,item_text:"Bangaluru"},{item_id:3,item_text:"Pune"},{item_id:4,item_text:"Navsari"},{item_id:5,item_text:"New Delhi"}],this.cities=["Mumbai","New Delhi","Bangaluru","Pune","Navsari"],this.selectedItems=[{item_id:3,item_text:"Pune"},{item_id:4,item_text:"Navsari"}],this.singleselectedItems=["Pune"],this.singledropdownSettings={singleSelection:!0,selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!0,closeDropDownOnSelection:this.closeDropdownSelection},this.dropdownSettings={singleSelection:!1,idField:"item_id",textField:"item_text",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0}}},{key:"onItemSelect",value:function(e){console.log(e)}},{key:"onSelectAll",value:function(e){console.log(e)}}]),e}(),E.\u0275fac=function(e){return new(e||E)},E.\u0275cmp=s.Kb({type:E,selectors:[["app-multiselect"]],decls:10,vars:7,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"placeholder","data","ngModel","settings","ngModelChange","onSelect","onSelectAll"],[1,"card-title","mt-4"],["name","city",3,"data","ngModel","settings","ngModelChange","onSelect"]],template:function(e,t){1&e&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"div",3),s.Wb(4,"h4",4),s.Uc(5,"Multiple Select"),s.Vb(),s.Wb(6,"ng-multiselect-dropdown",5),s.ic("ngModelChange",(function(e){return t.selectedItems=e}))("onSelect",(function(e){return t.onItemSelect(e)}))("onSelectAll",(function(e){return t.onSelectAll(e)})),s.Vb(),s.Wb(7,"h4",6),s.Uc(8,"Single Select"),s.Vb(),s.Wb(9,"ng-multiselect-dropdown",7),s.ic("ngModelChange",(function(e){return t.singleselectedItems=e}))("onSelect",(function(e){return t.onItemSelect(e)})),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Bb(6),s.tc("placeholder","custom placeholder")("data",t.dropdownList)("ngModel",t.selectedItems)("settings",t.dropdownSettings),s.Bb(3),s.tc("data",t.cities)("ngModel",t.singleselectedItems)("settings",t.singledropdownSettings))},directives:[K.a,r.m,r.p],styles:[""]}),E),data:{title:"Multiselect",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Multiselect"}]}},{path:"ngx",loadChildren:function(){return Promise.resolve().then(i.bind(null,"pzo4")).then((function(e){return e.NGXFormWizardModule}))}}]}];i.d(t,"FormModule",(function(){return J}));var $,J=(($=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:$}),$.\u0275inj=s.Nb({factory:function(e){return new(e||$)},imports:[[o.c,r.t,l.u,a.j.forChild(X),r.j,K.b,c.NGXFormWizardModule,B]]}),$)},pzo4:function(e,t,i){"use strict";i.r(t);var n,o,r,a,l=i("tyNb"),c=i("fXoL"),s=i("ofXK"),b=((o=function(){function e(t,i){_classCallCheck(this,e),this.router=t,this.route=i,this.page="Personal"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.router.events.subscribe((function(t){for(var i=e.route.root;void 0!==i.children[0];)i=i.children[0];e.page=i.snapshot.data.title}))}}]),e}()).\u0275fac=function(e){return new(e||o)(c.Qb(l.f),c.Qb(l.a))},o.\u0275cmp=c.Kb({type:o,selectors:[["msw-navbar"]],decls:18,vars:4,consts:[[1,"wizard-navbar"],[1,"liner"],[1,"active","flex-fill"],["uiSrefActive","active","uiSref","personal","data-toggle","tab","title","personal",3,"ngClass"],[1,"round-tabs","one"],[1,"icon-user"],[1,"flex-fill"],["uiSrefActive","active","uiSref","work","data-toggle","tab","title","work",3,"ngClass"],[1,"round-tabs","two"],[1,"icon-briefcase"],["uiSrefActive","active","uiSref","address","data-toggle","tab","title","address",3,"ngClass"],[1,"round-tabs","three"],[1,"icon-location-pin"],["uiSrefActive","active","uiSref","result","data-toggle","tab","title","completed",3,"ngClass"],[1,"round-tabs","four"],[1,"icon-cursor"]],template:function(e,t){1&e&&(c.Wb(0,"ul",0),c.Rb(1,"div",1),c.Wb(2,"li",2),c.Wb(3,"a",3),c.Wb(4,"span",4),c.Rb(5,"i",5),c.Vb(),c.Vb(),c.Vb(),c.Wb(6,"li",6),c.Wb(7,"a",7),c.Wb(8,"span",8),c.Rb(9,"i",9),c.Vb(),c.Vb(),c.Vb(),c.Wb(10,"li",6),c.Wb(11,"a",10),c.Wb(12,"span",11),c.Rb(13,"i",12),c.Vb(),c.Vb(),c.Vb(),c.Wb(14,"li",6),c.Wb(15,"a",13),c.Wb(16,"span",14),c.Rb(17,"i",15),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Bb(3),c.tc("ngClass","Personal"===t.page?"nav-link active":"nav-link"),c.Bb(4),c.tc("ngClass","Work"===t.page?"nav-link active":"nav-link"),c.Bb(4),c.tc("ngClass","Address"===t.page?"nav-link active":"nav-link"),c.Bb(4),c.tc("ngClass","Result"===t.page?"nav-link active":"nav-link"))},directives:[s.r],styles:[""]}),o),d=((n=function(){function e(t,i){_classCallCheck(this,e),this.router=t,this.route=i}return _createClass(e,[{key:"ngOnInit",value:function(){this.router.navigate(["/forms/ngx/wizard"],{skipLocationChange:!0})}}]),e}()).\u0275fac=function(e){return new(e||n)(c.Qb(l.f),c.Qb(l.a))},n.\u0275cmp=c.Kb({type:n,selectors:[["multi-step-wizard-app"]],decls:8,vars:0,consts:[["id","ngx"],[1,"card"],[1,"card-body"],[1,"card-block"],[1,"board"],[1,"tab-content"]],template:function(e,t){1&e&&(c.Wb(0,"section",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"div",3),c.Wb(4,"div",4),c.Rb(5,"msw-navbar"),c.Wb(6,"div",5),c.Rb(7,"router-outlet"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb())},directives:[b,l.k],styles:[".tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]{padding-top:20px}.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:8px}.ng-valid.required[_ngcontent-%COMP%], .ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid #42a948}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}"]}),n),u=function(){function e(){_classCallCheck(this,e),this.firstName="",this.lastName="",this.email="",this.work="",this.street="",this.city="",this.state="",this.zip=""}return _createClass(e,[{key:"clear",value:function(){this.firstName="",this.lastName="",this.email="",this.work="",this.street="",this.city="",this.state="",this.zip=""}}]),e}(),m=((a=function(){function e(){_classCallCheck(this,e),this.workflow=[{step:"personal",valid:!1},{step:"work",valid:!1},{step:"address",valid:!1},{step:"result",valid:!1}]}return _createClass(e,[{key:"validateStep",value:function(e){for(var t=!1,i=0;i<this.workflow.length&&!t;i++)this.workflow[i].step===e&&(t=this.workflow[i].valid=!0)}},{key:"resetSteps",value:function(){this.workflow.forEach((function(e){e.valid=!1}))}},{key:"getFirstInvalidStep",value:function(e){for(var t=!1,i=!0,n="",o=0;o<this.workflow.length&&!t&&i;o++){var r=this.workflow[o];r.step===e?(t=!0,n=""):(i=r.valid,n=r.step)}return n}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=c.Mb({token:a,factory:a.\u0275fac}),a),f=((r=function(){function e(t){_classCallCheck(this,e),this.workflowService=t,this.formData=new u,this.isPersonalFormValid=!1,this.isWorkFormValid=!1,this.isAddressFormValid=!1}return _createClass(e,[{key:"getPersonal",value:function(){return{firstName:this.formData.firstName,lastName:this.formData.lastName,email:this.formData.email}}},{key:"setPersonal",value:function(e){this.isPersonalFormValid=!0,this.formData.firstName=e.firstName,this.formData.lastName=e.lastName,this.formData.email=e.email,this.workflowService.validateStep("personal")}},{key:"getWork",value:function(){return this.formData.work}},{key:"setWork",value:function(e){this.isWorkFormValid=!0,this.formData.work=e,this.workflowService.validateStep("work")}},{key:"getAddress",value:function(){return{street:this.formData.street,city:this.formData.city,state:this.formData.state,zip:this.formData.zip}}},{key:"setAddress",value:function(e){this.isAddressFormValid=!0,this.formData.street=e.street,this.formData.city=e.city,this.formData.state=e.state,this.formData.zip=e.zip,this.workflowService.validateStep("address")}},{key:"getFormData",value:function(){return this.formData}},{key:"resetFormData",value:function(){return this.workflowService.resetSteps(),this.formData.clear(),this.isPersonalFormValid=this.isWorkFormValid=this.isAddressFormValid=!1,this.formData}},{key:"isFormValid",value:function(){return this.isPersonalFormValid&&this.isWorkFormValid&&this.isAddressFormValid}}]),e}()).\u0275fac=function(e){return new(e||r)(c.ec(m))},r.\u0275prov=c.Mb({token:r,factory:r.\u0275fac}),r),v=i("3Pt+");function p(e,t){1&e&&(c.Wb(0,"small",21),c.Uc(1,"This field is required!"),c.Vb())}function h(e,t){1&e&&(c.Wb(0,"small",21),c.Uc(1,"This field is required!"),c.Vb())}function g(e,t){1&e&&(c.Wb(0,"small",22),c.Uc(1,"Please enter a valid email!"),c.Vb())}function V(e,t){1&e&&(c.Wb(0,"small",26),c.Uc(1,"This field is required!"),c.Vb())}function W(e,t){1&e&&(c.Wb(0,"small",26),c.Uc(1,"This field is required!"),c.Vb())}function y(e,t){1&e&&(c.Wb(0,"small",26),c.Uc(1,"This field is required!"),c.Vb())}function k(e,t){1&e&&(c.Wb(0,"small",26),c.Uc(1,"This field is required!"),c.Vb())}var w,C,S,x,U,F=[{path:"",component:d,data:{title:"ngx-wizard"},children:[{path:"wizard",component:(x=function(){function e(t,i,n,o){_classCallCheck(this,e),this.router=t,this.route=i,this.formDataService=n,this.workflowService=o,this.title="Please tell us about yourself."}return _createClass(e,[{key:"ngOnInit",value:function(){this.personal=this.formDataService.getPersonal()}},{key:"save",value:function(e){e.valid&&(this.formDataService.setPersonal(this.personal),this.workflowService.getFirstInvalidStep("work"),this.router.navigateByUrl("/forms/ngx/work",{relativeTo:this.route.parent,skipLocationChange:!0}))}}]),e}(),x.\u0275fac=function(e){return new(e||x)(c.Qb(l.f),c.Qb(l.a),c.Qb(f),c.Qb(m))},x.\u0275cmp=c.Kb({type:x,selectors:[["mt-wizard-personal"]],decls:32,vars:8,consts:[["novalidate","",1,"editForm"],["personalForm","ngForm"],[1,"tab-pane","active"],[1,"font-medium-2","text-center"],[1,"row"],[1,"col-12"],[1,"col-12","col-sm-6"],[1,"form-group"],["for","firstname",1,"form-control-label"],["required","","id","firstname","name","firstname","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["firstname","ngModel"],["class","form-text text-muted danger",4,"ngIf"],["for","lastname",1,"form-control-label"],["required","","id","lastname","name","lastname","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["lastname","ngModel"],["for","email",1,"form-control-label"],["required","","email","","id","email","name","email","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["email","ngModel"],["class","form-text text-danger",4,"ngIf"],[1,"form-group","text-center"],["type","button","uiSref","work",1,"btn","btn-success","btn-raised",3,"disabled","click"],[1,"form-text","text-muted","danger"],[1,"form-text","text-danger"]],template:function(e,t){if(1&e){var i=c.Xb();c.Wb(0,"form",0,1),c.Wb(2,"div",2),c.Wb(3,"p",3),c.Uc(4),c.Vb(),c.Rb(5,"br"),c.Wb(6,"div",4),c.Wb(7,"div",5),c.Wb(8,"div",4),c.Wb(9,"div",6),c.Wb(10,"div",7),c.Wb(11,"label",8),c.Uc(12,"First Name"),c.Vb(),c.Wb(13,"input",9,10),c.ic("ngModelChange",(function(e){return t.personal.firstName=e})),c.Vb(),c.Sc(15,p,2,0,"small",11),c.Vb(),c.Vb(),c.Wb(16,"div",6),c.Wb(17,"div",7),c.Wb(18,"label",12),c.Uc(19,"Last Name"),c.Vb(),c.Wb(20,"input",13,14),c.ic("ngModelChange",(function(e){return t.personal.lastName=e})),c.Vb(),c.Sc(22,h,2,0,"small",11),c.Vb(),c.Vb(),c.Vb(),c.Wb(23,"div",7),c.Wb(24,"label",15),c.Uc(25,"Email"),c.Vb(),c.Wb(26,"input",16,17),c.ic("ngModelChange",(function(e){return t.personal.email=e})),c.Vb(),c.Sc(28,g,2,0,"small",18),c.Vb(),c.Wb(29,"div",19),c.Wb(30,"button",20),c.ic("click",(function(){c.Jc(i);var e=c.Gc(1);return t.save(e)})),c.Uc(31," Next "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var n=c.Gc(1),o=c.Gc(14),r=c.Gc(21),a=c.Gc(27);c.Bb(4),c.Vc(t.title),c.Bb(9),c.tc("ngModel",t.personal.firstName),c.Bb(2),c.tc("ngIf",!o.valid&&(o.dirty||o.touched)),c.Bb(5),c.tc("ngModel",t.personal.lastName),c.Bb(2),c.tc("ngIf",!r.valid&&(r.dirty||r.touched)),c.Bb(4),c.tc("ngModel",t.personal.email),c.Bb(2),c.tc("ngIf",!a.valid&&(a.dirty||a.touched)),c.Bb(2),c.tc("disabled",!n.valid)}},directives:[v.y,v.n,v.o,v.b,v.u,v.m,v.p,s.u,v.c],styles:[""]}),x),data:{title:"Personal"}},{path:"work",component:(S=function(){function e(t,i,n,o){_classCallCheck(this,e),this.router=t,this.route=i,this.formDataService=n,this.workflowService=o,this.title="What do you do?"}return _createClass(e,[{key:"ngOnInit",value:function(){this.workType=this.formDataService.getWork()}},{key:"save",value:function(e){e.valid&&(this.formDataService.setWork(this.workType),this.workflowService.getFirstInvalidStep("work"),this.router.navigate(["address"],{relativeTo:this.route.parent,skipLocationChange:!0}))}},{key:"cancel",value:function(){this.router.navigate(["wizard"],{relativeTo:this.route.parent,skipLocationChange:!0})}}]),e}(),S.\u0275fac=function(e){return new(e||S)(c.Qb(l.f),c.Qb(l.a),c.Qb(f),c.Qb(m))},S.\u0275cmp=c.Kb({type:S,selectors:[["mt-wizard-work"]],decls:29,vars:5,consts:[["novalidate","",1,"editForm"],["workForm","ngForm"],[1,"tab-pane","active"],[1,"head","text-center"],[1,"row"],[1,"col-offset-4","col-10","col-sm-offset-5","col-sm-4"],[1,"custom-control","custom-radio"],["type","radio","id","customRadio1","required","","name","work","value","Design",1,"custom-control-input",3,"ngModel","ngModelChange"],["work","ngModel"],["for","customRadio1",1,"custom-control-label"],["type","radio","id","customRadio2","required","","name","work","value","Code",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customRadio2",1,"custom-control-label"],["type","radio","id","customRadio3","required","","name","work","value","Deploy",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customRadio3",1,"custom-control-label"],[1,"form-group","text-center","space-20"],["uiSref","personal","type","button",1,"btn","btn-raised","btn-secondary","mr-1",3,"click"],["uiSref","address","type","button",1,"btn","btn-raised","btn-info",3,"disabled","click"]],template:function(e,t){if(1&e){var i=c.Xb();c.Wb(0,"form",0,1),c.Wb(2,"div"),c.Wb(3,"div",2),c.Wb(4,"h4",3),c.Uc(5),c.Vb(),c.Rb(6,"br"),c.Wb(7,"div",4),c.Wb(8,"div",5),c.Wb(9,"div",6),c.Wb(10,"input",7,8),c.ic("ngModelChange",(function(e){return t.workType=e})),c.Vb(),c.Wb(12,"label",9),c.Uc(13,"Design"),c.Vb(),c.Vb(),c.Wb(14,"div",6),c.Wb(15,"input",10,8),c.ic("ngModelChange",(function(e){return t.workType=e})),c.Vb(),c.Wb(17,"label",11),c.Uc(18,"Code"),c.Vb(),c.Vb(),c.Wb(19,"div",6),c.Wb(20,"input",12,8),c.ic("ngModelChange",(function(e){return t.workType=e})),c.Vb(),c.Wb(22,"label",13),c.Uc(23,"Deploy"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(24,"div",14),c.Wb(25,"button",15),c.ic("click",(function(){return t.cancel()})),c.Uc(26," Previous"),c.Vb(),c.Wb(27,"button",16),c.ic("click",(function(){c.Jc(i);var e=c.Gc(1);return t.save(e)})),c.Uc(28," Next "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var n=c.Gc(1);c.Bb(5),c.Vc(t.title),c.Bb(5),c.tc("ngModel",t.workType),c.Bb(5),c.tc("ngModel",t.workType),c.Bb(5),c.tc("ngModel",t.workType),c.Bb(7),c.tc("disabled",!n.valid)}},directives:[v.y,v.n,v.o,v.s,v.b,v.u,v.m,v.p],styles:[""]}),S),data:{title:"Work"}},{path:"address",component:(C=function(){function e(t,i,n,o){_classCallCheck(this,e),this.router=t,this.route=i,this.formDataService=n,this.workflowService=o,this.title="Where do you live?"}return _createClass(e,[{key:"ngOnInit",value:function(){this.address=this.formDataService.getAddress()}},{key:"save",value:function(e){e.valid&&(this.formDataService.setAddress(this.address),this.workflowService.getFirstInvalidStep("work"),this.router.navigate(["result"],{relativeTo:this.route.parent,skipLocationChange:!0}))}},{key:"cancel",value:function(){this.router.navigate(["work"],{relativeTo:this.route.parent,skipLocationChange:!0})}}]),e}(),C.\u0275fac=function(e){return new(e||C)(c.Qb(l.f),c.Qb(l.a),c.Qb(f),c.Qb(m))},C.\u0275cmp=c.Kb({type:C,selectors:[["mt-wizard-address"]],decls:41,vars:10,consts:[["novalidate","",1,"editForm"],["addressForm","ngForm"],[1,"tab-pane","active"],[1,"head","text-center"],[1,"row"],[1,"col-sm-12"],[1,"form-group"],["for","street",1,"form-control-label"],["required","","id","street","name","street","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["street","ngModel"],["class","form-text text-muted danger",4,"ngIf"],[1,"col-12","col-sm-4"],["for","city",1,"form-control-label"],["required","","id","city","name","city","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["city","ngModel"],[1,"col-4","col-sm-offset-1","col-sm-3"],["for","state",1,"form-control-label"],["required","","id","state","name","state","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["state","ngModel"],[1,"col-offset-1","col-7","col-sm-offset-1","col-sm-3"],["for","zip",1,"form-control-label"],["required","","id","zip","name","zip","type","text",1,"form-control","input-md",3,"ngModel","ngModelChange"],["zip","ngModel"],[1,"form-group","text-center"],["uiSref","work","type","button",1,"btn","btn-raised","btn-secondary","mr-1",3,"click"],["uiSref","result","type","button",1,"btn","btn-raised","btn-info",3,"disabled","click"],[1,"form-text","text-muted","danger"]],template:function(e,t){if(1&e){var i=c.Xb();c.Wb(0,"form",0,1),c.Wb(2,"div",2),c.Wb(3,"h4",3),c.Uc(4),c.Vb(),c.Rb(5,"br"),c.Wb(6,"div",4),c.Wb(7,"div",5),c.Wb(8,"div",6),c.Wb(9,"label",7),c.Uc(10,"Street Address"),c.Vb(),c.Wb(11,"input",8,9),c.ic("ngModelChange",(function(e){return t.address.street=e})),c.Vb(),c.Sc(13,V,2,0,"small",10),c.Vb(),c.Wb(14,"div",4),c.Wb(15,"div",11),c.Wb(16,"div",6),c.Wb(17,"label",12),c.Uc(18,"City"),c.Vb(),c.Wb(19,"input",13,14),c.ic("ngModelChange",(function(e){return t.address.city=e})),c.Vb(),c.Sc(21,W,2,0,"small",10),c.Vb(),c.Vb(),c.Wb(22,"div",15),c.Wb(23,"div",6),c.Wb(24,"label",16),c.Uc(25,"State"),c.Vb(),c.Wb(26,"input",17,18),c.ic("ngModelChange",(function(e){return t.address.state=e})),c.Vb(),c.Sc(28,y,2,0,"small",10),c.Vb(),c.Vb(),c.Wb(29,"div",19),c.Wb(30,"div",6),c.Wb(31,"label",20),c.Uc(32,"Zip"),c.Vb(),c.Wb(33,"input",21,22),c.ic("ngModelChange",(function(e){return t.address.zip=e})),c.Vb(),c.Sc(35,k,2,0,"small",10),c.Vb(),c.Vb(),c.Vb(),c.Wb(36,"div",23),c.Wb(37,"button",24),c.ic("click",(function(){return t.cancel()})),c.Uc(38,"Previous"),c.Vb(),c.Wb(39,"button",25),c.ic("click",(function(){c.Jc(i);var e=c.Gc(1);return t.save(e)})),c.Uc(40," Next "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var n=c.Gc(1),o=c.Gc(12),r=c.Gc(20),a=c.Gc(27),l=c.Gc(34);c.Bb(4),c.Vc(t.title),c.Bb(7),c.tc("ngModel",t.address.street),c.Bb(2),c.tc("ngIf",!o.valid&&(o.dirty||o.touched)),c.Bb(6),c.tc("ngModel",t.address.city),c.Bb(2),c.tc("ngIf",!r.valid&&(r.dirty||r.touched)),c.Bb(5),c.tc("ngModel",t.address.state),c.Bb(2),c.tc("ngIf",!a.valid&&(a.dirty||a.touched)),c.Bb(5),c.tc("ngModel",t.address.zip),c.Bb(2),c.tc("ngIf",!l.valid&&(l.dirty||l.touched)),c.Bb(4),c.tc("disabled",!n.valid)}},directives:[v.y,v.n,v.o,v.b,v.u,v.m,v.p,s.u],styles:[""]}),C),data:{title:"Address"}},{path:"result",component:(w=function(){function e(t){_classCallCheck(this,e),this.formDataService=t,this.title="Thank You!",this.isFormValid=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.formData=this.formDataService.getFormData(),this.isFormValid=this.formDataService.isFormValid()}},{key:"submit",value:function(){alert("Excellent Job!"),this.formData=this.formDataService.resetFormData(),this.isFormValid=!1}}]),e}(),w.\u0275fac=function(e){return new(e||w)(c.Qb(f))},w.\u0275cmp=c.Kb({type:w,selectors:[["mt-wizard-result"]],inputs:{formData:"formData"},decls:42,vars:7,consts:[[1,"tab-pane","active"],[1,"head","text-center"],[1,"narrow","text-center"],[1,"row"],[1,"col-offset-1","col-10","col-sm-offset-3","col-sm-8","col-md-offset-4","col-md-8"],[1,"col-3","col-sm-2"],[1,"form-group"],["for","name",1,"form-control-label"],[1,"col-9","col-sm-10"],["for","email",1,"form-control-label"],["for","work",1,"form-control-label"],["for","address",1,"form-control-label"],[1,"text-center"],[1,"btn","btn-success","btn-raised",3,"disabled","click"],[2,"margin-left","10px"],[1,"ft-chevron-right"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"h3",1),c.Uc(2),c.Vb(),c.Wb(3,"p",2),c.Uc(4," Here is a copy of the information you have entered: "),c.Vb(),c.Wb(5,"div",3),c.Wb(6,"div",4),c.Wb(7,"div",3),c.Wb(8,"div",5),c.Wb(9,"div",6),c.Wb(10,"label",7),c.Uc(11,"Name: "),c.Vb(),c.Vb(),c.Vb(),c.Wb(12,"div",8),c.Uc(13),c.Vb(),c.Vb(),c.Wb(14,"div",3),c.Wb(15,"div",5),c.Wb(16,"div",6),c.Wb(17,"label",9),c.Uc(18,"Email: "),c.Vb(),c.Vb(),c.Vb(),c.Wb(19,"div",8),c.Uc(20),c.Vb(),c.Vb(),c.Wb(21,"div",3),c.Wb(22,"div",5),c.Wb(23,"div",6),c.Wb(24,"label",10),c.Uc(25,"Work: "),c.Vb(),c.Vb(),c.Vb(),c.Wb(26,"div",8),c.Uc(27),c.Vb(),c.Vb(),c.Wb(28,"div",3),c.Wb(29,"div",5),c.Wb(30,"div",6),c.Wb(31,"label",11),c.Uc(32,"Address: "),c.Vb(),c.Vb(),c.Vb(),c.Wb(33,"div",8),c.Uc(34),c.Rb(35,"br"),c.Uc(36),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(37,"div",12),c.Wb(38,"button",13),c.ic("click",(function(){return t.submit()})),c.Uc(39," Submit "),c.Wb(40,"span",14),c.Rb(41,"i",15),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Bb(2),c.Vc(t.title),c.Bb(11),c.Wc(" ",t.formData.firstName+" "+t.formData.lastName," "),c.Bb(7),c.Wc(" ",t.formData.email," "),c.Bb(7),c.Wc(" ",t.formData.work," "),c.Bb(7),c.Wc(" ",t.formData.street," "),c.Bb(2),c.Wc(" ",t.formData.city+" "+t.formData.state+" "+t.formData.zip," "),c.Bb(2),c.tc("disabled",!t.isFormValid))},styles:[""]}),w),data:{title:"Result"}}]}],M=((U=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:U}),U.\u0275inj=c.Nb({factory:function(e){return new(e||U)},imports:[[l.j.forChild(F)],l.j]}),U);i.d(t,"NGXFormWizardModule",(function(){return _}));var D,_=((D=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:D,bootstrap:[d]}),D.\u0275inj=c.Nb({factory:function(e){return new(e||D)},providers:[{provide:f,useClass:f},{provide:m,useClass:m}],imports:[[s.c,v.j,M]]}),D)}}]);