(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{aT7B:function(t,e,i){"use strict";i.r(e);var a=i("ofXK"),n=i("tyNb"),o=i("3Pt+"),s=i("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[a.c]]}),t})();var r=i("B4Mn");let l=(()=>{class t{constructor(){this._data=new r.a,this._dataStream$=this._data.asObservable(),this._subscriptions=new Map,this._dataStream$.subscribe(t=>this._onEvent(t))}notifyDataChanged(t,e){this._data[t]!==e&&(this._data[t]=e,this._data.next({event:t,data:this._data[t]}))}subscribe(t,e){const i=this._subscriptions.get(t)||[];i.push(e),this._subscriptions.set(t,i)}_onEvent(t){(this._subscriptions.get(t.event)||[]).forEach(e=>{e.call(null,t.data)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Mb({token:t,factory:t.\u0275fac}),t})();var b=i("1kSV");class d{constructor(t,e,i,a,n,o,s,c,r,l,b,d,m,u){this.id=t,this.sender=e,this.senderMail=i,this.subject=a,this.date=n,this.body=o,this.attachment=s,this.attachments=c,this.unread=r,this.sent=l,this.starred=b,this.draft=d,this.trash=m,this.selected=u}}const m=[new d(1,"Seth Wright","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","6:08 PM","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!0,!1,!1,!1,!1,!1),new d(2,"Leo Jons","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","12:55 PM","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!0,["assets/images/gallery/chair.png","assets/images/gallery/chair2.png"],!0,!1,!0,!1,!1,!1),new d(3,"Aron Shaur","info@wrappixel.com","consectetuer adipiscing elit.","01.11.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new d(4,"Emily Rhodes","info@wrappixel.com","Aenean commodo ligula eget dolor. Aenean massa.","21.07.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!0,!1,!1,!1,!1,!1),new d(5,"Draft","","no subject","2:14 PM","",!1,[],!1,!1,!1,!0,!1,!1),new d(6,"Draft","","Please confirm your account for furthur process","Jan 7","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet.",!1,[],!1,!1,!1,!0,!1,!1),new d(7,"Kendra","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.","27.05.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new d(8,"Jimmy Fallon","info@wrappixel.com","consectetuer adipiscing elit.","14.05.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!0,!1,!1,!1),new d(9,"Sam Tighe","info@wrappixel.com","Aenean commodo ligula eget dolor. Aenean massa.","03.05.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new d(10,"Saul","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.","30.04.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!0,!1,!1,!1,!1),new d(11,"Nathan James","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","24.04.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new d(12,"Mia Green","info@wrappixel.com","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.","11.04.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1),new d(13,"Mario Gomez","info@wrappixel.com","Download the freebies from the site wrappixel.com all the admin template for free","24.02.2018","<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>",!1,[],!1,!1,!1,!1,!1,!1)],u=Promise.resolve(m);let p=(()=>{class t{getInboxMails(){return u.then(t=>t.filter(t=>!1===t.sent&&!1===t.draft&&!1===t.trash))}getStarredMails(){return u.then(t=>t.filter(t=>!0===t.starred))}getSentMails(){return u.then(t=>t.filter(t=>!0===t.sent))}getDraftMails(){return u.then(t=>t.filter(t=>!0===t.draft))}getTrashMails(){return u.then(t=>t.filter(t=>!0===t.trash))}getMail(t){return u.then(e=>e.find(e=>e.id===+t))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Mb({token:t,factory:t.\u0275fac}),t})();function h(t,e){if(1&t){const t=s.Xb();s.Wb(0,"div",40),s.Wb(1,"button",9),s.ic("click",(function(){return s.Jc(t),s.mc().trash()})),s.Rb(2,"i",41),s.Vb(),s.Vb()}}const g=function(){return["mail-compose"]},f=function(){return["mail-list/inbox"]},V=function(){return["mail-list/starred"]},W=function(){return["mail-list/sent"]},v=function(){return["mail-list/drafts"]},w=function(){return["mail-list/trash"]};let k=(()=>{class t{constructor(t,e,i,a){this.service=t,this.route=e,this.router=i,this.state=a,this.markAsRead=!1,this.markAsUnRead=!1,this.deleteChecked=!1,this.status=!1,this.router.events.subscribe(t=>{t instanceof n.c&&(this.id=this.route.snapshot.firstChild.params.id,this.type=this.route.snapshot.firstChild.params.type,setTimeout(()=>{}))})}getBack(){this.router.navigate(this.type?["apps/email/mail-list/"+this.type]:["apps/email/mail-list/inbox"])}trash(){this.service.getMail(this.id).then(t=>{t.trash=!0,t.sent=!1,t.draft=!1,t.starred=!1}),this.router.navigate(["apps/email/mail-list/inbox"])}setAsRead(){this.markAsRead=!this.markAsRead,this.state.notifyDataChanged("markAsRead",this.markAsRead)}setAsUnRead(){this.markAsUnRead=!this.markAsUnRead,this.state.notifyDataChanged("markAsUnRead",this.markAsUnRead)}deleteCheckedMail(){this.deleteChecked=!this.deleteChecked,this.state.notifyDataChanged("deleteChecked",this.deleteChecked)}openClleft(){this.status=!this.status}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(p),s.Qb(n.a),s.Qb(n.f),s.Qb(l))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-mail"]],features:[s.Ab([p])],decls:83,vars:21,consts:[[1,"email-container","pr-3","pl-3"],[1,"row"],[1,"col-sm-3","col-md-2","bg-info"],[1,"mb-0","mt-3","text-white"],["href","javascript:void(0)",1,"text-white","float-right","custom-control-button",3,"click"],[1,"ti-menu"],[1,"col-sm-9","col-md-10","bg-info"],[1,"pb-3","pt-3","d-flex"],["data-toggle","tooltip","data-placement","top","data-animation","false",1,"b-btn","mr-1",3,"title"],["type","button",1,"btn","btn-dark","btn-sm",3,"click"],[1,"fa","fa-arrow-left"],["class","b-btn mr-1","data-toggle","tooltip","data-placement","top","data-animation","false","title","Delete",4,"ngIf"],["data-toggle","tooltip","data-placement","top","data-animation","false","title","Refresh",1,"b-btn","mr-1"],["type","button",1,"btn","btn-dark","btn-sm"],[1,"fa","fa-refresh"],["ngbDropdown","",1,"btn-group"],["type","button","ngbDropdownToggle","","aria-controls","dropdown-basic",1,"btn","btn-warning","btn-sm"],["id","dropdown-basic","ngbDropdownMenu","",1,""],["href","javascript:void(0);",1,"dropdown-item",3,"click"],[1,"ml-auto"],[1,"mr-1","text-white"],[1,"btn-group","btn-group-sm"],["type","button",1,"btn","btn-dark"],[1,"fa","fa-chevron-left"],[1,"fa","fa-chevron-right"],[1,"col-md-2","bg-white","b-r"],[1,"inbox-panel",3,"ngClass"],["role","button",1,"btn","btn-danger","btn-sm","btn-block","mt-3",3,"routerLink"],[1,"list-group","mt-3","custom-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[3,"routerLink"],[1,"badge","badge-info","badge-pill"],[1,"list-group-item"],[1,"list-group","custom-group"],[1,"fa","fa-circle","text-danger","mr-1"],["href","#"],[1,"fa","fa-circle","text-warning","mr-1"],[1,"fa","fa-circle","text-info","mr-1"],[1,"col-md-10","bg-light-part"],[1,"inbox-right-panel"],["data-toggle","tooltip","data-placement","top","data-animation","false","title","Delete",1,"b-btn","mr-1"],[1,"fa","fa-trash"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Wb(3,"h3",3),s.Uc(4," Mailbox "),s.Wb(5,"a",4),s.ic("click",(function(){return e.openClleft()})),s.Rb(6,"i",5),s.Vb(),s.Vb(),s.Vb(),s.Wb(7,"div",6),s.Wb(8,"div",7),s.Wb(9,"div",8),s.Wb(10,"button",9),s.ic("click",(function(){return e.getBack()})),s.Rb(11,"i",10),s.Vb(),s.Vb(),s.Sc(12,h,3,0,"div",11),s.Wb(13,"div",12),s.Wb(14,"button",13),s.Rb(15,"span",14),s.Vb(),s.Vb(),s.Wb(16,"div",15),s.Wb(17,"button",16),s.Uc(18," More "),s.Vb(),s.Wb(19,"div",17),s.Wb(20,"a",18),s.ic("click",(function(){return e.setAsRead()})),s.Uc(21,"Mark as read"),s.Vb(),s.Wb(22,"a",18),s.ic("click",(function(){return e.setAsUnRead()})),s.Uc(23,"Mark as unread"),s.Vb(),s.Wb(24,"a",18),s.ic("click",(function(){return e.deleteCheckedMail()})),s.Uc(25,"Delete"),s.Vb(),s.Vb(),s.Vb(),s.Wb(26,"div",19),s.Wb(27,"span",20),s.Wb(28,"b"),s.Uc(29,"1"),s.Vb(),s.Uc(30,"\u2013"),s.Wb(31,"b"),s.Uc(32,"50"),s.Vb(),s.Uc(33," of "),s.Wb(34,"b"),s.Uc(35,"50"),s.Vb(),s.Vb(),s.Wb(36,"div",21),s.Wb(37,"button",22),s.Rb(38,"span",23),s.Vb(),s.Wb(39,"button",22),s.Rb(40,"span",24),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(41,"div",1),s.Wb(42,"div",25),s.Wb(43,"div",26),s.Wb(44,"a",27),s.Uc(45,"COMPOSE"),s.Vb(),s.Wb(46,"ul",28),s.Wb(47,"li",29),s.Wb(48,"a",30),s.Uc(49," Inbox "),s.Vb(),s.Wb(50,"span",31),s.Uc(51,"3"),s.Vb(),s.Vb(),s.Wb(52,"li",32),s.Wb(53,"a",30),s.Uc(54,"Starred"),s.Vb(),s.Vb(),s.Wb(55,"li",32),s.Wb(56,"a",30),s.Uc(57,"Sent Mail"),s.Vb(),s.Vb(),s.Wb(58,"li",29),s.Wb(59,"a",30),s.Uc(60,"Drafts"),s.Vb(),s.Wb(61,"span",31),s.Uc(62,"2"),s.Vb(),s.Vb(),s.Wb(63,"li",32),s.Wb(64,"a",30),s.Uc(65,"Trash"),s.Vb(),s.Vb(),s.Vb(),s.Rb(66,"hr"),s.Wb(67,"ul",33),s.Wb(68,"li",32),s.Rb(69,"span",34),s.Wb(70,"a",35),s.Uc(71,"Notes"),s.Vb(),s.Vb(),s.Wb(72,"li",32),s.Rb(73,"span",36),s.Wb(74,"a",35),s.Uc(75,"Personal"),s.Vb(),s.Vb(),s.Wb(76,"li",32),s.Rb(77,"span",37),s.Wb(78,"a",35),s.Uc(79,"Travel"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(80,"div",38),s.Wb(81,"div",39),s.Rb(82,"router-outlet"),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Bb(9),s.Rc("display",e.id||!e.type?"inline-block":"none"),s.vc("title","Back to ",e.type,""),s.Bb(3),s.tc("ngIf",e.id),s.Bb(1),s.Rc("display","/apps/email/mail-compose"==e.router.url||e.id?"none":"inline-block"),s.Bb(3),s.Rc("display","/apps/email/mail-compose"==e.router.url?"none":"block"),s.Bb(27),s.tc("ngClass",e.status?"showlpanel":""),s.Bb(1),s.tc("routerLink",s.wc(15,g)),s.Bb(4),s.tc("routerLink",s.wc(16,f)),s.Bb(5),s.tc("routerLink",s.wc(17,V)),s.Bb(3),s.tc("routerLink",s.wc(18,W)),s.Bb(3),s.tc("routerLink",s.wc(19,v)),s.Bb(5),s.tc("routerLink",s.wc(20,w)))},directives:[a.u,b.n,b.q,b.p,a.r,n.i,n.k],styles:[".email-container{overflow:hidden}.email-container .mycustomcheckbox .custom-control-label:after,.email-container .mycustomcheckbox .custom-control-label:before{top:-12px}.email-container .unread{font-weight:600}.email-container .mail-star .mdi-star{color:#f9a913}.email-container .inbox-panel,.email-container .inbox-right-panel{min-height:calc(100vh - 300px)}.email-container .inbox-right-panel{margin:0 -15px}.email-container .inbox-right-panel .table tr{cursor:pointer}.email-container .sender,.email-container .subject{max-width:350px;overflow:hidden;text-overflow:ellipsis}.email-container .sender{max-width:150px}.email-container .custom-control-button{display:none}.email-container .custom-group .list-group-item{border:0;padding:.75rem .25rem}.email-container .custom-group .list-group-item a{color:#67757c}@media (max-width:767px){.email-container .inbox-panel{position:absolute;width:200px;height:100%;background:#fff;left:-202px;z-index:10;box-shadow:0 2px 20px rgba(0,0,0,.1);padding:0 10px}.email-container .inbox-panel.showlpanel{left:0}.email-container .custom-control-button{display:block}}"],encapsulation:2}),t})();const x=function(){return["../mail-list/inbox"]};let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["app-mail-compose"]],decls:15,vars:2,consts:[[1,"card-body","compose"],["method","get","action","#"],[1,"form-group"],["type","text","placeholder","To",1,"form-control"],["type","text","placeholder","Cc / Bcc",1,"form-control"],["type","text","placeholder","Subject",1,"form-control"],["placeholder","Message","rows","10",1,"form-control"],[1,"form-group","pull-right"],[1,"btn","btn-secondary","mr-2",3,"routerLink"],["type","submit",1,"btn","btn-main"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"form",1),s.Wb(2,"div",2),s.Rb(3,"input",3),s.Vb(),s.Wb(4,"div",2),s.Rb(5,"input",4),s.Vb(),s.Wb(6,"div",2),s.Rb(7,"input",5),s.Vb(),s.Wb(8,"div",2),s.Rb(9,"textarea",6),s.Vb(),s.Wb(10,"div",7),s.Wb(11,"a",8),s.Uc(12,"Cancel"),s.Vb(),s.Wb(13,"button",9),s.Uc(14,"Send"),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Bb(11),s.tc("routerLink",s.wc(1,x)))},directives:[o.y,o.n,o.o,n.i],encapsulation:2}),t})();var M=i("HDdC"),A=i("eIep");M.a.prototype.switchMap=function(t){return Object(A.a)(t)(this)};let U=(()=>{class t{transform(t,e){const i=new RegExp(e,"ig");if(t)return t.filter(t=>{if((t.sender||t.subject)&&(-1!==t.sender.search(i)||-1!==t.subject.search(i)))return!0})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Pb({name:"MailSearch",type:t,pure:!0}),t})();const R=function(t,e){return{"mdi-star":t,"mdi-star-outline":e}};function B(t,e){if(1&t){const t=s.Xb();s.Wb(0,"td",20),s.Wb(1,"i",21),s.ic("click",(function(){s.Jc(t);const e=s.mc().$implicit;return s.mc().changeStarStatus(e)})),s.Vb(),s.Vb()}if(2&t){const t=s.mc().$implicit;s.Bb(1),s.tc("ngClass",s.yc(1,R,t.starred,!t.starred))}}function S(t,e){1&t&&s.Rb(0,"i",22)}const C=function(t,e){return{unread:t,selected:e}};function L(t,e){if(1&t){const t=s.Xb();s.Wb(0,"tr",9),s.Wb(1,"td",10),s.Wb(2,"div",11),s.Wb(3,"input",12),s.ic("ngModelChange",(function(i){return s.Jc(t),e.$implicit.selected=i}))("ngModelChange",(function(){return s.Jc(t),s.mc().toggleOne()})),s.Vb(),s.Rb(4,"label",13),s.Vb(),s.Vb(),s.Sc(5,B,2,4,"td",14),s.Wb(6,"td",15),s.ic("click",(function(){s.Jc(t);const i=e.$implicit;return s.mc().goToDetail(i)})),s.Uc(7),s.Vb(),s.Wb(8,"td",16),s.ic("click",(function(){s.Jc(t);const i=e.$implicit;return s.mc().goToDetail(i)})),s.Vb(),s.Wb(9,"td",17),s.ic("click",(function(){s.Jc(t);const i=e.$implicit;return s.mc().goToDetail(i)})),s.Sc(10,S,1,0,"i",18),s.Vb(),s.Wb(11,"td",19),s.ic("click",(function(){s.Jc(t);const i=e.$implicit;return s.mc().goToDetail(i)})),s.Uc(12),s.Vb(),s.Vb()}if(2&t){const t=e.$implicit,i=s.mc();s.tc("ngClass",s.yc(9,C,t.unread,t.selected)),s.Bb(3),s.vc("id","checkbox",t.id,""),s.tc("ngModel",t.selected),s.Bb(1),s.Db("for","checkbox",t.id,""),s.Bb(1),s.tc("ngIf","/apps/email/mail-list/trash"!=i.router.url),s.Bb(2),s.Vc(t.sender),s.Bb(1),s.tc("innerHTML",t.subject,s.Kc),s.Bb(2),s.tc("ngIf",t.attachment),s.Bb(2),s.Vc(t.date)}}let D=(()=>{class t{constructor(t,e,i,a){this.service=t,this.route=e,this.router=i,this.state=a,this.router.events.subscribe(t=>{t instanceof n.c&&(this.unSelectAll(),this.searchText="")}),this.state.subscribe("markAsRead",t=>{this.markAllAsRead()}),this.state.subscribe("markAsUnRead",t=>{this.markAllAsUnRead()}),this.state.subscribe("deleteChecked",t=>{this.deleteAllCheckedMail()})}ngOnInit(){this.getMails()}getMails(){this.mails=this.route.params.switchMap(t=>{switch(this.type=t.type,this.type){case"inbox":return this.service.getInboxMails();case"starred":return this.service.getStarredMails();case"sent":return this.service.getSentMails();case"drafts":return this.service.getDraftMails();case"trash":return this.service.getTrashMails();default:return this.service.getInboxMails()}})}toggleAll(){const t=!this.isAllSelected;this.mails.subscribe(e=>{e.forEach(e=>{e.selected=t})})}toggleOne(){this.mails.subscribe(t=>{this.isAllSelected=t.every(t=>!0===t.selected)})}unSelectAll(){this.isAllSelected=!1,this.mails&&this.mails.subscribe(t=>{t.forEach(t=>{t.selected=!1})})}markAllAsRead(){this.mails.subscribe(t=>{t.forEach(t=>{t.selected&&(t.unread=!1)})})}markAllAsUnRead(){this.mails.subscribe(t=>{t.forEach(t=>{t.selected&&(t.unread=!0)})})}deleteAllCheckedMail(){this.mails.subscribe(t=>{t.forEach(t=>{t.selected&&(t.trash=!0,t.sent=!1,t.draft=!1,t.starred=!1)})}),this.getMails(),this.isAllSelected=!1}goToDetail(t){t.unread=!1,this.router.navigate(["apps/email/mail-list/"+this.type,t.id])}changeStarStatus(t){t.starred=!t.starred}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(p),s.Qb(n.a),s.Qb(n.f),s.Qb(l))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-inbox-list"]],decls:13,vars:8,consts:[[1,"d-flex","mailbox-header-bar","p-3","bg-white","border-bottom","align-items-center"],[1,"custom-control","custom-checkbox"],["id","toggle-all","type","checkbox",1,"custom-control-input",3,"ngModel","ngModelChange","click"],["for","toggle-all",1,"custom-control-label"],[1,"ml-auto"],["id","table-search-input","type","text","placeholder","Search mail...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"table-responsive"],[1,"table","table-hover","no-wrap"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"mail-checkbox","pl-3"],[1,"custom-control","custom-checkbox","mycustomcheckbox"],["type","checkbox",1,"custom-control-input",3,"id","ngModel","ngModelChange"],[1,"custom-control-label"],["class","mail-star",4,"ngIf"],[1,"sender",3,"click"],[1,"subject",3,"innerHTML","click"],[1,"attachment",3,"click"],["class","fa fa-paperclip",4,"ngIf"],[1,"date",3,"click"],[1,"mail-star"],[1,"font-18","mdi",3,"ngClass","click"],[1,"fa","fa-paperclip"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"input",2),s.ic("ngModelChange",(function(t){return e.isAllSelected=t}))("click",(function(){return e.toggleAll()})),s.Vb(),s.Wb(3,"label",3),s.Uc(4,"Check all"),s.Vb(),s.Vb(),s.Wb(5,"div",4),s.Wb(6,"input",5),s.ic("ngModelChange",(function(t){return e.searchText=t})),s.Vb(),s.Vb(),s.Vb(),s.Wb(7,"div",6),s.Wb(8,"table",7),s.Wb(9,"tbody"),s.Sc(10,L,13,12,"tr",8),s.nc(11,"MailSearch"),s.nc(12,"async"),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Bb(2),s.tc("ngModel",e.isAllSelected),s.Bb(4),s.tc("ngModel",e.searchText),s.Bb(4),s.tc("ngForOf",s.pc(11,3,s.oc(12,6,e.mails),e.searchText)))},directives:[o.a,o.m,o.p,o.b,a.t,a.r,a.u],pipes:[U,a.b],encapsulation:2}),t})();function T(t,e){if(1&t&&(s.Wb(0,"span",14),s.Uc(1),s.Vb()),2&t){const t=s.mc(2);s.Bb(1),s.Wc("<",t.mail.senderMail,">")}}function I(t,e){if(1&t&&(s.Wb(0,"section",20),s.Rb(1,"img",21),s.Wb(2,"h5",22),s.Uc(3),s.Vb(),s.Wb(4,"p"),s.Uc(5," 457K \xa0\xa0 "),s.Wb(6,"a",18),s.Uc(7,"View"),s.Vb(),s.Uc(8," \xa0\xa0 "),s.Wb(9,"a",18),s.Uc(10,"Download"),s.Vb(),s.Vb(),s.Vb()),2&t){const t=e.$implicit,i=e.index;s.Bb(1),s.uc("src",t,s.Lc),s.Bb(2),s.Wc("image-",i+1,".jpg")}}function j(t,e){if(1&t&&(s.Wb(0,"div",15),s.Rb(1,"hr"),s.Wb(2,"div",16),s.Wb(3,"div",17),s.Wb(4,"p"),s.Wb(5,"strong"),s.Uc(6),s.Vb(),s.Uc(7," \xa0-\xa0 "),s.Wb(8,"a",18),s.Uc(9,"Download all attachments"),s.Vb(),s.Uc(10,"\xa0\xa0\xa0 "),s.Wb(11,"a",18),s.Uc(12,"View all Images"),s.Vb(),s.Vb(),s.Sc(13,I,11,2,"section",19),s.Vb(),s.Vb(),s.Vb()),2&t){const t=s.mc(2);s.Bb(6),s.Wc("",t.mail.attachments.length," attachments"),s.Bb(7),s.tc("ngForOf",t.mail.attachments)}}function J(t,e){if(1&t&&(s.Wb(0,"div"),s.Wb(1,"div",1),s.Wb(2,"h4",2),s.Uc(3),s.Vb(),s.Wb(4,"div",3),s.Wb(5,"div",4),s.Rb(6,"i",5),s.Vb(),s.Wb(7,"div",6),s.Wb(8,"span",7),s.Uc(9),s.Vb(),s.Sc(10,T,2,1,"span",8),s.Wb(11,"span",9),s.Uc(12,"to me"),s.Vb(),s.Vb(),s.Wb(13,"div",10),s.Wb(14,"span",11),s.Uc(15),s.Vb(),s.Vb(),s.Vb(),s.Rb(16,"div",12),s.Sc(17,j,14,2,"div",13),s.Vb(),s.Vb()),2&t){const t=s.mc();s.Bb(3),s.Vc(t.mail.subject),s.Bb(6),s.Vc(t.mail.sender),s.Bb(1),s.tc("ngIf",t.mail.senderMail),s.Bb(5),s.Wc(" ",t.mail.date," "),s.Bb(1),s.tc("innerHTML",t.mail.body,s.Kc),s.Bb(1),s.tc("ngIf",t.mail.attachments.length>0)}}let O=(()=>{class t{constructor(t,e,i){this.service=t,this.route=e,this.router=i,this.replyMessage=new s.n}ngOnInit(){this.route.params.switchMap(t=>this.service.getMail(+t.id)).subscribe(t=>this.mail=t)}goToReply(t){this.replyMessage.emit(t)}trash(t){this.service.getMail(t).then(t=>{t.trash=!0,t.sent=!1,t.draft=!1,t.starred=!1}),this.router.navigate(["apps/email/mail-list/inbox"])}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(p),s.Qb(n.a),s.Qb(n.f))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-mail-detail"]],outputs:{replyMessage:"replyMessage"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"card-body"],[1,"mb-3"],[1,"d-flex","mt-4","mb-4"],[1,"round","mr-2","flex-shrink-0"],["aria-hidden","true",1,"fa","fa-user"],[1,""],[1,"font-bold"],["class","email text-truncate d-block w-75",4,"ngIf"],[1,"receiver"],[1,"ml-auto"],[1,"mail-date"],[1,"mailbox-body",3,"innerHTML"],["class","mail-attachments",4,"ngIf"],[1,"email","text-truncate","d-block","w-75"],[1,"mail-attachments"],[1,"row"],[1,"col-sm-6"],["href","#"],["class","attachment",4,"ngFor","ngForOf"],[1,"attachment"],["alt","",3,"src"],[1,"title"]],template:function(t,e){1&t&&s.Sc(0,J,18,6,"div",0),2&t&&s.tc("ngIf",e.mail)},directives:[a.u,a.t],encapsulation:2}),t})();i.d(e,"routes",(function(){return _})),i.d(e,"MailModule",(function(){return E}));const _=[{path:"",component:k,children:[{path:"",redirectTo:"mail-list/inbox",pathMatch:"full"},{path:"mail-list/:type",component:D},{path:"mail-compose",component:y},{path:"mail-list/:type/:id",component:O}]}];let E=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},providers:[l],imports:[[a.c,o.j,c,b.u,n.j.forChild(_)]]}),t})()}}]);