import PropTypes from 'prop-types';

function Message(props) {
  console.log('render');
  return <p className='message'>{props.text}</p>;
}

export default Message;

Message.defaultProps = {
  text: '',
};

Message.propTypes = {
  text: PropTypes.string,
};
