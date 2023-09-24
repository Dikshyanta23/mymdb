import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <div className="header-center">
        <h1>My Movies</h1>
        <p>
          The list below contains all the movies that I have watched. Upon
          clicking a movie, the user will be able to view a small set of
          information such as release date, category, title, etc. and my personal take on the movie as description.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    h1 {
      text-align: center;
      margin: 2rem 0;
    }
      p {
        line-height: 2;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }
`

export default Header
