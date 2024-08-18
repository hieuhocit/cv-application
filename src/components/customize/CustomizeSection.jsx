import Layout from './Layout';
import Font from './Font';
import Color from './Color';
import FormHeader from '../form/FormHeader';
import '../../styles/CustomizeSection.css';

export default function CustomizeSection({
  onClearResume,
  onLoadExample,
  custom,
  onChangeColor,
  onChangeFont,
  onChangeLayout,
}) {
  return (
    <div className='customize-container'>
      <FormHeader
        onClearResume={onClearResume}
        onLoadExample={onLoadExample}
      />
      <Layout
        custom={custom}
        onChangeLayout={onChangeLayout}
      />
      <Color
        custom={custom}
        onChangeColor={onChangeColor}
      />
      <Font
        custom={custom}
        onChangeFont={onChangeFont}
      />
    </div>
  );
}
