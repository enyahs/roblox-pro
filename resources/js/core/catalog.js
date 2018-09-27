const createSalesField = async (itemType) => 
{

    const priceContainer = document.querySelector('.item-mobile-description');

    if(

        priceContainer

    )
    {

        current_location.then(id => {

            const itemContainer = document.querySelector('#item-container');
            const api = (id == 4) ? 'https://api.roblox.com/marketplace/game-pass-product-info?gamePassId=' : 'https://api.roblox.com/marketplace/productinfo?assetId=';
            const dataItemId = (id == 4) ? itemContainer.getAttribute('data-delete-id') : itemContainer.getAttribute('data-item-id'); 

            console.log(window.current_location);
            fetch(api + dataItemId)
            .then((response) => response.json())
            .then((data) => {

                const salesDiv = document.createElement('div');
                salesDiv.classList.add("clearfix", "item-field-container")

                salesDiv.setAttribute('style', 'margin-bottom: 12px;');
                salesDiv.innerHTML ='<div class="text-label field-label">Sales</div><span class="field-content">' + data.Sales + '</span>';
        
                priceContainer.insertAdjacentElement('afterend', salesDiv);
        
            });

        });

    }

}

const enableSales = async () => 
{

    await createSalesField();

}

const setup_catalog_page = async () => {

    await enableSales();

}

export {

    setup_catalog_page
    
};