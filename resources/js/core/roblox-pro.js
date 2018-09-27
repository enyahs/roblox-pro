(function () { 'use strict' }());

import { get_current_location_id } from './location.js'
window.current_location = get_current_location_id();

import { setup_catalog_page } from './catalog.js'
import { setup_games_page } from './games.js'

current_location.then(id => 
{

    switch(id)
    {

        case 1:
        case 4:

            setup_catalog_page();
            break;

        case 3:

            setup_games_page();
            break;

    }

});