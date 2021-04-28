'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//brands ==>>channel id
//brand_store_id => user_id from uberEats
const StoreSchema = new Schema({
    // prism_store_id: {
    //     type: 'String'
    // },
    name: {
        type: String,
        required: false
    },
    device_token: {
        type: [String]
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false
    },
    brands: [{
        brand_id: {
            type: 'String'
        },
        brand_name: {
            type: 'String'
        },
        brand_logo_url: {
            type: 'String'
        },
        brand_store_id: {
            type: 'String'
        },
        status: {
            type: "Boolean"
        },
        avg_prep_time: {
            type: 'Number'
        },
        autoAccept: {
            type: "Boolean"
        },
        //updated by prudhvi Battineni on 9-3-21 by adding brand_uuid, dashboard_login, dashboard_password.
        brand_uuid: {
            type: String,
            required: false
        },
        dashboard_login: {
            type: String,
            required: false
        },
        dashboard_password: {
            type: String,
            required: false
        },
        pin: {
            type: String,
            required: false
        },
        is_connected: {
            type: Boolean,
            required: false
        },
        isAllowedUberEats: {
            type: Boolean,
            required: false,
            default: true
        },

        preparation: {

            preptime: {
                type: Number

            },
            label: {
                type: String

            }
        }
    }],

    location: {
        address: {
            type: String
        },
        address_2: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        postal_code: {
            type: String
        },
        state: {
            type: String
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        }
    },
    // contact_emails: {
    //     type: ['String']
    // },
    // raw_hero_url: {
    //     type: 'String'
    // },
    // price_bucket: {
    //     type: 'String'
    // },
    // status: {
    //     type: 'String'
    // },
    // store_logo_url: {
    //     type: 'String'
    // }
    timeZone: {
        type: Object,
        required: false
    },
    business_name: {
        type: String,
        required: false
    },
    // restaurant_name: {
    //     type: String,
    //     required: false
    // },
    eMail_address: {
        type: String,
        required: false
    },
    mobile_number: {
        type: Number,
        required: false
    },
    country_code: {
        type: String,
        required: false
    },
    payments: {
        payment_mode: {
            type: String,
            enum: ['Online', 'Cheque'],
            required: false
        },
        cheque_number_or_transaction_id: {
            type: String,
            required: false
        },
        payment_plan: {
            type: String,
            enum: ['Monthly', 'Annually'],
            required: false
        },
        last_payment: {
            type: Date,
            required: false,
            trim: true
        },
        renewal_date: {
            type: Date,
            required: false,
            trim: true
        },
        payment_status: {
            type: Boolean,
            // default: false
            required: false
        }
    },
    payment_logs: {
        type: Array,
        required: false
    },
    // updated by prudhvi battineni added reason and status to string
    reason_to_deactivate_store: {
        type: String,
        required: false,
        default: ''
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    status: {
        type: String,
        required: false,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Store', StoreSchema);
