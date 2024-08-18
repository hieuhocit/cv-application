import formatDate from '../../utils/formatDate';

export default function EducationInfo({ educations }) {
  return (
    <div className='education-info-container'>
      {educations.length > 0 && <h3>Education</h3>}
      {educations.map((education, i) => (
        <div
          key={i}
          className='education-info'
        >
          <div className='education-info-group'>
            <p className='education-info-dates'>
              {formatDate(education.start)} 
              {' '}{education.start !== '' && education.end !== '' && <span>-</span>}{' '}
              {formatDate(education.end)}
            </p>
            <p className='education-info-location'>{education.location}</p>
          </div>
          <div className='education-info-group'>
            <p className='education-info-school-name bold'>{education.school}</p>
            <p className='education-info-degree'>{education.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
