export default function (kibana) {

  return new kibana.Plugin({
    require: ['kibana'],
    uiExports: {
      app: {
        title: 'Test Visualize',
        description: 'This is a sample plugin to test using existing kibana visualizations',
        main: 'plugins/kibana_sample_plugin/test_vis_app',
        uses: [  // these are needed if you need to show exiting kibana visualizations
          'visTypes',
          'visResponseHandlers',
          'visRequestHandlers',
          'visEditorTypes',
          'savedObjectTypes',
          'spyModes',
          'fieldFormats',
        ],
      }
    },
    init(server) {
      server.injectUiAppVars('kibana_sample_plugin', async () => {
        return await server.getInjectedUiAppVars('kibana');
      });
    }
  });
}
