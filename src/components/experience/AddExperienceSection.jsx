import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import '../../styles/AddExperienceSection.css';

import ExperienceForm from './ExperienceForm';

export default function AddExperienceSection({
  isExpanded = false,
  onClickExpand,
  experiences,
  onChangeExperience,
  onDeleteExperience,
  onCancelExperience,
  onChangeShowExperience,
  onAddExperience,
}) {
  const [experience, setExperience] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className='experience-container'>
      <div
        onClick={onClickExpand}
        className={isExpanded ? 'experience-header expand' : 'experience-header'}
      >
        <h3>
          <FontAwesomeIcon icon='fa-solid fa-briefcase' />
          Experience
        </h3>
        <FontAwesomeIcon icon='fa-solid fa-angle-down' />
      </div>

      <div className='experience-body'>
        {experience ? (
          <ExperienceForm
            index={experience.index}
            experience={experience.experience}
            experiences={experiences}
            onChangeExperience={onChangeExperience}
            onDeleteExperience={onDeleteExperience}
            onCancelExperience={onCancelExperience}
            onHandleSetExperience={setExperience}
            isAdding={isAdding}
            onAdding={setIsAdding}
          />
        ) : (
          <>
            {experiences.map((experience, i) => (
              <div
                key={i}
                className='experience-item'
                onClick={() => {
                  setExperience({
                    experience: experience,
                    index: i,
                  });
                }}
              >
                <p className='school-name'>{experience.company}</p>
                {experience.show ? (
                  <FontAwesomeIcon
                    icon='fa-regular fa-eye'
                    onClick={(e) => {
                      e.stopPropagation();
                      onChangeShowExperience(i, false);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon='fa-regular fa-eye-slash'
                    onClick={(e) => {
                      e.stopPropagation();
                      onChangeShowExperience(i, true);
                    }}
                  />
                )}
              </div>
            ))}
            <div className='create-form'>
              <Button
                className='btn-add'
                onClick={() => {
                  const newExperience = {
                    company: '',
                    position: '',
                    start: '',
                    end: '',
                    location: '',
                    desc: '',
                    show: true,
                  };
                  onAddExperience(newExperience);
                  setExperience({
                    experience: newExperience,
                    index: experiences.length,
                  });
                  setIsAdding(true);
                }}
              >
                <FontAwesomeIcon icon='fa-solid fa-plus' />
                Experience
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
