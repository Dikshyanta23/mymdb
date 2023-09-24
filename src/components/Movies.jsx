import React, { useState } from 'react'
import { useGlobalContext } from '../FetchMovies'
import Buttonbar from './Buttonbar';
import styled from 'styled-components';

const Movies = () => {

    const {movies, getData} = useGlobalContext();
  return (
    <Wrapper>
      <Buttonbar />
      <div className="movies">
        {movies.map((item) => {
          const {title, img, rating, released, description, category } = item;
          return (
            <article key={title}>
                <img src={img} alt={title} />
                <div className="text">
                <h3>{title}</h3>
                <h4>Release Date: {released}</h4>
                <h4>Rating: {rating}</h4>
                <h4>Category: {category}</h4>
                <p>"{description}"</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .btn-bar {
    button {
      padding: 0.5rem 0;
      width: 8rem;
    }
    width: 95vw;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .movies {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    gap: 3rem;
    justify-content: center;
  }
  article {
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0rem;
    width: 90vw;
    transition: var(--transition);
    background: var(--white);
    padding: 1rem;

    img {
      width: 300px;
      height: 270px;
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
  }
  .text {
    width: 95vw;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 0.75rem;

  }
  article:hover {
    scale: 1.05;
    box-shadow: var(--shadow-4);
  }
  .img-container {
    display: flex;
    align-items: center;
  }
  .btn1 {
    border-color: transparent;
    background: transparent;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .btn1:hover {
    cursor: pointer;
    color: var(--primary-500);
  }
  .active {
    border-bottom: 2px solid var(--primary-500);
    color: var(--primary-500);
  }
`;

export default Movies
