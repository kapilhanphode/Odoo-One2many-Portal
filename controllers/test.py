import json
from odoo import http
from odoo.http import request


class WebForm(http.Controller):

    @http.route('/submit_web_form', type='http', website=True, auth="public")
    def submit_form(self, **kw):
        form_id = request.env['data.line'].sudo().search([])
        return request.render('one2many_portal.form_template', {'form_id1':form_id})

    @http.route('/create/web_form_record', type='http', website=True, auth="public", Methods=['POST'])
    def create_form(self, **kw):
        data = json.loads(kw['data_line_ids'])

        val = [(0, 0, line) for line in data]
        values = {
            'name': kw['name'],
            'data_line_ids': val,
        }
        form_id = request.env['web.form.test'].sudo().create(values)
        return request.render('one2many_portal.form_template', {})

