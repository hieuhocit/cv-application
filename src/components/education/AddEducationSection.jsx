import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import EducationForm from './EducationForm';

export default function AddEducationSection({
  isExpanded = false,
  onClickExpand,
  educations,
  onChangeEducation,
  onDeleteEducation,
  onCancelEducation,
  onChangeShowEducation,
  onAddEducation,
}) {
  const [education, setEducation] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <div className='education-container'>
        <div
          onClick={onClickExpand}
          className={isExpanded ? 'education-header expand' : 'education-header'}
        >
          <h3>
            <FontAwesomeIcon icon='fa-solid fa-graduation-cap' />
            Education
          </h3>
          <FontAwesomeIcon icon='fa-solid fa-angle-down' />
        </div>

        <div className='education-body'>
          {education !== null ? (
            <EducationForm
              index={education.index}
              education={education.education}
              educations={educations}
              onChangeEducation={onChangeEducation}
              onDeleteEducation={onDeleteEducation}
              onHandleSetEducation={setEducation}
              onCancelEducation={onCancelEducation}
              isAdding={isAdding}
              onAdding={setIsAdding}
            />
          ) : (
            <>
              {educations.map((education, i) => (
                <div
                  key={i}
                  className='education-item'
                  onClick={() => {
                    setEducation({
                      education: education,
                      index: i,
                    });
                  }}
                >
                  <p className='school-name'>{education.school}</p>
                  {education.show ? (
                    <FontAwesomeIcon
                      icon='fa-regular fa-eye'
                      onClick={(e) => {
                        e.stopPropagation();
                        onChangeShowEducation(i, false);
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon='fa-regular fa-eye-slash'
                      onClick={(e) => {
                        e.stopPropagation();
                        onChangeShowEducation(i, true);
                      }}
                    />
                  )}
                </div>
              ))}

              <div className='create-form'>
                <Button
                  className='btn-add'
                  onClick={() => {
                    const newEducation = {
                      school: '',
                      degree: '',
                      start: '',
                      end: '',
                      location: '',
                      show: true,
                    };
                    onAddEducation(newEducation);
                    setEducation({
                      education: newEducation,
                      index: educations.length,
                    });
                    setIsAdding(true);
                  }}
                >
                  <FontAwesomeIcon icon='fa-solid fa-plus' />
                  Education
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
