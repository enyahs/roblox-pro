import { enableGameStats } from './game_stats.js'

/**
 * Setup Roblox Games
 * 
 * @return {AsyncFunction}
 */
const setup_games_page = async () => 
{

    // Enable Game Stats Feature
    await enableGameStats();

}

/**
 * Export
 */
export {

    setup_games_page
    
};