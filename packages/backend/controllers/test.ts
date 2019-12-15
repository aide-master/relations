import { APIGatewayProxyHandler } from 'aws-lambda'
import { run, getLinksFromHtml } from '../utils'

export const test: APIGatewayProxyHandler = run(async (event, _context) => { // eslint-disable-line @typescript-eslint/require-await
  const result = getLinksFromHtml(demoHtml)
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: 200,
      data: result
    })
  }
})

const demoHtml = `
<!DOCTYPE html>
<html class="client-nojs" lang="zh-Hans-CN" dir="ltr">
<head>
<meta charset="UTF-8"/>
<title>曹操 - 维基百科，自由的百科全书</title>
<script>document.documentElement.className="client-js";RLCONF={"wgBreakFrames":!1,"wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"zh","wgMonthNames":["","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"wgMonthNamesShort":["","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"wgRequestId":"XfZBhwpAMEoAABzMTwcAAACQ","wgCSPNonce":!1,"wgCanonicalNamespace":"","wgCanonicalSpecialPageName":!1,"wgNamespaceNumber":0,"wgPageName":"曹操","wgTitle":"曹操","wgCurRevisionId":56725076,"wgRevisionId":56725076,"wgArticleId":2870,"wgIsArticle":!0,"wgIsRedirect":!1,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["使用无数据行信息框模板的条目","含有非中文內容的條目","包含BIBSYS标识符的维基百科条目","包含BNF标识符的维基百科条目","包含CBDB标识符的维基百科条目",
"包含DDBC标识符的维基百科条目","包含FAST标识符的维基百科条目","包含GND标识符的维基百科条目","包含ISNI标识符的维基百科条目","包含LCCN标识符的维基百科条目","包含NDL标识符的维基百科条目","包含NKC标识符的维基百科条目","包含NLA标识符的维基百科条目","包含NNL标识符的维基百科条目","包含SELIBR标识符的维基百科条目","包含SUDOC标识符的维基百科条目","包含VIAF标识符的维基百科条目","包含15元素的规范控制","155年出生","220年逝世","三国志立传人物","曹操","东汉军阀","东汉司空","东汉太守","东汉县令","东汉外戚","曹魏追尊皇帝","亳州人","东汉诗人","中國非虛構作品作家","中国摄政者","曹姓","太祖"],"wgPageContentLanguage":"zh-cn","wgPageContentModel":"wikitext","wgRelevantPageName":"曹操","wgRelevantArticleId":2870,"wgUserVariant":"zh-cn","wgIsProbablyEditable":!0,
"wgRelevantPageIsProbablyEditable":!0,"wgRestrictionEdit":[],"wgRestrictionMove":[],"wgMediaViewerOnClick":!0,"wgMediaViewerEnabledByDefault":!0,"wgPopupsReferencePreviews":!1,"wgPopupsConflictsWithNavPopupGadget":!1,"wgVisualEditor":{"pageLanguageCode":"zh","pageLanguageDir":"ltr","pageVariantFallbacks":["zh-hans","zh-sg","zh-my"]},"wgMFDisplayWikibaseDescriptions":{"search":!0,"nearby":!0,"watchlist":!0,"tagline":!0},"wgWMESchemaEditAttemptStepOversample":!1,"wgULSCurrentAutonym":"中文（中国大陆）‎","wgNoticeProject":"wikipedia","wgWikibaseItemId":"Q204077","wgCentralAuthMobileDomain":!1,"wgEditSubmitButtonLabelPublish":!0};RLSTATE={"ext.gadget.hideConversionTab":"ready","ext.gadget.large-font":"ready","ext.globalCssJs.user.styles":"ready","site.styles":"ready","noscript":"ready","user.styles":"ready","ext.globalCssJs.user":"ready","user":"ready","user.options":"loading","user.tokens":"loading","ext.cite.styles":"ready","mediawiki.legacy.shared":
"ready","mediawiki.legacy.commonPrint":"ready","mediawiki.toc.styles":"ready","wikibase.client.init":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready","ext.uls.interlanguage":"ready","ext.wikimediaBadges":"ready","mediawiki.skinning.interface":"ready","skins.vector.styles":"ready"};RLPAGEMODULES=["ext.cite.ux-enhancements","site","mediawiki.page.startup","mediawiki.page.ready","mediawiki.toc","mediawiki.searchSuggest","ext.gadget.edit0","ext.gadget.Edittools-refToolbar","ext.gadget.WikiMiniAtlas","ext.gadget.ReferenceTooltips","ext.gadget.UnihanTooltips","ext.gadget.variant-link-fix","ext.gadget.FixedTopBottomLink","ext.gadget.shortURL","ext.gadget.AdvancedSiteNotices","ext.gadget.internalLinkHelper-altcolor","ext.gadget.noteTA","ext.gadget.noteTAvector","ext.gadget.NavFrame","ext.gadget.collapsibleTables","ext.centralauth.centralautologin","mmv.head","mmv.bootstrap.autostart","ext.popups","ext.visualEditor.desktopArticleTarget.init","ext.visualEditor.targetLoader",
"ext.eventLogging","ext.wikimediaEvents","ext.navigationTiming","ext.uls.compactlinks","ext.uls.interface","ext.cx.eventlogging.campaigns","ext.quicksurveys.init","ext.centralNotice.geoIP","ext.centralNotice.startUp","skins.vector.js"];</script>
<script>(RLQ=window.RLQ||[]).push(function(){mw.loader.implement("user.options@1vn0f",function($,jQuery,require,module){/*@nomin*/mw.user.options.set({"language":"zh-cn","variant":"zh-cn"});
});mw.loader.implement("user.tokens@tffin",function($,jQuery,require,module){/*@nomin*/mw.user.tokens.set({"patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});
});});</script>
<link rel="stylesheet" href="/w/load.php?lang=zh-cn&amp;modules=ext.cite.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.skinning.interface%7Cmediawiki.toc.styles%7Cskins.vector.styles%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"/>
<script async="" src="/w/load.php?lang=zh-cn&amp;modules=startup&amp;only=scripts&amp;raw=1&amp;skin=vector"></script>
<meta name="ResourceLoaderDynamicStyles" content=""/>
<link rel="stylesheet" href="/w/load.php?lang=zh-cn&amp;modules=ext.gadget.hideConversionTab%2Clarge-font&amp;only=styles&amp;skin=vector"/>
<link rel="stylesheet" href="/w/load.php?lang=zh-cn&amp;modules=site.styles&amp;only=styles&amp;skin=vector"/>
<meta name="generator" content="MediaWiki 1.35.0-wmf.10"/>
<meta name="referrer" content="origin"/>
<meta name="referrer" content="origin-when-crossorigin"/>
<meta name="referrer" content="origin-when-cross-origin"/>
<meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/5/57/Cao_Cao_scth.jpg"/>
<link rel="alternate" href="android-app://org.wikipedia/http/zh.m.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" media="only screen and (max-width: 720px)" href="//zh.m.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" type="application/x-wiki" title="编辑本页" href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit"/>
<link rel="edit" title="编辑本页" href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit"/>
<link rel="apple-touch-icon" href="/static/apple-touch/wikipedia.png"/>
<link rel="shortcut icon" href="/static/favicon/wikipedia.ico"/>
<link rel="search" type="application/opensearchdescription+xml" href="/w/opensearch_desc.php" title="Wikipedia (zh)"/>
<link rel="EditURI" type="application/rsd+xml" href="//zh.wikipedia.org/w/api.php?action=rsd"/>
<link rel="alternate" hreflang="zh" href="/zh/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hans" href="/zh-hans/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hant" href="/zh-hant/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hans-CN" href="/zh-cn/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hant-HK" href="/zh-hk/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hant-MO" href="/zh-mo/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hans-MY" href="/zh-my/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hans-SG" href="/zh-sg/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="zh-Hant-TW" href="/zh-tw/%E6%9B%B9%E6%93%8D"/>
<link rel="alternate" hreflang="x-default" href="/wiki/%E6%9B%B9%E6%93%8D"/>
<link rel="license" href="//creativecommons.org/licenses/by-sa/3.0/"/>
<link rel="canonical" href="https://zh.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D"/>
<link rel="dns-prefetch" href="//login.wikimedia.org"/>
<link rel="dns-prefetch" href="//meta.wikimedia.org" />
<!--[if lt IE 9]><script src="/w/resources/lib/html5shiv/html5shiv.js"></script><![endif]-->
</head>
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject mw-editable page-曹操 rootpage-曹操 skin-vector action-view">
<div id="mw-page-base" class="noprint"></div>
<div id="mw-head-base" class="noprint"></div>
<div id="content" class="mw-body" role="main">
  <a id="top"></a>
  <div id="siteNotice" class="mw-body-content"><!-- CentralNotice --></div>
  <div class="mw-indicators mw-body-content">
</div>

  <h1 id="firstHeading" class="firstHeading" lang="zh-Hans-CN">曹操</h1>

  <div id="bodyContent" class="mw-body-content">
    <div id="siteSub" class="noprint">维基百科，自由的百科全书</div>
    <div id="contentSub" lang="zh-Hans-CN" dir="ltr"></div>



    <div id="jump-to-nav"></div>
    <a class="mw-jump-link" href="#mw-head">跳到导航</a>
    <a class="mw-jump-link" href="#p-search">跳到搜索</a>
    <div id="mw-content-text" lang="zh-Hans-CN" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output"><div role="note" class="hatnote navigation-not-searchable"><a href="/wiki/Wikipedia:%E6%B6%88%E6%AD%A7%E4%B9%89" title="Wikipedia:消歧义"><img alt="Disambig gray.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Disambig_gray.svg/25px-Disambig_gray.svg.png" decoding="async" width="25" height="19" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Disambig_gray.svg/38px-Disambig_gray.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Disambig_gray.svg/50px-Disambig_gray.svg.png 2x" data-file-width="220" data-file-height="168" /></a>&#160;&#160;本文介绍的是东汉末年大臣、三国时曹魏政权的奠基者。关于曹操的其他意思，请见“<b><a href="/wiki/%E6%9B%B9%E6%93%8D_(%E6%B6%88%E6%AD%A7%E4%B9%89)" class="mw-disambig" title="曹操 (消歧义)">曹操 (消歧义)</a></b>”。</div>
<table class="infobox" cellspacing="3" style="border-spacing:3px;width:22em;text-align:left;font-size:small;line-height:1.5em"><tbody><tr><th colspan="2" style="text-align:center;font-size:125%;font-weight:bold;background-color: #FFFFDD">曹操</th></tr><tr><td colspan="2" style="text-align:center;background-color:#CDDBE8">
汉<a href="/wiki/%E4%B8%9E%E7%9B%B8" title="丞相">丞相</a>，领<a href="/wiki/%E5%86%80%E5%B7%9E" class="mw-redirect" title="冀州">冀州</a><a href="/wiki/%E7%89%A7" class="mw-redirect" title="牧">牧</a></td></tr><tr><td colspan="2" style="text-align:center">
<a href="/wiki/File:Cao_Cao_scth.jpg" class="image" title="曹操"><img alt="曹操" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cao_Cao_scth.jpg/220px-Cao_Cao_scth.jpg" decoding="async" width="220" height="336" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cao_Cao_scth.jpg/330px-Cao_Cao_scth.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cao_Cao_scth.jpg/440px-Cao_Cao_scth.jpg 2x" data-file-width="478" data-file-height="730" /></a><div>曹操画像</div></td></tr><tr><th colspan="2" style="text-align:center;background-color:#CDDBE8;">魏王</th></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">国家</th><td style="">
<a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">时代</th><td style="">
<a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">主君</th><td style="">
<a href="/wiki/%E6%BC%A2%E9%9D%88%E5%B8%9D" class="mw-redirect" title="汉灵帝">汉灵帝</a>→<a href="/wiki/%E5%8A%89%E8%BE%AF" title="刘辩">汉少帝</a>→<a href="/wiki/%E6%BC%A2%E7%8D%BB%E5%B8%9D" class="mw-redirect" title="汉献帝">汉献帝</a></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">姓名</th><td style="">
曹操</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">字</th><td style="">
孟德</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">封爵</th><td style="">
武平侯→魏公→魏王</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">封地</th><td style="">
<a href="/wiki/%E9%84%B4%E5%9F%8E" class="mw-redirect" title="邺城">邺城</a></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">氏族</th><td style="">
<a href="/wiki/%E6%B2%9B%E9%83%A1" title="沛郡">沛国</a>曹氏</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">籍贯</th><td style="">
<a href="/wiki/%E6%B2%9B%E9%83%A1" title="沛郡">沛国</a><a href="/wiki/%E8%B0%AF%E5%8E%BF" title="谯县">谯县</a></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">别名</th><td style="">
小名吉利、小字阿瞒</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">其他名号</th><td style="">
一代枭雄</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">出生</th><td style="">
<a href="/wiki/%E6%B0%B8%E5%AF%BF_(%E4%B8%9C%E6%B1%89)" title="永寿 (东汉)">永寿</a>元年（155年）<br /><a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a><a href="/wiki/%E6%B2%9B%E9%83%A1" title="沛郡">沛国</a><a href="/wiki/%E8%B0%AF%E5%8E%BF" title="谯县">谯县</a><br />（今<a href="/wiki/%E5%AE%89%E5%BE%BD%E7%9C%81" title="安徽省">安徽省</a><a href="/wiki/%E4%BA%B3%E5%B7%9E%E5%B8%82" title="亳州市">亳州市</a>）</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">婚年</th><td style="">
不详（179年与<a href="/wiki/%E6%AD%A6%E5%AE%A3%E5%8D%9E%E7%9A%87%E5%90%8E" title="武宣卞皇后">卞氏</a>结婚）<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">&#91;1&#93;</a></sup></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">逝世</th><td style="">
<a href="/wiki/%E5%BB%BA%E5%AE%89_(%E6%9D%B1%E6%BC%A2)" class="mw-redirect" title="建安 (东汉)">建安</a>二十五年正月廿三日庚子<br />（220年3月15日）（64-65岁）<br /><a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a><a href="/wiki/%E6%B4%9B%E9%99%BD" class="mw-redirect" title="洛阳">洛阳</a><br />（今<a href="/wiki/%E6%B2%B3%E5%8D%97%E7%9C%81" title="河南省">河南省</a><a href="/wiki/%E6%B4%9B%E9%99%BD%E5%B8%82" class="mw-redirect" title="洛阳市">洛阳市</a>）</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">庙号</th><td style="">
<a href="/wiki/%E5%A4%AA%E7%A5%96_(%E5%BB%9F%E8%99%9F)" title="太祖 (庙号)">太祖</a></td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">谥号</th><td style="">
武王／武皇帝</td></tr><tr><th scope="row" style="text-align:left;white-space: nowrap;;">墓葬</th><td style="">
<a href="/wiki/%E9%AD%8F%E9%AB%98%E9%99%B5" class="mw-redirect" title="魏高陵">高陵</a></td></tr><tr><td colspan="2" style="text-align:center;">
<table class="infobox bordered collapsible collapsed" style="width: 100%; margin: 0; padding: 0; border: none;">
<tbody><tr>
<th colspan="2" style="background: #CFCFCF; text-align: center">亲属
</th></tr>
<tr>
<th><a href="/wiki/%E7%88%B6%E8%A6%AA" title="父亲">父亲</a>
</th>
<td>太皇帝<a href="/wiki/%E6%9B%B9%E5%B5%A9" title="曹嵩">曹嵩</a>
</td></tr>








<tr>
<th>元配
</th>
<td><a href="/wiki/%E4%B8%81%E5%A4%AB%E4%BA%BA" class="mw-redirect" title="丁夫人">丁夫人</a>（被废）
</td></tr>
<tr>
<th>正室
</th>
<td><a href="/wiki/%E4%B8%81%E5%A4%AB%E4%BA%BA" class="mw-redirect" title="丁夫人">丁夫人</a>（被废）
</td></tr>

<tr>
<th>继室
</th>
<td><a href="/wiki/%E6%AD%A6%E5%AE%A3%E5%8D%9E%E7%9A%87%E5%90%8E" title="武宣卞皇后">武宣皇后</a>
</td></tr>

<tr>
<th>侧室
</th>
<td><a href="/wiki/%E5%88%98%E5%A4%AB%E4%BA%BA_(%E6%9B%B9%E6%93%8D)" title="刘夫人 (曹操)">刘夫人</a><br /><a href="/wiki/%E7%92%B0%E5%A4%AB%E4%BA%BA" title="环夫人">环夫人</a><br /><a href="/wiki/%E6%9D%9C%E5%A4%AB%E4%BA%BA" title="杜夫人">杜夫人</a><br /><a href="/wiki/%E7%A7%A6%E5%A4%AB%E4%BA%BA" title="秦夫人">秦夫人</a><br /><a href="/wiki/%E5%B0%B9%E5%A4%AB%E4%BA%BA" class="mw-disambig" title="尹夫人">尹夫人</a><br />王昭仪等共15位
</td></tr>









<tr>
<th nowrap="">继室之父
</th>
<td>卞远
</td></tr>





<tr>
<th><a href="/wiki/%E5%85%84%E5%BC%9F" title="兄弟">兄弟</a>
</th>
<td>曹德
</td></tr>













<tr>
<th><a href="/wiki/%E5%85%92%E5%AD%90" title="儿子">子</a>
</th>
<td><a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a>、<a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>、<a href="/wiki/%E6%9B%B9%E5%BD%B0" title="曹彰">曹彰</a>、<a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a>等共34位，儿子25位，女儿6位，养子3位
</td></tr>












<tr>
<th>其他亲属
</th>
<td>养曾祖父：<a href="/wiki/%E6%9B%B9%E8%90%8C" title="曹萌">曹萌</a>
<p>养祖父：高皇帝<a href="/wiki/%E6%9B%B9%E9%A8%B0" title="曹腾">曹腾</a>
</p>
</td></tr></tbody></table></td></tr><tr><td colspan="2" style="text-align:center;"></td></tr><tr><td colspan="2" style="text-align:center;"></td></tr><tr><td colspan="2" style="text-align:center;"></td></tr></tbody></table>
<table class="infobox" style="width: 22em; text-align:left; font-size:small; line-height:1.5em;"><tbody><tr><td colspan="2" style="text-align:center;font-size: 125%; background-color: #b0c4de;">
<b>曹操</b></td></tr><tr><td colspan="2" style="text-align:center">
<a href="/wiki/File:Cao_Cao_(Chinese_characters).svg" class="image"><img alt="Cao Cao (Chinese characters).svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Cao_Cao_%28Chinese_characters%29.svg/110px-Cao_Cao_%28Chinese_characters%29.svg.png" decoding="async" width="110" height="57" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Cao_Cao_%28Chinese_characters%29.svg/165px-Cao_Cao_%28Chinese_characters%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Cao_Cao_%28Chinese_characters%29.svg/220px-Cao_Cao_%28Chinese_characters%29.svg.png 2x" data-file-width="829" data-file-height="426" /></a></td></tr><tr><th scope="row" style="text-align:left;font-weight:normal; white-space: nowrap; font-size: small;"><a href="/wiki/%E6%B1%89%E8%AF%AD" title="汉语">汉语</a></th><td style="font-size: small; width: 50%;;">
<span style="font-size: 1rem; width: 50%;"><span lang="zh-hani"> 曹操 </span></span></td></tr><tr><td colspan="2" style="text-align:center;font-size: small; width: 50%;;">
<table class="infobox collapsible collapsed" cellspacing="3" style="border-spacing:3px;padding:0;border:none;margin:-3px;width:auto;min-width:100%;font-size:small;clear:none;float:none;background-color:transparent"><tbody><tr><th colspan="2" style="text-align:center;font-size:125%;font-weight:bold;font-size: 100%; text-align: left; background-color: #f9ffbc">标音</th></tr><tr><th colspan="2" style="text-align:center;background-color: #dcffc9; font-size: small;"><a href="/wiki/%E5%AE%98%E8%AF%9D" title="官话">官话</a></th></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3" title="汉语拼音">汉语拼音</a></th><td style="text-align: left; width: 50%;;">
<style data-mw-deduplicate="TemplateStyles:r53459014">.mw-parser-output .sans-serif{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Lato,"Helvetica Neue",Helvetica,Arial,sans-serif}</style><span class="sans-serif"> Cáo Cāo </span></td></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E5%A8%81%E5%A6%A5%E7%91%AA%E6%8B%BC%E9%9F%B3" title="威妥玛拼音">威妥玛拼音</a></th><td style="text-align: left; width: 50%;;">
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r53459014"/><span class="sans-serif"> Ts'ao<sup>2</sup> Ts'ao<sup>1</sup> </span></td></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E5%9C%8B%E9%9A%9B%E9%9F%B3%E6%A8%99" title="国际音标">国际音标</a></th><td style="text-align: left; width: 50%;;">
<style data-mw-deduplicate="TemplateStyles:r50482836">.mw-parser-output .IPA{font-family:"Charis SIL","Doulos SIL","Linux Libertine","Segoe UI","Lucida Sans Unicode","Code2000","Gentium","Gentium Alternative","TITUS Cyberbit Basic","Arial Unicode MS","IPAPANNEW","Chrysanthi Unicode","GentiumAlt","Bitstream Vera","Bitstream Cyberbit","Hiragino Kaku Gothic Pro","Lucida Grande",sans-serif;text-decoration:none!important}.mw-parser-output .IPA a:link,.mw-parser-output .IPA a:visited{text-decoration:none!important}</style><span title="国际音标" class="IPA"><span class="IPA" style="white-space:nowrap"><a href="/wiki/Help:%E6%99%AE%E9%80%9A%E8%AF%9D%E5%9B%BD%E9%99%85%E9%9F%B3%E6%A0%87" title="Help:普通话国际音标">[tsʰɑ&#780;ʊ&#160;tsʰɑ&#769;ʊ]</a></span></span></td></tr><tr><th colspan="2" style="text-align:center;background-color: #dcffc9; font-size: small;"><a href="/wiki/%E9%97%BD%E8%AF%AD" title="闽语">闽语</a></th></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E9%97%BD%E5%8D%97%E8%AF%AD" title="闽南语">闽南语</a><a href="/wiki/%E7%99%BD%E8%A9%B1%E5%AD%97" title="白话字">白话字</a></th><td style="text-align: left; width: 50%;;">
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r53459014"/><span class="sans-serif"> Chô Chhò </span></td></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E8%87%BA%E7%81%A3%E9%96%A9%E5%8D%97%E8%AA%9E%E7%BE%85%E9%A6%AC%E5%AD%97%E6%8B%BC%E9%9F%B3%E6%96%B9%E6%A1%88" title="台湾闽南语罗马字拼音方案">台罗拼音</a></th><td style="text-align: left; width: 50%;;">
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r53459014"/><span class="sans-serif"> Tsô Tshau </span></td></tr><tr><th colspan="2" style="text-align:center;background-color: #dcffc9; font-size: small;"><a href="/wiki/%E7%B2%A4%E8%AF%AD" title="粤语">粤语</a></th></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E7%B2%B5%E6%8B%BC" class="mw-redirect" title="粤拼">粤拼</a></th><td style="text-align: left; width: 50%;;">
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r53459014"/><span class="sans-serif"> Cou<sup>4</sup> Cou<sup>1</sup> </span></td></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E5%9B%BD%E9%99%85%E9%9F%B3%E6%A0%87" class="mw-redirect" title="国际音标">国际音标</a></th><td style="text-align: left; width: 50%;;">
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r53459014"/><span class="sans-serif"> <span class="IPA" style="white-space:nowrap"><a href="/wiki/Help:%E5%B9%BF%E5%B7%9E%E8%AF%9D%E5%9B%BD%E9%99%85%E9%9F%B3%E6%A0%87" title="Help:广州话国际音标">[tsʰo&#783;u&#160;tsʰo&#769;u]</a></span> </span></td></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E8%80%B6%E9%AD%AF%E6%8B%BC%E9%9F%B3#粤语耶鲁拼音" title="耶鲁拼音">耶鲁拼音</a></th><td style="text-align: left; width: 50%;;">
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r53459014"/><span class="sans-serif"> Chòuh Chōu </span></td></tr><tr><th colspan="2" style="text-align:center;background-color: #dcffc9; font-size: small;"><a href="/wiki/%E4%B8%AD%E5%8F%A4%E6%B1%89%E8%AF%AD" title="中古汉语">中古汉语</a></th></tr><tr><th scope="row" style="text-align:left;font-weight:normal; width: 50%; white-space: nowrap;">-&#160;<a href="/wiki/%E4%B8%AD%E5%8F%A4%E6%B1%89%E8%AF%AD" title="中古汉语">中古汉语</a></th><td style="text-align: left; width: 50%;;">
Dzaw Tsʰaw</td></tr></tbody></table></td></tr></tbody></table>
<p><b>曹操</b>（155年－220年3月15日），<a href="/wiki/%E8%A1%A8%E5%AD%97" title="表字">字</a><b>孟德</b>，<a href="/wiki/%E5%B0%8F%E5%90%8D" class="mw-redirect" title="小名">小名</a><b>吉利</b>，<a href="/wiki/%E4%B9%B3%E5%90%8D" title="乳名">小字</a><b>阿瞒</b>，<a href="/wiki/%E6%B2%9B%E9%83%A1" title="沛郡">沛国</a><a href="/wiki/%E8%B0%AF%E5%8E%BF" title="谯县">谯县</a>（今<a href="/wiki/%E5%AE%89%E5%BE%BD" class="mw-redirect" title="安徽">安徽</a><a href="/wiki/%E4%BA%B3%E5%B7%9E%E5%B8%82" title="亳州市">亳州</a>）人。<a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a>末年著名<a href="/wiki/%E5%86%9B%E4%BA%8B%E5%AE%B6" title="军事家">军事家</a>、<a href="/wiki/%E6%94%BF%E6%B2%BB%E5%AE%B6" title="政治家">政治家</a>、<a href="/wiki/%E6%96%87%E5%AD%A6%E5%AE%B6" class="mw-redirect" title="文学家">文学家</a>和<a href="/wiki/%E8%A9%A9%E4%BA%BA" class="mw-redirect" title="诗人">诗人</a>，<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%97%B6%E4%BB%A3" class="mw-redirect" title="三国时代">三国时代</a><a href="/wiki/%E6%9B%B9%E9%AD%8F" title="曹魏">曹魏</a>奠基者和主要缔造者。曹操于<a href="/wiki/%E5%BB%BA%E5%AE%89_(%E6%9D%B1%E6%BC%A2)" class="mw-redirect" title="建安 (东汉)">建安</a>年间权倾天下，在世时官至<a href="/wiki/%E4%B8%9E%E7%9B%B8" title="丞相">丞相</a>，爵至<b>魏王</b>，<a href="/wiki/%E8%B0%A5%E5%8F%B7" title="谥号">谥号</a><b>武王</b><sup id="cite_ref-2" class="reference"><a href="#cite_note-2">&#91;2&#93;</a></sup>。其子<a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>受禅称帝后，<a href="/wiki/%E8%BF%BD%E5%B0%8A" class="mw-redirect" title="追尊">追尊</a>其为<b>武皇帝</b>，<a href="/wiki/%E5%BB%9F%E8%99%9F" class="mw-redirect" title="庙号">庙号</a><b>太祖</b>。
</p>
<div id="toc" class="toc"><input type="checkbox" role="button" id="toctogglecheckbox" class="toctogglecheckbox" style="display:none" /><div class="toctitle" lang="zh-Hans-CN" dir="ltr"><h2>目录</h2><span class="toctogglespan"><label class="toctogglelabel" for="toctogglecheckbox"></label></span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#生平"><span class="tocnumber">1</span> <span class="toctext">生平</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#早年（155年-174年）"><span class="tocnumber">1.1</span> <span class="toctext">早年（155年-174年）</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#初入官場（174年-189年）"><span class="tocnumber">1.2</span> <span class="toctext">初入官场（174年-189年）</span></a></li>
<li class="toclevel-2 tocsection-4"><a href="#讨伐董卓（190年-191年）"><span class="tocnumber">1.3</span> <span class="toctext">讨伐董卓（190年-191年）</span></a></li>
<li class="toclevel-2 tocsection-5"><a href="#兖州時期（191年-194年）"><span class="tocnumber">1.4</span> <span class="toctext">兖州时期（191年-194年）</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#奉天子以令不臣（195年-197年）"><span class="tocnumber">1.5</span> <span class="toctext">奉天子以令不臣（195年-197年）</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#征讨四方（197年-199年）"><span class="tocnumber">1.6</span> <span class="toctext">征讨四方（197年-199年）</span></a></li>
<li class="toclevel-2 tocsection-8"><a href="#官渡之战与统一北方（200年-207年）"><span class="tocnumber">1.7</span> <span class="toctext">官渡之战与统一北方（200年-207年）</span></a></li>
<li class="toclevel-2 tocsection-9"><a href="#赤壁之战与关中之战（208年-212年）"><span class="tocnumber">1.8</span> <span class="toctext">赤壁之战与关中之战（208年-212年）</span></a></li>
<li class="toclevel-2 tocsection-10"><a href="#封公称王（212年-216年）"><span class="tocnumber">1.9</span> <span class="toctext">封公称王（212年-216年）</span></a></li>
<li class="toclevel-2 tocsection-11"><a href="#南征孙权与汉中之战（215年-219年）"><span class="tocnumber">1.10</span> <span class="toctext">南征孙权与汉中之战（215年-219年）</span></a></li>
<li class="toclevel-2 tocsection-12"><a href="#樊城之战（219年）"><span class="tocnumber">1.11</span> <span class="toctext">樊城之战（219年）</span></a></li>
<li class="toclevel-2 tocsection-13"><a href="#去世（220年）"><span class="tocnumber">1.12</span> <span class="toctext">去世（220年）</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-14"><a href="#文學成就"><span class="tocnumber">2</span> <span class="toctext">文学成就</span></a>
<ul>
<li class="toclevel-2 tocsection-15"><a href="#體裁"><span class="tocnumber">2.1</span> <span class="toctext">体裁</span></a></li>
<li class="toclevel-2 tocsection-16"><a href="#內容思想"><span class="tocnumber">2.2</span> <span class="toctext">内容思想</span></a></li>
<li class="toclevel-2 tocsection-17"><a href="#語言風格"><span class="tocnumber">2.3</span> <span class="toctext">语言风格</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-18"><a href="#容貌"><span class="tocnumber">3</span> <span class="toctext">容貌</span></a></li>
<li class="toclevel-1 tocsection-19"><a href="#性格"><span class="tocnumber">4</span> <span class="toctext">性格</span></a></li>
<li class="toclevel-1 tocsection-20"><a href="#身世争议"><span class="tocnumber">5</span> <span class="toctext">身世争议</span></a>
<ul>
<li class="toclevel-2 tocsection-21"><a href="#身後墓地"><span class="tocnumber">5.1</span> <span class="toctext">身后墓地</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-22"><a href="#廟庭"><span class="tocnumber">6</span> <span class="toctext">庙庭</span></a></li>
<li class="toclevel-1 tocsection-23"><a href="#評價"><span class="tocnumber">7</span> <span class="toctext">评价</span></a>
<ul>
<li class="toclevel-2 tocsection-24"><a href="#時人評價"><span class="tocnumber">7.1</span> <span class="toctext">时人评价</span></a></li>
<li class="toclevel-2 tocsection-25"><a href="#後人評價"><span class="tocnumber">7.2</span> <span class="toctext">后人评价</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-26"><a href="#家庭成员"><span class="tocnumber">8</span> <span class="toctext">家庭成员</span></a>
<ul>
<li class="toclevel-2 tocsection-27"><a href="#祖父輩"><span class="tocnumber">8.1</span> <span class="toctext">祖父辈</span></a></li>
<li class="toclevel-2 tocsection-28"><a href="#父輩"><span class="tocnumber">8.2</span> <span class="toctext">父辈</span></a></li>
<li class="toclevel-2 tocsection-29"><a href="#弟"><span class="tocnumber">8.3</span> <span class="toctext">弟</span></a></li>
<li class="toclevel-2 tocsection-30"><a href="#堂兄弟"><span class="tocnumber">8.4</span> <span class="toctext">堂兄弟</span></a></li>
<li class="toclevel-2 tocsection-31"><a href="#妻妾"><span class="tocnumber">8.5</span> <span class="toctext">妻妾</span></a></li>
<li class="toclevel-2 tocsection-32"><a href="#兒子"><span class="tocnumber">8.6</span> <span class="toctext">儿子</span></a></li>
<li class="toclevel-2 tocsection-33"><a href="#女兒"><span class="tocnumber">8.7</span> <span class="toctext">女儿</span></a></li>
<li class="toclevel-2 tocsection-34"><a href="#侄輩"><span class="tocnumber">8.8</span> <span class="toctext">侄辈</span></a></li>
<li class="toclevel-2 tocsection-35"><a href="#養子"><span class="tocnumber">8.9</span> <span class="toctext">养子</span></a></li>
<li class="toclevel-2 tocsection-36"><a href="#後裔"><span class="tocnumber">8.10</span> <span class="toctext">后裔</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-37"><a href="#民間藝術"><span class="tocnumber">9</span> <span class="toctext">民间艺术</span></a>
<ul>
<li class="toclevel-2 tocsection-38"><a href="#三国演义"><span class="tocnumber">9.1</span> <span class="toctext">三国演义</span></a></li>
<li class="toclevel-2 tocsection-39"><a href="#戲劇"><span class="tocnumber">9.2</span> <span class="toctext">戏剧</span></a></li>
<li class="toclevel-2 tocsection-40"><a href="#漫畫"><span class="tocnumber">9.3</span> <span class="toctext">漫画</span></a></li>
<li class="toclevel-2 tocsection-41"><a href="#遊戲"><span class="tocnumber">9.4</span> <span class="toctext">游戏</span></a></li>
<li class="toclevel-2 tocsection-42"><a href="#動畫"><span class="tocnumber">9.5</span> <span class="toctext">动画</span></a></li>
<li class="toclevel-2 tocsection-43"><a href="#電影"><span class="tocnumber">9.6</span> <span class="toctext">电影</span></a></li>
<li class="toclevel-2 tocsection-44"><a href="#電視劇"><span class="tocnumber">9.7</span> <span class="toctext">电视剧</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-45"><a href="#注释"><span class="tocnumber">10</span> <span class="toctext">注释</span></a></li>
<li class="toclevel-1 tocsection-46"><a href="#参考文献"><span class="tocnumber">11</span> <span class="toctext">参考文献</span></a>
<ul>
<li class="toclevel-2 tocsection-47"><a href="#引用"><span class="tocnumber">11.1</span> <span class="toctext">引用</span></a></li>
<li class="toclevel-2 tocsection-48"><a href="#来源"><span class="tocnumber">11.2</span> <span class="toctext">来源</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-49"><a href="#外部連結"><span class="tocnumber">12</span> <span class="toctext">外部链接</span></a></li>
</ul>
</div>

<h2><span id=".E7.94.9F.E5.B9.B3"></span><span class="mw-headline" id="生平">生平</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=1" title="编辑章节：生平">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span id=".E6.97.A9.E5.B9.B4.EF.BC.88155.E5.B9.B4-174.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="早年（155年-174年）">早年（155年-174年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=2" title="编辑章节：早年（155年-174年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>东汉<a href="/wiki/%E6%B0%B8%E5%AF%BF_(%E4%B8%9C%E6%B1%89)" title="永寿 (东汉)">永寿</a>元年（155年），曹操出生于沛国谯县（今安徽亳州）的一个<a href="/wiki/%E5%AE%A6%E5%AE%98" title="宦官">宦官</a>家族，养<a href="/wiki/%E7%A5%96%E7%88%B6" class="mw-redirect" title="祖父">祖父</a>是宦官<a href="/wiki/%E6%9B%B9%E9%A8%B0" title="曹腾">曹腾</a>，历侍四代天子，<a href="/wiki/%E6%B1%89%E6%A1%93%E5%B8%9D" title="汉桓帝">汉桓帝</a>时封为费亭侯。<a href="/wiki/%E7%88%B6%E8%A6%AA" title="父亲">父亲</a><a href="/wiki/%E6%9B%B9%E5%B5%A9" title="曹嵩">曹嵩</a>是曹腾养子，<a href="/wiki/%E6%B1%89%E7%81%B5%E5%B8%9D" title="汉灵帝">汉灵帝</a>时官至<a href="/wiki/%E5%A4%AA%E5%B0%89" title="太尉">太尉</a>。《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97" title="三国志">三国志</a>》中记载曹操远祖是<a href="/wiki/%E6%BC%A2%E4%BB%A3" class="mw-redirect" title="汉代">汉代</a>初期的<a href="/wiki/%E7%9B%B8%E5%9B%BD" title="相国">相国</a><a href="/wiki/%E6%9B%B9%E5%8F%82" title="曹参">曹参</a>，但是<a href="/wiki/%E8%A3%B4%E6%9D%BE%E4%B9%8B" title="裴松之">裴松之</a>注曰：“嵩，夏侯氏之子，<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>之叔父。太祖于惇为从父兄弟”；曹操身世众说纷纭。
</p><p>曹操少年时机警过人，通权谋机变，十岁时曾经在家乡击退鳄鱼<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">&#91;3&#93;</a></sup>。但行为放荡不羁（如曾和<a href="/wiki/%E8%A2%81%E7%BB%8D" title="袁绍">袁绍</a>偷新娘<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">&#91;4&#93;</a></sup>），不为世人看重。只有<a href="/wiki/%E6%A9%8B%E7%8E%84" title="桥玄">桥玄</a>、<a href="/wiki/%E4%BD%95%E9%A1%92" title="何颙">何颙</a>、<a href="/wiki/%E6%9D%8E%E7%93%92_(%E4%B8%9C%E6%B1%89)" title="李瓒 (东汉)">李瓒</a>和<a href="/wiki/%E7%8E%8B%E4%BF%8A" class="mw-disambig" title="王俊">王俊</a>认为曹操是非常之人，将来一定会安定天下<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">&#91;5&#93;</a></sup><sup id="cite_ref-6" class="reference"><a href="#cite_note-6">&#91;6&#93;</a></sup><sup id="cite_ref-7" class="reference"><a href="#cite_note-7">&#91;7&#93;</a></sup><sup id="cite_ref-8" class="reference"><a href="#cite_note-8">&#91;8&#93;</a></sup><sup id="cite_ref-9" class="reference"><a href="#cite_note-9">&#91;9&#93;</a></sup><sup id="cite_ref-10" class="reference"><a href="#cite_note-10">&#91;10&#93;</a></sup>。当时曹操还默默无闻，桥玄建议曹操去结交当时的名士<a href="/wiki/%E8%A8%B1%E5%8A%AD" title="许劭">许劭</a>，以提高名望。于是曹操就去拜访许劭，向他询问说：“我是怎样的人？”许劭鄙视曹操的为人，不肯回答，曹操找到机会威胁许劭，许劭不得已，给曹操做出了“君清平之奸贼，乱世之英雄。”的评价（《异同杂语》作：“治世之能臣，乱世之奸雄”），曹操听罢大笑，并逐渐知名<sup id="cite_ref-11" class="reference"><a href="#cite_note-11">&#91;11&#93;</a></sup><sup id="cite_ref-12" class="reference"><a href="#cite_note-12">&#91;12&#93;</a></sup><sup id="cite_ref-13" class="reference"><a href="#cite_note-13">&#91;13&#93;</a></sup><sup id="cite_ref-14" class="reference"><a href="#cite_note-14">&#91;14&#93;</a></sup>。<a href="/wiki/%E5%BB%BA%E5%AE%89_(%E6%B1%89%E7%8C%AE%E5%B8%9D)" class="mw-redirect" title="建安 (汉献帝)">建安</a>七年（202年）曹操北征，路过桥玄之墓，下令<a href="/wiki/%E7%A5%AD%E7%A5%80" title="祭祀">祭祀</a>桥玄，并且写了悼文。
</p><p>曹操早年就喜爱武艺同时也很有才华，曾经潜入<a href="/wiki/%E4%B8%AD%E5%B8%B8%E4%BE%8D" title="中常侍">中常侍</a><a href="/wiki/%E5%BC%B5%E8%AE%93_(%E6%9D%B1%E6%BC%A2)" title="张让 (东汉)">张让</a>家，被张让发觉后，手舞著<a href="/wiki/%E6%88%9F" title="戟">戟</a>越墙逃出，全身而退。又博览群书，尤其喜欢<a href="/wiki/%E5%85%B5%E6%B3%95" title="兵法">兵法</a>，曾经抄录古代诸家兵法韬略，还有注释《<a href="/wiki/%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95" title="孙子兵法">孙子兵法</a>》的《<a href="https://zh.wikisource.org/wiki/%E5%AD%AB%E5%AD%90%E7%95%A5%E8%A7%A3" class="extiw" title="s:孙子略解">孙子略解</a>》；是为《孙子兵法》最早的注释本。
</p>
<h3><span id=".E5.88.9D.E5.85.A5.E5.AE.98.E5.A0.B4.EF.BC.88174.E5.B9.B4-189.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="初入官場（174年-189年）">初入官场（174年-189年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=3" title="编辑章节：初入官场（174年-189年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操年轻时是名<a href="/wiki/%E7%94%9F%E5%91%98#诸生" title="生员">诸生</a><sup id="cite_ref-15" class="reference"><a href="#cite_note-15">&#91;15&#93;</a></sup>，熹平三年（174年），二十岁的曹操<a href="/wiki/%E5%AF%9F%E4%B8%BE" title="察举">察举</a><a href="/wiki/%E5%AD%9D%E5%BB%89" title="孝廉">孝廉</a>成为<a href="/wiki/%E9%83%8E%E5%AE%98" title="郎官">郎官</a>，不久<a href="/wiki/%E5%8F%B8%E9%A6%AC%E8%8A%B3" title="司马芳">司马芳</a>推荐曹操为<a href="/wiki/%E6%B4%9B%E9%99%BD" class="mw-redirect" title="洛阳">洛阳</a>北部<a href="/wiki/%E5%8E%BF%E5%B0%89" title="县尉">尉</a><span id="noteTag-cite_ref-sup"><sup id="cite_ref-16" class="reference"><a href="#cite_note-16">&#91;注 1&#93;</a></sup></span>，但曹操想担任洛阳令，不过负责人事的选部尚书梁鹄并没有遵从曹操的意愿<sup id="cite_ref-17" class="reference"><a href="#cite_note-17">&#91;16&#93;</a></sup>。曹操上任洛阳北部尉数月，<a href="/wiki/%E5%AE%A6%E5%AE%98" title="宦官">宦官</a><a href="/wiki/%E8%B9%87%E7%A1%95" title="蹇硕">蹇硕</a>的叔叔<a href="/wiki/%E5%AE%B5%E7%A6%81" title="宵禁">违禁</a>夜行，被曹操依律棒杀。这使曹操得罪宦官集团，可是曹操是依法而行，这些人又无法中伤诋毁曹操，只好转而称赞他，举荐他去担任地方官。177年，曹操被任命为<a href="/wiki/%E9%A1%BF%E4%B8%98%E5%8E%BF_(%E8%A5%BF%E6%B1%89)" title="顿丘县 (西汉)">顿丘</a><a href="/wiki/%E7%B8%A3%E4%BB%A4" class="mw-redirect" title="县令">令</a>，第二年，曹操因堂妹夫滁强侯<a href="/wiki/%E5%AE%8B%E5%A5%87" title="宋奇">宋奇</a>被宦官诛杀，受到牵连，被免去官职。其后，在<a href="/wiki/%E6%B4%9B%E9%99%BD" class="mw-redirect" title="洛阳">洛阳</a>无事可做，回到家乡谯县闲居。
</p><p>180年，曹操又被朝廷征召，任命为议郎。此前（168年），<a href="/wiki/%E5%A4%A7%E5%B0%86%E5%86%9B_(%E4%B8%9C%E4%BA%9A)" class="mw-redirect" title="大将军 (东亚)">大将军</a><a href="/wiki/%E7%AA%A6%E6%AD%A6" title="窦武">窦武</a>、<a href="/wiki/%E5%A4%AA%E5%82%85" title="太傅">太傅</a><a href="/wiki/%E9%99%88%E8%95%83" title="陈蕃">陈蕃</a>谋划诛杀宦官，不料反为阉党所害。曹操上书陈述窦武等人为官正直而遭陷害，致使奸邪之徒满朝，而忠良之人却得不到重用的情形，言辞恳切，没有被<a href="/wiki/%E6%BC%A2%E9%9D%88%E5%B8%9D" class="mw-redirect" title="汉灵帝">汉灵帝</a>采纳。而后，曹操又多次上书进谏，虽偶有成效，但是东汉朝政日益腐败，曹操知道无法匡正。
</p><p>中平元年（184年）二月，<a href="/wiki/%E5%A4%AA%E5%B9%B3%E9%81%93_(%E5%AE%97%E6%95%99)" title="太平道 (宗教)">太平道</a>首领<a href="/wiki/%E5%BC%A0%E8%A7%92" class="mw-redirect" title="张角">张角</a>聚众起义，<a href="/wiki/%E9%BB%84%E5%B7%BE%E4%B9%8B%E4%B9%B1" class="mw-redirect" title="黄巾之乱">黄巾之乱</a>爆发，朝廷任命曹操为<a href="/wiki/%E9%AA%91%E9%83%BD%E5%B0%89" class="mw-redirect" title="骑都尉">骑都尉</a>，前往<a href="/wiki/%E9%A2%8D%E5%B7%9D" class="mw-redirect" title="颍川">颍川</a>郡镇压叛乱。由于镇压黄巾军有功，升任<a href="/wiki/%E6%BF%9F%E5%8D%97%E9%83%A1" title="济南郡">济南</a>相，任职后罢免贪污官员约八成，并且严令禁止当时盛行的宗教迷信。据说因为曹操当政素称严明，济南郡一带作乱之徒听说曹操要来了，都纷纷潜逃到别的郡县。曹操被任命为<a href="/wiki/%E6%9D%B1%E9%83%A1" title="东郡">东郡</a><a href="/wiki/%E5%A4%AA%E5%AE%88" title="太守">太守</a>，但是曹操没有就任，自称在担任<a href="/wiki/%E6%BF%9F%E5%8D%97%E9%83%A1" title="济南郡">济南</a>相期间的行为得罪<a href="/wiki/%E5%8D%81%E5%B8%B8%E4%BE%8D" title="十常侍">十常侍</a>和地方豪强，害怕引起报复，称病回乡<sup id="cite_ref-18" class="reference"><a href="#cite_note-18">&#91;17&#93;</a></sup>。当时天下纷乱，先是发生了<a href="/wiki/%E5%86%80%E5%B7%9E" class="mw-redirect" title="冀州">冀州</a><a href="/wiki/%E5%88%BA%E5%8F%B2" title="刺史">刺史</a><a href="/wiki/%E7%8E%8B%E8%8A%AC" title="王芬">王芬</a>联合<a href="/wiki/%E5%8D%97%E9%98%B3" class="mw-redirect" title="南阳">南阳</a><a href="/wiki/%E8%AE%B8%E6%94%B8" class="mw-redirect" title="许攸">许攸</a>、<a href="/wiki/%E6%B2%9B%E5%9B%BD" class="mw-redirect" title="沛国">沛国</a><a href="/wiki/%E5%91%A8%E6%97%8C" title="周旌">周旌</a>等地方豪强，谋划废黜灵帝立<a href="/wiki/%E5%90%88%E8%82%A5%E4%BE%AF" title="合肥侯">合肥侯</a>的事件。王芬等人曾经希望曹操加入他们，但被曹操拒绝，<sup id="cite_ref-19" class="reference"><a href="#cite_note-19">&#91;18&#93;</a></sup>后来王芬事败自杀。接着，又有西北<a href="/wiki/%E9%87%91%E5%9F%8E%E9%83%A1" title="金城郡">金城郡</a>（今甘肃<a href="/wiki/%E5%85%B0%E5%B7%9E" class="mw-redirect" title="兰州">兰州</a>）的<a href="/wiki/%E8%BE%B9%E7%AB%A0" title="边章">边章</a>、<a href="/wiki/%E9%9F%A9%E9%81%82" title="韩遂">韩遂</a>杀死刺史和太守，率兵十余万反叛朝廷。
</p><p>188年，汉灵帝组建<a href="/wiki/%E8%A5%BF%E5%9B%AD%E5%85%AB%E6%A0%A1%E5%B0%89" title="西园八校尉">西园军</a>，曹操被起用为<a href="/wiki/%E8%A5%BF%E5%9B%AD%E5%85%AB%E6%A0%A1%E5%B0%89" title="西园八校尉">典军校尉</a>，并派往家乡募兵，结果中途士兵叛乱，袭击曹操，曹操负伤逃脱<sup id="cite_ref-20" class="reference"><a href="#cite_note-20">&#91;19&#93;</a></sup>。189年，在位22年的<a href="/wiki/%E6%B1%89%E7%81%B5%E5%B8%9D" title="汉灵帝">汉灵帝</a>驾崩，终年34岁，太子<a href="/wiki/%E5%88%98%E8%BE%A9" class="mw-redirect" title="刘辩">刘辩</a>登基，何太后<a href="/wiki/%E4%B8%B4%E6%9C%9D%E7%A7%B0%E5%88%B6" title="临朝称制">临朝听政</a>。大将军<a href="/wiki/%E4%BD%95%E8%BF%9B" title="何进">何进</a>想趁宦官失势之机诛灭阉党，但是没有取得太后的支持。于是何进便召时任并州刺史的<a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a>进京，胁迫太后同意。然而此举打草惊蛇，董卓尚未抵达京城，何进已经被宦官下手谋杀，随后宦官十常侍也被<a href="/wiki/%E8%A2%81%E7%BB%8D" title="袁绍">袁绍</a>等人诛杀。同年<a href="/wiki/%E4%B9%9D%E6%9C%88" class="mw-redirect mw-disambig" title="九月">九月</a>，董卓入京，诛杀<a href="/wiki/%E4%B8%81%E5%8E%9F" title="丁原">丁原</a>，逼走<a href="/wiki/%E8%A2%81%E7%BB%8D" title="袁绍">袁绍</a>，执掌朝政。废少帝刘辩为<a href="/wiki/%E5%BC%98%E8%BE%B2%E7%8E%8B" class="mw-redirect" title="弘农王">弘农王</a>，改立其弟陈留王刘协为皇帝，是为<a href="/wiki/%E6%BC%A2%E7%8D%BB%E5%B8%9D" class="mw-redirect" title="汉献帝">汉献帝</a>，京城陷入混乱。为了稳定局面，董卓想拉拢曹操，上表奏请曹操为<a href="/wiki/%E9%AA%81%E9%AA%91%E6%A0%A1%E5%B0%89" title="骁骑校尉">骁骑校尉</a>。但是，曹操没有接受董卓所封的官职，害怕惹祸上身，更名改姓，潜逃出洛阳。曹操逃亡到成皋，投奔故人吕伯奢家，吕伯奢不在，其子招待曹操。曹操听见有食器声音，以为吕伯奢儿子要抓捕自己献给官府，干脆将吕伯奢五个儿子和吕家2名宾客全部杀死。事后曹操发现自己是误杀，于是说了句“宁我负人，毋人负我！”来安慰自己<sup id="cite_ref-21" class="reference"><a href="#cite_note-21">&#91;20&#93;</a></sup><sup id="cite_ref-22" class="reference"><a href="#cite_note-22">&#91;21&#93;</a></sup><sup id="cite_ref-23" class="reference"><a href="#cite_note-23">&#91;22&#93;</a></sup>。曹操杀死吕伯奢儿子离开后，道逢二人，容貌威武，曹操避让。二人笑着对曹操说：“感觉你很害怕，为什么呀？”曹操觉得诧异，把刚才杀人的事全盘托出。临别前，曹操解佩刀送给二人并说：“以此表吾丹心，愿二贤慎勿言。”<sup id="cite_ref-24" class="reference"><a href="#cite_note-24">&#91;23&#93;</a></sup>曹操继续向东逃亡，经过中牟县时，被亭长怀疑是逃亡的罪犯，于是将曹操抓去见县令。乡野中有人认得这人就是曹操，就拜托县令把曹操给放走<sup id="cite_ref-25" class="reference"><a href="#cite_note-25">&#91;24&#93;</a></sup>。
</p>
<h3><span id=".E8.AE.A8.E4.BC.90.E8.91.A3.E5.8D.93.EF.BC.88190.E5.B9.B4-191.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="讨伐董卓（190年-191年）"><a href="/wiki/%E8%A8%8E%E4%BC%90%E8%91%A3%E5%8D%93%E4%B9%8B%E6%88%B0" title="讨伐董卓之战">讨伐董卓</a>（190年-191年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=4" title="编辑章节：讨伐董卓（190年-191年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>189年十二月，在回到<a href="/wiki/%E9%99%B3%E7%95%99%E9%83%A1" title="陈留郡">陈留郡</a>之后，曹操散尽家财征募<a href="/wiki/%E9%84%89%E5%8B%87" title="乡勇">乡勇</a>，甚至亲自和刀匠一同制作武器<sup id="cite_ref-26" class="reference"><a href="#cite_note-26">&#91;25&#93;</a></sup>，豪强<a href="/wiki/%E8%A1%9B%E8%8C%B2" title="卫兹">卫兹</a>也倾家财助之，曹操率先于己吾揭竿举义，讨伐董卓。初平元年（190年）正月，<a href="/wiki/%E8%91%A3%E5%8D%93%E8%A8%8E%E4%BC%90%E6%88%B0" class="mw-redirect" title="董卓讨伐战">董卓讨伐战</a>开始，<a href="/wiki/%E5%8B%83%E6%B5%B7" class="mw-redirect" title="勃海">勃海</a>太守<a href="/wiki/%E8%A2%81%E7%BB%8D" title="袁绍">袁绍</a>、后将军<a href="/wiki/%E8%A2%81%E6%9C%AF" title="袁术">袁术</a>、<a href="/wiki/%E5%86%80%E5%B7%9E" class="mw-redirect" title="冀州">冀州</a><a href="/wiki/%E7%89%A7" class="mw-redirect" title="牧">牧</a><a href="/wiki/%E9%9F%A9%E9%A6%A5" class="mw-redirect" title="韩馥">韩馥</a>、<a href="/wiki/%E8%B1%AB%E5%B7%9E" class="mw-redirect mw-disambig" title="豫州">豫州</a><a href="/wiki/%E5%88%BA%E5%8F%B2" title="刺史">刺史</a><a href="/wiki/%E5%AD%94%E4%BC%B7" title="孔伷">孔伷</a>、<a href="/wiki/%E6%B2%B3%E5%85%A7%E9%83%A1_(%E4%B8%AD%E5%9C%8B)" title="河内郡 (中国)">河内</a>太守<a href="/wiki/%E7%8E%8B%E5%8C%A1_(%E4%B8%89%E5%9B%BD)" class="mw-redirect" title="王匡 (三国)">王匡</a>、<a href="/wiki/%E5%85%97%E5%B7%9E" class="mw-redirect" title="兖州">兖州</a>刺史<a href="/wiki/%E5%88%98%E5%B2%B1" class="mw-redirect" title="刘岱">刘岱</a>、<a href="/wiki/%E9%99%B3%E7%95%99%E9%83%A1" title="陈留郡">陈留</a>太守<a href="/wiki/%E5%BC%A0%E9%82%88" title="张邈">张邈</a>、<a href="/wiki/%E6%9D%B1%E9%83%A1" title="东郡">东郡</a>太守<a href="/wiki/%E6%A9%8B%E7%91%81" title="桥瑁">桥瑁</a>、<a href="/wiki/%E5%B1%B1%E9%98%B3" class="mw-disambig" title="山阳">山阳</a>太守<a href="/wiki/%E8%A2%81%E9%81%97" class="mw-redirect" title="袁遗">袁遗</a>、<a href="/wiki/%E6%B5%8E%E5%8C%97" class="mw-redirect" title="济北">济北</a>国相<a href="/wiki/%E9%B2%8D%E4%BF%A1" class="mw-redirect" title="鲍信">鲍信</a>等地方势力，举兵反董，群雄推举袁绍为盟主。曹操则行使<a href="/wiki/%E5%A5%8B%E6%AD%A6%E5%B0%86%E5%86%9B" title="奋武将军">奋武将军</a>之职。
</p><p>此次战役中，曹操跟随诸将驻扎<a href="/wiki/%E9%85%B8%E6%A3%97" class="mw-redirect mw-disambig" title="酸枣">酸枣</a>，当时天下英雄豪杰，都以袁绍马首是瞻，只有鲍信认为曹操是拨乱反正的雄才。而鲍信的推算也没有错，在董卓焚烧洛阳，挟持汉献帝与百官迁都长安之后，袁绍等各军将领都畏惧董卓而按兵不动，谁也不敢先发动攻击，唯有曹操单独引兵西行。张邈派部将卫兹率领一部分兵力跟随曹操，曹操打算夺取成皋，在抵达荥阳汴水时，和董卓部将<a href="/wiki/%E5%BE%90%E6%A6%AE" class="mw-disambig" title="徐荣">徐荣</a>遭遇，大败，士卒死伤众多。战中，曹操被流矢射中，所骑战马受伤倒下，幸而<a href="/wiki/%E6%9B%B9%E6%B4%AA" title="曹洪">曹洪</a>把自己的坐骑让给曹操，且步行随侍保护，才能乘夜逃走。也是因为这战，徐荣发现曹操以这么少的兵力，都能奋战一整天，判断酸枣不易攻下，因此也向后撤退。
</p><p>曹操回到酸枣，看见各军累积起来也有十余万，但诸将每天欢宴饮酒，没人图谋进取，于是提出建议：
</p>
<ol><li>袁绍从河内发兵，进逼<a href="/wiki/%E5%AD%9F%E6%B4%A5" class="mw-redirect" title="孟津">孟津</a>。</li>
<li>酸枣诸将，据守成皋，控制敖仓，封锁轘辕关、太谷关，掌握险要。</li>
<li>袁术攻击丹水、析，直入<a href="/wiki/%E6%AD%A6%E5%85%B3" title="武关">武关</a>，威胁<a href="/wiki/%E4%B8%89%E8%BC%94" class="mw-redirect" title="三辅">三辅</a>。</li>
<li>全军兴筑高大坚固的堡垒，不和董卓军团正面冲突，只派出游击部队骚扰，完全控制关东，从而立于不败之地，等待董卓军内部发生变化。</li></ol>
<p>然后诸将不能接受这项部署，曹操因为士兵多死在<a href="/wiki/%E8%8D%A5%E9%98%B3%E4%B9%8B%E6%88%98_(190%E5%B9%B4)" title="荥阳之战 (190年)">荥阳之战</a>，只好跟司马<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>等，前往<a href="/wiki/%E6%8F%9A%E5%B7%9E" class="mw-disambig" title="扬州">扬州</a>募兵，扬州刺史<a href="/wiki/%E9%99%88%E6%B8%A9" title="陈温">陈温</a>、<a href="/wiki/%E4%B8%B9%E9%99%BD%E9%83%A1" class="mw-redirect" title="丹阳郡">丹阳</a>太守<a href="/wiki/%E5%91%A8%E6%98%95" title="周昕">周昕</a>给予曹操四千余人。行军至龙亢，士卒叛变，趁夜焚烧曹操营帐，曹操亲手斩杀数十人，才出营帐，没有参与叛变的仅剩五百余人。又行军到铚、建平一带，集结残兵一千余人，投奔袁绍，前来河内驻守。
</p><p>然而不久后，酸枣大营粮秣告尽，各军星拔营散，同时内斗又起，刘岱和桥瑁交恶，桥瑁被杀。袁绍和韩馥又谋立<a href="/wiki/%E5%B9%BD%E5%B7%9E" class="mw-redirect" title="幽州">幽州</a>牧<a href="/wiki/%E5%8A%89%E8%99%9E" title="刘虞">刘虞</a>为帝，想拉拢曹操，遭到曹操拒绝。联军无暇顾及董卓之事，于是反董卓联盟解散，除了曹操、孙坚、王匡之外，其余诸军皆没有和凉州军团交战，只是各怀鬼胎，保存实力。曹操听从了鲍信的建议，想避开袁绍新占的冀州，往黄河南边的兖州进行发展。这时<a href="/wiki/%E9%BB%91%E5%B1%B1%E8%BB%8D" title="黑山军">黑山军</a>于毒、白绕、<a href="/wiki/%E7%9C%AD%E5%9B%BA" title="眭固">眭固</a>等十余万众攻略魏郡、东郡，东郡太守王肱无法抵抗，曹操趁机让袁绍让自己前往东郡，并顺利的在濮阳击败白绕。袁绍于是上表曹操为东郡太守，屯驻东武阳。<sup id="cite_ref-27" class="reference"><a href="#cite_note-27">&#91;26&#93;</a></sup>
</p>
<h3><span id=".E5.85.96.E5.B7.9E.E6.99.82.E6.9C.9F.EF.BC.88191.E5.B9.B4-194.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="兖州時期（191年-194年）">兖州时期（191年-194年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=5" title="编辑章节：兖州时期（191年-194年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>初平三年(<a href="/wiki/192%E5%B9%B4" title="192年">192年</a>)，曹操驻军<a href="/wiki/%E9%A0%93%E4%B8%98" class="mw-redirect mw-disambig" title="顿丘">顿丘</a>，黑山贼余毒等趁机攻击东武阳，曹操率军直向于毒的本营西山，于毒得到消息，解除对东武阳的进攻。曹操趁胜进抵<a href="/wiki/%E5%86%85%E9%BB%84" class="mw-redirect" title="内黄">内黄</a>，大破眭固及<a href="/wiki/%E5%8D%97%E5%8C%88%E5%A5%B4" title="南匈奴">南匈奴</a><a href="/wiki/%E5%96%AE%E4%BA%8E" class="mw-redirect" title="单于">单于</a><a href="/wiki/%E6%96%BC%E5%A4%AB%E7%BE%85" class="mw-redirect" title="於夫罗">於夫罗</a>等，东郡遂告安定。
</p><p>夏，<a href="/wiki/%E9%9D%92%E5%B7%9E" class="mw-redirect" title="青州">青州</a>的百万<a href="/wiki/%E9%BB%83%E5%B7%BE%E8%BB%8D" title="黄巾军">黄巾</a>大军入侵<a href="/wiki/%E5%85%96%E5%B7%9E%E4%B9%8B%E6%88%98" title="兖州之战">兖州</a>。兖州刺史<a href="/wiki/%E5%8A%89%E5%B2%B1" title="刘岱">刘岱</a>不听济北相鲍信劝阻，与黄巾军交战，结果被杀，举州惊恐。曹操部属<a href="/wiki/%E9%99%B3%E5%AE%AE" class="mw-redirect" title="陈宫">陈宫</a>前往<a href="/wiki/%E6%98%8C%E9%82%91" class="mw-disambig" title="昌邑">昌邑</a>，向别驾、治中推荐曹操继任。鲍信心中亦有同样想法，于是与州吏万潜等到东郡迎接太守曹操，推举他担任兖州牧。后来与黄巾军战于<a href="/wiki/%E5%AF%BF%E5%BC%A0%E5%8E%BF" title="寿张县">寿张</a>以东，初期失利，后曹操即起补救，加强训练，赏罚严格，又不断使用奇兵诡计，昼夜进攻，终于逼退黄巾军。然而鲍信在乱军中战死，曹操重金寻鲍信尸体不得，只好雕刻其木像安葬祭拜。之后，曹操追击黄巾直到<a href="/wiki/%E6%BF%9F%E5%8C%97%E5%9C%8B" class="mw-redirect" title="济北国">济北国</a>，黄巾军眼见退无可退，遂全体投降，其中有士兵三十余万人，眷属老幼约一百万人。曹操遴选其精锐，组成大名鼎鼎的“青州兵”。
</p><p>与此同时，汉献帝下诏使<a href="/wiki/%E9%87%91%E5%B0%9A" class="mw-redirect" title="金尚">金尚</a>为兖州刺史，曹操在金尚要赴任之际，率军攻击，金尚只好投奔袁术。
</p><p>当时，袁绍和袁术反目成仇，双方拉结人马，袁绍找上了<a href="/wiki/%E8%8D%8A%E5%B7%9E%E5%88%BA%E5%8F%B2%E9%83%A8" title="荆州刺史部">荆州</a><a href="/wiki/%E5%8A%89%E8%A1%A8" class="mw-redirect" title="刘表">刘表</a>，而袁术则找上<a href="/wiki/%E5%85%AC%E5%AD%AB%E7%93%9A" class="mw-redirect" title="公孙瓒">公孙瓒</a>、<a href="/wiki/%E9%99%B6%E8%AC%99" title="陶谦">陶谦</a>。作为袁绍盟友的曹操，帮助袁绍打败屯驻<a href="/wiki/%E9%AB%98%E5%94%90" class="mw-redirect" title="高唐">高唐</a>的<a href="/wiki/%E5%8A%89%E5%82%99" class="mw-redirect" title="刘备">刘备</a>，屯驻<a href="/wiki/%E5%B9%B3%E5%8E%9F%E5%9C%8B" class="mw-redirect" title="平原国">平原</a>的<a href="/wiki/%E5%96%AE%E7%B6%93" title="单经">单经</a>，屯驻<a href="/w/index.php?title=%E7%99%BC%E5%B9%B2&amp;action=edit&amp;redlink=1" class="new" title="发干（页面不存在）">发干</a>的陶谦等。
</p><p>初平四年(<a href="/wiki/193%E5%B9%B4" title="193年">193年</a>)，曹操屯军<a href="/wiki/%E9%84%84%E5%9F%8E" class="mw-redirect" title="鄄城">鄄城</a>。此时刘表截断了盘踞在<a href="/wiki/%E5%8D%97%E9%99%BD%E9%83%A1" title="南阳郡">南阳</a>的袁术其粮道，袁术受不了如此压力，率军北上，打算进占兖州。联络了黑山贼余党以及於夫罗，屯驻封丘，并派遣将领<a href="/w/index.php?title=%E5%8A%89%E8%A9%B3&amp;action=edit&amp;redlink=1" class="new" title="刘详（页面不存在）">刘详</a>驻扎匡亭。曹操初兵攻击刘详，袁术来救，为曹操所败，曹操乘胜包围封丘，还没包围完成，袁术突围，退驻襄邑，曹操追击，连战连胜，最后袁术退入<a href="/wiki/%E4%B9%9D%E6%B1%9F%E9%83%A1" title="九江郡">九江郡</a>(位在扬州)，曹操因此回军<a href="/wiki/%E5%AE%9A%E9%99%B6" class="mw-redirect" title="定陶">定陶</a>。(<a href="/wiki/%E5%8C%A1%E4%BA%AD%E4%B9%8B%E6%88%B0" class="mw-redirect" title="匡亭之战">匡亭之战</a>)
</p><p>秋，陶谦攻打兖州东部<a href="/wiki/%E6%B3%B0%E5%B1%B1%E9%83%A1" title="泰山郡">泰山郡</a>，使得曹操父亲曹嵩被杀。对于曹嵩之死，存在争议。<sup id="cite_ref-28" class="reference"><a href="#cite_note-28">&#91;27&#93;</a></sup>为此事，曹操开始攻击徐州牧陶谦，并得到袁绍相助<sup id="cite_ref-29" class="reference"><a href="#cite_note-29">&#91;28&#93;</a></sup>。曹操打到彭城，陶谦不敌退保<a href="/wiki/%E9%83%AF" class="mw-disambig" title="郯">郯县</a>，曹操在<a href="/wiki/%E5%BE%90%E5%B7%9E" class="mw-redirect" title="徐州">徐州</a>大屠杀<sup id="cite_ref-上_30-0" class="reference"><a href="#cite_note-上-30">&#91;29&#93;</a></sup><sup class="reference" style="white-space:nowrap;">:33</sup>。《<a href="/wiki/%E5%BE%8C%E6%BC%A2%E6%9B%B8" class="mw-redirect" title="后汉书">后汉书</a>》对此事描录“凡杀男女数十万人，鸡犬无余，<a href="/wiki/%E6%B3%97%E6%B0%B4_(%E6%B2%B3%E6%B5%81)" class="mw-redirect" title="泗水 (河流)">泗水</a>为之不流<sup id="cite_ref-31" class="reference"><a href="#cite_note-31">&#91;30&#93;</a></sup>”。
</p><p><a href="/wiki/%E8%88%88%E5%B9%B3" class="mw-disambig" title="兴平">兴平</a>元年(<a href="/wiki/194%E5%B9%B4" title="194年">194年</a>)，曹操以<a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a>、<a href="/wiki/%E7%A8%8B%E6%98%B1" title="程昱">程昱</a>留守，再攻陶谦，进逼<a href="/wiki/%E6%9D%B1%E6%B5%B7%E9%83%A1" title="东海郡">东海</a>、<a href="/wiki/%E7%90%85%E9%82%AA%E9%83%A1" title="琅邪郡">琅邪</a>，并在剡县大破前来帮忙陶谦的刘备，吓得陶谦差点逃回<a href="/wiki/%E4%B8%B9%E9%99%BD%E9%83%A1" class="mw-redirect" title="丹阳郡">丹阳</a>。就在此时，张邈因为恐惧曹操将为袁绍杀死自己，而陈宫则因为<a href="/wiki/%E9%82%8A%E8%AE%93" title="边让">边让</a>被杀而心生恐惧，于是两人联合从事中郎<a href="/wiki/%E8%A8%B1%E6%B1%9C" title="许汜">许汜</a>、<a href="/wiki/%E7%8E%8B%E6%A5%B7" class="mw-disambig" title="王楷">王楷</a>以及张邈弟<a href="/wiki/%E5%BC%B5%E8%B6%85" class="mw-disambig" title="张超">张超</a>等，奉迎<a href="/wiki/%E5%91%82%E5%B8%83" class="mw-redirect" title="吕布">吕布</a>成为兖州牧。吕布占据濮阳，兖州郡县大部分都响应，等曹操回军时，根据地只剩下鄄城、<a href="/wiki/%E8%8C%83%E7%B8%A3" class="mw-redirect" title="范县">范</a>、<a href="/wiki/%E6%9D%B1%E9%98%BF" class="mw-redirect mw-disambig" title="东阿">东阿</a>三县。
</p><p>曹操和吕布交战于濮阳，濮阳豪门<a href="/wiki/%E7%94%B0" class="mw-disambig" title="田">田</a>氏作为内应，大开城门迎接曹操。曹操焚烧东门，誓言绝不退出，但被吕布反攻大败，出奔。吕布的一名军官，抓住曹操，却不认识曹操，反而问曹操在哪里，曹操回答：“骑马逃走那个就是曹操。”军官相信而放掉曹操，曹操才因此逃过一劫。
</p><p>曹操回营后，再度组织进攻，双方再战于濮阳，对峙一百余天，双方粮秣用尽，于是各自撤退。在这危急时刻，曹操曾想投奔袁绍，但被程昱劝阻，曹操这才打消念头，但还是亲自前往袁绍处，借了五千士兵回兖州继续和吕布作战<sup id="cite_ref-32" class="reference"><a href="#cite_note-32">&#91;31&#93;</a></sup>。
</p><p>兴平二年(<a href="/wiki/195%E5%B9%B4" title="195年">195年</a>)，曹操在<a href="/wiki/%E9%89%85%E9%87%8E" class="mw-redirect" title="钜野">钜野</a>大败吕布部将<a href="/wiki/%E8%96%9B%E8%98%AD" title="薛兰">薛兰</a>、<a href="/wiki/%E6%9D%8E%E5%B0%81" title="李封">李封</a>等，吕布与陈宫卷土重来，双方遭遇，曹操兵全出去收割小麦，只剩一千余人，于是曹操设伏，吕布发现敌人单薄，轻装突击，曹操伏兵出击，大败吕布，乘胜攻取定陶，分兵收复诸县，吕布逃奔徐州。后，曹操围<a href="/wiki/%E9%9B%8D%E4%B8%98" class="mw-redirect" title="雍丘">雍丘</a>，城破，夷张超三族。就在此时，汉献帝封曹操为兖州牧。曹操受封兖州牧后，向汉献帝进贡梨、椑、枣各二箱<sup id="cite_ref-33" class="reference"><a href="#cite_note-33">&#91;32&#93;</a></sup><sup id="cite_ref-34" class="reference"><a href="#cite_note-34">&#91;33&#93;</a></sup>。曹操在兖州鏖战四年，总算得到了朝廷的承认，也扎实地站稳了其第一个领地。
</p>
<h3><span id=".E5.A5.89.E5.A4.A9.E5.AD.90.E4.BB.A5.E4.BB.A4.E4.B8.8D.E8.87.A3.EF.BC.88195.E5.B9.B4-197.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="奉天子以令不臣（195年-197年）"><a href="/wiki/%E6%9B%B9%E6%93%8D%E8%BF%8E%E5%A4%A9%E5%AD%90" title="曹操迎天子">奉天子以令不臣</a>（195年-197年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=6" title="编辑章节：奉天子以令不臣（195年-197年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<div class="thumb tright"><div class="thumbinner" style="width:202px;"><a href="/wiki/File:Death_of_Consort_Dong.png" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Death_of_Consort_Dong.png/200px-Death_of_Consort_Dong.png" decoding="async" width="200" height="298" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Death_of_Consort_Dong.png/300px-Death_of_Consort_Dong.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Death_of_Consort_Dong.png/400px-Death_of_Consort_Dong.png 2x" data-file-width="2345" data-file-height="3498" /></a>  <div class="thumbcaption"><div class="magnify"><a href="/wiki/File:Death_of_Consort_Dong.png" class="internal" title="放大"></a></div>图画中的曹操</div></div></div>
<p>195年七月，李傕与郭汜为了争权夺利，内斗不断，汉献帝趁机逃出长安，进驻<a href="/wiki/%E5%AE%89%E9%82%91" class="mw-redirect" title="安邑">安邑</a>。建安元年（196年），曹操听从谋士<a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a>、<a href="/wiki/%E6%AF%9B%E7%8E%A0" title="毛玠">毛玠</a>建议<sup id="cite_ref-35" class="reference"><a href="#cite_note-35">&#91;34&#93;</a></sup><sup id="cite_ref-36" class="reference"><a href="#cite_note-36">&#91;35&#93;</a></sup>，前往洛阳，迎接皇帝。
</p><p>虽然汉献帝（或其掌权之臣）对曹操仍有疑虑，但是曹操势力击破黄巾军，表现出关心社稷的忠心。由于<a href="/wiki/%E4%BA%AC%E5%B8%AB" class="mw-redirect mw-disambig" title="京师">京师</a><a href="/wiki/%E6%B4%9B%E9%98%B3" class="mw-redirect" title="洛阳">洛阳</a>被<a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a>破坏，残破不堪，汉室于八月庚午日（10月7日）迁都至<a href="/wiki/%E9%A2%8D%E5%B7%9D%E9%83%A1" title="颍川郡">颍川郡</a><a href="/wiki/%E8%A8%B1%E6%98%8C" class="mw-redirect" title="许昌">许县</a>。曹操于十一月丙戌日（197年1月1日）被任命为<a href="/wiki/%E5%8F%B8%E7%A9%BA" title="司空">司空</a>，封武平侯，仍领兖州牧，开始掌控东汉朝廷的军政大权。<sup id="cite_ref-37" class="reference"><a href="#cite_note-37">&#91;36&#93;</a></sup>
</p><p>早在兖州时期，曹操就开始打算和袁绍决裂<sup id="cite_ref-38" class="reference"><a href="#cite_note-38">&#91;37&#93;</a></sup>。曹操控制汉献帝后，让献帝下诏书谴责袁绍地广兵多而树立党羽，不闻勤王之师而但擅相讨伐<sup id="cite_ref-39" class="reference"><a href="#cite_note-39">&#91;38&#93;</a></sup>。袁绍不服，上书辩解。曹操为了安抚<a href="/wiki/%E5%86%80%E5%B7%9E" class="mw-redirect" title="冀州">冀州</a><a href="/wiki/%E5%B7%9E%E7%89%A7" class="mw-redirect" title="州牧">牧</a>袁绍，上表汉献帝，封其为<a href="/wiki/%E5%A4%AA%E5%B0%89" title="太尉">太尉</a>。袁绍又不肯位列曹操之下，甚至被曹操背盟举动所激怒，说；“曹操有几次都快没命了，我每次都救他，现在曹操忘恩负义，居然挟天子以令我吗？！”<sup id="cite_ref-40" class="reference"><a href="#cite_note-40">&#91;39&#93;</a></sup>。最后曹操让汉献帝封袁绍为大将军<sup id="cite_ref-41" class="reference"><a href="#cite_note-41">&#91;40&#93;</a></sup>。袁绍眼见曹操控制皇帝，借口许都潮湿，洛阳残破，要曹操迁都靠近袁绍控制区的<a href="/wiki/%E9%84%84%E5%9F%8E%E5%8E%BF" title="鄄城县">鄄城</a>，曹操不同意<sup id="cite_ref-42" class="reference"><a href="#cite_note-42">&#91;41&#93;</a></sup>。
</p>
<h3><span id=".E5.BE.81.E8.AE.A8.E5.9B.9B.E6.96.B9.EF.BC.88197.E5.B9.B4-199.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="征讨四方（197年-199年）">征讨四方（197年-199年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=7" title="编辑章节：征讨四方（197年-199年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<div class="thumb tright"><div class="thumbinner" style="width:200px;"><a href="/wiki/File:Cao_Cao_statue.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Cao_Cao_statue.jpg/198px-Cao_Cao_statue.jpg" decoding="async" width="198" height="264" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Cao_Cao_statue.jpg/297px-Cao_Cao_statue.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Cao_Cao_statue.jpg/396px-Cao_Cao_statue.jpg 2x" data-file-width="1536" data-file-height="2048" /></a>  <div class="thumbcaption"><div class="magnify"><a href="/wiki/File:Cao_Cao_statue.jpg" class="internal" title="放大"></a></div>曹操雕像在湖北省武汉市</div></div></div>
<p>197年，曹操征讨南阳郡的<a href="/wiki/%E5%BC%B5%E7%B9%A1" title="张绣">张绣</a>，张绣举众投降，之后因为曹操纳张绣叔父<a href="/wiki/%E5%BC%B5%E6%BF%9F_(%E6%AD%A6%E5%A8%81)" title="张济 (武威)">张济</a>之妻邹氏，张绣对这件事感到十分痛恨，曹操得知后密谋要杀害张绣。由于计划泄漏，张绣袭击曹操，曹操在长子<a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a>、侄子<a href="/wiki/%E6%9B%B9%E5%AE%89%E6%B0%91" title="曹安民">曹安民</a>与校尉<a href="/wiki/%E5%85%B8%E9%9F%8B" class="mw-redirect" title="典韦">典韦</a>殿后下逃亡，曹昂、曹安民与典韦阵亡。此后，曹操又两度攻击张绣，都没有彻底击破。两年后，张绣接受谋士<a href="/wiki/%E8%B3%88%E8%A9%A1" class="mw-redirect" title="贾诩">贾诩</a>的建议，向曹操投降，曹操才取得对荆州北部的控制，并且消除了许都南面的威胁。
</p><p>198年十二月，曹操用荀攸、郭嘉的计策，开决泗、沂二河之水灌入<a href="/wiki/%E4%B8%8B%E9%82%B3" title="下邳">下邳</a>，最后生擒处死吕布、陈宫与高顺，收降<a href="/wiki/%E5%BC%A0%E8%BE%BD" class="mw-redirect" title="张辽">张辽</a>，把徐州纳入势力范围。199年，曹操派<a href="/wiki/%E5%8F%B2%E6%B8%99" title="史涣">史涣</a>、<a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>、<a href="/wiki/%E4%BA%8E%E7%A6%81" title="于禁">于禁</a>和<a href="/wiki/%E5%BE%90%E6%99%83" title="徐晃">徐晃</a>击破<a href="/wiki/%E5%BC%B5%E6%A5%8A_(%E6%9D%B1%E6%BC%A2)" title="张杨 (东汉)">张杨</a>旧部<a href="/wiki/%E7%9C%AD%E5%9B%BA" title="眭固">眭固</a>，取得河内郡，把势力范围扩张到黄河以北。同年六月，穷途末路的<a href="/wiki/%E8%A2%81%E6%9C%AF" title="袁术">袁术</a>病死于寿春，其部下向曹操投降，<a href="/wiki/%E6%B7%AE%E5%8D%97" class="mw-redirect" title="淮南">淮南</a>之地尽归曹操之手。
</p>
<h3><span id=".E5.AE.98.E6.B8.A1.E4.B9.8B.E6.88.98.E4.B8.8E.E7.BB.9F.E4.B8.80.E5.8C.97.E6.96.B9.EF.BC.88200.E5.B9.B4-207.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="官渡之战与统一北方（200年-207年）"><a href="/wiki/%E5%AE%98%E6%B8%A1%E4%B9%8B%E6%88%98" title="官渡之战">官渡之战</a>与统一北方（200年-207年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=8" title="编辑章节：官渡之战与统一北方（200年-207年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>200年正月，<a href="/wiki/%E8%BD%A6%E9%AA%91%E5%B0%86%E5%86%9B" class="mw-redirect" title="车骑将军">车骑将军</a><a href="/wiki/%E8%91%A3%E6%89%BF" title="董承">董承</a>与左将军<a href="/wiki/%E5%88%98%E5%A4%87" title="刘备">刘备</a>、长水校尉<a href="/wiki/%E7%A7%8D%E8%BE%91" title="种辑">种辑</a>、将军<a href="/wiki/%E5%90%B4%E5%AD%90%E5%85%B0" title="吴子兰">吴子兰</a>、<a href="/wiki/%E7%8E%8B%E5%AD%90%E6%9C%8D" title="王子服">王子服</a>等人自称收到汉献帝的衣带诏，密谋诛杀曹操，事情败露后被曹操杀害，夷灭三族，怀孕的董贵人也被绞杀。在外领兵的刘备听说后斩杀<a href="/wiki/%E8%BD%A6%E8%83%84" class="mw-redirect" title="车胄">车胄</a>，统领徐州。不久，曹操攻下徐州，刘备逃到冀州投奔袁绍。
</p><p>二月开始，曹操和袁绍展开一系列的会战，史称<a href="/wiki/%E5%AE%98%E6%B8%A1%E4%B9%8B%E6%88%B0" class="mw-redirect" title="官渡之战">官渡之战</a>。谋士<a href="/wiki/%E6%B2%AE%E6%8E%88" title="沮授">沮授</a>建议袁绍采取持久战略不被采纳，而<a href="/wiki/%E8%AE%B8%E6%94%B8" class="mw-redirect" title="许攸">许攸</a>建议袁绍派兵袭击许都亦不被接受。十月，战事处入僵局之时，袁绍谋士许攸因为袁绍和他多次不和，许攸家属因为犯罪被袁绍处罚，许攸对袁绍怀恨在心于是投奔曹操，向曹操献策，偷袭袁绍的粮草囤积地<a href="/wiki/%E7%83%8F%E5%B7%A2" class="mw-disambig" title="乌巢">乌巢</a>。曹操采纳，因而扭转了战局。<a href="/wiki/%E5%BC%A0%E9%83%83" class="mw-redirect" title="张郃">张郃</a>向袁绍建议派大军救援乌巢，但是袁绍只派轻骑去救援。乌巢守将淳于琼对曹军未先加以防范，结果<a href="/wiki/%E4%B9%90%E8%BF%9B" class="mw-redirect" title="乐进">乐进</a>率军攻陷乌巢，烧掉袁绍所有的军粮，俘虏斩杀淳于琼。乌巢沦陷之后袁绍兵败逃回邺城，张郃、高览投降曹操，沮授因为拒绝投降而被处死。202年五月，袁绍去世，他最喜欢的三子<a href="/wiki/%E8%A2%81%E5%B0%9A" title="袁尚">袁尚</a>继承<a href="/wiki/%E5%A4%A7%E5%B0%86%E5%86%9B" class="mw-disambig" title="大将军">大将军</a>、冀州牧之位，与兄长<a href="/wiki/%E8%A2%81%E8%B0%AD" class="mw-redirect" title="袁谭">袁谭</a>内斗不断。
</p><p>204年，曹操趁袁氏兄弟内斗的机会，发兵攻下邺城，诛杀<a href="/wiki/%E5%AF%A9%E9%85%8D" title="审配">审配</a>，自领冀州牧，把自己的据点北迁到<a href="/wiki/%E5%86%80%E5%B7%9E" class="mw-redirect" title="冀州">冀州</a><a href="/wiki/%E9%82%BA%E5%9F%8E" class="mw-redirect" title="邺城">邺城</a><sup id="cite_ref-43" class="reference"><a href="#cite_note-43">&#91;42&#93;</a></sup>，政令军队此后皆从此出，只是在<a href="/wiki/%E5%BB%BA%E5%AE%89%E5%8C%BA" title="建安区">许县</a>留有个别官吏监视汉献帝<sup id="cite_ref-44" class="reference"><a href="#cite_note-44">&#91;43&#93;</a></sup>。205年攻下<a href="/wiki/%E9%9D%92%E5%B7%9E" class="mw-redirect" title="青州">青州</a>，诛杀袁谭与<a href="/wiki/%E9%83%AD%E5%9B%BE" class="mw-redirect" title="郭图">郭图</a>。206年，平定<a href="/wiki/%E5%B9%B6%E5%B7%9E" title="并州">并州</a><a href="/wiki/%E9%AB%98%E5%B9%B2" class="mw-disambig" title="高干">高干</a>的叛乱。207年，曹操征讨<a href="/wiki/%E4%B9%8C%E6%A1%93" title="乌桓">乌桓</a>，诛杀蹋顿
，谋士<a href="/wiki/%E9%83%AD%E5%98%89" title="郭嘉">郭嘉</a>病死在行军途中。袁尚、袁熙兵败后逃往<a href="/wiki/%E8%BE%BD%E4%B8%9C" title="辽东">辽东</a>，被太守<a href="/wiki/%E5%85%AC%E5%AD%99%E5%BA%B7" class="mw-redirect" title="公孙康">公孙康</a>所杀。至此，曹操经过七年的战争，彻底消灭袁氏集团，基本统一中国北方。
</p><p>曹操出身寒族，而且与<a href="/wiki/%E9%96%B9%E5%AE%A6" class="mw-redirect" title="阉宦">阉宦</a>有关，虽然深通诗文，但是不以<a href="/wiki/%E5%84%92%E5%AE%B6" title="儒家">儒家</a><a href="/wiki/%E7%B6%93%E5%AD%B8" class="mw-redirect" title="经学">经学</a>为务，与当时服膺经学的经学、<a href="/wiki/%E5%A3%AB%E5%A4%A7%E5%A4%AB" title="士大夫">士大夫</a>不同。曹操曾下“求才三令”，强调重才不重德，并以<a href="/wiki/%E6%B3%95%E5%AE%B6" title="法家">法家</a>之术为治，要摧破豪族的儒学。曹操为一代枭雄，不仅得到众多寒族人才支持，也得到部分经学士大夫支持，如<a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a>、<a href="/wiki/%E8%8D%80%E6%94%B8" title="荀攸">荀攸</a>、<a href="/wiki/%E9%92%9F%E7%B9%87" class="mw-redirect" title="钟繇">钟繇</a>，荀彧更为曹操引进不少<a href="/wiki/%E5%A3%AB%E5%A4%A7%E5%A4%AB" title="士大夫">士大夫</a>阶层的人才。<sup id="cite_ref-45" class="reference"><a href="#cite_note-45">&#91;44&#93;</a></sup>
</p>
<h3><span id=".E8.B5.A4.E5.A3.81.E4.B9.8B.E6.88.98.E4.B8.8E.E5.85.B3.E4.B8.AD.E4.B9.8B.E6.88.98.EF.BC.88208.E5.B9.B4-212.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="赤壁之战与关中之战（208年-212年）"><a href="/wiki/%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%98" class="mw-redirect" title="赤壁之战">赤壁之战</a>与关中之战（208年-212年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=9" title="编辑章节：赤壁之战与关中之战（208年-212年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>建安十三年六月癸巳日（208年7月9日），曹操恢复三公制度，被任命为丞相。七月，曹操亲统大军10余万南征<a href="/wiki/%E8%8D%8A%E5%B7%9E_(%E5%8F%A4%E4%BB%A3)" class="mw-redirect" title="荆州 (古代)">荆州</a>，企图先灭<a href="/wiki/%E5%88%98%E8%A1%A8" title="刘表">刘表</a>，再顺<a href="/wiki/%E9%95%BF%E6%B1%9F" title="长江">长江</a>东进，击败<a href="/wiki/%E5%AD%99%E6%9D%83" title="孙权">孙权</a>。八月，荆州牧刘表病亡，次子刘琮请降。九月，<a href="/wiki/%E5%88%98%E5%A4%87" title="刘备">刘备</a>在<a href="/wiki/%E9%95%BF%E5%9D%82%E5%9D%A1%E4%B9%8B%E6%88%98" title="长坂坡之战">长坂坡</a>被曹军重创，逃往<a href="/wiki/%E6%B1%9F%E5%A4%8F%E9%83%A1" title="江夏郡">江夏</a>，派遣<a href="/wiki/%E8%AF%B8%E8%91%9B%E4%BA%AE" title="诸葛亮">诸葛亮</a>出使<a href="/wiki/%E6%9F%B4%E6%A1%91%E5%8E%BF" title="柴桑县">柴桑</a>，与孙权联合。十二月，江东名将<a href="/wiki/%E5%91%A8%E7%91%9C" title="周瑜">周瑜</a>火烧乌林，曹操败于孙权和刘备联军，损失惨重，逃回北方，<a href="/wiki/%E4%B8%89%E5%9B%BD%E9%BC%8E%E7%AB%8B" title="三国鼎立">三国鼎立</a>的雏型初步形成。209年，孙权率军攻打<a href="/wiki/%E5%90%88%E8%82%A5" class="mw-redirect" title="合肥">合肥</a>，却中计退兵。周瑜占领<a href="/wiki/%E6%B1%9F%E9%99%B5" class="mw-redirect" title="江陵">江陵</a>与<a href="/wiki/%E5%A4%B7%E9%99%B5" class="mw-redirect" title="夷陵">夷陵</a>，守将曹仁、徐晃、乐进等人逃往<a href="/wiki/%E8%A5%84%E9%98%B3" class="mw-redirect" title="襄阳">襄阳</a>。
</p><p>211年三月，曹操为用兵<a href="/wiki/%E6%B8%AD%E6%B2%B3%E5%B9%B3%E5%8E%9F" title="渭河平原">关中</a>，借口要讨伐<a href="/wiki/%E6%BC%A2%E4%B8%AD" class="mw-redirect" title="汉中">汉中</a><a href="/wiki/%E5%BC%B5%E9%AD%AF" class="mw-redirect" title="张鲁">张鲁</a>，遣<a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>、<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B7%B5" class="mw-redirect" title="夏侯渊">夏侯渊</a>等统率大军与<a href="/wiki/%E9%92%9F%E7%B9%87" class="mw-redirect" title="钟繇">钟繇</a>会师于关中，此举引起起关中诸侯的惊疑，<a href="/wiki/%E9%A6%AC%E8%B6%85" class="mw-redirect" title="马超">马超</a>等十部起兵联合反曹，曹操依<a href="/wiki/%E8%B3%88%E8%A9%A1" class="mw-redirect" title="贾诩">贾诩</a>离间之计，引起马超、韩遂等人相互猜疑，一举击溃关中联军，马超等人各自走还凉州。十月，曹操进军<a href="/wiki/%E5%AE%89%E5%AE%9A%E9%83%A1" title="安定郡">安定</a>，杨秋投降。曹操率军撤回，命令夏侯渊督众将继续西征。随后，马超在陇西卷土重来，先后攻下陇西各地，但是最后复夺凉州未成，兵败逃奔汉中。曹军在数年之内逐马超、破韩遂、灭宋建、横扫羌、氐，虎步关右，<a href="/wiki/%E5%87%89%E5%B7%9E" class="mw-redirect" title="凉州">凉州</a>地区基本平定。
</p>
<h3><span id=".E5.B0.81.E5.85.AC.E7.A7.B0.E7.8E.8B.EF.BC.88212.E5.B9.B4-216.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="封公称王（212年-216年）">封公称王（212年-216年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=10" title="编辑章节：封公称王（212年-216年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>建安十七年（212年），汉献帝准许曹操“参拜不名、入朝不趋、剑履上殿”，如汉丞相<a href="/wiki/%E8%90%A7%E4%BD%95" title="萧何">萧何</a>故事。<a href="/wiki/%E8%91%A3%E6%98%AD" title="董昭">董昭</a>等人推举曹操为魏公，<a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a>以忠于汉室的立场提出反对。曹操答应荀彧永不做魏公，但是因此对荀彧不悦，不久荀彧忧愤去世。曹操起兵号称四十万，亲自南征<a href="/wiki/%E5%AD%99%E6%9D%83" title="孙权">孙权</a>。次年（213年）正月，曹军进军濡须口（今安徽<a href="/wiki/%E5%B7%A2%E6%B9%96" title="巢湖">巢湖</a>东南），攻破孙权设在江北的营寨，生擒公孙阳。孙权亲率军七万，前至濡须口抵御曹军，相持月余，各无所获。曹操见孙权军容严整，自己难以取胜，遂撤军北还。五月丙申日（6月16日），汉献帝册封曹操为魏公，其领地广及<a href="/wiki/%E9%AD%8F%E9%83%A1" title="魏郡">魏郡</a>、<a href="/wiki/%E6%B2%B3%E6%9D%B1%E9%83%A1_(%E4%B8%AD%E5%9C%8B)" title="河东郡 (中国)">河东郡</a>、<a href="/wiki/%E6%B2%B3%E5%85%A7%E9%83%A1_(%E4%B8%AD%E5%9C%8B)" title="河内郡 (中国)">河内郡</a>等十个<a href="/wiki/%E9%83%A1" title="郡">郡</a><a href="/wiki/%E5%9B%BD" class="mw-disambig" title="国">国</a>，超过<a href="/wiki/%E8%A5%BF%E6%B1%89" title="西汉">西汉</a>初年的<a href="/wiki/%E5%88%98%E5%A7%93" title="刘姓">刘姓</a><a href="/wiki/%E5%AE%97%E5%AE%A4" title="宗室">宗室</a><a href="/wiki/%E8%97%A9%E7%8E%8B" title="藩王">藩王</a>，更加违背“<a href="/wiki/%E4%B8%83%E5%9B%BD%E4%B9%8B%E4%B9%B1" title="七国之乱">七国之乱</a>”和<a href="/wiki/%E6%8E%A8%E6%81%A9%E4%BB%A4" title="推恩令">推恩令</a>后<a href="/wiki/%E8%AF%B8%E4%BE%AF" title="诸侯">诸侯</a>封地不得超过一<a href="/wiki/%E9%83%A1" title="郡">郡</a>的汉制。
</p><p>建安十九年三月癸未日（214年3月30日）<sup id="cite_ref-46" class="reference"><a href="#cite_note-46">&#91;45&#93;</a></sup>，汉献帝使曹操的魏公位在诸侯王上，改授金玺，赤绂、远游冠。伏皇后数年前曾经写信给父亲<a href="/wiki/%E4%BC%8F%E5%AE%8C" title="伏完">伏完</a>，要他秘密图划铲除曹操，伏完直到去世都不敢动手。后来事情败露，曹操命令<a href="/wiki/%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB" title="御史大夫">御史大夫</a><a href="/wiki/%E9%83%97%E6%85%AE" title="郗虑">郗虑</a>与<a href="/wiki/%E5%B0%9A%E4%B9%A6%E4%BB%A4" title="尚书令">尚书令</a><a href="/wiki/%E5%8D%8E%E6%AD%86" title="华歆">华歆</a>一起统兵入宫逮捕伏皇后。<a href="/wiki/%E4%BC%8F%E5%A3%BD" title="伏寿">伏皇后</a>紧闭门户，披发赤脚藏匿于墙壁之中，被华歆伸手牵出，监禁于掖庭暴室里幽禁而死，所生的两位皇子被鸩酒毒杀，伏氏宗族一百多人亦被处死，曹操之女<a href="/wiki/%E6%9B%B9%E8%8A%82" class="mw-redirect mw-disambig" title="曹节">曹节</a>被立为皇后。
</p><p>215年，曹操进攻<a href="/wiki/%E6%BC%A2%E4%B8%AD" class="mw-redirect" title="汉中">汉中</a>，太守<a href="/wiki/%E5%BC%B5%E9%AD%AF" class="mw-redirect" title="张鲁">张鲁</a>投降。曹操收降张鲁后，取得汉中属地，但是刘备得悉曹操攻降汉中，早晚要南下伐蜀，便和孙权以湘水为界平分<a href="/wiki/%E8%8D%8A%E5%B7%9E" class="mw-redirect mw-disambig" title="荆州">荆州</a>，回师<a href="/wiki/%E7%9B%8A%E5%B7%9E" title="益州">益州</a>。此时曹操没有接受<a href="/wiki/%E5%8A%89%E6%9B%84_(%E4%B8%89%E5%9C%8B)" class="mw-redirect" title="刘晔 (三国)">刘晔</a>的建议<sup id="cite_ref-47" class="reference"><a href="#cite_note-47">&#91;46&#93;</a></sup>，未能趁刘备未站住脚跟之时攻蜀，便班师回朝。
</p><p>建安廿一年四月甲午日（216年5月29日），曹操被封为魏王，加<a href="/wiki/%E4%B9%9D%E9%94%A1" title="九锡">九锡</a>，立<a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>为世子，公然违反<a href="/wiki/%E6%BC%A2%E9%AB%98%E7%A5%96" class="mw-redirect" title="汉高祖">汉高祖</a>所订“非刘氏而王，天下共击之”的<a href="/wiki/%E7%99%BD%E9%A6%AC%E4%B9%8B%E7%9B%9F" title="白马之盟">白马之盟</a>。次年（217年）僭天子礼，设天子旌旗，戴天子旒冕，出入得称警跸，并作泮宫。<a href="/wiki/%E5%8D%81%E6%9C%88" class="mw-redirect mw-disambig" title="十月">十月</a>，再授赐十王冠、二彩带，乘金根车，驾六马，设五时副车。他名义上虽仍为汉臣，实际上掌握等同于皇帝的权力和待遇，权倾朝野，<a href="/wiki/%E6%BC%A2%E6%9C%9D" class="mw-redirect" title="汉朝">汉朝</a>已经名存实亡。曹操任命<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B7%B5" class="mw-redirect" title="夏侯渊">夏侯渊</a>为征西将军、<a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>为征南将军，欲取荆蜀之地。
</p>
<h3><span id=".E5.8D.97.E5.BE.81.E5.AD.99.E6.9D.83.E4.B8.8E.E6.B1.89.E4.B8.AD.E4.B9.8B.E6.88.98.EF.BC.88215.E5.B9.B4-219.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="南征孙权与汉中之战（215年-219年）">南征孙权与<a href="/wiki/%E6%B1%89%E4%B8%AD%E4%B9%8B%E6%88%98" class="mw-redirect" title="汉中之战">汉中之战</a>（215年-219年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=11" title="编辑章节：南征孙权与汉中之战（215年-219年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>215年，曹操打算报复孙权的皖城打击，随即率军伐吴，可惜以失败告终。<a href="/wiki/%E5%AD%AB%E6%AC%8A" class="mw-redirect" title="孙权">孙权</a>率领讹称十万大军进攻<a href="/wiki/%E5%90%88%E8%82%A5" class="mw-redirect" title="合肥">合肥</a>，曹操当时刚刚拿下汉中，不能亲自前往征战，便命令合肥守将<a href="/wiki/%E5%BC%B5%E9%81%BC" title="张辽">张辽</a>、<a href="/wiki/%E6%A8%82%E9%80%B2" title="乐进">乐进</a>、<a href="/wiki/%E6%9D%8E%E5%85%B8" title="李典">李典</a>阻挡进攻，孙权最终攻不下撤兵。216年，曹操拘留<a href="/wiki/%E5%8D%97%E5%8C%88%E5%A5%B4" title="南匈奴">南匈奴</a>单于呼厨泉，派右贤王去卑监国，将南匈奴分成五部，分别安置在朔方、并州、幽州一带，其中左部帅<a href="/wiki/%E5%8A%89%E8%B1%B9_(%E5%8C%88%E5%A5%B4)" title="刘豹 (匈奴)">刘豹</a>就是<a href="/wiki/%E5%8D%81%E5%85%AD%E5%9B%BD" class="mw-redirect" title="十六国">十六国</a>汉赵政权创建者<a href="/wiki/%E5%88%98%E6%B8%8A" class="mw-redirect" title="刘渊">刘渊</a>的父亲。
</p><p>216年冬，曹操再次率军攻打濡须口阵取居巢，217年开始进攻逼退了正在濡须口筑新城的孙权，但后来孙权作出反击，把曹操军击退回居巢，双方进入了胶着阶段。当时连日大雨水涨，孙权驱使水军令魏军将士不安，曹操当时无法打败严防的孙权，也未能穿越长江巢湖，看见形势不利便下令撤军，征战时及归途中大军受瘟疫侵袭死伤者众多。战后，孙权派都尉徐详以重结姻亲为条件向汉朝廷请降，曹操则对徐详表示自己想跨越长江与孙权一起在江东狩猎的意愿，但徐详认为这样只会令江东震荡，委婉拒绝了曹操想乘机进入长江天险的意图，曹操听后大笑，随即接受孙权的请降并结为姻亲。
</p><p>从217年末起，刘备率军大举进攻汉中阳平关，<a href="/wiki/%E6%BC%A2%E4%B8%AD%E4%B9%8B%E6%88%B0" title="汉中之战">汉中之战</a>爆发。218年七月，曹操亲率大军坐镇<a href="/wiki/%E9%95%B7%E5%AE%89" class="mw-redirect" title="长安">长安</a>，同时边塞硝烟再起，曹彰、田豫北征，大破乌桓、<a href="/wiki/%E9%B2%9C%E5%8D%91" title="鲜卑">鲜卑</a>联军。镇守汉中的<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B7%B5" class="mw-redirect" title="夏侯渊">夏侯渊</a>与刘备相峙一年，曹军守将夏侯渊、<a href="/wiki/%E5%BC%B5%E9%83%83" title="张郃">张郃</a>、<a href="/wiki/%E5%BE%90%E6%99%83" title="徐晃">徐晃</a>多次击退刘备军猛烈攻势。
</p><p>219年正月，刘备亲自领军和<a href="/wiki/%E9%BB%83%E5%BF%A0" class="mw-redirect" title="黄忠">黄忠</a>分进合击，于<a href="/wiki/%E5%AE%9A%E8%BB%8D%E5%B1%B1" class="mw-redirect" title="定军山">定军山</a>斩杀<a href="/wiki/%E5%BE%81%E8%A5%BF%E5%B0%87%E8%BB%8D" class="mw-redirect" title="征西将军">征西将军</a><a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B7%B5" class="mw-redirect" title="夏侯渊">夏侯渊</a>。至此汉中为刘备取得，同年三月曹操亲自挥军欲夺回，一度召集抽调镇守北方的<a href="/wiki/%E6%9B%B9%E5%BD%B0" title="曹彰">曹彰</a>二十万大军增援，但是都为刘备所败，曹军无功而返，刘备便派<a href="/wiki/%E5%8A%89%E5%B0%81" title="刘封">刘封</a>、<a href="/wiki/%E9%BB%83%E5%BF%A0" class="mw-redirect" title="黄忠">黄忠</a>、<a href="/wiki/%E8%B6%99%E9%9B%B2" class="mw-redirect" title="赵云">赵云</a>等将昼夜不停攻击曹军。至五月曹操便撤退至长安，且身体已感觉不适<sup id="cite_ref-48" class="reference"><a href="#cite_note-48">&#91;47&#93;</a></sup>。刘备攻下<a href="/wiki/%E6%88%BF%E9%99%B5" class="mw-redirect" title="房陵">房陵</a>，派刘封顺<a href="/wiki/%E6%B2%94%E6%B0%B4" class="mw-redirect" title="沔水">沔水</a>攻占<a href="/wiki/%E4%B8%8A%E5%BA%B8" class="mw-redirect" title="上庸">上庸</a>。相传此战为“鸡肋”一词的出处<sup id="cite_ref-49" class="reference"><a href="#cite_note-49">&#91;48&#93;</a></sup>。
</p>
<h3><span id=".E6.A8.8A.E5.9F.8E.E4.B9.8B.E6.88.98.EF.BC.88219.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="樊城之战（219年）"><a href="/wiki/%E6%A8%8A%E5%9F%8E%E4%B9%8B%E6%88%98" class="mw-redirect" title="樊城之战">樊城之战</a>（219年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=12" title="编辑章节：樊城之战（219年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>219年七月，刘备在汉中自立为汉中王，封<a href="/wiki/%E9%97%9C%E7%BE%BD" class="mw-redirect" title="关羽">关羽</a>为<a href="/wiki/%E5%89%8D%E5%B0%86%E5%86%9B" title="前将军">前将军</a>。关羽起荆襄之兵大举北伐<a href="/wiki/%E8%A5%84%E6%A8%8A" class="mw-redirect" title="襄樊">襄樊</a>，进一步围困曹军大将<a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>、<a href="/wiki/%E6%BB%BF%E5%AF%B5" title="满宠">满宠</a>的残军于<a href="/wiki/%E6%A8%8A%E5%9F%8E" class="mw-redirect" title="樊城">樊城</a>，史称<a href="/wiki/%E6%A8%8A%E5%9F%8E%E4%B9%8B%E6%88%B0" title="樊城之战">樊城之战</a>。<sup id="cite_ref-50" class="reference"><a href="#cite_note-50">&#91;49&#93;</a></sup>曹操派<a href="/wiki/%E5%B7%A6%E5%B0%87%E8%BB%8D" title="左将军">左将军</a><a href="/wiki/%E4%BA%8E%E7%A6%81" title="于禁">于禁</a>援救，适逢汉水暴涨，淹没于禁七军，汉军乘势以水军攻打，活捉于禁。于禁向关羽投降，<a href="/wiki/%E9%BE%90%E5%BE%B7" title="庞德">庞德</a>被俘虏后不降遭斩，关羽并另遣军队包围襄阳，一时之间威震华夏。当时曹操治下许多州郡的叛军早已受关羽遥控。<sup id="cite_ref-51" class="reference"><a href="#cite_note-51">&#91;50&#93;</a></sup>
</p><p>同年十月，曹操来到洛阳，欲迁都以避其锋芒，<a href="/wiki/%E5%8F%B8%E9%A6%AC%E6%87%BF" class="mw-redirect" title="司马懿">司马懿</a>、<a href="/wiki/%E8%94%A3%E6%BF%9F" title="蒋济">蒋济</a>等人劝阻<sup id="cite_ref-52" class="reference"><a href="#cite_note-52">&#91;51&#93;</a></sup>，认为孙权必然不愿看到关羽坐大。孙权果然自请袭击关羽后方，曹操并召集驻守<a href="/wiki/%E5%90%88%E8%82%A5" class="mw-redirect" title="合肥">合肥</a>与孙权对峙的<a href="/wiki/%E5%BC%B5%E9%81%BC" title="张辽">张辽</a>军队、在汉中监视巴蜀的<a href="/wiki/%E5%BE%90%E6%99%83" title="徐晃">徐晃</a>军队等，并且亲自由洛阳领军往樊城救援。
</p><p>曹操又命人把孙权偷袭荆州的消息用箭射到关羽和樊城守将曹仁处，曹军士气大振，而关羽进退失据。<sup id="cite_ref-53" class="reference"><a href="#cite_note-53">&#91;52&#93;</a></sup>最先抵达樊城的徐晃军，乘着大水稍退，对围城的关羽军展开攻击。曹仁终于突围而出，与徐晃军一同击退关羽。同年十二月，往南退军的关羽被占领江陵的孙权俘虏后处斩，孙权将关羽的首级送到洛阳，曹操以诸侯之礼安葬，襄樊战役结束。
</p>
<h3><span id=".E5.8E.BB.E4.B8.96.EF.BC.88220.E5.B9.B4.EF.BC.89"></span><span class="mw-headline" id="去世（220年）">去世（220年）</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=13" title="编辑章节：去世（220年）">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>219年冬天，孙权上书称臣，陈说<a href="/wiki/%E5%A4%A9%E5%91%BD" title="天命">天命</a>，劝曹操称帝。曹操把孙权来书给群臣观看，<a href="/wiki/%E9%99%88%E7%BE%A4" class="mw-disambig" title="陈群">陈群</a>、<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>和司马懿等人都劝曹操篡位。曹操却不想篡汉自立，他说：“若天命在吾，吾为<a href="/wiki/%E5%91%A8%E6%96%87%E7%8E%8B" title="周文王">周文王</a>矣。”周文王自己并未除灭<a href="/wiki/%E6%AE%B7%E5%95%86" class="mw-redirect" title="殷商">殷商</a>，到了其子<a href="/wiki/%E5%91%A8%E6%AD%A6%E7%8E%8B" title="周武王">周武王</a>才<a href="/wiki/%E6%AD%A6%E7%8E%8B%E5%85%8B%E6%AE%B7" class="mw-redirect" title="武王克殷">克殷</a>。暗示希望由自己的儿子曹丕来取代汉朝，建立新政权。
</p><p>建安二十五年正月廿三日庚子（220年3月15日），曹操病逝于洛阳，享年66岁，<sup id="cite_ref-中華民國中央研究院兩千年中西曆轉換_54-0" class="reference"><a href="#cite_note-中華民國中央研究院兩千年中西曆轉換-54">&#91;53&#93;</a></sup>谥号武王。
</p><p>曹操临死前留下《遗令》<sup id="cite_ref-遗言_55-0" class="reference"><a href="#cite_note-遗言-55">&#91;54&#93;</a></sup>，提倡薄葬。二月廿一日丁卯（4月11日），曹操被安葬于<a href="/wiki/%E9%82%BA%E5%9F%8E" class="mw-redirect" title="邺城">邺城</a>西郊的<a href="/wiki/%E9%AD%8F%E9%AB%98%E9%99%B5" class="mw-redirect" title="魏高陵">高陵</a>，与<a href="/wiki/%E8%A5%BF%E9%96%80%E8%B1%B9" title="西门豹">西门豹</a>祠相近。<sup id="cite_ref-中華民國中央研究院兩千年中西曆轉換_54-1" class="reference"><a href="#cite_note-中華民國中央研究院兩千年中西曆轉換-54">&#91;53&#93;</a></sup>
</p><p>曹操去世后，世子曹丕嗣魏王、丞相、冀州牧之位。不久，夏侯惇、<a href="/wiki/%E7%A8%8B%E6%98%B1" title="程昱">程昱</a>等人也先后去世。同年十月廿九日（12月11日），曹丕代汉，迫使<a href="/wiki/%E6%B1%89%E7%8C%AE%E5%B8%9D" title="汉献帝">汉献帝</a>退位禅让，建立<a href="/wiki/%E6%9B%B9%E9%AD%8F" title="曹魏">曹魏</a>，年号<a href="/wiki/%E9%BB%84%E5%88%9D" title="黄初">黄初</a>，定都洛阳。封刘协为山阳公，追尊曹操为太祖武皇帝。
</p>
<h2><span id=".E6.96.87.E5.AD.B8.E6.88.90.E5.B0.B1"></span><span class="mw-headline" id="文學成就">文学成就</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=14" title="编辑章节：文学成就">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<div class="thumb tright"><div class="thumbinner" style="width:302px;"><a href="/wiki/File:Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG/300px-Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG" decoding="async" width="300" height="130" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG/450px-Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG/600px-Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG 2x" data-file-width="2878" data-file-height="1248" /></a>  <div class="thumbcaption"><div class="magnify"><a href="/wiki/File:Long_Corridor-%E6%9B%B9%E6%93%8D%E8%B5%8B%E8%AF%97.JPG" class="internal" title="放大"></a></div>曹操赋诗</div></div></div>
<div role="note" class="hatnote navigation-not-searchable">参见：<a href="/wiki/%E5%BB%BA%E5%AE%89%E6%96%87%E5%AD%B8" title="建安文学">建安文学</a></div>
<h3><span id=".E9.AB.94.E8.A3.81"></span><span class="mw-headline" id="體裁">体裁</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=15" title="编辑章节：体裁">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操<a href="/wiki/%E8%A9%A9%E6%AD%8C" class="mw-redirect" title="诗歌">诗歌</a>在表现形式上往往有所创新，如“<a href="https://zh.wikisource.org/wiki/%E8%96%A4%E9%9C%B2%E8%A1%8C" class="extiw" title="s:薤露行">薤露行</a>”、“<a href="https://zh.wikisource.org/wiki/%E8%92%BF%E9%87%8C%E8%A1%8C" class="extiw" title="s:蒿里行">蒿里行</a>”，古辞都是杂言，各曲仅为四句，曹操则改用五言来写，各十六句。五言诗以外，又长于四言诗。
</p><p>《蒿里行》原是杂言，曹操却以五言重写，非常成功。四言诗方面，本自《<a href="/wiki/%E8%A9%A9%E7%B6%93" class="mw-redirect" title="诗经">诗经</a>》之后已见衰落，少有佳作，但曹操却继承了《<a href="/wiki/%E5%9C%8B%E9%A2%A8" title="国风">国风</a>》和《<a href="/wiki/%E5%B0%8F%E9%9B%85" class="mw-redirect" title="小雅">小雅</a>》的传统，反映现实，抒发情感。例如：《<a href="https://zh.wikisource.org/wiki/%E7%9F%AD%E6%AD%8C%E8%A1%8C_(%E6%9B%B9%E6%93%8D)" class="extiw" title="s:短歌行 (曹操)">短歌行</a>》、《<a href="/wiki/%E6%AD%A5%E5%87%BA%E5%A4%8F%E9%96%80%E8%A1%8C" title="步出夏门行">步出夏门行</a>》等均是四言诗之佳作，使四言诗重生而再放异彩。
</p><p>此外，曹操还有不少其他文章传世，例如《请追增郭嘉封邑表》、《<a href="/wiki/%E8%AE%93%E7%B8%A3%E8%87%AA%E6%98%8E%E6%9C%AC%E5%BF%97%E4%BB%A4" title="让县自明本志令">让县自明本志令</a>》、《与王修书》、《祀故太尉桥玄文》等，文字质朴，感情流露，流畅率真。
</p>
<h3><span id=".E5.85.A7.E5.AE.B9.E6.80.9D.E6.83.B3"></span><span class="mw-headline" id="內容思想">内容思想</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=16" title="编辑章节：内容思想">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操用旧调旧题，描写新内容。汉<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>诗多着重塑造客观人物形象，曹操的<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>诗却突破诗人自我形象；汉<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>诗以叙事为主，曹操的<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>诗却以抒情为主。他没有形式上模拟<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>，而是学习<a href="/wiki/%E6%B0%91%E6%AD%8C" class="mw-disambig" title="民歌">民歌</a>反映现实创作精神，用旧曲作词，既具有<a href="/wiki/%E6%B0%91%E6%AD%8C" class="mw-disambig" title="民歌">民歌</a>的特色，而又富有自己的创造性。
</p><p>曹操善于以诗歌抒写政治理想和抱负，雄心壮志，诗中充满奋发进取的精神。部分诗中则杂有思忧难忘、人生朝露的消极情绪，还有<a href="/wiki/%E5%AE%BF%E5%91%BD" class="mw-redirect" title="宿命">宿命</a>思想，又写了一些<a href="/wiki/%E9%81%8A%E4%BB%99%E8%A9%A9" title="游仙诗">游仙诗</a>。
</p><p>曹操诗内容大致有三种：反映汉末动乱的现实、统一天下的理想和顽强的进取精神、以及抒发忧思难忘的消极情绪。
</p>
<ul><li>汉末大乱，曹操又南征北讨，接触的社会面非常广大，故多有亲身经验和体会如《<a href="https://zh.wikisource.org/wiki/%E8%92%BF%E9%87%8C%E8%A1%8C" class="extiw" title="s:蒿里行">蒿里行</a>》谓汉末战乱的惨象，见百姓悲惨之余又见诗人伤时悯乱的感情。故后人谓曹操乐府“汉末实录，真诗史也。”</li>
<li>曹操对天下具有野心，怀有统一之雄图，《<a href="https://zh.wikisource.org/wiki/%E7%9F%AD%E6%AD%8C%E8%A1%8C_(%E6%9B%B9%E6%93%8D)" class="extiw" title="s:短歌行 (曹操)">短歌行</a>》有谓“周公吐哺，天下归心。”可资明证。其进取之心亦可见出，如《<a href="/wiki/%E9%BE%9C%E9%9B%96%E5%A3%BD" title="龟虽寿">龟虽寿</a>》言之“老骥伏枥，志在千里。”言己虽至晚年仍不弃雄心壮志。</li>
<li>一代枭雄，纵风光一世，亦有星落殒灭之时。曹操对此也感到无能为力，只有作诗感叹，无可奈何。如《短歌行》中“譬如朝露，去日苦多”的感伤，《<a href="https://zh.wikisource.org/wiki/%E7%A7%8B%E8%83%A1%E8%A1%8C_(%E6%9B%B9%E6%93%8D)" class="extiw" title="s:秋胡行 (曹操)">秋胡行</a>》之低沈情绪，《<a href="https://zh.wikisource.org/wiki/%E9%99%8C%E4%B8%8A%E6%A1%91_(%E6%9B%B9%E6%93%8D)" class="extiw" title="s:陌上桑 (曹操)">陌上桑</a>》等游仙作品中都可见他的消极情绪。</li></ul>
<p>曹操的诗，极受<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>影响，现存的诗脱胎自汉乐府民歌。这些诗歌虽用<a href="/wiki/%E6%A8%82%E5%BA%9C" title="乐府">乐府</a>旧题，却不因袭古人诗意，自辟新蹊，不受束缚，而是体现了汉乐府“感于哀乐，缘事而发”的精神。例如：《<a href="https://zh.wikisource.org/wiki/%E8%96%A4%E9%9C%B2%E8%A1%8C" class="extiw" title="s:薤露行">薤露行</a>》、《<a href="https://zh.wikisource.org/wiki/%E8%92%BF%E9%87%8C%E8%A1%8C" class="extiw" title="s:蒿里行">蒿里行</a>》原是挽歌，曹操却以之悯时悼乱。《<a href="https://zh.wikisource.org/wiki/%E6%AD%A5%E5%87%BA%E5%A4%8F%E9%97%A8%E8%A1%8C_(%E6%9B%B9%E6%93%8D)" class="extiw" title="s:步出夏门行 (曹操)">步出夏门行</a>》原是感叹人生无常，须及时行乐的曲调，曹操却以之抒述一统天下的抱负及北征归来所见的壮景。可见曹操富有创新精神的民歌，开启了<a href="/wiki/%E5%BB%BA%E5%AE%89%E6%96%87%E5%AD%B8" title="建安文学">建安文学</a>的新风，也影响到后来的<a href="/wiki/%E6%9D%9C%E7%94%AB" title="杜甫">杜甫</a>、<a href="/wiki/%E7%99%BD%E5%B1%85%E6%98%93" title="白居易">白居易</a>等人。
</p>
<h3><span id=".E8.AA.9E.E8.A8.80.E9.A2.A8.E6.A0.BC"></span><span class="mw-headline" id="語言風格">语言风格</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=17" title="编辑章节：语言风格">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操诗语言多古朴质直，少华美词藻；情调悲壮，激昂慷慨；音调昂扬，气魄雄伟；形象鲜明，善用比兴。
</p><p>曹操诗文辞简朴，直抒襟怀，慷慨悲凉而沉郁雄健，华美辞藻并不常见，惟形象鲜明，如《<a href="https://zh.wikisource.org/wiki/%E8%A7%80%E6%BB%84%E6%B5%B7" class="extiw" title="s:观沧海">观沧海</a>》一诗：“东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起，日月之行，若出其中，星汉灿烂，若出其里。”寥寥数笔，即能以辽阔的沧海景象，表现诗人胸襟，不加润饰。
</p>
<h2><span id=".E5.AE.B9.E8.B2.8C"></span><span class="mw-headline" id="容貌">容貌</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=18" title="编辑章节：容貌">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul><li>《世说新语》容止第十四注引《魏氏春秋》：武王姿貌短小，而神明英发。</li>
<li>《世说新语》容止第十四：魏武将见匈奴使，自以形陋，不足雄远国，使崔季珪代，帝自捉刀立床头。既毕，令间谍问曰：“魏王何如？”匈奴使答曰：“魏王雅望非常，然床头捉刀人，此乃英雄也。”魏武闻之，追杀此使。</li>
<li>曹操小字阿瞒。《说文解字》卷五目部：瞒，平目也。</li></ul>
<h2><span id=".E6.80.A7.E6.A0.BC"></span><span class="mw-headline" id="性格">性格</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=19" title="编辑章节：性格">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul><li>曹操为人聪明能干，但也十分狡猾<sup id="cite_ref-56" class="reference"><a href="#cite_note-56">&#91;55&#93;</a></sup>。起初名声不显，可是也有很多人看好曹操的才华，如<a href="/wiki/%E9%99%B3%E5%A3%BD" class="mw-redirect" title="陈寿">陈寿</a>的“抑可谓非常之人，超世之杰矣”及<a href="/wiki/%E8%A8%B1%E5%8A%AD" title="许劭">许劭</a>的“子治世之能臣，乱世之奸雄”已明显阐述曹操的才能非比常人。也有许多人瞧不起曹操的品德，孙盛曰：魏武于是失政刑矣。易称“明折庶狱”，传有“举直措枉”，庶狱明则国无怨民，枉直当则民无不服，未有征青蝇之浮声，信浸润之谮诉，可以允釐四海，惟清缉熙者也。昔者汉高狱<a href="/wiki/%E8%95%AD%E4%BD%95" class="mw-redirect" title="萧何">萧何</a>，出复相之，玠之一责，永见摈放，二主度量，岂不殊哉 ！</li></ul>
<ul><li>曹操性格严厉，掾属办公如果不合其意，常常被他杖责。而其中唯有<a href="/wiki/%E4%BD%95%E5%A4%94" title="何夔">何夔</a>经常带着毒药，决心如被杖责，宁可<a href="/wiki/%E8%87%AA%E9%B4%86" title="自鸩">自鸩</a>而死也不受侮辱，何夔才终究没有遭受杖刑<sup id="cite_ref-57" class="reference"><a href="#cite_note-57">&#91;56&#93;</a></sup></li></ul>
<ul><li>曹操生性猜忌，得罪过他的人，几乎都被他杀死，例如:<a href="/wiki/%E5%B4%94%E7%90%B0" title="崔琰">崔琰</a>、<a href="/wiki/%E8%A8%B1%E6%94%B8" title="许攸">许攸</a>、<a href="/wiki/%E5%A9%81%E5%9C%AD" title="娄圭">娄圭</a>、<a href="/wiki/%E5%AD%94%E8%9E%8D" title="孔融">孔融</a>、<a href="/wiki/%E6%A5%8A%E4%BF%AE" title="杨修">杨修</a>、<a href="/wiki/%E8%8F%AF%E4%BD%97" class="mw-redirect" title="华佗">华佗</a><sup id="cite_ref-58" class="reference"><a href="#cite_note-58">&#91;57&#93;</a></sup>、<a href="/wiki/%E9%82%8A%E8%AE%93" title="边让">边让</a>、桓邵<sup id="cite_ref-59" class="reference"><a href="#cite_note-59">&#91;58&#93;</a></sup>、<a href="/wiki/%E5%8A%89%E5%8B%B3_(%E6%9D%B1%E6%BC%A2)" title="刘勋 (东汉)">刘勋</a>等人，<a href="/wiki/%E8%B6%99%E5%BD%A5" class="mw-disambig" title="赵彦">赵彦</a>欲亲近汉献帝者亦被杀死。即使没犯错只要威胁到曹操，曹操亦杀之，神童<a href="/wiki/%E5%91%A8%E4%B8%8D%E7%96%91" title="周不疑">周不疑</a>便是最好的例子。<sup id="cite_ref-60" class="reference"><a href="#cite_note-60">&#91;59&#93;</a></sup><a href="/wiki/%E5%BC%B5%E7%B9%A1" title="张绣">张绣</a>兵变复投曹营后八年便病故，不然一般认为张绣若活得够久早晚遭曹操清算。谋士<a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a>由于反对曹操称魏公也被其嫉恨冷落。同时曹操又派下属卢洪、赵达二人担任抚军都尉负责监视军人，大家对卢洪、赵达恨得要死。<sup id="cite_ref-61" class="reference"><a href="#cite_note-61">&#91;60&#93;</a></sup></li></ul>
<ul><li>曹操的性格是有两面性的，从《让县自明本志令》中可以看出曹操有政治智慧，也有性情。这样一份有重要政治意义的纲领性文件却用了非常朴实的语言风格，以及他的遗嘱中很少提及他的政治生涯，很大篇幅都是安排琐碎的家务事，虽说苏东坡曾对此评价“平生奸伪，死见真性”，但是“惟大英雄能本色，是真名士自风流”，可见他的性情。另一方面，他也是奸猾的，他以《让县自明本志令》表明对汉朝的忠心，但实际行动却浑然不同，在相同的实例中可以看出曹操的不同性格。</li></ul>
<ul><li>曹操深通兵法，在战略、战术方面都能应付裕如，常用计略来应付一系列的群雄战争来取胜，曹操甚还为<a href="/wiki/%E5%AD%AB%E6%AD%A6" class="mw-redirect" title="孙武">孙武</a>（孙子）所著作的《<a href="/wiki/%E5%AD%AB%E5%AD%90%E5%85%B5%E6%B3%95" class="mw-redirect" title="孙子兵法">孙子兵法</a>》做过注释。</li></ul>
<ul><li>曹操擅长武艺、<a href="/wiki/%E5%8A%8D%E8%A1%93" class="mw-redirect" title="剑术">剑术</a>，曾在<a href="/wiki/%E5%85%B5%E8%AE%8A" class="mw-redirect" title="兵变">兵变</a>时，用剑杀死数十个乱兵才脱身<sup id="cite_ref-62" class="reference"><a href="#cite_note-62">&#91;61&#93;</a></sup>。甚至有一次偷进<a href="/wiki/%E5%BC%B5%E8%AE%93" class="mw-disambig" title="张让">张让</a>家时被发现，曹操手挥舞<a href="/wiki/%E6%88%9F" title="戟">戟</a>才得以逃跑<sup id="cite_ref-63" class="reference"><a href="#cite_note-63">&#91;62&#93;</a></sup>，曹操也有抱负着野心的态度来面对乱世，如其迎接<a href="/wiki/%E5%8A%89%E5%8D%94" class="mw-redirect" title="刘协">刘协</a>代表其掌控了<a href="/wiki/%E6%BC%A2%E6%9C%9D" class="mw-redirect" title="汉朝">汉朝</a>大势，使到汉献帝<a href="/wiki/%E5%8A%89%E5%8D%94" class="mw-redirect" title="刘协">刘协</a>也没有权力。曹操也是残忍之者，时常<a href="/wiki/%E5%B1%A0%E5%9F%8E" class="mw-redirect" title="屠城">屠城</a><sup id="cite_ref-64" class="reference"><a href="#cite_note-64">&#91;63&#93;</a></sup>，所以曹操杀人亦不手软，坑杀士卒<sup id="cite_ref-65" class="reference"><a href="#cite_note-65">&#91;64&#93;</a></sup>、214年杀害<a href="/wiki/%E4%BC%8F%E5%A3%BD" title="伏寿">皇后</a>，所生的两位皇子亦以毒酒毒杀，伏氏宗族有百多人亦被处死、<sup id="cite_ref-66" class="reference"><a href="#cite_note-66">&#91;65&#93;</a></sup>有孕在身的董贵人也未能幸免<sup id="cite_ref-67" class="reference"><a href="#cite_note-67">&#91;66&#93;</a></sup>。曹操更过度劳役人民<sup id="cite_ref-68" class="reference"><a href="#cite_note-68">&#91;67&#93;</a></sup><sup id="cite_ref-69" class="reference"><a href="#cite_note-69">&#91;68&#93;</a></sup>，以致有时爆发<a href="/wiki/%E8%88%89%E4%BA%8B" title="举事">起义</a>。<sup id="cite_ref-70" class="reference"><a href="#cite_note-70">&#91;69&#93;</a></sup><sup id="cite_ref-71" class="reference"><a href="#cite_note-71">&#91;70&#93;</a></sup><sup id="cite_ref-72" class="reference"><a href="#cite_note-72">&#91;71&#93;</a></sup></li></ul>
<ul><li>曹操妻妾众多，不过娶纳方面并不是毫无一个标准。并其中出名者多自他处改嫁而来。收降<a href="/wiki/%E5%BC%B5%E7%B9%A1" title="张绣">张绣</a>时，收了张绣伯母入<a href="/wiki/%E5%81%B4%E5%AE%A4" class="mw-redirect" title="侧室">侧室</a>，引来张绣不快，曹操得知后于是想杀害张绣，但是由于计划泄漏，引起张绣<a href="/wiki/%E5%85%B5%E8%AE%8A" class="mw-redirect" title="兵变">兵变</a>，其长子<a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a>，侄儿曹安民以及<a href="/wiki/%E5%85%B8%E9%9F%8B" class="mw-redirect" title="典韦">典韦</a>白白地牺牲<sup id="cite_ref-73" class="reference"><a href="#cite_note-73">&#91;72&#93;</a></sup><sup id="cite_ref-74" class="reference"><a href="#cite_note-74">&#91;73&#93;</a></sup>。曹操曾许诺将<a href="/wiki/%E7%A7%A6%E5%AE%9C%E7%A5%BF" title="秦宜禄">秦宜禄</a>前妻<a href="/wiki/%E6%9D%9C%E5%A4%AB%E4%BA%BA_(%E6%9B%B9%E6%93%8D)" class="mw-redirect" title="杜夫人 (曹操)">杜夫人</a>赠与关羽，但见其美色后自纳之，关羽因此心中不安。<sup id="cite_ref-75" class="reference"><a href="#cite_note-75">&#91;74&#93;</a></sup><sup id="cite_ref-76" class="reference"><a href="#cite_note-76">&#91;75&#93;</a></sup>虽说好色，但曹操纳妾实际上是有所标准，综观曹操所收的妻妾，不是<a href="/wiki/%E5%AF%A1%E5%A9%A6" class="mw-redirect" title="寡妇">寡妇</a>，就是别人<a href="/wiki/%E9%9B%A2%E5%A9%9A" class="mw-redirect" title="离婚">休离</a>的前妻，所以曹操才不齿<a href="/wiki/%E5%91%82%E5%B8%83" class="mw-redirect" title="吕布">吕布</a>染指有夫之妇的行为<sup id="cite_ref-77" class="reference"><a href="#cite_note-77">&#91;76&#93;</a></sup>。曹操也很疼爱妻子所带来继子，并不因为非自己所出就有所忌讳<sup id="cite_ref-78" class="reference"><a href="#cite_note-78">&#91;77&#93;</a></sup>曹操死前也留下遗言，要求善待他的夫人们<sup id="cite_ref-遗言_55-1" class="reference"><a href="#cite_note-遗言-55">&#91;54&#93;</a></sup>。</li></ul>
<ul><li>曹操生性节俭，不好华丽。《魏晋世语》记载，曹植之妻崔氏（崔琰侄女）就因穿着过于华丽的衣服违反了禁令，回家后就被曹操<a href="/wiki/%E8%B3%9C%E6%AD%BB" title="赐死">赐死</a>了。</li></ul>
<ul><li>曹操不相信鬼神，在担任<a href="/wiki/%E6%BF%9F%E5%8D%97%E9%83%A1" title="济南郡">济南</a>相期间捣毁<a href="/wiki/%E5%8A%89%E7%AB%A0_(%E5%9F%8E%E9%99%BD%E7%8E%8B)" title="刘章 (城阳王)">城阳景王</a>刘章祠<sup id="cite_ref-79" class="reference"><a href="#cite_note-79">&#91;78&#93;</a></sup>,并且认为坟墓也终将被人<a href="/wiki/%E7%9B%97%E5%A2%93" class="mw-redirect" title="盗墓">盗掘</a>，所以极力提倡丧葬从简，一改汉代奢华之风。曹操曾设立<a href="/wiki/%E7%99%BC%E4%B8%98%E5%B0%87%E8%BB%8D" title="发丘将军">发丘中郎将</a>、<a href="/wiki/%E6%91%B8%E9%87%91%E6%A0%A1%E5%B0%89" title="摸金校尉">摸金校尉</a>等职，专门盗墓掘坟以赚取军费，行事风格非常干脆实际。然而此举乃失德之行，连<a href="/wiki/%E8%A2%81%E7%BB%8D" title="袁绍">袁绍</a>的幕僚<a href="/wiki/%E9%99%88%E7%90%B3_(%E4%B8%89%E5%9B%BD)" title="陈琳 (三国)">陈琳</a>起草讨曹之“檄文”中亦把曹操公然发掘<a href="/wiki/%E5%8A%89%E6%AD%A6_(%E6%A2%81%E7%8E%8B)" title="刘武 (梁王)">汉梁孝王</a>墓列为其罪行之一。<sup id="cite_ref-80" class="reference"><a href="#cite_note-80">&#91;79&#93;</a></sup></li></ul>
<ul><li>曹操喜欢吃鱼，在他的《<a href="https://zh.wikisource.org/wiki/%E5%9B%9B%E6%97%B6%E9%A3%9F%E5%88%B6" class="extiw" title="s:四时食制">四时食制</a>》中提及不少鱼类。在一场宴会中也说过“今日高会，珍羞略备，所少吴松江鲈鱼耳。<sup id="cite_ref-81" class="reference"><a href="#cite_note-81">&#91;80&#93;</a></sup>”</li></ul>
<h2><span id=".E8.BA.AB.E4.B8.96.E4.BA.89.E8.AE.AE"></span><span class="mw-headline" id="身世争议">身世争议</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=20" title="编辑章节：身世争议">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>曹操的父亲曹嵩被宦官曹腾收养，其本来身份一直存在争议。《<a href="/wiki/%E4%B8%89%E5%9B%BD%E5%BF%97" class="mw-redirect" title="三国志">三国志</a>》作者陈寿记载“莫能审其生出本末。”<a href="/wiki/%E5%88%98%E5%AE%8B" title="刘宋">刘宋</a><a href="/wiki/%E8%A3%B4%E6%9D%BE%E4%B9%8B" title="裴松之">裴松之</a>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E5%BF%97%E6%B3%A8" title="三国志注">三国志注</a>》中引用的《<a href="/w/index.php?title=%E6%9B%B9%E7%9E%92%E4%BC%A0&amp;action=edit&amp;redlink=1" class="new" title="曹瞒传（页面不存在）">曹瞒传</a>》和<a href="/wiki/%E9%83%AD%E9%A2%81" title="郭颁">郭颁</a>《<a href="/w/index.php?title=%E4%B8%96%E8%AF%AD&amp;action=edit&amp;redlink=1" class="new" title="世语（页面不存在）">世语</a>》则记载曹嵩本姓<a href="/wiki/%E5%A4%8F%E4%BE%AF%E5%A7%93" title="夏侯姓">夏侯</a>，是<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>的叔父。<sup id="cite_ref-82" class="reference"><a href="#cite_note-82">&#91;81&#93;</a></sup>
</p><p>对于曹嵩出自夏侯氏的记载，<a href="/wiki/%E4%BD%95%E7%84%AF" title="何焯">何焯</a>提出<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>的儿子<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%A5%99" title="夏侯楙">夏侯楙</a>娶了曹操的女儿<a href="/wiki/%E6%B8%85%E6%B2%B3%E5%85%AC%E4%B8%BB" class="mw-disambig" title="清河公主">清河公主</a>，<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B8%8A" title="夏侯渊">夏侯渊</a>的儿子<a href="/wiki/%E5%A4%8F%E4%BE%AF%E8%A1%A1" title="夏侯衡">夏侯衡</a>也娶了曹家的女子，所以这种说法是敌对方东吴的传闻，不可采信。<sup id="cite_ref-83" class="reference"><a href="#cite_note-83">&#91;82&#93;</a></sup><sup id="cite_ref-84" class="reference"><a href="#cite_note-84">&#91;83&#93;</a></sup>而<a href="/wiki/%E6%BD%98%E7%9C%89" title="潘眉">潘眉</a>、<a href="/wiki/%E6%9E%97%E5%9C%8B%E8%B4%8A" title="林国赞">林国赞</a>、<a href="/wiki/%E5%A7%9A%E8%8C%83" class="mw-redirect" title="姚范">姚范</a>和<a href="/wiki/%E8%B5%B5%E4%B8%80%E6%B8%85" class="mw-redirect" title="赵一清">赵一清</a>则认为<a href="/wiki/%E9%99%88%E5%AF%BF" title="陈寿">陈寿</a>将夏侯惇、夏侯渊、<a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>、<a href="/wiki/%E6%9B%B9%E6%B4%AA" title="曹洪">曹洪</a>、<a href="/wiki/%E6%9B%B9%E4%BC%91" title="曹休">曹休</a>、<a href="/wiki/%E6%9B%B9%E7%9C%9F" title="曹真">曹真</a>、<a href="/wiki/%E5%A4%8F%E4%BE%AF%E5%B0%9A" title="夏侯尚">夏侯尚</a>放在同一个列传中，正隐寓夏侯氏是曹魏的宗室，曹操是夏侯氏的子孙<sup id="cite_ref-85" class="reference"><a href="#cite_note-85">&#91;84&#93;</a></sup><sup id="cite_ref-86" class="reference"><a href="#cite_note-86">&#91;85&#93;</a></sup><sup id="cite_ref-87" class="reference"><a href="#cite_note-87">&#91;86&#93;</a></sup>，赵一清还指出曹操把女儿嫁给夏侯楙大概是想掩盖自己的出身，非常地奸诈，<a href="/wiki/%E4%BD%95%E7%84%AF" title="何焯">何焯</a>据此辩证曹操不是夏侯氏的子孙完全是颠倒事实。<sup id="cite_ref-88" class="reference"><a href="#cite_note-88">&#91;87&#93;</a></sup><a href="/wiki/%E6%81%BD%E6%95%AC" title="恽敬">恽敬</a>则认为曹操虽然阴险狡猾，也不应该做出近亲通婚之事。曹氏与夏侯氏世代通婚，而夏侯惇、夏侯渊和曹仁、曹洪、曹休、曹真等是曹魏开国元勋，他们死后，曹爽与夏侯玄陆续被杀，大权归于司马氏，所以陈寿将夏侯氏与曹氏合传，让后人看到曹魏兴衰的缘由，这是陈寿写史书定下的史学法规。<sup id="cite_ref-89" class="reference"><a href="#cite_note-89">&#91;88&#93;</a></sup><a href="/wiki/%E6%B4%AA%E4%BA%AE%E5%90%89" title="洪亮吉">洪亮吉</a>猜测陈寿大概是因为当时世传曹操是夏侯氏的子孙，所以在评论中特别注明夏侯氏和曹氏世代通婚，以表明此说的错误，洪亮吉还认为将《曹瞒传》和《世语》当做信史的人都是不善于读史书的。<sup id="cite_ref-90" class="reference"><a href="#cite_note-90">&#91;89&#93;</a></sup><a href="/wiki/%E5%8A%89%E5%92%B8%E7%82%98" title="刘咸炘">刘咸炘</a>认为即便曹嵩是夏侯氏的子孙，他的后裔也未必不能与夏侯氏通婚，因为两家已经是不同族了，<a href="/wiki/%E9%99%88%E7%9F%AB" class="mw-redirect" title="陈矫">陈矫</a>就是如此。如果曹嵩为夏侯氏的子孙不是丑事，没必要避讳，曹嵩是宦官养子人所共知，曹氏家族也没对此事避讳，不避讳养子而避讳出自夏侯氏是不近人情的，所以此说不足信。刘咸炘认为恽敬所给出的曹氏、夏侯氏合传的解释合理，陈寿评论中曹氏合夏侯氏世代通婚就是他这样立传的理由，洪亮吉所说陈寿意在辨明流言的是非反而曲解了陈寿的意思。<sup id="cite_ref-91" class="reference"><a href="#cite_note-91">&#91;90&#93;</a></sup><a href="/w/index.php?title=%E6%9D%8E%E6%99%AF%E6%98%9F&amp;action=edit&amp;redlink=1" class="new" title="李景星（页面不存在）">李景星</a>认为“莫能审其生出本末”是陈寿揭露曹操家世的丑闻。<sup id="cite_ref-92" class="reference"><a href="#cite_note-92">&#91;91&#93;</a></sup><sup id="cite_ref-93" class="reference"><a href="#cite_note-93">&#91;92&#93;</a></sup>
</p><p><a href="/wiki/%E5%90%B4%E9%87%91%E5%8D%8E" title="吴金华">吴金华</a>总结各家观点，指出陈寿“莫能审其生出本末”是一种曲笔，他还提出曹嵩为夏侯氏的三个证据<sup id="cite_ref-ReferenceA_94-0" class="reference"><a href="#cite_note-ReferenceA-94">&#91;93&#93;</a></sup>：
</p>
<ul><li>《三国志注·吴主传》中引《魏略》记载了<a href="/wiki/%E5%AD%99%E6%9D%83" title="孙权">孙权</a>写给<a href="/wiki/%E6%B5%A9%E5%91%A8" title="浩周">浩周</a>的书信，当中有“今子当入侍，而未有妃耦，昔君念之，以为可上连缀宗室若夏侯氏”，此时孙权向曹魏称臣，魏臣浩周以为孙权之子可以如同夏侯氏一样和曹魏宗室连结在一起，这已证明曹嵩出自夏侯氏并非敌对方的传闻。</li>
<li>《三国志·文帝纪》记载夏侯惇去世的时候，裴松之引用《魏书》“王素服幸邺东城门发哀”，又引<a href="/wiki/%E5%AD%AB%E7%9B%9B" title="孙盛">孙盛</a>的评价“在礼，天子哭同姓于宗庙门之外。哭于城门，失其所也。”孙盛是东晋时人，以“良史”著称，他的这项评价以<a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>和夏侯惇为同姓，证明曹嵩出自夏侯氏这一点在孙盛时代仍为人所共知。</li>
<li>1974年至1979年安徽亳县城南出土了曹氏墓砖，刻辞有“夏侯右”。</li></ul>
<p>对于夏侯氏和曹氏世代通婚之事，<a href="/wiki/%E5%91%A8%E5%A3%BD%E6%98%8C_(%E6%B9%96%E5%8D%97)" title="周寿昌 (湖南)">周寿昌</a>指出<a href="/wiki/%E9%99%88%E7%9F%AB" class="mw-redirect" title="陈矫">陈矫</a>原为刘氏子孙，后成为舅舅家养子改姓陈，又娶了<a href="/wiki/%E5%88%98%E9%A2%82" title="刘颂">刘颂</a>的女儿，刘颂与陈矫是近亲，曹操因爱惜陈矫的才华，为他周全，特别下令禁止诽谤此事。周寿昌认为曹操禁止人们议论同姓通婚，也是为自己的私事提供方便。<sup id="cite_ref-95" class="reference"><a href="#cite_note-95">&#91;94&#93;</a></sup><a href="/wiki/%E5%90%B4%E9%87%91%E5%8D%8E" title="吴金华">吴金华</a>也提出曹魏时期同姓通婚毫不奇怪，甚至有同母兄妹结为夫妇的情况，如《三国志注·曹爽传》引《魏末传》记载曹操义子<a href="/wiki/%E4%BD%95%E6%99%8F" title="何晏">何晏</a>就娶了同母妹妹<a href="/wiki/%E9%87%91%E9%84%89%E5%85%AC%E4%B8%BB_(%E6%9B%B9%E9%AD%8F)" title="金乡公主 (曹魏)">金乡公主</a>。吴金华指出只要知道这一点，就会对曹嵩出自夏侯氏没有任何疑问。<sup id="cite_ref-ReferenceA_94-1" class="reference"><a href="#cite_note-ReferenceA-94">&#91;93&#93;</a></sup>此后<a href="/w/index.php?title=%E6%9C%B1%E5%AD%90%E5%BD%A6&amp;action=edit&amp;redlink=1" class="new" title="朱子彦（页面不存在）">朱子彦</a>和<a href="/w/index.php?title=%E9%9F%A9%E6%98%87&amp;action=edit&amp;redlink=1" class="new" title="韩昇（页面不存在）">韩昇</a>仍旧以《曹瞒传》和《世语》不可信，夏侯楙、夏侯衡、夏侯尚娶曹氏女来论证曹操不是夏侯氏的后裔。<sup id="cite_ref-96" class="reference"><a href="#cite_note-96">&#91;95&#93;</a></sup><sup id="cite_ref-97" class="reference"><a href="#cite_note-97">&#91;96&#93;</a></sup>
</p>
<h3><span id=".E8.BA.AB.E5.BE.8C.E5.A2.93.E5.9C.B0"></span><span class="mw-headline" id="身後墓地">身后墓地</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=21" title="编辑章节：身后墓地">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<div role="note" class="hatnote navigation-not-searchable">参见：<a href="/wiki/%E6%9B%B9%E6%93%8D%E9%AB%98%E9%99%B5" title="曹操高陵">曹操高陵</a></div>
<p>2009年在<a href="/wiki/%E6%B2%B3%E5%8D%97" class="mw-redirect" title="河南">河南</a><a href="/wiki/%E5%AE%89%E9%98%B3" class="mw-redirect" title="安阳">安阳</a>出土被认为是曹操墓的遗迹。出土的骨骼身高只有1.55米左右，符合史书中形容曹操身材短小的描述。<a href="/wiki/%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6" title="复旦大学">复旦大学</a>研究者随即对于曹操宗谱展开研究，同时科研人员对出土遗骨进行<a href="/wiki/DNA" class="mw-redirect" title="DNA">DNA</a>复原。
</p><p>借由对现代曹姓人群进行DNA分析，同时配合史籍、方志、家谱等历史资料多重印证，进而找出了6支曹氏族群是最有可能的曹操后代。曹操Y染色体类型为O2-m268。<sup id="cite_ref-98" class="reference"><a href="#cite_note-98">&#91;97&#93;</a></sup>汉代丞相<a href="/wiki/%E6%9B%B9%E5%8F%82" title="曹参">曹参</a>的家族基因O3-002611+，与曹操的家族基因没有关系，从而证明曹操是曹参后人的说法可能是伪造。对有关曹姓是曹操后代避祸改姓而来以及曹操是从夏侯氏抱养的说法，经过基因验证都不可信。然而，他们也没有很可靠的夏侯氏基因资料来提供依据。<sup id="cite_ref-99" class="reference"><a href="#cite_note-99">&#91;98&#93;</a></sup>辽宁东港大孤山、铁岭腰堡两支曹姓的Y染色体根据测得结果推测属曹操后裔。<sup id="cite_ref-100" class="reference"><a href="#cite_note-100">&#91;99&#93;</a></sup>。
</p><p>复旦大学经过研究发现，持有家谱及一定历史可信性自称是曹操后人的家族中存在一种极为罕见的染色体类型，而对比<a href="/wiki/%E6%9B%B9%E9%BC%8E_(%E6%9D%B1%E6%BC%A2)" title="曹鼎 (东汉)">曹鼎</a>的古DNA测试，发现与其相符。证明曹操来自家族内部过继，而非<a href="/wiki/%E6%9B%B9%E5%8F%82" title="曹参">曹参</a>及夏侯氏的后人。<sup id="cite_ref-101" class="reference"><a href="#cite_note-101">&#91;100&#93;</a></sup>
</p><p>2016至2017年度考古出现重大发现，曹操墓室内发现3具遗骸，其中60岁左右男性遗骸较完整，专家鉴定后确定为曹操。<sup id="cite_ref-102" class="reference"><a href="#cite_note-102">&#91;101&#93;</a></sup><sup id="cite_ref-103" class="reference"><a href="#cite_note-103">&#91;102&#93;</a></sup>
</p>
<h2><span id=".E5.BB.9F.E5.BA.AD"></span><span class="mw-headline" id="廟庭">庙庭</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=22" title="编辑章节：庙庭">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>《明帝纪》和《三少帝纪》记载了诏祭祀的文臣武将。
</p><p>魏明帝<a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">曹叡</a>
</p>
<ul><li>一，“青龙元年夏五月壬申，诏祀故大将军<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>、大司马<a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>、车骑将军<a href="/wiki/%E7%A8%8B%E6%98%B1" title="程昱">程昱</a>于太祖庙庭。 ”</li></ul>
<p>齐王<a href="/wiki/%E6%9B%B9%E8%8A%B3" title="曹芳">曹芳</a>
</p>
<ul><li>二，“正始四年秋七月，诏祀故大司马<a href="/wiki/%E6%9B%B9%E7%9C%9F" title="曹真">曹真</a>、<a href="/wiki/%E6%9B%B9%E4%BC%91" title="曹休">曹休</a>、征南大将军<a href="/wiki/%E5%A4%8F%E4%BE%AF%E5%B0%9A" title="夏侯尚">夏侯尚</a>、太常<a href="/wiki/%E6%A1%93%E9%9A%8E" title="桓阶">桓阶</a>、司空<a href="/wiki/%E9%99%88%E7%BE%A4" class="mw-disambig" title="陈群">陈群</a>、太傅<a href="/wiki/%E9%8D%BE%E7%B9%87" title="锺繇">锺繇</a>、车骑将军<a href="/wiki/%E5%BC%A0%E9%83%83" class="mw-redirect" title="张郃">张郃</a>、左将军<a href="/wiki/%E5%BE%90%E6%99%83" title="徐晃">徐晃</a>、前将军<a href="/wiki/%E5%BC%A0%E8%BE%BD" class="mw-redirect" title="张辽">张辽</a>、右将军<a href="/wiki/%E4%B9%90%E8%BF%9B" class="mw-redirect" title="乐进">乐进</a>、太尉<a href="/wiki/%E5%8D%8E%E6%AD%86" title="华歆">华歆</a>、司徒<a href="/wiki/%E7%8E%8B%E6%9C%97" title="王朗">王朗</a>、骠骑将军<a href="/wiki/%E6%9B%B9%E6%B4%AA" title="曹洪">曹洪</a>、征西将军<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B8%8A" title="夏侯渊">夏侯渊</a>、后将军<a href="/wiki/%E6%9C%B1%E7%81%B5" class="mw-redirect" title="朱灵">朱灵</a>、<a href="/wiki/%E6%96%87%E8%81%98" title="文聘">文聘</a>、执金吾<a href="/wiki/%E8%87%A7%E9%9C%B8" title="臧霸">臧霸</a>、破虏将军<a href="/wiki/%E6%9D%8E%E5%85%B8" title="李典">李典</a>、立义将军<a href="/wiki/%E9%BE%90%E5%BE%B7" title="庞德">庞德</a>、武猛校尉<a href="/wiki/%E5%85%B8%E9%9F%A6" title="典韦">典韦</a>于太祖庙庭。”</li></ul>
<ul><li>三，“正始五年冬十一月癸卯，诏祀故尚书令<a href="/wiki/%E8%8D%80%E6%94%B8" title="荀攸">荀攸</a>于太祖庙庭。 ”</li></ul>
<ul><li>四，“嘉平三年十一月，有司奏诸功臣应飨食于太祖庙者，更以官为次，太傅<a href="/wiki/%E5%8F%B8%E9%A6%AC%E6%87%BF" class="mw-redirect" title="司马懿">司马宣王</a>功高爵尊，最在上。”<sup id="cite_ref-104" class="reference"><a href="#cite_note-104">&#91;103&#93;</a></sup></li></ul>
<p>魏元帝<a href="/wiki/%E6%9B%B9%E5%A5%90" class="mw-redirect" title="曹奂">曹奂</a>
</p>
<ul><li>五，“景元三年冬，诏祀故军祭酒<a href="/wiki/%E9%83%AD%E5%98%89" title="郭嘉">郭嘉</a>于太祖庙庭。 ”</li></ul>
<h2><span id=".E8.A9.95.E5.83.B9"></span><span class="mw-headline" id="評價">评价</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=23" title="编辑章节：评价">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span id=".E6.99.82.E4.BA.BA.E8.A9.95.E5.83.B9"></span><span class="mw-headline" id="時人評價">时人评价</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=24" title="编辑章节：时人评价">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E6%A9%8B%E7%8E%84" title="桥玄">桥玄</a>：“今天下将乱，安生民者，其在君乎！”<sup id="cite_ref-105" class="reference"><a href="#cite_note-105">&#91;104&#93;</a></sup><sup id="cite_ref-106" class="reference"><a href="#cite_note-106">&#91;105&#93;</a></sup></li>
<li><a href="/wiki/%E8%A8%B1%E5%8A%AD" title="许劭">许劭</a>：“君清平之奸贼，乱世之英雄。”<sup id="cite_ref-107" class="reference"><a href="#cite_note-107">&#91;106&#93;</a></sup></li>
<li><a href="/wiki/%E4%BD%95%E9%A1%92" title="何颙">何颙</a>：“汉室将亡，安天下者，必此人也！”</li>
<li><a href="/wiki/%E9%99%B3%E5%AE%AE" class="mw-redirect" title="陈宫">陈宫</a>：“今天下分裂而州无主；曹东郡（曹操），命世之才也，若迎以牧州，必宁生民。”</li>
<li><a href="/wiki/%E8%A2%81%E7%B4%B9" class="mw-redirect" title="袁绍">袁绍</a>：“曹操当死数矣，我辄救存之，今乃背恩，挟天子以令我乎！”</li>
<li><a href="/wiki/%E8%A2%81%E8%A1%93" class="mw-redirect" title="袁术">袁术</a>欲称帝时曾推辞：“曹公尚在，未可也。”</li>
<li><a href="/wiki/%E5%8A%89%E8%A1%A8" class="mw-redirect" title="刘表">刘表</a>：“今天下大乱，未知所定，曹公拥天子都许，君为我观其衅。”</li>
<li><a href="/wiki/%E5%91%82%E5%B8%83" class="mw-redirect" title="吕布">吕布</a>：“明公（曹操）所患不过于布，今已服矣，天下不足忧。明公将步，令布将骑，则天下不足定也。”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B707" class="extiw" title="s:三国志/卷07">三国志·魏书·吕布臧洪传第七</a>》）</li>
<li><a href="/wiki/%E4%BA%8E%E7%A6%81" title="于禁">于禁</a>：“且公聪明，谮诉何缘！”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B717" class="extiw" title="s:三国志/卷17">三国志·魏书·张乐于张徐传第十七</a>》）</li>
<li><a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a>：“将军（曹操）本以兖州首事，平山东之难，百姓无不归心悦服。”</li>
<li><a href="/wiki/%E9%83%AD%E5%98%89" title="郭嘉">郭嘉</a>：“真吾主也。”“公奉顺以率天下；公纠之以猛而上下知制；公外易简而内机明，用人无疑，为才所宜，不问远近；公策得辄行，应变无穷；公以至心待人，推诚而行，不为虚美，以检率下，与有功者无所吝，士之忠正远见而有实者皆愿为用；公于目前小事，时有所忽，至于大事，与四海接，恩之所加，皆过其望，虽所不见，虑之所周，无不济也；公御下以道，浸润不行；公所是进之以礼，所不是正之以法；公以少克众，用兵如神，军人恃之，敌人畏之。”</li>
<li><a href="/wiki/%E8%91%A3%E6%98%AD" title="董昭">董昭</a>：“将军（曹操）兴义兵以诛暴乱，入朝天子，辅翼王室，此五伯之功也。”</li>
<li><a href="/wiki/%E7%94%B0%E8%B1%90" title="田丰">田丰</a>：“曹公善用兵，变化无方，众虽少，未可轻也，不如以久持之。将军据山河之固，拥四州之众，外结英雄，内脩农战，然后简其精锐，分为奇兵，乘虚迭出，以扰河南，救右则击其左，救左则击其右，使敌疲于奔命，民不得安业；我未劳而彼已困，不及二年，可坐克也。今释庙胜之策，而决成败于一战，若不如志，悔无及也。”</li>
<li><a href="/wiki/%E5%8A%89%E5%82%99" class="mw-redirect" title="刘备">刘备</a>：“今指与吾为水火者，曹操也，操以急，吾以宽；操以暴，吾以仁；操以谲，吾以忠；每与操反，事乃可成耳。今以小故而失信义于天下者，吾所不取也。”“惟独曹操，久未枭除，侵擅国权，恣心极乱。”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B732" class="extiw" title="s:三国志/卷32">三国志·蜀书·先主传第二</a>》）</li>
<li><a href="/wiki/%E9%97%9C%E7%BE%BD" class="mw-redirect" title="关羽">关羽</a>：“吾极知曹公待我厚，然吾受刘将军厚恩，誓以共死，不可背之。吾终不留，吾要当立效以报曹公乃去。”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B736" class="extiw" title="s:三国志/卷36">三国志·蜀书·关张马黄赵传第六</a>》）</li>
<li><a href="/wiki/%E5%AD%AB%E6%AC%8A" class="mw-redirect" title="孙权">孙权</a>：“老贼欲废汉自立久矣，陡忌二袁、吕布、刘表与孤耳。今数雄已灭，惟孤尚存，孤与老贼，势不两立。”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B754" class="extiw" title="s:三国志/卷54">三国志·吴书·周瑜鲁肃吕蒙传第九</a>》）“其惟杀伐小为过差，离间人骨肉以为酷耳，御将自古少有。”</li>
<li><a href="/wiki/%E5%91%A8%E7%91%9C" title="周瑜">周瑜</a>：“操虽托名汉相，其实汉贼也。”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B754" class="extiw" title="s:三国志/卷54">三国志·吴书·周瑜鲁肃吕蒙传第九</a>》）</li>
<li><a href="/wiki/%E9%AD%AF%E8%82%85" class="mw-redirect" title="鲁肃">鲁肃</a>：“今之曹操，犹昔<a href="/wiki/%E9%A0%85%E7%BE%BD" class="mw-redirect" title="项羽">项羽</a>，将军何由得为桓文乎？肃窃料之，汉室不可复兴，曹操不可卒除。为将军计，惟有鼎足江东，以观天下之衅。”“彼曹公者，实严敌也”（裴松之注引《魏书》及《九州春秋》）“曹公威力实重”（裴松之注引《汉晋春秋》）（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B754" class="extiw" title="s:三国志/卷54">三国志·吴书·周瑜鲁肃吕蒙传第九</a>》）</li>
<li><a href="/wiki/%E9%99%B8%E9%81%9C" title="陆逊">陆逊</a>：“斯三虏者（曹操、刘备、关羽）当世雄杰，皆摧其锋。”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B758" class="extiw" title="s:三国志/卷58">三国志·吴书·陆逊传第十三</a>》）</li>
<li><a href="/wiki/%E9%9F%93%E5%B5%A9" title="韩嵩">韩嵩</a>：“豪杰并争，两雄相持，天下之重，在于将军。将军若欲有为，起乘其弊可也；若不然，固将择所从。将军拥十万之众，安坐而观望。夫见贤而不能助，请和而不得，此两怨必集于将军，将军不得中立矣。夫以曹公之明哲，天下贤俊皆归之，其势必举袁绍，然后称兵以向江汉，恐将军不能御也。故为将军计者，不若举州以附曹公，曹公必重德将军；长享福祚，垂之后嗣，此万全之策也。”</li>
<li><a href="/wiki/%E8%AB%B8%E8%91%9B%E4%BA%AE" class="mw-redirect" title="诸葛亮">诸葛亮</a>：“曹操智计，殊绝于人，其用兵也，仿佛<a href="/wiki/%E5%AD%AB%E6%AD%A6" class="mw-redirect" title="孙武">孙</a>、<a href="/wiki/%E5%90%B3%E8%B5%B7" class="mw-redirect" title="吴起">吴</a>。”“曹操五攻昌霸不下，四越巢湖不成，任用李服而李服图之，委夏侯而夏侯败亡，先帝每称操为能，犹有此失”（《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B735" class="extiw" title="s:三国志/卷35">三国志·蜀书·诸葛亮传第五</a>》）</li>
<li><a href="/wiki/%E7%8E%8B%E6%B2%88" class="mw-disambig" title="王沈">王沈</a>：“太祖御军三十余年，手不舍书。书则讲武策，夜则思经传。登高必赋，及造新诗，被之管弦，皆成乐章。”（《魏书》）</li></ul>
<ul><li><a href="/wiki/%E9%99%88%E7%90%B3_(%E4%B8%89%E5%9B%BD)" title="陈琳 (三国)">陈琳</a>为<a href="/wiki/%E8%A2%81%E7%B4%B9" class="mw-redirect" title="袁绍">袁绍</a>所作檄文：“历观古今书籍所载，贪残虐烈无道之臣，于操为甚。”</li>
<li><a href="/wiki/%E6%9D%8E%E7%93%92" class="mw-disambig" title="李瓒">李瓒</a>：“时将乱矣，天下英雄无过曹操。”</li>
<li><a href="/wiki/%E9%B2%8D%E4%BF%A1" class="mw-redirect" title="鲍信">鲍信</a>：“夫略不世出，能总英雄以拨乱反正者，君也。”</li>
<li><a href="/wiki/%E6%B6%BC%E8%8C%82" title="凉茂">凉茂</a>：“曹公忧国家之危败，愍百姓之苦毒，率义兵为天下诛残贼，功高而德广，可谓无二矣。”</li></ul>
<h3><span id=".E5.BE.8C.E4.BA.BA.E8.A9.95.E5.83.B9"></span><span class="mw-headline" id="後人評價">后人评价</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=25" title="编辑章节：后人评价">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E9%99%88%E5%AF%BF" title="陈寿">陈寿</a>：“汉末，天下大乱，雄豪并起，而袁绍虎踞四州，强盛莫敌。太祖武皇帝运筹演谋，鞭挞宇内，揽<a href="/wiki/%E7%94%B3%E4%B8%8D%E5%AE%B3" title="申不害">申不害</a>、<a href="/wiki/%E5%95%86%E9%9E%85" title="商鞅">商鞅</a>之法术，该<a href="/wiki/%E7%99%BD%E8%B5%B7" title="白起">白起</a>、<a href="/wiki/%E9%9F%A9%E4%BF%A1" title="韩信">韩信</a>之奇策，官方授材，各因其器，矫情任算，不念旧恶，终能总御皇机，克成洪业者，惟其明略最优也。抑可谓非常之人，超世之杰矣。”（《<a href="/wiki/%E4%B8%89%E5%9B%BD%E5%BF%97" class="mw-redirect" title="三国志">三国志</a>·魏书·武帝纪》）</li>
<li>陈寿：“初，太祖性忌，有所不堪者，鲁国孔融、南阳许攸、娄圭，皆以恃旧不虔见诛。而琰最为世所痛惜，至今冤之。”</li>
<li><a href="/wiki/%E5%B4%94%E9%B4%BB" title="崔鸿">崔鸿</a>《前凉录》曰：“<a href="/wiki/%E5%BC%B5%E8%8C%82" class="mw-redirect" title="张茂">张茂</a>谓马岌曰：‘刘曜自古可谁等辈也？’”岌谓曰：‘曹孟德之流。’茂默然。岌曰：‘孟德公族也，<a href="/wiki/%E5%8A%89%E6%9B%9C" class="mw-redirect" title="刘曜">刘曜</a>戎狄，难易不同。曜殆过之。’茂曰：‘曜可方<a href="/wiki/%E5%91%82%E5%B8%83" class="mw-redirect" title="吕布">吕布</a>、<a href="/wiki/%E9%97%9C%E7%BE%BD" class="mw-redirect" title="关羽">关羽</a>，而云孟德不及，岂不过哉？’岌曰：“孟德挟天子，令诸侯，仗大义，讨不庭；曜一卒胡人，用乌合之众，而能建威成大逆，天下莫之当，其不优欤！’茂曰：‘天生胡以灭中国，殆不可以人事论也。’”</li>
<li><a href="/wiki/%E5%AD%99%E6%A5%9A" class="mw-redirect" title="孙楚">孙楚</a>：“太祖承运，神武应期，征讨暴乱，克宁区夏；协建灵符，天命既集，遂廓弘基，奄有魏域。”</li>
<li><a href="/wiki/%E8%A3%B4%E6%9D%BE%E4%B9%8B" title="裴松之">裴松之</a>：“魏太祖虽机变无方，略不世出，安有以数千之兵，而得逾时相抗者哉？”</li>
<li><a href="/wiki/%E9%99%B8%E6%A9%9F" class="mw-redirect" title="陆机">陆机</a>：“曹氏虽功济诸华，虐亦深矣，其民怨矣。”（《辨亡论》）</li>
<li><a href="/wiki/%E6%BD%98%E5%AE%89" class="mw-redirect" title="潘安">潘安</a>：“魏武赫以霆震，奉义辞以伐叛，彼虽众其焉用，故制胜于庙算。”</li>
<li><a href="/wiki/%E5%88%98%E6%B8%8A" class="mw-redirect" title="刘渊">刘渊</a>：“大丈夫当为汉高、魏武，呼韩邪何足效哉！”</li>
<li><a href="/wiki/%E7%8E%8B%E5%B0%8E" title="王导">王导</a>：“昔魏武，达政之主也；荀文若，功臣之最也。”</li>
<li><a href="/wiki/%E5%9E%A3%E6%A6%AE%E7%A5%96" title="垣荣祖">垣荣祖</a>：“昔曹操、曹丕上马横槊，下马谈论，此于天下可不负饮矣！”</li>
<li><a href="/wiki/%E9%92%9F%E5%B5%98" class="mw-redirect" title="钟嵘">钟嵘</a>：“曹公古直，甚有悲凉之句。”</li>
<li><a href="/wiki/%E5%BC%B5%E8%BC%94" class="mw-disambig" title="张辅">张辅</a>：“武帝为张绣所困，挺身逃遁，以丧二子也；然其忌克，安忍无亲：董公仁贾文和，恒以佯愚自免；荀文若杨德祖之徒；多见贼害；行兵三十余年，无不亲征；功臣谋士，曾无列土之封；仁爱不加亲戚；惠泽不流百姓。”（《<a href="https://zh.wikisource.org/wiki/%E8%97%9D%E6%96%87%E9%A1%9E%E8%81%9A/%E5%8D%B7022" class="extiw" title="s:艺文类聚/卷022">艺文类聚卷二十二</a>》）</li>
<li><a href="/wiki/%E5%BC%B5%E6%82%8C" class="mw-disambig" title="张悌">张悌</a>：“曹操虽功盖中夏，威震四海；崇诈杖术，征伐无已！民畏其威而不怀其德也。”</li>
<li><a href="/wiki/%E5%BC%B5%E9%BC%8E" title="张鼎">张鼎</a>：“君不见汉家失统三灵变，魏武争雄六龙战。荡海吞江制中国，回天运斗应南面。隐隐都城紫陌开，迢迢分野黄星见。流年不驻漳河水，明月俄终邺国宴。文章犹入管弦新，帷座空销狐兔尘。可惜望陵歌舞处，松风四面暮愁人。”</li>
<li><a href="/wiki/%E5%BC%B5%E8%AA%AA" title="张说">张说</a>：“君不见魏武草创争天禄，群雄睚眦相驰逐。昼携壮士破坚阵，夜接词人赋华屋。都邑缭绕西山阳，桑榆汗漫漳河曲。城郭为墟人代改，但有西园明月在。邺傍高冢多贵臣，娥眉曼睩共灰尘。试上铜台歌舞处，唯有秋风愁杀人。”</li>
<li><a href="/wiki/%E7%8E%8B%E5%8B%83" title="王勃">王勃</a>：“魏武用兵，仿佛孙吴。临敌制奇，鲜有丧败，故能东禽狡布，北走强袁，破黄巾于寿张，斩眭固于射犬。援戈北指，蹋顿悬颅；拥旆南临，刘琮束手。振威烈而清中夏，挟天子以令诸侯，信超然之雄杰矣。”</li>
<li><a href="/wiki/%E9%AD%8F%E5%85%83%E5%BF%A0" title="魏元忠">魏元忠</a>：“魏武之纲神冠绝，犹依法孙、吴，假有项籍之气，袁绍之基，而皆泯智任情，终以破灭，何况复出其下哉！”</li>
<li><a href="/wiki/%E6%9C%B1%E6%95%AC%E5%89%87" title="朱敬则">朱敬则</a>：“观曹公明锐权略，神变不穷，兵折而意不衰，在危而听不惑，临事决机，举无遗悔，近古以来，未之有也。”；“昔魏太祖兵锋无敌，神机独行，大战五十六，九州静七八，百姓与能，天下慕德，犹且翼戴弱主，尊奖汉室。”</li>
<li><a href="/wiki/%E8%B5%B5%E8%95%A4" title="赵蕤">赵蕤</a>：“运筹演谋，鞭挞宇内，北破袁绍，南虏刘琮，东举公孙康，西夷张鲁，九州百郡，十并其八，志绩未究，中世而殒。”</li>
<li><a href="/wiki/%E7%A9%86%E4%BF%AE" title="穆修">穆修</a>：“惟帝之雄，使天济其勇尚延数年之位，岂强吴、庸蜀之不平！”</li>
<li><a href="/wiki/%E7%9F%B3%E5%8B%92" title="石勒">石勒</a>：“大丈夫行事，当磊磊落落，如日月皎然，终不能如曹孟德、司马仲达父子，欺他孤儿寡妇，狐媚以取天下也。”（《<a href="https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7105" class="extiw" title="s:晋书/卷105">晋书·载记第五·石勒下</a>》）</li>
<li><a href="/wiki/%E5%B4%94%E6%B5%A9" title="崔浩">崔浩</a>：“<a href="/wiki/%E5%8A%89%E8%A3%95" class="mw-redirect" title="刘裕">刘裕</a>平逆乱，<a href="/wiki/%E5%8F%B8%E9%A6%AC%E5%BE%B7%E5%AE%97" class="mw-redirect" title="司马德宗">司马德宗</a>之曹操也。”（《<a href="https://zh.wikisource.org/wiki/%E8%B3%87%E6%B2%BB%E9%80%9A%E9%91%91/%E5%8D%B7118" class="extiw" title="s:资治通鉴/卷118">资治通鉴·卷一百一十八·晋纪四十</a>》）</li>
<li><a href="/wiki/%E7%BF%92%E9%91%BF%E9%BD%92" title="习凿齿">习凿齿</a>：“昔<a href="/wiki/%E9%BD%8A%E6%A1%93%E5%85%AC" class="mw-redirect" title="齐桓公">齐桓公</a>一矜其功而叛者九国，曹操暂自骄伐而天下三分，皆勤之于数十年之内而弃之于俯仰之顷，岂不惜乎！是以君子劳谦日昃，虑以下人，功高而居之以上，势尊而守之以卑。情近于物，故虽贵而人不厌其重；德洽群生，故业广而天下愈欣其庆。夫然，故能有其富贵，保其功业，隆显当时，传福百世，何骄矜之有哉！君子是以知曹操之不能遂兼天下者也。”（《<a href="https://zh.wikisource.org/wiki/%E6%BC%A2%E6%99%89%E6%98%A5%E7%A7%8B" class="extiw" title="s:汉晋春秋">汉晋春秋</a>》）</li>
<li><a href="/wiki/%E6%9D%8E%E4%B8%96%E6%B0%91" class="mw-redirect" title="李世民">李世民</a>对曹操用兵才能评价：“临危制变，料敌设奇，一将之智有余，万乘之才不足。”（《资治通鉴/卷197》）“帝以雄武之姿，当艰难之运，栋梁之任，同乎曩时，匡正之功，异于往代。观沈溺而不拯，视颠覆而不持，乖徇国之情，有无君之迹。既而三分肇庆，黄星之应久彰；卜主启期，真人之运斯属。其天意也，岂人事乎！”（《<a href="https://zh.wikisource.org/wiki/%E5%85%A8%E5%94%90%E6%96%87/%E5%8D%B70010" class="extiw" title="s:全唐文/卷0010">全唐文·卷十</a>·祭魏太祖文》），又对曹操品德评价：“朕常以魏武帝多诡诈，深鄙其为人。”（《<a href="/wiki/%E8%B2%9E%E8%A7%80%E6%94%BF%E8%A6%81" class="mw-redirect" title="贞观政要">贞观政要</a>》）</li>
<li><a href="/wiki/%E8%99%9E%E4%B8%96%E5%8D%97" title="虞世南">虞世南</a>：“曹公兵机智算，殆难与敌，故能肇迹开基，居中作相，实有英雄之才矣。然谲诡不常，雄猜多忌，至于杀伏后，鸩荀或，诛孔融，戮崔琰，娄生毙于一言，桓邵劳于下拜，弃德任刑，其虐已甚，坐论西伯，实非其人。许劭所谓‘治世之能臣，乱世之奸雄’，斯言为当。”（《<a href="/wiki/%E9%95%BF%E7%9F%AD%E7%BB%8F" class="mw-redirect" title="长短经">长短经</a>》卷二）</li>
<li><a href="/wiki/%E5%8A%89%E7%9F%A5%E5%B9%BE" class="mw-redirect" title="刘知几">刘知几</a>：“贼杀<a href="/wiki/%E4%BC%8F%E5%A3%BD" title="伏寿">母后</a>，幽迫<a href="/wiki/%E6%BC%A2%E7%8D%BB%E5%B8%9D" class="mw-redirect" title="汉献帝">主上</a>，罪百<a href="/wiki/%E7%94%B0%E5%B8%B8" class="mw-redirect" title="田常">田常</a>，祸千<a href="/wiki/%E7%8E%8B%E8%8E%BD" title="王莽">王莽</a>。”（《<a href="/wiki/%E5%8F%B2%E9%80%9A" title="史通">史通</a>•探赜篇》）</li>
<li><a href="/wiki/%E5%85%83%E7%A8%B9" title="元稹">元稹</a>：“<a href="/wiki/%E5%8A%89%E8%99%9E" title="刘虞">刘虞</a>不敢作天子，曹瞒篡乱从此始”（《董逃行》）</li>
<li><a href="/wiki/%E8%8B%8F%E6%B4%B5" title="苏洵">苏洵</a>：“项籍有取天下之才，而无取天下之虑；曹操有取天下之虑，而无取天下之量；玄德有取天下之量，而无取天下之才。”</li>
<li><a href="/wiki/%E8%98%87%E8%BB%BE" class="mw-redirect" title="苏轼">苏轼</a>：“世之称人豪者，才气各有高卑，然皆以临难不惧，谈笑就死为雄。操以病亡，子孙满前，而咿婴涕泣，留连妾妇，分香卖履，区处衣物，平生奸伪，死见真性。世以成败论人物，故操得在英雄之列。而公见谓才疏意广，岂不悲哉！操平生畏刘备，而备以公知天下有己为喜，天若胙汉，公使备，备诛操无难也。”（《孔北海赞》）</li>
<li><a href="/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3" title="王安石">王安石</a>：“青山为浪入漳州，铜雀台西八九丘。蝼蚁往还空垄亩，麒麟埋没几春秋。功名盖世知谁是，气力回天到此休。何必地中余故物，魏公诸子分衣裘。”</li>
<li><a href="/wiki/%E5%8F%B8%E9%A6%AC%E5%85%89" class="mw-redirect" title="司马光">司马光</a>：“知人善任，难眩以伪。识拔奇才，不拘微贱；随能任使，皆获其用。与敌对阵，意思安闲，如不欲战然；及至决机乘胜，气势盈溢。勋劳宜赏，不吝千金；无功望施，分毫不与。用法峻急，有犯必戮，或对之流涕，然终无所赦。雅性节俭，不好华丽。故能芟刈群雄，几平海内。”（《<a href="/wiki/%E8%B3%87%E6%B2%BB%E9%80%9A%E9%91%92" title="资治通鉴">资治通鉴</a>》）</li>
<li><a href="/wiki/%E4%BD%95%E5%8E%BB%E9%9D%9E" title="何去非">何去非</a>：“曹公逡巡独以其智起而应之，奋盈万之旅，北摧袁绍而定燕、冀；合三县之众，东擒吕布而收济衮；蹙袁术于淮左，彷徨无归，遂以奔死。而曹公智画之出，常若有余，而不少困。彼之所谓势与勇者，一旦溃败，皆不胜支。然后天下始服曹公之为无敌，而以袁、吕为不足恃也。至于彼之任势与力，及夫各挟智勇之不全者，亦皆知曹公之独以智强而未易敌也，故常内惮而共蹙之。”；“言兵无若孙武，用兵无若韩信、曹公。”</li>
<li><a href="/wiki/%E5%85%83%E5%A5%BD%E9%97%AE" title="元好问">元好问</a>：“曹刘坐啸虎生风，四海无人角两雄。”（《论诗绝句》）</li>
<li><a href="/wiki/%E6%9C%B1%E7%86%B9" title="朱熹">朱熹</a>：“曹操作诗必说周公，如云：‘山不厌高，水不厌深；周公吐哺，天下归心！’又，苦寒行云：‘悲彼东山诗。’他也是做得个贼起，不惟窃国之柄，和圣人之法也窃了！”（《<a href="/wiki/%E6%9C%B1%E5%AD%90%E8%AF%AD%E7%B1%BB" title="朱子语类">朱子语类</a>‧论文下》）</li>
<li><a href="/wiki/%E8%83%A1%E4%B8%89%E7%9C%81" title="胡三省">胡三省</a>：“操盖已弃武都而不有矣。诸氐散居秦川，苻氏乱华自此始。”</li>
<li><a href="/wiki/%E6%B4%AA%E7%9A%93" title="洪皓">洪皓</a>：“长笑袁本初，妄意清君侧。垂头返官渡，奇祸怜幕客。曹公走熙尚，气欲陵韩白。欺取计已成，军容漫辉赫。跨漳筑大城，劳民屈群策，北虽破乌丸，南亦困赤壁。八荒思并吞，二国尽勍敌。四陵寄遗恨，讲武存陈迹。雉堞逐尘飞，浊流深莫测。回首铜雀台，鼓吹喧黾蝈。”</li>
<li><a href="/wiki/%E9%92%9F%E6%83%BA" class="mw-redirect" title="钟惺">钟惺</a>：“邺则邺城水漳水，定有异人从此起。雄谋韵事与文心，君臣兄弟而父子。英雄未有俗胸中，出没岂随人眼底？功首罪魁非两人，遗臭流芳本一身。文章有神霸有气，岂能苟尔化为群？横流筑台距太行，气与理势相低昂。安有斯人不作逆，小不为霸大不王？霸王降作儿女鸣，无可奈何中不平。向帐明知非有益，分香未可谓无情。呜呼！古人作事无巨细，寂寞豪华皆有意。书生轻议冢中人，冢中笑尔书生气！”</li>
<li><a href="/wiki/%E5%BC%B5%E6%BA%A5" title="张溥">张溥</a>：“究其（曹操）初，一名<a href="/wiki/%E5%AD%9D%E5%BB%89" title="孝廉">孝廉</a>也……孟德奋跳，当涂大振，易汉而魏，虽附会<a href="/wiki/%E6%9B%B9%E5%8F%82" title="曹参">曹参</a>，难洗宗耻……孟德御军三十余年，手不舍书，兼<a href="/wiki/%E8%8D%89%E6%9B%B8" class="mw-redirect" title="草书">草书</a>亚崔、张，<a href="/wiki/%E9%9F%B3%E6%A8%82" class="mw-redirect" title="音乐">音乐</a>比桓、蔡，<a href="/wiki/%E5%9C%8D%E6%A3%8B" class="mw-redirect" title="围棋">围棋</a>埒王、郭；复好养性，解方药。<a href="/wiki/%E5%91%A8%E5%85%AC" class="mw-redirect" title="周公">周公</a>所谓多材多艺，孟德诚有之。使彼不称王谋篡，获与周旋，画讲武策，夜论经传；或登高赋诗，被之管弦。又观其射飞鸟，擒猛兽，殆可终身忘老，乃竟甘心作贼者，谓时不我容耳。汉末名人，文有<a href="/wiki/%E5%AD%94%E8%9E%8D" title="孔融">孔融</a>，武有吕布，孟德实兼其长；此两人不死，杀孟德有余。《述志》一令，似乎欺人，未尝不抽序心腹，慨当以慷也。”（《汉魏六朝百三家集·魏武帝集题辞》）</li>
<li><a href="/wiki/%E7%BE%85%E8%B2%AB%E4%B8%AD" class="mw-redirect" title="罗贯中">罗贯中</a>：“雄哉魏太祖，天下扫狼烟。动静皆存智，高低善用贤。长驱百万众，亲注《十三篇》。豪杰同时起，谁人敢赠鞭？”（《<a href="/wiki/%E4%B8%89%E5%9B%BD%E5%BF%97%E9%80%9A%E4%BF%97%E6%BC%94%E4%B9%89" class="mw-redirect" title="三国志通俗演义">三国志通俗演义</a>》）</li>
<li><a href="/wiki/%E8%94%A1%E6%9D%B1%E8%97%A9" title="蔡东藩">蔡东藩</a>：“曹操为乱世奸雄，乘机逐鹿，智略过人。袁绍袁术诸徒，皆不足与操比，遑论一张绣乎？乃宛城既下，遽为一孀妇所迷，流连忘返，几至身死绣手，坐隳前功。董卓之死也，衅由妇人﹔操之不死于妇人之手，盖亦仅耳！（《<a href="/wiki/%E5%BE%8C%E6%BC%A2%E6%BC%94%E7%BE%A9" class="mw-redirect" title="后汉演义">后汉演义</a>》）</li>
<li><a href="/wiki/%E9%99%B3%E7%A5%9A%E6%98%8E" title="陈祚明">陈祚明</a>：“孟德天分甚高，因缘所至，成此功业。”</li>
<li><a href="/w/index.php?title=%E9%BB%83%E6%91%A9%E8%A5%BF&amp;action=edit&amp;redlink=1" class="new" title="黄摩西（页面不存在）">黄摩西</a>：“魏武雄才大略，草创英雄中，亦当占上座；虽好用权谋，然从古英雄，岂有全不用权谋而成事者？”</li>
<li><a href="/wiki/%E9%B2%81%E8%BF%85" title="鲁迅">鲁迅</a>：“曹操是一个很有本事的人，至少是一个英雄。我虽不是曹操一党，但无论如何，总是非常佩服他。”</li>
<li><a href="/wiki/%E6%AF%9B%E6%B3%BD%E4%B8%9C" title="毛泽东">毛泽东</a>：“曹操是了不起的政治家、军事家，也是个了不起的诗人…曹操统一中国北方，创立魏国。他改革了东汉的许多恶政，抑制豪强，发展生产，实行屯田制，还督促开荒，推行法治，提倡节俭，使遭受大破坏的社会开始稳定、恢复、发展。”；“大雨落幽燕，白浪滔天，秦皇岛外打鱼船。一片汪洋都不见，知向谁边？往事越千年，魏武挥鞭，东临碣石有遗篇。萧瑟秋风今又是，换了人间。”（《<a href="/w/index.php?title=%E6%B5%AA%E6%B7%98%E6%B2%99%C2%B7%E5%8C%97%E6%88%B4%E6%B2%B3&amp;action=edit&amp;redlink=1" class="new" title="浪淘沙·北戴河（页面不存在）">浪淘沙·北戴河</a>》）</li>
<li><a href="/wiki/%E8%8C%83%E6%96%87%E6%BE%9C" title="范文澜">范文澜</a>：“他是拨乱世的英雄，所以表现在文学上，悲凉慷慨，气魄雄豪。”</li>
<li><a href="/wiki/%E8%B4%B9%E6%AD%A3%E6%B8%85" class="mw-redirect" title="费正清">费正清</a>、<a href="/wiki/%E5%B4%94%E7%91%9E%E5%BE%B7" class="mw-redirect" title="崔瑞德">崔瑞德</a>：“给予汉王朝的致命一击却留给了中国历史上最引人注目的人物之一的曹操。曹操出身微贱，是大诗人、大战略家，也是现实主义的政治思想家；他反对儒家的礼仪和道德束缚。”（《<a href="/w/index.php?title=%E5%89%91%E6%A1%A5%E4%B8%AD%E5%9B%BD%E7%A7%A6%E6%B1%89%E5%8F%B2&amp;action=edit&amp;redlink=1" class="new" title="剑桥中国秦汉史（页面不存在）">剑桥中国秦汉史</a>》）</li></ul>
<h2><span id=".E5.AE.B6.E5.BA.AD.E6.88.90.E5.91.98"></span><span class="mw-headline" id="家庭成员">家庭成员</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=26" title="编辑章节：家庭成员">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<div class="thumb tright"><div class="thumbinner" style="width:202px;"><a href="/wiki/File:Mask_of_Cao_Cao.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mask_of_Cao_Cao.jpg/200px-Mask_of_Cao_Cao.jpg" decoding="async" width="200" height="267" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mask_of_Cao_Cao.jpg/300px-Mask_of_Cao_Cao.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mask_of_Cao_Cao.jpg/400px-Mask_of_Cao_Cao.jpg 2x" data-file-width="1536" data-file-height="2048" /></a>  <div class="thumbcaption"><div class="magnify"><a href="/wiki/File:Mask_of_Cao_Cao.jpg" class="internal" title="放大"></a></div>清代安顺<a href="/wiki/%E5%9C%B0%E6%88%8F" title="地戏">地戏</a>面具曹操像</div></div></div>
<h3><span id=".E7.A5.96.E7.88.B6.E8.BC.A9"></span><span class="mw-headline" id="祖父輩">祖父辈</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=27" title="编辑章节：祖父辈">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E6%9B%B9%E9%A8%B0" title="曹腾">曹腾</a>（100年－159年），东汉宦官，为小黄门，迁至中常侍。桓帝即位，曹腾封费亭侯，迁大长秋，加位特进。曹操的父亲曹嵩是他的养子。</li></ul>
<ul><li><a href="/wiki/%E6%9B%B9%E8%A4%92" class="mw-redirect" title="曹褒">曹褒</a>，颍川太守，曹仁祖父。</li></ul>
<h3><span id=".E7.88.B6.E8.BC.A9"></span><span class="mw-headline" id="父輩">父辈</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=28" title="编辑章节：父辈">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E6%9B%B9%E5%B5%A9" title="曹嵩">曹嵩</a>（？－193年），曹操的父亲，宦官中常侍、大长秋曹腾的养子，出钱一亿万买官至太尉。曹操起兵后，避世于徐州，后来因曹操曾数击陶谦，陶谦使轻骑杀曹嵩、曹德于郡界。也有说法认为他们是被陶谦手下张闿贪财杀害。曹丕称帝后，追尊曹嵩为太皇帝。</li>
<li><a href="/wiki/%E6%9B%B9%E7%82%BD" title="曹炽">曹炽</a>，侍中、长水校尉。曹褒之子，曹仁、曹纯之父。</li>
<li><a href="/wiki/%E6%9B%B9%E9%BC%8E_(%E6%9D%B1%E6%BC%A2)" title="曹鼎 (东汉)">曹鼎</a>，尚书令、<a href="/wiki/%E6%B2%B3%E9%96%93%E9%83%A1" title="河间郡">河间</a>相<sup id="cite_ref-108" class="reference"><a href="#cite_note-108">&#91;107&#93;</a></sup>、吴郡太守 <sup id="cite_ref-109" class="reference"><a href="#cite_note-109">&#91;108&#93;</a></sup>。曹洪伯父，曹休祖父。</li></ul>
<h3><span id=".E5.BC.9F"></span><span class="mw-headline" id="弟">弟</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=29" title="编辑章节：弟">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E6%9B%B9%E5%BE%B7_(%E6%9B%B9%E6%93%8D%E4%B9%8B%E5%BC%9F)" title="曹德 (曹操之弟)">曹德</a>（？－193年），太尉曹嵩之子。曹操之弟。曹操起兵后，避世于徐州，曹操曾数击陶谦，陶谦使轻骑杀曹嵩、曹德于郡界。</li>
<li><a href="/wiki/%E6%B5%B7%E9%98%B3%E5%93%80%E4%BE%AF" class="mw-redirect" title="海阳哀侯">海阳哀侯</a>，曹操弟，名不详。其女嫁<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B8%8A" title="夏侯渊">夏侯渊</a>之子<a href="/wiki/%E5%A4%8F%E4%BE%AF%E8%A1%A1" title="夏侯衡">夏侯衡</a>。</li>
<li><a href="/w/index.php?title=%E6%9B%B9%E5%BD%AC_(%E4%B8%89%E5%9C%8B)&amp;action=edit&amp;redlink=1" class="new" title="曹彬 (三国)（页面不存在）">曹彬</a>，曹操弟。是曹操之子<a href="/wiki/%E6%9B%B9%E5%9D%87" title="曹均">曹均</a>的养父。</li>
<li>曹操弟，名不详，其子<a href="/wiki/%E6%9B%B9%E5%AE%89%E6%B0%91" title="曹安民">曹安民</a>。</li>
<li>曹操弟，名不详，其女嫁<a href="/wiki/%E5%AD%AB%E5%A0%85" class="mw-redirect" title="孙坚">孙坚</a>之子<a href="/wiki/%E5%AD%99%E5%8C%A1" class="mw-redirect" title="孙匡">孙匡</a>。</li></ul>
<h3><span id=".E5.A0.82.E5.85.84.E5.BC.9F"></span><span class="mw-headline" id="堂兄弟">堂兄弟</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=30" title="编辑章节：堂兄弟">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a>（？－220年）：字元让，初为奋武将军司马，建安十二年（207年）封邑2500户。官至大将军，封高安乡侯。死后谥为忠侯，其七子二孙皆为关内侯。青龙元年（233年）入太祖庙庭，配享祭祀。其子<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%A5%99" title="夏侯楙">夏侯楙</a>娶<b>曹操</b>之女<a href="/wiki/%E6%B8%85%E6%B2%B3%E5%85%AC%E4%B8%BB" class="mw-disambig" title="清河公主">清河公主</a>。</li>
<li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B8%8A" title="夏侯渊">夏侯渊</a>（？－219年）：字妙才，惇之族弟，其妻为为曹操原配夫人丁氏之妹，有记载的活动期间为189年-219年。初为别部司马、骑都尉。建安廿一年（216年）封邑800户。官至征西将军，封博昌亭侯。建安廿四年（219年）死于与刘备、黄忠的争夺<a href="/wiki/%E6%BC%A2%E4%B8%AD%E4%B9%8B%E6%88%B0" title="汉中之战">汉中的战役</a>，死后谥为愍侯。正始四年（243年）在太祖庙庭，享祭祀。其子<a href="/wiki/%E5%A4%8F%E4%BE%AF%E8%A1%A1" title="夏侯衡">夏侯衡</a>娶曹操弟<a href="/wiki/%E6%B5%B7%E9%98%B3%E5%93%80%E4%BE%AF" class="mw-redirect" title="海阳哀侯">海阳哀侯</a>之女。</li>
<li><a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a>（168－223年）：字子孝，太祖从弟，祖父<a href="/wiki/%E6%9B%B9%E8%A4%92_(%E6%B6%88%E6%AD%A7%E4%B9%89)" class="mw-disambig" title="曹褒 (消歧义)">曹褒</a>曾任颖川太守，父亲<a href="/wiki/%E6%9B%B9%E7%82%BD" title="曹炽">曹炽</a>曾任<a href="/wiki/%E4%BE%8D%E4%B8%AD" title="侍中">侍中</a>、<a href="/wiki/%E9%95%BF%E6%B0%B4%E6%A0%A1%E5%B0%89" class="mw-redirect" title="长水校尉">长水校尉</a>。初为别部司马，行厉锋校尉权。建安廿五年（220年）封邑3500户，封陈侯。文帝年间官至大将军。死后谥为忠侯。青龙元年（233年）入太祖庙庭，配享祭祀。</li>
<li><a href="/wiki/%E6%9B%B9%E7%B4%94" title="曹纯">曹纯</a>（170－210年）：字子和，曹仁之弟，初为议郎，后统领<a href="/wiki/%E8%99%8E%E8%B1%B9%E9%A8%8E" title="虎豹骑">虎豹骑</a>。约建安十二年（207年）封邑300户，封高陵亭侯，死后谥为威侯。</li>
<li><a href="/wiki/%E6%9B%B9%E6%B4%AA" title="曹洪">曹洪</a>（？－232年）：字子廉，太祖从弟，伯父<a href="/wiki/%E6%9B%B9%E9%BC%8E" class="mw-disambig" title="曹鼎">曹鼎</a>曾为<a href="/wiki/%E5%B0%9A%E4%B9%A6%E4%BB%A4" title="尚书令">尚书令</a>。初为鹰扬校尉。黄初年间，封邑2100户。官至骠骑将军，封乐城侯。死后谥为恭侯。正始四年（243年）在太祖庙庭，享祭祀。</li></ul>
<h3><span id=".E5.A6.BB.E5.A6.BE"></span><span class="mw-headline" id="妻妾">妻妾</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=31" title="编辑章节：妻妾">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操正妻及侧室，据《魏志·后妃传》及《武文世王公传》，可考者有15位：
</p>
<ul><li><a href="/wiki/%E4%B8%81%E5%A4%AB%E4%BA%BA_(%E9%AD%8F%E6%AD%A6%E5%B8%9D)" class="mw-redirect" title="丁夫人 (魏武帝)">丁夫人</a>，曹操的原配正室夫人，因<a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a>之死而与曹操反目，曹操曾欲迎回而不可得。</li>
<li><a href="/wiki/%E6%AD%A6%E5%AE%A3%E5%8D%9E%E7%9A%87%E5%90%8E" title="武宣卞皇后">武宣皇后</a>，即卞氏，丁夫人被废后才扶正，生有<a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>、<a href="/wiki/%E6%9B%B9%E5%BD%B0" title="曹彰">曹彰</a>、<a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a>、<a href="/wiki/%E6%9B%B9%E7%86%8A" title="曹熊">曹熊</a>四子。</li>
<li><a href="/wiki/%E5%88%98%E5%A4%AB%E4%BA%BA_(%E6%9B%B9%E6%93%8D)" title="刘夫人 (曹操)">刘夫人</a>，曹操之妾，早年病亡，生有<a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a>、<a href="/wiki/%E6%9B%B9%E9%91%A0" title="曹铄">曹铄</a>两子，女儿<a href="/wiki/%E6%B8%85%E6%B2%B3%E5%85%AC%E4%B8%BB_(%E6%9B%B9%E9%AD%8F)" title="清河公主 (曹魏)">清河公主</a>。</li>
<li><a href="/wiki/%E7%92%B0%E5%A4%AB%E4%BA%BA" title="环夫人">环夫人</a>，曹操之妾，生有三个儿子<a href="/wiki/%E6%9B%B9%E6%B2%96" class="mw-redirect" title="曹冲">曹冲</a>、<a href="/wiki/%E6%9B%B9%E6%93%9A" title="曹据">曹据</a>、<a href="/wiki/%E6%9B%B9%E5%AE%87" title="曹宇">曹宇</a>。</li>
<li><a href="/wiki/%E6%9D%9C%E5%A4%AB%E4%BA%BA_(%E9%AD%8F%E6%AD%A6%E5%B8%9D)" class="mw-redirect" title="杜夫人 (魏武帝)">杜夫人</a>，曹操之妾。和前夫<a href="/wiki/%E7%A7%A6%E5%AE%9C%E7%A5%BF" title="秦宜禄">秦宜禄</a>生有儿子<a href="/wiki/%E7%A7%A6%E6%9C%97" title="秦朗">秦朗</a>。和曹操生有儿子<a href="/wiki/%E6%9B%B9%E6%9E%97" title="曹林">曹林</a>、<a href="/wiki/%E6%9B%B9%E8%A2%9E" title="曹衮">曹衮</a>，女儿<a href="/wiki/%E9%87%91%E9%84%89%E5%85%AC%E4%B8%BB" class="mw-redirect" title="金乡公主">金乡公主</a>。</li>
<li><a href="/wiki/%E7%A7%A6%E5%A4%AB%E4%BA%BA" title="秦夫人">秦夫人</a>，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E7%8E%B9" title="曹玹">曹玹</a>、<a href="/wiki/%E6%9B%B9%E5%B3%BB" title="曹峻">曹峻</a>二子。</li>
<li><a href="/wiki/%E5%B0%B9%E5%A4%AB%E4%BA%BA_(%E6%9B%B9%E6%93%8D)" title="尹夫人 (曹操)">尹夫人</a>，曹操之妾。和前夫<a href="/wiki/%E4%BD%95%E5%92%B8" class="mw-redirect" title="何咸">何咸</a>生有儿子<a href="/wiki/%E4%BD%95%E6%99%8F" title="何晏">何晏</a>，和曹操生有<a href="/wiki/%E6%9B%B9%E7%9F%A9" title="曹矩">曹矩</a>一子。</li>
<li><a href="/wiki/%E7%8E%8B%E6%98%AD%E5%84%80_(%E6%9B%B9%E6%93%8D)" title="王昭仪 (曹操)">王昭仪</a>，曹操之妾，<a href="/wiki/%E6%9B%B9%E5%B9%B9" title="曹干">曹干</a>生母早卒，曹操命其抚养。</li>
<li><a href="/wiki/%E5%AD%AB%E5%A7%AC" title="孙姬">孙姬</a>，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E4%B8%8A" class="mw-redirect" title="曹上">曹上</a>、<a href="/wiki/%E6%9B%B9%E5%BD%AA" title="曹彪">曹彪</a>、<a href="/wiki/%E6%9B%B9%E5%8B%A4" class="mw-redirect" title="曹勤">曹勤</a>三子。</li>
<li>李姬，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E4%B9%98" class="mw-redirect" title="曹乘">曹乘</a>、<a href="/wiki/%E6%9B%B9%E6%95%B4" class="mw-redirect" title="曹整">曹整</a>、<a href="/wiki/%E6%9B%B9%E4%BA%AC" class="mw-redirect" title="曹京">曹京</a>三子。</li>
<li>周姬，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E5%9D%87" title="曹均">曹均</a>一子。</li>
<li>刘姬，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E6%A3%98" class="mw-redirect" title="曹棘">曹棘</a>一子。</li>
<li>宋姬，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E5%BE%BD" title="曹徽">曹徽</a>一子。</li>
<li>赵姬，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E8%8C%82" title="曹茂">曹茂</a>一子。</li>
<li>陈妾，曹操之妾，生有<a href="/wiki/%E6%9B%B9%E5%B9%B9" title="曹干">曹干</a>一子。</li>
<li><a href="/wiki/%E5%BC%B5%E6%BF%9F_(%E6%AD%A6%E5%A8%81)" title="张济 (武威)">张济</a>妻，<a href="/wiki/%E5%BC%A0%E7%BB%A3" class="mw-redirect" title="张绣">张绣</a>族叔之妻，曹操纳为妾室后，引张绣所恨<sup id="cite_ref-110" class="reference"><a href="#cite_note-110">&#91;109&#93;</a></sup>。</li></ul>
<p>其他
</p>
<ul><li>来莺儿，野史记载，东汉雒阳之名妓，后爱上曹操的侍卫<a href="/wiki/%E7%8E%8B%E5%9C%96" class="mw-disambig" title="王图">王图</a>。</li></ul>
<h3><span id=".E5.85.92.E5.AD.90"></span><span class="mw-headline" id="兒子">儿子</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=32" title="编辑章节：儿子">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>据《魏志·文帝纪》、《任城陈萧王传》、《武文世王公传》，曹操的儿子有25位，总体次序不可考，仅知同一母下的排序：
</p>
<ul><li><a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a>（？ - 197年），刘夫人长子，曹操庶长子，但是由曹操原配丁氏抚养长大，年轻时曾举孝廉。因<a href="/wiki/%E5%BC%B5%E7%B9%A1" title="张绣">张绣</a>反叛而死于战乱之中。被二弟曹丕追尊为丰悼公，后又追加尊为追悼王。</li>
<li><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>（187年 - 226年），卞皇后长子，220年称帝为魏文帝。</li>
<li><a href="/wiki/%E6%9B%B9%E5%BD%B0" title="曹彰">曹彰</a>（189年 - 223年），卞皇后次子，绰号“黄须儿”，为一勇将，曾经大破代郡乌桓，223年封任城王。</li>
<li><a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a>（192年 - 232年），卞皇后三子，擅长文学，曾作《<a href="/wiki/%E6%B4%9B%E7%A5%9E%E8%B3%A6" class="mw-redirect" title="洛神赋">洛神赋</a>》。虽然得到曹操宠爱，但是与其兄曹丕争位失败，从此在政治上无从施展抱负，223年封雍丘王，232年封陈王。</li>
<li><a href="/wiki/%E6%9B%B9%E7%86%8A" title="曹熊">曹熊</a>（？ - ？），卞皇后四子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E9%91%A0" title="曹铄">曹铄</a>（？ - ？），刘夫人次子，早薨。侄魏明帝<a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">曹叡</a>后追封其为殇王。有子曹潜及孙曹偃，曹偃死后绝子嗣。</li>
<li><a href="/wiki/%E6%9B%B9%E6%B2%96" class="mw-redirect" title="曹冲">曹冲</a>（196年 - 208年），环夫人长子，为著名神童，13岁时便夭折而亡。</li>
<li><a href="/wiki/%E6%9B%B9%E6%93%9A" title="曹据">曹据</a>（？ - ？），环夫人次子，太和六年（232年）封为彭城王。</li>
<li><a href="/wiki/%E6%9B%B9%E5%AE%87" title="曹宇">曹宇</a>（？ - 278年），环夫人三子，太和六年（232年）封为燕王，魏元帝<a href="/wiki/%E6%9B%B9%E5%A5%82" title="曹奂">曹奂</a>之父。</li>
<li><a href="/wiki/%E6%9B%B9%E6%9E%97" title="曹林">曹林</a>（？ - 256年），杜夫人长子，太和六年（232年）封为沛王。</li>
<li><a href="/wiki/%E6%9B%B9%E8%A2%9E" title="曹衮">曹衮</a>（？ - 235年），杜夫人次子，太和六年（232年）封为中山王。临终病重时魏明帝<a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">曹叡</a>对其爱护备至，死后又获厚葬。</li>
<li><a href="/wiki/%E6%9B%B9%E7%8E%B9" title="曹玹">曹玹</a>（？ - ？），秦夫人长子，建安十六年（211年）封为西乡侯。</li>
<li><a href="/wiki/%E6%9B%B9%E5%B3%BB" title="曹峻">曹峻</a>（？ - 259年），秦夫人次子太和六年（232年）封为陈留王。</li>
<li><a href="/wiki/%E6%9B%B9%E7%9F%A9" title="曹矩">曹矩</a>（？ - ？），尹夫人独子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E5%B9%B9" title="曹干">曹干</a>（214年 - 261年），生母陈氏去世，由王夫人抚养，太和六年（232年）封为赵王。</li>
<li><a href="/wiki/%E6%9B%B9%E4%B8%8A" class="mw-redirect" title="曹上">曹上</a>（？ - ？），孙姬长子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E5%BD%AA" title="曹彪">曹彪</a>（195年 - 251年），孙姬次子，太和六年（232年）封为楚王。嘉平三年（251年）与太尉<a href="/wiki/%E7%8E%8B%E5%87%8C" title="王凌">王凌</a>谋反事泄，被赐死。</li>
<li><a href="/wiki/%E6%9B%B9%E5%8B%A4" class="mw-redirect" title="曹勤">曹勤</a>（？ - ？），孙姬三子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E4%B9%98" class="mw-redirect" title="曹乘">曹乘</a>（？ - ？），李姬长子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E6%95%B4" class="mw-redirect" title="曹整">曹整</a>（？ - 218年），李姬次子，建安廿二年（217年）封为郿侯。</li>
<li><a href="/wiki/%E6%9B%B9%E4%BA%AC" class="mw-redirect" title="曹京">曹京</a>（？ - ？），李姬三子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E5%9D%87" title="曹均">曹均</a>（？ - 219年），周姬独子，建安廿二年（217年）封为樊侯。</li>
<li><a href="/wiki/%E6%9B%B9%E6%A3%98" class="mw-redirect" title="曹棘">曹棘</a>（？ - ？），刘姬独子，早薨。</li>
<li><a href="/wiki/%E6%9B%B9%E5%BE%BD" title="曹徽">曹徽</a>（？ - 241年），宋姬独子，太和六年（232年）封为东平王。</li>
<li><a href="/wiki/%E6%9B%B9%E8%8C%82" title="曹茂">曹茂</a>（？ - ？），赵姬独子，与曹操及曹丕不和，太和六年（232年）封为曲阳王。</li></ul>
<h3><span id=".E5.A5.B3.E5.85.92"></span><span class="mw-headline" id="女兒">女儿</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=33" title="编辑章节：女儿">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操的女儿，可考证者6位，及其相关史书：
</p>
<ul><li><a href="/wiki/%E6%9B%B9%E6%86%B2_(%E6%9D%B1%E6%BC%A2)" title="曹宪 (东汉)">曹宪</a>（？ - ？），汉献帝贵人。（《后汉书·皇后纪下》）</li>
<li><a href="/wiki/%E6%9B%B9%E7%AF%80_(%E6%BC%A2%E7%8D%BB%E5%B8%9D)" class="mw-redirect" title="曹节 (汉献帝)">曹节</a>（？ - 260年），汉献帝皇后。（《后汉书·皇后纪下》、《后汉书·孝献帝纪》）</li>
<li><a href="/wiki/%E6%9B%B9%E8%8F%AF" title="曹华">曹华</a>（？ - ？），汉献帝贵人。（《后汉书·皇后纪下》）</li>
<li><a href="/wiki/%E5%AE%89%E9%99%BD%E5%85%AC%E4%B8%BB_(%E6%9B%B9%E9%AD%8F)" title="安阳公主 (曹魏)">安阳公主</a>（？ - ？），名不详，为<a href="/wiki/%E8%8D%80%E6%83%B2" title="荀恽">荀恽</a>之妻。（《魏志·荀彧传》）。她的儿子<a href="/wiki/%E8%8D%80%E9%9C%AC" title="荀霬">荀霬</a>娶<a href="/wiki/%E5%8F%B8%E9%A6%AC%E7%82%8E" title="司马炎">晋武帝</a>姑母<a href="/wiki/%E5%8D%97%E9%99%BD%E5%85%AC%E4%B8%BB_(%E8%A5%BF%E6%99%89)" title="南阳公主 (西晋)">南阳公主</a>。</li>
<li><a href="/wiki/%E9%87%91%E9%84%89%E5%85%AC%E4%B8%BB" class="mw-redirect" title="金乡公主">金乡公主</a>（？ - ？），名不详，尹夫人或杜夫人之女，<a href="/wiki/%E4%BD%95%E6%99%8F" title="何晏">何晏</a>之妻。（《魏志·曹真传》引《魏末传》）</li>
<li><a href="/wiki/%E6%B8%85%E6%B2%B3%E5%85%AC%E4%B8%BB_(%E6%9B%B9%E9%AD%8F)" title="清河公主 (曹魏)">清河公主</a>（？ - ？），名不详，<a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%A5%99" title="夏侯楙">夏侯楙</a>之妻。（《魏志·夏侯惇传》引《魏略》）</li></ul>
<p>另《<a href="/wiki/%E6%98%AD%E6%98%8E%E6%96%87%E9%80%89" class="mw-redirect" title="昭明文选">昭明文选</a>》<a href="/wiki/%E9%99%86%E6%9C%BA" title="陆机">陆机</a>《吊魏武文》<a href="/wiki/%E6%9D%8E%E5%96%84_(%E5%94%90%E6%9C%9D)" title="李善 (唐朝)">李善</a>注引《魏略》曰：太祖杜夫人生沛王豹及高城公主。未知高城公主与金乡公主是否一人。
</p>
<h3><span id=".E4.BE.84.E8.BC.A9"></span><span class="mw-headline" id="侄輩">侄辈</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=34" title="编辑章节：侄辈">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E6%9B%B9%E5%AE%89%E6%B0%91" title="曹安民">曹安民</a>，曹操之侄，因为张绣反叛而死于战乱之中。</li>
<li><a href="/wiki/%E6%9B%B9%E4%BC%91" title="曹休">曹休</a>（？－228年）：字文烈，太祖族子，其祖父曾为<a href="/wiki/%E5%90%B4%E9%83%A1" title="吴郡">吴郡</a><a href="/wiki/%E5%A4%AA%E5%AE%88" title="太守">太守</a>。十余岁时，父死，独与一家仆携母亲渡江至吴。曹操起兵，变更姓名，辗转荆州，以投奔曹操。初为虎豹骑宿卫。黄初七年（226年）封邑2500户。官至大司马，封长平侯。死后谥为壮候。正始四年（243年）在太祖庙庭，享祭祀。</li>
<li>曹氏，曹操弟海阳哀侯（名不详）女，嫁<a href="/wiki/%E5%A4%8F%E4%BE%AF%E8%A1%A1" title="夏侯衡">夏侯衡</a>。</li>
<li>曹氏，曹操侄女，嫁<a href="/wiki/%E5%AD%99%E5%8C%A1" class="mw-redirect" title="孙匡">孙匡</a>。</li></ul>
<h3><span id=".E9.A4.8A.E5.AD.90"></span><span class="mw-headline" id="養子">养子</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=35" title="编辑章节：养子">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>曹操的养子，可考证者3位：
</p>
<ul><li><a href="/wiki/%E6%9B%B9%E7%9C%9F" title="曹真">曹真</a>（？－231年）：字子丹，太祖养子，其父<a href="/wiki/%E6%9B%B9%E9%82%B5" title="曹邵">曹邵</a>为曹操招兵被人所杀。《魏略》中说其本姓秦，其父为掩护曹操，为追兵所杀，曹操收养真，改其姓为曹。初讲虎豹骑。太和三年（229年）封邑2900户。官至大司马，封邵陵侯。死后谥号为元侯。子<a href="/wiki/%E6%9B%B9%E7%88%BD" title="曹爽">曹爽</a></li>
<li><a href="/wiki/%E7%A7%A6%E6%9C%97" title="秦朗">秦朗</a>（？－？），曹操养子，曹叡的近臣。生父<a href="/wiki/%E7%A7%A6%E5%AE%9C%E7%A5%BF" title="秦宜禄">秦宜禄</a>为<a href="/wiki/%E5%BC%B5%E9%A3%9B" class="mw-redirect" title="张飞">张飞</a>所杀。母为曹操之妾杜夫人。</li>
<li><a href="/wiki/%E4%BD%95%E6%99%8F" title="何晏">何晏</a>（?－249年），大将军何进孙，曹操的养子、女婿，三国时期玄学家。父何咸早亡，母为曹操之妾尹夫人。</li></ul>
<h3><span id=".E5.BE.8C.E8.A3.94"></span><span class="mw-headline" id="後裔">后裔</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=36" title="编辑章节：后裔">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E6%9B%B9%E9%9C%B8" title="曹霸">曹霸</a>：高贵乡公曹髦后人，唐玄宗时期画家，能文善画，官至左武卫将军，<a href="/wiki/%E6%9D%9C%E7%94%AB" title="杜甫">杜甫</a>作有《丹青引》及《观曹将军画马图》二诗，表达对其画艺的赞叹。</li>
<li><a href="/wiki/%E6%9B%B9%E9%9B%AA%E8%8A%B9" title="曹雪芹">曹雪芹</a>：清朝小说家，中国四大名著《<a href="/wiki/%E7%BA%A2%E6%A5%BC%E6%A2%A6" title="红楼梦">红楼梦</a>》的作者。<sup id="cite_ref-111" class="reference"><a href="#cite_note-111">&#91;110&#93;</a></sup></li></ul>
<h2><span id=".E6.B0.91.E9.96.93.E8.97.9D.E8.A1.93"></span><span class="mw-headline" id="民間藝術">民间艺术</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=37" title="编辑章节：民间艺术">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span id=".E4.B8.89.E5.9B.BD.E6.BC.94.E4.B9.89"></span><span class="mw-headline" id="三国演义">三国演义</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=38" title="编辑章节：三国演义">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>《三国演义》是中国历史小说中出类拔萃的长篇巨著。此作塑造了众多形象鲜明且生动的人物，其中曹操是《三国演义》中塑造得最为成功的人物之一，他的性格既丰富又矛盾。他既是智谋机警，志大才高的英雄；同时又是一奸诈狡猾，嗜血残忍之奸雄。曹操因而被评为“古今奸雄中的第一奇人”。罗贯中对曹操这一矛盾形象的雕塑非常深刻，摆脱了早期小说中人物形象性格单一化、平面化的缺陷。<a href="/wiki/%E6%AF%9B%E5%AE%97%E5%B4%97" title="毛宗岗">毛宗岗</a>称其为“三绝”之“奸绝”。
</p>
<h3><span id=".E6.88.B2.E5.8A.87"></span><span class="mw-headline" id="戲劇">戏剧</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=39" title="编辑章节：戏剧">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><a href="/wiki/%E4%BA%AC%E5%8A%87" class="mw-redirect" title="京剧">京剧</a>里的曹操是以白脸的形象来表示他奸诈狡猾、诡计多端的反面人物，与黑脸<a href="/wiki/%E5%8C%85%E5%85%AC" class="mw-redirect" title="包公">包公</a>或红脸<a href="/wiki/%E9%97%9C%E5%85%AC" class="mw-redirect" title="关公">关公</a>相对。
</p>
<h3><span id=".E6.BC.AB.E7.95.AB"></span><span class="mw-headline" id="漫畫">漫画</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=40" title="编辑章节：漫画">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>日本漫画家<a href="/wiki/%E7%8E%8B%E6%AC%A3%E5%A4%AA" title="王欣太">王欣太</a>漫画作品《<a href="/wiki/%E8%92%BC%E5%A4%A9%E8%88%AA%E8%B7%AF" title="苍天航路">苍天航路</a>》以曹操为主角。另外，在《<a href="/wiki/%E7%81%AB%E9%B3%B3%E7%87%8E%E5%8E%9F" title="火凤燎原">火凤燎原</a>》（<a href="/wiki/%E9%99%B3%E6%9F%90" title="陈某">陈某</a>）、《超三国志霸》（<a href="/wiki/%E6%B1%A0%E4%B8%8A%E8%BE%BD%E4%B8%80" title="池上辽一">池上辽一</a>）、《天地吞食》（<a href="/wiki/%E6%9C%AC%E5%AE%AB%E5%AE%8F%E5%BF%97" title="本宫宏志">本宫宏志</a>）、《<a href="/wiki/%E9%BE%8D%E7%8B%BC%E5%82%B3" title="龙狼传">龙狼传</a>》（<a href="/wiki/%E5%B1%B1%E5%8E%9F%E7%BE%A9%E4%BA%BA" title="山原义人">山原义人</a>）、《<a href="/w/index.php?title=%E6%9B%B9%E6%93%8D%E5%AD%9F%E5%BE%B7%E6%AD%A3%E5%82%B3&amp;action=edit&amp;redlink=1" class="new" title="曹操孟德正传（页面不存在）">曹操孟德正传</a>》（<a href="/w/index.php?title=%E5%A4%A7%E8%A5%BF%E5%B7%B7%E4%B8%80&amp;action=edit&amp;redlink=1" class="new" title="大西巷一（页面不存在）">大西巷一</a>）等，曹操也都作为一名主要角色出场。
</p>
<h3><span id=".E9.81.8A.E6.88.B2"></span><span class="mw-headline" id="遊戲">游戏</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=41" title="编辑章节：游戏">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E7%9C%9F%C2%B7%E4%B8%89%E5%9C%8B%E7%84%A1%E9%9B%99%E7%B3%BB%E5%88%97" title="真·三国无双系列">真·三国无双系列</a></li>
<li><a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97_(%E9%81%8A%E6%88%B2)" title="三国志 (游戏)">三国志</a></li>
<li><a href="/wiki/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80" title="王者荣耀">王者荣耀</a></li>
<li><a href="/wiki/%E4%B8%89%E5%9B%BD%E7%BE%A4%E8%8B%B1%E4%BC%A0%E7%B3%BB%E5%88%97" title="三国群英传系列">三国群英传系列</a></li>
<li><a href="/wiki/%E5%B9%BB%E6%83%B3%E4%B8%89%E5%9B%BD%E5%BF%97II" title="幻想三国志II">幻想三国志II</a></li>
<li><a href="/wiki/%E7%A5%9E%E9%AD%94%E4%B9%8B%E5%A1%94" title="神魔之塔">神魔之塔</a></li>
<li><a href="/wiki/%E4%B8%89%E5%9B%BD%E6%9D%80" title="三国杀">三国杀</a></li></ul>
<h3><span id=".E5.8B.95.E7.95.AB"></span><span class="mw-headline" id="動畫">动画</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=42" title="编辑章节：动画">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<ul><li><a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97_(%E5%8B%95%E7%95%AB%E9%9B%BB%E5%BD%B1)" title="三国志 (动画电影)">三国志</a></li>
<li><a href="/wiki/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89_(%E5%8A%A8%E7%94%BB)" title="三国演义 (动画)">三国演义</a></li>
<li><a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97_(%E6%BC%AB%E7%95%AB)" title="三国志 (漫画)">横山光辉三国志</a></li>
<li><a href="/wiki/%E8%92%BC%E5%A4%A9%E8%88%AA%E8%B7%AF" title="苍天航路">苍天航路</a></li></ul>
<h3><span id=".E9.9B.BB.E5.BD.B1"></span><span class="mw-headline" id="電影">电影</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=43" title="编辑章节：电影">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<table class="wikitable">
<tbody><tr>
<th><b>影视作品</b></th>
<th><b>饰演演员</b>
</th></tr>
<tr>
<td>《<a href="/w/index.php?title=%E7%A5%9E%E9%80%9A%E6%9C%AF%E4%B8%8E%E5%B0%8F%E9%9C%B8%E7%8E%8B&amp;action=edit&amp;redlink=1" class="new" title="神通术与小霸王（页面不存在）">神通术与小霸王</a>》（1983年）</td>
<td><a href="/wiki/%E7%99%BD%E5%BD%AA" title="白彪">白彪</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E5%8D%8E%E4%BD%97%E4%B8%8E%E6%9B%B9%E6%93%8D&amp;action=edit&amp;redlink=1" class="new" title="华佗与曹操（页面不存在）">华佗与曹操</a>》（1983年）</td>
<td><a href="/w/index.php?title=%E7%8E%8B%E6%B4%AA%E7%94%9F&amp;action=edit&amp;redlink=1" class="new" title="王洪生（页面不存在）">王洪生</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E9%97%9C%E5%85%AC_(%E9%9B%BB%E5%BD%B1)&amp;action=edit&amp;redlink=1" class="new" title="关公 (电影)（页面不存在）">关公</a>》（1992年）</td>
<td><a href="/wiki/%E8%83%A1%E5%BA%86%E5%A3%AB" title="胡庆士">胡庆士</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E8%AF%B8%E8%91%9B%E5%AD%94%E6%98%8E_(%E9%9B%BB%E5%BD%B1)&amp;action=edit&amp;redlink=1" class="new" title="诸葛孔明 (电影)（页面不存在）">诸葛孔明</a>》（1996年）</td>
<td rowspan="2"><a href="/wiki/%E6%9F%AF%E4%BF%8A%E9%9B%84" title="柯俊雄">柯俊雄</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E4%B8%80%E4%BB%A3%E6%9E%AD%E9%9B%84%E6%9B%B9%E6%93%8D&amp;action=edit&amp;redlink=1" class="new" title="一代枭雄曹操（页面不存在）">一代枭雄曹操</a>》（1999年）
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E4%B9%8B%E8%A6%8B%E9%BE%8D%E5%8D%B8%E7%94%B2" title="三国之见龙卸甲">三国之见龙卸甲</a>》（2008年）</td>
<td><a href="/wiki/%E5%8A%89%E6%9D%BE%E4%BB%81" title="刘松仁">刘松仁</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E8%B5%A4%E5%A3%81_(%E9%9B%BB%E5%BD%B1)" class="mw-redirect" title="赤壁 (电影)">赤壁</a>》（2008年）</td>
<td rowspan="2"><a href="/wiki/%E5%BC%B5%E8%B1%90%E6%AF%85" class="mw-redirect" title="张丰毅">张丰毅</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E8%B5%A4%E5%A3%81_(%E9%9B%BB%E5%BD%B1)" class="mw-redirect" title="赤壁 (电影)">赤壁：决战天下</a>》（2009年）
</td></tr>
<tr>
<td>《<a href="/wiki/%E8%B6%8A%E5%85%89%E5%AF%B6%E7%9B%92" title="越光宝盒">越光宝盒</a>》（2010年）</td>
<td><a href="/wiki/%E9%83%AD%E5%BE%B7%E7%B6%B1" class="mw-redirect" title="郭德纲">郭德纲</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E9%97%9C%E9%9B%B2%E9%95%B7_(%E9%9B%BB%E5%BD%B1)" title="关云长 (电影)">关云长</a>》（2011年）</td>
<td><a href="/wiki/%E5%A7%9C%E6%96%87" title="姜文">姜文</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E9%92%9F%E7%B9%87_(%E9%9B%BB%E5%BD%B1)&amp;action=edit&amp;redlink=1" class="new" title="钟繇 (电影)（页面不存在）">钟繇</a>》（2011年）</td>
<td><a href="/w/index.php?title=%E5%90%B4%E5%B9%BF%E6%9E%97_(%E6%BC%94%E5%93%A1)&amp;action=edit&amp;redlink=1" class="new" title="吴广林 (演员)（页面不存在）">吴广林</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E9%93%9C%E9%9B%80%E5%8F%B0_(%E7%94%B5%E5%BD%B1)" title="铜雀台 (电影)">铜雀台</a>》（2012年）</td>
<td><a href="/wiki/%E5%91%A8%E6%B6%A6%E5%8F%91" title="周润发">周润发</a>
</td></tr>
</tbody></table>
<h3><span id=".E9.9B.BB.E8.A6.96.E5.8A.87"></span><span class="mw-headline" id="電視劇">电视剧</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=44" title="编辑章节：电视剧">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<table class="wikitable">
<tbody><tr>
<th><b>影视作品</b></th>
<th><b>饰演演员</b>
</th></tr>
<tr>
<td>《<a href="/wiki/%E6%B4%9B%E7%A5%9E_(1975%E5%B9%B4%E9%9B%BB%E8%A6%96%E5%8A%87)" title="洛神 (1975年电视剧)">洛神</a>》（1975年）</td>
<td><a href="/wiki/%E9%99%B3%E6%9C%89%E5%90%8E" title="陈有后">陈有后</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E6%98%A5%E7%A7%8B" title="三国春秋">三国春秋</a>》（1976年）</td>
<td><a href="/wiki/%E6%A2%81%E5%A4%A9" class="mw-disambig" title="梁天">梁天</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E8%AB%B8%E8%91%9B%E4%BA%AE_(%E4%B8%AD%E5%9C%8B%E5%A4%A7%E9%99%B8%E9%9B%BB%E8%A6%96%E5%8A%87)" title="诸葛亮 (中国大陆电视剧)">诸葛亮</a>》（1985年）</td>
<td rowspan="2"><a href="/wiki/%E7%8E%8B%E5%81%89_(%E9%A6%99%E6%B8%AF)" title="王伟 (香港)">王伟</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E8%AB%B8%E8%91%9B%E4%BA%AE_(%E4%BA%9E%E8%A6%96%E9%9B%BB%E8%A6%96%E5%8A%87%E9%9B%86)" class="mw-redirect" title="诸葛亮 (亚视电视剧)">诸葛亮</a>》（1985年）
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89_(%E7%94%B5%E8%A7%86%E5%89%A7)" title="三国演义 (电视剧)">三国演义</a>》（1994年）</td>
<td><a href="/wiki/%E9%AE%91%E5%9C%8B%E5%AE%89" class="mw-redirect" title="鲍国安">鲍国安</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%9C%E6%96%B9%E5%B0%8F%E6%95%85%E4%BA%8B" title="东方小故事">东方小故事</a>之望梅止渴》（1994年）</td>
<td><a href="/wiki/%E6%9D%8E%E5%9B%BD%E6%A2%81" title="李国梁">李国梁</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E6%B4%9B%E7%A5%9E_(1994%E5%B9%B4%E6%AD%8C%E4%BB%94%E6%88%B2)" title="洛神 (1994年歌仔戏)">杨丽花歌仔戏洛神</a>》（1994年）</td>
<td><a href="/wiki/%E9%BB%83%E9%BE%8D" class="mw-redirect mw-disambig" title="黄龙">黄龙</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E8%8B%B1%E9%9B%84%E5%82%B3%E4%B9%8B%E9%97%9C%E5%85%AC" title="三国英雄传之关公">三国英雄传之关公</a>》（1996年）</td>
<td><a href="/wiki/%E9%BE%8D%E9%9A%86" title="龙隆">龙隆</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E6%9B%B9%E6%93%8D_(1999%E5%B9%B4%E7%94%B5%E8%A7%86%E5%89%A7)&amp;action=edit&amp;redlink=1" class="new" title="曹操 (1999年电视剧)（页面不存在）">曹操</a>》（1999年）</td>
<td><a href="/wiki/%E5%A7%9A%E6%A9%B9" title="姚橹">姚橹</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E9%86%AB%E7%A5%9E%E8%8F%AF%E4%BD%97" title="医神华佗">医神华佗</a>》（2000年）</td>
<td><a href="/wiki/%E9%BB%84%E6%97%A5%E5%8D%8E" class="mw-redirect" title="黄日华">黄日华</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E5%91%82%E5%B8%83%E8%88%87%E8%B2%82%E8%9F%AC&amp;action=edit&amp;redlink=1" class="new" title="吕布与貂蝉（页面不存在）">吕布与貂蝉</a>》（2001年）</td>
<td><a href="/wiki/%E9%82%B5%E5%B3%B0" class="mw-disambig" title="邵峰">邵峰</a>、<a href="/wiki/%E8%81%B6%E9%81%A0" class="mw-redirect" title="聂远">聂远</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E6%B4%9B%E7%A5%9E_(2002%E5%B9%B4%E9%9B%BB%E8%A6%96%E5%8A%87)" title="洛神 (2002年电视剧)">洛神</a>》（2002年）</td>
<td><a href="/wiki/%E5%8A%89%E6%85%B6%E5%9F%BA" class="mw-redirect" title="刘庆基">刘丹</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E6%9B%B9%E6%93%8D%E4%B8%8E%E8%94%A1%E6%96%87%E5%A7%AC&amp;action=edit&amp;redlink=1" class="new" title="曹操与蔡文姬（页面不存在）">曹操与蔡文姬</a>》（2002年）</td>
<td><a href="/wiki/%E6%BF%AE%E5%AD%98%E6%98%95" title="濮存昕">濮存昕</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E6%AD%A6%E5%9C%A3%E5%85%B3%E5%85%AC" title="武圣关公">武圣关公</a>》（2004年）</td>
<td><a href="/wiki/%E9%BB%91%E5%AD%90_(%E6%BC%94%E5%91%98)" title="黑子 (演员)">黑子</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E7%B5%82%E6%A5%B5%E4%B8%89%E5%9C%8B" title="终极三国">终极三国</a>》（2009年）</td>
<td><a href="/wiki/%E9%99%B3%E4%B9%83%E6%A6%AE" title="陈乃荣">陈乃荣</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%89%E5%9B%BD_(%E7%94%B5%E8%A7%86%E5%89%A7)" title="三国 (电视剧)">三国</a>》（2010年）</td>
<td><a href="/wiki/%E9%99%B3%E5%BB%BA%E6%96%8C" class="mw-redirect" title="陈建斌">陈建斌</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E5%9B%9E%E5%88%B0%E4%B8%89%E5%9C%8B" title="回到三国">回到三国</a>》（2012年）</td>
<td><a href="/wiki/%E7%BE%85%E6%A8%82%E6%9E%97" title="罗乐林">罗乐林</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E6%96%B0%E6%B4%9B%E7%A5%9E" title="新洛神">新洛神</a>》（2013年）</td>
<td><a href="/wiki/%E6%9D%8E%E8%BF%9B%E8%8D%A3" title="李进荣">李进荣</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E6%9B%B9%E6%93%8D_(%E7%94%B5%E8%A7%86%E5%89%A7)" title="曹操 (电视剧)">曹操</a>》（2014年）</td>
<td><a href="/wiki/%E7%8E%8B%E7%80%9A" class="mw-disambig" title="王瀚">王瀚</a>（少年）、<a href="/wiki/%E8%B5%B5%E7%AB%8B%E6%96%B0" title="赵立新">赵立新</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E5%8D%8A%E4%B8%BA%E8%8B%8D%E7%94%9F%E5%8D%8A%E7%BE%8E%E4%BA%BA" title="半为苍生半美人">半为苍生半美人</a>》（2015年）</td>
<td><a href="/wiki/%E7%8E%8B%E5%BB%BA%E6%96%B0_(1970%E5%B9%B4)" title="王建新 (1970年)">王建新</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E6%AD%A6%E7%A5%9E%E8%B5%B5%E5%AD%90%E9%BE%99" title="武神赵子龙">武神赵子龙</a>》（2016年）</td>
<td><a href="/w/index.php?title=%E5%BC%A0%E9%B9%B0&amp;action=edit&amp;redlink=1" class="new" title="张鹰（页面不存在）">张鹰</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E7%B5%82%E6%A5%B5%E4%B8%89%E5%9C%8B_(2017%E5%B9%B4)" title="终极三国 (2017年)">终极三国</a>》（2017年）</td>
<td><a href="/w/index.php?title=%E6%A5%9A%E5%96%AC&amp;action=edit&amp;redlink=1" class="new" title="楚乔（页面不存在）">楚乔</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E5%A4%A7%E5%86%9B%E5%B8%88%E5%8F%B8%E9%A9%AC%E6%87%BF" title="大军师司马懿">大军师司马懿之军师联盟</a>》（2017年）</td>
<td><a href="/wiki/%E4%BA%8E%E5%92%8C%E4%BC%9F" title="于和伟">于和伟</a>
</td></tr>
<tr>
<td>《<a href="/w/index.php?title=%E5%B0%8F%E6%88%8F%E9%AA%A8%EF%BC%9A%E6%94%BE%E5%BC%80%E9%82%A3%E4%B8%89%E5%9B%BD&amp;action=edit&amp;redlink=1" class="new" title="小戏骨：放开那三国（页面不存在）">小戏骨：放开那三国</a>》（2017年）</td>
<td><a href="/w/index.php?title=%E6%9D%8E%E4%BF%8A%E8%B1%AA&amp;action=edit&amp;redlink=1" class="new" title="李俊豪（页面不存在）">李俊豪</a>
</td></tr>
<tr>
<td>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%9C%BA%E5%AF%86" class="mw-redirect" title="三国机密">三国机密</a>》（2018年）</td>
<td><a href="/wiki/%E8%B0%A2%E5%90%9B%E8%B1%AA" class="mw-redirect" title="谢君豪">谢君豪</a>
</td></tr></tbody></table>
<h2><span id=".E6.B3.A8.E9.87.8A"></span><span class="mw-headline" id="注释">注释</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=45" title="编辑章节：注释">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<div id="references-NoteFoot"><ol class="references">
<li id="cite_note-16"><span class="mw-cite-backlink"><b><a href="#cite_ref-16">^</a></b></span> <span class="reference-text"><a href="/w/index.php?title=%E5%B0%89&amp;action=edit&amp;redlink=1" class="new" title="尉（页面不存在）">尉</a>，即<a href="/wiki/%E5%8E%BF%E5%B0%89" title="县尉">县尉</a>，是<a href="/wiki/%E5%8E%BF%E4%BB%A4" title="县令">县令</a>的辅官，掌管<a href="/wiki/%E6%B2%BB%E5%AE%89" class="mw-redirect" title="治安">治安</a>捕盗工作，约相当于现代的副县长兼县<a href="/wiki/%E8%AD%A6%E5%AF%9F%E5%B1%80" title="警察局">警察局</a>局长。由于首都<a href="/wiki/%E6%B4%9B%E9%99%BD" class="mw-redirect" title="洛阳">洛阳</a>所在地<a href="/wiki/%E9%9B%92%E9%99%BD%E7%B8%A3" class="mw-redirect" title="雒阳县">雒阳县</a>为<a href="/wiki/%E9%A6%96%E9%83%BD" title="首都">京县</a>，所以设置有四个县尉，北部尉是其中之一。</span>
</li>
</ol></div>
<h2><span id=".E5.8F.82.E8.80.83.E6.96.87.E7.8C.AE"></span><span class="mw-headline" id="参考文献">参考文献</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=46" title="编辑章节：参考文献">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span id=".E5.BC.95.E7.94.A8"></span><span class="mw-headline" id="引用">引用</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=47" title="编辑章节：引用">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<div class="reflist columns references-column-width" style="-moz-column-width: 30em; -webkit-column-width: 30em; column-width: 30em; list-style-type: decimal;">
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1">^</a></b></span> <span class="reference-text">《三国志·后妃传》：年二十，太祖于谯纳后为妾。</span>
</li>
<li id="cite_note-2"><span class="mw-cite-backlink"><b><a href="#cite_ref-2">^</a></b></span> <span class="reference-text"><cite class="citation book">陈寿. <a class="external text" href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701">三国志·卷01</a>. 中文维基文库. <q>谥曰武王。</q></cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzh.wikipedia.org%3A%E6%9B%B9%E6%93&amp;rft.au=%E9%99%88%E5%AF%BF&amp;rft.btitle=%E4%B8%89%E5%9C%E5%BF%97+%B7%E5%B701&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fzh.wikisource.org%2Fwiki%2F%25E4%25B8%2589%25E5%259C%258B%25E5%25BF%2597%2F%25E5%258D%25B701&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;">&#160;</span></span></span>
</li>
<li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3">^</a></b></span> <span class="reference-text">《太平御览》卷436引刘昭《幼童传》：魏太祖幼而知勇，年十岁，尝浴于谯水，有蛟来逼，自水奋蛟，蛟乃潜退。于是毕浴而还，弗之言也。后有人见大蛇，奔逐。太祖笑之曰："吾为蛟所击而未惧，斯畏蛇而恐耶？"众问乃知，咸惊异焉。</span>
</li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4">^</a></b></span> <span class="reference-text">《世说新语·假谲第二十七》：魏武少时，尝与袁绍好为游侠，观人新婚，因潜入主人园中，夜叫呼云：“有偷儿贼！”青庐中人皆出观，魏武乃入，抽刃劫新妇与绍还出，失道，坠枳棘中，绍不能得动，复大叫云：“偷儿在此！”绍遑迫自掷出，遂以俱免。</span>
</li>
<li id="cite_note-5"><span class="mw-cite-backlink"><b><a href="#cite_ref-5">^</a></b></span> <span class="reference-text">《后汉书·卷五十一·李陈庞陈桥列传第四十一》：初，曹操微时，人莫知者。尝往候玄，玄见而异焉。谓曰：“今天下将乱，安生民者其在君乎！”</span>
</li>
<li id="cite_note-6"><span class="mw-cite-backlink"><b><a href="#cite_ref-6">^</a></b></span> <span class="reference-text">《三国志·卷一·魏书一·武帝纪第一》：玄谓太祖曰：“天下将乱，非命世之才不能济也，能安之者，其在君乎！”</span>
</li>
<li id="cite_note-7"><span class="mw-cite-backlink"><b><a href="#cite_ref-7">^</a></b></span> <span class="reference-text">《三国志注·卷一·魏书一·武帝纪第一》：魏书曰：太尉桥玄，世名知人，睹太祖而异之，曰：“吾见天下名士多矣，未有若君者也！君善自持。吾老矣！原以妻子为讬。”</span>
</li>
<li id="cite_note-8"><span class="mw-cite-backlink"><b><a href="#cite_ref-8">^</a></b></span> <span class="reference-text">《后汉书·卷六十七·党锢列传第五十七》：初，颙见曹操，叹曰：“汉家将亡，安天下者必此人也。”操以是嘉之。</span>
</li>
<li id="cite_note-9"><span class="mw-cite-backlink"><b><a href="#cite_ref-9">^</a></b></span> <span class="reference-text">《后汉书·卷六十七·党锢列传第五十七》：初，曹操微时，瓒异其才，将没，谓子宣等曰：“时将乱矣，天下英雄无过曹操。张孟卓与吾善，袁本初汝外亲，虽尔勿依，必归曹氏。”诸子从之，并免于乱世。</span>
</li>
<li id="cite_note-10"><span class="mw-cite-backlink"><b><a href="#cite_ref-10">^</a></b></span> <span class="reference-text">《三国志注·卷一·魏书一·武帝纪第一》：公之为布衣，特爱俊；俊亦称公有治世之具。及袁绍与弟术丧母，归葬汝南，俊与公会之，会者三万人。公于外密语俊曰：“天下将乱，为乱魁者必此二人也。欲济天下，为百姓请命，不先诛此二子，乱今作矣。”俊曰：“如卿之言，济天下者，舍卿复谁？”</span>
</li>
<li id="cite_note-11"><span class="mw-cite-backlink"><b><a href="#cite_ref-11">^</a></b></span> <span class="reference-text">《后汉书·卷六十八·郭符许列传第五十八》：曹操微时，常卑辞厚礼，求为己目。劭鄙其人而不肯对，操乃伺隙胁劭，劭不得已，曰：“君清平之奸贼，乱世之英雄。”操大悦而去。</span>
</li>
<li id="cite_note-12"><span class="mw-cite-backlink"><b><a href="#cite_ref-12">^</a></b></span> <span class="reference-text">《三国志注·卷一·魏书一·武帝纪第一》：世语曰：玄谓太祖曰：“君未有名，可交许子将。”太祖乃造子将，子将纳焉，由是知名。</span>
</li>
<li id="cite_note-13"><span class="mw-cite-backlink"><b><a href="#cite_ref-13">^</a></b></span> <span class="reference-text">《三国志注·卷一·魏书一·武帝纪第一》：尝问许子将：“我何如人？”子将不答。固问之，子将曰：“子治世之能臣，乱世之奸雄。”太祖大笑。</span>
</li>
<li id="cite_note-14"><span class="mw-cite-backlink"><b><a href="#cite_ref-14">^</a></b></span> <span class="reference-text">《资治通鉴·卷第五十八·汉纪五十》：操父嵩，为中常侍曹腾养子，不能审其生出本末，或云夏侯氏子也。操少机警，有权数，而任侠放荡，不治行业。世人未之奇也，唯太尉桥玄及南阳何颙异焉。玄谓操曰：“天下将乱，非命世之才，不能济也。能安之者，其在君乎！”颙见操，叹曰：“汉家将亡，安天下者，必此人也。”玄谓操曰：“君未有名，可交许子将。”子将者，训之从子劭也，好人伦，多所赏识，与从兄靖俱有高名，好共核论乡党人物，每月辄更其品题，故汝南俗有月旦评焉。尝为郡功曹，府中闻之，莫不改操饰行。曹操往造劭而问之曰：“我何如人？”劭鄙其为人，不答。操乃劫之，劭曰：“子，治世之能臣，乱世之奸雄。”操大喜而去。</span>
</li>
<li id="cite_note-15"><span class="mw-cite-backlink"><b><a href="#cite_ref-15">^</a></b></span> <span class="reference-text">《世说新语·识鉴》引《续汉书》：初，魏武帝为诸生，未知名也，（桥）玄甚异之。</span>
</li>
<li id="cite_note-17"><span class="mw-cite-backlink"><b><a href="#cite_ref-17">^</a></b></span> <span class="reference-text">《晋书》卷36:鹄之为选部也，魏武欲为洛阳令，而以为北部尉，故惧而自缚诣门，署军假司马。</span>
</li>
<li id="cite_note-18"><span class="mw-cite-backlink"><b><a href="#cite_ref-18">^</a></b></span> <span class="reference-text">据《三国志》裴松之注所引的《魏武故事》建安十五年12月己亥令所载：“故在济南，始除残去秽，平心选举，违迕诸常侍。以为强豪所忿，恐致家祸，故以病还。去官之后，年纪尚少，……故以四时归乡里，于谯东五十里筑精舍，欲秋夏读书，冬春射猎，……。”</span>
</li>
<li id="cite_note-19"><span class="mw-cite-backlink"><b><a href="#cite_ref-19">^</a></b></span> <span class="reference-text">魏书载太祖拒芬辞曰：“夫是废立之事，天下之至不祥也。”</span>
</li>
<li id="cite_note-20"><span class="mw-cite-backlink"><b><a href="#cite_ref-20">^</a></b></span> <span class="reference-text">《太平御览》卷467引《曹操别传》曰：拜操典军都尉，还谯、沛，士卒共叛，袭击之。操得脱身亡走，窜平河亭长舍，称曹济南处士。卧养足创八九日，谓亭长曰："曹济南虽败，存亡未可知。公幸能以车牛相送，往还四五日，吾厚报公。"亭长乃以车牛送操，未至谯，数十里骑求操者多，操开帷示之，皆大喜，始悟是操。</span>
</li>
<li id="cite_note-21"><span class="mw-cite-backlink"><b><a href="#cite_ref-21">^</a></b></span> <span class="reference-text">《三国志》卷1注引《魏书》：（曹操）从数骑过故人成皋吕伯奢；伯奢不在，其子与宾客共劫太祖，取马及物，太祖手刃击杀数人。</span>
</li>
<li id="cite_note-22"><span class="mw-cite-backlink"><b><a href="#cite_ref-22">^</a></b></span> <span class="reference-text">《三国志》卷1注引《世语》：太祖过伯奢。伯奢出行，五子皆在，备宾主礼。太祖自以背卓命，疑其图己，手剑夜杀八人而去。</span>
</li>
<li id="cite_note-23"><span class="mw-cite-backlink"><b><a href="#cite_ref-23">^</a></b></span> <span class="reference-text">《三国志》卷1注引孙盛《杂记》：太祖闻其食器声，以为图己，遂夜杀之。既而凄怆曰“宁我负人，毋人负我！”遂行。</span>
</li>
<li id="cite_note-24"><span class="mw-cite-backlink"><b><a href="#cite_ref-24">^</a></b></span> <span class="reference-text">《太平御览》卷478引《魏国统》：初，太祖过故人吕伯奢也。遂行，日暮，道逢二人，容貌威武，太祖避之路。二人笑曰：“观君有奔惧之色，何也？”太祖始觉其异，乃悉告之。临别，太祖解佩刀与之曰：“以此表吾丹心，愿二贤慎勿言。”</span>
</li>
<li id="cite_note-25"><span class="mw-cite-backlink"><b><a href="#cite_ref-25">^</a></b></span> <span class="reference-text">世语曰：“中牟疑是亡人，见拘于县。时掾亦已被卓书；唯功曹心知是太祖，以世方乱，不宜拘天下雄儁，因白令释之。”</span>
</li>
<li id="cite_note-26"><span class="mw-cite-backlink"><b><a href="#cite_ref-26">^</a></b></span> <span class="reference-text">《太平御览》卷346引《魏武军策令》：孤先在襄邑，有起兵意，与工师共作卑手刀。时北海孙宾硕来候孤，讥孤曰：“当慕其大者，乃与工师共作刀耶？”孤答曰：“能小复能大，何害！”</span>
</li>
<li id="cite_note-27"><span class="mw-cite-backlink"><b><a href="#cite_ref-27">^</a></b></span> <span class="reference-text">《三国志》卷1：黑山贼于毒、白绕、眭固等十余万众略魏郡、东郡，王肱不能御，太祖引兵入东郡，击白绕于濮阳，破之。袁绍因表太祖为东郡太守，治东武阳。</span>
</li>
<li id="cite_note-28"><span class="mw-cite-backlink"><b><a href="#cite_ref-28">^</a></b></span> <span class="reference-text">对于曹嵩之死，史书说法不一。第一种说法，《三国志·武帝记》引《世语》曰：嵩在泰山华县。太祖令泰山太守应劭送家诣兖州，劭兵未至，陶谦密遣数千骑掩捕。嵩家以为劭迎，不设备。谦兵至，杀太祖弟德于门中。嵩惧，穿后垣，先出其妾，妾肥，不时得出；嵩逃于厕，与妾俱被害，阖门皆死。劭惧，弃官赴袁绍。后太祖定冀州，劭时已死。第二种说法，《三国志·武帝记》引《吴书》曰：太祖迎嵩，辎重百馀两。陶谦遣都尉张闿将骑二百卫送，闿于泰山华、费间杀嵩，取财物，因奔淮南。太祖归咎于陶谦，故伐之。</span>
</li>
<li id="cite_note-29"><span class="mw-cite-backlink"><b><a href="#cite_ref-29">^</a></b></span> <span class="reference-text">《三国志》卷17：初，清河朱灵为袁绍将。太祖之征陶谦，绍使灵督三营助太祖，战有功。</span>
</li>
<li id="cite_note-上-30"><span class="mw-cite-backlink"><b><a href="#cite_ref-上_30-0">^</a></b></span> <span class="reference-text"><cite class="citation book">朱大渭、梁满仓. 《一代军师——诸葛亮（上部）》. 台北市: <a href="/wiki/%E9%BA%A5%E7%94%B0%E5%87%BA%E7%89%88" title="麦田出版">麦田出版</a>. 2009 [2007].</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzh.wikipedia.org%3A%E6%9B%B9%E6%93&amp;rft.btitle=%E3%8A%E4%B8%E4%BB%A3%E8%BB%E5%B8%AB%94%94%E8%AB%B8%E8%91%9B%E4%BA%AE%EF%BC%88%E4%B8%8A%E9%83%A8%EF%BC%89%E3&amp;rft.date=2009&amp;rft.genre=book&amp;rft.place=%E5%8F%B0%E5%8C%97%E5%B8%82&amp;rft.pub=%E9%BA%A5%E7%94%B0%E5%87%BA%E7%89%88&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;">&#160;</span></span></span>
</li>
<li id="cite_note-31"><span class="mw-cite-backlink"><b><a href="#cite_ref-31">^</a></b></span> <span class="reference-text">范晔 《<a href="https://zh.wikisource.org/wiki/%E5%BE%8C%E6%BC%A2%E6%9B%B8/%E5%8D%B773#陶謙" class="extiw" title="s:后汉书/卷73">s:后汉书/卷73#陶谦</a>列传》：初平四年，曹操击谦，破彭城、傅阳。谦退保郯，操攻之不能克，乃还。过拔取虑、雎陵、夏丘，皆屠之。凡杀男女数十万人，鸡犬无余，泗水为之不流，自是五县城保，无复行多。</span>
</li>
<li id="cite_note-32"><span class="mw-cite-backlink"><b><a href="#cite_ref-32">^</a></b></span> <span class="reference-text">《昭明文选》卷44&lt;陈琳为袁绍檄豫州&gt;注引谢承《后汉书》：操围吕布于濮阳，为布所破，投绍。绍哀之，乃给兵五千人，还取兖州。</span>
</li>
<li id="cite_note-33"><span class="mw-cite-backlink"><b><a href="#cite_ref-33">^</a></b></span> <span class="reference-text">《太平御览》卷969引&lt;魏武帝为兖州牧上书&gt;:山阳郡有美梨，谨上甘梨二箱。</span>
</li>
<li id="cite_note-34"><span class="mw-cite-backlink"><b><a href="#cite_ref-34">^</a></b></span> <span class="reference-text">《太平御览》卷971引&lt;魏武帝为兖州牧上书&gt;：谨上椑、枣二箱。</span>
</li>
<li id="cite_note-35"><span class="mw-cite-backlink"><b><a href="#cite_ref-35">^</a></b></span> <span class="reference-text">《三国志·魏书·荀彧传》：彧劝太祖曰：“昔<a href="/wiki/%E6%99%89%E6%96%87%E5%85%AC" class="mw-redirect" title="晋文公">晋文</a>纳<a href="/wiki/%E5%91%A8%E8%A5%84%E7%8E%8B" title="周襄王">周襄王</a>而诸侯景从，<a href="/wiki/%E6%BC%A2%E9%AB%98%E7%A5%96" class="mw-redirect" title="汉高祖">高祖</a>东伐为义帝缟素而天下归心。自天子播越，将军首唱义兵，徒以山东扰乱，未能远赴<a href="/w/index.php?title=%E5%85%B3%E5%8F%B3&amp;action=edit&amp;redlink=1" class="new" title="关右（页面不存在）">关右</a>，然犹分遣将帅，蒙险通使，虽御难于外，乃心无不在王室，是将军匡天下之素志也。今车驾旋轸，东京榛芜，义士有存本之思，百姓感旧而增哀。诚因此时，奉主上以从民望，大顺也；秉至公以服雄杰，大略也；扶弘义以致英俊，大德也。天下虽有逆节，必不能为累，明矣。<a href="/wiki/%E9%9F%A9%E6%9A%B9" class="mw-redirect" title="韩暹">韩暹</a>、<a href="/wiki/%E6%A5%8A%E5%A5%89" title="杨奉">杨奉</a>其敢为害！若不时定，四方生心，后虽虑之，无及。”<a href="/wiki/%E9%AD%8F%E5%A4%AA%E7%A5%96" class="mw-redirect" title="魏太祖">太祖</a>遂至洛阳，奉迎天子都许。”</span>
</li>
<li id="cite_note-36"><span class="mw-cite-backlink"><b><a href="#cite_ref-36">^</a></b></span> <span class="reference-text">《三国志·魏书·毛玠传》:今天下分崩，国主迁移，生民废业，饥馑流亡，公家无经岁之储，百姓无安固之志，难以持久。今袁绍、刘表，虽士民众彊，皆无经远之虑，未有树基建本者也。夫兵义者胜，守位以财，宜奉天子以令不臣，脩耕植，畜军资，如此则霸王之业可成也。</span>
</li>
<li id="cite_note-37"><span class="mw-cite-backlink"><b><a href="#cite_ref-37">^</a></b></span> <span class="reference-text">出自《后汉书·孝献帝纪》，下面丞相、魏公和魏王的封位亦同。</span>
</li>
<li id="cite_note-38"><span class="mw-cite-backlink"><b><a href="#cite_ref-38">^</a></b></span> <span class="reference-text">《昭明文选》卷四四&lt;陈琳为袁绍檄豫州&gt;注引谢承《后汉书》：操得兖州，兵众强盛，内怀反绍意。</span>
</li>
<li id="cite_note-39"><span class="mw-cite-backlink"><b><a href="#cite_ref-39">^</a></b></span> <span class="reference-text">《后汉书》卷74：建安元年，曹操迎天子都许，乃下诏书于绍，责以地广兵多而专自树党，不闻勤王之师而但擅相讨伐。</span>
</li>
<li id="cite_note-40"><span class="mw-cite-backlink"><b><a href="#cite_ref-40">^</a></b></span> <span class="reference-text">《三国志》卷6引《献帝春秋》：绍耻班在太祖下，怒曰；“曹操当死数矣，我辄救存之，今乃背恩，挟天子以令我乎！”太祖闻，而以大将军让于绍。</span>
</li>
<li id="cite_note-41"><span class="mw-cite-backlink"><b><a href="#cite_ref-41">^</a></b></span> <span class="reference-text">《后汉书》卷74：绍上书曰.....于是以绍为太尉，封邺侯。时曹操自为大将军，绍耻为之下，伪表辞不受。操大惧，乃让位于绍。二年，使将作大匠孔融持节拜绍大将军，锡弓矢节钺，虎贲百人。</span>
</li>
<li id="cite_note-42"><span class="mw-cite-backlink"><b><a href="#cite_ref-42">^</a></b></span> <span class="reference-text">《后汉书》卷74：绍每得诏书，患有不便于己，乃欲移天子自近，使说操以许下埤湿，洛阳残破，宜徙都甄城，甄音绢。以就全实。操拒之。</span>
</li>
<li id="cite_note-43"><span class="mw-cite-backlink"><b><a href="#cite_ref-43">^</a></b></span> <span class="reference-text"><a href="/wiki/%E7%8E%8B%E9%B8%A3%E7%9B%9B" class="mw-redirect" title="王鸣盛">王鸣盛</a>，《<a href="/wiki/%E5%8D%81%E4%B8%83%E5%8F%B2%E5%95%86%E6%A6%B7" title="十七史商榷">十七史商榷</a>·三国志二》</span>
</li>
<li id="cite_note-44"><span class="mw-cite-backlink"><b><a href="#cite_ref-44">^</a></b></span> <span class="reference-text"><a href="/wiki/%E8%B5%B5%E7%BF%BC" class="mw-redirect" title="赵翼">赵翼</a>，《<a href="/wiki/%E4%BA%8C%E5%8D%81%E4%BA%8C%E5%8F%B2%E6%9C%AD%E8%AE%B0" class="mw-redirect" title="二十二史札记">二十二史札记</a>·卷七》</span>
</li>
<li id="cite_note-45"><span class="mw-cite-backlink"><b><a href="#cite_ref-45">^</a></b></span> <span class="reference-text">万绳楠：《陈寅恪魏晋南北朝史演讲录》，页9-13。</span>
</li>
<li id="cite_note-46"><span class="mw-cite-backlink"><b><a href="#cite_ref-46">^</a></b></span> <span class="reference-text">袁宏《后汉纪》卷30：（建安）十九年春三月癸未，改授魏公金玺、赤黻、远游冠。</span>
</li>
<li id="cite_note-47"><span class="mw-cite-backlink"><b><a href="#cite_ref-47">^</a></b></span> <span class="reference-text">《三国志·魏书十四·刘晔传》：鲁奔走，汉中遂平。晔进曰：“明公以步卒五千，将诛董卓，北破袁绍，南征刘表，九州百郡，十并其八，威震天下，势慑海外。今举汉中，蜀人望风，破胆失守，推此而前，蜀可传檄而定。刘备，人杰也，有度而迟，得蜀日浅，蜀人未恃也。今破汉中，蜀人震恐，其势自倾。以公之神明，因其倾而压之，无不克也。若小缓之，诸葛亮明于治而为相，关羽、张飞勇冠三军而为将，蜀民既定，据险守要，则不可犯矣。今不取，必为后忧。”太祖不从。《傅子》曰：居七日，蜀降者说：“蜀中一日数十惊，备虽斩之而不能安也。”太祖延问晔曰：“今尚可击不？”晔曰：“今已小定，未可击也。”大军遂还。</span>
</li>
<li id="cite_note-48"><span class="mw-cite-backlink"><b><a href="#cite_ref-48">^</a></b></span> <span class="reference-text">陆机《吊魏武帝文》：逾镐京而不豫，临渭滨而有疑。</span>
</li>
<li id="cite_note-49"><span class="mw-cite-backlink"><b><a href="#cite_ref-49">^</a></b></span> <span class="reference-text">《三国志·武帝记》引《九州春秋》曰：时王欲还，出令曰“鸡肋”，官属不知所谓。主簿杨修便自严装，人惊问修：“何以知之？”修曰：“夫鸡肋，弃之如可惜，食之无所得，以比汉中，知王欲还也。”</span>
</li>
<li id="cite_note-50"><span class="mw-cite-backlink"><b><a href="#cite_ref-50">^</a></b></span> <span class="reference-text">【《庞德传》：侯音、卫开等以宛叛，德将所领与曹仁共攻拔宛，斩音、开，遂南屯樊，讨关羽。】【《魏武纪》：（建安二十三年）冬十月，宛守将侯音等反，执南阳太守，劫略吏民，保宛。初，曹仁讨关羽，屯樊城，是月使仁围宛。 二十四年春正月，仁屠宛，斩音。】</span>
</li>
<li id="cite_note-51"><span class="mw-cite-backlink"><b><a href="#cite_ref-51">^</a></b></span> <span class="reference-text">《三国志·蜀书·关羽传》：梁、郏、陆浑群盗或遥受羽印号，为之支党，羽威震华夏。</span>
</li>
<li id="cite_note-52"><span class="mw-cite-backlink"><b><a href="#cite_ref-52">^</a></b></span> <span class="reference-text">《晋书·宣帝记》：帝谏曰：“禁等为水所没，非战守之所失，于国家大计未有所损，而便迁都，既示敌以弱，又淮沔之人大不安矣。孙权、刘备，外亲内疏，羽之得意，权所不愿也。可喻权所，令掎其后，则樊围自解。”【又见《魏志·蒋济传》】</span>
</li>
<li id="cite_note-53"><span class="mw-cite-backlink"><b><a href="#cite_ref-53">^</a></b></span> <span class="reference-text">《三国志·吴书·吴主传》：曹公且欲使羽与权相持以斗之，驿传权书，使曹仁以弩射示羽。羽犹豫不能去。</span>
</li>
<li id="cite_note-中華民國中央研究院兩千年中西曆轉換-54"><span class="mw-cite-backlink">^ <a href="#cite_ref-中華民國中央研究院兩千年中西曆轉換_54-0"><sup><b>53.0</b></sup></a> <a href="#cite_ref-中華民國中央研究院兩千年中西曆轉換_54-1"><sup><b>53.1</b></sup></a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://sinocal.sinica.edu.tw/">中华民国中央研究院两千年中西历转换</a></span>
</li>
<li id="cite_note-遗言-55"><span class="mw-cite-backlink">^ <a href="#cite_ref-遗言_55-0"><sup><b>54.0</b></sup></a> <a href="#cite_ref-遗言_55-1"><sup><b>54.1</b></sup></a></span> <span class="reference-text">《遗令》：“吾死之后，葬于邺之西冈上，与西门豹祠相近，无藏金玉珠宝。馀香可分与诸夫人，不命祭。吾婢妾与伎人皆勤苦，使著铜雀台，善待之。台上施六尺床，下施穗帐，朝脯上酒脯米长糒之属，每月朝旦十五日，自朝至午，辄向帐前作伎乐。汝等时时登铜雀台，望吾西陵墓田。馀香可分与诸夫人，不命祭。诸舍中无所为，可学作组履卖也。吾历官所得绶，皆著藏中。吾馀衣裳，可别为一藏，不能者兄弟可共分之”。</span>
</li>
<li id="cite_note-56"><span class="mw-cite-backlink"><b><a href="#cite_ref-56">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701" class="extiw" title="s:三国志/卷01">三国志武帝纪</a>》：太祖少机警、有权术、而任侠放荡、不治行业、故世人未之奇也</span>
</li>
<li id="cite_note-57"><span class="mw-cite-backlink"><b><a href="#cite_ref-57">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B712" class="extiw" title="s:三国志/卷12">三国志‧何夔传</a>》：太祖性严，掾属公事，往往加杖；夔常畜毒药，誓死无辱，是以终不见及。</span>
</li>
<li id="cite_note-58"><span class="mw-cite-backlink"><b><a href="#cite_ref-58">^</a></b></span> <span class="reference-text">《后汉书‧方术列传下》：“为人性恶，难得意，且耻以医见业，又去家思归，乃就操求还取方，因托妻疾，数期不反。操累书呼之，又敕郡县发遣，佗恃能厌事，独不肯至。操大怒，使人廉之，知妻诈疾，乃收付狱讯，考验首服。荀彧请曰：“佗方术实工，人命所悬，宜加全宥。”操不从，竟杀之。”</span>
</li>
<li id="cite_note-59"><span class="mw-cite-backlink"><b><a href="#cite_ref-59">^</a></b></span> <span class="reference-text">裴注《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701" class="extiw" title="s:三国志/卷01">三国志·武帝纪</a>》引《曹瞒传》：初，袁忠为沛相，尝欲以法治太祖，沛国桓邵亦轻之，及在<a href="/wiki/%E5%85%97%E5%B7%9E" class="mw-redirect" title="兖州">兖州</a>，<a href="/wiki/%E9%99%B3%E7%95%99" class="mw-redirect" title="陈留">陈留</a>边让言议颇侵太祖，太祖杀让，族其家，忠、邵俱避难交州，太祖遣使就太守士燮尽族之。桓邵得出首，拜谢于庭中，太祖谓曰：“跪可解死邪！”遂杀之。</span>
</li>
<li id="cite_note-60"><span class="mw-cite-backlink"><b><a href="#cite_ref-60">^</a></b></span> <span class="reference-text"><a href="/wiki/%E8%A3%B4%E6%9D%BE%E4%B9%8B" title="裴松之">裴</a>注《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B706" class="extiw" title="s:三国志/卷06">三国志·刘表传</a>》引《<a href="/w/index.php?title=%E9%9B%B6%E9%99%B5%E5%85%88%E8%B3%A2%E5%82%B3&amp;action=edit&amp;redlink=1" class="new" title="零陵先贤传（页面不存在）">零陵先贤传</a>》：不疑幼有异才，聦明敏达，太祖欲以女妻之，不疑不敢当。太祖爱子<a href="/wiki/%E6%9B%B9%E6%B2%96" class="mw-redirect" title="曹冲">仓舒</a>夙有才智，谓可与不疑为俦。及仓舒卒，太祖心忌不疑，欲除之。文帝谏以为不可，太祖曰：“此人非汝所能驾御也。”乃遣<a href="/wiki/%E5%88%BA%E5%AE%A2" class="mw-redirect" title="刺客">刺客</a>杀之。</span>
</li>
<li id="cite_note-61"><span class="mw-cite-backlink"><b><a href="#cite_ref-61">^</a></b></span> <span class="reference-text">《太平御览》卷241引《魏略》：抚军都尉，秩比二千石，本校事官。始太祖欲广耳目，使卢洪、赵达二人主刺举，洪、达多所陷入，故于时军中为之语曰︰“不畏曹公，但畏卢洪；卢洪尚可，赵达杀我。”后达竟为人迫死。</span>
</li>
<li id="cite_note-62"><span class="mw-cite-backlink"><b><a href="#cite_ref-62">^</a></b></span> <span class="reference-text">裴注《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701" class="extiw" title="s:三国志/卷01">三国志·武帝纪</a>》引《<a href="/wiki/%E9%AD%8F%E6%9B%B8" class="mw-redirect" title="魏书">魏书</a>》:兵谋叛，夜烧太祖帐，太祖手剑杀数十人，馀皆披靡，乃得出营。</span>
</li>
<li id="cite_note-63"><span class="mw-cite-backlink"><b><a href="#cite_ref-63">^</a></b></span> <span class="reference-text">裴注《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701" class="extiw" title="s:三国志/卷01">三国志·武帝纪</a>》引孙盛异同杂语云：太祖尝私入中常侍张让室，让觉之；乃舞手戟于庭，逾垣而出。才武绝人，莫之能害。</span>
</li>
<li id="cite_note-64"><span class="mw-cite-backlink"><b><a href="#cite_ref-64">^</a></b></span> <span class="reference-text">

《<a href="https://zh.wikisource.org/wiki/%E5%BE%8C%E6%BC%A2%E6%9B%B8/%E5%8D%B773" class="extiw" title="s:后汉书/卷73">后汉书·陶谦列传</a>》：“过拔取虑、雎陵、夏丘，皆屠之。凡杀男女数十万人，鸡犬无余，泗水为之不流，自是五县城保，无复行迹。初三辅遭李傕乱，百姓流移依谦者皆歼。”

《<a href="https://zh.wikisource.org/wiki/%E8%B3%87%E6%B2%BB%E9%80%9A%E9%91%91/%E5%8D%B7060" class="extiw" title="s:资治通鉴/卷060">资治通鉴·卷六十</a>》：“初，京、雒遭<a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a>之乱，民流移东出，多依徐土，遇操至，坑杀男女数十万口于泗水，水为不流。操攻郯不能克，乃去，攻取应、睢陵、夏丘，皆屠之，鸡犬亦尽，墟邑无复行人。”

《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701" class="extiw" title="s:三国志/卷01">三国志·武帝纪</a>》：“九月，公东征布。冬十月，屠彭城”

《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B701" class="extiw" title="s:三国志/卷01">三国志·武帝纪</a>》：“夏四月，公自陈仓以出散关，至河池。氐王窦茂众万余人，恃险不服，五月，公攻屠之。”等</span>
</li>
<li id="cite_note-65"><span class="mw-cite-backlink"><b><a href="#cite_ref-65">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E5%BE%8C%E6%BC%A2%E6%9B%B8/%E5%8D%B774%E4%B8%8A" class="extiw" title="s:后汉书/卷74上">后汉书·袁绍列传</a>》记载：“余众伪降，曹操尽坑之，前后所杀八万人”</span>
</li>
<li id="cite_note-66"><span class="mw-cite-backlink"><b><a href="#cite_ref-66">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E5%BE%8C%E6%BC%A2%E6%9B%B8/%E5%8D%B79" class="extiw" title="s:后汉书/卷9">后汉书·孝献帝纪</a>》记载：“曹操杀皇后伏氏，灭其族及二皇子。”</span>
</li>
<li id="cite_note-67"><span class="mw-cite-backlink"><b><a href="#cite_ref-67">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E5%BE%8C%E6%BC%A2%E6%9B%B8/%E5%8D%B710%E4%B8%8B" class="extiw" title="s:后汉书/卷10下">后汉书·皇后纪</a>》：“董承女为贵人，操诛承而求贵人杀之。帝以贵人有妊，累为请，不能得。后自是怀惧，乃与父完书，言曹操残逼之状，令密图之。完不敢发，至十九年，事乃露泄。操追大怒，遂逼帝废后······又以尚书令华歆为郗虑副，勒兵入宫收后。闭户藏壁中，歆就牵后出。时帝在外殿，引虑于坐。后被发徒跣行泣过诀曰：“不能复相活邪？”帝曰：“我亦不知命在何时！”顾谓虑曰：“郗公，天下宁有是邪？”遂将后下暴室，以幽崩。所生二皇子，皆鸩杀之。后在位二十年，兄弟及宗族死者百余人，母盈等十九人徙涿郡。”</span>
</li>
<li id="cite_note-68"><span class="mw-cite-backlink"><b><a href="#cite_ref-68">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B711" class="extiw" title="s:三国志/卷11">三国志·袁涣传</a>》：是时新募民开屯田，民不乐，多逃亡。</span>
</li>
<li id="cite_note-69"><span class="mw-cite-backlink"><b><a href="#cite_ref-69">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B714" class="extiw" title="s:三国志/卷14">三国志·蒋济传</a>》：明年使于谯，太祖问济曰：“昔孤与袁本初对官渡，徙燕、白马民，民不得走，贼亦不敢抄。今欲徙淮南民，何如？”济对曰：“是时兵弱贼强，不徙必失之。自破<a href="/wiki/%E8%A2%81%E7%B4%B9" class="mw-redirect" title="袁绍">袁绍</a>，北拔柳城，南向江、汉，<a href="/wiki/%E8%8D%8A%E5%B7%9E" class="mw-redirect mw-disambig" title="荆州">荆州</a>交臂，威露天下，民无他志。然百姓怀土，实不乐徙，惧必不安。”太祖不从，而江、淮间十余万众，皆惊走吴。</span>
</li>
<li id="cite_note-70"><span class="mw-cite-backlink"><b><a href="#cite_ref-70">^</a></b></span> <span class="reference-text">《曹瞒传》：“是时南阳闲苦繇役，音于是执太守<a href="/wiki/%E6%9D%B1%E9%87%8C%E8%A2%9E" title="东里衮">东里衮</a>与吏民共反，与关羽连和。”</span>
</li>
<li id="cite_note-71"><span class="mw-cite-backlink"><b><a href="#cite_ref-71">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B711" class="extiw" title="s:三国志/卷11">三国志·管宁传</a>》：建安二十三年，陆浑长张固被书调丁夫，当给汉中。百姓恶惮远役，并怀扰扰。民<a href="/wiki/%E5%AD%AB%E7%8B%BC" title="孙狼">孙狼</a>等因兴兵杀县主簿，作为叛乱，县邑残破。</span>
</li>
<li id="cite_note-72"><span class="mw-cite-backlink"><b><a href="#cite_ref-72">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B714" class="extiw" title="s:三国志/卷14">三国志‧‧蒋济传</a>》：“屯田客吕并自称将军，聚党据陈仓，俨复率署等攻之，贼即破灭。”</span>
</li>
<li id="cite_note-73"><span class="mw-cite-backlink"><b><a href="#cite_ref-73">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B708" class="extiw" title="s:三国志/卷08">三国志·张绣传</a>》：太祖南征，军淯水，绣等举众降。太祖纳济妻，绣恨之。太祖闻其不悦，密有杀绣之计。计漏，绣掩袭太祖。太祖军败，二子没。</span>
</li>
<li id="cite_note-74"><span class="mw-cite-backlink"><b><a href="#cite_ref-74">^</a></b></span> <span class="reference-text">《三国志·典韦传》：绣反，袭太祖营，太祖出战不利，轻骑引去。韦战于门中，贼不得入。兵遂散从他门并入。时韦校尚有十余人，皆殊死战，无不一当十。贼前后至稍多，韦以长戟左右击之，一叉入，辄十余矛摧。左右死伤者略尽。韦被数十创，短兵接战，贼前搏之。韦双挟两贼击杀之，余贼不敢前。韦复前突贼，杀数人，创重发，瞋目大骂而死。</span>
</li>
<li id="cite_note-75"><span class="mw-cite-backlink"><b><a href="#cite_ref-75">^</a></b></span> <span class="reference-text">《蜀记》：曹公与刘备围吕布于下邳，关羽启公，布使秦宜禄行求救，乞娶其妻，公许之。临破，又屡启于公。公疑其有异色，先遣迎看，因自留之，羽心不自安</span>
</li>
<li id="cite_note-76"><span class="mw-cite-backlink"><b><a href="#cite_ref-76">^</a></b></span> <span class="reference-text">裴注《三国志·明帝纪》引《魏氏春秋》：“朗父名宜禄，为吕布使诣袁术，术妻以汉宗室女，其前妻杜氏留下邳。布之被围，关羽屡请于太祖，求以杜氏为妻，太祖疑其有色。及城陷，太祖见之，乃自纳之。</span>
</li>
<li id="cite_note-77"><span class="mw-cite-backlink"><b><a href="#cite_ref-77">^</a></b></span> <span class="reference-text">《<a href="https://zh.wikisource.org/wiki/%E6%BC%A2%E6%9C%AB%E8%8B%B1%E9%9B%84%E8%A8%98" class="extiw" title="s:汉末英雄记">英雄记</a>》：布谓太祖曰：“布待诸将厚也，诸将临急皆叛布耳。”太祖曰：“卿背妻，爱诸将妇，何以为厚？”布默然。</span>
</li>
<li id="cite_note-78"><span class="mw-cite-backlink"><b><a href="#cite_ref-78">^</a></b></span> <span class="reference-text">《秦朗传》：朗随母氏畜于公宫，太祖甚爱之，每坐席，谓宾客曰："世有人爱假子如孤者乎？"</span>
</li>
<li id="cite_note-79"><span class="mw-cite-backlink"><b><a href="#cite_ref-79">^</a></b></span> <span class="reference-text">《三国志》卷一注引《魏书》：初，城阳景王刘章以有功于汉，故其国为立祠，青州诸郡转相仿效，济南尤盛，至六百馀祠。贾人或假二千石舆服导从作倡乐，奢侈日甚，民坐贫穷，历世长吏无敢禁绝者。太祖到，皆毁坏祠屋，止绝官吏民不得祠祀。及至秉政，遂除奸邪鬼神之事，世之淫祀由此遂绝。</span>
</li>
<li id="cite_note-80"><span class="mw-cite-backlink"><b><a href="#cite_ref-80">^</a></b></span> <span class="reference-text">陈琳著《<a href="https://zh.wikisource.org/wiki/%E7%82%BA%E8%A2%81%E7%B4%B9%E6%AA%84%E8%B1%AB%E5%B7%9E" class="extiw" title="s:为袁绍檄豫州">为袁绍檄豫州</a>》：“又梁孝王，先帝母昆，坟陵尊显；桑梓松柏，犹宜肃恭，而操帅将吏士，亲临发掘，破棺裸尸，掠取金宝，至令全朝流涕，士民伤悲。操又特置发丘中郎将，摸金校尉，所过隳突，无骸不露。”</span>
</li>
<li id="cite_note-81"><span class="mw-cite-backlink"><b><a href="#cite_ref-81">^</a></b></span> <span class="reference-text">《后汉书》卷82下：左慈字元放，庐江人也。少有神道。尝在司空曹操坐，操从容顾众宾曰：“今日高会，珍羞略备，所少吴松江鲈鱼耳。”</span>
</li>
<li id="cite_note-82"><span class="mw-cite-backlink"><b><a href="#cite_ref-82">^</a></b></span> <span class="reference-text">《三国志注·魏书一·武帝纪》：吴人作曹瞒传及郭颁世语并云：嵩，夏侯氏之子，夏侯惇之叔父。太祖于惇为从父兄弟。</span>
</li>
<li id="cite_note-83"><span class="mw-cite-backlink"><b><a href="#cite_ref-83">^</a></b></span> <span class="reference-text">《义门读书记·卷二十四·后汉书列传》：注引曹瞒传及郭颁世语并云：嵩，夏侯氏子，惇之叔父，魏太祖于惇为从父兄弟也。按惇、渊之子皆与魏室缔姻，有以知曹瞒传及郭颁世语之妄。</span>
</li>
<li id="cite_note-84"><span class="mw-cite-backlink"><b><a href="#cite_ref-84">^</a></b></span> <span class="reference-text">《义门读书记·卷二十六·三国志魏志》：采注吴人作《曹瞒传》郭颁《世语》并云嵩夏侯氏子，按夏侯惇子楙尚清河公主，渊子衡亦娶曹氏，则谓嵩夏侯氏子者，敌国传闻，盖不足信。</span>
</li>
<li id="cite_note-85"><span class="mw-cite-backlink"><b><a href="#cite_ref-85">^</a></b></span> <span class="reference-text">《三国志考证·卷一·魏书一》：陈志于《帝纪》云：“莫能审其生出本末”，于列传则以夏侯惇、夏侯渊、曹仁、曹洪、曹休、曹真、夏侯尚为一卷，显以夏侯氏为宗室矣。</span>
</li>
<li id="cite_note-86"><span class="mw-cite-backlink"><b><a href="#cite_ref-86">^</a></b></span> <span class="reference-text">《三国志裴注疏》：历代史率以宗室合传，陈氏于蜀、吴亦然。志独以夏侯、曹氏合传，用意尤其明审。</span>
</li>
<li id="cite_note-87"><span class="mw-cite-backlink"><b><a href="#cite_ref-87">^</a></b></span> <span class="reference-text">《援鹑堂笔记·卷三十·三国志》：余按陈氏以夏侯及诸曹同列一卷，毋亦有是疑乎？又按陈矫刘氏子，而婚于刘颂，则未得以吴人作传而遂以为妄也。</span>
</li>
<li id="cite_note-88"><span class="mw-cite-backlink"><b><a href="#cite_ref-88">^</a></b></span> <span class="reference-text">《三国志注补·魏志列传第九》：承祚以夏侯与诸曹互列一卷，正隐寓操为夏侯氏子。至操以女妻茂，盖欲掩其迹，所谓奸也。而何氏转据此，力辨操非携养，不亦傎乎！</span>
</li>
<li id="cite_note-89"><span class="mw-cite-backlink"><b><a href="#cite_ref-89">^</a></b></span> <span class="reference-text">《大云山房文稿·初集卷二·书诸夏侯曹传后》：武帝纪注引曹瞒传及世语以操父为夏侯氏之子，于惇为叔父，后人谓承祚合传夏侯曹，以嵩为夏侯氏子。按传，太祖以女妻敦子楙，而渊子衡亦尚太祖弟海阳哀侯女，尚嫡室又曹氏女也。操虽鬼蜮，何至污乱若此邪！盖二氏世为婚姻，惇、渊有开国勋，与仁、洪、休、真等，及其亡也，爽与玄先后诛夷，大权始尽归司马氏，故合传之，以观魏氏兴衰之所由，乃作史定法也。</span>
</li>
<li id="cite_note-90"><span class="mw-cite-backlink"><b><a href="#cite_ref-90">^</a></b></span> <span class="reference-text">《四史发伏·卷九·三国志》：评夏侯曹氏世为婚姻，承祚盖因世有谓操夏侯氏子者，故评中特著夏侯、曹氏世为婚姻，以明其非。今之读《曹瞒传》《世语》而信为实者，皆不善读史。</span>
</li>
<li id="cite_note-91"><span class="mw-cite-backlink"><b><a href="#cite_ref-91">^</a></b></span> <span class="reference-text">《刘咸炘学术论集 史学编下·三国志知意》：《武纪》注引《曹瞒传》、郭颁《世语》并云嵩夏侯氏子。何曰：“夏侯惇子楙，尚太祖女清河公主；渊子衡，亦娶曹氏，则谓嵩为夏侯氏子者，敌国传闻，盖不足信。”赵一清《三国注补》曰：“承祚以夏侯、曹互列一卷，正隐寓操为夏侯氏子。至操以女妻茂，盖欲掩其迹，而或转据此力辨操非携养，不亦傎乎。”章学诚《乙卯答记》亦谓此篇有深意。洪亮吉《四史发伏》曰：“承祚盖因世有谓操夏侯氏子者，故评中特著夏侯、曹氏世为婚姻，以明其非。今之读《曹瞒传》《世语》而信为实者，皆不善读史。”恽敬《书后》曰：“后人谓承祚合传夏侯、曹，以嵩为夏侯氏子。按传，太祖以女妻敦子茂，而渊子衡亦尚太祖弟海阳哀侯女，尚嫡室又曹氏女也。操虽鬼蜮，何至污乱若此邪！盖二氏世为婚姻，敦、渊有开国勋，与仁、洪、休、真等。及其亡也，爽与玄先后诛夷，大权始尽归司马氏，故合传之，以观魏氏兴衰之所由，乃作史定法也。”尚说同恽。按即使嵩是夏侯子，未尝不可与夏侯氏为婚，彼固已异族也。陈矫亦行之矣。但夏侯氏子不足为丑，何故讳之？嵩为宦者养子，固人知之，而曹氏族亦未尝讳，不讳养子，而反讳夏侯乎？此不近情，固知其说不足信。合传之义，恽说为当，评中世为婚姻，乃是立此传之意。洪氏谓意在辨正世传，则反曲矣。</span>
</li>
<li id="cite_note-92"><span class="mw-cite-backlink"><b><a href="#cite_ref-92">^</a></b></span> <span class="reference-text">《四史评议·三国志评议·魏书武帝纪第一》：“莫能审其生出本末”句，揭老瞒家世，丑不可言。世言陈承祚此书专为魏讳，以此证之，殊不尽然。</span>
</li>
<li id="cite_note-93"><span class="mw-cite-backlink"><b><a href="#cite_ref-93">^</a></b></span> <span class="reference-text"><a href="/wiki/%E6%A2%81%E7%AB%A0%E5%B7%A8" class="mw-redirect" title="梁章巨">梁章巨</a>《三国志旁证·卷一》：按夏侯惇薨，裴注引《魏书》曰：“王素服幸邺东城门发哀。”孙盛曰：“在礼，天子哭同姓于宗庙门之外。哭于城门，失其所也。”魏并未闻以夏侯为同姓，故累为婚，孙氏所议，殊非事实。且其时即以天子例曹丕，又何说乎？</span>
</li>
<li id="cite_note-ReferenceA-94"><span class="mw-cite-backlink">^ <a href="#cite_ref-ReferenceA_94-0"><sup><b>93.0</b></sup></a> <a href="#cite_ref-ReferenceA_94-1"><sup><b>93.1</b></sup></a></span> <span class="reference-text">《三国志校诂》 江苏古籍出版社 1990年10月第一版 ISBN 978-7-80519-197-3K 1-2页</span>
</li>
<li id="cite_note-95"><span class="mw-cite-backlink"><b><a href="#cite_ref-95">^</a></b></span> <span class="reference-text">《三国志注证遗·卷一》：魏武纪云：“养子嵩嗣，官至太尉，莫能审其生出本末。”案嵩即操父也，裴注引吴人曹瞒传及郭颁世语并云嵩夏侯氏之子，夏侯惇之叔父。太祖于惇为从父兄弟注引曹瞒传及郭颁世语并云：嵩，夏侯氏子，惇之叔父，魏太祖于惇为从父兄弟也。何焯谓夏侯子楙尚清河公主，渊子衡亦娶曹氏，则谓嵩为夏侯氏之子者，敌国传闻，殆不足信。予案魏陈矫本刘氏子，出养于姑，改姓陈氏，后娶刘颂女。颂与矫固近亲也，魏武拥全之，特下令禁人诽议。殆以同姓为婚禁人议，即以便己私也。</span>
</li>
<li id="cite_note-96"><span class="mw-cite-backlink"><b><a href="#cite_ref-96">^</a></b></span> <span class="reference-text">朱子彦 存世曹氏族谱与曹操后裔无关——与复旦"曹操墓人类基因调查的历史学研究"课题组商榷 《上海大学学报(社会科学版)》 2010年03期</span>
</li>
<li id="cite_note-97"><span class="mw-cite-backlink"><b><a href="#cite_ref-97">^</a></b></span> <span class="reference-text">韩昇 曹魏世系考述《复旦学报(社会科学版)》2010年03期</span>
</li>
<li id="cite_note-98"><span class="mw-cite-backlink"><b><a href="#cite_ref-98">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.nature.com/jhg/journal/vaop/ncurrent/abs/jhg2011147a.html">Chuanchao Wang et al. 2011. Present Y chromosomes reveal the ancestry of Emperor CAO Cao of 1800 years ago. Journal of Human Genetics</a></span>
</li>
<li id="cite_note-99"><span class="mw-cite-backlink"><b><a href="#cite_ref-99">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20120419112231/http://edu.ifeng.com/news/detail_2011_12/30/11671866_0.shtml">复旦大学定位曹操家族DNA 称准确率超90%</a>.  <span class="reference-accessdate"> &#91;<span class="nowrap">2012-01-03</span>&#93;</span>. （<a rel="nofollow" class="external text" href="http://edu.ifeng.com/news/detail_2011_12/30/11671866_0.shtml">原始内容</a>存档于2012-04-19）.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzh.wikipedia.org%3A%E6%9B%B9%E6%93&amp;rft.btitle=%E5%A4%E6%97%A6%E5%A4%A7%E5+%A6%E5%AE%9A%E4%BD%E6%9B%B9%E6%93%E5%AE%B6%E6%97%8FDNA+%E7%A7%B0%E5%87%86%E7%A1%AE%E7%8E%87%E8%B6%8590%25&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fedu.ifeng.com%2Fnews%2Fdetail_2011_12%2F30%2F11671866_0.shtml&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;">&#160;</span></span></span>
</li>
<li id="cite_note-100"><span class="mw-cite-backlink"><b><a href="#cite_ref-100">^</a></b></span> <span class="reference-text">Validating the authenticity of the pedigrees of Chinese Emperor CAO Cao of 1,800 years ago.H. Li ICHG 会议摘要</span>
</li>
<li id="cite_note-101"><span class="mw-cite-backlink"><b><a href="#cite_ref-101">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://shanghai.xinmin.cn/xmsq/2013/11/11/22604074.html">复旦公布曹操家族DNA：非夏侯氏之后</a></span>
</li>
<li id="cite_note-102"><span class="mw-cite-backlink"><b><a href="#cite_ref-102">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://inews.ifeng.com/57065098/news.shtml">曹操遗骸基本确认，一代枭雄死后多少陪葬品？</a>. 凤凰网. 2018-03-26.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzh.wikipedia.org%3A%E6%9B%B9%E6%93&amp;rft.atitle=%E6%9B%B9%E6%93%E9%81%97%E9%AA%B8%E5%9F%BA%E6%9C%AC%E7%A1%AE%E8%AE%A4%EF%BC%8C%E4%B8%E4%BB%A3%E6%9E+%E9%9B%84%E6+%BB%E5%90%8E%E5%A4%9A%E5%B0%91%E9%99%AA%E8%91%AC%E5%93%81%EF%BC%9F&amp;rft.date=2018-03-26&amp;rft.genre=article&amp;rft.jtitle=%E5%87%A4%E5%87%B0%E7%BD%91&amp;rft_id=http%3A%2F%2Finews.ifeng.com%2F57065098%2Fnews.shtml&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;">&#160;</span></span></span>
</li>
<li id="cite_note-103"><span class="mw-cite-backlink"><b><a href="#cite_ref-103">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://3g.china.com/act/news/13001650/20180329/32244415.html">千古历史之谜破解：曹操的遗骸找到了</a>. 中华网. 2018-03-29.</cite><span title="ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzh.wikipedia.org%3A%E6%9B%B9%E6%93&amp;rft.atitle=%E5%83%E5%8F%A4%E5%8E%86%E5%8F%B2%E4%B9%E8%B0%9C%E7%A0%B4%E8%A7%A3%EF%BC%9A%E6%9B%B9%E6%93%E7%9A%84%E9%81%97%E9%AA%B8%E6%89%BE%E5%88%B0%E4%BA%86&amp;rft.date=2018-03-29&amp;rft.genre=article&amp;rft.jtitle=%E4%B8+%E5%8E%E7%BD%91&amp;rft_id=http%3A%2F%2F3g.china.com%2Fact%2Fnews%2F13001650%2F20180329%2F32244415.html&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;">&#160;</span></span></span>
</li>
<li id="cite_note-104"><span class="mw-cite-backlink"><b><a href="#cite_ref-104">^</a></b></span> <span class="reference-text">又<a href="/wiki/%E5%B9%B2%E5%AF%B6" class="mw-redirect" title="干宝">干宝</a>《<a href="/wiki/%E6%99%8B%E7%BA%AA" class="mw-redirect" title="晋纪">晋纪</a>》：帝配飨魏太祖庙。有奏诸功臣从飨者，更以官为次，在荀郭之上。</span>
</li>
<li id="cite_note-105"><span class="mw-cite-backlink"><b><a href="#cite_ref-105">^</a></b></span> <span class="reference-text">《三国志·魏书·武帝记》玄谓太祖曰:“天下将乱，非命世之才不能济也，能安之者，其在君乎”</span>
</li>
<li id="cite_note-106"><span class="mw-cite-backlink"><b><a href="#cite_ref-106">^</a></b></span> <span class="reference-text"><a href="/wiki/%E9%AD%9A%E8%B1%A2" title="鱼豢">鱼豢</a>私撰，《魏略辑本·卷第一》：曹操微时，人莫知之，惟桥玄见而异焉。谓曰：“今天下将乱，安生民者其在君乎！”</span>
</li>
<li id="cite_note-107"><span class="mw-cite-backlink"><b><a href="#cite_ref-107">^</a></b></span> <span class="reference-text">此据《后汉书·卷六十八·郭符许列传第五十八》，后在孙盛《异同杂语》及《三国演义》中作“子治世之能臣，乱世之奸雄也。”</span>
</li>
<li id="cite_note-108"><span class="mw-cite-backlink"><b><a href="#cite_ref-108">^</a></b></span> <span class="reference-text">《后汉书 卷六十七 党锢列传第五十七》:鼎者，中堂侍腾之弟也. 但是《三国志 卷九 魏书九 诸夏侯曹传第九》:曹洪字子廉，太祖从弟也。 裴松之注引王沈《魏书》：洪伯父鼎为尚书令，任洪为蕲春长。《三国志 卷一 魏书一 武帝纪》裴松之注引司马彪《续汉书》:长子伯兴，次子仲兴，次子叔兴。腾字季兴.曹腾应该是幼子，不存在弟弟。《后汉书》可能有误。</span>
</li>
<li id="cite_note-109"><span class="mw-cite-backlink"><b><a href="#cite_ref-109">^</a></b></span> <span class="reference-text">《三国志 卷九 魏书九 诸夏侯曹传第九》：曹休字文烈，太祖族子也。 裴松之注引王沈《魏书》曰：休祖父尝为吴郡太守。另外20世纪70年代，考古人员对安徽亳州南郊的曹操宗族墓进行部分考古发掘，发现了曹鼎墓，并且发现刻有“吴郡太守曹鼎字景节”等文字的墓砖。那曹休的祖父叫曹鼎是确认无误的。河间相曹鼎与吴郡太守曹鼎是同一人的可能性也比较大。</span>
</li>
<li id="cite_note-110"><span class="mw-cite-backlink"><b><a href="#cite_ref-110">^</a></b></span> <span class="reference-text">《三国志·魏书八·二公孙陶四张传第八》张绣，武威祖厉人，骠骑将军济族子也......太祖南征，军淯水，绣等举众降。太祖纳济妻，绣恨之。</span>
</li>
<li id="cite_note-111"><span class="mw-cite-backlink"><b><a href="#cite_ref-111">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://www.nownews.com/news/20120330/105415?from=scroll">曹雪芹是曹操后代子孙 经DNA检测证实</a> NOWnews 2012-03-30</span>
</li>
</ol></div>
<h3><span id=".E6.9D.A5.E6.BA.90"></span><span class="mw-headline" id="来源">来源</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=48" title="编辑章节：来源">编辑</a><span class="mw-editsection-bracket">]</span></span></h3>
<table class="mbox-small plainlinks sistersitebox" style="border:1px solid #aaa;background-color:#f9f9f9;font-size:small;">
<tbody><tr>
<td class="mbox-image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png" decoding="async" width="30" height="40" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/45px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/59px-Commons-logo.svg.png 2x" data-file-width="1024" data-file-height="1376" /></td>
<td class="mbox-text plainlist"><a href="/wiki/%E7%BB%B4%E5%9F%BA%E5%85%B1%E4%BA%AB%E8%B5%84%E6%BA%90" title="维基共享资源">维基共享资源</a>中相关的多媒体资源：<b><a class="external text" href="https://commons.wikimedia.org/wiki/%E6%9B%B9%E6%93%8D?uselang=zh-cn">曹操</a></b>（<a class="external text" href="https://commons.wikimedia.org/wiki/Category:Cao_Cao?uselang=zh-cn">分类</a>）</td></tr></tbody></table>
<table class="mbox-small plainlinks sistersitebox" style="border:1px solid #aaa;background-color:#f9f9f9;font-size:small;">
<tbody><tr>
<td class="mbox-image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/38px-Wikisource-logo.svg.png" decoding="async" width="38" height="40" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/57px-Wikisource-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/76px-Wikisource-logo.svg.png 2x" data-file-width="410" data-file-height="430" /></td>
<td class="mbox-text plainlist"><a href="/wiki/%E7%BB%B4%E5%9F%BA%E6%96%87%E5%BA%93" title="维基文库">维基文库</a>中该作者的作品：<br />
<b style="text-align: center;"><a href="https://zh.wikisource.org/wiki/Author:%E6%9B%B9%E6%93%8D" class="extiw" title="s:Author:曹操">曹操</a></b></td></tr></tbody></table>
<table class="mbox-small plainlinks sistersitebox" style="border:1px solid #aaa;background-color:#f9f9f9;font-size:small;">
<tbody><tr>
<td class="mbox-image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/34px-Wikiquote-logo.svg.png" decoding="async" width="34" height="40" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/51px-Wikiquote-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/68px-Wikiquote-logo.svg.png 2x" data-file-width="300" data-file-height="355" /></td>
<td class="mbox-text plainlist"><a href="/wiki/%E7%BB%B4%E5%9F%BA%E8%AF%AD%E5%BD%95" title="维基语录">维基语录</a>上的相关摘录： <b><a href="https://zh.wikiquote.org/wiki/Special:Search/%E6%9B%B9%E6%93%8D" class="extiw" title="q:Special:Search/曹操">曹操</a></b></td></tr></tbody></table>
<div role="navigation" aria-label="Portals" class="noprint portal plainlist tright" style="margin:0.5em 0 0.5em 1em;border:solid #aaa 1px">
<ul style="display:table;box-sizing:border-box;padding:0.1em;max-width:175px;background:#f9f9f9;font-size:85%;line-height:110%;font-weight:bold">
<li style="display:table-row"><span style="display:table-cell;padding:0.2em;vertical-align:middle;text-align:center"><a href="/wiki/File:China_dragon.svg" class="image"><img alt="icon" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/China_dragon.svg/32px-China_dragon.svg.png" decoding="async" width="32" height="21" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/China_dragon.svg/48px-China_dragon.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/b0/China_dragon.svg/64px-China_dragon.svg.png 2x" data-file-width="744" data-file-height="496" /></a></span><span style="display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle"><a href="/wiki/Portal:%E4%B8%AD%E5%9B%BD" title="Portal:中国">中国主题</a></span></li>
<li style="display:table-row"><span style="display:table-cell;padding:0.2em;vertical-align:middle;text-align:center"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Portal-puzzle.svg/32px-Portal-puzzle.svg.png" decoding="async" width="32" height="28" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Portal-puzzle.svg/48px-Portal-puzzle.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Portal-puzzle.svg/64px-Portal-puzzle.svg.png 2x" data-file-width="32" data-file-height="28" /></span><span style="display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle"><a href="/wiki/Portal:%E4%B8%89%E5%9B%BD" title="Portal:三国">三国主题</a></span></li>
<li style="display:table-row"><span style="display:table-cell;padding:0.2em;vertical-align:middle;text-align:center"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/48/P_history.svg/31px-P_history.svg.png" decoding="async" width="31" height="28" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/48/P_history.svg/47px-P_history.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/48/P_history.svg/62px-P_history.svg.png 2x" data-file-width="400" data-file-height="360" /></span><span style="display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle"><a href="/wiki/Portal:%E5%8E%86%E5%8F%B2" title="Portal:历史">历史主题</a></span></li>
<li style="display:table-row"><span style="display:table-cell;padding:0.2em;vertical-align:middle;text-align:center"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/69/P_vip.svg/28px-P_vip.svg.png" decoding="async" width="28" height="28" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/69/P_vip.svg/41px-P_vip.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/69/P_vip.svg/55px-P_vip.svg.png 2x" data-file-width="1911" data-file-height="1944" /></span><span style="display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle"><a href="/wiki/Portal:%E4%BA%BA%E7%89%A9" title="Portal:人物">人物主题</a></span></li></ul></div>
<style data-mw-deduplicate="TemplateStyles:r52757243">.mw-parser-output .refbegin{font-size:90%;margin-bottom:0.5em}.mw-parser-output .refbegin-hanging-indents>ul{list-style-type:none;margin-left:0}.mw-parser-output .refbegin-hanging-indents>ul>li,.mw-parser-output .refbegin-hanging-indents>dl>dd{margin-left:0;padding-left:3.2em;text-indent:-3.2em;list-style:none}.mw-parser-output .refbegin-100{font-size:100%}</style><div class="refbegin" style="">
<ul><li>曹操：《曹操集》，中华书局出版，1959.</li>
<li><a href="/wiki/%E9%99%B3%E5%A3%BD" class="mw-redirect" title="陈寿">陈寿</a>：《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97" title="三国志">三国志</a>》，中华书局出版，1995.</li>
<li>小出文彦：《三国志人物事典》，霹雳新潮社 出版，2006.</li>
<li>川合康三 著，周东平 译：《曹操》（西安：三秦出版社，1989）.</li>
<li>万绳楠：《陈寅恪魏晋南北朝史演讲录》（合肥：黄山书社，1987）.</li></ul>
</div>
<h2><span id=".E5.A4.96.E9.83.A8.E9.80.A3.E7.B5.90"></span><span class="mw-headline" id="外部連結">外部链接</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit&amp;section=49" title="编辑章节：外部链接">编辑</a><span class="mw-editsection-bracket">]</span></span></h2>
<table class="plainlinks mbox-small" style="padding:0.25em 0.5em 0.5em 0.75em;border:1px solid #aaa;background:#f9f9f9;">

<tbody><tr>
<td colspan="2" style="padding-bottom:0.75em;border-bottom:1px solid #aaa;text-align:center;"><div style="clear:both;">从维基百科的<a href="/wiki/Wikipedia:%E5%A7%8A%E5%A6%B9%E8%AE%A1%E5%88%92" class="mw-redirect" title="Wikipedia:姊妹计划">姊妹计划</a><br />了解更多有关<br />“<b>曹操</b>”的内容</div>
</td></tr>
<tr style="height:25px;">
<td style="padding-top:0.75em;"><a href="https://zh.wiktionary.org/wiki/%E6%9B%B9%E6%93%8D" title="搜索维基词典"><img alt="搜索维基词典" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wiktionary-logo.svg/25px-Wiktionary-logo.svg.png" decoding="async" width="25" height="24" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wiktionary-logo.svg/38px-Wiktionary-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wiktionary-logo.svg/50px-Wiktionary-logo.svg.png 2x" data-file-width="370" data-file-height="350" /></a>
</td>
<td style="padding-top:0.75em;">维基词典上的<a href="https://zh.wiktionary.org/wiki/%E6%9B%B9%E6%93%8D" class="extiw" title="wikt:曹操">字词解释</a>
</td></tr>
<tr style="height:25px;">
<td><a href="https://commons.wikimedia.org/wiki/Category:Cao_Cao" title="搜索维基共享资源"><img alt="搜索维基共享资源" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/18px-Commons-logo.svg.png" decoding="async" width="18" height="25" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/28px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/37px-Commons-logo.svg.png 2x" data-file-width="1024" data-file-height="1376" /></a>
</td>
<td>维基共享资源上的<a href="https://commons.wikimedia.org/wiki/Category:Cao_Cao" class="extiw" title="c:Category:Cao Cao">多媒体资源</a>
</td></tr>


<tr style="height:25px;">
<td><a href="https://zh.wikiquote.org/wiki/Cao_Cao" title="搜索维基语录"><img alt="搜索维基语录" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/21px-Wikiquote-logo.svg.png" decoding="async" width="21" height="25" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/32px-Wikiquote-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/42px-Wikiquote-logo.svg.png 2x" data-file-width="300" data-file-height="355" /></a>
</td>
<td>维基语录上的<a href="https://zh.wikiquote.org/wiki/Cao_Cao" class="extiw" title="q:Cao Cao">名言</a>
</td></tr>
<tr style="height:25px;">
<td><a href="https://zh.wikisource.org/wiki/Author:Cao_Cao" title="搜索维基文库"><img alt="搜索维基文库" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/24px-Wikisource-logo.svg.png" decoding="async" width="24" height="25" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/36px-Wikisource-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/48px-Wikisource-logo.svg.png 2x" data-file-width="410" data-file-height="430" /></a>
</td>
<td>维基文库上的<a href="https://zh.wikisource.org/wiki/Author:Cao_Cao" class="extiw" title="s:Author:Cao Cao">原始文献</a>
</td></tr>




<tr style="height:25px;">
<td><a href="https://zh.wikiversity.org/wiki/Romance_of_the_Three_Kingdoms" title="搜索维基学院"><img alt="搜索维基学院" src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wikiversity-logo-en.svg/25px-Wikiversity-logo-en.svg.png" decoding="async" width="25" height="23" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wikiversity-logo-en.svg/38px-Wikiversity-logo-en.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wikiversity-logo-en.svg/50px-Wikiversity-logo-en.svg.png 2x" data-file-width="1000" data-file-height="900" /></a>
</td>
<td>维基学院上的<a href="https://zh.wikiversity.org/wiki/Romance_of_the_Three_Kingdoms" class="extiw" title="v:Romance of the Three Kingdoms">学习资源</a>
</td></tr>









</tbody></table>
<ul><li><a rel="nofollow" class="external text" href="http://www.guoxue.com/shibu/24shi/sangzz/sgzz_001.htm">《三国志‧魏书‧武帝纪》</a></li></ul>
<div style="clear: both; height: 1em"></div>
<table class="wikitable succession-box" style="width: auto; margin: 0.5em auto; font-size:95%; clear:both;">


<tbody><tr>
<th colspan="3" style="border-top: 5px solid #ccccff;"><a href="/wiki/%E6%B1%89%E6%9C%9D" title="汉朝">汉朝</a>政治<a href="/wiki/%E5%AE%98%E8%81%8C" class="mw-redirect" title="官职">官职</a>
</th></tr>


<tr style="text-align: center; white-space:nowrap;">
<td width="30%" align="center" rowspan="1">前任：<br /><b><a href="/wiki/%E5%BC%A0%E5%96%9C" title="张喜">张喜</a></b>
</td>
<td width="40%" style="text-align: center; white-space:nowrap;" rowspan="1"><b><a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a><a href="/wiki/%E5%8F%B8%E7%A9%BA" title="司空">司空</a></b><br />197年－208年
</td>
<td width="30%" align="center" rowspan="1">继任：<br /><b><a href="/wiki/%E9%83%97%E6%85%AE" title="郗虑">郗虑</a></b><br /><small><a href="/wiki/%E5%BE%A1%E5%8F%B2%E5%A4%A7%E5%A4%AB" title="御史大夫">御史大夫</a></small>
</td></tr>

<tr style="text-align: center; white-space:nowrap;">
<td width="30%" align="center" rowspan="1">前任：<br /><b><a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a></b><br /><small><a href="/wiki/%E7%9B%B8%E5%9B%BD" title="相国">相国</a></small>
</td>
<td width="40%" style="text-align: center; white-space:nowrap;" rowspan="1"><b><a href="/wiki/%E6%9D%B1%E6%BC%A2" class="mw-redirect" title="东汉">东汉</a><a href="/wiki/%E4%B8%9E%E7%9B%B8" title="丞相">丞相</a></b><br />208年－220年
</td>
<td width="30%" align="center" rowspan="1">继任：<br /><b><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a></b>
</td></tr>

<tr>
<th colspan="3" style="border-top: 5px solid #ACE777;"><a href="/wiki/%E4%B8%AD%E5%9C%8B%E7%88%B5%E4%BD%8D" class="mw-redirect" title="中国爵位">中国爵位</a>
</th></tr>
<tr>
<td colspan="5" style="text-align:center;"><b><a href="/wiki/%E6%BC%A2%E6%9C%9D" class="mw-redirect" title="汉朝">汉朝</a><a href="/wiki/%E7%95%B0%E5%A7%93%E7%8E%8B" title="异姓王">异姓王爵</a></b>
</td></tr>

<tr>
<td width="30%" align="center" rowspan="1"><b>新头衔</b><br /><div style="font-size:90%">新设<a href="/w/index.php?title=%E5%BC%82%E5%A7%93%E7%8E%8B%E7%88%B5&amp;action=edit&amp;redlink=1" class="new" title="异姓王爵（页面不存在）">异姓王爵</a></div>
</td>
<td width="40%" style="text-align: center; white-space:nowrap;" rowspan="1"><b><a href="/wiki/%E6%B1%89%E6%9C%9D" title="汉朝">汉朝</a>魏国公</b><br />213年 — 216年5月
</td>
<td width="30%" align="center" rowspan="1">继任：<br /><b>无</b>
</td></tr>

<tr>
<td width="30%" align="center" rowspan="1"><b>新头衔</b><br /><div style="font-size:90%">新设<a href="/w/index.php?title=%E5%BC%82%E5%A7%93%E7%8E%8B%E7%88%B5&amp;action=edit&amp;redlink=1" class="new" title="异姓王爵（页面不存在）">异姓王爵</a></div>
</td>
<td width="40%" style="text-align: center; white-space:nowrap;" rowspan="1"><b><a href="/wiki/%E6%B1%89%E6%9C%9D" title="汉朝">汉朝</a><a href="/wiki/%E9%AD%8F%E7%8E%8B" class="mw-disambig" title="魏王">魏王</a>爵</b><br />216年5月 — 220年3月
</td>
<td width="30%" align="center" rowspan="1">继任：<br /><b><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>（魏文帝）</b>
</td></tr>
</tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="3"><div class="plainlinks hlist navbar mini"><ul><li class="nv-view"><a href="/wiki/Template:%E6%9B%B9%E6%93%8D%E5%8A%BF%E5%8A%9B-%E9%AD%8F%E5%9B%BD" title="Template:曹操势力-魏国"><abbr title="查看该模板" style=";;background:none transparent;border:none;">查</abbr></a></li><li class="nv-talk"><a href="/w/index.php?title=Template_talk:%E6%9B%B9%E6%93%8D%E5%8A%BF%E5%8A%9B-%E9%AD%8F%E5%9B%BD&amp;action=edit&amp;redlink=1" class="new" title="Template talk:曹操势力-魏国（页面不存在）"><abbr title="讨论该模板" style=";;background:none transparent;border:none;">论</abbr></a></li><li class="nv-edit"><a class="external text" href="https://zh.wikipedia.org/w/index.php?title=Template:%E6%9B%B9%E6%93%8D%E5%8A%BF%E5%8A%9B-%E9%AD%8F%E5%9B%BD&amp;action=edit"><abbr title="编辑该模板" style=";;background:none transparent;border:none;">编</abbr></a></li></ul></div><div style="font-size:110%"><a class="mw-selflink selflink">曹操</a>势力-<a href="/wiki/%E6%9B%B9%E9%AD%8F" title="曹魏">曹魏</a></div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">皇帝</th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a class="mw-selflink selflink">曹操</a>（武帝，追封）<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> →<a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>（文帝）<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> →<a href="/wiki/%E6%9B%B9%E7%9D%BF" class="mw-redirect" title="曹睿">曹睿</a>（明帝）<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> →<a href="/wiki/%E6%9B%B9%E8%8A%B3" title="曹芳">曹芳</a>（齐王)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> →<a href="/wiki/%E6%9B%B9%E9%AB%A6" title="曹髦">曹髦</a>（高贵乡公）<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> →<a href="/wiki/%E6%9B%B9%E5%A5%82" title="曹奂">曹奂</a>（元帝）</div></td><td class="navbox-image" rowspan="5" style="width:0%;padding:0px 0px 0px 2px"><div><a href="/wiki/File:%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92(%E7%B9%81).png" class="image"><img alt="三国行政区划(繁).png" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92%28%E7%B9%81%29.png/200px-%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92%28%E7%B9%81%29.png" decoding="async" width="200" height="206" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92%28%E7%B9%81%29.png/300px-%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92%28%E7%B9%81%29.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92%28%E7%B9%81%29.png/400px-%E4%B8%89%E5%9B%BD%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%88%92%28%E7%B9%81%29.png 2x" data-file-width="935" data-file-height="964" /></a></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">事件/战役</th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E9%BB%84%E5%B7%BE%E4%B9%8B%E4%B9%B1" class="mw-redirect" title="黄巾之乱">黄巾之乱</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%91%A3%E5%8D%93%E8%A8%8E%E4%BC%90%E6%88%B0" class="mw-redirect" title="董卓讨伐战">董卓讨伐战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%9D%92%E5%B7%9E%E5%85%B5" title="青州兵">青州兵</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a class="mw-selflink selflink">挟天子以令诸侯</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E6%93%8D%E8%AE%A8%E4%BC%90%E8%A2%81%E6%9C%AF%E4%B9%8B%E6%88%98" title="曹操讨伐袁术之战">讨伐袁术</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E4%B8%8B%E9%82%B3%E4%B9%8B%E6%88%B0" title="下邳之战">下邳之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%AE%98%E6%B8%A1%E4%B9%8B%E6%88%98" title="官渡之战">官渡之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%80%89%E4%BA%AD%E4%B9%8B%E6%88%B0" title="仓亭之战">仓亭之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E7%99%BD%E7%8B%BC%E5%B1%B1%E4%B9%8B%E6%88%98" title="白狼山之战">北征乌桓</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%95%BF%E5%9D%82%E5%9D%A1%E4%B9%8B%E6%88%98" title="长坂坡之战">长坂坡之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%98" class="mw-redirect" title="赤壁之战">赤壁之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%90%88%E8%82%A5%E4%B9%8B%E6%88%B0" title="合肥之战">合肥之战</a>（第一次)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%BD%BC%E9%97%9C%E4%B9%8B%E6%88%B0" title="潼关之战">潼关之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%80%8D%E9%81%A5%E6%B4%A5%E4%B9%8B%E6%88%98" class="mw-redirect" title="逍遥津之战">逍遥津之战</a>（第二次)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%BC%A2%E4%B8%AD%E4%B9%8B%E6%88%B0" title="汉中之战">汉中之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%A8%8A%E5%9F%8E%E4%B9%8B%E6%88%98" class="mw-redirect" title="樊城之战">樊城之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E6%93%8D#逝世" title="曹操">曹操去世</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%B1%89%E7%8C%AE%E5%B8%9D" title="汉献帝">曹丕篡汉</a>（正式立国)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E4%B9%9D%E5%93%81%E4%B8%AD%E6%AD%A3%E5%88%B6" title="九品中正制">九品中正制</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%AF%B8%E8%91%9B%E4%BA%AE%E5%8C%97%E4%BC%90" title="诸葛亮北伐">诸葛亮北伐</a>（共五次)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%AD%9F%E9%81%94" title="孟达">孟达叛乱</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%B7%9D%E6%B0%B4%E4%B9%8B%E6%88%B0#第三、四次戰役" title="淝水之战">合淝新城之战</a>（第三、四次)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%AD%8F%E6%BB%85%E7%87%95%E4%B9%8B%E6%88%B0" title="魏灭燕之战">魏灭燕之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E9%AD%8F%E4%B8%8E%E9%AB%98%E5%8F%A5%E4%B8%BD%E7%9A%84%E6%88%98%E4%BA%89" title="曹魏与高句丽的战争">讨伐高句丽</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%AD%A3%E5%A7%8B%E4%B9%8B%E5%8F%98" class="mw-redirect" title="正始之变">正始之变</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9D%B1%E8%88%88%E4%B9%8B%E6%88%B0" title="东兴之战">东兴之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%90%88%E6%B7%9D%E4%B9%8B%E6%88%B0#第五次戰役" class="mw-redirect" title="合淝之战">诸葛恪北伐</a>（第五次)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%AF%BF%E6%98%A5%E4%B8%89%E5%8F%9B" class="mw-redirect" title="寿春三叛">寿春三叛</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%A7%9C%E7%BB%B4%E5%8C%97%E4%BC%90" class="mw-redirect" title="姜维北伐">姜维北伐</a>（共十一次)<span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A9%AC%E6%98%AD%E5%BC%91%E5%90%9B" title="司马昭弑君">司马昭弑君</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%AD%8F%E7%81%AD%E8%9C%80%E4%B9%8B%E6%88%98" class="mw-redirect" title="魏灭蜀之战">魏灭蜀之战</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%8D%BE%E6%9C%83%E5%85%B5%E8%AE%8A" class="mw-redirect" title="锺会兵变">锺会兵变</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A9%AC%E6%98%AD#逝世" title="司马昭">司马昭去世</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%99%8B%E6%9C%9D" title="晋朝">晋代魏</a>（亡国）</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">著名人物</th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%BC%A0%E9%83%83" class="mw-redirect" title="张郃">张郃</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%BE%90%E6%99%83" title="徐晃">徐晃</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%BE%90%E5%BE%B7" title="庞德">庞德</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9C%B1%E7%81%B5" class="mw-redirect" title="朱灵">朱灵</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E4%BA%8E%E7%A6%81" title="于禁">于禁</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B8%8A" title="夏侯渊">夏侯渊</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%99%88%E5%AE%AB" title="陈宫">陈宫</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%BC%A0%E9%82%88" title="张邈">张邈</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%88%98%E6%99%94_(%E4%B8%89%E5%9B%BD)" title="刘晔 (三国)">刘晔</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%85%B8%E9%9F%A6" title="典韦">典韦</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E4%B9%90%E8%BF%9B" class="mw-redirect" title="乐进">乐进</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%88%B2%E5%BF%97%E6%89%8D" title="戏志才">戏志才</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%83%AD%E5%98%89" title="郭嘉">郭嘉</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%AE%B8%E8%A4%9A" title="许褚">许褚</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%BC%A0%E8%BE%BD" class="mw-redirect" title="张辽">张辽</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A9%AC%E6%87%BF" title="司马懿">司马懿</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A6%AC%E6%9C%97" title="司马朗">司马朗</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A9%AC%E5%B8%88" class="mw-redirect" title="司马师">司马师</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A9%AC%E6%98%AD" title="司马昭">司马昭</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%A8%82%E7%B6%9D" title="乐𬘭">乐𬘭</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%8D%80%E6%94%B8" title="荀攸">荀攸</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E9%A9%AC%E8%85%BE" class="mw-redirect" title="马腾">马腾</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E4%BC%91" title="曹休">曹休</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E6%B4%AA" title="曹洪">曹洪</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E7%9C%9F" title="曹真">曹真</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E6%B3%B0" title="曹泰">曹泰</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E7%B4%94" title="曹纯">曹纯</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E7%88%BD" title="曹爽">曹爽</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%B4%BE%E9%80%B5_(%E4%B8%89%E5%9B%BD)" title="贾逵 (三国)">贾逵</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%B4%BE%E8%AF%A9" title="贾诩">贾诩</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%B4%BE%E5%85%85" class="mw-redirect" title="贾充">贾充</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%A4%8F%E4%BE%AF%E5%B0%9A" title="夏侯尚">夏侯尚</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%A4%8F%E4%BE%AF%E7%8E%84" title="夏侯玄">夏侯玄</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8F%B8%E9%A6%AC%E8%8A%9D" title="司马芝">司马芝</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%88%98%E5%A4%87" title="刘备">刘备</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%85%B3%E7%BE%BD" title="关羽">关羽</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%B4%94%E7%90%B0" title="崔琰">崔琰</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E7%8E%8B%E6%9C%97" title="王朗">王朗</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%8D%8E%E6%AD%86" title="华歆">华歆</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E5%AD%9F%E8%BE%BE" class="mw-redirect" title="孟达">孟达</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E7%8E%8B%E7%B2%B2" title="王粲">王粲</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E8%B7%AF%E7%B2%B9" title="路粹">路粹</a><span style="white-space:nowrap; font-weight:bold;">&#160;·</span> <a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a></div></td></tr></tbody></table></td></tr></tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div class="plainlinks hlist navbar mini"><ul><li class="nv-view"><a href="/wiki/Template:%E6%9D%B1%E6%BC%A2%E5%A4%A7%E5%8F%B8%E7%A9%BA%E5%8F%B8%E7%A9%BA" title="Template:东汉大司空司空"><abbr title="查看该模板" style=";;background:none transparent;border:none;">查</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:%E6%9D%B1%E6%BC%A2%E5%A4%A7%E5%8F%B8%E7%A9%BA%E5%8F%B8%E7%A9%BA" title="Template talk:东汉大司空司空"><abbr title="讨论该模板" style=";;background:none transparent;border:none;">论</abbr></a></li><li class="nv-edit"><a class="external text" href="https://zh.wikipedia.org/w/index.php?title=Template:%E6%9D%B1%E6%BC%A2%E5%A4%A7%E5%8F%B8%E7%A9%BA%E5%8F%B8%E7%A9%BA&amp;action=edit"><abbr title="编辑该模板" style=";;background:none transparent;border:none;">编</abbr></a></li></ul></div><div style="font-size:110%"><a href="/wiki/%E6%9D%B1%E6%BC%A2%E5%A4%A7%E5%8F%B8%E7%A9%BA%E3%80%81%E5%8F%B8%E7%A9%BA%E5%88%97%E8%A1%A8" title="东汉大司空、司空列表">东汉大司空、司空</a></div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/%E5%A4%A7%E5%8F%B8%E7%A9%BA" class="mw-redirect" title="大司空">大司空</a></th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E7%8E%8B%E6%A2%81_(%E6%BC%A2%E6%9C%9D)" title="王梁 (汉朝)">王梁</a></li>
<li><a href="/wiki/%E5%AE%8B%E5%BC%98" title="宋弘">宋弘</a></li>
<li><a href="/wiki/%E6%9D%8E%E9%80%9A_(%E5%8D%97%E9%98%B3)" title="李通 (南阳)">李通</a></li>
<li><a href="/wiki/%E7%AB%87%E8%9E%8D" title="窦融">窦融</a></li>
<li><a href="/wiki/%E6%9C%B1%E6%B5%AE" title="朱浮">朱浮</a></li>
<li><a href="/wiki/%E6%9D%9C%E6%9E%97_(%E6%9D%B1%E6%BC%A2)" title="杜林 (东汉)">杜林</a></li>
<li><a href="/wiki/%E5%BC%A0%E7%BA%AF_(%E6%AD%A6%E5%A7%8B%E4%BE%AF)" title="张纯 (武始侯)">张纯</a></li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/%E5%8F%B8%E7%A9%BA" title="司空">司空</a></th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E5%BC%A0%E7%BA%AF_(%E6%AD%A6%E5%A7%8B%E4%BE%AF)" title="张纯 (武始侯)">张纯</a></li>
<li><a href="/wiki/%E5%86%AF%E9%B2%82" title="冯鲂">冯鲂</a></li>
<li><a href="/wiki/%E4%BC%8F%E6%81%AD" title="伏恭">伏恭</a></li>
<li><a href="/wiki/%E7%89%9F%E8%9E%8D" title="牟融">牟融</a></li>
<li><a href="/wiki/%E7%AC%AC%E4%BA%94%E5%80%AB" title="第五伦">第五伦</a></li>
<li><a href="/wiki/%E8%A2%81%E5%AE%89" title="袁安">袁安</a></li>
<li><a href="/wiki/%E4%BB%BB%E9%9A%97" title="任隗">任隗</a></li>
<li><a href="/wiki/%E5%8A%89%E6%96%B9_(%E6%9D%B1%E6%BC%A2)" title="刘方 (东汉)">刘方</a></li>
<li><a href="/wiki/%E5%BC%B5%E5%A5%AE_(%E6%AD%A6%E5%A7%8B%E4%BE%AF)" title="张奋 (武始侯)">张奋</a></li>
<li><a href="/wiki/%E9%9F%93%E6%A3%B1" title="韩棱">韩棱</a></li>
<li><a href="/wiki/%E5%B7%A2%E5%A0%AA" title="巢堪">巢堪</a></li>
<li><a href="/wiki/%E5%BE%90%E9%98%B2" title="徐防">徐防</a></li>
<li><a href="/wiki/%E9%99%B3%E5%AF%B5_(%E6%BC%A2%E6%9C%9D)" title="陈宠 (汉朝)">陈宠</a></li>
<li><a href="/wiki/%E5%B0%B9%E5%8B%A4" title="尹勤">尹勤</a></li>
<li><a href="/wiki/%E5%91%A8%E7%AB%A0_(%E6%9D%B1%E6%BC%A2)" title="周章 (东汉)">周章</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%95%8F_(%E6%9D%B1%E6%BC%A2)" title="张敏 (东汉)">张敏</a></li>
<li><a href="/wiki/%E5%88%98%E6%81%BA" title="刘恺">刘恺</a></li>
<li><a href="/wiki/%E8%A2%81%E6%95%9E" title="袁敞">袁敞</a></li>
<li><a href="/wiki/%E6%9D%8E%E9%83%83_(%E6%BC%A2%E6%9C%9D)" class="mw-redirect" title="李郃 (汉朝)">李郃</a></li>
<li><a href="/wiki/%E9%99%88%E8%A4%92" title="陈褒">陈褒</a></li>
<li><a href="/wiki/%E5%88%98%E6%8E%88" title="刘授">刘授</a></li>
<li><a href="/wiki/%E9%99%B6%E6%95%A6" title="陶敦">陶敦</a></li>
<li><a href="/wiki/%E5%BC%A0%E6%99%A7" title="张晧">张晧</a></li>
<li><a href="/wiki/%E7%8E%8B%E9%BE%9A" title="王龚">王龚</a></li>
<li><a href="/wiki/%E5%AD%94%E6%89%B6" title="孔扶">孔扶</a></li>
<li><a href="/wiki/%E7%8E%8B%E5%8D%93_(%E6%9D%B1%E6%BC%A2)" title="王卓 (东汉)">王卓</a></li>
<li><a href="/wiki/%E9%83%AD%E8%99%94" title="郭虔">郭虔</a></li>
<li><a href="/wiki/%E8%B5%B5%E6%88%92" title="赵戒">赵戒</a></li>
<li><a href="/wiki/%E8%A2%81%E6%B9%AF" title="袁汤">袁汤</a></li>
<li><a href="/wiki/%E8%83%A1%E5%BB%A3_(%E6%BC%A2%E6%9C%9D)" title="胡广 (汉朝)">胡广</a></li>
<li><a href="/wiki/%E9%BB%84%E7%90%BC" title="黄琼">黄琼</a></li>
<li><a href="/wiki/%E8%B5%B5%E6%88%92" title="赵戒">赵戒</a></li>
<li><a href="/wiki/%E6%88%BF%E6%A4%8D" title="房植">房植</a></li>
<li><a href="/wiki/%E9%9F%93%E7%B8%AF" title="韩𬙂">韩𬙂</a></li>
<li><a href="/wiki/%E5%AD%AB%E6%9C%97_(%E6%9D%B1%E6%BC%A2)" title="孙朗 (东汉)">孙朗</a></li>
<li><a href="/wiki/%E7%9B%9B%E5%85%81" title="盛允">盛允</a></li>
<li><a href="/wiki/%E8%99%9E%E6%94%BE" title="虞放">虞放</a></li>
<li><a href="/wiki/%E9%BB%84%E7%90%BC" title="黄琼">黄琼</a></li>
<li><a href="/wiki/%E5%8A%89%E5%AF%B5_(%E6%9D%B1%E8%90%8A)" title="刘宠 (东莱)">刘宠</a></li>
<li><a href="/wiki/%E5%91%A8%E6%99%AF_(%E6%9D%B1%E6%BC%A2)" title="周景 (东汉)">周景</a></li>
<li><a href="/wiki/%E5%8A%89%E8%8C%82_(%E5%8F%B8%E7%A9%BA)" title="刘茂 (司空)">刘茂</a></li>
<li><a href="/wiki/%E5%AE%A3%E9%85%86" title="宣酆">宣酆</a></li>
<li><a href="/wiki/%E7%8E%8B%E7%95%85_(%E4%B8%9C%E6%B1%89)" title="王畅 (东汉)">王畅</a></li>
<li><a href="/wiki/%E5%8A%89%E5%AF%B5_(%E6%9D%B1%E8%90%8A)" title="刘宠 (东莱)">刘宠</a></li>
<li><a href="/wiki/%E8%AE%B8%E6%A0%A9" title="许栩">许栩</a></li>
<li><a href="/wiki/%E5%8A%89%E5%9B%82_(%E6%9D%B1%E6%BC%A2)" title="刘嚣 (东汉)">刘嚣</a></li>
<li><a href="/wiki/%E6%A9%8B%E7%8E%84" title="桥玄">桥玄</a></li>
<li><a href="/wiki/%E6%9D%A5%E8%89%B3" title="来艳">来艳</a></li>
<li><a href="/wiki/%E5%AE%8B%E4%BF%B1" title="宋俱">宋俱</a></li>
<li><a href="/wiki/%E6%A5%8A%E8%B3%9C" title="杨赐">杨赐</a></li>
<li><a href="/wiki/%E5%94%90%E7%8F%8D" title="唐珍">唐珍</a></li>
<li><a href="/wiki/%E8%AE%B8%E8%AE%AD" title="许训">许训</a></li>
<li><a href="/wiki/%E5%88%98%E9%80%B8" title="刘逸">刘逸</a></li>
<li><a href="/wiki/%E9%99%B3%E7%90%83_(%E6%9D%B1%E6%BC%A2)" title="陈球 (东汉)">陈球</a></li>
<li><a href="/wiki/%E9%99%B3%E8%80%BD" title="陈耽">陈耽</a></li>
<li><a href="/wiki/%E6%9D%A5%E8%89%B3" title="来艳">来艳</a></li>
<li><a href="/wiki/%E8%A2%81%E9%80%A2" title="袁逢">袁逢</a></li>
<li><a href="/wiki/%E5%BC%A0%E6%B5%8E_(%E6%B1%9D%E5%8D%97)" title="张济 (汝南)">张济</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%BA%AB_(%E6%9D%B1%E6%BC%A2)" class="mw-redirect" title="张温 (东汉)">张温</a></li>
<li><a href="/wiki/%E6%A5%8A%E8%B3%9C" title="杨赐">杨赐</a></li>
<li><a href="/wiki/%E8%AE%B8%E7%9B%B8" title="许相">许相</a></li>
<li><a href="/wiki/%E4%B8%81%E5%AE%AE" title="丁宫">丁宫</a></li>
<li><a href="/wiki/%E5%8A%89%E5%BC%98_(%E5%8D%97%E9%99%BD)" class="mw-redirect" title="刘弘 (南阳)">刘弘</a></li>
<li><a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a></li>
<li><a href="/wiki/%E6%A5%8A%E5%BD%AA" title="杨彪">杨彪</a></li>
<li><a href="/wiki/%E8%8D%80%E7%88%BD" title="荀爽">荀爽</a></li>
<li><a href="/wiki/%E7%A7%8D%E6%8B%82" title="种拂">种拂</a></li>
<li><a href="/wiki/%E6%B7%B3%E4%BA%8E%E5%98%89" title="淳于嘉">淳于嘉</a></li>
<li><a href="/wiki/%E6%A5%8A%E5%BD%AA" title="杨彪">杨彪</a></li>
<li><a href="/wiki/%E8%B6%99%E6%BA%AB" title="赵温">赵温</a></li>
<li><a href="/wiki/%E5%BC%A0%E5%96%9C" title="张喜">张喜</a></li>
<li><a class="mw-selflink selflink">曹操</a></li></ul>
</div></td></tr></tbody></table></td></tr></tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks collapsible expandCaption navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2" style="background-color: #FFBB46"><div class="plainlinks hlist navbar mini"><ul><li class="nv-view"><a href="/wiki/Template:%E4%B8%89%E5%9C%8B%E5%90%9B%E4%B8%BB" title="Template:三国君主"><abbr title="查看该模板" style=";background-color: #FFBB46;background:none transparent;border:none;">查</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:%E4%B8%89%E5%9C%8B%E5%90%9B%E4%B8%BB" title="Template talk:三国君主"><abbr title="讨论该模板" style=";background-color: #FFBB46;background:none transparent;border:none;">论</abbr></a></li><li class="nv-edit"><a class="external text" href="https://zh.wikipedia.org/w/index.php?title=Template:%E4%B8%89%E5%9C%8B%E5%90%9B%E4%B8%BB&amp;action=edit"><abbr title="编辑该模板" style=";background-color: #FFBB46;background:none transparent;border:none;">编</abbr></a></li></ul></div><div style="font-size:110%"><a href="/wiki/%E4%B8%89%E5%9B%BD" title="三国">三国</a><a href="/wiki/%E4%B8%9C%E6%B1%89%E4%B8%89%E5%9B%BD%E6%97%B6%E6%9C%9F%E5%90%9B%E4%B8%BB%E5%88%97%E8%A1%A8" title="东汉三国时期君主列表">君主</a></div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><td class="navbox-abovebelow" colspan="2" style="background-color: #ffe6a1; font-size: 90%;"><div>详见：<a href="/wiki/%E4%B8%89%E5%9B%BD%E5%90%9B%E4%B8%BB%E5%88%97%E8%A1%A8" class="mw-redirect" title="三国君主列表">三国君主列表</a></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="text-align:center; background-color: #ffe6a1;"><a href="/wiki/%E6%9B%B9%E9%AD%8F" title="曹魏">曹  魏</a><br /><a href="/wiki/%E6%9B%B9%E9%AD%8F%E7%9A%87%E5%B8%9D%E4%B8%96%E7%B3%BB%E5%9B%BE" class="mw-redirect" title="曹魏皇帝世系图">世系</a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">追尊</div></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E6%9B%B9%E9%A8%B0" title="曹腾">高皇帝</a>&#160;～ <span style="white-space:nowrap"><a href="/wiki/%E6%9B%B9%E5%B5%A9" title="曹嵩">太皇帝</a>&#160;～</span> <span style="white-space:nowrap"><a class="mw-selflink selflink">太祖武皇帝</a></span></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">统治</div></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">高祖文皇帝</a> <span class="nowrap">→ <a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">烈祖明皇帝</a></span> <span class="nowrap">→ <a href="/wiki/%E6%9B%B9%E8%8A%B3" title="曹芳">邵陵厉公</a></span> <span class="nowrap">→ <a href="/wiki/%E6%9B%B9%E9%AB%A6" title="曹髦">高贵乡公</a></span> <span class="nowrap">→ <a href="/wiki/%E6%9B%B9%E5%A5%82" title="曹奂">元皇帝</a></span></div></td></tr></tbody></table><div></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="text-align:center; background-color: #ffe6a1;"><a href="/wiki/%E8%9C%80%E6%B1%89" title="蜀汉">蜀  汉</a><br /><a href="/wiki/%E6%B1%89%E6%9C%9D%E7%9A%87%E5%B8%9D%E4%B8%96%E7%B3%BB%E5%9B%BE" title="汉朝皇帝世系图">世系</a></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">追尊</div></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E6%B1%89%E7%8C%AE%E5%B8%9D" title="汉献帝">孝愍皇帝</a></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">统治</div></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E5%88%98%E5%A4%87" title="刘备">烈祖昭烈皇帝</a> <span class="nowrap">→ <a href="/wiki/%E5%88%98%E7%A6%85" title="刘禅">后主</a></span></div></td></tr></tbody></table><div></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="text-align:center; background-color: #ffe6a1;"><a href="/wiki/%E5%AD%AB%E5%90%B3" title="孙吴">东  吴</a><br /><a href="/wiki/%E4%B8%9C%E5%90%B4%E7%9A%87%E5%B8%9D%E4%B8%96%E7%B3%BB%E5%9B%BE" class="mw-redirect" title="东吴皇帝世系图">世系</a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">追尊</div></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E5%AD%99%E5%9D%9A" title="孙坚">始祖武烈皇帝</a>&#160;～ <span style="white-space:nowrap"><a href="/wiki/%E5%AD%99%E7%AD%96" title="孙策">长沙桓王</a>&#160;～</span> <span style="white-space:nowrap"><a href="/wiki/%E5%AD%AB%E5%92%8C" title="孙和">文皇帝</a></span></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">统治</div></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E5%AD%99%E6%9D%83" title="孙权">太祖大皇帝</a> <span class="nowrap">→ <a href="/wiki/%E5%AD%AB%E4%BA%AE" title="孙亮">会稽王</a></span> <span class="nowrap">→ <a href="/wiki/%E5%AD%AB%E4%BC%91" title="孙休">景皇帝</a></span> <span class="nowrap">→ <a href="/wiki/%E5%AD%99%E7%9A%93" title="孙皓">末帝</a></span></div></td></tr></tbody></table><div></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group" style="text-align:center; background-color: #ffe6a1;"><a href="/wiki/%E7%87%95%E5%9B%BD_(%E5%85%AC%E5%AD%99%E6%B8%8A)" title="燕国 (公孙渊)">燕  国</a></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="padding-left:0em;padding-right:0em;background-color: #ffe6a1;"><div style="padding:0em 0.75em;">统治</div></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"><a href="/wiki/%E5%85%AC%E5%AD%AB%E6%B7%B5" title="公孙渊">燕王</a></div></td></tr></tbody></table><div></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><td class="navbox-abovebelow" colspan="2" style="background-color: #ffe6a1;"><div>
<p><span class="nowrap"><a href="/wiki/Template:%E4%B8%89%E7%9A%87%E4%BA%94%E5%B8%9D" title="Template:三皇五帝">三皇五帝</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%A4%8F%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:夏朝君主">夏</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%95%86%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:商朝君主">商</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%91%A8%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:周朝君主">周</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E7%A7%A6%E5%9B%BD%E5%90%9B%E4%B8%BB" title="Template:秦国君主">秦</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E6%BC%A2%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:汉朝君主">汉</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E4%B8%89%E5%9C%8B%E5%90%9B%E4%B8%BB" title="Template:三国君主">三国</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E6%99%89%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:晋朝君主">晋</a>&#160;/</span> <span class="nowrap"><a href="/wiki/Template:%E4%BA%94%E8%83%A1%E5%8D%81%E5%85%AD%E5%9C%8B%E5%90%9B%E4%B8%BB" title="Template:五胡十六国君主">十六国</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%8D%97%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:南朝君主">南朝</a>&#160;/</span> <span class="nowrap"><a href="/wiki/Template:%E5%85%83%E9%AD%8F%E5%90%9B%E4%B8%BB" title="Template:元魏君主">元魏</a>&#160;&#8211;</span>&#32;<span class="nowrap"><a href="/wiki/Template:%E5%8C%97%E9%BD%90%E5%90%9B%E4%B8%BB" title="Template:北齐君主">北齐</a>&#160;&#8211;</span>&#32;<span class="nowrap"><a href="/wiki/Template:%E5%8C%97%E5%91%A8%E5%90%9B%E4%B8%BB" title="Template:北周君主">北周</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E9%9A%8B%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:隋朝君主">隋</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%94%90%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:唐朝君主">唐</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E4%BA%94%E4%BB%A3%E5%90%9B%E4%B8%BB" title="Template:五代君主">五代</a>&#160;&#8211;</span>&#32;<span class="nowrap"><a href="/wiki/Template:%E5%8D%81%E5%9C%8B%E5%90%9B%E4%B8%BB" title="Template:十国君主">十国</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%AE%8B%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:宋朝君主">宋</a>&#160;/</span> <span class="nowrap"><a href="/wiki/Template:%E8%A5%BF%E5%A4%8F%E5%90%9B%E4%B8%BB" title="Template:西夏君主">西夏</a>&#160;/</span> <span class="nowrap"><a href="/wiki/Template:%E8%BE%BD%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:辽朝君主">辽</a>&#160;/</span> <span class="nowrap"><a href="/wiki/Template:%E9%87%91%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:金朝君主">金</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E5%85%83%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:元朝君主">元</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E6%98%8E%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:明朝君主">明</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E6%B8%85%E6%9C%9D%E5%90%9B%E4%B8%BB" title="Template:清朝君主">清</a></span> <span class="nowrap">→ <a href="/wiki/Template:%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E5%9C%8B%E5%AE%B6%E5%85%83%E9%A6%96" title="Template:中华民国国家元首">民国</a>&#160;/</span> <span class="nowrap"><a href="/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%9C%80%E9%AB%98%E9%A2%86%E5%AF%BC%E4%BA%BA" title="Template:中华人民共和国最高领导人">共和国</a>
</span></p>
</div></td></tr></tbody></table></td></tr></tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div class="plainlinks hlist navbar mini"><ul><li class="nv-view"><a href="/wiki/Template:%E4%B8%89%E6%9B%B9%E4%B8%83%E5%AD%90" title="Template:三曹七子"><abbr title="查看该模板" style=";;background:none transparent;border:none;">查</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:%E4%B8%89%E6%9B%B9%E4%B8%83%E5%AD%90" title="Template talk:三曹七子"><abbr title="讨论该模板" style=";;background:none transparent;border:none;">论</abbr></a></li><li class="nv-edit"><a class="external text" href="https://zh.wikipedia.org/w/index.php?title=Template:%E4%B8%89%E6%9B%B9%E4%B8%83%E5%AD%90&amp;action=edit"><abbr title="编辑该模板" style=";;background:none transparent;border:none;">编</abbr></a></li></ul></div><div style="font-size:110%">三曹七子</div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/%E4%B8%89%E6%9B%B9" title="三曹">三曹</a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ol><li><a class="mw-selflink selflink">曹操</a></li>
<li><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a></li>
<li><a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a></li></ol>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/%E5%BB%BA%E5%AE%89%E4%B8%83%E5%AD%90" title="建安七子">建安七子</a></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ol><li><a href="/wiki/%E5%AD%94%E8%9E%8D" title="孔融">孔融</a></li>
<li><a href="/wiki/%E9%99%88%E7%90%B3_(%E6%96%87%E5%AD%A6%E5%AE%B6)" class="mw-redirect" title="陈琳 (文学家)">陈琳</a></li>
<li><a href="/wiki/%E7%8E%8B%E7%B2%B2" title="王粲">王粲</a></li>
<li><a href="/wiki/%E5%BE%90%E5%B9%B9" title="徐干">徐干</a></li>
<li><a href="/wiki/%E9%98%AE%E7%91%80" title="阮瑀">阮瑀</a></li>
<li><a href="/wiki/%E5%BA%94%E7%8E%9A" title="应玚">应玚</a></li>
<li><a href="/wiki/%E5%88%98%E6%A1%A2" title="刘桢">刘桢</a></li></ol>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/w/index.php?title=%E4%B8%89%E7%A5%96&amp;action=edit&amp;redlink=1" class="new" title="三祖（页面不存在）">三祖</a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ol><li><a class="mw-selflink selflink">曹操</a></li>
<li><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">曹叡</a></li></ol>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/w/index.php?title=%E4%B8%89%E7%A5%96%E4%B8%80%E7%8E%8B&amp;action=edit&amp;redlink=1" class="new" title="三祖一王（页面不存在）">三祖一王</a></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ol><li><a class="mw-selflink selflink">曹操</a>（<a href="/wiki/%E5%A4%AA%E7%A5%96" class="mw-disambig" title="太祖">太祖</a>，<a href="/wiki/%E6%9B%B9%E9%AD%8F" title="曹魏">曹魏</a>追尊）</li>
<li><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a>（<a href="/wiki/%E9%AB%98%E7%A5%96" class="mw-disambig" title="高祖">高祖</a> / <a href="/wiki/%E4%B8%96%E7%A5%96" title="世祖">世祖</a>）</li>
<li><a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">曹叡</a>（<a href="/wiki/%E7%83%88%E7%A5%96" class="mw-disambig" title="烈祖">烈祖</a>）</li>
<li><a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a>（<a href="/wiki/%E9%99%B3%E9%83%A1" title="陈郡">陈王</a>）</li></ol>
</div></td></tr></tbody></table></td></tr></tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div class="plainlinks hlist navbar mini"><ul><li class="nv-view"><a href="/wiki/Template:%E4%B8%89%E5%9B%BD%E5%BF%97" title="Template:三国志"><abbr title="查看该模板" style=";;background:none transparent;border:none;">查</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:%E4%B8%89%E5%9B%BD%E5%BF%97" title="Template talk:三国志"><abbr title="讨论该模板" style=";;background:none transparent;border:none;">论</abbr></a></li><li class="nv-edit"><a class="external text" href="https://zh.wikipedia.org/w/index.php?title=Template:%E4%B8%89%E5%9B%BD%E5%BF%97&amp;action=edit"><abbr title="编辑该模板" style=";;background:none transparent;border:none;">编</abbr></a></li></ul></div><div style="font-size:110%">［<a href="/wiki/%E8%A5%BF%E6%99%8B" title="西晋">西晋</a>］<a href="/wiki/%E9%99%88%E5%AF%BF" title="陈寿">陈寿</a> 著《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97" title="三国志">三国志</a>》<a href="/wiki/%E4%B8%89%E5%9B%BD%E5%BF%97%E4%BA%BA%E7%89%A9%E5%88%97%E8%A1%A8" title="三国志人物列表">立传人物</a></div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><span class="nowrap">《<a href="/wiki/%E6%9B%B9%E9%AD%8F" title="曹魏">魏</a>书》</span></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a class="mw-selflink selflink">曹操</a></li>
<li><a href="/wiki/%E6%9B%B9%E4%B8%95" title="曹丕">曹丕</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%8F%A1" title="曹叡">曹叡</a></li>
<li><a href="/wiki/%E6%9B%B9%E8%8A%B3" title="曹芳">曹芳</a></li>
<li><a href="/wiki/%E6%9B%B9%E9%AB%A6" title="曹髦">曹髦</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%A5%82" title="曹奂">曹奂</a></li>
<li><a href="/wiki/%E6%AD%A6%E5%AE%A3%E5%8D%9E%E7%9A%87%E5%90%8E" title="武宣卞皇后">武宣卞皇后</a></li>
<li><a href="/wiki/%E6%96%87%E6%98%AD%E7%94%84%E7%9A%87%E5%90%8E" title="文昭甄皇后">文昭甄皇后</a></li>
<li><a href="/wiki/%E9%83%AD%E5%A5%B3%E7%8E%8B" title="郭女王">文德郭皇后</a></li>
<li><a href="/wiki/%E6%98%8E%E6%82%BC%E6%AF%9B%E7%9A%87%E5%90%8E" title="明悼毛皇后">明悼毛皇后</a></li>
<li><a href="/wiki/%E6%98%8E%E5%85%83%E9%83%AD%E7%9A%87%E5%90%8E" title="明元郭皇后">明元郭皇后</a></li>
<li><a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a></li>
<li><a href="/wiki/%E6%9D%8E%E5%82%95" title="李傕">李傕</a></li>
<li><a href="/wiki/%E9%83%AD%E6%B1%9C" title="郭汜">郭汜</a></li>
<li><a href="/wiki/%E8%A2%81%E7%BB%8D" title="袁绍">袁绍</a></li>
<li><a href="/wiki/%E9%A2%9C%E8%89%AF" title="颜良">颜良</a></li>
<li><a href="/wiki/%E6%96%87%E9%86%9C" title="文丑">文丑</a></li>
<li><a href="/wiki/%E8%A2%81%E6%9C%AF" title="袁术">袁术</a></li>
<li><a href="/wiki/%E7%B4%80%E9%9D%88" title="纪灵">纪灵</a></li>
<li><a href="/wiki/%E5%88%98%E8%A1%A8" title="刘表">刘表</a></li>
<li><a href="/wiki/%E5%8A%89%E7%90%AE_(%E5%8A%89%E8%A1%A8%E4%B9%8B%E5%AD%90)" title="刘琮 (刘表之子)">刘琮</a></li>
<li><a href="/wiki/%E9%BB%83%E7%A5%96" title="黄祖">黄祖</a></li>
<li><a href="/wiki/%E5%90%95%E5%B8%83" title="吕布">吕布</a></li>
<li><a href="/wiki/%E9%99%88%E5%AE%AB" title="陈宫">陈宫</a></li>
<li><a href="/wiki/%E9%AB%98%E9%A0%86" title="高顺">高顺</a></li>
<li><a href="/wiki/%E5%BC%B5%E9%82%88_(%E6%9B%B9%E9%AD%8F)" title="张邈 (曹魏)">张邈</a></li>
<li><a href="/wiki/%E9%99%B3%E7%99%BB" title="陈登">陈登</a></li>
<li><a href="/wiki/%E8%87%A7%E6%B4%AA" title="臧洪">臧洪</a></li>
<li><a href="/wiki/%E5%85%AC%E5%AD%99%E7%93%92" title="公孙瓒">公孙瓒</a></li>
<li><a href="/wiki/%E5%8A%89%E8%99%9E" title="刘虞">刘虞</a></li>
<li><a href="/wiki/%E9%99%B6%E8%AC%99" title="陶谦">陶谦</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%A5%8A_(%E6%9D%B1%E6%BC%A2)" title="张杨 (东汉)">张杨</a></li>
<li><a href="/wiki/%E7%9C%AD%E5%9B%BA" title="眭固">眭固</a></li>
<li><a href="/wiki/%E5%85%AC%E5%AD%AB%E5%BA%A6" title="公孙度">公孙度</a></li>
<li><a href="/wiki/%E5%85%AC%E5%AD%AB%E6%B7%B5" title="公孙渊">公孙渊</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%87%95_(%E6%9D%B1%E6%BC%A2)" title="张燕 (东汉)">张燕</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%B9%A1" title="张绣">张绣</a></li>
<li><a href="/wiki/%E5%BC%A0%E9%B2%81" title="张鲁">张鲁</a></li>
<li><a href="/wiki/%E9%96%BB%E5%9C%83" title="阎圃">阎圃</a></li>
<li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%83%87" title="夏侯惇">夏侯惇</a></li>
<li><a href="/wiki/%E9%9F%93%E6%B5%A9" title="韩浩">韩浩</a></li>
<li><a href="/wiki/%E5%8F%B2%E6%B8%99" title="史涣">史涣</a></li>
<li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E6%B8%8A" title="夏侯渊">夏侯渊</a></li>
<li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E9%9C%B8" title="夏侯霸">夏侯霸</a></li>
<li><a href="/wiki/%E6%9B%B9%E4%BB%81" title="曹仁">曹仁</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%B4%94" title="曹纯">曹纯</a></li>
<li><a href="/wiki/%E6%9B%B9%E6%B4%AA" title="曹洪">曹洪</a></li>
<li><a href="/wiki/%E6%9B%B9%E4%BC%91" title="曹休">曹休</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%9C%9F" title="曹真">曹真</a></li>
<li><a href="/wiki/%E9%83%9D%E6%98%AD" title="郝昭">郝昭</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%88%BD" title="曹爽">曹爽</a></li>
<li><a href="/wiki/%E4%BD%95%E6%99%8F" title="何晏">何晏</a></li>
<li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E5%B0%9A" title="夏侯尚">夏侯尚</a></li>
<li><a href="/wiki/%E5%A4%8F%E4%BE%AF%E7%8E%84" title="夏侯玄">夏侯玄</a></li>
<li><a href="/wiki/%E7%8E%8B%E7%B6%93" title="王经">王经</a></li>
<li><a href="/wiki/%E8%8D%80%E5%BD%A7" title="荀彧">荀彧</a></li>
<li><a href="/wiki/%E8%8D%80%E6%94%B8" title="荀攸">荀攸</a></li>
<li><a href="/wiki/%E8%B4%BE%E8%AF%A9" title="贾诩">贾诩</a></li>
<li><a href="/wiki/%E8%A2%81%E6%B8%99" title="袁涣">袁涣</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%AF%84" title="张范">张范</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%89%BF_(%E5%BC%B5%E7%AF%84%E4%B9%8B%E5%BC%9F)" title="张承 (张范之弟)">张承</a></li>
<li><a href="/wiki/%E6%B6%BC%E8%8C%82" title="凉茂">凉茂</a></li>
<li><a href="/wiki/%E5%9C%8B%E6%B7%B5" title="国渊">国渊</a></li>
<li><a href="/wiki/%E7%94%B0%E7%96%87" title="田畴">田畴</a></li>
<li><a href="/wiki/%E7%8E%8B%E8%84%A9" class="mw-redirect" title="王脩">王脩</a></li>
<li><a href="/wiki/%E9%82%B4%E5%8E%9F" title="邴原">邴原</a></li>
<li><a href="/wiki/%E7%AE%A1%E5%AF%A7" title="管宁">管宁</a></li>
<li><a href="/wiki/%E7%8E%8B%E7%83%88" title="王烈">王烈</a></li>
<li><a href="/wiki/%E5%BC%B5%E8%87%B6" title="张臶">张臶</a></li>
<li><a href="/wiki/%E8%83%A1%E6%98%AD" title="胡昭">胡昭</a></li>
<li><a href="/wiki/%E5%B4%94%E7%90%B0" title="崔琰">崔琰</a></li>
<li><a href="/wiki/%E5%AD%94%E8%9E%8D" title="孔融">孔融</a></li>
<li><a href="/wiki/%E6%AF%9B%E7%8E%A0" title="毛玠">毛玠</a></li>
<li><a href="/wiki/%E5%BE%90%E5%A5%95" title="徐奕">徐奕</a></li>
<li><a href="/wiki/%E4%BD%95%E5%A4%94" title="何夔">何夔</a></li>
<li><a href="/wiki/%E9%82%A2%E9%A1%92" title="邢颙">邢颙</a></li>
<li><a href="/wiki/%E9%AE%91%E5%8B%B3" title="鲍勋">鲍勋</a></li>
<li><a href="/wiki/%E9%AE%91%E4%BF%A1" title="鲍信">鲍信</a></li>
<li><a href="/wiki/%E5%8F%B8%E9%A6%AC%E8%8A%9D" title="司马芝">司马芝</a></li>
<li><a href="/wiki/%E9%8D%BE%E7%B9%87" title="锺繇">锺繇</a></li>
<li><a href="/wiki/%E9%8D%BE%E6%AF%93" title="锺毓">锺毓</a></li>
<li><a href="/wiki/%E5%8D%8E%E6%AD%86" title="华歆">华歆</a></li>
<li><a href="/wiki/%E7%8E%8B%E6%9C%97" title="王朗">王朗</a></li>
<li><a href="/wiki/%E7%8E%8B%E8%82%83_(%E4%B8%89%E5%9B%BD)" title="王肃 (三国)">王肃</a></li>
<li><a href="/wiki/%E7%A8%8B%E6%98%B1" title="程昱">程昱</a></li>
<li><a href="/wiki/%E9%83%AD%E5%98%89" title="郭嘉">郭嘉</a></li>
<li><a href="/wiki/%E8%91%A3%E6%98%AD" title="董昭">董昭</a></li>
<li><a href="/wiki/%E5%88%98%E6%99%94_(%E4%B8%89%E5%9B%BD)" title="刘晔 (三国)">刘晔</a></li>
<li><a href="/wiki/%E8%94%A3%E6%BF%9F" title="蒋济">蒋济</a></li>
<li><a href="/wiki/%E5%8A%89%E6%94%BE_(%E4%B8%89%E5%9C%8B)" title="刘放 (三国)">刘放</a></li>
<li><a href="/wiki/%E5%AD%AB%E8%B3%87" title="孙资">孙资</a></li>
<li><a href="/wiki/%E5%8A%89%E9%A6%A5" title="刘馥">刘馥</a></li>
<li><a href="/wiki/%E5%8A%89%E9%9D%96_(%E6%9B%B9%E9%AD%8F)" title="刘靖 (曹魏)">刘靖</a></li>
<li><a href="/wiki/%E5%8F%B8%E9%A6%AC%E6%9C%97" title="司马朗">司马朗</a></li>
<li><a href="/wiki/%E6%A2%81%E7%BF%92" title="梁习">梁习</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%97%A2" title="张既">张既</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%B7%9D" title="张缉">张缉</a></li>
<li><a href="/wiki/%E6%B8%A9%E6%81%A2" title="温恢">温恢</a></li>
<li><a href="/wiki/%E8%B4%BE%E9%80%B5_(%E4%B8%89%E5%9B%BD)" title="贾逵 (三国)">贾逵</a></li>
<li><a href="/wiki/%E4%BB%BB%E5%B3%BB" title="任峻">任峻</a></li>
<li><a href="/wiki/%E6%9E%A3%E7%A5%97" title="枣祗">枣祗</a></li>
<li><a href="/wiki/%E8%98%87%E5%89%87" title="苏则">苏则</a></li>
<li><a href="/wiki/%E6%9D%9C%E7%95%BF" title="杜畿">杜畿</a></li>
<li><a href="/wiki/%E6%9D%9C%E6%81%95" title="杜恕">杜恕</a></li>
<li><a href="/wiki/%E9%84%AD%E6%B8%BE" title="郑浑">郑浑</a></li>
<li><a href="/wiki/%E5%80%89%E6%85%88" title="仓慈">仓慈</a></li>
<li><a href="/wiki/%E5%BC%B5%E9%81%BC" title="张辽">张辽</a></li>
<li><a href="/wiki/%E6%A8%82%E9%80%B2" title="乐进">乐进</a></li>
<li><a href="/wiki/%E4%BA%8E%E7%A6%81" title="于禁">于禁</a></li>
<li><a href="/wiki/%E5%BC%B5%E9%83%83" title="张郃">张郃</a></li>
<li><a href="/wiki/%E5%BE%90%E6%99%83" title="徐晃">徐晃</a></li>
<li><a href="/wiki/%E6%9C%B1%E9%9D%88" title="朱灵">朱灵</a></li>
<li><a href="/wiki/%E6%9D%8E%E5%85%B8" title="李典">李典</a></li>
<li><a href="/wiki/%E6%9D%8E%E9%80%9A_(%E6%9D%B1%E6%BC%A2)" title="李通 (东汉)">李通</a></li>
<li><a href="/wiki/%E8%87%A7%E9%9C%B8" title="臧霸">臧霸</a></li>
<li><a href="/wiki/%E5%AD%AB%E8%A7%80_(%E6%9D%B1%E6%BC%A2)" title="孙观 (东汉)">孙观</a></li>
<li><a href="/wiki/%E6%96%87%E8%81%98" title="文聘">文聘</a></li>
<li><a href="/wiki/%E5%91%82%E8%99%94" title="吕虔">吕虔</a></li>
<li><a href="/wiki/%E8%AE%B8%E8%A4%9A" title="许褚">许褚</a></li>
<li><a href="/wiki/%E5%85%B8%E9%9F%A6" title="典韦">典韦</a></li>
<li><a href="/wiki/%E9%BE%90%E5%BE%B7" title="庞德">庞德</a></li>
<li><a href="/wiki/%E9%BE%90%E6%B7%AF" title="庞淯">庞淯</a></li>
<li><a href="/wiki/%E9%96%BB%E6%BA%AB" title="阎温">阎温</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%BD%B0" title="曹彰">曹彰</a></li>
<li><a href="/wiki/%E6%9B%B9%E6%A4%8D" title="曹植">曹植</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%86%8A" title="曹熊">曹熊</a></li>
<li><a href="/wiki/%E6%9B%B9%E6%98%82" title="曹昂">曹昂</a></li>
<li><a href="/wiki/%E6%9B%B9%E9%91%A0" title="曹铄">曹铄</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%86%B2" title="曹冲">曹冲</a></li>
<li><a href="/wiki/%E6%9B%B9%E6%93%9A" title="曹据">曹据</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AE%87" title="曹宇">曹宇</a></li>
<li><a href="/wiki/%E6%9B%B9%E6%9E%97" title="曹林">曹林</a></li>
<li><a href="/wiki/%E6%9B%B9%E8%A2%9E" title="曹衮">曹衮</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%8E%B9" title="曹玹">曹玹</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%B3%BB" title="曹峻">曹峻</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%9F%A9" title="曹矩">曹矩</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%B9%B9" title="曹干">曹干</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AD%90%E4%B8%8A" title="曹子上">曹上</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%BD%AA" title="曹彪">曹彪</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AD%90%E5%8B%A4" title="曹子勤">曹勤</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AD%90%E4%B9%98" title="曹子乘">曹乘</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AD%90%E6%95%B4" title="曹子整">曹整</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AD%90%E4%BA%AC" title="曹子京">曹京</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%9D%87" title="曹均">曹均</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%AD%90%E6%A3%98" title="曹子棘">曹棘</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%BE%BD" title="曹徽">曹徽</a></li>
<li><a href="/wiki/%E6%9B%B9%E8%8C%82" title="曹茂">曹茂</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%8D%94" title="曹协">曹协</a></li>
<li><a href="/wiki/%E6%9B%B9%E8%95%A4" title="曹蕤">曹蕤</a></li>
<li><a href="/wiki/%E6%9B%B9%E9%91%92" title="曹鉴">曹鉴</a></li>
<li><a href="/wiki/%E6%9B%B9%E9%9C%96" title="曹霖">曹霖</a></li>
<li><a href="/wiki/%E6%9B%B9%E7%A6%AE" title="曹礼">曹礼</a></li>
<li><a href="/wiki/%E6%9B%B9%E9%82%95" title="曹邕">曹邕</a></li>
<li><a href="/wiki/%E6%9B%B9%E8%B2%A2" title="曹贡">曹贡</a></li>
<li><a href="/wiki/%E6%9B%B9%E5%84%BC" title="曹俨">曹俨</a></li>
<li><a href="/wiki/%E7%8E%8B%E7%B2%B2" title="王粲">王粲</a></li>
<li><a href="/wiki/%E5%90%B3%E8%B3%AA" title="吴质">吴质</a></li>
<li><a href="/wiki/%E5%8D%AB%E8%A7%8A" title="卫觊">卫觊</a></li>
<li><a href="/wiki/%E5%8A%89%E5%BB%99" title="刘廙">刘廙</a></li>
<li><a href="/wiki/%E5%88%98%E5%8A%AD_(%E4%B8%89%E5%9B%BD)" title="刘劭 (三国)">刘劭</a></li>
<li><a href="/wiki/%E5%82%85%E5%98%8F" title="傅嘏">傅嘏</a></li>
<li><a href="/wiki/%E6%A1%93%E9%9A%8E" title="桓阶">桓阶</a></li>
<li><a href="/wiki/%E9%99%B3%E7%BE%A4_(%E4%B8%89%E5%9C%8B)" title="陈群 (三国)">陈群</a></li>
<li><a href="/wiki/%E9%99%B3%E6%B3%B0_(%E4%B8%89%E5%9C%8B)" title="陈泰 (三国)">陈泰</a></li>
<li><a href="/wiki/%E9%99%B3%E7%9F%AF" title="陈矫">陈矫</a></li>
<li><a href="/wiki/%E5%BE%90%E5%AE%A3_(%E4%B8%89%E5%9C%8B)" title="徐宣 (三国)">徐宣</a></li>
<li><a href="/wiki/%E8%A1%9B%E8%87%BB" title="卫臻">卫臻</a></li>
<li><a href="/wiki/%E7%9B%A7%E6%AF%93" title="卢毓">卢毓</a></li>
<li><a href="/wiki/%E5%92%8C%E6%B4%BD" title="和洽">和洽</a></li>
<li><a href="/wiki/%E5%B8%B8%E6%9E%97" title="常林">常林</a></li>
<li><a href="/wiki/%E6%9D%A8%E4%BF%8A_(%E4%B8%89%E5%9B%BD)" title="杨俊 (三国)">杨俊</a></li>
<li><a href="/wiki/%E6%9D%9C%E8%A5%B2" title="杜袭">杜袭</a></li>
<li><a href="/wiki/%E8%B5%B5%E4%BF%A8" title="赵俨">赵俨</a></li>
<li><a href="/wiki/%E8%A3%B4%E6%BD%9B" title="裴潜">裴潜</a></li>
<li><a href="/wiki/%E9%9F%93%E6%9A%A8" title="韩暨">韩暨</a></li>
<li><a href="/wiki/%E5%B4%94%E6%9E%97" title="崔林">崔林</a></li>
<li><a href="/wiki/%E9%AB%98%E6%9F%94" title="高柔">高柔</a></li>
<li><a href="/wiki/%E5%AD%AB%E7%A6%AE" title="孙礼">孙礼</a></li>
<li><a href="/wiki/%E7%8E%8B%E8%A7%82_(%E4%B8%89%E5%9B%BD)" title="王观 (三国)">王观</a></li>
<li><a href="/wiki/%E8%BE%9B%E6%AF%97" title="辛毗">辛毗</a></li>
<li><a href="/wiki/%E8%BE%9B%E6%95%9E" title="辛敞">辛敞</a></li>
<li><a href="/wiki/%E6%A5%8A%E9%98%9C" title="杨阜">杨阜</a></li>
<li><a href="/wiki/%E9%9F%8B%E5%BA%B7" title="韦康">韦康</a></li>
<li><a href="/wiki/%E9%AB%98%E5%A0%82%E9%9A%86" title="高堂隆">高堂隆</a></li>
<li><a href="/wiki/%E6%BB%BF%E5%AF%B5" title="满宠">满宠</a></li>
<li><a href="/wiki/%E7%94%B0%E8%B1%AB" title="田豫">田豫</a></li>
<li><a href="/wiki/%E7%89%BD%E6%8B%9B" title="牵招">牵招</a></li>
<li><a href="/wiki/%E7%89%BD%E5%BC%98" title="牵弘">牵弘</a></li>
<li><a href="/wiki/%E9%83%AD%E6%B7%AE" title="郭淮">郭淮</a></li>
<li><a href="/wiki/%E5%BE%90%E9%82%88_(%E4%B8%89%E5%9C%8B)" title="徐邈 (三国)">徐邈</a></li>
<li><a href="/wiki/%E8%83%A1%E8%B3%AA" title="胡质">胡质</a></li>
<li><a href="/wiki/%E7%8E%8B%E6%98%B6_(%E4%B8%89%E5%9C%8B)" title="王昶 (三国)">王昶</a></li>
<li><a href="/wiki/%E7%8E%8B%E5%9F%BA_(%E4%B8%89%E5%9C%8B)" title="王基 (三国)">王基</a></li>
<li><a href="/wiki/%E7%8E%8B%E5%87%8C" title="王凌">王凌</a></li>
<li><a href="/wiki/%E4%BB%A4%E7%8B%90%E6%84%9A" title="令狐愚">令狐愚</a></li>
<li><a href="/wiki/%E6%AF%8C%E4%B8%98%E5%84%89" title="毌丘俭">毌丘俭</a></li>
<li><a href="/wiki/%E6%96%87%E6%AC%BD" title="文钦">文钦</a></li>
<li><a href="/wiki/%E8%AB%B8%E8%91%9B%E8%AA%95" title="诸葛诞">诸葛诞</a></li>
<li><a href="/wiki/%E8%94%A3%E7%8F%AD" title="蒋班">蒋班</a></li>
<li><a href="/wiki/%E5%94%90%E5%92%A8" title="唐咨">唐咨</a></li>
<li><a href="/wiki/%E9%82%93%E8%89%BE" title="邓艾">邓艾</a></li>
<li><a href="/wiki/%E5%B7%9E%E6%B3%B0" title="州泰">州泰</a></li>
<li><a href="/wiki/%E9%8D%BE%E6%9C%83" title="锺会">锺会</a></li>
<li><a href="/wiki/%E8%AB%B8%E8%91%9B%E7%B7%92" title="诸葛绪">诸葛绪</a></li>
<li><a href="/wiki/%E8%83%A1%E9%81%B5" title="胡遵">胡遵</a></li>
<li><a href="/wiki/%E5%8D%8E%E4%BD%97" title="华佗">华佗</a></li>
<li><a href="/wiki/%E6%9D%9C%E5%A4%94" title="杜夔">杜夔</a></li>
<li><a href="/wiki/%E6%9C%B1%E5%BB%BA%E5%B9%B3" title="朱建平">朱建平</a></li>
<li><a href="/wiki/%E5%91%A8%E5%AE%A3" title="周宣">周宣</a></li>
<li><a href="/wiki/%E7%AE%A1%E8%BC%85" title="管辂">管辂</a></li>
<li><a href="/wiki/%E6%9C%B1%E9%91%A0" title="朱铄">朱铄</a></li>
<li><a href="/wiki/%E4%B9%8C%E6%A1%93" title="乌桓">乌丸</a></li>
<li><a href="/wiki/%E9%B2%9C%E5%8D%91" title="鲜卑">鲜卑</a></li>
<li><a href="/wiki/%E6%89%B6%E9%A4%98%E5%9C%8B" title="扶余国">夫余</a></li>
<li><a href="/wiki/%E9%AB%98%E5%8F%A5%E4%B8%BD" title="高句丽">高句丽</a></li>
<li><a href="/wiki/%E6%B2%83%E6%B2%AE" title="沃沮">东沃沮</a></li>
<li><a href="/wiki/%E6%8C%B9%E5%A8%84" title="挹娄">挹娄</a></li>
<li><a href="/wiki/%E6%BF%8A%E8%B2%8A" title="濊貊">濊</a></li>
<li><a href="/wiki/%E4%B8%89%E9%9F%A9" title="三韩">韩</a></li>
<li><a href="/wiki/%E5%80%AD%E5%9B%BD" title="倭国">倭</a></li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">《<a href="/wiki/%E8%9C%80%E6%B1%89" title="蜀汉">蜀</a>书》</th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E5%8A%89%E7%84%89_(%E7%9B%8A%E5%B7%9E%E7%89%A7)" title="刘焉 (益州牧)">刘焉</a></li>
<li><a href="/wiki/%E5%8A%89%E7%92%8B" title="刘璋">刘璋</a></li>
<li><a href="/wiki/%E5%88%98%E5%A4%87" title="刘备">刘备</a></li>
<li><a href="/wiki/%E5%88%98%E7%A6%85" title="刘禅">刘禅</a></li>
<li><a href="/wiki/%E6%98%AD%E7%83%88%E7%9A%87%E5%90%8E_(%E8%9C%80%E6%BC%A2)" title="昭烈皇后 (蜀汉)">先主甘皇后</a></li>
<li><a href="/wiki/%E5%90%B4%E7%9A%87%E5%90%8E_(%E8%9C%80%E6%B1%89)" title="吴皇后 (蜀汉)">先主穆皇后</a></li>
<li><a href="/wiki/%E6%95%AC%E5%93%80%E7%9A%87%E5%90%8E_(%E8%9C%80%E6%B1%89)" title="敬哀皇后 (蜀汉)">后主敬哀皇后</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%9A%87%E5%90%8E_(%E5%8A%89%E7%A6%AA)" title="张皇后 (刘禅)">后主张皇后</a></li>
<li><a href="/wiki/%E5%88%98%E6%B0%B8_(%E4%B8%89%E5%9B%BD)" title="刘永 (三国)">先主子永</a></li>
<li><a href="/wiki/%E5%8A%89%E7%90%86" title="刘理">先主子理</a></li>
<li><a href="/wiki/%E5%88%98%E7%92%BF" title="刘璿">后主太子璿</a></li>
<li><a href="/wiki/%E8%AF%B8%E8%91%9B%E4%BA%AE" title="诸葛亮">诸葛亮</a></li>
<li><a href="/wiki/%E8%AF%B8%E8%91%9B%E7%9E%BB" title="诸葛瞻">诸葛瞻</a></li>
<li><a href="/wiki/%E5%BE%90%E5%BA%B6" title="徐庶">徐庶</a></li>
<li><a href="/wiki/%E5%85%B3%E7%BE%BD" title="关羽">关羽</a></li>
<li><a href="/wiki/%E5%BC%A0%E9%A3%9E" title="张飞">张飞</a></li>
<li><a href="/wiki/%E5%9A%B4%E9%A1%94" title="严颜">严颜</a></li>
<li><a href="/wiki/%E9%A9%AC%E8%B6%85" title="马超">马超</a></li>
<li><a href="/wiki/%E9%A6%AC%E5%B2%B1" title="马岱">马岱</a></li>
<li><a href="/wiki/%E9%BB%84%E5%BF%A0" title="黄忠">黄忠</a></li>
<li><a href="/wiki/%E8%B5%B5%E4%BA%91" title="赵云">赵云</a></li>
<li><a href="/wiki/%E9%99%B3%E5%88%B0" class="mw-redirect" title="陈到">陈到</a></li>
<li><a href="/wiki/%E5%BA%9E%E7%BB%9F" title="庞统">庞统</a></li>
<li><a href="/wiki/%E5%BC%A0%E4%BB%BB" title="张任">张任</a></li>
<li><a href="/wiki/%E6%B3%95%E6%AD%A3" title="法正">法正</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%9D%BE" title="张松">张松</a></li>
<li><a href="/wiki/%E8%A8%B1%E9%9D%96" title="许靖">许靖</a></li>
<li><a href="/wiki/%E9%BA%8B%E7%AB%BA" title="麋竺">麋竺</a></li>
<li><a href="/wiki/%E9%BA%8B%E8%8A%B3" title="麋芳">麋芳</a></li>
<li><a href="/wiki/%E5%A3%AB%E4%BB%81" title="士仁">士仁</a></li>
<li><a href="/wiki/%E5%AD%AB%E4%B9%BE" title="孙乾">孙乾</a></li>
<li><a href="/wiki/%E7%B0%A1%E9%9B%8D" title="简雍">简雍</a></li>
<li><a href="/wiki/%E4%BC%8A%E7%B1%8D" title="伊籍">伊籍</a></li>
<li><a href="/wiki/%E7%A7%A6%E5%AE%93" title="秦宓">秦宓</a></li>
<li><a href="/wiki/%E8%91%A3%E5%92%8C" title="董和">董和</a></li>
<li><a href="/wiki/%E5%8A%89%E5%B7%B4" title="刘巴">刘巴</a></li>
<li><a href="/wiki/%E9%A6%AC%E8%89%AF" title="马良">马良</a></li>
<li><a href="/wiki/%E9%A9%AC%E8%B0%A1" title="马谡">马谡</a></li>
<li><a href="/wiki/%E9%99%88%E9%9C%87_(%E4%B8%89%E5%9B%BD)" title="陈震 (三国)">陈震</a></li>
<li><a href="/wiki/%E9%99%88%E5%BC%8F" title="陈式">陈式</a></li>
<li><a href="/wiki/%E8%91%A3%E5%85%81" title="董允">董允</a></li>
<li><a href="/wiki/%E9%99%B3%E7%A5%97" title="陈祗">陈祗</a></li>
<li><a href="/wiki/%E5%90%95%E4%B9%82" title="吕乂">吕乂</a></li>
<li><a href="/wiki/%E5%8A%89%E5%B0%81" title="刘封">刘封</a></li>
<li><a href="/wiki/%E5%AD%9F%E9%81%94" title="孟达">孟达</a></li>
<li><a href="/wiki/%E5%BD%AD%E7%BE%95" title="彭羕">彭羕</a></li>
<li><a href="/wiki/%E5%BB%96%E7%AB%8B" title="廖立">廖立</a></li>
<li><a href="/wiki/%E6%9D%8E%E4%B8%A5_(%E8%9C%80%E6%B1%89)" title="李严 (蜀汉)">李严</a></li>
<li><a href="/wiki/%E5%8A%89%E7%90%B0" title="刘琰">刘琰</a></li>
<li><a href="/wiki/%E9%AD%8F%E5%BB%B6" title="魏延">魏延</a></li>
<li><a href="/wiki/%E6%9D%A8%E4%BB%AA" title="杨仪">杨仪</a></li>
<li><a href="/wiki/%E9%9C%8D%E5%B3%BB" title="霍峻">霍峻</a></li>
<li><a href="/wiki/%E9%9C%8D%E5%BC%8B" title="霍弋">霍弋</a></li>
<li><a href="/wiki/%E7%BE%85%E6%86%B2" title="罗宪">罗宪</a></li>
<li><a href="/wiki/%E7%8E%8B%E9%80%A3" title="王连">王连</a></li>
<li><a href="/wiki/%E5%90%91%E6%9C%97" title="向朗">向朗</a></li>
<li><a href="/wiki/%E5%90%91%E5%AF%B5" title="向宠">向宠</a></li>
<li><a href="/wiki/%E5%BC%B5%E8%A3%94" title="张裔">张裔</a></li>
<li><a href="/wiki/%E6%A5%8A%E6%B4%AA_(%E4%B8%89%E5%9C%8B)" title="杨洪 (三国)">杨洪</a></li>
<li><a href="/wiki/%E4%BD%95%E7%A5%97" title="何祗">何祗</a></li>
<li><a href="/wiki/%E8%B2%BB%E8%A9%A9" title="费诗">费诗</a></li>
<li><a href="/wiki/%E6%9D%9C%E5%BE%AE" title="杜微">杜微</a></li>
<li><a href="/wiki/%E5%91%A8%E7%BE%A4_(%E4%B8%89%E5%9B%BD)" title="周群 (三国)">周群</a></li>
<li><a href="/wiki/%E5%BC%B5%E8%A3%95_(%E4%B8%89%E5%9C%8B)" title="张裕 (三国)">张裕</a></li>
<li><a href="/wiki/%E6%9D%9C%E7%93%8A" title="杜琼">杜琼</a></li>
<li><a href="/wiki/%E8%A8%B1%E6%85%88" title="许慈">许慈</a></li>
<li><a href="/wiki/%E5%AD%9F%E5%85%89_(%E8%9C%80%E6%BC%A2)" title="孟光 (蜀汉)">孟光</a></li>
<li><a href="/wiki/%E4%BE%86%E6%95%8F" title="来敏">来敏</a></li>
<li><a href="/wiki/%E5%B0%B9%E9%BB%98" title="尹默">尹默</a></li>
<li><a href="/wiki/%E6%9D%8E%E8%AD%94" title="李譔">李譔</a></li>
<li><a href="/wiki/%E8%B0%AF%E5%91%A8" title="谯周">谯周</a></li>
<li><a href="/wiki/%E9%83%A4%E6%AD%A3" title="郤正">郤正</a></li>
<li><a href="/wiki/%E9%BB%83%E6%AC%8A" title="黄权">黄权</a></li>
<li><a href="/wiki/%E6%9D%8E%E6%81%A2_(%E4%B8%89%E5%9C%8B)" title="李恢 (三国)">李恢</a></li>
<li><a href="/wiki/%E9%84%A7%E6%96%B9" title="邓方">邓方</a></li>
<li><a href="/wiki/%E5%91%82%E5%87%B1_(%E8%9C%80%E6%BC%A2)" title="吕凯 (蜀汉)">吕凯</a></li>
<li><a href="/wiki/%E9%A6%AC%E5%BF%A0_(%E8%9C%80%E6%BC%A2)" title="马忠 (蜀汉)">马忠</a></li>
<li><a href="/wiki/%E7%8E%8B%E5%B9%B3_(%E4%B8%89%E5%9B%BD)" title="王平 (三国)">王平</a></li>
<li><a href="/wiki/%E5%8F%A5%E6%89%B6" title="句扶">句扶</a></li>
<li><a href="/wiki/%E5%BC%B5%E5%B6%B7" title="张嶷">张嶷</a></li>
<li><a href="/wiki/%E8%94%A3%E7%90%AC" title="蒋琬">蒋琬</a></li>
<li><a href="/wiki/%E8%B2%BB%E7%A6%95" title="费祎">费祎</a></li>
<li><a href="/wiki/%E5%A7%9C%E7%BB%B4" title="姜维">姜维</a></li>
<li><a href="/wiki/%E8%83%A1%E6%BF%9F" title="胡济">胡济</a></li>
<li><a href="/wiki/%E9%84%A7%E8%8A%9D" title="邓芝">邓芝</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%BF%BC_(%E4%B8%89%E5%9C%8B)" title="张翼 (三国)">张翼</a></li>
<li><a href="/wiki/%E5%AE%97%E9%A0%90" title="宗预">宗预</a></li>
<li><a href="/wiki/%E5%BB%96%E5%8C%96" title="廖化">廖化</a></li>
<li><a href="/wiki/%E6%A5%8A%E6%88%B2" title="杨戏">杨戏</a></li>
<li><a href="/wiki/%E8%B2%BB%E8%A7%80" class="mw-redirect" title="费观">费观</a></li>
<li><a href="/wiki/%E4%BD%95%E5%AE%97" title="何宗">何宗</a></li>
<li><a href="/wiki/%E8%BC%94%E5%8C%A1" title="辅匡">辅匡</a></li>
<li><a href="/wiki/%E5%8A%89%E9%82%95_(%E8%9C%80%E6%BC%A2)" title="刘邕 (蜀汉)">刘邕</a></li>
<li><a href="/wiki/%E5%BC%B5%E5%AD%98" title="张存">张存</a></li>
<li><a href="/wiki/%E6%AE%B7%E8%A7%80" title="殷观">殷观</a></li>
<li><a href="/wiki/%E7%BF%92%E7%A6%8E" title="习祯">习祯</a></li>
<li><a href="/wiki/%E5%90%B3%E6%87%BF" title="吴懿">吴懿</a></li>
<li><a href="/wiki/%E5%90%B3%E7%8F%AD" title="吴班">吴班</a></li>
<li><a href="/wiki/%E7%8E%8B%E7%94%AB_(%E4%B8%89%E5%9B%BD)" title="王甫 (三国)">王甫</a></li>
<li><a href="/wiki/%E6%9D%8E%E9%82%B5" title="李邵">李邵</a></li>
<li><a href="/wiki/%E9%A9%AC%E5%8B%8B" title="马勋">马勋</a></li>
<li><a href="/wiki/%E9%BE%94%E7%A5%BF" title="龚禄">龚禄</a></li>
<li><a href="/wiki/%E9%A6%AE%E7%BF%92" title="冯习">冯习</a></li>
<li><a href="/wiki/%E5%BC%A0%E5%8D%97_(%E8%9C%80%E6%B1%89)" title="张南 (蜀汉)">张南</a></li>
<li><a href="/wiki/%E5%82%85%E8%82%9C" title="傅肜">傅肜</a></li>
<li><a href="/wiki/%E7%A8%8B%E7%95%BF" title="程畿">程畿</a></li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">《<a href="/wiki/%E5%AD%AB%E5%90%B3" title="孙吴">吴</a>书》</th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E5%AD%99%E5%9D%9A" title="孙坚">孙坚</a></li>
<li><a href="/wiki/%E5%AD%99%E7%AD%96" title="孙策">孙策</a></li>
<li><a href="/wiki/%E5%AD%99%E6%9D%83" title="孙权">孙权</a></li>
<li><a href="/wiki/%E5%AD%AB%E4%BA%AE" title="孙亮">孙亮</a></li>
<li><a href="/wiki/%E5%AD%AB%E4%BC%91" title="孙休">孙休</a></li>
<li><a href="/wiki/%E5%AD%99%E7%9A%93" title="孙皓">孙皓</a></li>
<li><a href="/wiki/%E5%8A%89%E7%B9%87" title="刘繇">刘繇</a></li>
<li><a href="/wiki/%E5%88%98%E5%9F%BA_(%E4%B8%89%E5%9B%BD)" title="刘基 (三国)">刘基</a></li>
<li><a href="/wiki/%E5%A4%AA%E5%8F%B2%E6%85%88" title="太史慈">太史慈</a></li>
<li><a href="/wiki/%E5%A3%AB%E7%87%AE_(%E4%B8%89%E5%9B%BD)" title="士燮 (三国)">士燮</a></li>
<li><a href="/wiki/%E5%AD%99%E7%A0%B4%E8%99%8F%E5%90%B4%E5%A4%AB%E4%BA%BA" title="孙破虏吴夫人">吴夫人</a></li>
<li><a href="/wiki/%E8%AC%9D%E5%A4%AB%E4%BA%BA_(%E5%AD%AB%E6%AC%8A)" title="谢夫人 (孙权)">谢夫人</a></li>
<li><a href="/wiki/%E5%BE%90%E5%A4%AB%E4%BA%BA_(%E5%AD%AB%E6%AC%8A)" title="徐夫人 (孙权)">徐夫人</a></li>
<li><a href="/wiki/%E6%AD%A5%E7%B7%B4%E5%B8%AB" title="步练师">步夫人</a></li>
<li><a href="/wiki/%E5%A4%A7%E6%87%BF%E7%9A%87%E5%90%8E" title="大懿皇后">大懿王皇后</a></li>
<li><a href="/wiki/%E6%95%AC%E6%87%B7%E7%9A%87%E5%90%8E" title="敬怀皇后">敬怀王皇后</a></li>
<li><a href="/wiki/%E6%BD%98%E6%B7%91" title="潘淑">潘皇后</a></li>
<li><a href="/wiki/%E5%85%A8%E7%9A%87%E5%90%8E_(%E5%AD%99%E4%BA%AE)" title="全皇后 (孙亮)">全皇后</a></li>
<li><a href="/wiki/%E6%9C%B1%E7%9A%87%E5%90%8E_(%E5%AD%99%E4%BC%91)" title="朱皇后 (孙休)">景朱皇后</a></li>
<li><a href="/wiki/%E4%BD%95%E5%A7%AC" title="何姬">昭献皇后</a></li>
<li><a href="/wiki/%E6%BB%95%E7%9A%87%E5%90%8E" class="mw-redirect" title="滕皇后">滕皇后</a></li>
<li><a href="/wiki/%E5%AD%99%E9%9D%99" title="孙静">孙静</a></li>
<li><a href="/wiki/%E5%AD%99%E7%91%9C_(%E4%B8%89%E5%9B%BD)" title="孙瑜 (三国)">孙瑜</a></li>
<li><a href="/wiki/%E5%AD%AB%E7%9A%8E" title="孙皎">孙皎</a></li>
<li><a href="/wiki/%E5%AD%AB%E5%A5%90" title="孙奂">孙奂</a></li>
<li><a href="/wiki/%E5%AD%AB%E8%B3%81" title="孙贲">孙贲</a></li>
<li><a href="/wiki/%E5%AD%AB%E8%BC%94" title="孙辅">孙辅</a></li>
<li><a href="/wiki/%E5%AD%AB%E7%BF%8A" title="孙翊">孙翊</a></li>
<li><a href="/wiki/%E5%AD%AB%E5%8C%A1" title="孙匡">孙匡</a></li>
<li><a href="/wiki/%E5%AD%AB%E9%9F%B6" title="孙韶">孙韶</a></li>
<li><a href="/wiki/%E5%AD%AB%E6%B2%B3" title="孙河">孙河</a></li>
<li><a href="/wiki/%E5%AD%AB%E6%A1%93" title="孙桓">孙桓</a></li>
<li><a href="/wiki/%E5%BC%B5%E6%98%AD" title="张昭">张昭</a></li>
<li><a href="/wiki/%E5%BC%A0%E6%89%BF" title="张承">张承</a></li>
<li><a href="/wiki/%E5%BC%A0%E4%BC%91" title="张休">张休</a></li>
<li><a href="/wiki/%E9%A1%A7%E9%9B%8D" title="顾雍">顾雍</a></li>
<li><a href="/wiki/%E9%A1%A7%E9%82%B5" title="顾邵">顾邵</a></li>
<li><a href="/wiki/%E8%AF%B8%E8%91%9B%E7%91%BE" title="诸葛瑾">诸葛瑾</a></li>
<li><a href="/wiki/%E8%AB%B8%E8%91%9B%E8%9E%8D" title="诸葛融">诸葛融</a></li>
<li><a href="/wiki/%E6%AD%A5%E9%A8%AD" title="步骘">步骘</a></li>
<li><a href="/wiki/%E6%AD%A5%E9%97%A1" title="步阐">步阐</a></li>
<li><a href="/wiki/%E5%BC%B5%E7%B4%98" title="张纮">张纮</a></li>
<li><a href="/wiki/%E4%B8%A5%E7%95%AF" title="严畯">严畯</a></li>
<li><a href="/wiki/%E7%A8%8B%E7%A7%89" title="程秉">程秉</a></li>
<li><a href="/wiki/%E9%98%9A%E6%B3%BD" title="阚泽">阚泽</a></li>
<li><a href="/wiki/%E8%96%9B%E7%B6%9C" title="薛综">薛综</a></li>
<li><a href="/wiki/%E8%96%9B%E7%91%A9_(%E4%B8%89%E5%9C%8B)" title="薛莹 (三国)">薛莹</a></li>
<li><a href="/wiki/%E5%91%A8%E7%91%9C" title="周瑜">周瑜</a></li>
<li><a href="/wiki/%E9%B2%81%E8%82%83" title="鲁肃">鲁肃</a></li>
<li><a href="/wiki/%E5%90%95%E8%92%99" title="吕蒙">吕蒙</a></li>
<li><a href="/wiki/%E7%A8%8B%E6%99%AE" title="程普">程普</a></li>
<li><a href="/wiki/%E9%BB%83%E8%93%8B" title="黄盖">黄盖</a></li>
<li><a href="/wiki/%E9%9F%93%E7%95%B6" title="韩当">韩当</a></li>
<li><a href="/wiki/%E8%92%8B%E9%92%A6_(%E4%B8%89%E5%9B%BD)" title="蒋钦 (三国)">蒋钦</a></li>
<li><a href="/wiki/%E5%91%A8%E6%B3%B0" title="周泰">周泰</a></li>
<li><a href="/wiki/%E9%99%B3%E6%AD%A6_(%E6%9D%B1%E6%BC%A2)" title="陈武 (东汉)">陈武</a></li>
<li><a href="/wiki/%E9%99%B3%E8%A1%A8" title="陈表">陈表</a></li>
<li><a href="/wiki/%E8%91%A3%E8%A5%B2" title="董袭">董袭</a></li>
<li><a href="/wiki/%E7%94%98%E5%AE%81" title="甘宁">甘宁</a></li>
<li><a href="/wiki/%E8%98%87%E9%A3%9B" title="苏飞">苏飞</a></li>
<li><a href="/wiki/%E5%87%8C%E7%B5%B1" title="凌统">凌统</a></li>
<li><a href="/wiki/%E5%87%8C%E6%93%8D" title="凌操">凌操</a></li>
<li><a href="/wiki/%E5%BE%90%E7%9B%9B" title="徐盛">徐盛</a></li>
<li><a href="/wiki/%E6%BD%98%E7%92%8B" title="潘璋">潘璋</a></li>
<li><a href="/wiki/%E4%B8%81%E5%A5%89" title="丁奉">丁奉</a></li>
<li><a href="/wiki/%E6%9C%B1%E6%B2%BB" title="朱治">朱治</a></li>
<li><a href="/wiki/%E6%9C%B1%E7%84%B6" title="朱然">朱然</a></li>
<li><a href="/wiki/%E6%96%BD%E7%B8%BE" title="施绩">施绩</a></li>
<li><a href="/wiki/%E5%91%82%E7%AF%84" title="吕范">吕范</a></li>
<li><a href="/wiki/%E5%91%82%E6%93%9A" title="吕据">吕据</a></li>
<li><a href="/wiki/%E6%9C%B1%E6%A1%93" title="朱桓">朱桓</a></li>
<li><a href="/wiki/%E6%9C%B1%E7%95%B0" title="朱异">朱异</a></li>
<li><a href="/wiki/%E8%99%9E%E7%BF%BB" title="虞翻">虞翻</a></li>
<li><a href="/wiki/%E8%99%9E%E6%B1%9C" title="虞汜">虞汜</a></li>
<li><a href="/wiki/%E9%99%86%E7%BB%A9" title="陆绩">陆绩</a></li>
<li><a href="/wiki/%E5%BC%A0%E6%B8%A9_(%E4%B8%9C%E5%90%B4)" title="张温 (东吴)">张温</a></li>
<li><a href="/wiki/%E5%BC%B5%E5%84%BC_(%E4%B8%89%E5%9C%8B)" title="张俨 (三国)">张俨</a></li>
<li><a href="/wiki/%E9%A7%B1%E7%B5%B1" title="骆统">骆统</a></li>
<li><a href="/wiki/%E9%99%B8%E7%91%81" title="陆瑁">陆瑁</a></li>
<li><a href="/wiki/%E5%90%BE%E7%B2%B2" title="吾粲">吾粲</a></li>
<li><a href="/wiki/%E6%9C%B1%E6%93%9A" title="朱据">朱据</a></li>
<li><a href="/wiki/%E9%99%B8%E9%81%9C" title="陆逊">陆逊</a></li>
<li><a href="/wiki/%E9%99%B8%E6%8A%97" title="陆抗">陆抗</a></li>
<li><a href="/wiki/%E5%AD%99%E7%99%BB_(%E5%A4%AA%E5%AD%90)" title="孙登 (太子)">孙登</a></li>
<li><a href="/wiki/%E5%AD%AB%E6%85%AE" title="孙虑">孙虑</a></li>
<li><a href="/wiki/%E5%AD%AB%E5%92%8C" title="孙和">孙和</a></li>
<li><a href="/wiki/%E5%AD%AB%E9%9C%B8" title="孙霸">孙霸</a></li>
<li><a href="/wiki/%E5%AD%AB%E5%A5%AE" title="孙奋">孙奋</a></li>
<li><a href="/wiki/%E8%B3%80%E9%BD%8A" title="贺齐">贺齐</a></li>
<li><a href="/wiki/%E5%85%A8%E7%90%AE" title="全琮">全琮</a></li>
<li><a href="/wiki/%E5%90%95%E5%B2%B1" title="吕岱">吕岱</a></li>
<li><a href="/wiki/%E5%91%A8%E9%AD%B4" title="周鲂">周鲂</a></li>
<li><a href="/wiki/%E9%8D%BE%E9%9B%A2%E7%89%A7" title="锺离牧">锺离牧</a></li>
<li><a href="/wiki/%E6%BD%98%E6%BF%AC" title="潘濬">潘濬</a></li>
<li><a href="/wiki/%E9%99%86%E5%87%AF_(%E4%B8%89%E5%9B%BD)" title="陆凯 (三国)">陆凯</a></li>
<li><a href="/wiki/%E9%99%B8%E8%83%A4" title="陆胤">陆胤</a></li>
<li><a href="/wiki/%E6%98%AF%E5%84%80" title="是仪">是仪</a></li>
<li><a href="/wiki/%E8%83%A1%E7%B6%9C" title="胡综">胡综</a></li>
<li><a href="/wiki/%E5%BE%90%E8%A9%B3" title="徐详">徐详</a></li>
<li><a href="/wiki/%E5%90%B3%E7%AF%84" title="吴范">吴范</a></li>
<li><a href="/wiki/%E5%8A%89%E6%83%87" title="刘惇">刘惇</a></li>
<li><a href="/wiki/%E8%B6%99%E9%81%94" title="赵达">赵达</a></li>
<li><a href="/wiki/%E8%AF%B8%E8%91%9B%E6%81%AA" title="诸葛恪">诸葛恪</a></li>
<li><a href="/wiki/%E6%BB%95%E8%83%A4" title="滕胤">滕胤</a></li>
<li><a href="/wiki/%E5%AD%AB%E5%B3%BB" title="孙峻">孙峻</a></li>
<li><a href="/wiki/%E7%95%99%E8%B4%8A" title="留赞">留赞</a></li>
<li><a href="/wiki/%E5%AD%99%E7%B6%9D" title="孙𬘭">孙𬘭</a></li>
<li><a href="/wiki/%E6%BF%AE%E9%99%BD%E8%88%88" title="濮阳兴">濮阳兴</a></li>
<li><a href="/wiki/%E8%90%AC%E5%BD%A7" title="万彧">万彧</a></li>
<li><a href="/wiki/%E7%8E%8B%E8%95%83" title="王蕃">王蕃</a></li>
<li><a href="/wiki/%E6%A5%BC%E7%8E%84" title="楼玄">楼玄</a></li>
<li><a href="/wiki/%E8%B3%80%E9%82%B5" title="贺邵">贺邵</a></li>
<li><a href="/wiki/%E9%9F%8B%E6%98%AD" title="韦昭">韦昭</a></li>
<li><a href="/wiki/%E8%8F%AF%E8%A6%88" title="华核">华核</a></li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><td class="navbox-abovebelow" colspan="2"><div><a href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97" class="extiw" title="s:三国志">维基文库在线阅读</a></div></td></tr></tbody></table></td></tr></tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div class="plainlinks hlist navbar mini"><ul><li class="nv-view"><a href="/wiki/Template:%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89" title="Template:三国演义"><abbr title="查看该模板" style=";;background:none transparent;border:none;">查</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89" title="Template talk:三国演义"><abbr title="讨论该模板" style=";;background:none transparent;border:none;">论</abbr></a></li><li class="nv-edit"><a class="external text" href="https://zh.wikipedia.org/w/index.php?title=Template:%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89&amp;action=edit"><abbr title="编辑该模板" style=";;background:none transparent;border:none;">编</abbr></a></li></ul></div><div style="font-size:110%"><a href="/wiki/%E7%BD%97%E8%B4%AF%E4%B8%AD" title="罗贯中">罗贯中</a>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89" title="三国演义">三国演义</a>》</div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/Category:%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89%E6%83%85%E8%8A%82" title="Category:三国演义情节">情节</a></th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E6%A1%83%E5%9C%92%E4%B8%89%E7%B5%90%E7%BE%A9" title="桃园三结义">桃园三结义</a></li>
<li><a href="/wiki/%E6%8D%89%E6%94%BE%E6%9B%B9" title="捉放曹">捉放曹</a></li>
<li><span class="ilh-all" data-orig-title="汜水关之战" data-lang-code="en" data-lang-name="英语" data-foreign-title="Battle of Sishui Pass"><span class="ilh-page"><a href="/w/index.php?title=%E6%B1%9C%E6%B0%B4%E5%85%B3%E4%B9%8B%E6%88%98&amp;action=edit&amp;redlink=1" class="new" title="汜水关之战（页面不存在）">汜水关之战</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Battle_of_Sishui_Pass" class="extiw" title="en:Battle of Sishui Pass"><span lang="en" dir="auto">Battle of Sishui Pass</span></a></span>）</span></span></li>
<li><a href="/wiki/%E8%99%8E%E7%89%A2%E5%85%B3%E4%B9%8B%E6%88%98" title="虎牢关之战">虎牢关之战</a></li>
<li><a href="/wiki/%E4%B8%89%E8%8B%B1%E6%88%B0%E5%91%82%E5%B8%83" title="三英战吕布">三英战吕布</a></li>
<li><a href="/wiki/%E8%BF%87%E4%BA%94%E5%85%B3%E6%96%A9%E5%85%AD%E5%B0%86" title="过五关斩六将">过五关斩六将</a></li>
<li><a href="/wiki/%E7%9A%84%E7%9B%A7" title="的卢">马跃檀溪</a></li>
<li><a href="/wiki/%E4%B8%89%E9%A1%A7%E8%8C%85%E5%BB%AC" class="mw-redirect" title="三顾茅庐">三顾茅庐</a></li>
<li><a href="/wiki/%E9%9A%86%E4%B8%AD%E5%B0%8D" title="隆中对">隆中对</a></li>
<li><a href="/wiki/%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%98" class="mw-redirect" title="赤壁之战">赤壁之战</a></li>
<li><a href="/wiki/%E5%80%9F%E8%8D%86%E5%B7%9E" title="借荆州">借荆州</a></li>
<li><a href="/wiki/%E9%95%BF%E6%B2%99%E4%B9%8B%E6%88%98_(%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89)" title="长沙之战 (三国演义)">长沙之战</a></li>
<li><a href="/wiki/%E8%91%AD%E8%90%8C%E5%85%B3%E4%B9%8B%E6%88%98" title="葭萌关之战">葭萌关之战</a></li>
<li><a href="/wiki/%E8%97%A4%E7%94%B2%E5%86%9B" title="藤甲军">藤甲军</a></li>
<li><a href="/wiki/%E8%AF%B8%E8%91%9B%E4%BA%AE%E5%8C%97%E4%BC%90#三國演義" title="诸葛亮北伐">六出祁山</a></li>
<li><a href="/wiki/%E9%AA%82%E6%AD%BB%E7%8E%8B%E6%9C%97" title="骂死王朗">骂死王朗</a></li>
<li><a href="/wiki/%E7%A9%BA%E5%9F%8E%E8%A8%88" title="空城计">空城计</a></li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/Category:%E4%B8%89%E5%9B%BD%E4%BA%BA" title="Category:三国人">人物</a></th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group"><a href="/wiki/%E4%B8%89%E5%9B%BD%E5%BF%97%E4%BA%BA%E7%89%A9%E5%88%97%E8%A1%A8" title="三国志人物列表">真实人物</a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E5%88%98%E5%A4%87" title="刘备">刘备</a></li>
<li><a href="/wiki/%E5%85%B3%E7%BE%BD" title="关羽">关羽</a></li>
<li><a href="/wiki/%E5%BC%A0%E9%A3%9E" title="张飞">张飞</a></li>
<li><a href="/wiki/%E8%AF%B8%E8%91%9B%E4%BA%AE" title="诸葛亮">诸葛亮</a></li>
<li><a href="/wiki/%E8%B5%B5%E4%BA%91" title="赵云">赵云</a></li>
<li><a class="mw-selflink selflink">曹操</a></li>
<li><a href="/wiki/%E5%8F%B8%E9%A6%AC%E6%87%BF" class="mw-redirect" title="司马懿">司马懿</a></li>
<li><a href="/wiki/%E5%AD%99%E6%9D%83" title="孙权">孙权</a></li>
<li><a href="/wiki/%E8%91%A3%E5%8D%93" title="董卓">董卓</a></li>
<li><a href="/wiki/%E5%90%95%E5%B8%83" title="吕布">吕布</a></li>
<li><a href="/wiki/%E8%A2%81%E7%B4%B9" class="mw-redirect" title="袁绍">袁绍</a></li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/%E4%B8%89%E5%9B%BD%E8%99%9A%E6%9E%84%E4%BA%BA%E7%89%A9%E5%88%97%E8%A1%A8" title="三国虚构人物列表">虚构人物</a></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><a href="/wiki/%E8%B2%82%E8%9D%89" title="貂蝉">貂蝉</a></li>
<li><a href="/wiki/%E5%91%A8%E5%80%89" title="周仓">周仓</a></li>
<li><a href="/wiki/%E5%85%B3%E7%B4%A2" title="关索">关索</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks collapsible collapsed navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><span style="float:left;width:8em;font-size:80%;margin-right:0.5em">&#160;</span><div style="font-size:110%"><span class="ilh-all" data-orig-title="三国演义改编作品" data-lang-code="en" data-lang-name="英语" data-foreign-title="List of media adaptations of Romance of the Three Kingdoms"><span class="ilh-page"><a href="/w/index.php?title=%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89%E6%94%B9%E7%BC%96%E4%BD%9C%E5%93%81&amp;action=edit&amp;redlink=1" class="new" title="三国演义改编作品（页面不存在）">改编</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/List_of_media_adaptations_of_Romance_of_the_Three_Kingdoms" class="extiw" title="en:List of media adaptations of Romance of the Three Kingdoms"><span lang="en" dir="auto">List of media adaptations of Romance of the Three Kingdoms</span></a></span>）</span></span>及派生作品</div></th></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">电影</th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li>《<a href="/wiki/%E5%AE%9A%E5%86%9B%E5%B1%B1_(1905%E5%B9%B4%E7%94%B5%E5%BD%B1)" title="定军山 (1905年电影)">定军山</a>》（1905）</li>
<li>《<span class="ilh-all" data-orig-title="左慈戏曹" data-lang-code="en" data-lang-name="英语" data-foreign-title="The Witty Sorcerer"><span class="ilh-page"><a href="/w/index.php?title=%E5%B7%A6%E6%85%88%E6%88%8F%E6%9B%B9&amp;action=edit&amp;redlink=1" class="new" title="左慈戏曹（页面不存在）">左慈戏曹</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/The_Witty_Sorcerer" class="extiw" title="en:The Witty Sorcerer"><span lang="en" dir="auto">The Witty Sorcerer</span></a></span>）</span></span>》（1931）</li>
<li>《<span class="ilh-all" data-orig-title="貂蝉 (1938年电影)" data-lang-code="en" data-lang-name="英语" data-foreign-title="Diao Chan（film)"><span class="ilh-page"><a href="/w/index.php?title=%E8%B2%82%E8%9D%89_(1938%E5%B9%B4%E7%94%B5%E5%BD%B1)&amp;action=edit&amp;redlink=1" class="new" title="貂蝉 (1938年电影)（页面不存在）">貂蝉</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Diao_Chan%EF%BC%88film)" class="extiw" title="en:Diao Chan（film)"><span lang="en" dir="auto">Diao Chan（film)</span></a></span>）</span></span>》（1938）</li>
<li>《<a href="/wiki/%E8%B2%82%E8%9F%AC_(1958%E5%B9%B4%E9%9B%BB%E5%BD%B1)" title="貂蝉 (1958年电影)">貂蝉</a>》（1958）</li>
<li>《<span class="ilh-all" data-orig-title="貂蝉与吕布" data-lang-code="en" data-lang-name="英语" data-foreign-title="Tiao Chan (film)"><span class="ilh-page"><a href="/w/index.php?title=%E8%B2%82%E8%9D%89%E4%B8%8E%E5%90%95%E5%B8%83&amp;action=edit&amp;redlink=1" class="new" title="貂蝉与吕布（页面不存在）">貂蝉与吕布</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Tiao_Chan_(film)" class="extiw" title="en:Tiao Chan (film)"><span lang="en" dir="auto">Tiao Chan (film)</span></a></span>）</span></span>》（1967）</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E4%B9%8B%E8%A6%8B%E9%BE%8D%E5%8D%B8%E7%94%B2" title="三国之见龙卸甲">三国志之见龙卸甲</a>》（2008）</li>
<li>《<a href="/wiki/%E8%B5%A4%E5%A3%81_(%E7%94%B5%E5%BD%B1)" title="赤壁 (电影)">赤壁</a>》（2008）</li>
<li>《<a href="/wiki/%E9%97%9C%E9%9B%B2%E9%95%B7_(%E9%9B%BB%E5%BD%B1)" title="关云长 (电影)">关云长</a>》（2011）</li>
<li>《<a href="/wiki/%E9%93%9C%E9%9B%80%E5%8F%B0_(%E7%94%B5%E5%BD%B1)" title="铜雀台 (电影)">铜雀台</a>》（2012）</li>
<li>《<a href="/wiki/%E5%BD%B1_(2018%E5%B9%B4%E9%9B%BB%E5%BD%B1)" title="影 (2018年电影)">影</a>》（2018）</li>
<li>《<a href="/wiki/%E7%9C%9F%C2%B7%E4%B8%89%E5%9C%8B%E7%84%A1%E9%9B%99_(%E9%9B%BB%E5%BD%B1)" title="真·三国无双 (电影)">真·三国无双</a>》（2019）</li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">电视</th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em"></div><table cellspacing="0" class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group">动画</th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97_(%E6%BC%AB%E7%95%AB)" title="三国志 (漫画)">三国志</a>》（1991）</li>
<li>《<a href="/wiki/%E4%B8%80%E9%A8%8E%E7%95%B6%E5%8D%83" title="一骑当千">一骑当千</a>》（2003）</li>
<li>《<a href="/wiki/%E9%8B%BC%E9%90%B5%E4%B8%89%E5%9C%8B%E5%BF%97" title="钢铁三国志">钢铁三国志</a>》（2007）</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89_(%E5%8A%A8%E7%94%BB)" title="三国演义 (动画)">三国演义</a>》（2009）</li>
<li>《<a href="/wiki/SD_GUNDAM%E4%B8%89%E5%9C%8B%E5%82%B3BraveBattleWarriors" title="SD 高达三国传BraveBattleWarriors">SD 高达三国传BraveBattleWarriors</a>》（2010）</li>
<li>《<a href="/wiki/%E4%BE%8D%E7%81%B5%E6%BC%94%E6%AD%A6" title="侍灵演武">侍灵演武</a>》（2016）</li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">电视剧</th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li>《<a href="/wiki/%E6%B4%9B%E7%A5%9E_(1975%E5%B9%B4%E9%9B%BB%E8%A6%96%E5%8A%87)" title="洛神 (1975年电视剧)">洛神</a>》（1975）</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E6%98%A5%E7%A7%8B" title="三国春秋">三国春秋</a>》（1976）</li>
<li>《<a href="/wiki/%E8%AB%B8%E8%91%9B%E4%BA%AE_(%E4%BA%9E%E8%A6%96%E9%9B%BB%E8%A6%96%E5%8A%87%E9%9B%86)" class="mw-redirect" title="诸葛亮 (亚视电视剧)">诸葛亮</a>》（1985）</li>
<li>《<a href="/wiki/%E8%AB%B8%E8%91%9B%E4%BA%AE_(%E4%B8%AD%E5%9C%8B%E5%A4%A7%E9%99%B8%E9%9B%BB%E8%A6%96%E5%8A%87)" title="诸葛亮 (中国大陆电视剧)">诸葛亮</a>》（1985）</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89_(%E7%94%B5%E8%A7%86%E5%89%A7)" title="三国演义 (电视剧)">三国演义</a>》（1994）</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E8%8B%B1%E9%9B%84%E5%82%B3%E4%B9%8B%E9%97%9C%E5%85%AC" title="三国英雄传之关公">三国英雄传之关公</a>》（1996）</li>
<li>《<a href="/wiki/%E9%86%AB%E7%A5%9E%E8%8F%AF%E4%BD%97" title="医神华佗">医神华佗</a>》（2000年）</li>
<li>《<a href="/wiki/%E6%AD%A6%E5%9C%A3%E5%85%B3%E5%85%AC" title="武圣关公">武圣关公</a>》（2002）</li>
<li>《<a href="/wiki/%E6%B4%9B%E7%A5%9E_(2002%E5%B9%B4%E9%9B%BB%E8%A6%96%E5%8A%87)" title="洛神 (2002年电视剧)">洛神</a>》（2002）</li>
<li>《<a href="/wiki/%E7%B5%82%E6%A5%B5%E4%B8%89%E5%9C%8B" title="终极三国">终极三国</a>》（2009）
<ul><li><a href="/wiki/%E7%B5%82%E6%A5%B5%E4%B8%89%E5%9C%8B%E7%99%BB%E5%A0%B4%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8" class="mw-redirect" title="终极三国登场角色列表">角色</a></li>
<li><span class="ilh-all" data-orig-title="终极三国劇集列表" data-lang-code="en" data-lang-name="英语" data-foreign-title="List of K.O.3an Guo episodes"><span class="ilh-page"><a href="/w/index.php?title=%E7%BB%88%E6%9E%81%E4%B8%89%E5%9B%BD%E5%8A%87%E9%9B%86%E5%88%97%E8%A1%A8&amp;action=edit&amp;redlink=1" class="new" title="终极三国剧集列表（页面不存在）">剧集</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/List_of_K.O.3an_Guo_episodes" class="extiw" title="en:List of K.O.3an Guo episodes"><span lang="en" dir="auto">List of K.O.3an Guo episodes</span></a></span>）</span></span></li></ul></li>
<li>《<a href="/wiki/%E4%B8%89%E5%9B%BD_(%E7%94%B5%E8%A7%86%E5%89%A7)" title="三国 (电视剧)">三国</a>》（2010）</li>
<li>《<a href="/wiki/%E5%9B%9E%E5%88%B0%E4%B8%89%E5%9C%8B" title="回到三国">回到三国</a>》（2012）</li>
<li>《<a href="/wiki/%E6%96%B0%E6%B4%9B%E7%A5%9E" title="新洛神">新洛神</a>》（2013）</li>
<li>《<a href="/wiki/%E6%9B%B9%E6%93%8D_(%E7%94%B5%E8%A7%86%E5%89%A7)" title="曹操 (电视剧)">曹操</a>》（2015）</li>
<li>《<a href="/wiki/%E6%AD%A6%E7%A5%9E%E8%B5%B5%E5%AD%90%E9%BE%99" title="武神赵子龙">武神赵子龙</a>》（2016）</li>
<li>《<a href="/wiki/%E5%A4%A7%E5%86%9B%E5%B8%88%E5%8F%B8%E9%A9%AC%E6%87%BF" title="大军师司马懿">大军师司马懿</a>》（2017）</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%9C%BA%E5%AF%86%E4%B9%8B%E6%BD%9C%E9%BE%99%E5%9C%A8%E6%B8%8A" title="三国机密之潜龙在渊">三国机密之潜龙在渊</a>》（2018）</li></ul>
</div></td></tr></tbody></table><div></div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">游戏</th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97%E7%B3%BB%E5%88%97" title="三国志系列">三国志系列</a>》</li>
<li>《<a href="/wiki/%E7%9C%9F%C2%B7%E4%B8%89%E5%9C%8B%E7%84%A1%E9%9B%99%E7%B3%BB%E5%88%97" title="真·三国无双系列">真·三国无双系列</a>》
<ul><li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97%E6%88%B0%E8%A8%98" title="三国志战记">三国志战记</a>》</li>
<li>《<a href="/wiki/%E7%84%A1%E9%9B%99OROCHI_%E8%9B%87%E9%AD%94" title="无双OROCHI 蛇魔">无双OROCHI 蛇魔</a>》系列</li></ul></li>
<li>《<a href="/wiki/%E5%86%B3%E6%88%98II" title="决战II">决战II</a>》</li>
<li>《<a href="/wiki/%E6%AD%A6%E5%B0%87%E7%88%AD%E9%9C%B8" title="武将争霸">武将争霸</a>》</li>
<li>《<a href="/wiki/%E5%B9%BB%E6%83%B3%E4%B8%89%E5%9B%BD%E5%BF%97" title="幻想三国志">幻想三国志</a>》</li>
<li>《<a href="/wiki/%E5%90%9E%E9%A3%9F%E5%A4%A9%E5%9C%B0_(%E8%A1%97%E6%9C%BA)" title="吞食天地 (街机)">吞食天地</a>》
<ul><li>《<a href="/wiki/%E5%90%9E%E9%A3%9F%E5%A4%A9%E5%9C%B0II_%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%B0" title="吞食天地II 赤壁之战">吞食天地II 赤壁之战</a>》</li></ul></li>
<li>《<a href="/wiki/%E5%90%9E%E9%A3%9F%E5%A4%A9%E5%9C%B0_(%E7%BA%A2%E7%99%BD%E6%9C%BA)" title="吞食天地 (红白机)">吞食天地</a>》</li>
<li>《<a href="/wiki/%E5%82%B2%E4%B8%96%E4%B8%89%E5%9B%BD" title="傲世三国">傲世三国</a>》</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%88%98%E7%BA%AA" title="三国战纪">三国战纪</a>》</li>
<li>《<a href="/wiki/%E6%88%80%E5%A7%AC%E2%80%A0%E7%84%A1%E9%9B%99" title="恋姬†无双">恋姬†无双</a>》</li>
<li>《<a href="/wiki/%E8%B5%A4%E5%A3%81_(%E6%B8%B8%E6%88%8F)" title="赤壁 (游戏)">赤壁</a>》</li>
<li>《<a href="/wiki/%E7%8E%8B%E8%80%85%E4%B8%96%E7%95%8C" title="王者世界">王者世界</a>》</li>
<li>《<a href="/w/index.php?title=%E4%B8%89%E5%9B%BD%E9%A3%8E%E4%BA%91&amp;action=edit&amp;redlink=1" class="new" title="三国风云（页面不存在）">三国风云</a>》</li>
<li>《<span class="ilh-all" data-orig-title="傲世三国：赤壁之战" data-lang-code="en" data-lang-name="英语" data-foreign-title="Dragon Throne: Battle of Red Cliffs"><span class="ilh-page"><a href="/w/index.php?title=%E5%82%B2%E4%B8%96%E4%B8%89%E5%9B%BD%EF%BC%9A%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%98&amp;action=edit&amp;redlink=1" class="new" title="傲世三国：赤壁之战（页面不存在）">傲世三国：赤壁之战</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Dragon_Throne:_Battle_of_Red_Cliffs" class="extiw" title="en:Dragon Throne: Battle of Red Cliffs"><span lang="en" dir="auto">Dragon Throne: Battle of Red Cliffs</span></a></span>）</span></span>》</li>
<li>《<a href="/wiki/%E5%85%A8%E8%BB%8D%E7%A0%B4%E6%95%B5%EF%BC%9A%E4%B8%89%E5%9C%8B" class="mw-redirect" title="全军破敌：三国">全军破敌：三国</a>》</li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">漫画</th><td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li>《<a href="/wiki/%E7%81%AB%E9%B3%B3%E7%87%8E%E5%8E%9F" title="火凤燎原">火凤燎原</a>》</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97_(%E6%BC%AB%E7%95%AB)" title="三国志 (漫画)">三国志</a>》</li>
<li>《<a href="/wiki/%E8%92%BC%E5%A4%A9%E8%88%AA%E8%B7%AF" title="苍天航路">苍天航路</a>》</li>
<li>《<a href="/wiki/%E9%BE%8D%E7%8B%BC%E5%82%B3" title="龙狼传">龙狼传</a>》</li>
<li>《<a href="/wiki/%E5%90%9E%E9%A3%9F%E5%A4%A9%E5%9C%B0_(%E6%BC%AB%E7%94%BB)" title="吞食天地 (漫画)">吞食天地</a>》</li>
<li>《<span class="ilh-all" data-orig-title="怪·力·乱·神" data-lang-code="en" data-lang-name="英语" data-foreign-title="Qwan"><span class="ilh-page"><a href="/w/index.php?title=%E6%80%AA%C2%B7%E5%8A%9B%C2%B7%E4%B9%B1%C2%B7%E7%A5%9E&amp;action=edit&amp;redlink=1" class="new" title="怪·力·乱·神（页面不存在）">怪·力·乱·神</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Qwan" class="extiw" title="en:Qwan"><span lang="en" dir="auto">Qwan</span></a></span>）</span></span>》</li>
<li>《<a href="/wiki/%E4%B8%80%E9%A8%8E%E7%95%B6%E5%8D%83" title="一骑当千">一骑当千</a>》</li>
<li>《<span class="ilh-all" data-orig-title="超三国志-覇" data-lang-code="en" data-lang-name="英语" data-foreign-title="Lord (manga)"><span class="ilh-page"><a href="/w/index.php?title=%E8%B6%85%E4%B8%89%E5%9B%BD%E5%BF%97-%E8%A6%87&amp;action=edit&amp;redlink=1" class="new" title="超三国志-霸（页面不存在）">超三国志-霸</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Lord_(manga)" class="extiw" title="en:Lord (manga)"><span lang="en" dir="auto">Lord (manga)</span></a></span>）</span></span>》</li>
<li>《<a href="/wiki/BB%E6%88%B0%E5%A3%AB%E4%B8%89%E5%9C%8B%E5%82%B3" title="BB战士三国传">BB战士三国传</a>》</li>
<li>《<span class="ilh-all" data-orig-title="DRAGON SISTER! -三國志 百花繚乱-" data-lang-code="en" data-lang-name="英语" data-foreign-title="Dragon Sister!"><span class="ilh-page"><a href="/w/index.php?title=DRAGON_SISTER!_-%E4%B8%89%E5%9C%8B%E5%BF%97_%E7%99%BE%E8%8A%B1%E7%B9%9A%E4%B9%B1-&amp;action=edit&amp;redlink=1" class="new" title="DRAGON SISTER! -三国志 百花缭乱-（页面不存在）">DRAGON SISTER! -三国志 百花缭乱-</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Dragon_Sister!" class="extiw" title="en:Dragon Sister!"><span lang="en" dir="auto">Dragon Sister!</span></a></span>）</span></span>》</li>
<li>《<a href="/wiki/%E9%AD%94%E6%B3%95%E7%84%A1%E9%9B%99%E5%A4%A9%E4%BD%BF%E8%A1%9D%E9%8B%92%E7%AA%81%E5%88%BA%EF%BC%81%EF%BC%81%E5%91%82%E5%B8%83%E5%AD%90" class="mw-redirect" title="魔法无双天使冲锋突刺！！吕布子">魔法无双天使冲锋突刺！！吕布子</a>》</li>
<li>《<a href="/wiki/%E4%BE%8D%E7%81%B5%E6%BC%94%E6%AD%A6" title="侍灵演武">侍灵演武</a>》</li>
<li>《<a href="/wiki/%E5%A4%A9%E5%AD%90%E5%82%B3%E5%A5%87#天子傳奇7三國驕皇" title="天子传奇">天子传奇7三国骄皇</a>》</li></ul>
</div></td></tr><tr style="height:2px"><td colspan="3"></td></tr><tr><th scope="row" class="navbox-group">卡牌游戏</th><td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li>《<span class="ilh-all" data-orig-title="博图三国志" data-lang-code="en" data-lang-name="英语" data-foreign-title="Portal Three Kingdoms"><span class="ilh-page"><a href="/w/index.php?title=%E5%8D%9A%E5%9B%BE%E4%B8%89%E5%9B%BD%E5%BF%97&amp;action=edit&amp;redlink=1" class="new" title="博图三国志（页面不存在）">博图三国志</a></span><span class="noprint ilh-comment">（<span class="ilh-lang">英语</span><span class="ilh-colon">：</span><span class="ilh-link"><a href="https://en.wikipedia.org/wiki/Portal_Three_Kingdoms" class="extiw" title="en:Portal Three Kingdoms"><span lang="en" dir="auto">Portal Three Kingdoms</span></a></span>）</span></span>》</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97%E5%A4%A7%E6%88%B0" title="三国志大战">三国志大战</a>》</li>
<li>《<a href="/wiki/%E4%B8%89%E5%9B%BD%E6%9D%80" title="三国杀">三国杀</a>》</li></ul>
</div></td></tr></tbody></table><div></div></td></tr></tbody></table></td></tr></tbody></table>
<table cellspacing="0" class="navbox" style="border-spacing:0"><tbody><tr><td style="padding:2px"><table cellspacing="0" class="nowraplinks hlist navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="row" class="navbox-group nowrap"><a href="/wiki/Help:%E8%A7%84%E8%8C%83%E6%8E%A7%E5%88%B6" class="mw-redirect" title="Help:规范控制">规范控制</a> <a href="https://www.wikidata.org/wiki/Q204077" title="编辑维基数据链接"><img alt="编辑维基数据链接" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" decoding="async" width="10" height="10" style="vertical-align: text-top" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/15px-OOjs_UI_icon_edit-ltr-progressive.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/20px-OOjs_UI_icon_edit-ltr-progressive.svg.png 2x" data-file-width="20" data-file-height="20" /></a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px"><div style="padding:0em 0.25em">
<ul><li><span class="nowrap"> <a rel="nofollow" class="external text" href="https://www.worldcat.org/identities/containsVIAFID/112501523">WorldCat Identities</a></span></li>
<li><span class="nowrap"><a href="/wiki/BIBSYS" title="BIBSYS">BIBSYS</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://authority.bibsys.no/authority/rest/authorities/html/10082692">10082692</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E6%B3%95%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86" class="mw-redirect" title="法国国家图书馆">BNF</a>: <span class="uid"><a rel="nofollow" class="external text" href="http://catalogue.bnf.fr/ark:/12148/cb124695614">cb124695614</a> <a rel="nofollow" class="external text" href="http://data.bnf.fr/ark:/12148/cb124695614">(data)</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E4%B8%AD%E5%9B%BD%E5%8E%86%E4%BB%A3%E4%BA%BA%E7%89%A9%E4%BC%A0%E8%AE%B0%E8%B5%84%E6%96%99%E5%BA%93" title="中国历代人物传记资料库">CBDB</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=0030257">0030257</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E6%B3%95%E9%BC%93%E6%96%87%E7%90%86%E5%AD%B8%E9%99%A2" title="法鼓文理学院">DILA</a>: <span class="uid"><a rel="nofollow" class="external text" href="http://authority.ddbc.edu.tw/person/search.php?aid=A003207">A003207</a></span></span></li>
<li><span class="nowrap"><a href="https://www.wikidata.org/wiki/Property:P2163" class="extiw" title="d:Property:P2163">FAST</a>: <span class="uid"><a rel="nofollow" class="external text" href="//experimental.worldcat.org/fast/70272">70272</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E6%95%B4%E5%90%88%E8%A7%84%E8%8C%83%E6%96%87%E6%A1%A3" title="整合规范文档">GND</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://d-nb.info/gnd/119012898">119012898</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E5%9C%8B%E9%9A%9B%E6%A8%99%E6%BA%96%E5%90%8D%E7%A8%B1%E8%AD%98%E5%88%A5%E7%A2%BC" title="国际标准名称识别码">ISNI</a>: <span class="uid"><a rel="nofollow" class="external text" href="http://isni.org/isni/0000000081798501">0000 0000 8179 8501</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E4%BC%9A%E5%9B%BE%E4%B9%A6%E9%A6%86%E6%8E%A7%E5%88%B6%E5%8F%B7" title="美国国会图书馆控制号">LCCN</a>: <span class="uid"><a rel="nofollow" class="external text" href="http://id.loc.gov/authorities/names/n81035237">n81035237</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E5%9C%8B%E7%AB%8B%E5%9C%8B%E6%9C%83%E5%9C%96%E6%9B%B8%E9%A4%A8" title="国立国会图书馆">NDL</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://id.ndl.go.jp/auth/ndlna/00498973">00498973</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E6%8D%B7%E5%85%8B%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86" class="mw-redirect" title="捷克国家图书馆">NKC</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://aleph.nkp.cz/F/?func=find-c&amp;local_base=aut&amp;ccl_term=ica=jx20060719001&amp;CON_LNG=ENG">jx20060719001</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E6%BE%B3%E6%B4%B2%E5%9C%8B%E5%AE%B6%E5%9C%96%E6%9B%B8%E9%A4%A8" class="mw-redirect" title="澳洲国家图书馆">NLA</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://nla.gov.au/anbd.aut-an36730562">36730562</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E4%BB%A5%E8%89%B2%E5%88%97%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86" title="以色列国家图书馆">NNL</a>: <span class="uid"><a rel="nofollow" class="external text" href="http://aleph.nli.org.il/F/?func=find-b&amp;local_base=NNL10&amp;find_code=SYS&amp;con_lng=eng&amp;request=000132896">000132896</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/LIBRIS" title="LIBRIS">SELIBR</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://libris.kb.se/auth/216269">216269</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E5%A4%A7%E5%AD%B8%E6%96%87%E6%AA%94%E7%B3%BB%E7%B5%B1" title="大学文档系统">SUDOC</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://www.idref.fr/033884080">033884080</a></span></span></li>
<li><span class="nowrap"><a href="/wiki/%E8%99%9A%E6%8B%9F%E5%9B%BD%E9%99%85%E8%A7%84%E8%8C%83%E6%96%87%E6%A1%A3" title="虚拟国际规范文档">VIAF</a>: <span class="uid"><a rel="nofollow" class="external text" href="https://viaf.org/viaf/112501523">112501523</a></span></span></li></ul>
</div></td></tr></tbody></table></td></tr></tbody></table>
<!--
NewPP limit report
Parsed by mw1328
Cached time: 20191210102744
Cache expiry: 2592000
Dynamic content: false
Complications: []
CPU time usage: 1.860 seconds
Real time usage: 2.297 seconds
Preprocessor visited node count: 11624/1000000
Preprocessor generated node count: 0/1500000
Post‐expand include size: 282520/2097152 bytes
Template argument size: 8346/2097152 bytes
Highest expansion depth: 24/40
Expensive parser function count: 27/500
Unstrip recursion depth: 0/20
Unstrip post‐expand size: 60754/5000000 bytes
Number of Wikibase entities loaded: 1/400
Lua time usage: 0.366/10.000 seconds
Lua memory usage: 4.8 MB/50 MB
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00% 1390.022      1 -total
 38.37%  533.399      8 Template:Infobox
 24.36%  338.675      1 Template:Infobox_Chinese
 21.73%  302.031     13 Template:Navbox
 20.05%  278.722      1 Template:Authority_control
 17.19%  238.937      1 Template:Infobox_Chinese/Chinese
  7.56%  105.113      1 Template:Reflist
  7.21%  100.252      1 Template:東亞男性歷史人物
  6.61%   91.882      1 Template:三国演义
  5.04%   70.067      1 Template:三國君主
-->

<!-- Saved in parser cache with key zhwiki:pcache:idhash:2870-0!userlang=zh-cn!zh-cn and timestamp 20191210102742 and revision id 56725076
 -->
</div><noscript><img src="//zh.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" title="" width="1" height="1" style="border: none; position: absolute;" /></noscript></div>

    <div class="printfooter">取自“<a dir="ltr" href="https://zh.wikipedia.org/w/index.php?title=曹操&amp;oldid=56725076">https://zh.wikipedia.org/w/index.php?title=曹操&amp;oldid=56725076</a>”</div>

    <div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Special:%E9%A1%B5%E9%9D%A2%E5%88%86%E7%B1%BB" title="Special:页面分类">分类</a>：<ul><li><a href="/wiki/Category:155%E5%B9%B4%E5%87%BA%E7%94%9F" title="Category:155年出生">155年出生</a></li><li><a href="/wiki/Category:220%E5%B9%B4%E9%80%9D%E4%B8%96" title="Category:220年逝世">220年逝世</a></li><li><a href="/wiki/Category:%E4%B8%89%E5%9B%BD%E5%BF%97%E7%AB%8B%E4%BC%A0%E4%BA%BA%E7%89%A9" title="Category:三国志立传人物">三国志立传人物</a></li><li><a href="/wiki/Category:%E6%9B%B9%E6%93%8D" title="Category:曹操">曹操</a></li><li><a href="/wiki/Category:%E4%B8%9C%E6%B1%89%E5%86%9B%E9%98%80" title="Category:东汉军阀">东汉军阀</a></li><li><a href="/wiki/Category:%E4%B8%9C%E6%B1%89%E5%8F%B8%E7%A9%BA" title="Category:东汉司空">东汉司空</a></li><li><a href="/wiki/Category:%E4%B8%9C%E6%B1%89%E5%A4%AA%E5%AE%88" title="Category:东汉太守">东汉太守</a></li><li><a href="/wiki/Category:%E4%B8%9C%E6%B1%89%E5%8E%BF%E4%BB%A4" title="Category:东汉县令">东汉县令</a></li><li><a href="/wiki/Category:%E4%B8%9C%E6%B1%89%E5%A4%96%E6%88%9A" title="Category:东汉外戚">东汉外戚</a></li><li><a href="/wiki/Category:%E6%9B%B9%E9%AD%8F%E8%BF%BD%E5%B0%8A%E7%9A%87%E5%B8%9D" title="Category:曹魏追尊皇帝">曹魏追尊皇帝</a></li><li><a href="/wiki/Category:%E4%BA%B3%E5%B7%9E%E4%BA%BA" title="Category:亳州人">亳州人</a></li><li><a href="/wiki/Category:%E4%B8%9C%E6%B1%89%E8%AF%97%E4%BA%BA" title="Category:东汉诗人">东汉诗人</a></li><li><a href="/wiki/Category:%E4%B8%AD%E5%9C%8B%E9%9D%9E%E8%99%9B%E6%A7%8B%E4%BD%9C%E5%93%81%E4%BD%9C%E5%AE%B6" title="Category:中國非虛構作品作家">中国非虚构作品作家</a></li><li><a href="/wiki/Category:%E4%B8%AD%E5%9B%BD%E6%91%84%E6%94%BF%E8%80%85" title="Category:中国摄政者">中国摄政者</a></li><li><a href="/wiki/Category:%E6%9B%B9%E5%A7%93" title="Category:曹姓">曹姓</a></li><li><a href="/wiki/Category:%E5%A4%AA%E7%A5%96" title="Category:太祖">太祖</a></li></ul></div><div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">隐藏分类：<ul><li><a href="/wiki/Category:%E4%BD%BF%E7%94%A8%E6%97%A0%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%BF%A1%E6%81%AF%E6%A1%86%E6%A8%A1%E6%9D%BF%E7%9A%84%E6%9D%A1%E7%9B%AE" title="Category:使用无数据行信息框模板的条目">使用无数据行信息框模板的条目</a></li><li><a href="/wiki/Category:%E5%90%AB%E6%9C%89%E9%9D%9E%E4%B8%AD%E6%96%87%E5%85%A7%E5%AE%B9%E7%9A%84%E6%A2%9D%E7%9B%AE" title="Category:含有非中文內容的條目">含有非中文内容的条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABBIBSYS%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含BIBSYS标识符的维基百科条目">包含BIBSYS标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABBNF%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含BNF标识符的维基百科条目">包含BNF标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABCBDB%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含CBDB标识符的维基百科条目">包含CBDB标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABDDBC%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含DDBC标识符的维基百科条目">包含DDBC标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABFAST%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含FAST标识符的维基百科条目">包含FAST标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABGND%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含GND标识符的维基百科条目">包含GND标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABISNI%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含ISNI标识符的维基百科条目">包含ISNI标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABLCCN%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含LCCN标识符的维基百科条目">包含LCCN标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABNDL%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含NDL标识符的维基百科条目">包含NDL标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABNKC%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含NKC标识符的维基百科条目">包含NKC标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABNLA%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含NLA标识符的维基百科条目">包含NLA标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABNNL%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含NNL标识符的维基百科条目">包含NNL标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABSELIBR%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含SELIBR标识符的维基百科条目">包含SELIBR标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABSUDOC%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含SUDOC标识符的维基百科条目">包含SUDOC标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%ABVIAF%E6%A0%87%E8%AF%86%E7%AC%A6%E7%9A%84%E7%BB%B4%E5%9F%BA%E7%99%BE%E7%A7%91%E6%9D%A1%E7%9B%AE" title="Category:包含VIAF标识符的维基百科条目">包含VIAF标识符的维基百科条目</a></li><li><a href="/wiki/Category:%E5%8C%85%E5%90%AB15%E5%85%83%E7%B4%A0%E7%9A%84%E8%A7%84%E8%8C%83%E6%8E%A7%E5%88%B6" title="Category:包含15元素的规范控制">包含15元素的规范控制</a></li></ul></div></div>
    <div class="visualClear"></div>

  </div>
</div>
<div id='mw-data-after-content'>
  <div class="read-more-container"></div>
</div>


    <div id="mw-navigation">
    <h2>导航菜单</h2>
    <div id="mw-head">
        <div id="p-personal" role="navigation" aria-labelledby="p-personal-label">
    <h3 id="p-personal-label">个人工具</h3>
    <ul lang="zh-Hans-CN" dir="ltr">
      <li id="pt-anonuserpage">没有登录</li><li id="pt-anontalk"><a href="/wiki/Special:%E6%88%91%E7%9A%84%E8%AE%A8%E8%AE%BA%E9%A1%B5" title="对于来自此IP地址编辑的讨论[n]" accesskey="n">讨论</a></li><li id="pt-anoncontribs"><a href="/wiki/Special:%E6%88%91%E7%9A%84%E8%B4%A1%E7%8C%AE" title="来自此IP地址的编辑列表[y]" accesskey="y">贡献</a></li><li id="pt-createaccount"><a href="/w/index.php?title=Special:%E5%88%9B%E5%BB%BA%E8%B4%A6%E6%88%B7&amp;returnto=%E6%9B%B9%E6%93%8D" title="建议您创建一个账户并登录，但这不是强制的">创建账户</a></li><li id="pt-login"><a href="/w/index.php?title=Special:%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95&amp;returnto=%E6%9B%B9%E6%93%8D" title="建议你登录，尽管并非必须。[o]" accesskey="o">登录</a></li>    </ul>
    </div>
        <div id="left-navigation">

<div id="p-namespaces" role="navigation" class="vectorTabs " aria-labelledby="p-namespaces-label">
  <h3 id="p-namespaces-label">名字空间</h3>
  <ul  lang="zh-Hans-CN" dir="ltr">
    <li id="ca-nstab-main" class="selected"><a href="/wiki/%E6%9B%B9%E6%93%8D" title="浏览条目正文[c]" accesskey="c">条目</a></li><li id="ca-talk"><a href="/wiki/Talk:%E6%9B%B9%E6%93%8D" rel="discussion" title="关于此页面的讨论[t]" accesskey="t">讨论</a></li>
  </ul>
</div>
    <div id="p-variants" role="navigation" class="vectorMenu" aria-labelledby="p-variants-label">
        <input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-variants-label" />
    <h3 id="p-variants-label">
      <span>大陆简体</span>
    </h3>
    <ul class="menu">
      <li id="ca-varlang-0"><a href="/zh/%E6%9B%B9%E6%93%8D" lang="zh" hreflang="zh">不转换</a></li><li id="ca-varlang-1"><a href="/zh-hans/%E6%9B%B9%E6%93%8D" lang="zh-Hans" hreflang="zh-Hans">简体</a></li><li id="ca-varlang-2"><a href="/zh-hant/%E6%9B%B9%E6%93%8D" lang="zh-Hant" hreflang="zh-Hant">繁體</a></li><li id="ca-varlang-3" class="selected"><a href="/zh-cn/%E6%9B%B9%E6%93%8D" lang="zh-Hans-CN" hreflang="zh-Hans-CN">大陆简体</a></li><li id="ca-varlang-4"><a href="/zh-hk/%E6%9B%B9%E6%93%8D" lang="zh-Hant-HK" hreflang="zh-Hant-HK">香港繁體</a></li><li id="ca-varlang-5"><a href="/zh-mo/%E6%9B%B9%E6%93%8D" lang="zh-Hant-MO" hreflang="zh-Hant-MO">澳門繁體</a></li><li id="ca-varlang-6"><a href="/zh-my/%E6%9B%B9%E6%93%8D" lang="zh-Hans-MY" hreflang="zh-Hans-MY">大马简体</a></li><li id="ca-varlang-7"><a href="/zh-sg/%E6%9B%B9%E6%93%8D" lang="zh-Hans-SG" hreflang="zh-Hans-SG">新加坡简体</a></li><li id="ca-varlang-8"><a href="/zh-tw/%E6%9B%B9%E6%93%8D" lang="zh-Hant-TW" hreflang="zh-Hant-TW">臺灣正體</a></li>    </ul>
    </div>
        </div>
      <div id="right-navigation">

<div id="p-views" role="navigation" class="vectorTabs " aria-labelledby="p-views-label">
  <h3 id="p-views-label">查看</h3>
  <ul  lang="zh-Hans-CN" dir="ltr">
    <li id="ca-view" class="collapsible selected"><a href="/wiki/%E6%9B%B9%E6%93%8D">阅读</a></li><li id="ca-edit" class="collapsible"><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=edit" title="编辑本页[e]" accesskey="e">编辑</a></li><li id="ca-history" class="collapsible"><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=history" title="本页面的早前版本。[h]" accesskey="h">查看历史</a></li>
  </ul>
</div>
    <div id="p-cactions" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-cactions-label">
    <input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-cactions-label" />
    <h3 id="p-cactions-label"><span>更多</span></h3>
    <ul class="menu" lang="zh-Hans-CN" dir="ltr">
          </ul>
    </div>

<div id="p-search" role="search">
  <h3  lang="zh-Hans-CN" dir="ltr">
    <label for="searchInput">搜索</label>
  </h3>
  <form action="/w/index.php" id="searchform">
    <div id="simpleSearch">
    <input type="search" name="search" placeholder="搜索维基百科" title="搜索维基百科[f]" accesskey="f" id="searchInput"/>
    <input type="hidden" value="Special:搜索" name="title"/>

    <input type="submit" name="fulltext" value="搜索" title="搜索含这些文字的页面" id="mw-searchButton" class="searchButton mw-fallbackSearchButton"/>
    <input type="submit" name="go" value="前往" title="若相同标题存在，则直接前往该页面" id="searchButton" class="searchButton"/>
    </div>
  </form>
</div>
      </div>
    </div>
    <div id="mw-panel">
      <div id="p-logo" role="banner"><a class="mw-wiki-logo" href="/wiki/Wikipedia:%E9%A6%96%E9%A1%B5" title="首页"></a></div>
        <div class="portal" role="navigation" id="p-navigation" aria-labelledby="p-navigation-label">
    <h3 lang="zh-Hans-CN" dir="ltr" id="p-navigation-label">导航</h3>
    <div class="body">
        <ul>
        <li id="n-mainpage-description"><a href="/wiki/Wikipedia:%E9%A6%96%E9%A1%B5" title="访问首页[z]" accesskey="z">首页</a></li><li id="n-indexpage"><a href="/wiki/Wikipedia:%E5%88%86%E7%B1%BB%E7%B4%A2%E5%BC%95" title="以分类索引搜寻中文维基百科">分类索引</a></li><li id="n-Featured_content"><a href="/wiki/Portal:%E7%89%B9%E8%89%B2%E5%85%A7%E5%AE%B9" title="查看中文维基百科的特色内容">特色内容</a></li><li id="n-currentevents"><a href="/wiki/Portal:%E6%96%B0%E8%81%9E%E5%8B%95%E6%85%8B" title="提供当前新闻事件的背景资料">新闻动态</a></li><li id="n-recentchanges"><a href="/wiki/Special:%E6%9C%80%E8%BF%91%E6%9B%B4%E6%94%B9" title="列出维基百科中的最近修改[r]" accesskey="r">最近更改</a></li><li id="n-randompage"><a href="/wiki/Special:%E9%9A%8F%E6%9C%BA%E9%A1%B5%E9%9D%A2" title="随机载入一个页面[x]" accesskey="x">随机条目</a></li>      </ul>
          </div>
    </div>
    <div class="portal" role="navigation" id="p-help" aria-labelledby="p-help-label">
    <h3 lang="zh-Hans-CN" dir="ltr" id="p-help-label">帮助</h3>
    <div class="body">
        <ul>
        <li id="n-help"><a href="/wiki/Help:%E7%9B%AE%E5%BD%95" title="寻求帮助">帮助</a></li><li id="n-portal"><a href="/wiki/Wikipedia:%E7%A4%BE%E7%BE%A4%E9%A6%96%E9%A1%B5" title="关于本计划、你可以做什么、应该如何做">维基社群</a></li><li id="n-policy"><a href="/wiki/Wikipedia:%E6%96%B9%E9%87%9D%E8%88%87%E6%8C%87%E5%BC%95" title="查看维基百科的方针和指引">方针与指引</a></li><li id="n-villagepump"><a href="/wiki/Wikipedia:%E4%BA%92%E5%8A%A9%E5%AE%A2%E6%A0%88" title="参与维基百科社群的讨论">互助客栈</a></li><li id="n-Information_desk"><a href="/wiki/Wikipedia:%E7%9F%A5%E8%AF%86%E9%97%AE%E7%AD%94" title="解答任何与维基百科无关的问题的地方">知识问答</a></li><li id="n-conversion"><a href="/wiki/Wikipedia:%E5%AD%97%E8%AF%8D%E8%BD%AC%E6%8D%A2" title="提出字词转换请求">字词转换</a></li><li id="n-IRC"><a href="/wiki/Wikipedia:IRC%E8%81%8A%E5%A4%A9%E9%A2%91%E9%81%93">IRC即时聊天</a></li><li id="n-contact"><a href="/wiki/Wikipedia:%E8%81%94%E7%BB%9C%E6%88%91%E4%BB%AC" title="如何联络维基百科">联络我们</a></li><li id="n-about"><a href="/wiki/Wikipedia:%E5%85%B3%E4%BA%8E" title="查看维基百科的简介">关于维基百科</a></li><li id="n-sitesupport"><a href="https://donate.wikimedia.org/?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=spontaneous&amp;uselang=zh-hans" title="如果您在维基百科受益良多，您可以考虑资助我们">资助维基百科</a></li>      </ul>
          </div>
    </div>
    <div class="portal" role="navigation" id="p-wikibase-otherprojects" aria-labelledby="p-wikibase-otherprojects-label">
    <h3 lang="zh-Hans-CN" dir="ltr" id="p-wikibase-otherprojects-label">在其他项目中</h3>
    <div class="body">
        <ul>
        <li class="wb-otherproject-link wb-otherproject-commons"><a href="https://commons.wikimedia.org/wiki/Category:Cao_Cao" hreflang="en">维基共享资源</a></li><li class="wb-otherproject-link wb-otherproject-wikiquote"><a href="https://zh.wikiquote.org/wiki/%E6%9B%B9%E6%93%8D" hreflang="zh">维基语录</a></li><li class="wb-otherproject-link wb-otherproject-wikisource"><a href="https://zh.wikisource.org/wiki/Author:%E6%9B%B9%E6%93%8D" hreflang="zh">维基文库</a></li>      </ul>
          </div>
    </div>
    <div class="portal" role="navigation" id="p-electronpdfservice-sidebar-portlet-heading" aria-labelledby="p-electronpdfservice-sidebar-portlet-heading-label">
    <h3 lang="zh-Hans-CN" dir="ltr" id="p-electronpdfservice-sidebar-portlet-heading-label">打印/导出</h3>
    <div class="body">
        <ul>
        <li id="electron-print_pdf"><a href="/w/index.php?title=Special:ElectronPdf&amp;page=%E6%9B%B9%E6%93%8D&amp;action=show-download-screen">下载为PDF</a></li>      </ul>
          </div>
    </div>
    <div class="portal" role="navigation" id="p-tb" aria-labelledby="p-tb-label">
    <h3 lang="zh-Hans-CN" dir="ltr" id="p-tb-label">工具</h3>
    <div class="body">
        <ul>
        <li id="t-whatlinkshere"><a href="/wiki/Special:%E9%93%BE%E5%85%A5%E9%A1%B5%E9%9D%A2/%E6%9B%B9%E6%93%8D" title="列出所有与本页相链的页面[j]" accesskey="j">链入页面</a></li><li id="t-recentchangeslinked"><a href="/wiki/Special:%E9%93%BE%E5%87%BA%E6%9B%B4%E6%94%B9/%E6%9B%B9%E6%93%8D" rel="nofollow" title="页面链出所有页面的更改[k]" accesskey="k">相关更改</a></li><li id="t-upload"><a href="/wiki/Project:%E4%B8%8A%E4%BC%A0" title="上传图像或多媒体文件[u]" accesskey="u">上传文件</a></li><li id="t-specialpages"><a href="/wiki/Special:%E7%89%B9%E6%AE%8A%E9%A1%B5%E9%9D%A2" title="全部特殊页面的列表[q]" accesskey="q">特殊页面</a></li><li id="t-print"><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;printable=yes" rel="alternate" title="本页面的可打印版本[p]" accesskey="p">可打印版本</a></li><li id="t-permalink"><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;oldid=56725076" title="本页面该版本的固定链接">固定链接</a></li><li id="t-info"><a href="/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;action=info" title="关于此页面的更多信息">页面信息</a></li><li id="t-wikibase"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q204077" title="查看连接的数据存储库项[g]" accesskey="g">维基数据项</a></li><li id="t-cite"><a href="/w/index.php?title=Special:%E5%BC%95%E7%94%A8%E6%AD%A4%E9%A1%B5%E9%9D%A2&amp;page=%E6%9B%B9%E6%93%8D&amp;id=56725076" title="关于如何引用本页的信息">引用本页</a></li>      </ul>
          </div>
    </div>
    <div class="portal" role="navigation" id="p-lang" aria-labelledby="p-lang-label">
    <h3 lang="zh-Hans-CN" dir="ltr" id="p-lang-label">其他语言</h3>
    <div class="body">
        <ul>
        <li class="interlanguage-link interwiki-ar"><a href="https://ar.wikipedia.org/wiki/%D8%AA%D8%B3%D8%A7%D9%88_%D8%AA%D8%B3%D8%A7%D9%88" title="تساو تساو – 阿拉伯语" lang="ar" hreflang="ar" class="interlanguage-link-target">العربية</a></li><li class="interlanguage-link interwiki-az"><a href="https://az.wikipedia.org/wiki/%C3%87ao_%C3%87ao" title="Çao Çao – 阿塞拜疆语" lang="az" hreflang="az" class="interlanguage-link-target">Azərbaycanca</a></li><li class="interlanguage-link interwiki-azb"><a href="https://azb.wikipedia.org/wiki/%DA%A9%D8%A7%D8%A6%D9%88_%DA%A9%D8%A7%D8%A6%D9%88" title="کائو کائو – South Azerbaijani" lang="azb" hreflang="azb" class="interlanguage-link-target">تۆرکجه</a></li><li class="interlanguage-link interwiki-be"><a href="https://be.wikipedia.org/wiki/%D0%A6%D0%B0%D0%B0_%D0%A6%D0%B0%D0%B0" title="Цаа Цаа – 白俄罗斯语" lang="be" hreflang="be" class="interlanguage-link-target">Беларуская</a></li><li class="interlanguage-link interwiki-bo"><a href="https://bo.wikipedia.org/wiki/%E0%BD%9A%E0%BD%A0%E0%BD%BC%E0%BC%8B%E0%BD%9A%E0%BD%A0%E0%BD%BC%E0%BC%8D" title="ཚའོ་ཚའོ། – 藏语" lang="bo" hreflang="bo" class="interlanguage-link-target">བོད་ཡིག</a></li><li class="interlanguage-link interwiki-ca"><a href="https://ca.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 加泰罗尼亚语" lang="ca" hreflang="ca" class="interlanguage-link-target">Català</a></li><li class="interlanguage-link interwiki-cdo"><a href="https://cdo.wikipedia.org/wiki/C%C3%B2%CC%A4_Ch%C3%B3%CC%A4" title="Cò̤ Chó̤ – Min Dong Chinese" lang="cdo" hreflang="cdo" class="interlanguage-link-target">Mìng-dĕ̤ng-ngṳ̄</a></li><li class="interlanguage-link interwiki-cs"><a href="https://cs.wikipedia.org/wiki/Cchao_Cchao" title="Cchao Cchao – 捷克语" lang="cs" hreflang="cs" class="interlanguage-link-target">Čeština</a></li><li class="interlanguage-link interwiki-da"><a href="https://da.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 丹麦语" lang="da" hreflang="da" class="interlanguage-link-target">Dansk</a></li><li class="interlanguage-link interwiki-de badge-Q17437796 badge-featuredarticle" title="典范条目"><a href="https://de.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 德语" lang="de" hreflang="de" class="interlanguage-link-target">Deutsch</a></li><li class="interlanguage-link interwiki-en"><a href="https://en.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 英语" lang="en" hreflang="en" class="interlanguage-link-target">English</a></li><li class="interlanguage-link interwiki-eo"><a href="https://eo.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 世界语" lang="eo" hreflang="eo" class="interlanguage-link-target">Esperanto</a></li><li class="interlanguage-link interwiki-es"><a href="https://es.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 西班牙语" lang="es" hreflang="es" class="interlanguage-link-target">Español</a></li><li class="interlanguage-link interwiki-et"><a href="https://et.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 爱沙尼亚语" lang="et" hreflang="et" class="interlanguage-link-target">Eesti</a></li><li class="interlanguage-link interwiki-eu"><a href="https://eu.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 巴斯克语" lang="eu" hreflang="eu" class="interlanguage-link-target">Euskara</a></li><li class="interlanguage-link interwiki-fa"><a href="https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%A6%D9%88_%D8%B3%D8%A7%D8%A6%D9%88" title="سائو سائو – 波斯语" lang="fa" hreflang="fa" class="interlanguage-link-target">فارسی</a></li><li class="interlanguage-link interwiki-fi"><a href="https://fi.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 芬兰语" lang="fi" hreflang="fi" class="interlanguage-link-target">Suomi</a></li><li class="interlanguage-link interwiki-fr"><a href="https://fr.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 法语" lang="fr" hreflang="fr" class="interlanguage-link-target">Français</a></li><li class="interlanguage-link interwiki-hak"><a href="https://hak.wikipedia.org/wiki/Chh%C3%A0u_Chh%C3%A2u" title="Chhàu Chhâu – 客家语" lang="hak" hreflang="hak" class="interlanguage-link-target">客家語/Hak-kâ-ngî</a></li><li class="interlanguage-link interwiki-he"><a href="https://he.wikipedia.org/wiki/%D7%A6%D7%90%D7%95_%D7%A6%D7%90%D7%95" title="צאו צאו – 希伯来语" lang="he" hreflang="he" class="interlanguage-link-target">עברית</a></li><li class="interlanguage-link interwiki-hr"><a href="https://hr.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 克罗地亚语" lang="hr" hreflang="hr" class="interlanguage-link-target">Hrvatski</a></li><li class="interlanguage-link interwiki-hu"><a href="https://hu.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 匈牙利语" lang="hu" hreflang="hu" class="interlanguage-link-target">Magyar</a></li><li class="interlanguage-link interwiki-id"><a href="https://id.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 印度尼西亚语" lang="id" hreflang="id" class="interlanguage-link-target">Bahasa Indonesia</a></li><li class="interlanguage-link interwiki-it"><a href="https://it.wikipedia.org/wiki/C%C3%A1o_C%C4%81o" title="Cáo Cāo – 意大利语" lang="it" hreflang="it" class="interlanguage-link-target">Italiano</a></li><li class="interlanguage-link interwiki-ja"><a href="https://ja.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D" title="曹操 – 日语" lang="ja" hreflang="ja" class="interlanguage-link-target">日本語</a></li><li class="interlanguage-link interwiki-km"><a href="https://km.wikipedia.org/wiki/%E1%9E%86%E1%9E%B6%E1%9E%9C_%E1%9E%86%E1%9E%B6%E1%9E%9C" title="ឆាវ ឆាវ – 高棉语" lang="km" hreflang="km" class="interlanguage-link-target">ភាសាខ្មែរ</a></li><li class="interlanguage-link interwiki-ko"><a href="https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%A1%B0" title="조조 – 韩语" lang="ko" hreflang="ko" class="interlanguage-link-target">한국어</a></li><li class="interlanguage-link interwiki-la"><a href="https://la.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 拉丁语" lang="la" hreflang="la" class="interlanguage-link-target">Latina</a></li><li class="interlanguage-link interwiki-mk"><a href="https://mk.wikipedia.org/wiki/%D0%A6%D0%B0%D0%BE_%D0%A6%D0%B0%D0%BE" title="Цао Цао – 马其顿语" lang="mk" hreflang="mk" class="interlanguage-link-target">Македонски</a></li><li class="interlanguage-link interwiki-mn"><a href="https://mn.wikipedia.org/wiki/%D0%A6%D0%B0%D0%BE_%D0%A6%D0%B0%D0%BE" title="Цао Цао – 蒙古语" lang="mn" hreflang="mn" class="interlanguage-link-target">Монгол</a></li><li class="interlanguage-link interwiki-ms"><a href="https://ms.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 马来语" lang="ms" hreflang="ms" class="interlanguage-link-target">Bahasa Melayu</a></li><li class="interlanguage-link interwiki-mwl"><a href="https://mwl.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 米兰德斯语" lang="mwl" hreflang="mwl" class="interlanguage-link-target">Mirandés</a></li><li class="interlanguage-link interwiki-nl"><a href="https://nl.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 荷兰语" lang="nl" hreflang="nl" class="interlanguage-link-target">Nederlands</a></li><li class="interlanguage-link interwiki-no"><a href="https://no.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 挪威语" lang="no" hreflang="no" class="interlanguage-link-target">Norsk</a></li><li class="interlanguage-link interwiki-pl"><a href="https://pl.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 波兰语" lang="pl" hreflang="pl" class="interlanguage-link-target">Polski</a></li><li class="interlanguage-link interwiki-pt"><a href="https://pt.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 葡萄牙语" lang="pt" hreflang="pt" class="interlanguage-link-target">Português</a></li><li class="interlanguage-link interwiki-ro"><a href="https://ro.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 罗马尼亚语" lang="ro" hreflang="ro" class="interlanguage-link-target">Română</a></li><li class="interlanguage-link interwiki-ru"><a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B0%D0%BE_%D0%A6%D0%B0%D0%BE" title="Цао Цао – 俄语" lang="ru" hreflang="ru" class="interlanguage-link-target">Русский</a></li><li class="interlanguage-link interwiki-sco"><a href="https://sco.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 苏格兰语" lang="sco" hreflang="sco" class="interlanguage-link-target">Scots</a></li><li class="interlanguage-link interwiki-sh"><a href="https://sh.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 塞尔维亚-克罗地亚语" lang="sh" hreflang="sh" class="interlanguage-link-target">Srpskohrvatski / српскохрватски</a></li><li class="interlanguage-link interwiki-simple"><a href="https://simple.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – Simple English" lang="en-simple" hreflang="en-simple" class="interlanguage-link-target">Simple English</a></li><li class="interlanguage-link interwiki-sr"><a href="https://sr.wikipedia.org/wiki/%D0%A6%D0%B0%D0%BE_%D0%A6%D0%B0%D0%BE" title="Цао Цао – 塞尔维亚语" lang="sr" hreflang="sr" class="interlanguage-link-target">Српски / srpski</a></li><li class="interlanguage-link interwiki-sv"><a href="https://sv.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 瑞典语" lang="sv" hreflang="sv" class="interlanguage-link-target">Svenska</a></li><li class="interlanguage-link interwiki-ta"><a href="https://ta.wikipedia.org/wiki/%E0%AE%9A%E0%AE%BE%E0%AE%B5%E0%AF%8B_%E0%AE%9A%E0%AE%BE%E0%AE%B5%E0%AF%8B" title="சாவோ சாவோ – 泰米尔语" lang="ta" hreflang="ta" class="interlanguage-link-target">தமிழ்</a></li><li class="interlanguage-link interwiki-th"><a href="https://th.wikipedia.org/wiki/%E0%B9%82%E0%B8%88%E0%B9%82%E0%B8%89" title="โจโฉ – 泰语" lang="th" hreflang="th" class="interlanguage-link-target">ไทย</a></li><li class="interlanguage-link interwiki-tr"><a href="https://tr.wikipedia.org/wiki/Cao_Cao" title="Cao Cao – 土耳其语" lang="tr" hreflang="tr" class="interlanguage-link-target">Türkçe</a></li><li class="interlanguage-link interwiki-uk"><a href="https://uk.wikipedia.org/wiki/%D0%A6%D0%B0%D0%BE_%D0%A6%D0%B0%D0%BE" title="Цао Цао – 乌克兰语" lang="uk" hreflang="uk" class="interlanguage-link-target">Українська</a></li><li class="interlanguage-link interwiki-vi"><a href="https://vi.wikipedia.org/wiki/T%C3%A0o_Th%C3%A1o" title="Tào Tháo – 越南语" lang="vi" hreflang="vi" class="interlanguage-link-target">Tiếng Việt</a></li><li class="interlanguage-link interwiki-wuu"><a href="https://wuu.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D" title="曹操 – 吴语" lang="wuu" hreflang="wuu" class="interlanguage-link-target">吴语</a></li><li class="interlanguage-link interwiki-zh-classical badge-Q17437796 badge-featuredarticle" title="典范条目"><a href="https://zh-classical.wikipedia.org/wiki/%E6%BC%A2%E9%AD%8F%E6%AD%A6%E7%8E%8B" title="漢魏武王 – Classical Chinese" lang="lzh" hreflang="lzh" class="interlanguage-link-target">文言</a></li><li class="interlanguage-link interwiki-zh-min-nan"><a href="https://zh-min-nan.wikipedia.org/wiki/Ch%C3%B4_Chh%C3%B2" title="Chô Chhò – Chinese (Min Nan)" lang="nan" hreflang="nan" class="interlanguage-link-target">Bân-lâm-gú</a></li><li class="interlanguage-link interwiki-zh-yue"><a href="https://zh-yue.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D" title="曹操 – Cantonese" lang="yue" hreflang="yue" class="interlanguage-link-target">粵語</a></li>      </ul>
      <div class="after-portlet after-portlet-lang"><span class="wb-langlinks-edit wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q204077#sitelinks-wikipedia" title="编辑跨语言链接" class="wbc-editpage">编辑链接</a></span></div>    </div>
    </div>
      </div>
    </div>
      <div id="footer" role="contentinfo" lang="zh-Hans-CN" dir="ltr">
        <ul id="footer-info">
        <li id="footer-info-lastmod"> 本页面最后修订于2019年11月2日 (星期六) 22:30。</li>
        <li id="footer-info-copyright">本站的全部文字在<a rel="license" href="//zh.wikipedia.org/wiki/Wikipedia:CC-BY-SA-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" title="Wikipedia:CC-BY-SA-3.0协议文本">知识共享 署名-相同方式共享 3.0协议</a><a rel="license" href="//creativecommons.org/licenses/by-sa/3.0/deed.zh" style="display:none;"></a>之条款下提供，附加条款亦可能应用。（请参阅<a href="//foundation.wikimedia.org/wiki/Terms_of_Use">使用条款</a>）<br />
Wikipedia&reg;和维基百科标志是<a href="//wikimediafoundation.org">维基媒体基金会</a>的注册商标；维基&trade;是维基媒体基金会的商标。<br />
维基媒体基金会是按美国国内税收法501(c)(3)登记的<a href="//wikimediafoundation.org/wiki/Tax_Deductibility/en">非营利慈善机构</a>。<br /></li>
          </ul>
        <ul id="footer-places">
        <li id="footer-places-privacy"><a href="https://foundation.wikimedia.org/wiki/Privacy_policy" class="extiw" title="wmf:Privacy policy">隐私政策</a></li>
        <li id="footer-places-about"><a href="/wiki/Wikipedia:%E5%85%B3%E4%BA%8E" title="Wikipedia:关于">关于维基百科</a></li>
        <li id="footer-places-disclaimer"><a href="/wiki/Wikipedia:%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E" title="Wikipedia:免责声明">免责声明</a></li>
        <li id="footer-places-developers"><a href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute">开发者</a></li>
        <li id="footer-places-statslink"><a href="https://stats.wikimedia.org/v2/#/zh.wikipedia.org">Statistics</a></li>
        <li id="footer-places-cookiestatement"><a href="https://foundation.wikimedia.org/wiki/Cookie_statement">Cookie声明</a></li>
        <li id="footer-places-mobileview"><a href="//zh.m.wikipedia.org/w/index.php?title=%E6%9B%B9%E6%93%8D&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">手机版视图</a></li>
          </ul>
            <ul id="footer-icons" class="noprint">
            <li id="footer-copyrightico">
        <a href="https://wikimediafoundation.org/"><img src="/static/images/wikimedia-button.png" srcset="/static/images/wikimedia-button-1.5x.png 1.5x, /static/images/wikimedia-button-2x.png 2x" width="88" height="31" alt="Wikimedia Foundation"/></a>        </li>
            <li id="footer-poweredbyico">
        <a href="https://www.mediawiki.org/"><img src="/static/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/static/images/poweredby_mediawiki_132x47.png 1.5x, /static/images/poweredby_mediawiki_176x62.png 2x" width="88" height="31"/></a>        </li>
          </ul>
        <div style="clear: both;"></div>
    </div>


<script>(RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgPageParseReport":{"limitreport":{"cputime":"1.860","walltime":"2.297","ppvisitednodes":{"value":11624,"limit":1000000},"ppgeneratednodes":{"value":0,"limit":1500000},"postexpandincludesize":{"value":282520,"limit":2097152},"templateargumentsize":{"value":8346,"limit":2097152},"expansiondepth":{"value":24,"limit":40},"expensivefunctioncount":{"value":27,"limit":500},"unstrip-depth":{"value":0,"limit":20},"unstrip-size":{"value":60754,"limit":5000000},"entityaccesscount":{"value":1,"limit":400},"timingprofile":["100.00% 1390.022      1 -total"," 38.37%  533.399      8 Template:Infobox"," 24.36%  338.675      1 Template:Infobox_Chinese"," 21.73%  302.031     13 Template:Navbox"," 20.05%  278.722      1 Template:Authority_control"," 17.19%  238.937      1 Template:Infobox_Chinese/Chinese","  7.56%  105.113      1 Template:Reflist","  7.21%  100.252      1 Template:東亞男性歷史人物","  6.61%   91.882      1 Template:三国演义","  5.04%   70.067      1 Template:三國君主"]},"scribunto":{"limitreport-timeusage":{"value":"0.366","limit":"10.000"},"limitreport-memusage":{"value":5033487,"limit":52428800}},"cachereport":{"origin":"mw1328","timestamp":"20191210102744","ttl":2592000,"transientcontent":false}}});});</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","name":"\u66f9\u64cd","url":"https://zh.wikipedia.org/wiki/%E6%9B%B9%E6%93%8D","sameAs":"http://www.wikidata.org/entity/Q204077","mainEntity":"http://www.wikidata.org/entity/Q204077","author":{"@type":"Organization","name":"\u7ef4\u57fa\u5a92\u4f53\u9879\u76ee\u8d21\u732e\u8005"},"publisher":{"@type":"Organization","name":"Wikimedia Foundation, Inc.","logo":{"@type":"ImageObject","url":"https://www.wikimedia.org/static/images/wmf-hor-googpub.png"}},"datePublished":"2003-07-25T13:34:01Z","dateModified":"2019-11-02T22:30:08Z","image":"https://upload.wikimedia.org/wikipedia/commons/5/57/Cao_Cao_scth.jpg","headline":"\u4e2d\u56fd\u4e1c\u6c49\u672b\u5e74\u7684\u519b\u4e8b\u5bb6\u3001\u653f\u6cbb\u5bb6\u548c\u8bd7\u4eba"}</script>
<script>(RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":188,"wgHostname":"mw1239"});});</script>
</body>
</html>
`
