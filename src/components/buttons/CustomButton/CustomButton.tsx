import React from 'react';
import './CustomButton.styles.scss';

type Props = {};

const CustomButton: React.FC<Props> = (props) => {
  return <div data-testid="CustomButton">CustomButton</div>;
};

CustomButton.propTypes = {};

export default CustomButton;
