const createGameStatsEvent = async () => 
{

    const viewStatsButton = document.getElementById('view_stats');

    if(
        
        viewStatsButton

    )
    {

        viewStatsButton.addEventListener('click', () => 
        {

                const url = window.location.href;

                const placeid = url.match(/\d+/);
                const location = 'https://www.myleafs.com/app/roblox-money-tool/game/' + placeid;

                window.open(location, 'Popup', 'location,status,scrollbars,resizable,width=800, height=800');

        });

    }

}

const createGameStatsButton = async () =>
{

    const gameButtonsContainer = document.querySelector('.game-play-buttons');

    if(

        gameButtonsContainer

    )
    {

        gameButtonsContainer.innerHTML += '<div class="clearfix"></div><div class="rp-btn rp-bg-primary"><div id="view_stats" class="btn-secondary-lg" style="margin-top: .75rem; margin-bottom: .75rem;">View Game Stats</div><button id="go-to-options" style="display:none">Go to options</button></div>';

    }

}


const enableGameStats = async () =>
{

    await createGameStatsButton();
    await createGameStatsEvent();

}

const setup_games_page = async () => 
{

    await enableGameStats();

}

export {

    setup_games_page
    
};