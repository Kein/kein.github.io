const body = `
/* NEW 2025 */

.codeContainer__75297 {
    max-width:90vw!important;
}

/* Profile aimations */
[class^="profileEffects_"] { display: none!important; }

[class^="jumpToPresentBar_"] {
    display: none;
}

.visual-refresh.density-compact {
    --custom-category-channel-space-before-category: 12px;
}

[data-list-item-id^="channels"] > [data-text-variant="text-sm/medium"] > .overflow__82b15:before {
    content: "[ ";
}

[data-list-item-id^="channels"] > [data-text-variant="text-sm/medium"] > .overflow__82b15:after {
    content: " ]";
}


/* hiding new title bar */
div[class^="base_"] > div[class^="bar_"] {
    display: none!important;
}

:root {
    --custom-app-top-bar-height: 0px!important;
}


.visual-refresh .base_c48ade {
    grid-template-areas:
        "guildsList notice notice"
        "guildsList channelsList page";
    grid-template-rows: [top] 0px [titleBarEnd] 100vh [noticeEnd] 1fr [end];
}

/* Shrinking CHANNELS panel a bit */
div[class*="sidebarList"],
div[class^="content_"] > div[class^="sidebar_"]
{
    width: 235px!important;
}

/* ========================= */
/* ==== BANNERS & STUFF ==== */
/* ========================= */

/* test banner hide*/
header + [class*="animatedContainer"],
ul[aria-label="Channels"] > div[aria-hidden="true"]:nth-child(1)
{
    display: none!important;
}

/* removing Add Server */
[aria-label="Servers"] ~ div[class^="tutorialContainer"] { display: none!important; }


/* titlebar */
#app-mount > div[class*="titleBar"] { display: none!important; }

form[class*="form_"] > div[class^="wrapper"] {
    margin-bottom: 1px;
    padding-top: 6px;
    padding-bottom: 6px;
    
}

form[class*="form_"] > div[class^="wrapper"] img { display: none; }

/* For some reason affects the upload button
form.form__13a2c button {
    height: 28px;
    min-height: 28px;
}
*/

.spamBanner-1auiob {
    margin: 0;
    padding-top: 8px!important;
    padding-bottom: 10px!important;
}

.spamBanner-1auiob .bannerSubtext-1_62x-,
.wrapper_a2d9da
{
    display: none;
}

.bannerPremium-kkSkPv { displaY: none}

.bannerSVGWrapper-qc0szY { 
    min-height: 60px!important;
    height: 80px!important;
}

/* Removing intro plaques at the botom of the chat */
.chatContent-3KubbW > .container-22-IpK { display: none;}

/*=======================*/
/* ==== COLORS ==== */
/*=======================*/


:root {
  --text-link: #0e9fff;
}

/* My username color for cozy */
img[src*="4576876798690908797"] ~ h3[class^="header"] span[class^="username"]:first-of-type,
img[src*="86787698908700960980"] ~ h3[class^="header"] span[class^="username"]:first-of-type
{
    color: blue!important;
}


/*=======================*/
/* ==== GUILDS AREA ==== */
/*=======================*/

/* Auto-hiding guild panel */
/* #app-mount > div[class|="app"] nav[class|="wrapper"] */
[aria-label="Servers sidebar"] {
    transform: translate(-48px);
    width: 50px!important;
    opacity: 0;
    position: fixed!important;
    z-index:101;
    height:100vh;
    border-left: none;
    border-top: none;
    border-right: 0.5px solid #535251;
    border-radius: 0 10px 8px 0;
    -webkit-box-shadow: 2px 2px 2px 0px #5352512e;
	transition: transform 0.2s, opacity 0.2s !important;
}

[aria-label="Servers sidebar"]:hover {
    transform: translate(0);
    opacity: 1;
    transition: opacity 0.2s linear;
}

/* Hover popup, removing the voice icons */
[class^="tooltipContent"] > [class^="row"]:not([class*="rowGuildName"]),
[class^="tooltipContent"] [class*="muteText"]
{
    display: none;
}

/* Unread mentions indicator */
div[class^="unreadMentionsIndicatorTop"], div[class^="unreadMentionsIndicatorBottom"] {
    width: 50px!important;
}

/* Unread indicator bottom */
div[class^="unreadMentionsIndicatorBottom"] {
    width: 65px;
    left: -7px;
}

/* Servers browse button */
[aria-label="Servers sidebar"] [class^="footer"]
{
    width: 48px;
    padding-bottom: 0;
    padding-top: 0;
}

/* Spacing between DM icon and rest if the servers */
ul[data-list-id="guildsnav"] > div > div {
    gap: 8px!important;
}

/* Spacing between guild icons */
[aria-label="Servers sidebar"] [aria-label="Servers"] { gap: 8px!important; }

[aria-label="Servers sidebar"] [class^="footer"] [class^="listItem"],
[aria-label="Servers sidebar"] [class^="tutorialContainer"]  [class^="listItem"]
{
    margin-bottom: 0;
}

/* FIXME  Placeholder for server icons that failed to load, on hover */
div[class^="listItem"] div[class^="wrapper"]:hover > img
{
    background-image: repeating-linear-gradient( 45deg, gray, gray 2px, transparent 1px, transparent 5px );
}

/* Removing Shop item */
a[href="/shop"] { display: none!important;}

/* Base was moved in Sep 2019 to the left for 72px (defaile guild wrapper width)*/
[aria-label="Servers sidebar"] div[class^="container"] > div[class^="base"] { left: 0;}

/* Adjusting default svg TOP and LEFT offsets, affects SPECIAL icons */
div[class^="listItemWrapper_"] > div > svg {
    top: 1px!important;
    left: -1px!important;
}

/* Server element size and padding in the list */
[aria-label="Servers sidebar"] div[class^="listItem"]
{
    width: 54px;
    margin-right: 0!important;
    justify-content: center;
    margin-left: 0px;
}

/* Resize pill and make in on top */
[aria-label="Servers sidebar"] [class^="pill_"]
{
    z-index: 1!important;
    width: 3px!important;
    top: 0px;
}

/* Removing original clip mask and border on special buttons */
div[class^="listItem"] div[class*="wrapper"] > svg > foreignObject { mask-image: none; }
div[class^="listItem"] > div[class^="listItemWrapper"] > div[class*="wrapper"] {
    border-radius: unset;
}


/* Reducing the size of icons */
div[class^="listItem"] > div > div[data-dnd-name] > div[class*="wrapper"] > svg > foreignObject,
div[class^="listItem"] > div > div[data-dnd-name] > div[class*="wrapper"] {
    width: 44px;
    height: 44px;
}

div[class^="listItem"] div[class*="wrapper"] [data-list-item-id="guildsnav___home"]
{
    width: 46px;
    height: 46px;
}

/* Applying our own size to server image icons and label placeholders  */
div[class^="listItem"] div[data-dnd-name] > div[class*="wrapper"] > svg > foreignObject > div[class^="wrapper"] > img, /* the server icon */
div[class^="listItem"] div[data-dnd-name] > div[class*="wrapper"] > svg > foreignObject > div[class^="wrapper"] > div[class*="acronym"] /* placholder for no icon */
{
    clip-path: circle(19px at center);
    height: 40px;
    margin-right: 2px;
}


div[class^="tutorialContainer"] {
    --guildbar-avatar-size: 52px;    
}


/* Special H/W for the special icons */
div[class^="itemsContainer_"] > div[class^="stack"] > div[class^="tutorialContainer"] div[class^="pill"]
{
    display: none;
}
div[class^="itemsContainer_"] > div[class^="stack"] > div[class^="listItem"] div[class^="wrapper"] foreignObject,
div[class^="itemsContainer_"] > div[class^="stack"] > div[class^="tutorialContainer"] div[class^="wrapper"] foreignObject
{
    height: 48px;
    width: 48px;
}

div[class^="itemsContainer_"] > div[class^="stack"] > div[class^="listItem"] div[class^="wrapper"] div[class^="circleIconButton"],
div[class^="itemsContainer_"] > div[class^="stack"] > div[class^="tutorialContainer"] div[class^="wrapper"] div[class^="circleIconButton"]
{
    height: 44px;
    width: 44px;
}


/* Hiding Nitro section in Friends and removing Quick-Search input at the top */
nav[class^="privateChannels"] > div[class^="searchBar"],
nav[class^="privateChannels"] a[href*="/store"] {
    display: none;
}


/* SERVER FOLDERS */

div[aria-label="Servers"] > div[class^="folderGroup"] > span[class^="folderGroupBackground"] {
    left: 3px;
    top: 0px;
    border-radius: 0;
}

div[aria-label="Servers"] > div[class^="folderGroup"] > span[class^="folderGroupBackground"]:not(.collapsed_bc7085) {
    /* background-color: #104b70; */
    background-color: rgba(88, 101, 242, 0.4);
}

div[aria-label="Servers"] > div[class^="folderGroup"] foreignObject div[class^="folderPreviewWrapper"] {
    border-radius: 0;
    background-color: rgba(88, 101, 242, 0.4);
}

div[aria-label="Servers"] > div[class^="folderGroup"] foreignObject div[class^="folderIconWrapper"] {
    padding-left: 2px;
}

/* APP DOWNLOAD */
/* Removing the App Download button and the divier to free up space */
[data-list-id="guildsnav"] div[class^="itemsContainer_"] > div[class^="stack"] > div[class^="listItem_"]:nth-last-child(-n+2) { display:none; }



/*=======================*/
/* === CHANNELS AREA === */
/*=======================*/

/* Removing "in-voice " overlay and new channel badge */
[class^="sidebar"] .container_eba0ba.bottom_eba0ba,
[class^="newChannel"],
[class*="voiceBar"]
{
    display: none;
}

/* Shrinking Server header */
header.header__104ca { 
    height: 34px;
    padding-top: 6px;
}

/* Adjusting category padding */
.containerDefault__23a29 {
    padding-top: 8px;
}

/* Shrinking CHANNELS panel a bit */
.sidebar_ded4b5  { width: 205px;}

/* Making category text color brighter */
.theme-light .name__590d6 { color: #a9abaf; }

/* Shifting channel names to the left a bit (right padding of prev. element) */
li[class*="containerDefault"] a[href^="/channels/"] div[aria-label="Text"] {
    margin-right: 2px;
}

/* Yellow highlight for unread */
.theme-light [data-dnd-name] > [class*="modeUnread"] [class^="name_"] {
    color: #fff7a6!important;
}

/*Shrinking account panel to free up space for channels*/
/* 2025 update as well*/
[aria-label="User area"]
{
    bottom: 0px!important;
    left: 0px!important;
    width: 100%!important
}

[aria-label="User area"] div[class*="avatar_"],
[aria-label="User area"] div[class*="avatar_"] svg
{
    width: 34px!important;
    height: 34px!important;
}

[aria-label="User area"] div[class*="avatar_"] {
    padding-top: 4px;
}

[aria-label="User area"] div[class^="avatarWrapper_"] {
    gap: 2px;
}


.visual-refresh .sidebar_c48ade:after {
    content: unset;
}
[aria-label="User area"] > [class^="container"] {
    height: 34px!important;
    min-height: 34px!important;
    padding: 0;
    padding-left: 5px;
    padding-right: 5px;
    border-top: 0.5px solid #535251;
}

/* FIXME */
/* Voice buttons when active */
.actionButtons-2vEOUh > .button-1EGGcP { padding: 2px 8px; }

/* Floating panel at the bttom with vocie chat members */
.container-24rGVp.bottom-29W7pW { display: none}

/* FIXME */
div.scrollerWrap-2lJEkd.firefoxFixScrollFlex-cnI2ix.scrollerThemed-2oenus.themeGhostHairlineChannels-3G0x9_.scrollerFade-1Ijw5y .scroller-2wx7Hm > div > div:nth-last-child(0)
{
    display:none!important;
    height: 0px!important;
}

/* Removing voice hover plaque at the bottom of the channel area */
.container__9f9f6.bottom__9717f { display: none;}

/* ================= /*
/* = USERLIST AREA = /*
/* ================= /*

/* User categories */
.theme-light .membersGroup-2eiWxl {
    color: #000;
    background-color: #cac8e0;
    font-weight: 600;
    padding-top: unset;
    margin-top: 6px;
    height: unset;
}

/* First category does not need top margin*/
.membersGroup-2eiWxl:nth-child(2) { margin-top: 0px!important; }

.theme-dark .membersGroup-2eiWxl {
    color: #cacaca;
    background-color: #000;
    font-weight: 600;
    padding-top: unset;
    margin-top: 6px;
    height: unset;
}

/* Shrinking userlist  down to 173px for 1080p */
/* (need to shrink both scroller and member areas) */
.membersWrap-3NUR2t {
    min-width: 173px!important;
    z-index:100!important
}
.members-3WRCEx { max-width: 173px; }

/* Scrollbar bar width for the uselist */
.members-3WRCEx::-webkit-scrollbar { width: 12px!important; }



/* ================= */
/* === CHAT AREA === */
/* ================= */

/* --- SERVER PREVIEW --- */

/* --- TOP BAR --- */

/* Removing "you must complete steps" notice */
[class^="notice_"] { display: none;}

/* Shrinking the top bar */
/* .content-98HsJk .container-1r6BKw */
div[class^="chat"] > div > section[aria-label="Channel header"] {
    z-index: 3;
    transform: translateZ(0);
    overflow: visible;
    height: 0;
    min-height: 0;
    padding: 0;
    position: relative;
    visibility: hidden;
    justify-content: space-between;
}

section[aria-label="Channel header"] > div[class^="upperContainer"] {
    align-items: flex-start;
    justify-content: space-between;
    background-color: white;
}

/* Shared values to toolbar and channel topic/name */
section[aria-label="Channel header"] div[class^="children_"],
section[aria-label="Channel header"] div[class^="toolbar_"]
{
    visibility: visible;
    z-index: 100;
    background: inherit;
    border-bottom: solid 1px #aaabadb8;
}


/* Channel name and topic style*/
section[aria-label="Channel header"] div[class^="children_"] {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    display: flex;
	flex-wrap: wrap;
    justify-content: flex-start;
	align-content: space-between;
	align-items: center;
	max-height: 28px;
    min-height: 28px;
    width: 35px;
	overflow: hidden;
    border-right: solid 1px #aaabadb8;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
    transition: max-height 0.1s linear, width 0.2s linear 0.2s;
    -webkit-mask-image: unset; /* added with septemer 2019 rdesign */
}

/* Roll out on hover */
section[aria-label="Channel header"]  div[class^="children_"]:hover {
	width: 40%;
	max-height: 30vh;
    min-height: 28px;
	transition: width 0.2s linear, max-height 0.2s linear 0.2s;
}

/* Weird dot inside */
section[aria-label="Channel header"] svg[class^="dot_"] {
    display: none;
}

/* Some icon wrapper inside channel desc*/
section[aria-label="Channel header"] div[class^="upperContainer_"] > div[class^="iconWrapper_"] {
    margin-left: 5px;
}

/* Challen title no-wrap thing? */
section[aria-label="Channel header"] div[class^="children_"] > div[class^="titleWrapper_"] > h1 {
    align-self: flex-end;
    margin: 0 4px 0 0;
    word-break: normal;
    overflow-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
    flex-wrap: nowrap;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: inherit;
    max-width: fit-content;
}

section[aria-label="Channel header"] div[class^="children_"] > div[class^="topic_"] {
    border-top: 1px solid #aaabad;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    flex: 100%;
    margin: 0 4px 4px 4px;
    padding-top: 4px;
    white-space: pre-wrap;
    margin-top: 3px;
    word-break: break-word;
}

/* These 2 never addressed? */
section[aria-label="Channel header"] div[class^="children_"] > div[class^="status_"] { }

section[aria-label="Channel header"] div[class^="children_"] > div[class^="status_"] + div[class^="divider_"] {
    display: unset;
}

section[aria-label="Channel header"] div[class^="children_"] > div[class^="akaBadge_"] { }

/* The toolbar for tools (userlist, pins, videocall) - channels and DM */
section[aria-label="Channel header"] div[class^="toolbar_"] {
    height: 28px;
    border-left: solid 1px #aaabad;
    border-bottom-left-radius: 5px;
    box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.2);
    gap: 0px; /* 2025*/
}

section[aria-label="Channel header"] div[class^="toolbar_"]::before  {
    content: '';
    margin-left: 4px;
}

/* Removing marging from all icons in toolbar to shrink it */
section[aria-label="Channel header"] div[class^="toolbar_"] > div[class*="iconWrapper_"] {
    margin-left: 0;
    margin-right: 0;
}

/* Selectively removing junk elements */
section[aria-label="Channel header"] div[class^="toolbar_"] > div[aria-label="Threads"],
section[aria-label="Channel header"] div[class^="toolbar_"] > div[aria-label="Notification Settings"],
section[aria-label="Channel header"] div[class^="toolbar_"] > div[aria-label="Pinned Messages"],
section[aria-label="Channel header"] div[class^="toolbar_"] > div[aria-label*="Member List"],
section[aria-label="Channel header"] div[class^="toolbar_"] > div[aria-label="Inbox"],
section[aria-label="Channel header"] div[class^="toolbar_"] > a[href="https://support.discord.com"],
section[aria-label="Channel header"] div[class^="toolbar_"] > div[class^="recentsIcon"]
{
    visibility: hidden;
    height: 0px;
    width: 0px;
    margin:0;
    padding: 0;
}

/* Adjusting search*/
section[aria-label="Channel header"] div[class^="toolbar_"] > div[class^="search_"] {
    order: 999;
    margin-right: 0;
    margin-left: 2px;
    margin-bottom: 1px;
}

/* Searchbar width */
section[aria-label="Channel header"] div[class^="toolbar_"] > div[class^="search_"] div[class^="searchBar_"] {
    width: unset;
    height: 24px;
    border-radius: 4px;
}

div[class^="searchBar_"] > [class^="icon_"] {
    height: 20px;
}

section[aria-label="Channel header"] div[class^="toolbar_"] > div[class^="search_"] div[class^="searchBar_"]:focus-within {
    width: 15vw;
}

/* Search text? */
section[aria-label="Channel header"] div[class^="toolbar_"] > div[class^="search_"] .DraftEditor-root .public-DraftEditorPlaceholder-root {visibility: hidden;}

/* Unread messages adjustment */
div[class*="newMessagesBar_"] {
    left: 42px;
    right: 42px;
}

/* Thread header on Firefix */
main[class*="chatContent_"] [data-jump-section="global"] div[class^="scrollerContent"] > div[class^="container_"] {
    display: none;
}

/* Channel plaque over the input box as well as newmemebr greet in threads channels*/
main[class^="chatContent_"] [class^="banner"],
[class*="newMemberBanner"]
{
    display: none;
}

/* ================= */
/* ==== POP-UPS ==== */
/* ================= */

/* LINK URL EXAMINE POP-UP */
[class*="linkCalloutContainer"]
{
    user-select: all;
}

/* PINS/SEARCH/MENTIONS */

/******** SEARCH ******/
/* FIXME */
/* Header in search */
#app-mount > div[class|="app"] div[class^="container_"] > div[class^="base_"] section[class^="searchResultsWrap_"] > header[class^="searchHeader_"] {
    padding-bottom: 0;
    align-items: self-end;
}

/* ================= */
/* === INPUT BOX === */
/* ================= */

/* Removing intro top bat over input */
[class*="newMemberActionBar_"] { display:none; }

/* Removing new margin from Feb 2020 */
/* Prettying up the input border at the top */
/* Margin from the left and right */
form[class^="form"] {
    padding: 0;
    text-shadow: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 2px solid var(--background-modifier-accent);
    padding-left: 0!important;
    padding-right: 0!important;
}

form[class^="form"] div[class^="textArea_"] {
    height: 25px;
    min-height: 25px!important;
}

form[class^="form"] [class*="sansAttachButton"] {
    padding-left: 12px;
}

/*
form[class^="form"]  [class*="attachButton"] {
    background-color: #d5d5d5a6;
}
*/

/* Font */
[role="textbox"] [data-slate-node="text"],
[role="textbox"] [data-slate-node="text"] * {
    font-family: Segoe UI!important;
    font-weight: 450;
    font-size: 18px!important;
}

/* Paddign adjustments for text area */
form[class^="form"] div[class*="slateTextArea"] {
    padding-left: 0.1rem;
}

/* Hiding input box if disabled */
form[class^="form"] div[class^="channelTextAreaDisabled"] { display: none}

/* Hiding create thread suggestions */
[class^="threadSuggestionBar_"] { display: none; }

/* Removing typing notification */
div[class^="typing"] { display:none;}

/* Padding and margin around Input Box */
form[class^="form"] div[class*="channelTextArea"] {
    margin-top: 0;
    margin-bottom: 0px;
    padding-top: 0;
}

.theme-light form[class^="form"] div[class^="textArea"] {
    background-color: #fff;
}

/* Removing useless extra buttons */
form[class^="form"] div[class^="buttons"] button[aria-label*="picker"],
form[class^="form"] [aria-label*="gift"],
form[class^="form"] [class^="channelAppLauncher"]
{
    display: none;
}

/* Adjusting the size of upload and emote buttons */
form[class^="form"] button[class*="attachButton"] {
    padding: 5px;
    border-radius: 0;
}
form[class^="form"] div[class^="buttons"] button[class*="emojiButton"] {
    padding: 2px;
    margin-left: 2px;
}

/* Placeholder text*/
form[class^="form"] div[class^="textArea"] > div > div[class^="placeholder"] { visibility: hidden;}


/* ======================= */
/* === WEB CLIENT AND DESKTOP SPECIFIC === */
/* ======================= */

/* Hiding title bar on client */
#app-mount > div[class^="titleBar"] { display: none }

/*/ --- MESSAGES --- /*/

/* [GENERIC] */

/* Compact YT embeds */

div[class^="embedProvider"] > a[href*="youtube"],
div[class^="embedAuthor"] > a[href*="youtube"] {
    display:none;
}
div[class^="embedWrapper"] div[class^="embedTitle"] + div[class^="embedVideo"],
div[class^="embedWrapper"] div[class^="embedTitle"],
div[class^="embedWrapper"] div[class^="embedAuthor"],
div[class^="embedWrapper"] div[class^="embedProvider"]
{
    margin-top: 1px;
}
article[class^="embedWrapper"] div[class^="grid"] {
    padding: .15rem 0.25rem 0.25rem .30rem;
    vertical-align: top;
}

/* Removing Complete steps notice */
#app-mount > div[class|="app"] div[class^="notice-"] { display: none }

/* Removing first message banner on top of input */
main[class^="chatContent"] > .container_d29eee { display: none!important }


div[class^="repliedMessage_"] div[class^="repliedTextPreview_"] div[class^="repliedTextContent_"] {
    font-size: 16px!important;
}

div[class^="repliedMessage-"] div[class^="repliedTextPreview-"] div[class^="repliedTextContent-"] .emoji {
    vertical-align: middle;
}

/* Making message reply contex at the top of a message in italics */
div[class^="repliedMessage_"] {
    font-style: italic;
}

/* Adjusting spoiler overlap due to lower line-height up top */
div:not([class*="repliedTextPreview"]) > div[id^="message-content"] [class*="obscuredTextContentInner"]
{
    line-height: 1.32em;
}


/* BLOCKED OLD
Adjusting "blocked" highlights
.blockedSystemMessage-3FmE9n:hover span[class*="blockedAction_"] { color: unset; }
.blockedSystemMessage-3FmE9n span[class*="blockedAction_"] { color: var(--text-link); }

 Blocked
.blockedSystemMessage-3FmE9n div[class^="iconContainer_"] {
    width: 1.5rem;
    margin-right: 0.25rem;
}
*/

/* New pseudo-padding at the bottom of message-list */
[data-list-id="chat-messages"] > div[class^="scroller"]:last-child
{
    height: 8px;
}

/* Chat background itself (slightly darker than white) */
.theme-light main[class^="chatContent"] > div[class^="messagesWrapper"] { background: rgba(245, 245, 245, .74); }

/* Hover highlight */
.message__80c10:hover, .mouse-mode .message__80c10:hover {
    background-color: inherit;
    box-shadow: inset -5px 0 0px -2px #0000007a;
}
/* Mention color + hover */
div[class^="message"][class*="mentioned_"], .mouse-mode div[class*="mentioned_"]:hover, div[class*="mentioned_"]:hover {
    background-color: rgba(255, 223, 152, 0.6)!important;
}

/* Reply bar on top of the input box*/
div[class^="replyBar"] { height: 30px;}
div[class^="replyBar"] [data-text-variant="text-sm/normal"] {
    font-style: italic;
    font-weight: 500;
}

div[class^="replyBar"] > div[role="button"] {
    align-self: flex-start;
}

.actions__399af { align-items: flex-start; }
.mentionButton_a470c4 { padding: 4px 10px; padding-top: 0;}
.closeButton__89e56 { padding: 4px 15px 4px 14px;  padding-top: 0;}


/* Hover buttons */
/* FIXME */
/* old: div:not([class*="isHeader"]) */
li[class^="messageListItem_"] div[class^="buttonContainer_"] > div { top: -8px;}

.container__9d616 { padding-right: 5px; }

[aria-label="Message Actions"] > div[class*="wrapper"]
{
    box-shadow: 1px 1px 1px 1px #00000085;
    height: 22px;
}

[aria-label="Message Actions"] div[class^="button"], [aria-label="Message Actions"] div[class^="button"]:active {
    padding: 0;
    padding-right: 4px;
    height: 26px;
    min-width: 20px;
}

[aria-label="Message Actions"] div[class^="disabled"], [aria-label="Message Actions"] div[class^="disabled"]:hover
{
    padding: 0;
}

/* FIXME */    
/* Jump bar */
.jumpToPresentBar-1cEnH0 {
    padding-bottom: 0;
}

/* In-line editing area */
.theme-light [aria-roledescription="Message"] div[class^="contents"] > div > div[class^="channelTextArea"] {
    font-family: Segoe UI;
    color: #0a0a0a;
    font-style: italic;
    border: 1px;
    border-style: solid;
    border-color: #faa61a;
}

li[id^="chat-messages"] div[class*="messageContent"] > span {
    text-shadow: 0 1px white;
}

li[id^="chat-messages"] div[class*="messageContent"] > span::selection {
    background-color: rgb(49, 142, 253);
    color: white;
    text-shadow: none;
}

/* In-place message editor background */
.theme-light [aria-roledescription="Message"] div[class^="contents"] > div > div[class^="channelTextArea"] > div[class*="scrollableContainer_"] {
    background-color: #ec940017;
}

.mentioned-Tre-dv .theme-light [aria-roledescription="Message"] div[class^="contents"] > div > div[class^="channelTextArea"] > div[class*="scrollableContainer_"] {
    background-color: var(--channeltextarea-background);
}

/* Message editor - hiding buttons */
li[id^="chat-messages-"] div[class^="operations_"] {
    display:none;
}

div[class*="messageEditorCompact"] div[class*="scrollableContainer_"] {
    overflow-y: hidden;
    background-color: #ebedef57;
    border-radius: 0;
}

/* Code blocks */

.visual-refresh .container__4d95d {
    max-width: max-content;
}

/* In-line|code block stylization with border  */
.theme-light code[class="inline"] {
    border: 0.4px;
    border-style: dashed;
    border-color: #333333;
    padding-left: 0.2em;
    padding-right: 0.2em;
}

/* New chat text color*/
.theme-light div[id^="message-content"] {
    color: rgb(0, 0, 0);
    font-family: Segoe UI;
    font-weight: 400;
    font-size: 19.5px!important;
    line-height: 1.775rem;
    /*color: rgb(0, 19, 89); */
    /*line-height: 1.1500em;*/
}

.theme-dark div[id^="message-content"] {
    color: rgb(236, 236, 232);
    font-family: Segoe UI;
    font-weight: 400;
    font-size: 18px!important;
    /*line-height: 1.1500em;*/
}

/* Username font size/style (all themes) */
span[class^="username_"] {
    font-size: 18px!important;
    font-weight: 600;
    font-family: Segoe UI;
}


/* Group spacing */
.group-spacing-16 .groupStart__56db5 {
    margin-top: .5rem;
}


/* Message length/width (right padding in the message container) */
.message__80c10 {
    padding-right: 0!important;
}


/* Single emoji size */
.emoji.jumboable {
    width: 2rem;
    height: 2rem;
    min-height: 2rem;
}

/* Date divider */
.group-spacing-16 .divider-IqmEqJ.hasContent-1y12-u {
    margin-top: 1.1rem;
    margin-bottom: .5rem;
}

/* New messages divider */
.group-spacing-16 .divider__8cf56.beforeGroup__1e5e5     {
    border-width: 1px;
    margin-bottom: 4px;
    margin-top: 4px;
    top: unset;
}

/* Message area padding */
.cozy_f5c119.wrapper__09ecc.groupStart__56db5{
    padding-top: 0;
    padding-bottom: 0.15rem;
}

.group-spacing-16 .groupStart__56db5 {
    margin-top: .5rem;
}

/* Min height of the opening message in group, */
/* reduced to remove extra space between opening message */
/* and consequential */
/* + Group message padding*/
li[class*="messageListItem"] > div[class*="groupStart"] {
    min-height: auto;
    margin-top: 1rem; 
}

li[class*="messageListItem"] > div[class*="cozyMessage"] {
    padding-top: 0;
}

li[class*="messageListItem"] > div[class*="cozyMessage"] > div[class*="contents"] {
    margin-top: -4px;
}

/* FIXME */
.cozyMessage-1DWF9U .markup-eYLPri {
    line-height: 1.14em;
}

/* ===========================
/* TIMESTAMPS & AVATARS */
/* ===========================

/* FIXME */
/* Timestamp */
span[class*="timestamp_121423534534545645757687686"]
{
	width: auto;
	text-align: left;
    font-size: 0.8rem!important;
    vertical-align: sub;
    opacity: 1;
}

/* FIXME */
/* Avatar shift */
.contents-2MsGLg > .avatar-2e8lTP {
    border: 0.5px solid #b9bbbead;
}

/* FIXME */
/* Top-bottom padding between messages in group */
.cozy-VmLDNB.wrapper-30-Nkg {
    min-height: 1rem;
	padding-right: 0;
}


/* ===========================
/* SYSTEM MESSAGES */
/* ===========================

/* System message size */
.content-vSHmMD { font-size: 18px; }

/* Remove wave button on system message*/
.welcomeCTA-3GMMRK { display: none; }

/* System message padding */
.message-2CShn3.cozyMessage-1DWF9U.systemMessage-1H1Z20 {
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
}

.systemMessage-1H1Z20 div[class*="iconContainer-"] {
    margin-right: 0.5rem;
}
`;


function CleanUP(id, rootNode) {
    const result = rootNode?.querySelectorAll(id) ?? null;
    if (!result)
        return;
    for (const node of result)
        node.remove();
}
function CreateStyle(id, innerHTML) {
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = innerHTML;
    return style;
}
CleanUP('#bodystyle', document);
document.head.append(CreateStyle('bodystyle', body));