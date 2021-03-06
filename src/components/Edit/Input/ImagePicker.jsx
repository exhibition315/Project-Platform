import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CoverContainer, CoverContent, Cover, CoverHint } from './styles';

const ImagePicker = ({ field }) => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    if (field.value) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setBgImage(fileReader.result);
      };
      fileReader.readAsDataURL(field.value);
      return;
    }
    setBgImage('');
  }, [field.value]);

  const onChange = (e) => {
    const { files } = e.target;
    if (files.length === 0) return;

    const file = files[0];
    field.onChange(file);
  };

  const onDelete = () => {
    field.onChange(undefined);
  };

  const renderCoverFooter = () => {
    if (bgImage) {
      return (
        <button type="button" onClick={onDelete}>
          刪除圖片
        </button>
      );
    }
    return (
      <>
        <Cover />
        <p>+新增圖片</p>
      </>
    );
  };

  return (
    <CoverContainer>
      <CoverContent bgImage={bgImage}>
        <label htmlFor="image-picker">
          <input id="image-picker" type="file" onChange={onChange} accept="image/png, image/jpeg" />
        </label>
        {renderCoverFooter()}
      </CoverContent>
      <CoverHint>
        <p>視覺或示意圖</p>
        <p>(建議 寬670 x 高502 JPG、PNG)</p>
      </CoverHint>
    </CoverContainer>
  );
};

ImagePicker.propTypes = {
  field: PropTypes.object.isRequired,
};

export default ImagePicker;
