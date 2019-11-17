export default {
  option: (provided, state) => ({
    ...provided,
    textAlign: 'right'
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid grey',
    transition: 'all .2s ease',
    width: '300px'
  }),
  menu: (provided) => ({
    ...provided,
    width: '300px'
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.isFocused && state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
  }),
}