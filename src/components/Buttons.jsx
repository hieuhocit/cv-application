import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Buttons({
  index,
  prevItem,
  onDelete,
  onCancel,
  onHandleSetItem,
  isAdding,
  onAdding,
}) {
  return (
    <div className='btn-group'>
      <Button
        className='btn-delete'
        onClick={() => {
          onHandleSetItem(null);
          onDelete(index);
          if (isAdding) onAdding(false);
        }}
      >
        <FontAwesomeIcon icon='fa-solid fa-trash' />
        Delete
      </Button>
      <div className='main-buttons'>
        <Button
          className='btn-cancel'
          onClick={() => {
            onHandleSetItem(null);
            if (!isAdding) onCancel(prevItem);
            else {
              onDelete(index);
              onAdding(false);
            }
          }}
        >
          Cancel
        </Button>
        <Button
          className='btn-save'
          onClick={() => {
            onHandleSetItem(null);
            if (isAdding) onAdding(false);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
