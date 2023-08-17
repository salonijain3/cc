import{i as t,_ as e,e as o,a as s,B as a,d as r,x as n}from"./1bd6a5fb.js";import"./7fc529cf.js";import"./b30d0203.js";import{F as l}from"./af61d074.js";import"./9d47d1b3.js";import"./c5e0a94a.js";import"./44ecdda8.js";import"./454b3885.js";import"./7ec4b9fc.js";window.customElements.define("ft-filllayer",l);const i=["scene","pattern","color","none"],c="scene";class p extends a{constructor(){super(),this.colorOverlayUrl="",this.yogaLadyUrl="",this.scene1Url="",this.scene2Url="",this.pattern1Url="",this.pattern2Url="",this.background=c,this.color="peachpuff",this.pattern="pattern1",this.scene="nature",this.interacted=!0;const t=()=>{this.interacted||(this.exploded=!this.exploded,setTimeout(t,1e3))};setTimeout(t,1e3)}handleSceneChanged(t){t.preventDefault();const[e]=t.target.selected;this.scene=e}handlePatternChanged(t){t.preventDefault();const[e]=t.target.selected;this.pattern=e}handleColorChanged(t){t.preventDefault();const[e]=t.target.selected;this.color=e}handleBackgroundChanged(t){t.preventDefault();const[e]=t.target.selected;this.background=e}willUpdate(){i.includes(this.background)||(this.background=c)}doAction(){var t,e,o;const s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#learnhow"),a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#color-overlay"),n=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("#change-bg-controls"),l=500,i="cubic-bezier(0.68, -0.55, 0.27, 1.55)";a.animatePosition(l,-700,0,{easing:i,endFn:()=>{a.hidden=!0}});n.style.translate="0 200px",r(n,"translate",l,(()=>{n.style.translate="0 0px"}),{easing:i});r(s,"translate",l,(()=>{s.style.translate="-300px 0"}),{easing:i});this.document.animateTransform(l,-312,this.document.ty,this.document.scale)}renderControls(){return n` <div class="controls"> <div id="change-bg-controls" style="${"translate: 0 200px"}"> <sp-action-group class="primary-options" selects="single" .selected="${[this.background]}" @change="${this.handleBackgroundChanged}" compact="compact"> <sp-action-button value="scene">Scene</sp-action-button> <sp-action-button value="pattern">Pattern</sp-action-button> <sp-action-button value="color">Color</sp-action-button> <sp-action-button value="none">None</sp-action-button> </sp-action-group> <sp-swatch-group ?hidden="${"scene"!==this.background}" class="secondary-options" selects="single" .selected="${[this.scene]}" @change="${this.handleSceneChanged}" size="l"> <sp-swatch color="nature"> <img slot="image" alt="pattern1" src="${this.scene1Url}"> </sp-swatch> <sp-swatch color="desert"> <img slot="image" alt="pattern1" src="${this.scene2Url}"> </sp-swatch> </sp-swatch-group> <sp-swatch-group ?hidden="${"pattern"!==this.background}" class="secondary-options" selects="single" .selected="${[this.pattern]}" @change="${this.handlePatternChanged}" size="l"> <sp-swatch color="pattern1"> <img slot="image" alt="pattern1" src="${this.pattern1Url}"> </sp-swatch> <sp-swatch color="pattern2"> <img slot="image" alt="pattern2" src="${this.pattern2Url}"> </sp-swatch> </sp-swatch-group> <sp-swatch-group ?hidden="${"color"!==this.background}" class="secondary-options" selects="single" .selected="${[this.color]}" @change="${this.handleColorChanged}" size="l"> <sp-swatch color="peachpuff"></sp-swatch> <sp-swatch color="pink"></sp-swatch> <sp-swatch color="coral"></sp-swatch> <sp-swatch color="goldenrod"></sp-swatch> </sp-swatch-group> </div> <sp-button id="learnhow" variant="white" @click="${this.doAction}">Try it!</sp-button> </div> `}render(){return n` <ft-document id="document" .width="${877}" .height="${500}" .tx="${-220}" .ty="${-62}" .scale="${.76}" .exploded="${this.exploded}"> <ft-layer class="background" ?hidden="${"scene"!==this.background}" .imageUrl="${new URL(`${"nature"===this.scene?this.scene1Url:this.scene2Url}`,import.meta.url).href}"></ft-layer> <ft-layer class="background" ?hidden="${"pattern"!==this.background}" .imageUrl="${new URL(`${"pattern1"===this.pattern?this.pattern1Url:this.pattern2Url}`,import.meta.url).href}"></ft-layer> <ft-filllayer class="background" .fillColor="${this.color}" ?hidden="${"color"!==this.background}"></ft-filllayer> <ft-layer id="color-overlay" .imageUrl="${this.colorOverlayUrl}"></ft-layer> <ft-layer .imageUrl="${this.yogaLadyUrl}"></ft-layer> </ft-document> ${this.renderControls()} `}}p.styles=[t`.controls{position:absolute;width:100%;height:100%}.controls #learnhow{top:90px;left:20px}.controls #change-bg-controls{position:absolute;width:100%;height:100%}.primary-options{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);flex-wrap:nowrap}.secondary-options{position:absolute;bottom:55px;left:50%;transform:translateX(-50%);flex-wrap:nowrap}[hidden]{display:none!important}`],e([o()],p.prototype,"colorOverlayUrl",void 0),e([o()],p.prototype,"yogaLadyUrl",void 0),e([o()],p.prototype,"scene1Url",void 0),e([o()],p.prototype,"scene2Url",void 0),e([o()],p.prototype,"pattern1Url",void 0),e([o()],p.prototype,"pattern2Url",void 0),e([o({attribute:!1})],p.prototype,"background",void 0),e([o({attribute:!1})],p.prototype,"color",void 0),e([o({attribute:!1})],p.prototype,"pattern",void 0),e([o({attribute:!1})],p.prototype,"scene",void 0),e([s("#document")],p.prototype,"document",void 0),window.customElements.define("blade-changebg",p);