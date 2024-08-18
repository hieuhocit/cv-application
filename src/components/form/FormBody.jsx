import { useState } from 'react';

import PersonalSection from '../personal-info/PersonalSection';
import AddEducationSection from '../education/AddEducationSection';
import AddExperienceSection from '../experience/AddExperienceSection';

export default function FormBody({
  profile,
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
  const [indexExpanded, setIndexExpanded] = useState(null);
  const handleClickExpand = (index) => {
    const newIndex = index === indexExpanded ? null : index;
    setIndexExpanded(newIndex);
  };

  return (
    <div className='form-body'>
      <PersonalSection
        profile={profile}
        onChangePersonal={onChangePersonal}
      />
      <AddEducationSection
        isExpanded={indexExpanded === 0}
        onClickExpand={() => handleClickExpand(0)}
        educations={profile.educations}
        onChangeEducation={onChangeEducation}
        onDeleteEducation={onDeleteEducation}
        onCancelEducation={onCancelEducation}
        onChangeShowEducation={onChangeShowEducation}
        onAddEducation={onAddEducation}
      />
      <AddExperienceSection
        isExpanded={indexExpanded === 1}
        onClickExpand={() => handleClickExpand(1)}
        experiences={profile.experiences}

        onChangeExperience={onChangeExperience}
        onDeleteExperience={onDeleteExperience}
        onCancelExperience={onCancelExperience}
        onChangeShowExperience={onChangeShowExperience}
        onAddExperience={onAddExperience}
      />
    </div>
  );
}
