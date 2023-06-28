import React from 'react';
import './TemplateName.styles.scss';

type Props = {};

const TemplateName: React.FC<Props> = (props) => {
  return (
    <div data-testid="TemplateName" className="TemplateName">
      TemplateName
    </div>
  );
};

TemplateName.propTypes = {};

export default TemplateName;
