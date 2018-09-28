/**
 * Create Game Stats Button Event
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
         * @param string - Current Event
         * @param function - Execute on Event
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
 */
const createGameStatsButton = async () =>
{

    // Select Roblox Play Buttons Container
    const gameButtonsContainer = document.querySelector('#MultiplayerVisitButton');

    if(

        // Validate Roblox Play Buttons Container exists
        gameButtonsContainer

    )
    {

        // Add HTML to the end of Roblox Play Buttons Container
        const salesDiv = document.createElement('div');
        salesDiv.setAttribute("id", "view_stats");
        salesDiv.classList.add("btn-secondary-lg");

        salesDiv.setAttribute('style', 'margin-top: .75rem; margin-bottom: .75rem;');
        salesDiv.innerHTML ='View Game Stats';

        gameButtonsContainer.insertAdjacentElement('afterend', salesDiv);

    }

}

/**
 * Create Elements for Roblox Games Page
 */
const createElements = async () =>
{

    await createGameStatsButton();

}

/**
 * Create Events for Roblox Games Page
 */
const createEvents = async () =>
{

    // Create Game Stats Button Event
    await createGameStatsButtonEvent();

}

/**
 * Enable External Game Stats Tool
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