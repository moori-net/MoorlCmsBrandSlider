setTimeout(() => {
    const cmsElementConfig = MoorlFoundation.CmsElementHelper.getCmsElementConfig({
        name: 'moorl-brand-slider-v2',
        parent: 'listing',
        plugin: 'MoorlCmsBrandSlider',
        icon: 'regular-view-grid',
        cmsElementEntity: {
            entity: 'product_manufacturer'
        },
        cmsElementMapping: {
            listingSource: {
                value: 'static',
                attributes: {
                    filter: ['static', 'select'],
                }
            },
            listingLayout: {
                value: 'slider'
            },
            itemLayout: {
                value: 'image-or-title'
            },
            gapSize: {
                value: '15px'
            },
            itemWidth: {
                value: '220px'
            },
            displayMode: {
                value: 'contain'
            },
            itemHeight: {
                value: '130px'
            },
            hasButton: {
                value: false
            },
        }
    });

    Shopware.Application.getContainer('service').cmsService.registerCmsElement(cmsElementConfig);
}, 100);
