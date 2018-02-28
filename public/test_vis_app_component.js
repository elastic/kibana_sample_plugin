import React, { Component } from 'react';
import { getVisualizeLoader } from 'ui/visualize/loader';

import {
  EuiSelect,
} from '@elastic/eui';

class TestVisApp extends Component {

  state = {
    visualizations: []
  };

  componentDidMount() {
    getVisualizeLoader().then(async (loader) => {
      const savedObjects = await loader.getVisualizationList();
      const visualizations = [
        { value: null, text: '' },
        ...savedObjects.map(savedObj => ({
          value: savedObj.id,
          text: savedObj.title,
        }))
      ];
      this.setState({ visualizations });
    });
  }

  onChangeVis = async (event) => {
    const id = event.target.value;
    const loader = await getVisualizeLoader();
    loader.embedVisualizationWithId(this.visContainer, id, {
      timeRange: {
        from: 'now-7d/d',
        to: 'now'
      }
    });
  };

  render() {
    return (
      <div className="test-vis-app">
        <EuiSelect
          options={this.state.visualizations}
          onChange={this.onChangeVis}
        />
        <div
          ref={el => this.visContainer = el}
          className="vis-container"
        />
      </div>
    );
  }

}

export { TestVisApp };
