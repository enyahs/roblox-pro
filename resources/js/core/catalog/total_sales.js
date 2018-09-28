/**
 * Create Sales Field
 */
const createSalesField = async () => 
{

    // Roblox Catalog Item Mobile Description
    const itemMobileDescription = document.querySelector('.item-mobile-description');

    if(

        // Validate Mobile Description Exists
        itemMobileDescription

    )
    {

        current_location.then(id => {

            // Roblox Item Container
            const itemContainer = document.querySelector('#item-container');

            // API used to get sales on catalog item
            const api = (id == 4) ? 'https://api.roblox.com/marketplace/game-pass-product-info?gamePassId=' : 'https://api.roblox.com/marketplace/productinfo?assetId=';
            
            // Store Current Item ID
            const dataItemId = (id == 4) ? itemContainer.getAttribute('data-delete-id') : itemContainer.getAttribute('data-item-id'); 

            // Fetch Sales Data
            fetch(

                // Item API Link
                api + dataItemId

            )
            
            // Store API Response JSON
            .then((response) => response.json())

            // Create Sales Field
            .then((data) => {

                // Create new Element for Item Sales Display
                const salesDiv = document.createElement('div');

                // Add Classes to Item Sales Element
                salesDiv.classList.add("clearfix", "item-field-container")

                // Add Inline Style to Item Sales Element
                salesDiv.setAttribute('style', 'margin-bottom: 12px;');

                // Set html inside Item Sales Element
                salesDiv.innerHTML ='<div class="text-label field-label">Sales</div><span class="field-content">' + data.Sales + '</span>';
                
                // Insert Sales Element After Mobile Description
                itemMobileDescription.insertAdjacentElement('afterend', salesDiv);
        
            });

        });

    }

}

const enableSales = async () => 
{

    await createSalesField();

}

export {

    enableSales
    
};