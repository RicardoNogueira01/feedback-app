import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from './Card';

function FeedbackItem({ item: { id, rating, text }, handleDelete }) {
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button
				onClick={() => {
					handleDelete(id);
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
