import { createPost, redirectIfLoggedIn } from '../fetch-utils.js';

const taskForm = document.getElementById('task');

taskForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const postInfo = new FormData(taskForm);

    const title = postInfo.get('title');
    const date = postInfo.get('date');

    await createPost(title, date);
    redirectIfLoggedIn();
});
