import { memo } from 'react';

import { ListFooter } from './styles';

interface IListProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const List: React.FC<IListProps> = ({ text1, text2, text3, text4 }) => {
  return (
    <div>
      <ListFooter>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
      </ListFooter>
    </div>
  );
};

export default memo(List);
