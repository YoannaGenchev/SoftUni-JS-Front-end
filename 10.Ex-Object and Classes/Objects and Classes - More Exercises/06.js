function browserHistory(browser, actions) {
    for (let action of actions) {
        if (action === "Clear History and Cache") {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
        } else {
            let [command, ...siteParts] = action.split(' ');
            let site = siteParts.join(' ');

            if (command === "Open") {
                browser["Open Tabs"].push(site);
                browser["Browser Logs"].push(action);
            } else if (command === "Close") {
                let index = browser["Open Tabs"].indexOf(site);
                if (index !== -1) {
                    browser["Open Tabs"].splice(index, 1);
                    browser["Recently Closed"].push(site);
                    browser["Browser Logs"].push(action);
                }
            }
        }
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
        "Open YouTube",
        "Open Yahoo",
        "Open Google Translate",
        "Close Yahoo",
        "Open Gmail",
        "Close Gmail",
        "Open Facebook"
    ]
}, ["Close Facebook", "Open StackOverFlow", "Open Google"]);
