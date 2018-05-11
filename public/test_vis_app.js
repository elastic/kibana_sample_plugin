require('ui/autoload/all');

import './test_vis_app.less';
import './test_vis_app_controller.js';

import chrome from 'ui/chrome';

import uiRoutes from 'ui/routes';
import template from './test_vis_app.html';

const app = require('ui/modules').get('apps/kibana_sample_plugin', ['kibana']);

chrome.setRootTemplate(template);

