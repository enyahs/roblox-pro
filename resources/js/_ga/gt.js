import { ga_id } from '../../../roblox-pro.config.js'

/**
 * Setup Google Analytics.
 * 
 * @return {void}
 */
const setup_ga = () =>
{

    // Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    // Google Analytics Settings
    ga('create', ga_id, 'auto');
    ga('set', 'checkProtocolTask', function(){});

}

/**
 * Add page view to Google AnaLytics.
 * 
 * @return {void}
 */
const add_pv = () =>
{
    
    // Add a Page View
    ga('send', 'pageview', 'roblox.pro');

}

/**
 * Google Analytics Add
 * 
 * @param {string} o 
 */
const ga_add = async (o) =>
{

    switch(o)
    {

        case "pv":

            add_pv();
            break

        default:
            break;

    }

}

/**
 * Export
 */
export {

    setup_ga,
    ga_add
    
};