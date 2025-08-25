function onMoorlFoundationReady(callback) {
    if (window.MoorlFoundation) {
        callback();
    } else {
        window.addEventListener('MoorlFoundationReady', callback, { once: true });
    }
}

onMoorlFoundationReady(() => {
    MoorlFoundation.ModuleHelper.registerModule({
        pluginName: 'MoorlCmsBrandSlider',
        entity: 'product_manufacturer',
        cmsElements: [
            {
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
            }
        ]
    });
});
