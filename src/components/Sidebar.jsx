import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Sidebar.css';

export default function Sidebar({ page, onChangePage }) {
  return (
    <div className='sidebar'>
      <button
        className={page === 'content' ? 'selected' : ''}
        onClick={() => onChangePage('content')}
      >
        <FontAwesomeIcon icon='fa-solid fa-file-pen' />
        Content
      </button>

      <button
        className={page === 'customize' ? 'selected' : ''}
        onClick={() => onChangePage('customize')}
      >
        <FontAwesomeIcon icon='fa-solid fa-gear' />
        Customize
      </button>
    </div>
  );
}
