import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';

import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

//Компоненту StatusFilter потрібно значення фільтра з властивості statusFilter стану Redux,
//тому функція - селектор виглядатиме як state => state.filters.status.
export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
