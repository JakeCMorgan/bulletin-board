export function renderPostIt(post) {
    const div = document.createElement('div');
    div.classList.add('post-it');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p1 = document.createElement('p');
    p1.textContent = post.date;

    div.append(h3, p1);

    return div;
}
