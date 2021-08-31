import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Typography, Paper } from "@material-ui/core";

import { useHitCounter } from "../fir_helpers";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
}));

export default function HitCounter() {
	const classes = useStyles();
	var hits = useHitCounter();
	return (
		<div className={classes.root}>
			<Paper elevation={3}>
				<Typography variant="body1">Hits: {hits}</Typography>
			</Paper>
		</div>
	);
}
