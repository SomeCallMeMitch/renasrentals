<?php
/**
 * Plugin Name: Rena's Rentals Site Improvements
 * Description: Focused presentation and interaction fixes for the property landing page.
 * Version: 0.1.0
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', static function (): void {
    if (class_exists('FLBuilder') && class_exists('FLBuilderModule')) {
        require_once plugin_dir_path(__FILE__) . 'modules/mobile-card-copy/mobile-card-copy.php';
    }
}, 20);

add_filter('body_class', static function (array $classes): array {
    if (is_page() && get_post_meta(get_queried_object_id(), '_rr_property_detail', true)) {
        $classes[] = 'rr-detail-page';
    }
    return $classes;
});

add_action('wp_enqueue_scripts', static function (): void {
    if (is_page() && get_post_meta(get_queried_object_id(), '_rr_property_detail', true)) {
        $base = plugin_dir_path(__FILE__) . 'assets/';
        wp_enqueue_style(
            'rena-site-improvements',
            plugins_url('assets/site.css', __FILE__),
            [],
            substr(hash_file('sha256', $base . 'site.css'), 0, 12)
        );
        wp_enqueue_style(
            'rena-property-details',
            plugins_url('assets/property-details.css', __FILE__),
            ['rena-site-improvements'],
            substr(hash_file('sha256', $base . 'property-details.css'), 0, 12)
        );
        wp_enqueue_script(
            'rena-property-details',
            plugins_url('assets/property-details.js', __FILE__),
            [],
            substr(hash_file('sha256', $base . 'property-details.js'), 0, 12),
            true
        );
        return;
    }
    if (!is_front_page() && !is_page(498)) {
        return;
    }
    $css_path = plugin_dir_path(__FILE__) . 'assets/site.css';
    wp_enqueue_style(
        'rena-site-improvements',
        plugins_url('assets/site.css', __FILE__),
        [],
        substr(hash_file('sha256', $css_path), 0, 12)
    );
    $js_path = plugin_dir_path(__FILE__) . 'assets/site.js';
    wp_enqueue_script(
        'rena-site-improvements',
        plugins_url('assets/site.js', __FILE__),
        [],
        substr(hash_file('sha256', $js_path), 0, 12),
        true
    );
    $mobile_css_path = plugin_dir_path(__FILE__) . 'assets/mobile-cards.css';
    wp_enqueue_style(
        'rena-mobile-cards',
        plugins_url('assets/mobile-cards.css', __FILE__),
        ['rena-site-improvements'],
        substr(hash_file('sha256', $mobile_css_path), 0, 12)
    );
    $mobile_js_path = plugin_dir_path(__FILE__) . 'assets/mobile-cards.js';
    wp_enqueue_script(
        'rena-mobile-cards',
        plugins_url('assets/mobile-cards.js', __FILE__),
        ['rena-site-improvements'],
        substr(hash_file('sha256', $mobile_js_path), 0, 12),
        true
    );
}, 30);
