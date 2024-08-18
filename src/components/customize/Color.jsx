import InputGroup from '../InputGroup';

export default function Color({custom,onChangeColor}) {
  return (
    <div className='custom-color'>
      <h3>Color</h3>
      <InputGroup
        title='Accent Color'
        value={custom.color}
        name='color'
        onChange={onChangeColor}
        type='color'
      />
    </div>
  );
}
