import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PersonalInfo({ profile }) {
  return (
    <div className='personal-info'>
      <h3 className='personal-info-name'>{profile.name}</h3>
      <div className='personal-info-contact'>
        <div>
          {profile.email !== '' && <FontAwesomeIcon icon='fa-solid fa-envelope' />}
          <p>{profile.email}</p>
        </div>
        <div>
          {profile.phoneNumber !== '' && <FontAwesomeIcon icon='fa-solid fa-phone' />}
          <p>{profile.phoneNumber}</p>
        </div>
        <div>
          {profile.address !== '' && <FontAwesomeIcon icon='fa-solid fa-location-dot' />}
          <p>{profile.address}</p>
        </div>
      </div>
    </div>
  );
}
