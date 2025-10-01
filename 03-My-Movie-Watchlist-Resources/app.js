const loadBtn = document.getElementById('load-movies');
const addMovieBtn = document.getElementById('add-movie');
const editMovieBtn = document.getElementById('edit-movie');
const movieSection = document.getElementById('movies');
const movieForm = document.getElementsByTagName('form')[0];

const titleInput = document.getElementById('title');
const directorInput = document.getElementById('director');
const yearInput = document.getElementById('year');

function solution()
{
    loadBtn.addEventListener('click', loadMovies);

    addMovieBtn.addEventListener('click', addMovie);

    editMovieBtn.addEventListener('click', editMovie);
}

async function loadMovies()
{
    try
    {
        const response = await fetch('http://localhost:3030/jsonstore/movies');
        if (!response.ok)
        {
            throw new Error(`Error fetching movie: ${response.statusText}`);
        }

        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = '';

        const movies = await response.json();
        Object.values(movies).forEach(movie =>
        {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.id = movie._id;

            movieElement.innerHTML = `
              <div class="content">
                <p>${movie.title}</p>
                <p>${movie.director}</p>
                <p>${movie.year}</p>
              </div>
              <div class="buttons-container">
                <button class="change-btn">Edit</button>
                <button class="delete-btn">Remove</button>
              </div>
            `;

            const changeBtn = movieElement.querySelector('.change-btn');
            changeBtn.addEventListener('click', () =>
            {
                addMovieBtn.disabled = true;
                editMovieBtn.disabled = false;
                editMovieBtn.editedMovieId = movie._id;

                titleInput.value = movie.title;
                directorInput.value = movie.director;
                yearInput.value = movie.year;
            });

            const deleteBtn = movieElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', async () =>
            {
                try
                {
                    const deleteResponse = await fetch(`http://localhost:3030/jsonstore/movies/${movie._id}`,
                    {
                        method: 'DELETE'
                    });
                    if (!deleteResponse.ok)
                    {
                        throw new Error(`Error deleting movie: ${deleteResponse.statusText}`);
                    }
                    
                    loadMovies();
                }
                catch (error)
                {
                    console.error('Error deleting movie:', error);
                }
            });

            movieList.appendChild(movieElement);
        });
    }
    catch (error)
    {
        console.error('Error loading movie:', error);
    }
}

async function addMovie()
{
    const title = titleInput.value.trim();
    const director = directorInput.value.trim();
    const year = yearInput.value.trim();

    if (!title || !director || !year)
    {
        alert('All fields are required!');
        return;
    }

    const movieData = { title: title, director: director, year: year };

    try
    {
        const response = await fetch('http://localhost:3030/jsonstore/movies',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieData)
        });

        if (!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        movieForm.reset();
        loadMovies();
    }
    catch (error)
    {
        console.error('Error adding movie:', error);
    }
}

async function editMovie()
{
    const movieId = editMovieBtn.editedMovieId;

    const title = titleInput.value.trim();
    const director = directorInput.value.trim();
    const year = yearInput.value.trim();

    if (!movieId || !title || !director || !year)
    {
        alert('All fields are required!');
        return;
    }

    const movieData = { title: title, director: director, year: year, _id: movieId };

    try
    {
        const response = await fetch(`http://localhost:3030/jsonstore/movies/${movieId}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieData)
        });

        if (!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        editMovieBtn.disabled = true;
        addMovieBtn.disabled = false;
        movieForm.reset();
        loadMovies();
    }
    catch (error)
    {
        console.error('Failed to edit movie:', error);
        return;
    }
}

solution();