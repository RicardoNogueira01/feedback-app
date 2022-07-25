import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item: { id, rating, text } }) {
	const { deleteFeedback } = useContext(FeedbackContext);
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				onClick={() => {
					deleteFeedback(id);
				}}
				className='close'>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
