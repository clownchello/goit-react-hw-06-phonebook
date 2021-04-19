import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/action';
import { getFilter } from '../../redux/selectors';
import st from './ContactsFilter.module.css';

const ContactsFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={st.label}>
      Find contact
      <input
        className={st.input}
        type="text"
        value={value}
        onChange={event =>
          dispatch(contactsActions.changeFilter(event.target.value))
        }
      />
    </label>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string,
};

export default ContactsFilter;
