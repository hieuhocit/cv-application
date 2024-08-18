import InputGroup from '../InputGroup';

export default function PersonalForm({profile, onChangePersonal}) {
  return (
    <div className='personal-form'>
      <div className='personal-input'>
        <InputGroup
          title='Full name'
          type='text'
          name='name'
          value={profile.name}
          placeholder='First and last name'
          onChange={onChangePersonal}
        />
      </div>
      <div className='personal-input'>
        <InputGroup
          title='Email'
          type='email'
          name='email'
          value={profile.email}
          placeholder='Enter email'
          onChange={onChangePersonal}
        />
      </div>
      <div className='personal-input'>
        <InputGroup
          title='Phone number'
          type='tel'
          name='phoneNumber'
          value={profile.phoneNumber}
          placeholder='Enter phone number'
          onChange={onChangePersonal}
        />
      </div>
      <div className='personal-input'>
        <InputGroup
          title='Address'
          type='text'
          name='address'
          value={profile.address}
          placeholder='City, Country'
          onChange={onChangePersonal}
        />
      </div>
    </div>
  );
}
