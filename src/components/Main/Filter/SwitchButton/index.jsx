import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PROJECT_TYPE } from '@store/main/actions';
import { PROJECT_TYPES } from '@common/constants';
import { SwitchContainer, SwitchButton as Button } from './styles';

const SwitchButton = () => {
  const dispatch = useDispatch();
  const { project: currentType } = useSelector((state) => state.main);

  const onClick = useCallback(
    (key) => {
      dispatch(UPDATE_PROJECT_TYPE.ACTION(key));
    },
    [currentType],
  );

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
