import React, { useState } from "react";
import Link from "next/link";
// import firebase from "../utils/firebase";
import firebase from "../../utils/firebase";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSignUp = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Create a new user in Firebase Authentication
    //         await firebase.auth().createUserWithEmailAndPassword(email, password);

    //         // Get the current user and save additional data (username) in Firestore
    //         const currentUser = firebase.auth().currentUser;
    //         if (currentUser) {
    //             await firebase.firestore().collection("users").doc(currentUser.uid).set({
    //                 username,
    //                 email,
    //             });
    //         }

    //         // Redirect the user to the desired page after successful signup
    //         // For example, you can use router.push("/dashboard") from Next.js router
    //         console.log("Signup successful!");
    //     } catch (error) {
    //         console.error("Error while signing up:", error.message);
    //     }
    // };

    const handleSignUp = async (e) => {
        e.preventDefault();
    
        try {
            // Create a new user in Firebase Authentication
            await firebase.auth().createUserWithEmailAndPassword(email, password);
    
             // Store user data in the Realtime Database using a direct link
             await fetch("https://login-b6e02-default-rtdb.firebaseio.com/users.json", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    email,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            console.log("Signup successful!");
        } catch (error) {
            console.error("Error while signing up:", error.message);
        }
    };
    

    return (
        <>
            <div className="flex min-h-screen flex-col justify-center bg-gray-300 px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="images/profile.png" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input id="Username" name="Username" type="text" autoComplete="Username" value={username}
                                    onChange={(e) => setUsername(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                <Link href={'./Forgot'} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot Password</Link>


                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <Link href={'./Login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2" >Sign in</Link>
                    </p>
                </div>
            </div>
        </>
    );
};