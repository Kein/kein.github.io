'use strict';

console.log('[SGP] Steam Group Parter loaded');

let groups = [];
let runtimeObj = (typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined')
				? chrome.runtime : browser.runtime;


runtimeObj.onMessage.addListener((request) =>
{
	console.log(request);
	if(request.cmd === 'add')
	{
		request['time'] = Date.now();
		AddEntry(request);
		return true;
	}
	if(request.cmd === 'remove')
	{
		RemoveEntry([request.groupId]);
		return true;
	}
	return false;
} );


const AddEntry = (data) => {
	if (!groups.find(x => x.groupId === data.groupId))
	{
		const { cmd, action, ...rest } = data;
		groups.push(rest);
	}
}

const RemoveEntry = (data) => {
	for (let i = groups.length - 1; i >= 0; i--) {
		if (data.indexOf(groups[i].groupId) > -1)
			groups.splice(i, 1)
	}
}



function SendPOST()
{
	if (!groups || groups.length < 1)
		return;

	let del = [];
	groups.forEach(item =>
	{
		if (Date.now() - item.time > 300000)
		{
			del.push(item.groupId);
			let http = new XMLHttpRequest();
			let data = new FormData();
			data.append('action', 'leaveGroup');
			data.append('sessionID', item.sessionID);
			data.append('groupId', item.groupId);
			let url = `https://steamcommunity.com/profiles/${item.steamID}/home_process`;
			http.withCredentials = true;
			http.onreadystatechange = function()
			{
				if(http.readyState == 4 && http.status !== 200) {
					console.log(`Unable to part group ${item.groupId}! Reason: ${http.status}. Leave group manually.`)
			}
}
			http.open('POST', url, true);
			http.send(data);
		}
	});
	if (del.length > 0)
		RemoveEntry(del);
}

setInterval(SendPOST, 60000);