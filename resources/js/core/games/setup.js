import { enableGameStats } from './game_stats.js'

const setup_games_page = async () => 
{

    await enableGameStats();

}

export {

    setup_games_page
    
};