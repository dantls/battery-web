import AsyncSelect from 'react-select/async';

export function Select(options){
  return (
    <AsyncSelect 
    cacheOptions 
    defaultOptions 
    loadOptions={options} />
  )
}