import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'this is feedback item 1',
			rating: 10,
		},
		{
			id: 2,
			text: 'this is feedback item 2',
			rating: 4,
		},
		{
			id: 3,
			text: 'this is feedback item 3',
			rating: 7,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm(`Are you sure you want to delete the item with the id: ${id} `)) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit }}>
			{children}
		</FeedbackContext.Provider>
	);
};
export default FeedbackContext;
