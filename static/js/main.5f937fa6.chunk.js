(this["webpackJsonpthree-on-three"]=this["webpackJsonpthree-on-three"]||[]).push([[0],{20:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},26:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(12),l=t.n(o),r=(t(25),t(26),t(2)),i=t(3),s=t(5),m=t(4),u=t(6),p=6e5,f=12e3,v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isGameClockPause:!0,isShotClockPause:!0,gameClock:p,shotClock:f},t.intervalSec=100,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleGameClockClick",value:function(){var e=this;this.state.isGameClockPause?this.setState({isGameClockPause:!1,isShotClockPause:!1},(function(){e.interval=setInterval((function(){e.decreaseClockSecond(e.intervalSec)}),e.intervalSec)})):this.setState({isGameClockPause:!0,isShotClockPause:!0},(function(){clearInterval(e.interval)}))}},{key:"handleShotClockClick",value:function(){var e=this.state,a=e.isGameClockPause,t=e.isShotClockPause;a&&t?this.setState({shotClock:f}):t?this.setState({isShotClockPause:!1}):this.setState({isShotClockPause:!0,shotClock:f})}},{key:"decreaseClockSecond",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;this.setState((function(t){var n=t.gameClock,c=t.shotClock,o={gameClock:Math.max(0,n-a)};return e.state.isShotClockPause||(o.shotClock=Math.max(0,c-a)),o}))}},{key:"resolveGameClock",value:function(e){var a=Math.floor(e/6e4),t=(Math.floor(e%6e4/1e3)+"").padStart(2,"0");return"".concat(a,":").concat(t)}},{key:"resolveShotClock",value:function(e){return"".concat(e/1e3)}},{key:"render",value:function(){var e=this,a=this.state,t=a.gameClock,n=a.shotClock;return c.a.createElement("div",{className:"clock"},c.a.createElement("button",{onClick:function(){e.handleGameClockClick()}},this.resolveGameClock(t)),c.a.createElement("button",{onClick:function(){e.handleShotClockClick()}},this.resolveShotClock(n)))}}]),a}(c.a.Component),h=t(8),d=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.teamInfo,a=e.point,t=e.foul,n=e.name,o=t>=7?t>=10?"foul teamfoul2":"foul teamfoul1":"foul";return c.a.createElement("div",{className:"scorepanel"},c.a.createElement("div",{className:"team"},n),c.a.createElement("div",{className:"point"},a),c.a.createElement("div",{className:o},t))}}]),a}(c.a.Component),E=Object(h.b)((function(e,a){return{teamInfo:e.game.team[a.team]}}),null)(d),k=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"scoreboard"},c.a.createElement(E,{team:"teamA"}),c.a.createElement(v,null),c.a.createElement(E,{team:"teamB"}))}}]),a}(c.a.Component),y=t(1),b=t(11),C=t.n(b),O={team:{teamA:{name:"teamA",point:0,foul:0},teamB:{name:"teamB",point:0,foul:0}},teamA:{player1:{name:"player1",point:0,foul:0},player2:{name:"player2",point:0,foul:0},player3:{name:"player3",point:0,foul:0},player4:{name:"player4",point:0,foul:0}},teamB:{player1:{name:"player1",point:0,foul:0},player2:{name:"player2",point:0,foul:0},player3:{name:"player3",point:0,foul:0},player4:{name:"player4",point:0,foul:0}}},j=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.playerInfo,t=a.point,n=a.foul,o=a.name;return c.a.createElement("div",{className:"playerpanel"},c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"name"},o),c.a.createElement("div",{className:"point"},t),c.a.createElement("div",{className:"foul"},n)),c.a.createElement("div",{className:"button"},c.a.createElement("button",{className:"plus",onClick:function(){e.props.increasePlayerPoint()}},"+"),c.a.createElement("button",{className:"minus",onClick:function(){e.props.decreasePlayerPoint()}},"-"),c.a.createElement("button",{className:"foul",onClick:function(){e.props.increasePlayerFoul()}},"Foul")))}}]),a}(c.a.Component),N=Object(h.b)((function(e,a){return{playerInfo:e.game[a.team][a.player]}}),(function(e,a){var t=a.team,n=a.player;return{increasePlayerPoint:function(){return e(function(e,a){return{type:"INCREASE_PLAYER_POINT",data:{team:e,player:a,attr:"point"}}}(t,n))},decreasePlayerPoint:function(){return e(function(e,a){return{type:"DECREASE_PLAYER_POINT",data:{team:e,player:a,attr:"point"}}}(t,n))},increasePlayerFoul:function(){return e(function(e,a){return{type:"INCREASE_PLAYER_FOUL",data:{team:e,player:a,attr:"foul"}}}(t,n))}}}))(j);function P(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"name"},"name"),c.a.createElement("div",{className:"point"},"point"),c.a.createElement("div",{className:"foul"},"foul")),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"name"},"name"),c.a.createElement("div",{className:"point"},"point"),c.a.createElement("div",{className:"foul"},"foul")))}var S=function(e){return c.a.createElement("div",{className:"teampanel"},c.a.createElement(N,{team:e.team,player:"player1"}),c.a.createElement(N,{team:e.team,player:"player2"}),c.a.createElement(N,{team:e.team,player:"player3"}),c.a.createElement(N,{team:e.team,player:"player4"}))},A=t(17),g=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"resolveMessage",value:function(e){var a=e.team,t=e.teamA,n=e.teamB,c="",o="";for(var l in t)c+="".concat(t[l].name,"- \ub4dd\uc810:").concat(t[l].point," \ud30c\uc6b8:").concat(t[l].foul),c+=" ";for(var r in n)o+="".concat(n[r].name,"- \ub4dd\uc810:").concat(n[r].point," \ud30c\uc6b8:").concat(n[r].foul),o+=" ";return"\uacbd\uae30: ".concat(a.teamA.name," vs ").concat(a.teamB.name)+"|\uacb0\uacfc"+"|\ub4dd\uc810: ".concat(a.teamA.point,":").concat(a.teamB.point)+"|".concat(a.teamA.name)+"|".concat(c)+"|".concat(a.teamB.name)+"|".concat(o)}},{key:"render",value:function(){var e=this.resolveMessage(this.props.game);return c.a.createElement("div",{className:"sharepanel"},c.a.createElement(A.EmailButton,{message:e},c.a.createElement("div",{className:"button email"},"Email")),c.a.createElement(A.KaKaoTalkButton,{message:e,jsKey:"aa837ddd8bedb198c9d7fddfd2aef8c0",id:"kakaotalk"},c.a.createElement("div",{id:"kakaotalk",className:"button kakaotalk"},"KakaoTalk")))}}]),a}(c.a.Component),I=Object(h.b)((function(e){return{game:e.game}}),null)(g);var R=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"scorecontainer"},c.a.createElement(k,null)),c.a.createElement(P,null),c.a.createElement("div",{className:"teamcontainer"},c.a.createElement(S,{team:"teamA"}),c.a.createElement(S,{team:"teamB"})),c.a.createElement("div",{className:"sharecontainer"},c.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(10),B=t(19),w=Object(_.c)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREASE_PLAYER_POINT":case"INCREASE_PLAYER_FOUL":var t=a.data.team,n=a.data.player,c=a.data.attr;return C()(C()(e,Object(y.a)({},t,Object(y.a)({},n,Object(y.a)({},c,{$set:e[t][n][c]+1})))),{team:Object(y.a)({},t,Object(y.a)({},c,{$set:e.team[t][c]+1}))});case"DECREASE_PLAYER_POINT":case"DECREASE_PLAYER_FOUL":var o=a.data.team,l=a.data.player,r=a.data.attr;return C()(C()(e,Object(y.a)({},o,Object(y.a)({},l,Object(y.a)({},r,{$set:Math.max(0,e[o][l][r]-1)})))),{team:Object(y.a)({},o,Object(y.a)({},r,{$set:Math.max(0,e.team[o][r]-1)}))});default:return e}}});l.a.render(c.a.createElement(h.a,{store:Object(_.d)(w,Object(_.a)(B.a))},c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.5f937fa6.chunk.js.map