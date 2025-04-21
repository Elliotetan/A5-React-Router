import styleGP from './GenrePanel.module.css';

function GenrePanel({ genreList, genreClick }) {
    return (
        <div className={styleGP.panelContainer}>
            {genresList.map((genre) => (
                <li key={genre.id} onClick={() => genreID(genre.id)}>{genre.genre}</li>
            ))}
        </div>
    )
}

export default GenrePanel;