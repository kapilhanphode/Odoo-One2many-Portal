from odoo import models, fields
from odoo import api, fields, models, _


class WebFormTest(models.Model):
    _name = 'web.form.test'
    _description = 'Web Form Test'


    name = fields.Char(string='Name', required=True)
    data_line_ids = fields.One2many('data.line', 'form_id', 'Data Lines')


class DataLine(models.Model):
    _name = 'data.line'
    _description = 'Data Lines'
    _rec_name = 'code'

    code = fields.Char('Product Code', required=True)
    cost = fields.Float('Cost', required=True)
    form_id = fields.Many2one('web.form.test', 'Form Id', ondelete='cascade', required=True)
