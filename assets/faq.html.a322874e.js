import{r as e,o,c as n,a as t,w as r,F as s,d as a,b as i}from"./app.64a015cf.js";const d={},l=t("h1",{id:"perguntas-frequentes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#perguntas-frequentes","aria-hidden":"true"},"#"),a(" Perguntas frequentes")],-1),u=t("blockquote",null,[t("p",null,'Hi, we\'ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the "Edit this page" link at the bottom of the page.')],-1),c=t("p",null,[a("Here are some common questions regarding "),t("code",null,"asdf"),a(".")],-1),h=t("h2",{id:"wsl1-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#wsl1-support","aria-hidden":"true"},"#"),a(" WSL1 support?")],-1),p=a("WSL1 ("),f={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux",target:"_blank",rel:"noopener noreferrer"},g=a("Windows Subsystem for Linux"),m=a(" 1) is not officially supported. Some aspects of "),y=t("code",null,"asdf",-1),w=a(" may not work properly. We do not intend to add official support for WSL1."),b=t("h2",{id:"wsl2-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#wsl2-support","aria-hidden":"true"},"#"),a(" WSL2 support?")],-1),k=a("WSL2 ("),x={href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux#WSL_2",target:"_blank",rel:"noopener noreferrer"},S=a("Windows Subsystem for Linux"),W=a(" 2) should work using the setup & dependency instructions for you chosen WSL distro."),L=i('<p>Importantly, WSL2 is <em>only</em> expected to work properly when the current working directory is a Unix drive and not a bound Windows drive.</p><p>We intend to run out test suite on WSL2 when host runner support is available on GitHub Actions, currently this does not appear to be the case.</p><h2 id="newly-installed-exectable-not-running" tabindex="-1"><a class="header-anchor" href="#newly-installed-exectable-not-running" aria-hidden="true">#</a> Newly installed exectable not running?</h2><blockquote><p>I just <code>npm install -g yarn</code>, but cannot execute <code>yarn</code>. What gives?</p></blockquote>',4),_=t("code",null,"asdf",-1),v=a(" uses "),q={href:"https://en.wikipedia.org/wiki/Shim_(computing)",target:"_blank",rel:"noopener noreferrer"},I=a("shims"),T=a(" to manage executables. Those installed by plugins have shims automatically created, whereas installing executables via an "),A=t("code",null,"asdf",-1),H=a(" managed tool will require you to notify "),E=t("code",null,"asdf",-1),F=a(" of the need to create shims. In this instance, to create a shim for "),O={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},R=a("Yarn"),j=a(". See the "),z=t("code",null,"asdf reshim",-1),P=a(" command docs"),B=a("."),G=i('<h2 id="shell-not-detecting-newly-installed-shims" tabindex="-1"><a class="header-anchor" href="#shell-not-detecting-newly-installed-shims" aria-hidden="true">#</a> Shell not detecting newly installed shims?</h2><p>If <code>asdf reshim</code> is not resolving your issue, then it is most-likely due to the sourcing of <code>asdf.sh</code> or <code>asdf.fish</code> <em>not</em> being at the <strong>BOTTOM</strong> of your Shell config file (<code>.bash_profile</code>, <code>.zshrc</code>, <code>config.fish</code> etc). It needs to be sourced <strong>AFTER</strong> you have set your <code>$PATH</code> and <strong>AFTER</strong> you have sourced your framework (oh-my-zsh etc) if any.</p>',2);d.render=function(a,i){const d=e("OutboundLink"),M=e("RouterLink");return o(),n(s,null,[l,u,c,h,t("p",null,[p,t("a",f,[g,t(d)]),m,y,w]),b,t("p",null,[k,t("a",x,[S,t(d)]),W]),L,t("p",null,[_,v,t("a",q,[I,t(d)]),T,A,H,E,F,t("a",O,[R,t(d)]),j,t(M,{to:"/manage/core.html#reshim"},{default:r((()=>[z,P])),_:1}),B]),G],64)};export default d;
