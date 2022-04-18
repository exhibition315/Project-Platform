import React, { useState, useCallback } from 'react';
import { PROJECT_TYPES } from '@common/constants';
import { SwitchContainer, SwitchButton as Button } from './styles';

const SwitchButton = () => {
  const [currentType, setCurrentType] = useState('01');

  const onClick = useCallback((key) => {
    setCurrentType(key);
  }, [currentType]);

  return (
    <SwitchContainer>
      {Object.keys(PROJECT_TYPES).map((key) => {
        const project = PROJECT_TYPES[key];
        const active = project.key === currentType;
        return (
          <Button key={project.key} active={active} onClick={() => onClick(project.key)}>
            {project.value}
          </Button>
        );
      })}
    </SwitchContainer>
  );
};

export default SwitchButton;
