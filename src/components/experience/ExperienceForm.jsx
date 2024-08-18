import { useState } from 'react';

import InputGroup from '../InputGroup';
import Buttons from '../Buttons';

import formatFullDate from '../../utils/formatFullDate';
import makeACopy from '../../utils/makeACopy';

export default function ExperienceForm({
  index,
  experience,
  experiences,
  onChangeExperience,
  onDeleteExperience,
  onCancelExperience,
  onHandleSetExperience,
  isAdding,
  onAdding,
}) {
  const [prevExperiences, setPrevExperiences] = useState(makeACopy(experiences));

  return (
    <>
      <div className='experience-form'>
        <div className='experience-input'>
          <InputGroup
            title='Company Name'
            type='text'
            name='company'
            value={experience?.company || ''}
            placeholder='Enter Company Name'
            onChange={(e) => onChangeExperience(e,index)}
          />
        </div>
        <div className='experience-input'>
          <InputGroup
            title='Position Title'
            type='text'
            name='position'
            value={experience?.position || ''}
            placeholder='Enter Position Title'
            onChange={(e) => onChangeExperience(e,index)}
          />
        </div>
        <div className='experience-input'>
          <InputGroup
            title='Start Date'
            type='date'
            name='start'
            value={formatFullDate(experience?.start)}
            onChange={(e) => onChangeExperience(e,index)}
          />
        </div>
        <div className='experience-input'>
          <InputGroup
            title='End date'
            type='date'
            name='end'
            value={formatFullDate(experience?.end)}
            onChange={(e) => onChangeExperience(e,index)}
          />
        </div>
        <div className='experience-input'>
          <InputGroup
            title='Location'
            type='text'
            name='location'
            value={experience?.location || ''}
            placeholder='Enter Location'
            onChange={(e) => onChangeExperience(e,index)}
          />
        </div>
        <div className='experience-input'>
          <InputGroup
            title='Description'
            type='textarea'
            name='desc'
            value={experience?.desc || ''}
            placeholder='Enter Description'
            onChange={(e) => onChangeExperience(e,index)}
          />
        </div>
        <Buttons 
        index={index}
        prevItem={prevExperiences}
        onHandleSetItem={onHandleSetExperience}
        onDelete={onDeleteExperience}
        onCancel={onCancelExperience}
        isAdding={isAdding}
        onAdding={onAdding}
        />
      </div>
    </>
  );
}
