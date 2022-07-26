import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	//fetch feedback
	const fetchFeedback = async () => {
		const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc');
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

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

	const updateFeedback = (id, updatedItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
	};

	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback, isLoading }}>
			{children}
		</FeedbackContext.Provider>
	);
};
export default FeedbackContext;
