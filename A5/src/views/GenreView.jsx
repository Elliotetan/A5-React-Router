import styleGV from './GenreView.module.css';
import Header from '../components/header';
import Footer from '../components/Footer';
import GenrePanel from '../components/GenrePanel';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function GenreView() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedGenreId, setSelectedGenreId] = useState(28);
    const navigate = useNavigate();

    const genresList = [
        { genre: "Action", id: 28 },
        { genre: "Adventure", id: 12 },
        { genre: "Animation", id: 16 },
        { genre: "Crime", id: 80 },
        { genre: "Family", id: 10751 },
        { genre: "Fantasy", id: 14 },
        { genre: "History", id: 36 },
        { genre: "Mystery", id: 9648 },
        { genre: "Sci-Fi", id: 878 },
        { genre: "Western", id: 37 }
    ];

    useEffect(() => {
        const fetchur = async () => {
            const api = selectedGenreId
                ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenreId}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=28`;

            const response = await axios.get(api);
            setMovies(response.data.results);
        };

        fetchur();
    }, [selectedGenreId]);

    async function moviesByPage(page) {

        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}d&with_genres=${selectedGenreId}&page=${page}`
        );
        setMovies(response.data.results);
    }


    const handleClick = (genreId) => {
        setSelectedGenreId(genreId);
    }



    return (
        <>
            <Header />
            <div className={styleMV.mainSection}>
                <div className={styleMV.genrePanel}>
                    <GenrePanel genreList={genres} genreClick={handleClick} />
                    <div className={styleMV.paginationContainer}>
                        <p className={styleMV.pageNumber}>Page {page}</p>
                        <p className={pageTurning}>
                            <a onClick={() => {
                                if (page > 1) {
                                    setPage(page - 1), moviesByPage(page - 1)

                                }
                            }}>&lt;--<br /></a>
                            <a onClick={() => {
                                if (page < 50) {
                                    setPage(page + 1), moviesByPage(page + 1)
                                }
                            }}>--&gt;</a></p>
                    </div>
                </div>
                <div className={styleGV.movieView}></div>
                {/* Movie View */}
            </div>
            <Footer />
        </>
    );
}

export default GenreView;