/**
 * Gets the id of the current page location.
 * 
 * @return Int - An int of the current location.
 */
export const get_current_location_id = async () => 
{

    /**
     * Current Window Location
     * 
     * @var String - url
     */
    const url = window.location.href;

    /**
     * Current Location ID
     * 
     * @var Int - current_location
     */
    let current_location = 0;

    // Validate Location
    if(

        // Roblox Catalog
        (url.indexOf("catalog") != -1)

    )
    {

        // Set Current Location Id
        current_location = 1;

    }
    else if(

        // Roblox Library
        (url.indexOf("library") != -1)

    )
    {

        // Set Current Location Id
        current_location = 2;

    }
    else if(

        // Roblox Games
        (url.indexOf("games") != -1)
    
    )
    {

        // Set Current Location Id
        current_location = 3;

    }
    else if(

        // Roblox Game Pass
        (url.indexOf("game-pass") != -1)

    )
    {

        // Set Current Location Id
        current_location = 4;

    }

    return current_location;

}