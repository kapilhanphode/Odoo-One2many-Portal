odoo.define('one2many_portal.generic_form', function(require){
	"use strict";
	console.log('testing111+++++++++++++++++++++++++++++++++++')
	console.log('testing111+++++++++++++++++++++++++++++++++++')
	var publicWidget = require('web.public.widget');
	var core = require('web.core');
	var ajax = require('web.ajax');
	var rpc = require('web.rpc');
	var core = require('web.core');
	var QWeb = core.qweb;
	var _t = core._t;

	publicWidget.registry.generic_form_data = publicWidget.Widget.extend({
    	selector: '#form_template',
    	events: {
       	'click .add_total_project': '_onClickAdd_total_project',
       	'click .remove_line': '_onClickRemove_line',
       	'click .custom_create': '_onClickSubmit',
   	},

   	_onClickSubmit: async function(ev){
   		console.log('testing+++++++++++++++++++++++++++++++++++')

        	var self = this;
        	var cost_data = [];
        	var rows = $('.total_project_costs > tbody > tr.project_cost_line');
        	_.each(rows, function(row) {
            	let expenditure = $(row).find('input[name="expenditure"]').val();
            	let total_cost = $(row).find('input[name="total_cost"]').val();
            	console.log(expenditure, total_cost)
            	cost_data.push({
                	'code': expenditure,
                	'cost': total_cost,
            	});
        	});
        	$('textarea[name="data_line_ids"]').val(JSON.stringify(cost_data));

   	},

   	_onClickRemove_line: function(ev){
                	var expenditure = $(ev.currentTarget).closest('tr').find('input[name="expenditure"]').val();
    var total_cost = $(ev.currentTarget).closest('tr').find('input[name="total_cost"]').val();

    // Remove the row
    $(ev.currentTarget).closest('tr').remove();

    console.log('Removed row:', expenditure, total_cost);
    console.log('delete button press+++++++++++++++++++++++++++++++++++')

    	},

   	_onClickAdd_total_project: function(ev){
   		console.log('testing+++++++++++++++++++++++++++++++++++')

            	var $new_row = $('.add_extra_project').clone(true);
            	$new_row.removeClass('d-none');
            	$new_row.removeClass('add_extra_project');
            	$new_row.addClass('project_cost_line');
            	$new_row.insertBefore($('.add_extra_project'));
            	_.each($new_row.find('td'), function(val) {
                	$(val).find('input').attr('required', 'required');
            	});
        	},

	});
});

