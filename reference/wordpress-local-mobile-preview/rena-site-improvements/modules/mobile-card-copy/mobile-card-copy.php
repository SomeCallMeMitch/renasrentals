<?php
/** Editable Beaver Builder fields for the phone property cards. */

if (!defined('ABSPATH')) {
    exit;
}

class RRMobileCardCopyModule extends FLBuilderModule {
    public function __construct() {
        parent::__construct([
            'name' => 'Mobile Card Copy',
            'description' => 'Text shown on this property’s mobile card. Photos stay in Listing Gallery.',
            'category' => 'Basic',
            'editor_export' => false,
        ]);
    }
}

FLBuilder::register_module('RRMobileCardCopyModule', [
    'general' => [
        'title' => 'Mobile Card Text',
        'sections' => [
            'availability' => [
                'title' => 'Availability and Location',
                'fields' => [
                    'available_date' => ['type' => 'text', 'label' => 'Available date'],
                    'location' => ['type' => 'text', 'label' => 'City, state, and ZIP'],
                ],
            ],
            'facts' => [
                'title' => 'Facts Shown on Mobile',
                'fields' => [
                    'bed_label' => ['type' => 'text', 'label' => 'Bedroom label'],
                    'bath_label' => ['type' => 'text', 'label' => 'Bathroom label'],
                    'parking_value' => ['type' => 'text', 'label' => 'Parking value'],
                    'parking_label' => ['type' => 'text', 'label' => 'Parking label'],
                ],
            ],
            'summary' => [
                'title' => 'Summary',
                'fields' => [
                    'headline' => ['type' => 'text', 'label' => 'One-line description'],
                    'description' => ['type' => 'textarea', 'label' => 'Optional second description'],
                ],
            ],
            'actions' => [
                'title' => 'Buttons',
                'fields' => [
                    'details_label' => ['type' => 'text', 'label' => 'Details button text'],
                    'apply_label' => ['type' => 'text', 'label' => 'Apply button text'],
                ],
            ],
        ],
    ],
]);
