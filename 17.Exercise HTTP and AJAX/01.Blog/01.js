function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const postsSelect = document.getElementById('posts');

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    loadBtn.addEventListener('click', async () => {
        try {
            const response = await fetch(postsUrl);
            if (!response.ok) throw new Error('Failed to fetch posts');

            const data = await response.json();

            // Clear dropdown first
            postsSelect.innerHTML = '';

            for (const key in data) {
                const option = document.createElement('option');
                option.value = key; // Use object key!
                option.textContent = data[key].title;
                postsSelect.appendChild(option);
            }
        } catch (err) {
            console.error(err);
        }
    });

    viewBtn.addEventListener('click', async () => {
        const selectedId = postsSelect.value;

        try {
            const [postRes, commentsRes] = await Promise.all([
                fetch(`${postsUrl}/${selectedId}`),
                fetch(commentsUrl)
            ]);

            if (!postRes.ok || !commentsRes.ok) {
                throw new Error('Failed to fetch data');
            }

            const post = await postRes.json();
            const comments = await commentsRes.json();

            // Update title and body
            postTitle.textContent = post.title;
            postBody.textContent = post.body;

            // Clear and fill comments
            commentsList.innerHTML = '';
            Object.values(comments)
                .filter(c => c.postId === selectedId)
                .forEach(c => {
                    const li = document.createElement('li');
                    li.textContent = c.text;
                    commentsList.appendChild(li);
                });
        } catch (err) {
            console.error(err);
        }
    });
}

attachEvents();
