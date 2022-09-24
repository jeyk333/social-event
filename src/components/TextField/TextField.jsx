import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

const TextField = ({ id, name, value, handleChange, label, type, isError }) => {
  return (
    <div className='textfield'>
      <label htmlFor={id}>{label}</label>
      {type === 'datepicker' ? (
        <DatePicker
          selected={value}
          onChange={(date) => handleChange(date)}
          dateFormat='MMMM d, yyyy h:mm aa'
          showTimeSelect
          className='datepicker'
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
      {isError ? <p className='error'>{isError}</p> : null}
    </div>
  );
};

export default TextField;
