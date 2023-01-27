export function renderPostIt(post) {
    const div = document.createElement('div');
    div.classList.add('post-it');

    const h3 = document.createElement('h3');
    h3.textContent = post.title;

    const p1 = document.createElement('p');
    p1.textContent = post.description;
    const p2 = document.createElement('p');
    p2.textContent = post.contact;
    p2.classList.add('contact');

    div.append(h3, p1, p2);

    return div;
}
