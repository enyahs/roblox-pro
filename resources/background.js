import { setup_ga, ga_add } from './js/_ga/gt.js';

/**
 * Listen for message in content scripts.
 * 
 * @param {object} - Containing data passed to Chrome extension background to be processed
 */
chrome.runtime.onMessage.addListener((message) =>
{

    switch (message.action)
    {

        case "openOptionsPage":

            openOptionsPage();
            break;

        case "_gt":

            ga_add('pv');
            break

        default:

            break;

    }
    
});

/**
 * Open chrome extension options.
 * 
 * @return void
 */
const openOptionsPage = () =>
{

    chrome.runtime.openOptionsPage();

}

/**
 * Initial Setup for Chrome Extension Background Processing.
 * 
 * @return void
 */
const _setup = async () =>
{

    // Setup Google Analytics
    await setup_ga();

}

_setup();