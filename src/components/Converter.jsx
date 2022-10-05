import { useState } from 'react';
import InputColor from './InputColor';
import Message from './Message';
import '../index.css';

function Converter() {
  const [color, setColor] = useState({
    value: '',
    background: '#FFFFF',
    result: '',
  });

  // Преобразование в rgb
  const convertToRGB = (color) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  // Проверка на валидность hex
  const validateColor = (value) => {
    const isValidColor = convertToRGB(value);
    if (isValidColor) {
      const { r, g, b } = isValidColor;
      setColor((prevColor) =>
        Object.assign({}, prevColor, {
          background: value,
          result: `rgb(${r},${g},${b})`,
        })
      );
    } else {
      setColor((prevColor) =>
        Object.assign({}, prevColor, {
          background: '#e95757',
          result: 'Error',
        })
      );
    }
  };

  // Обработка события ввода
  const changeHandler = (color) => {
    setColor((prevColor) => Object.assign({}, prevColor, { value: color }));
    if (color.length < 7) {
      setColor((prevColor) =>
        Object.assign({}, prevColor, {
          background: '#FFFFFF',
          result: '',
        })
      );
    } else {
      validateColor(color);
    }
  };

  return (
    <div className='converter' style={{ backgroundColor: color.background }}>
      <div className='converter__form'>
        <InputColor
          value={color.value}
          type='text'
          name='color'
          placeholder='hex'
          onChange={(e) => changeHandler(e.target.value)}
        />
        <Message text={color.result} />
      </div>
    </div>
  );
}

export default Converter;
