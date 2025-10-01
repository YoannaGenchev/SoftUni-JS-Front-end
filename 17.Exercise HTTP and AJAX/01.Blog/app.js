function attachEvents() {
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const selectPosts = document.getElementById('posts');
    const viewBtnEl = document.getElementById('btnViewPost');
    const titleH1El = document.getElementById('post-title');
    const bodyPEl = document.getElementById('post-body');
    const commentUlEl = document.getElementById('post-comments');

    loadPostsButton.addEventListener('click', async () =>
    {
        const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';

        try {
            const response = await fetch(postsUrl);
            if (!response.ok) {
                throw new Error('Error fetching posts');
            }

            const postsData = await response.json();

            selectPosts.innerHTML = '';

            Object.values(postsData).forEach(postData => {
                const optionElement = document.createElement('option');
                optionElement.value = postData.id;
                optionElement.textContent = postData.title;
                selectPosts.appendChild(optionElement);
            });
        } catch (error) {
            console.error('Failed to load posts:', error);
        }
    });

    viewBtnEl.addEventListener('click', async () => {;
        const selectedPostId = selectPosts.value;
        
        const postRes = await fetch(`http://localhost:3030/jsonstore/blog/posts/`);
        const postsData = await postRes.json();

        const posArr = Object.values(postsData);
        const selectedPost = posArr.find(p => p.id === selectedPostId);

        titleH1El.textContent = selectedPost.title;
        bodyPEl.textContent = selectedPost.body;

        const commentsRes = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const commentsData = await commentsRes.json();

        commentUlEl.innerHTML = '';

        const commentsArr = Object.values(commentsData);
        const filteredComments = commentsArr.filter(c => c.postId === selectedPostId);

        filteredComments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment.text;
            commentUlEl.appendChild(li);
        });
    });
}

attachEvents();
