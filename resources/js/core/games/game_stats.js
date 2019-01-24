/**
 * Create Game Stats Button Event
 * 
 * @return {AsyncFunction}
 */
const createGameStatsButtonEvent = async () => 
{

    // Select View Game Stats Button
    const viewStatsButton = document.getElementById('view_stats');

    if(
        
        // Validate Game Stats Button Exists
        viewStatsButton

    )
    {

        /**
         * Add Click Event to Game Stats Button
         * 
         * @param {string} - Current Event
         * @param {function} - Execute on Event
         */
        viewStatsButton.addEventListener('click', () => 
        {

                // Current URL
                const url = window.location.href;

                // Get ID Number from URL
                const placeid = url.match(/\d+/);

                // Create a Destination for the user
                const location = 'https://www.myleafs.com/app/roblox-money-tool/game/' + placeid;

                // Open a popup window with the current game stats
                window.open(location, 'Popup', 'location,status,scrollbars,resizable,width=800, height=800');

        });

    }

}

/**
 * Create Game Stats Button
 * 
 * @return {AsyncFunction}
 */
const createGameStatsButton = async () =>
{

    // Select Roblox Play Button
    const gamePlayButton = document.querySelector('#MultiplayerVisitButton, #PurchaseRequired');


    if(

        // Validate Roblox Play Button exists
        gamePlayButton

    )
    {

         // Create new Element for Viewing Game Stats
        const viewStatsButton = document.createElement('div');

        // Add ID to View Stats Button
        viewStatsButton.setAttribute("id", "view_stats");

        // Add Classes to View Stats Button
        viewStatsButton.classList.add("btn-secondary-lg");

        // Add Inline Style to View Stats Button
        viewStatsButton.setAttribute('style', 'margin-top: .75rem; margin-bottom: .75rem;');

        // Set html inside View Stats Button
        viewStatsButton.innerHTML ='View Game Stats';

        // Insert View Stats Button After Roblox Play Button
        gamePlayButton.insertAdjacentElement('afterend', viewStatsButton);

    }

}

/**
 * Create Elements for Roblox Games Page
 * 
 * @return {AsyncFunction}
 */
const createElements = async () =>
{

    await createGameStatsButton();

}

/**
 * Create Events for Roblox Games Page
 * 
 * @return {AsyncFunction}
 */
const createEvents = async () =>
{

    // Create Game Stats Button Event
    await createGameStatsButtonEvent();

}

/**
 * Enable External Game Stats Tool
 * 
 * @return {AsyncFunction}
 */
const enableGameStats = async () =>
{

    // Create Elements
    await createElements();

    // Create Events
    await createEvents();

}

/**
 * Export
 */
export {

    enableGameStats
    
};