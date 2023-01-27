import { redirectIfLoggedIn, signInUser, signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const singInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signInUser(singInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

redirectIfLoggedIn();
