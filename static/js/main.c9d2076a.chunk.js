(this.webpackJsonp2019ncovnew=this.webpackJsonp2019ncovnew||[]).push([[0],{147:function(e,t,a){},237:function(e,t,a){e.exports=a(551)},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},551:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(234),i=a.n(r),l=(a(242),a(243),a(9)),o=a(10),s=a(12),u=a(11),m=(a(244),a(38)),d=(a(245),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).slideInDown=function(){var e=document.getElementsByClassName("nameUl")[0];e.className.split(" ")[2]?(e.classList.remove("slideOutUp"),e.classList.add("slideInDown"),e.style.display="block"):(e.classList.add("slideInDown"),e.style.display="block")},e.slideOutUp=function(){var e=document.getElementsByClassName("nameUl")[0];e.className.split(" ");e.classList.remove("slideInDown"),e.classList.add("slideOutUp"),setTimeout((function(){e.style.display="none"}),1e3)},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"nameUl-outer"},c.a.createElement("li",{className:"name-outer"},c.a.createElement(m.b,{to:"/city",activeClassName:"active-outer"},"\u7701\u4efd\u8be6\u60c5")),c.a.createElement("li",{className:"name-outer"},c.a.createElement(m.b,{to:"/believe",activeClassName:"active-outer"},"\u7834\u9664\u8c23\u8a00")),c.a.createElement("li",{className:"name-outer"},c.a.createElement(m.b,{to:"/news",activeClassName:"active-outer"},"\u5b9e\u65f6\u64ad\u62a5")),c.a.createElement("li",{className:"name-outer"},c.a.createElement(m.b,{to:"/echarts",activeClassName:"active-outer"},"\u4e16\u754c\u7edf\u8ba1")),c.a.createElement("li",{className:"name-outer"},c.a.createElement(m.b,{to:"/china",activeClassName:"active-outer"},"\u75ab\u60c5\u5730\u56fe"))))}}]),a}(n.Component)),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("span",null,"\u75ab\u60c5\u4fe1\u606f\u7edf\u8ba1"))}}]),a}(n.Component),h=a(18),f=(a(250),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container zoomIn animated"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:this.props.src})),c.a.createElement("div",{className:"title"},c.a.createElement("span",null,this.props.title)))}}]),a}(n.Component)),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).fetchData=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.newslist[0].desc})}))},e.state={data:{dailyPics:[]}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574")}},{key:"render",value:function(){return c.a.createElement("div",{className:"all"},c.a.createElement("div",{className:"container-all"},c.a.createElement(f,{src:this.state.data.imgUrl,title:"\u5168\u56fd\u60c5\u51b5\u56fe"})),this.state.data.dailyPics.map((function(e){return c.a.createElement("div",{className:"container-all"},c.a.createElement(f,{src:e}))})))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).fetchData=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.newslist})}))},e.state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("https://api.tianapi.com/txapi/rumour/index?key=285ed712e35d23a3caa2a5e9c62c2574")}},{key:"render",value:function(){return c.a.createElement("div",{className:"yaoyan"},c.a.createElement("ul",null,this.state.data.map((function(e){return window.innerWidth>=700?c.a.createElement("div",{className:"container-yaoyan fadeIn animated"},c.a.createElement("img",{src:e.imgsrc,className:"fadeIn animated",width:"120px",height:"70%"}),c.a.createElement("h3",null,e.title),c.a.createElement("span",null,e.explain),c.a.createElement("p",{className:"time"},e.date),c.a.createElement("p",{className:"author",style:{width:"40%"}},"\u8bc1 : ",e.author.length>=6?e.author.slice(0,6)+"....":e.author)):window.innerWidth<700?c.a.createElement("div",{className:"container-yaoyan fadeIn animated"},c.a.createElement("h3",null,e.title),c.a.createElement("span",null,e.explain),c.a.createElement("p",{className:"time"},e.date),c.a.createElement("p",{className:"author",style:{width:"40%"}},"\u8bc1 : ",e.author.length>=6?e.author.slice(0,6)+"....":e.author)):void 0}))))}}]),a}(n.Component),E=(a(147),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement("h1",{className:"city",id:this.props.provinceShortName},this.props.provinceName),c.a.createElement("ul",{className:"head"},c.a.createElement("li",null,"\u786e\u8bca"),c.a.createElement("li",null,this.props.confirmedCount),c.a.createElement("li",null,"\u73b0\u5b58"),c.a.createElement("li",null,this.props.currentConfirmedCount),c.a.createElement("li",null,"\u6cbb\u6108"),c.a.createElement("li",null,this.props.curedCount),c.a.createElement("li",null,"\u6b7b\u4ea1"),c.a.createElement("li",null,this.props.deadCount)),c.a.createElement("div",{className:"container-citys"},c.a.createElement("ul",{className:"citys"},this.props.citys.map((function(e){return c.a.createElement("div",{id:"citys"},c.a.createElement("h3",null,e.cityName),c.a.createElement("ul",null,c.a.createElement("li",null,"\u786e\u8bca:",e.confirmedCount),c.a.createElement("li",null,"\u73b0\u5b58:",e.currentConfirmedCount),c.a.createElement("li",null,"\u6cbb\u6108:",e.curedCount),c.a.createElement("li",null,"\u6b7b\u4ea1:",e.deadCount)))}))))))))}}]),a}(n.Component)),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).fetchData=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.newslist})}))},e.scrollIntoViewCity=function(e){document.getElementById(e.target.innerHTML).scrollIntoView();for(var t=document.getElementsByClassName("cityName"),a=0;a<t.length;a++)t[a].classList.remove("active");e.target.className="cityName active"},e.heightCenter=function(){for(var e=document.getElementsByClassName("cityName"),t=0;t<e.length;t++)e[t].getElementsByClassName.height=e[t].clientHeight},e.state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574"),this.heightCenter()}},{key:"render",value:function(){var e=this;return this.state.data.length>0?c.a.createElement("div",{className:"cityMenuInner"},c.a.createElement("ul",null,this.state.data.map((function(t){return c.a.createElement("li",{className:"cityName",key:t.provinceShortName,onClick:function(t){e.scrollIntoViewCity(t)}},t.provinceShortName)})))):this.state.data.length<=0?c.a.createElement("div",null,"\u6b63\u5728\u52a0\u8f7d\u6216\u8005\u670d\u52a1\u5668\u6b63\u5728\u7ef4\u62a4..."):void 0}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).fetchData=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.newslist})}))},e.fetchCount=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){var a=t.newslist[0].desc;e.setState({count:[{count:a.currentConfirmedCount,name:"\u73b0\u5b58",incr:a.currentConfirmedIncr},{count:a.suspectedCount,name:"\u7591\u4f3c",incr:a.suspectedIncr},{count:a.curedCount,name:"\u6cbb\u6108",incr:a.curedIncr},{count:a.deadCount,name:"\u6b7b\u4ea1",incr:a.deadIncr}],add:[{}]})}))},e.state={data:[],count:[],add:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574"),this.fetchCount("https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574")}},{key:"render",value:function(){return c.a.createElement("div",{className:"citys-outer"},c.a.createElement("div",{className:"cityMenu"},c.a.createElement(b,null)),c.a.createElement("div",{className:"count fadeIn animated"},c.a.createElement("div",{className:"count-header"},c.a.createElement("h3",null,"\u5168\u56fd\u60c5\u51b5")),c.a.createElement("div",{className:"count-body"},c.a.createElement("ul",null,this.state.count.map((function(e){return c.a.createElement("div",{className:"count-inner"},c.a.createElement("li",null,e.name),c.a.createElement("li",{style:{fontWeight:"100"}},e.count),c.a.createElement("li",{className:"incr"},e.incr>=0?"+"+e.incr:e.incr))}))))),this.state.data.map((function(e){return c.a.createElement(E,{provinceName:e.provinceName,confirmedCount:e.confirmedCount,currentConfirmedCount:e.currentConfirmedCount,curedCount:e.curedCount,deadCount:e.deadCount,citys:e.cities,provinceShortName:e.provinceShortName})})))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).to=function(){window.open(e.props.sourceUrl,"_blank")},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"news-container animated fadeIn"},c.a.createElement("div",{className:"news-header"},c.a.createElement("h3",{onClick:this.to},this.props.title),c.a.createElement("p",null,"\u53d1\u5e03\u4e8e",this.props.pubDateStr)),c.a.createElement("div",{className:"news-body"},c.a.createElement("p",null,this.props.summary)),c.a.createElement("div",{className:"position"},this.props.provinceName))}}]),a}(n.Component),j=(a(251),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).fetchData=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.newslist[0].news})}))},e.state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("https://api.tianapi.com/txapi/ncov/index?key=285ed712e35d23a3caa2a5e9c62c2574")}},{key:"render",value:function(){return c.a.createElement("div",{className:"news"},this.state.data.map((function(e){return c.a.createElement(C,{pubDateStr:e.pubDateStr,title:e.title,infoSource:e.infoSource,sourceUrl:e.sourceUrl,summary:e.summary,provinceName:e.provinceName})})))}}]),a}(n.Component)),O=(a(103),a(116),a(118),a(94),a(119),a(101)),g=a.n(O),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={option:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.tianapi.com/txapi/ncovabroad/index?key=285ed712e35d23a3caa2a5e9c62c2574").then((function(e){return e.json()})).then((function(t){var a={tooltip:{trigger:"axis"},xAxis:{data:[],type:"category",axisLabel:{interval:0,formatter:function(e){return e.split("").join("\n")}}},yAxis:{type:"value"},legend:{data:["\u73b0\u5b58\u75c5\u4f8b","\u6b7b\u4ea1\u75c5\u4f8b","\u6cbb\u6108\u75c5\u4f8b"]},series:[{name:"\u73b0\u5b58\u75c5\u4f8b",type:"bar",data:[],itemStyle:{normal:{color:"Coral"}}},{name:"\u6b7b\u4ea1\u75c5\u4f8b",type:"bar",data:[],itemStyle:{normal:{color:"gray"}}},{name:"\u6cbb\u6108\u75c5\u4f8b",type:"bar",data:[],itemStyle:{normal:{color:"ForestGreen"}}}]};t.newslist.map((function(e,t){parseInt(e.confirmedCount)>1e5&&(a.xAxis.data.push(e.provinceName),a.series[0].data.push(e.currentConfirmedCount),a.series[1].data.push(e.deadCount),a.series[2].data.push(e.curedCount))})),e.setState({option:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{style:{height:"100%"}},c.a.createElement(g.a,{option:this.state.option,className:"animated fadeIn",style:{height:"90%",top:"5%"}}))}}]),a}(c.a.Component),k=a(236),x=a(141);a.n(x).a.registerMap("china",k);var I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={option:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={title:{text:"\u75ab\u60c5\u5730\u56fe",subtext:"\u5f53\u65e5\u4fe1\u606f(\u542b\u5883\u5916\u8f93\u9001)",left:"center"},tooltip:{trigger:"item",formatter:function(e){for(var a=e.name+"<br/>",n=t.series,c=0;c<n.length;c++)for(var r=0;r<n[c].data.length;r++)n[c].data[r].name==e.name&&(a+=n[c].name+" : "+n[c].data[r].value+"</br>");return a}},legend:{orient:"vertical",left:"left",data:["\u73b0\u5b58","\u6b7b\u4ea1","\u6cbb\u6108","\u603b\u6570"]},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"\u73b0\u5b58",type:"map",mapType:"china",roam:!1,label:{normal:{show:!1},emphasis:{show:!0}},data:[]},{name:"\u6b7b\u4ea1",type:"map",mapType:"china",label:{normal:{show:!1},emphasis:{show:!0}},data:[]},{name:"\u6cbb\u6108",type:"map",mapType:"china",label:{normal:{show:!1},emphasis:{show:!0}},data:[]},{name:"\u603b\u6570",type:"map",mapType:"china",roam:!1,label:{normal:{show:!1},emphasis:{show:!0}},data:[]}],visualMap:{min:0,max:4e3,left:"left",top:"bottom",text:["\u7279\u522b\u4e25\u91cd","\u4e0d\u53ef\u5c0f\u89d1"],calculable:!1}};fetch("https://api.tianapi.com/txapi/ncovcity/index?key=285ed712e35d23a3caa2a5e9c62c2574").then((function(e){return e.json()})).then((function(a){a.newslist.map((function(e){t.series[0].data.push({name:e.provinceShortName,value:e.currentConfirmedCount}),t.series[1].data.push({name:e.provinceShortName,value:e.deadCount}),t.series[2].data.push({name:e.provinceShortName,value:e.curedCount}),t.series[3].data.push({name:e.provinceShortName,value:e.confirmedCount})})),e.setState({option:t})}))}},{key:"render",value:function(){return c.a.createElement("div",{style:{height:"100%"}},c.a.createElement(g.a,{option:this.state.option,className:"fadeIn animated",style:{height:"80%",width:"80%",top:"10%",left:"10%"}}))}}]),a}(c.a.Component),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"body"},c.a.createElement(h.a,{path:"/all",component:v,exact:!0}),c.a.createElement(h.a,{path:"/believe",component:y,exact:!0}),c.a.createElement(h.a,{path:"/city",component:N,exact:!0}),c.a.createElement(h.a,{path:"/news",component:j,exact:!0}),c.a.createElement(h.a,{path:"/echarts",component:w,exact:!0}),c.a.createElement(h.a,{path:"/china",component:I,exact:!0}))}}]),a}(n.Component),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:"100%",height:"5%",float:"left",textAlign:"center",backgroundColor:"rgb(50,50,50)"}},c.a.createElement("a",{href:"http://beian.miit.gov.cn/",target:"_blank",style:{fontSize:"20px",color:"gray"}},"\u5180ICP\u590719027994\u53f7-1"))}}]),a}(n.Component);var M=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(p,null),c.a.createElement(d,null),c.a.createElement(S,null),c.a.createElement(D,null)))};i.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.c9d2076a.chunk.js.map