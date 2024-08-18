import formatDate from '../../utils/formatDate';

export default function ExperienceInfo({ experiences }) {
  return (
    <div className='experience-info-container'>
      {experiences.length > 0 && <h3>Professional Experience</h3>}
      {experiences.map((experience, i) => (
        <div
          key={i}
          className='experience-info'
        >
          <div className='experience-info-group'>
            <p className='experience-info-dates'>
              {formatDate(experience.start)} 
              {' '}{experience.start !== '' && experience.end !== '' && <span>-</span>}{' '}
              {formatDate(experience.end)}
            </p>
            <p className='experience-info-location'>{experience.location}</p>
          </div>
          <div className='experience-info-group'>
            <p className='experience-info-company-name bold'>{experience.company}</p>
            <p className='experience-info-position'>{experience.position}</p>
            <p className='experience-info-desc'>{experience.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
