import React from 'react';
import Select from 'react-select/async-creatable';
import customStyles from './options';

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' }
];

class Dropdown extends React.Component {
  fetchData = (inputValue) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { value: 'shariq', label: 'Shariq' },
          { value: 'ali', label: 'Ali' },
          { value: 'asadi', label: 'Asadi' },
          { value: 'orchestra', label: 'Orchestra' }
        ])
      }, 2000)
    })
  }
  handleChange = (newValue, actionMeta) => {
    let { action } = actionMeta;
    if (action === 'create-option') {
      console.log('backend request send')
    }
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  createLabel = (inputValue) => (
    <h6 style={{}}>Create Topic: {inputValue}</h6>
  );

  noOptionMessage = () => (
    <p style={{}}>hello</p>
  );

  render() {
    return (
      <Select
        allowCreateWhileLoading
        isMulti

        menuIsOpen
        createOptionPosition={'first'}
        formatCreateLabel={this.createLabel}
        onChange={this.handleChange}
        loadOptions={this.fetchData}
        placeholder='have some things to select'
        styles={customStyles}
        noOptionsMessage={this.noOptionMessage}
      />
    );
  }
};

export default Dropdown;