import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warnning!</h4>
					<div>Are you sure want to do that ?</div>
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="AT 12:45PM"
					content="Nice blog post"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetails
					avatar={faker.image.avatar()}
					author="Tony"
					timeAgo="AT 10:05AM"
					content="I like the subject"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetails
					avatar={faker.image.avatar()}
					author="Johny"
					timeAgo="AT 08:45PM"
					content="I like the content"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
