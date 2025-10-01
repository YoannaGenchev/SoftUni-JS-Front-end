function comments(input) {
    const users = new Set();
    const articles = new Set();
    const comments = {};

    for (let line of input) {
        if (line.startsWith('user ')) {
            users.add(line.split(' ')[1]);
        } else if (line.startsWith('article ')) {
            articles.add(line.split(' ')[1]);
        } else if (line.includes(' posts on ')) {
            const [userAndArticle, commentPart] = line.split(': ');
            const [user, article] = userAndArticle.split(' posts on ');
            const [title, content] = commentPart.split(', ');

            if (users.has(user) && articles.has(article)) {
                if (!comments[article]) {
                    comments[article] = [];
                }
                comments[article].push({ user, title, content });
            }
        }
    }

    const sortedArticles = Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length);

    for (let [article, commentsList] of sortedArticles) {
        console.log(`Comments on ${article}`);
        commentsList
            .sort((a, b) => a.user.localeCompare(b.user))
            .forEach(comment => {
                console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
            });
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
