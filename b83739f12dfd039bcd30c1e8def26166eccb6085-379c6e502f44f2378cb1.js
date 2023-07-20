"use strict";(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[2523],{49020:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(38416)),l=a(n(70215)),i=a(n(56690)),s=a(n(94993)),u=a(n(73808)),d=a(n(89728)),f=a(n(61655)),c=a(n(67294)),p=(a(n(45697)),a(n(75900))),m=(n(73976),n(38077)),h=a(n(6988)),v=n(12773),g=n(77942),y=a(n(39327)),x={root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}};t.styles=x;var b=function(e){function t(e){var n;(0,i.default)(this,t),(n=(0,s.default)(this,(0,u.default)(t).call(this))).handleFocus=function(){n.setState((function(e){return e.focused?null:{focused:!0}}))},n.handleBlur=function(){n.setState((function(e){return e.focused?{focused:!1}:null}))},n.handleDirty=function(){n.state.filled||n.setState({filled:!0})},n.handleClean=function(){n.state.filled&&n.setState({filled:!1})},n.state={adornedStart:!1,filled:!1,focused:!1};var a=e.children;return a&&c.default.Children.forEach(a,(function(e){if((0,g.isMuiElement)(e,["Input","Select"])){(0,m.isFilled)(e.props,!0)&&(n.state.filled=!0);var t=(0,g.isMuiElement)(e,["Select"])?e.props.input:e;t&&(0,m.isAdornedStart)(t.props)&&(n.state.adornedStart=!0)}})),n}return(0,f.default)(t,e),(0,d.default)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.disabled&&t.focused?{focused:!1}:null}}]),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.className,i=t.component,s=t.disabled,u=t.error,d=t.fullWidth,f=t.margin,m=t.required,h=t.variant,g=(0,l.default)(t,["classes","className","component","disabled","error","fullWidth","margin","required","variant"]),x=this.state,b={adornedStart:x.adornedStart,disabled:s,error:u,filled:x.filled,focused:x.focused,margin:f,onBlur:this.handleBlur,onEmpty:this.handleClean,onFilled:this.handleDirty,onFocus:this.handleFocus,required:m,variant:h};return c.default.createElement(y.default.Provider,{value:b},c.default.createElement(i,(0,r.default)({className:(0,p.default)(n.root,(e={},(0,o.default)(e,n["margin".concat((0,v.capitalize)(f))],"none"!==f),(0,o.default)(e,n.fullWidth,d),e),a)},g)))}}]),t}(c.default.Component);b.defaultProps={component:"div",disabled:!1,error:!1,fullWidth:!1,margin:"none",required:!1,variant:"standard"};var C=(0,h.default)(x,{name:"MuiFormControl"})(b);t.default=C},62112:function(e,t,n){var a=n(64836);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return r.default}});var r=a(n(49020))},62616:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(38416)),l=a(n(70215)),i=a(n(67294)),s=(a(n(45697)),a(n(75900))),u=(n(73976),a(n(42010))),d=a(n(17673)),f=a(n(6988)),c=function(e){return{root:{fontFamily:e.typography.fontFamily,color:e.palette.text.secondary,fontSize:e.typography.pxToRem(16),lineHeight:1,padding:0,"&$focused":{color:e.palette.primary["light"===e.palette.type?"dark":"light"]},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}};function p(e){var t,n=e.children,a=e.classes,d=e.className,f=e.component,c=(e.disabled,e.error,e.filled,e.focused,e.muiFormControl),p=(e.required,(0,l.default)(e,["children","classes","className","component","disabled","error","filled","focused","muiFormControl","required"])),m=(0,u.default)({props:e,muiFormControl:c,states:["required","focused","disabled","error","filled"]});return i.default.createElement(f,(0,r.default)({className:(0,s.default)(a.root,(t={},(0,o.default)(t,a.disabled,m.disabled),(0,o.default)(t,a.error,m.error),(0,o.default)(t,a.filled,m.filled),(0,o.default)(t,a.focused,m.focused),(0,o.default)(t,a.required,m.required),t),d)},p),n,m.required&&i.default.createElement("span",{className:(0,s.default)(a.asterisk,(0,o.default)({},a.error,m.error))}," *"))}t.styles=c,p.defaultProps={component:"label"};var m=(0,f.default)(c,{name:"MuiFormLabel"})((0,d.default)(p));t.default=m},15626:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(62616))},14715:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(38416)),o=a(n(70215)),l=a(n(10434)),i=a(n(67294)),s=(a(n(45697)),a(n(75900))),u=(n(73976),a(n(6988))),d=n(53017),f=(a(n(66857)),[0,8,16,24,32,40]),c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,l.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return f.forEach((function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})})),n}(0,"xs"),d.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,l.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))};function m(e){var t,n=e.alignContent,a=e.alignItems,u=e.classes,d=e.className,f=e.component,c=e.container,p=e.direction,h=e.item,v=e.justify,g=e.lg,y=e.md,x=e.sm,b=e.spacing,C=e.wrap,P=e.xl,E=e.xs,w=e.zeroMinWidth,O=(0,o.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),M=(0,s.default)((t={},(0,r.default)(t,u.container,c),(0,r.default)(t,u.item,h),(0,r.default)(t,u.zeroMinWidth,w),(0,r.default)(t,u["spacing-xs-".concat(String(b))],c&&0!==b),(0,r.default)(t,u["direction-xs-".concat(String(p))],p!==m.defaultProps.direction),(0,r.default)(t,u["wrap-xs-".concat(String(C))],C!==m.defaultProps.wrap),(0,r.default)(t,u["align-items-xs-".concat(String(a))],a!==m.defaultProps.alignItems),(0,r.default)(t,u["align-content-xs-".concat(String(n))],n!==m.defaultProps.alignContent),(0,r.default)(t,u["justify-xs-".concat(String(v))],v!==m.defaultProps.justify),(0,r.default)(t,u["grid-xs-".concat(String(E))],!1!==E),(0,r.default)(t,u["grid-sm-".concat(String(x))],!1!==x),(0,r.default)(t,u["grid-md-".concat(String(y))],!1!==y),(0,r.default)(t,u["grid-lg-".concat(String(g))],!1!==g),(0,r.default)(t,u["grid-xl-".concat(String(P))],!1!==P),t),d);return i.default.createElement(f,(0,l.default)({className:M},O))}t.styles=p,m.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var h=(0,u.default)(p,{name:"MuiGrid"})(m);t.default=h},97322:function(e,t,n){var a=n(64836);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return r.default}});var r=a(n(14715))},53705:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(38416)),l=a(n(70215)),i=a(n(67294)),s=(a(n(45697)),a(n(75900))),u=a(n(42010)),d=a(n(17673)),f=a(n(6988)),c=a(n(15626)),p=function(e){return{root:{transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 17px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}};function m(e){var t,n=e.children,a=e.classes,d=e.className,f=e.disableAnimation,p=e.FormLabelClasses,m=(e.margin,e.muiFormControl),h=e.shrink,v=(e.variant,(0,l.default)(e,["children","classes","className","disableAnimation","FormLabelClasses","margin","muiFormControl","shrink","variant"])),g=h;void 0===g&&m&&(g=m.filled||m.focused||m.adornedStart);var y=(0,u.default)({props:e,muiFormControl:m,states:["margin","variant"]}),x=(0,s.default)(a.root,(t={},(0,o.default)(t,a.formControl,m),(0,o.default)(t,a.animated,!f),(0,o.default)(t,a.shrink,g),(0,o.default)(t,a.marginDense,"dense"===y.margin),(0,o.default)(t,a.filled,"filled"===y.variant),(0,o.default)(t,a.outlined,"outlined"===y.variant),t),d);return i.default.createElement(c.default,(0,r.default)({"data-shrink":g,className:x,classes:(0,r.default)({focused:a.focused,disabled:a.disabled,error:a.error,required:a.required},p)},v),n)}t.styles=p,m.defaultProps={disableAnimation:!1};var h=(0,f.default)(p,{name:"MuiInputLabel"})((0,d.default)(m));t.default=h},67347:function(e,t,n){var a=n(64836);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return r.default}});var r=a(n(53705))},24115:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(56690)),i=a(n(89728)),s=a(n(94993)),u=a(n(73808)),d=a(n(61655)),f=a(n(67294)),c=(a(n(45697)),a(n(73935))),p=a(n(44825)),m=a(n(6988)),h=a(n(57500)),v=a(n(40209)),g={vertical:"top",horizontal:"right"},y={vertical:"top",horizontal:"left"},x={paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}};t.styles=x;var b=function(e){function t(){var e,n;(0,l.default)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(r)))).getContentAnchorEl=function(){return n.menuListRef.selectedItemRef?c.default.findDOMNode(n.menuListRef.selectedItemRef):c.default.findDOMNode(n.menuListRef).firstChild},n.focus=function(){if(n.menuListRef&&n.menuListRef.selectedItemRef)c.default.findDOMNode(n.menuListRef.selectedItemRef).focus();else{var e=c.default.findDOMNode(n.menuListRef);e&&e.firstChild&&e.firstChild.focus()}},n.handleMenuListRef=function(e){n.menuListRef=e},n.handleEntering=function(e){var t=n.props,a=t.disableAutoFocusItem,r=t.theme,o=c.default.findDOMNode(n.menuListRef);if(!0!==a&&n.focus(),o&&e.clientHeight<o.clientHeight&&!o.style.width){var l="".concat((0,p.default)(),"px");o.style["rtl"===r.direction?"paddingLeft":"paddingRight"]=l,o.style.width="calc(100% + ".concat(l,")")}n.props.onEntering&&n.props.onEntering(e)},n.handleListKeyDown=function(e){"Tab"===e.key&&(e.preventDefault(),n.props.onClose&&n.props.onClose(e,"tabKeyDown"))},n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.open&&!0!==this.props.disableAutoFocusItem&&this.focus()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=(e.disableAutoFocusItem,e.MenuListProps),l=(e.onEntering,e.PaperProps),i=void 0===l?{}:l,s=e.PopoverClasses,u=e.theme,d=(0,o.default)(e,["children","classes","disableAutoFocusItem","MenuListProps","onEntering","PaperProps","PopoverClasses","theme"]);return f.default.createElement(h.default,(0,r.default)({getContentAnchorEl:this.getContentAnchorEl,classes:s,onEntering:this.handleEntering,anchorOrigin:"rtl"===u.direction?g:y,transformOrigin:"rtl"===u.direction?g:y,PaperProps:(0,r.default)({},i,{classes:(0,r.default)({},i.classes,{root:n.paper})})},d),f.default.createElement(v.default,(0,r.default)({onKeyDown:this.handleListKeyDown},a,{ref:this.handleMenuListRef}),t))}}]),t}(f.default.Component);b.defaultProps={disableAutoFocusItem:!1,transitionDuration:"auto"};var C=(0,m.default)(x,{name:"MuiMenu",withTheme:!0})(b);t.default=C},28290:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(67294)),i=(a(n(45697)),n(73976),a(n(27237))),s=a(n(6988)),u=a(n(42010)),d=a(n(17673)),f=a(n(41650)),c=a(n(56461)),p=function(e){return{root:{position:"relative",width:"100%"},select:{"-moz-appearance":"none","-webkit-appearance":"none",userSelect:"none",paddingRight:32,borderRadius:0,height:"1.1875em",width:"calc(100% - 32px)",minWidth:16,cursor:"pointer","&:focus":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},"&$disabled":{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper}},filled:{width:"calc(100% - 44px)"},outlined:{width:"calc(100% - 46px)",borderRadius:e.shape.borderRadius},selectMenu:{width:"auto",height:"auto",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",minHeight:"1.1875em"},disabled:{},icon:{position:"absolute",right:0,top:"calc(50% - 12px)",color:e.palette.action.active,"pointer-events":"none"}}};function m(e){var t=e.children,n=e.classes,a=e.IconComponent,s=e.input,d=e.inputProps,f=e.muiFormControl,c=(e.variant,(0,o.default)(e,["children","classes","IconComponent","input","inputProps","muiFormControl","variant"])),p=(0,u.default)({props:e,muiFormControl:f,states:["variant"]});return l.default.cloneElement(s,(0,r.default)({inputComponent:i.default,inputProps:(0,r.default)({children:t,classes:n,IconComponent:a,variant:p.variant,type:void 0},d,s?s.props.inputProps:{})},c))}t.styles=p,m.defaultProps={IconComponent:f.default,input:l.default.createElement(c.default,null)},m.muiName="Select";var h=(0,s.default)(p,{name:"MuiNativeSelect"})((0,d.default)(m));t.default=h},27237:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(38416)),l=a(n(70215)),i=a(n(67294)),s=(a(n(45697)),a(n(75900)));n(73976);var u=function(e){var t,n=e.children,a=e.classes,u=e.className,d=e.disabled,f=e.IconComponent,c=e.inputRef,p=e.name,m=e.onChange,h=e.value,v=e.variant,g=(0,l.default)(e,["children","classes","className","disabled","IconComponent","inputRef","name","onChange","value","variant"]);return i.default.createElement("div",{className:a.root},i.default.createElement("select",(0,r.default)({className:(0,s.default)(a.select,(t={},(0,o.default)(t,a.filled,"filled"===v),(0,o.default)(t,a.outlined,"outlined"===v),(0,o.default)(t,a.disabled,d),t),u),name:p,disabled:d,onChange:m,value:h,ref:c},g),n),i.default.createElement(f,{className:a.icon}))};t.default=u},20375:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(56690)),i=a(n(89728)),s=a(n(94993)),u=a(n(73808)),d=a(n(61655)),f=a(n(67294)),c=(a(n(45697)),a(n(73935))),p=(a(n(42473)),a(n(62881))),m=a(n(51845)),h=(n(73976),a(n(38252))),v=a(n(62498)),g=n(12773),y=a(n(6988)),x=a(n(60456)),b=a(n(51055)),C=a(n(95426));function P(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function E(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function w(e){return[e.horizontal,e.vertical].map((function(e){return"number"==typeof e?"".concat(e,"px"):e})).join(" ")}function O(e){return"function"==typeof e?e():e}var M={paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:"none"}};t.styles=M;var R=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,s.default)(this,(0,u.default)(t).call(this))).handleGetOffsetTop=P,e.handleGetOffsetLeft=E,e.componentWillUnmount=function(){e.handleResize.clear()},e.setPositioningStyles=function(t){var n=e.getPositioningStyle(t);null!==n.top&&(t.style.top=n.top),null!==n.left&&(t.style.left=n.left),t.style.transformOrigin=n.transformOrigin},e.getPositioningStyle=function(t){var n=e.props,a=n.anchorEl,r=n.anchorReference,o=n.marginThreshold,l=e.getContentAnchorOffset(t),i={width:t.offsetWidth,height:t.offsetHeight},s=e.getTransformOrigin(i,l);if("none"===r)return{top:null,left:null,transformOrigin:w(s)};var u=e.getAnchorOffset(l),d=u.top-s.vertical,f=u.left-s.horizontal,c=d+i.height,p=f+i.width,m=(0,v.default)(O(a)),h=m.innerHeight-o,g=m.innerWidth-o;if(d<o){var y=d-o;d-=y,s.vertical+=y}else if(c>h){var x=c-h;d-=x,s.vertical+=x}if(f<o){var b=f-o;f-=b,s.horizontal+=b}else if(p>g){var C=p-g;f-=C,s.horizontal+=C}return{top:"".concat(d,"px"),left:"".concat(f,"px"),transformOrigin:w(s)}},e.handleEntering=function(t){e.props.onEntering&&e.props.onEntering(t),e.setPositioningStyles(t)},"undefined"!=typeof window&&(e.handleResize=(0,p.default)((function(){e.props.open&&e.setPositioningStyles(e.paperRef)}),166)),e}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.action&&this.props.action({updatePosition:this.handleResize})}},{key:"getAnchorOffset",value:function(e){var t=this.props,n=t.anchorEl,a=t.anchorOrigin,r=t.anchorReference,o=t.anchorPosition;if("anchorPosition"===r)return o;var l=(O(n)||(0,h.default)(this.paperRef).body).getBoundingClientRect(),i=0===e?a.vertical:"center";return{top:l.top+this.handleGetOffsetTop(l,i),left:l.left+this.handleGetOffsetLeft(l,a.horizontal)}}},{key:"getContentAnchorOffset",value:function(e){var t=this.props,n=t.getContentAnchorEl,a=t.anchorReference,r=0;if(n&&"anchorEl"===a){var o=n(e);if(o&&e.contains(o)){var l=function(e,t){for(var n=t,a=0;n&&n!==e;)a+=(n=n.parentNode).scrollTop;return a}(e,o);r=o.offsetTop+o.clientHeight/2-l||0}}return r}},{key:"getTransformOrigin",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.props.transformOrigin;return{vertical:this.handleGetOffsetTop(e,n.vertical)+t,horizontal:this.handleGetOffsetLeft(e,n.horizontal)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.action,t.anchorEl),a=(t.anchorOrigin,t.anchorPosition,t.anchorReference,t.children),l=t.classes,i=t.container,s=t.elevation,u=(t.getContentAnchorEl,t.marginThreshold,t.ModalClasses),d=t.onEnter,p=t.onEntered,v=(t.onEntering,t.onExit),y=t.onExited,b=t.onExiting,P=t.open,E=t.PaperProps,w=t.role,M=(t.transformOrigin,t.TransitionComponent),R=t.transitionDuration,S=t.TransitionProps,D=void 0===S?{}:S,N=(0,o.default)(t,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","getContentAnchorEl","marginThreshold","ModalClasses","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","role","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),I=R;"auto"!==R||M.muiSupportAuto||(I=void 0);var k=i||(n?(0,h.default)(O(n)).body:void 0);return f.default.createElement(x.default,(0,r.default)({classes:u,container:k,open:P,BackdropProps:{invisible:!0}},N),f.default.createElement(M,(0,r.default)({appear:!0,in:P,onEnter:d,onEntered:p,onExit:v,onExited:y,onExiting:b,role:w,timeout:I},D,{onEntering:(0,g.createChainedFunction)(this.handleEntering,D.onEntering)}),f.default.createElement(C.default,(0,r.default)({className:l.paper,elevation:s,ref:function(t){e.paperRef=c.default.findDOMNode(t)}},E),f.default.createElement(m.default,{target:"window",onResize:this.handleResize}),a)))}}]),t}(f.default.Component);R.defaultProps={anchorReference:"anchorEl",anchorOrigin:{vertical:"top",horizontal:"left"},elevation:8,marginThreshold:16,transformOrigin:{vertical:"top",horizontal:"left"},TransitionComponent:b.default,transitionDuration:"auto"};var S=(0,y.default)(M,{name:"MuiPopover"})(R);t.default=S},57500:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(20375))},27596:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(67294)),i=(a(n(45697)),n(73976),a(n(91906))),s=a(n(42010)),u=a(n(17673)),d=a(n(6988)),f=a(n(62552)),c=a(n(41650)),p=a(n(56461)),m=n(28290),h=a(n(27237)),v=m.styles;function g(e){var t=e.autoWidth,n=e.children,a=e.classes,u=e.displayEmpty,d=e.IconComponent,c=e.input,p=e.inputProps,m=e.MenuProps,v=e.muiFormControl,y=e.multiple,x=e.native,b=e.onClose,C=e.onOpen,P=e.open,E=e.renderValue,w=e.SelectDisplayProps,O=(e.variant,(0,o.default)(e,["autoWidth","children","classes","displayEmpty","IconComponent","input","inputProps","MenuProps","muiFormControl","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"])),M=x?h.default:i.default,R=(0,s.default)({props:e,muiFormControl:v,states:["variant"]});return l.default.cloneElement(c,(0,r.default)({inputComponent:M,inputProps:(0,r.default)({children:n,IconComponent:d,variant:R.variant,type:void 0,multiple:y},x?{}:{autoWidth:t,displayEmpty:u,MenuProps:m,onClose:b,onOpen:C,open:P,renderValue:E,SelectDisplayProps:w},p,{classes:p?(0,f.default)({baseClasses:a,newClasses:p.classes,Component:g}):a},c?c.props.inputProps:{})},O))}t.styles=v,g.defaultProps={autoWidth:!1,displayEmpty:!1,IconComponent:c.default,input:l.default.createElement(p.default,null),multiple:!1,native:!1},g.muiName="Select";var y=(0,d.default)(v,{name:"MuiSelect"})((0,u.default)(g));t.default=y},91906:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(38416)),l=a(n(70215)),i=a(n(861)),s=a(n(56690)),u=a(n(89728)),d=a(n(94993)),f=a(n(73808)),c=a(n(61655)),p=a(n(18698)),m=a(n(67294)),h=(a(n(45697)),a(n(75900))),v=(a(n(42473)),n(73976),a(n(24115))),g=n(38077),y=n(77942);function x(e,t){return"object"===(0,p.default)(t)&&null!==t?e===t:String(e)===String(t)}var b=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,d.default)(this,(0,f.default)(t).call(this))).ignoreNextBlur=!1,n.update=function(e){var t=e.event,a=e.open;n.isOpenControlled?a?n.props.onOpen(t):n.props.onClose(t):n.setState({menuMinWidth:n.props.autoWidth?null:n.displayRef.clientWidth,open:a})},n.handleClick=function(e){n.ignoreNextBlur=!0,n.update({open:!0,event:e})},n.handleClose=function(e){n.update({open:!1,event:e})},n.handleItemClick=function(e){return function(t){n.props.multiple||n.update({open:!1,event:t});var a=n.props,r=a.onChange,o=a.name;if(r){var l;if(n.props.multiple){var s=(l=Array.isArray(n.props.value)?(0,i.default)(n.props.value):[]).indexOf(e.props.value);-1===s?l.push(e.props.value):l.splice(s,1)}else l=e.props.value;t.persist(),t.target={value:l,name:o},r(t,e)}}},n.handleBlur=function(e){if(!0===n.ignoreNextBlur)return e.stopPropagation(),void(n.ignoreNextBlur=!1);if(n.props.onBlur){var t=n.props,a=t.value,r=t.name;e.persist(),e.target={value:a,name:r},n.props.onBlur(e)}},n.handleKeyDown=function(e){n.props.readOnly||-1!==[" ","ArrowUp","ArrowDown","Enter"].indexOf(e.key)&&(e.preventDefault(),n.ignoreNextBlur=!0,n.update({open:!0,event:e}))},n.handleDisplayRef=function(e){n.displayRef=e},n.handleInputRef=function(e){var t=n.props.inputRef;if(t){var a={node:e,value:n.props.value,focus:function(){n.displayRef.focus()}};(0,y.setRef)(t,a)}},n.isOpenControlled=void 0!==e.open,n.state={menuMinWidth:null,open:!1},n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.isOpenControlled&&this.props.open&&(this.displayRef.focus(),this.forceUpdate()),this.props.autoFocus&&this.displayRef.focus()}},{key:"render",value:function(){var e,t,n=this,a=this.props,i=a.autoWidth,s=a.children,u=a.classes,d=a.className,f=a.disabled,c=a.displayEmpty,p=a.IconComponent,y=(a.inputRef,a.MenuProps),b=void 0===y?{}:y,C=a.multiple,P=a.name,E=(a.onBlur,a.onChange,a.onClose,a.onFocus),w=(a.onOpen,a.open),O=a.readOnly,M=a.renderValue,R=(a.required,a.SelectDisplayProps),S=a.tabIndex,D=a.type,N=void 0===D?"hidden":D,I=a.value,k=a.variant,j=(0,l.default)(a,["autoWidth","children","classes","className","disabled","displayEmpty","IconComponent","inputRef","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","required","SelectDisplayProps","tabIndex","type","value","variant"]),W=this.isOpenControlled&&this.displayRef?w:this.state.open;delete j["aria-invalid"];var F="",A=[],_=!1;((0,g.isFilled)(this.props)||c)&&(M?t=M(I):_=!0);var z=m.default.Children.map(s,(function(e){if(!m.default.isValidElement(e))return null;var t;if(C){if(!Array.isArray(I))throw new Error("Material-UI: the `value` property must be an array when using the `Select` component with `multiple`.");(t=I.some((function(t){return x(t,e.props.value)})))&&_&&A.push(e.props.children)}else(t=x(I,e.props.value))&&_&&(F=e.props.children);return m.default.cloneElement(e,{onClick:n.handleItemClick(e),role:"option",selected:t,value:void 0,"data-value":e.props.value})}));_&&(t=C?A.join(", "):F);var L,T=this.state.menuMinWidth;return!i&&this.isOpenControlled&&this.displayRef&&(T=this.displayRef.clientWidth),L=void 0!==S?S:f?null:0,m.default.createElement("div",{className:u.root},m.default.createElement("div",(0,r.default)({className:(0,h.default)(u.select,u.selectMenu,(e={},(0,o.default)(e,u.disabled,f),(0,o.default)(e,u.filled,"filled"===k),(0,o.default)(e,u.outlined,"outlined"===k),e),d),ref:this.handleDisplayRef,"aria-pressed":W?"true":"false",tabIndex:L,role:"button","aria-owns":W?"menu-".concat(P||""):void 0,"aria-haspopup":"true",onKeyDown:this.handleKeyDown,onBlur:this.handleBlur,onClick:f||O?null:this.handleClick,onFocus:E,id:P?"select-".concat(P):void 0},R),t||m.default.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}})),m.default.createElement("input",(0,r.default)({value:Array.isArray(I)?I.join(","):I,name:P,ref:this.handleInputRef,type:N},j)),m.default.createElement(p,{className:u.icon}),m.default.createElement(v.default,(0,r.default)({id:"menu-".concat(P||""),anchorEl:this.displayRef,open:W,onClose:this.handleClose},b,{MenuListProps:(0,r.default)({role:"listbox",disableListWrap:!0},b.MenuListProps),PaperProps:(0,r.default)({},b.PaperProps,{style:(0,r.default)({minWidth:T},null!=b.PaperProps?b.PaperProps.style:null)})}),z))}}]),t}(m.default.Component);t.default=b},6039:function(e,t,n){var a=n(64836);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return r.default}});var r=a(n(27596))},41650:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(76454)),l=a(n(83076)),i=r.default.createElement("path",{d:"M7 10l5 5 5-5z"}),s=function(e){return r.default.createElement(l.default,e,i)};(s=(0,o.default)(s)).muiName="SvgIcon";var u=s;t.default=u},66857:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return function(){return null}};t.default=n},48359:function(e,t,n){var a=n(87462),r=n(63366),o=(n(67294),n(6988)),l=n(97322),i=n(23431),s=["classes","children","className"];function u(e){var t=Object.assign({},e),n=t.classes,o=t.children,u=t.className,d=(0,r.Z)(t,s);return(0,i.tZ)(l.Z,(0,a.Z)({container:!0},d,{className:n.grid+" "+u}),o)}u.defaultProps={className:""},t.Z=(0,o.default)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(u)},34314:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(67347),o=n(28546),l=n(62112),i=n(6039),s=n(6988),u=n(48359),d=n(25444),f=function(e){return{formControl:{margin:"8px",minWidth:320},selectEmpty:{marginTop:"16px"},section:{padding:"100px 0 0 0",textAlign:"center"}}},c=n(23431),p=(0,s.default)(f)((function(e){var t=e.classes,n=a.useState("All Downloads"),s=n[0],f=n[1],p=(0,d.useStaticQuery)("894450293");return console.log(p),(0,c.tZ)("div",{className:t.section},(0,c.tZ)(u.Z,{justify:"center"},(0,c.tZ)(l.Z,{className:t.formControl},(0,c.tZ)(r.Z,{id:"demo-simple-select-label"},"Select Download"),(0,c.tZ)(i.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,onChange:function(t){f(t.target.value),e.handleVersionChangeFromParent(t.target.value)}},(0,c.tZ)(o.Z,{value:"All Downloads"},"All Downloads"),p.allDownloadsYaml.edges.map((function(e,t){return(0,c.tZ)(o.Z,{key:t,value:e.node.version},e.node.version)}))))))}))}}]);
//# sourceMappingURL=b83739f12dfd039bcd30c1e8def26166eccb6085-379c6e502f44f2378cb1.js.map