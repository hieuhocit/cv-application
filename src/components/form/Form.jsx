import FormHeader from './FormHeader';
import FormBody from './FormBody';

import '../../styles/Form.css';

export default function Form({
  profile,
  onClearResume,
  onLoadExample,
  onChangePersonal,
  onChangeEducation,
  onDeleteEducation,
  onCancelEducation,
  onChangeShowEducation,
  onAddEducation,
  onChangeExperience,
  onDeleteExperience,
  onCancelExperience,
  onChangeShowExperience,
  onAddExperience,
}) {
  return (
    <div className='form-container'>
      <FormHeader
        onClearResume={onClearResume}
        onLoadExample={onLoadExample}
      />
      <FormBody
        profile={profile}
        onChangePersonal={onChangePersonal}

        onChangeEducation={onChangeEducation}
        onDeleteEducation={onDeleteEducation}
        onCancelEducation={onCancelEducation}
        onChangeShowEducation={onChangeShowEducation}
        onAddEducation={onAddEducation}

        onChangeExperience={onChangeExperience}
        onDeleteExperience={onDeleteExperience}
        onCancelExperience={onCancelExperience}
        onChangeShowExperience={onChangeShowExperience}
        onAddExperience={onAddExperience}
      />
    </div>
  );
}
