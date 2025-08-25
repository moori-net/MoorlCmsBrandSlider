<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider;

use MoorlFoundation\Core\PluginLifecycleHelper;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class MoorlCmsBrandSlider extends Plugin
{
    final public const NAME = 'MoorlCmsBrandSlider';
    final public const DATA_CREATED_AT = '2021-11-07 00:00:00.000';
    final public const PLUGIN_TABLES = [];
    final public const SHOPWARE_TABLES = [
        'cms_page',
        'cms_page_translation',
        'cms_section',
        'cms_block',
        'cms_slot',
        'category',
        'product_manufacturer',
        'moorl_sorting'
    ];

    public function install(InstallContext $installContext): void
    {
        parent::install($installContext);

        PluginLifecycleHelper::update(self::class, $this->container);
    }

    public function activate(ActivateContext $activateContext): void
    {
        parent::activate($activateContext);

        PluginLifecycleHelper::update(self::class, $this->container);

    }

    public function uninstall(UninstallContext $uninstallContext): void
    {
        parent::uninstall($uninstallContext);

        if ($uninstallContext->keepUserData()) {
            return;
        }

        PluginLifecycleHelper::uninstall(self::class, $this->container);
    }
}
