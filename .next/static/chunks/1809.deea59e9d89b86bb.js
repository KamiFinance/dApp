"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1809],{51809:function(t,e,a){a.r(e),a.d(e,{TokenDrop:function(){return n}});var r=a(21452),i=a(44680),s=a(9279);a(13550),a(25025),a(70332),a(8455),a(26219),a(68834),a(65660),a(61303),a(71497),a(49242),a(94317),a(13670),a(79120),a(97604),a(8187),a(19362),a(59190),a(54730),a(36250),a(85725),a(38730),a(48507),a(38398),a(2090),a(86841),a(49561),a(80580),a(40246),a(54253),a(91559),a(40553),a(26),a(69392),a(29526),a(24601),a(46878),a(77033),a(87033),a(5158),a(27761),a(20583),a(92355),a(84194),a(51121),a(58613),a(32484),a(78435),a(54098),a(54146),a(62555),a(82037),a(77437),a(59189),a(2162),a(64063),a(34161),a(50266),a(98839),a(51375),a(43320),a(65815),a(52378),a(55173),a(40721),a(77191);class n extends i.ap{constructor(t,e,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cz(t,e,c,s);super(h,a,o),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"sales",void 0),(0,r._)(this,"platformFees",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"claimConditions",void 0),(0,r._)(this,"interceptor",void 0),this.abi=c,this.metadata=new i.ab(this.contractWrapper,i.c$,this.storage),this.roles=new i.ac(this.contractWrapper,n.contractRoles),this.encoder=new i.aa(this.contractWrapper),this.estimator=new i.aL(this.contractWrapper),this.events=new i.aM(this.contractWrapper),this.sales=new i.ae(this.contractWrapper),this.platformFees=new i.aO(this.contractWrapper),this.interceptor=new i.aN(this.contractWrapper),this.claimConditions=new i.ag(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(t)}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,i.br)("transfer"),s.d);return!t}async claim(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return this.claimTo(await this.contractWrapper.getSignerAddress(),t,e)}async claimTo(t,e){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return this.erc20.claimTo(t,e,{checkERC20Allowance:a})}async delegateTo(t){return{receipt:await this.contractWrapper.sendTransaction("delegate",[t])}}async burnTokens(t){return this.erc20.burn(t)}async burnFrom(t,e){return this.erc20.burnFrom(t,e)}async call(t){for(var e=arguments.length,a=Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return this.contractWrapper.call(t,...a)}}(0,r._)(n,"contractRoles",["admin","transfer"])}}]);