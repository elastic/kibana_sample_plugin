import React from 'react';
import ReactDOM from 'react-dom';

import 'ui/autoload/all';
import 'ui/chrome';
import './test_vis_app.less';

import uiRoutes from 'ui/routes';
import { uiModules } from 'ui/modules';

import { TestVisApp } from './test_vis_app_component';

uiModules.get('kibana/testVisApp', [])
  .component('testVisApp', {
    controller: ($element) => {
      ReactDOM.render(
        <TestVisApp />,
        $element[0]
      );
    }
  });

uiRoutes.enable();
uiRoutes.when('/', {
  template: '<test-vis-app></test-vis-app>',
  reloadOnSearch: false,
});
