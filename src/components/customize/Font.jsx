export default function Font({ custom, onChangeFont }) {
  return (
    <div className='custom-font'>
      <h3>Font</h3>

      <div className='btns'>
        <button
          onClick={() => onChangeFont('serif')}
          className={custom.font === 'serif' ? 'serif-btn selected' : 'serif-btn'}
        >
          <span>Aa</span>
          Serif
        </button>
        <button
          onClick={() => onChangeFont('sans-serif')}
          className={custom.font === 'sans-serif' ? 'sans-btn selected' : 'sans-btn'}
        >
          <span>Aa</span>
          Sans
        </button>
        <button
          onClick={() => onChangeFont('monospace')}
          className={custom.font === 'monospace' ? 'mono-btn selected' : 'mono-btn'}
        >
          <span>Aa</span>
          Mono
        </button>
      </div>
    </div>
  );
}
