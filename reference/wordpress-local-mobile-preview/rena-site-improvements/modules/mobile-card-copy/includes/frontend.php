<?php
/** Beaver Builder source values are rendered for the mobile card script. */
$fields = [
    'available_date' => 'Available date',
    'location' => 'City, state, and ZIP',
    'bed_label' => 'Bedroom label',
    'bath_label' => 'Bathroom label',
    'parking_value' => 'Parking value',
    'parking_label' => 'Parking label',
    'headline' => 'One-line description',
    'description' => 'Optional second description',
    'details_label' => 'Details button text',
    'apply_label' => 'Apply button text',
];
?>
<div class="rr-mobile-card-copy">
    <strong>Mobile card text — edit this module for the phone card</strong>
    <dl>
        <?php foreach ($fields as $field => $label) : ?>
            <div><dt><?php echo esc_html($label); ?></dt><dd data-rr-copy-field="<?php echo esc_attr($field); ?>"><?php echo esc_html($settings->$field ?? ''); ?></dd></div>
        <?php endforeach; ?>
    </dl>
    <p>Address, availability status, bedroom and bathroom numbers, and the Apply link come from the other Beaver Builder modules in this property. Photos come from Listing Gallery.</p>
</div>
