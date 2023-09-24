
import Header from './components/Header';
import Movies from './components/Movies';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Header />
      <Movies />
    </Wrapper>
  );
}
const Wrapper = styled.main``;

export default App;
