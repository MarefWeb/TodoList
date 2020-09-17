import React, { Component } from 'react'

import './SearchPanel.css'

export default class extends Component {

  state = {
    keyWords: ''
  };

  onChangeKeyWords = (e) => {
    const searchingValue = e.target.value;
    const { changedKeyWords } = this.props;

    this.setState({
      keyWords: searchingValue
    });

    changedKeyWords(searchingValue);
  };

  render() {
    const { keyWords } = this.state;
    const { onlyActive, onlyDone, changedFilter } = this.props;

    let allClassName = '',
        activeClassName = '',
        doneClassName = '';

    if(onlyActive) {
      activeClassName = 'active'
    }

    else if(onlyDone) {
      doneClassName = 'active'
    }

    else {
      allClassName = 'active'
    }

    return(
      <div className="searchPanel">
        <input type="text" placeholder="Type to search" onChange={this.onChangeKeyWords} value={keyWords} />
        <button className={allClassName}
                onClick={() => changedFilter('all')}>
          All
        </button>
        <button className={activeClassName}
                onClick={() => changedFilter('onlyActive')}>
          Active
        </button>
        <button className={doneClassName}
                onClick={() => changedFilter('onlyDone')}>
          Done
        </button>
      </div>
    );
  }
}