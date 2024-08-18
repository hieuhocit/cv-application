import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormHeader({onClearResume, onLoadExample}) {
  return (
    <div className='form-header'>
      <button className='clear' onClick={onClearResume}>
        <FontAwesomeIcon icon='fa-solid fa-trash' />
        Clear Resume
      </button>
      <button onClick={onLoadExample} className='load'>Load Example</button>
    </div>
  );
}
