// video number 82
// part no 1
export const getMoviesData = async() => {
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896196&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const data = response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

// part no 2 app.jsx
// part no 3 get the data of the api by using the useloaderdata() movies.jsx
// part no 4 cart.jsx
// part no 5 CaretPosition.css

// loading state in react