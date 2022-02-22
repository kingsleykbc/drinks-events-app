import React, { FC } from 'react';
import { EventCommentType } from '../../config/types';

const Comments: FC<{ data: EventCommentType[] }> = ({ data }) => {
	return (
		<div className='Comments'>
			<h3>Comments</h3>

      {data.length === 0 && <p>No comments...</p>}

			{data.map((item, index) => (
				<Comment key={item.timestamp + index} {...item} />
			))}

			{/* STYLE */}
			<style jsx>{`
				.Comments {
					border-top: var(--border);
					margin: 25px 0;
					padding-top: 25px;
				}

        p {
          margin-top: 20px;
        }
			`}</style>
		</div>
	);
};

export default Comments;

const Comment: FC<EventCommentType> = ({ user, message, timestamp }) => (
	<div className='Comment'>
		<img alt='profile' src={user.avatarUrl} />
		<div className='details'>
			<b>{user.name}</b>
			<p>{message}</p>
			<span>{new Date(timestamp).toLocaleString()}</span>
		</div>

		{/* STYLE */}
		<style jsx>{`
			.Comment {
				display: flex;
				gap: 15px;
				margin-top: 25px;
			}
			img {
				width: 45px;
				height: 45px;
				background: #cacaca;
				border-radius: 50%;
				overflow: hidden;
				margin-top: 5px;
			}
			p {
				margin: 10px 0;
			}
			span {
				font-size: 0.9rem;
				font-weight: bold;
				color: var(--lightTextColor);
			}
			.details {
				flex-grow: 1;
				border-bottom: var(--border);
				padding-bottom: 20px;
			}

      @media screen and (max-width: 500px){
        img {
				width: 35px;
				height: 35px;}
      }
		`}</style>
	</div>
);
