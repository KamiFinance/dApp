(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6393],{35156:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DiamantVote",function(){return t(53803)}])},47933:function(e,s,t){"use strict";var o=t(85893),l=t(50544),i=t(75981),c=t(67294);let a=e=>{let s=(0,c.useMemo)(()=>({background:{color:{value:"#dfa9ff"},image:"linear-gradient(#002e4f 40%, #8cacfa 60%)",position:"",repeat:"",size:"",opacity:1},fullScreen:{enable:!0,zIndex:-1},interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{push:{quantity:10},repulse:{distance:100}}},particles:{links:{enable:!0,distance:150},move:{enable:!0,speed:{min:-1,max:1}},opacity:{value:{min:.3,max:.7}},size:{value:{min:1,max:3}}}}),[]),t=(0,c.useCallback)(e=>{(0,i.S)(e)},[]);return(0,o.jsx)(l.Z,{id:e.id,init:t,options:s})};s.Z=a},53803:function(e,s,t){"use strict";t.r(s);var o=t(85893),l=t(73343),i=t(44680),c=t(67294),a=t(9279),n=t(16152),r=t.n(n),d=t(47933),_=t(25675),x=t.n(_),p=t(41664),h=t.n(p);let m=()=>{let e=(0,l.SF)(),s=(0,l.LN)();console.log("\uD83D\uDC4B Address:",e);let t="0x58f602B9098Ef521E3df4b78965c0201c39D9875",{contract:n}=(0,l.cq)(t),{contract:_}=(0,l.cq)("0xf76c3a4844249F7A5357D5ec68f80549C7952497"),{contract:p}=(0,l.cq)("0x850D08a7901d49af93b375976f66c7e0D88D78BA"),{data:m}=(0,l.$F)(n,e,"3"),u=(0,c.useMemo)(()=>m&&m.gt(0),[m]),[B,j]=(0,c.useState)([]),[D,N]=(0,c.useState)([]),g=e=>e.substring(0,6)+"..."+e.substring(e.length-4),[v,T]=(0,c.useState)([]),[f,b]=(0,c.useState)(!1),[S,C]=(0,c.useState)(!1);(0,c.useEffect)(()=>{if(u)return;let e=async()=>{try{let e=await p.getAll();T(e),console.log("\uD83C\uDF08 Proposals:",e)}catch(e){console.log("failed to get proposals",e)}};e()},[u,p]),(0,c.useEffect)(()=>{if(!u||!v.length)return;let s=async()=>{try{let s=await p.hasVoted(v[0].proposalId,e);C(s),s?console.log("\uD83E\uDD75 User has already voted"):console.log("\uD83D\uDE42 User has not voted yet")}catch(e){console.error("Failed to check if wallet has voted",e)}};s()},[u,v,e,p]),(0,c.useEffect)(()=>{if(!u)return;let e=async()=>{try{let e=await (null==n?void 0:n.history.getAllClaimerAddresses(0));N(e),console.log("\uD83D\uDE80 Members addresses",e)}catch(e){console.error("failed to get member list",e)}};e()},[u,null==n?void 0:n.history]),(0,c.useEffect)(()=>{if(!u)return;let e=async()=>{try{let e=await (null==_?void 0:_.history.getAllHolderBalances());j(e),console.log("\uD83D\uDC5C Amounts",e)}catch(e){console.error("failed to get member balances",e)}};e()},[u,null==_?void 0:_.history]);let E=(0,c.useMemo)(()=>D.map(e=>{let s=null==B?void 0:B.find(s=>{let{holder:t}=s;return t===e});return{address:e,tokenAmount:(null==s?void 0:s.balance.displayValue)||"0"}}),[D,B]);return e&&(null==s?void 0:s[0].data.chain.id)!==i.u.BinanceSmartChainTestnet?(0,o.jsxs)("div",{className:r().unsupported_network,children:[(0,o.jsx)("h2",{children:"Please connect to BinanceSmartChain"}),(0,o.jsx)("p",{children:"This dapp only works on the BinanceSmartChain network, please switch networks in your connected wallet."})]}):e?u?(0,o.jsxs)("div",{className:r().member_page,children:[(0,o.jsx)("h1",{children:"Artchain-Circle Diamant Voting Page"}),(0,o.jsx)("p",{children:"Please vote for our next artist"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Member List"}),(0,o.jsxs)("table",{className:r().card,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Address"}),(0,o.jsx)("th",{children:"Token Amount"})]})}),(0,o.jsx)("tbody",{children:E.map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:g(e.address)}),(0,o.jsx)("td",{children:e.tokenAmount})]},e.address))})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Active Proposals"}),(0,o.jsxs)("form",{onSubmit:async s=>{s.preventDefault(),s.stopPropagation(),b(!0);let t=v.map(e=>{let s={proposalId:e.proposalId,vote:2};return e.votes.forEach(t=>{let o=document.getElementById(e.proposalId+"-"+t.type);if(o.checked){s.vote=t.type;return}}),s});try{let s=await _.getDelegationOf(e);s===a.d&&await _.delegateTo(e);try{await Promise.all(t.map(async e=>{let{proposalId:s,vote:t}=e,o=await p.get(s);if(1===o.state)return p.vote(s,t)}));try{await Promise.all(t.map(async e=>{let{proposalId:s}=e,t=await p.get(s);if(4===t.state)return p.execute(s)})),C(!0),console.log("successfully voted")}catch(e){console.error("failed to execute votes",e)}}catch(e){console.error("failed to vote",e)}}catch(e){console.error("failed to delegate tokens")}finally{b(!1)}},children:[v.map(e=>(0,o.jsxs)("div",{className:r().card,children:[(0,o.jsx)("h5",{children:e.description}),(0,o.jsx)("div",{children:e.votes.map(s=>{let{type:t,label:l}=s;return(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"radio",id:e.proposalId+"-"+t,name:e.proposalId,value:t,defaultChecked:2===t}),(0,o.jsx)("label",{htmlFor:e.proposalId+"-"+t,children:l})]},t)})})]},e.proposalId)),(0,o.jsx)("p",{}),(0,o.jsx)("button",{disabled:f||S,type:"submit",children:f?"Voting...":S?"You Already Voted":"Submit Votes"}),(0,o.jsx)("p",{}),!S&&(0,o.jsx)("small",{children:"This will trigger multiple transactions that you will need to sign."}),(0,o.jsx)("p",{})]})]}),(0,o.jsx)(d.Z,{id:"tsparticles"})]})]}):(0,o.jsxs)("div",{className:r().container,children:[(0,o.jsx)("h1",{className:r().h1,children:"Please mint a membership to vote"}),(0,o.jsx)("p",{}),(0,o.jsx)("h1",{className:r().h3,children:"Privat Memberships"}),(0,o.jsxs)("div",{className:r().nftBoxGrid,children:[(0,o.jsxs)("div",{className:r().optionSelectBox1,children:[(0,o.jsx)(x(),{src:"/goldcard.gif",width:350,height:200,alt:"Gold Membership"}),(0,o.jsx)("h2",{className:r().selectBoxTitle1,children:"GOLD MEMBERSHIP"}),(0,o.jsx)("h2",{className:r().selectBoxTitle1_1,children:"1,500 USD"}),(0,o.jsx)("h2",{className:r().selectBoxTitle1_2,children:"1,500 ARTCM Tokens"}),(0,o.jsxs)("a",{className:r().selectBoxDescription1_1,children:[(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Physical Metal Card Gold"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Virtual NFT Card"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Lifetime Membership"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Exclusive previews, talks, & Art-Show Events"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Exclusive Limited Editions for Members"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Exclusive pre-sale advantages"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Access to Community Pool"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Contact to Artists"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Airdrop ARTCC Tokens"}),(0,o.jsx)("p",{className:r().selectBoxDescription1,children:"Voting Rights"})]}),(0,o.jsx)(l.tn,{contractAddress:t,action:e=>{e.erc1155.claim(0,1)},onSuccess:()=>{console.log("\uD83C\uDF0A Successfully Minted! ")},onError:e=>{console.error("Failed to mint NFT",e)},children:"Mint for 1,500 USD"}),(0,o.jsx)("p",{})]}),(0,o.jsxs)("div",{className:r().optionSelectBox2,children:[(0,o.jsx)(x(),{src:"/platincard.gif",width:350,height:200,alt:"Platin Membership"}),(0,o.jsx)("h2",{className:r().selectBoxTitle2,children:"PLATIN MEMBERSHIP"}),(0,o.jsx)("h2",{className:r().selectBoxTitle2_1,children:"5,000 USD"}),(0,o.jsx)("h2",{className:r().selectBoxTitle2_2,children:"5,000 ARTCM Tokens"}),(0,o.jsxs)("a",{className:r().selectBoxDescription2_1,children:[(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Physical Metal Card Platin"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Virtual NFT Card"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Lifetime Membership"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Exclusive previews, talks, & Art-Show Events"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Exclusive Limited Editions for Members"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Exclusive pre-sale advantages"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Access to Community Pool"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Contact to Artists"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"5% Cashback on Art/NFT*"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Airdrop ARTCC Tokens"}),(0,o.jsx)("p",{className:r().selectBoxDescription2,children:"Voting Rights"})]}),(0,o.jsx)(l.tn,{contractAddress:t,action:e=>{e.erc1155.claim(1,1)},onSuccess:()=>{console.log("\uD83C\uDF0A Successfully Minted!")},onError:e=>{console.error("Failed to mint NFT",e)},children:"Mint for 5,000 USD"}),(0,o.jsx)("p",{})]}),(0,o.jsx)("div",{className:r().container,children:(0,o.jsx)("h1",{className:r().h3,children:"Corporate Memberships"})}),(0,o.jsxs)("div",{className:r().optionSelectBox3,children:[(0,o.jsx)(x(),{src:"/BlackMember.gif",width:350,height:200,alt:"Black Member"}),(0,o.jsx)("h2",{className:r().selectBoxTitle3,children:"Black Membership"}),(0,o.jsx)("h2",{className:r().selectBoxTitle3_1,children:"20,000 USD"}),(0,o.jsx)("h2",{className:r().selectBoxTitle3_2,children:"20,000 ARTCM Tokens"}),(0,o.jsxs)("a",{className:r().selectBoxDescription3_1,children:[(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Physical Metal Card Black"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Virtual NFT Card"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Lifetime Membership"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Exclusive previews, talks, & Art-Show Events"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Exclusive Limited Editions for Members"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Exclusive pre-sale advantages"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Access to Community Pool"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Contact to Artists"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"10% Cashback on Art/NFT*"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Airdrop ARTCC Tokens"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Voting Rights"}),(0,o.jsx)("p",{className:r().selectBoxDescription3,children:"Table on 1 Event"})]}),(0,o.jsx)(l.tn,{contractAddress:t,action:e=>{e.erc1155.claim(2,1)},onSuccess:()=>{console.log("\uD83C\uDF0A Successfully Minted!  ")},onError:e=>{console.error("Failed to mint NFT",e)},children:"Mint for 20,000 USD"}),(0,o.jsx)("p",{})]}),(0,o.jsxs)("div",{className:r().optionSelectBox4,children:[(0,o.jsx)(x(),{src:"/diamantcard.gif",width:350,height:200,alt:"DiamantMember"}),(0,o.jsx)("h2",{className:r().selectBoxTitle4,children:"DIAMOND MEMBERSHIP"}),(0,o.jsx)("h2",{className:r().selectBoxTitle4_1,children:"PRICE UPON REQUEST"}),(0,o.jsx)("h2",{className:r().selectBoxTitle4_2,children:"Includes ARTCM Tokens"}),(0,o.jsxs)("a",{className:r().selectBoxDescription4,children:[(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Physical Metal Card Diamand"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Virtual NFT Card"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Lifetime Membership"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Exclusive previews, talks, & Art-Show Events"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Exclusive Limited Editions for Members"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Exclusive pre-sale advantages"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Access to Community Pool"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Contact to Artists"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"20% Cashback on Art/NFT*"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Airdrop ARTCC Tokens"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Voting Rights"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Branding on all Events"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Exclusive Partner"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Company Logo on Website"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"2 Tables at all Events"}),(0,o.jsx)("p",{className:r().selectBoxDescription4,children:"Shares of ARTCC Tokens"})]}),(0,o.jsx)("button",{children:(0,o.jsx)(h(),{className:r().link,href:"https://www.artchaincircle.com/contact",target:"_blank",children:"Contact us"})}),(0,o.jsx)("p",{})]}),(0,o.jsx)(d.Z,{id:"tsparticles"})]})]}):(0,o.jsxs)("div",{className:r().landing,children:[(0,o.jsx)("h1",{children:"Please Connect Your Wallet"}),(0,o.jsx)("div",{className:r().btn_hero,children:(0,o.jsx)(l.RZ,{})}),(0,o.jsx)(d.Z,{id:"tsparticles"})]})};s.default=m},16152:function(e){e.exports={h2:"dao_h2__nEaoP",h1:"dao_h1__1Qhch",unsupported_network:"dao_unsupported_network___TZqd",error:"dao_error__i9Hqv",landing:"dao_landing___satj",connect_wallet:"dao_connect_wallet__hbxpJ",mint_nft:"dao_mint_nft__HTV5I",member_page:"dao_member_page__B7cAV",card:"dao_card__74UkD",btn_hero:"dao_btn_hero__Ss5u4",button:"dao_button__aXPIP",connect:"dao_connect___YWxO",btn:"dao_btn__8fdS9",address:"dao_address__aYi7v",container:"dao_container__aTk5r",page:"dao_page__nwThS",pageContainer:"dao_pageContainer__m7xpJ",arrowButton:"dao_arrowButton__V4z45",owner:"dao_owner__j0rjA",btnContainer:"dao_btnContainer__GERHK",header:"dao_header__un2SN",left:"dao_left__yWJS3",right:"dao_right__HVK05",secondaryButton:"dao_secondaryButton__EuMW_",mainButton:"dao_mainButton__XOO4J",ourCollection:"dao_ourCollection__ka1g3",collectionContainer:"dao_collectionContainer__XmUu1",explain:"dao_explain__RKDjl",purple:"dao_purple__CEhqZ",divider:"dao_divider__Yzuk1",smallDivider:"dao_smallDivider__ntIT3",textInput:"dao_textInput__t4A7O",imageInput:"dao_imageInput___A8Dq",contractBoxGrid:"dao_contractBoxGrid__6dMLr",contractBox:"dao_contractBox__9e_6e",nftBoxGrid:"dao_nftBoxGrid__wnm6W",nftBox:"dao_nftBox__RAzHP",optionSelectBox:"dao_optionSelectBox__hrbYP",selectBoxTitle:"dao_selectBoxTitle__FOV3C",selectBoxDescription:"dao_selectBoxDescription__WI_kk",optionSelectBox1:"dao_optionSelectBox1__DpPDs",selectBoxTitle1:"dao_selectBoxTitle1__PweM4",selectBoxTitle1_1:"dao_selectBoxTitle1_1__6QCqX",selectBoxTitle1_2:"dao_selectBoxTitle1_2__R5RWu",selectBoxDescription1:"dao_selectBoxDescription1__qqd27",selectBoxDescription1_1:"dao_selectBoxDescription1_1__1zL5z",optionSelectBox2:"dao_optionSelectBox2__mdOIg",selectBoxTitle2:"dao_selectBoxTitle2__gjrg0",selectBoxTitle2_1:"dao_selectBoxTitle2_1__Z3NPS",selectBoxTitle2_2:"dao_selectBoxTitle2_2__DgNLP",selectBoxDescription2:"dao_selectBoxDescription2__nbxPF",optionSelectBox3:"dao_optionSelectBox3__B5eRk",selectBoxTitle3:"dao_selectBoxTitle3__MM7bv",selectBoxTitle3_1:"dao_selectBoxTitle3_1__gYhfu",selectBoxTitle3_2:"dao_selectBoxTitle3_2__1cLj4",selectBoxDescription3:"dao_selectBoxDescription3__K63p2",selectBoxDescription3_1:"dao_selectBoxDescription3_1__KLfI_",optionSelectBox4:"dao_optionSelectBox4__l4V4o",selectBoxTitle4:"dao_selectBoxTitle4__usQ22",selectBoxTitle4_1:"dao_selectBoxTitle4_1__0Hh6Y",selectBoxTitle4_2:"dao_selectBoxTitle4_2__EleQX",selectBoxDescription4:"dao_selectBoxDescription4__F_I_P",optionSelectBox5:"dao_optionSelectBox5__EMPdn",optionSelectBox6:"dao_optionSelectBox6__mh1kO",optionSelectBox7:"dao_optionSelectBox7__RhQEZ",optionSelectBox8:"dao_optionSelectBox8__0_QA0",tokenGrid:"dao_tokenGrid__wAhRv",tokenItem:"dao_tokenItem__T8LsV",tokenLabel:"dao_tokenLabel__rks3r",tokenValue:"dao_tokenValue__OmEDf",center:"dao_center__0G73V",spacerTop:"dao_spacerTop__RB_vu",bigSpacerTop:"dao_bigSpacerTop__xjyWT",spacerBottom:"dao_spacerBottom__oZeb4",cardName:"dao_cardName__Jyq2L",cardDescription:"dao_cardDescription___RnXS",headerLogo:"dao_headerLogo__73EzE",verticalSpacer:"dao_verticalSpacer__kOUN_",codeSnippet:"dao_codeSnippet__Bj7W2",noUnderline:"dao_noUnderline__HFHGV",detailPageContainer:"dao_detailPageContainer__Ro1pS",detailPageHr:"dao_detailPageHr__K2U3_",lightPurple:"dao_lightPurple__raQlr",nftMedia:"dao_nftMedia__1cZ4S",amountToClaim:"dao_amountToClaim__te780",noGapBottom:"dao_noGapBottom___SoAa"}}},function(e){e.O(0,[5814,9774,2888,179],function(){return e(e.s=35156)}),_N_E=e.O()}]);