import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapProps = state => {
    return {
        favorites: state.fave.favorites
    }
}


export default connect(mapProps, {})(FavoriteMovieList);