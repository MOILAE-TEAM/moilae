// components/RadioGroup.js
import React from 'react';
import useRadioStore from '../store/useRadioStore';

function RadioGroup() {
  const { selected, setSelected } = useRadioStore();

  return (
    <div>
      <input
          type="radio"
          name="choice"
          value="option1"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />
      <label>
        Option 1
      </label>
      <input
          type="radio"
          name="choice"
          value="option2"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />
      <label>
        
        Option 2
      </label>

      <p>선택된 값: {selected}</p>
    </div>
  );
}

export default RadioGroup;
