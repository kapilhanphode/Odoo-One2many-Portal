# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Web Portal One2many Field',
    'summary': 'Web Portal One2many Field',
    'sequence': -100,
    'category': 'Portal',
    'description': """
This module adds required base code for a fully integrated customer portal.
It contains the base controller class and base templates. Business addons
will add their specific templates and controllers to extend the customer
portal.""",
    'depends': ['base', 'portal', 'website', 'web', 'website'],
    'data': [
        'security/ir.model.access.csv',
        'views/test.xml',
        'views/test_view.xml',
    ],
    'qweb': [
        '/one2many_portal/static/src/xml/portal.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'one2many_portal/static/src/js/web_portal_js.js',
            # Add other JavaScript files as needed
        ],
    },
    'application': True,

}

