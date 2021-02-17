import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTransaction } from '../../actions';
import FormTransaction from '../../components/FormTransaction';
import ListData from '../../components/ListData';
import TotalCashFlow from '../../components/TotalCashFlow';

const API = `http://localhost:5000`;

const Income = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransaction('income'))
  }, [dispatch]);

  return (
    <main>
      <FormTransaction type="income" API={API} />
      <TotalCashFlow type="income" />
      <ListData type="income" API={API} />
    </main>
  )
};

export default Income;