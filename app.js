/* Imports */
import { getPosts, getUser } from './fetch-utils.js';
import { renderPostIt } from './render-utils.js';
/* Get DOM Elements */
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create');
const bulletin = document.getElementById('bulletin-board');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const user = await getUser();

    if (user) {
        authButton.addEventListener('click', logout);
        authButton.textContent = 'Logout';
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/auth-page');
        });
        authButton.textContent = 'Login';
    }

    createButton.addEventListener('click', () => {
        location.replace('/create-page');
    });

    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
