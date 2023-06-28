import React from 'react';
import './Home.styles.scss';

type Props = {};

const Home: React.FC<Props> = (props) => {
  return (
    <div data-testid="Home" className="Home">
      Home
    </div>
  );
};

Home.propTypes = {};

export default Home;
