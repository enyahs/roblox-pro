(function () { 'use strict' }());

import { get_current_location_id } from './location.js'
window.current_location = get_current_location_id();

import { setup_catalog_page } from './catalog/setup.js'
import { setup_games_page } from './games/setup.js'

current_location.then(id => 
{
    
    // Google Analytics
    chrome.runtime.sendMessage({action: '_gt'}, (r) => {});

    switch(id)
    {

        case 1:
        case 4:

            // Setup Roblox Catalog
            setup_catalog_page();
            break;

        case 3:

            // Setup Roblox Games
            setup_games_page();
            break;

    }

});