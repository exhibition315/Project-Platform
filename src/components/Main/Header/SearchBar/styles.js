import styled from 'styled-components';
import { BaseButton } from '@components/style';
import { Gray1, Gray3 } from '@components/style/colors';
import { backgroundImgSetting } from '@components/style/helper';
import searchIcon from '@img/search-icon.svg';

const SearchContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  width: 482px;
  background-color: ${Gray1};
  padding: 12px 24px;
  border-radius: 12px;
  ::placeholder {
    color: ${Gray3};
  }
`;

const SearchButton = styled(BaseButton)`
  width: 46px;
  height: 46px;
  margin-left: 8px;
  ::before {
    content: '';
    background-image: url(${searchIcon});
    ${backgroundImgSetting('17px', '18px', 'center', 'contain')}
  }
`;

export { SearchContainer, SearchInput, SearchButton };