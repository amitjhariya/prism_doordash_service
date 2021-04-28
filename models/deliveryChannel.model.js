const mongoose = require('mongoose');
const crypto = require('crypto');

const deliveryChannelsSchema = new mongoose.Schema(
    {

        brand_name: {
            type: String,
            trim: true,
            unique: true,
            required: true,
            max: 128
        },
        brand_logo_url: {
            type: String
        },
        brand_accept_url: {
            type: String
        },
        brand_deny_url: {
            type: String
        },
        brand_cancel_url: {
            type: String
        },
        brand_restaurant_status_url: {
            type: String
        },
        brand_order_details_url: {
            type: String
        },
        cancel_reasons: {
            type: ['String']
        },
        fulfillment_issue_type: {
            type: ['String']
        },
        fulfillment_action_type: {
            type: ['String']
        },
        dining_types: {
            type: ['String']
        },
        sla_deny: {
            type: Number
        },
        sla_accept: {
            type: Number
        },
        auth_token: {
            type: String
        },
        eats_store_status_write_token: {
            type: String
        },
        //Added by prudhvi Battineni on 3-3-21 for integrations in admin dashboard.
        status: {
            type: Boolean,
            required: false,
            default: true
        },
        brand_pos_provisioning_url: {
            type: String,
            required: false
        },
        eats_store_token: {
            type: String,
            required: false
        },
        client_secret: {
            type: String,
            required: false
        },
        client_id: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);



module.exports = mongoose.model('delivery_channels', deliveryChannelsSchema);
