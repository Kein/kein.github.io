'use strict';

const checkbox = [
    		'<div style="top: 115px; position: absolute; right: -6px;">',
			'<input type="checkbox" id="autogpart" name="autogpart" checked="">',
			'<label for="autogpart">Auto-leave?</label> </div>'
			].join('');

function SendMessageToBackgroundScript(message)
{
	if( typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined' )
		return chrome.runtime.sendMessage(message);
	else if( typeof browser !== 'undefined' )
		return browser.runtime.sendMessage(message);
}

function queueGroup(command)
{ 
	let msg = {cmd: command};
	if (document.forms.leave_group_form)
	{
		for (var i = document.forms.leave_group_form.children.length - 1; i >= 0; i--)
		{
			msg[document.forms.leave_group_form.children[i].name] = document.forms.leave_group_form.children[i].value;
		}
		msg.steamID=JSON.parse(document.getElementById("webui_config").getAttribute("data-userinfo")).steamid;
		SendMessageToBackgroundScript(msg);
		return;
	}
	console.log('[SGP] LeaveGroup form not found on group page!')
}

const lg = document.querySelector('.weblink > a[href*="ConfirmLeaveGroup"]');
const butArea = document.querySelector(".grouppage_join_area");
const steamData = JSON.parse(document.getElementById("webui_config").getAttribute("data-userinfo"));

if (steamData.logged_in === true)
{
	if (butArea)
		butArea.outerHTML += checkbox;

	if (lg)
	{
		lg.parentElement.id = 'lgf';
		lg.href = 'javascript:document.forms.leave_group_form.submit();'
	}

	document.addEventListener("click", (event) => {

	if(event.target.offsetParent && event.target.offsetParent.className === 'grouppage_join_area' && document.getElementById('autogpart').checked)
		queueGroup('add');
	else if(event.target.parentElement && event.target.parentElement.id === 'lgf')
		queueGroup('remove');
	}, true);
}
