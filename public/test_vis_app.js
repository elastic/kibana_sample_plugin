require('ui/autoload/all');

// import the uiExports that we want to "use"
import 'uiExports/visTypes';
import 'uiExports/visResponseHandlers';
import 'uiExports/visRequestHandlers';
import 'uiExports/visEditorTypes';
import 'uiExports/savedObjectTypes';
import 'uiExports/spyModes';
import 'uiExports/fieldFormats';

import './test_vis_app.less';
import './test_vis_app_controller.js';

import chrome from 'ui/chrome';

import uiRoutes from 'ui/routes';
import template from './test_vis_app.html';

const app = require('ui/modules').get('apps/kibana_sample_plugin', ['kibana']);

chrome.setRootTemplate(template);

