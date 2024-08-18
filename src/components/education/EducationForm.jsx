import { useState } from 'react';
import InputGroup from '../InputGroup';
import Buttons from '../Buttons';

import formatFullDate from '../../utils/formatFullDate';
import makeACopy from '../../utils/makeACopy';

export default function EducationForm({
  index,
  education,
  educations,
  onHandleSetEducation,
  onChangeEducation,
  onDeleteEducation,
  onCancelEducation,
  isAdding,
  onAdding,
}) {
  const [prevEducations, setPrevEducations] = useState(makeACopy(educations));

  return (
    <>
      <div className='education-form'>
        <div className='education-input'>
          <InputGroup
            title='School'
            type='text'
            name='school'
            value={education?.school || ''}
            placeholder='Enter School / University'
            onChange={(e) => onChangeEducation(e, index)}
          />
        </div>
        <div className='education-input'>
          <InputGroup
            title='Degree'
            type='text'
            name='degree'
            value={education?.degree || ''}
            placeholder='Enter Degree / Field Of Study'
            onChange={(e) => onChangeEducation(e, index)}
          />
        </div>
        <div className='education-input'>
          <InputGroup
            title='Start Date'
            type='date'
            name='start'
            value={formatFullDate(education?.start)}
            onChange={(e) => onChangeEducation(e, index)}
          />
        </div>
        <div className='education-input'>
          <InputGroup
            title='End Date'
            type='date'
            name='end'
            value={formatFullDate(education?.end)}
            onChange={(e) => onChangeEducation(e, index)}
          />
        </div>
        <div className='education-input'>
          <InputGroup
            title='Location'
            type='text'
            name='location'
            value={education?.location || ''}
            placeholder='Enter Location'
            onChange={(e) => onChangeEducation(e, index)}
          />
        </div>
        <Buttons
          index={index}
          prevItem={prevEducations}
          onHandleSetItem={onHandleSetEducation}
          onDelete={onDeleteEducation}
          onCancel={onCancelEducation}
          isAdding={isAdding}
          onAdding={onAdding}
        />
      </div>
    </>
  );
}
