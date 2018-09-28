import { enableSales } from './total_sales.js'

/**
 * Setup Roblox Catalog
 */
const setup_catalog_page = async () => 
{

    // Enable Catalog Sales
    await enableSales();

}

/**
 * Export
 */
export {

    setup_catalog_page
    
};