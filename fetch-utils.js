const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}
export async function getPosts() {
    const resp = await client.from('posts').select('*');
    return checkError(resp);
}

export async function createPost(post) {
    const resp = await client.from('posts').insert(post);
    return checkError(resp);
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/auth-page');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/');
    }
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
