import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';
import { statusFilters } from 'redux/constants';

import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { getStatusFilter } from 'redux/selectors';

//Компоненту StatusFilter потрібно значення фільтра з властивості statusFilter стану Redux,
//тому функція - селектор виглядатиме як getStatusFilter.
export const StatusFilter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
