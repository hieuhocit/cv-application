import PersonalForm from './PersonalForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PersonalSection({profile, onChangePersonal}) {
  return (
    <div className='personal-container'>
      <div className='personal-header'>
        <h3>
          <FontAwesomeIcon icon='fa-solid fa-user' />
          Personal Details
        </h3>
      </div>
      <div className="personal-body">
        <PersonalForm profile={profile} onChangePersonal={onChangePersonal}/>
      </div>
    </div>
  );
}
