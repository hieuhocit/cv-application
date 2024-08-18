export default function Layout({ custom, onChangeLayout }) {
  return (
    <div className='custom-layout'>
      <h3>Layout</h3>
      <div className='layouts'>
        <button
          className='layout'
          onClick={() => onChangeLayout('top')}
        >
          <div className={custom.layout === 'top' ? 'top selected' : 'top'}></div>
          Top
        </button>
        <button
          className='layout'
          onClick={() => onChangeLayout('left')}
        >
          <div className={custom.layout === 'left' ? 'left selected' : 'left'}></div>
          Left
        </button>
        <button
          className='layout'
          onClick={() => onChangeLayout('right')}
        >
          <div className={custom.layout === 'right' ? 'right selected' : 'right'}></div>
          Right
        </button>
      </div>
    </div>
  );
}
