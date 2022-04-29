import React, { useState } from 'react';
import { CoverContainer, CoverContent, Cover } from './styles';

const ImagePicker = () => {
  const [bgImage, setBgImage] = useState('');

  const onChange = (e) => {
    const { files } = e.target;
    if (files.length === 0) return;

    const file = files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setBgImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const onDelete = () => {
    setBgImage('');
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
      <p>視覺或示意圖</p>
      <p>(建議 寬670 x 高502 JPG、PNG)</p>
    </CoverContainer>
  );
};

export default ImagePicker;
