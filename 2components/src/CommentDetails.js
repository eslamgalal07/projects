import React from 'react';

const CommentDetails = (props) => {
	return (
		<div className="comment">
			<a className="avatar" href="/">
				<img src={props.avatar} alt="AVATAR" />
			</a>
			<div className="content">
				<a className="author" href="/">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.content}</div>
			</div>
		</div>
	);
};

export default CommentDetails;
