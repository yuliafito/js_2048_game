var t={};class e{static gameStatus={idle:"idle",playing:"playing",win:"win",lose:"lose"};static getInitialState(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}constructor(t=e.getInitialState()){this.initialState=JSON.parse(JSON.stringify(t)),this.state=t,this.score=0,this.status=e.gameStatus.idle}getState(){return this.state}getScore(){return this.score}getStatus(){return this.status}start(){this.status===e.gameStatus.idle&&(this.status=e.gameStatus.playing,this.addRandomTile(),this.addRandomTile())}restart(){this.score=0,this.state=this.initialState,this.status=e.gameStatus.idle}mergeAndSlideRow(t){let e=t.filter(t=>t),s=[];for(let t=0;t<e.length;t++)e[t]===e[t+1]?(s.push(2*e[t]),this.score+=2*e[t],t++):s.push(e[t]);return s.concat(Array(4-s.length).fill(0))}moveLeft(){if(this.status!==e.gameStatus.playing)return;let t=JSON.stringify(this.state);this.state=this.state.map(t=>this.mergeAndSlideRow(t)),JSON.stringify(this.state)!==t&&(this.addRandomTile(),this.updateStatus())}moveRight(){if(this.status!==e.gameStatus.playing)return;let t=JSON.stringify(this.state);this.state=this.state.map(t=>{let e=[...t].reverse();return this.mergeAndSlideRow(e).reverse()}),JSON.stringify(this.state)!==t&&(this.addRandomTile(),this.updateStatus())}moveUp(){if(this.status!==e.gameStatus.playing)return;let t=JSON.stringify(this.state),s=this.transpose(this.state);this.state=s.map(t=>this.mergeAndSlideRow(t)),this.state=this.transpose(this.state),JSON.stringify(this.state)!==t&&(this.addRandomTile(),this.updateStatus())}moveDown(){if(this.status!==e.gameStatus.playing)return;let t=JSON.stringify(this.state);this.state=this.transpose(this.state).map(t=>{let e=t.reverse();return this.mergeAndSlideRow(e).reverse()}),this.state=this.transpose(this.state),JSON.stringify(this.state)!==t&&(this.addRandomTile(),this.updateStatus())}transpose(t){return t[0].map((e,s)=>t.map(t=>t[s]))}addRandomTile(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)0===this.state[e][s]&&t.push([e,s]);if(t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];this.state[e][s]=.9>Math.random()?2:4}}updateStatus(){for(let t=0;t<4;t++)for(let s=0;s<4;s++)if(2048===this.state[t][s]){this.status=e.gameStatus.win;return}this.hasAvailableMoves()||(this.status=e.gameStatus.lose)}hasAvailableMoves(){for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(0===this.state[t][e]||e<3&&this.state[t][e]===this.state[t][e+1]||t<3&&this.state[t][e]===this.state[t+1][e])return!0;return!1}}const s=new(t=e),a=document.querySelector(".game-score"),i=document.querySelector(".button.start"),r=document.querySelector(".message-lose"),n=document.querySelector(".message-win"),l=document.querySelector(".message-start");function h(){let e=s.getState();document.querySelectorAll(".field-row").forEach((t,s)=>{t.querySelectorAll(".field-cell").forEach((t,a)=>{let i=e[s][a];t.setAttribute("class","field-cell"),t.textContent="",0!==i&&(t.classList.add(`field-cell--${i}`),t.textContent=i)})}),a.textContent=s.getScore(),function(){switch(n.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden"),s.getStatus()){case t.gameStatus.win:n.classList.remove("hidden");break;case t.gameStatus.lose:r.classList.remove("hidden");break;case t.gameStatus.idle:l.classList.remove("hidden")}}()}document.addEventListener("keydown",e=>{if(s.getStatus()===t.gameStatus.playing){switch(e.key){case"ArrowLeft":s.moveLeft();break;case"ArrowRight":s.moveRight();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown()}h()}}),i.addEventListener("click",()=>{s.getStatus()===t.gameStatus.idle?(s.start(),i.textContent="Restart",i.classList.replace("start","restart")):(s.restart(),i.textContent="Start",i.classList.replace("restart","start")),h()});
//# sourceMappingURL=index.3e5f44fe.js.map
