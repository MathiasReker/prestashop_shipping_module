/*
 @author    Shipmondo
 @copyright 2019 Shipmondo
 @license   All rights reserved
 */

jQuery(document).ready(function ($) {
    console.log('init supercheckout');
    //TODO maybe change to window.Shipmondo

    var supercheckout_selector = '#supercheckout-fieldset';

    //TODO one issue - if you edit the address the JS address object will not get updated.
    window.SMGetDeliveryAddressID = function () {
        var address_id = null;
        //TODO this is not tested with guest checkout
        var select_selected_id = $(supercheckout_selector).find('#shipping-existing select').children("option:selected").val();
        if (select_selected_id) {
            address_id = select_selected_id;
        } else {
            address_id = window.idAddress_delivery;
        }
        return address_id;
    };


    //TODO combine the two and maybe also in the selector under and where its used so its smarter. Move type and only have first part!!:
    window.SMDeliveryOptionInputSelector = '#shipping-method input[type="radio"]';
    window.SMDeliveryOptionRowSelector = '.highlight';


    $(supercheckout_selector).bind("DOMNodeInserted", function (e) {
        var textNode = e.target;
        if ($(textNode).is("#shipping-method")) {
            //Only append once
            if ($(textNode).find('td.carrier-extra-content').size() == 0) {
                var container = $(textNode).find(window.SMDeliveryOptionRowSelector);
                //TODO move to CSS
                //Add "Missing" extra content.
                container.append('<td style="display:block; box-sizing:border-box; clear:both; padding: 0 !important;" class="carrier-extra-content"></td>');
            } else {
                // console.log('no go');
            }
        }
    });
});