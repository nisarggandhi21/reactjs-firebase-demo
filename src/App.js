import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import firebase from "firebase/app";
import "firebase/auth";
import HitCounter from "./components/HitCounter";

// Custom Functions
import { signInWithGooglePopUp } from "./fir_helpers";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

export default function App() {
	const classes = useStyles();

	const [user, setUser] = useState(null);

	useEffect(() => {
		// FIR Auth State Observer
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				var uid = user.uid;
				console.log(`User has signed in with UID: ${uid}`);
				setUser(uid);
			} else {
				// User is signed out
				console.log("User is not signed in.");
				setUser(null);
			}
		});
	}, []);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Firebase Demo
					</Typography>
					{user ? (
						<div style={{ display: "flex", alignItems: "center" }}>
							<Typography variant="body1">{user}</Typography>
							<Button
								color="inherit"
								onClick={() => {
									// signout
									firebase
										.auth()
										.signOut()
										.then(() => {
											console.log("User has signed out.");
										})
										.catch((err) => {
											console.log(
												"Error signing out: ",
												err
											);
										});
								}}
							>
								Signout
							</Button>
						</div>
					) : (
						<Button
							color="inherit"
							onClick={() => {
								signInWithGooglePopUp();
							}}
						>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<HitCounter></HitCounter>
		</div>
	);
}
