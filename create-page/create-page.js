import { createPost, redirectIfLoggedIn } from '../fetch-utils.js';

const taskForm = document.getElementById('task');
// const taskTitle = document.getElementById('task-name');
// const taskDate = document.getElementById('task-time');

taskForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const postInfo = new FormData(taskForm);

    const title = postInfo.get('title');
    const date = postInfo.get('date');

    await createPost(title, date);
    redirectIfLoggedIn();
});
