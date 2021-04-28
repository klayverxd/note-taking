import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import {Avatar, makeStyles} from '@material-ui/core';
import {blue, lightBlue, purple} from '@material-ui/core/colors';

const useStyles = makeStyles({
	avatar: {
		backgroundColor: note => {
			if (note.category === 'work') {
				return purple[300];
			}
			if (note.category === 'money') {
				return lightBlue[400];
			}
			if (note.category === 'todos') {
				return purple[700];
			}
			return blue[500];
		},
	},
	header: {
		backgroundColor: '#F1F0FB',
	},
});

export default function NoteCard({note, handleDelete}) {
	const classes = useStyles(note);

	return (
		<div>
			<Card elevation={1}>
				<CardHeader
					className={classes.header}
					avatar={
						<Avatar className={classes.avatar}>
							{note.category[0].toUpperCase()}
						</Avatar>
					}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
