import { getVisualizeLoader } from 'ui/visualize/loader';
import 'ui/visualize';
import { VisProvider } from 'ui/vis';

const app = require('ui/modules').get('apps/kibana_sample_plugin', []);

app.controller('TestVisApp', function ($scope, Private, serviceSettings) {
  // showing saved kibana visualizations
  $scope.visualizationList = null;
  $scope.selectedVisualization = null;
  let visualizeLoader = null;

  getVisualizeLoader().then(loader => {
    visualizeLoader = loader;
    loader.getVisualizationList().then(list => {
      $scope.visualizationList = list;
    });
  });

  const visContainer = $('.test-vis-app-visualize');
  const timeRange = {
    min: 'now-7d/d',
    max: 'now'
  };

  $scope.$watch('selectedVisualization', (visualizationId) => {
    if (!visualizationId) return;
    visualizeLoader.embedVisualizationWithId(visContainer, visualizationId, {
      timeRange: timeRange
    });
  });

  // using kibana visualizations
  $scope.myVisData = {
    tables: [{
      columns: [
        { title: 'Tag' },
        { title: 'Count' }
      ],
      rows: [
        [ 'test', 100 ],
        [ 'tag', 150 ],
        [ 'for', 200 ],
        [ 'tagcloud', 10 ],
      ]
    }]
  };

  const visConfig = {
    type: 'tagcloud'
  };

  const Vis = Private(VisProvider);
  $scope.myVis = new Vis('logstash-*', visConfig);


  // region map
  serviceSettings.getFileLayers()
    .then(function (layersFromService) {
      $scope.myVisData2 = {
        tables: [{
          columns: [
            { title: 'Tag' },
            { title: 'Count' }
          ],
          rows: [
            [ 'GB', 100 ],
            [ 'FR', 150 ],
            [ 'DE', 200 ],
            [ 'ES', 10 ],
          ]
        }]
      };

      const visConfig2 = {
        type: 'region_map',
        params: {
          selectedLayer: layersFromService[1],
          selectedJoinField:layersFromService[1].fields[0]
        }
      };

      $scope.myVis2 = new Vis('.logstash*', visConfig2);
    });
});
