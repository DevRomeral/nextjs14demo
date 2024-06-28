import { Customer } from '@/types/customer.model';
import { filterCustomers } from '@/utils/filters/CustomerFilters';

const dummyCustomer1: Customer = {
  id: '1',
  name: 'Gustavo',
  age: 22,
  lastAppointment: new Date(2024, 0, 1, 12, 34),
  diseases: [],
};
const dummyCustomer2: Customer = {
  id: '2',
  name: 'Miguel',
  age: 28,
  lastAppointment: new Date(2024, 5, 27, 12, 34),
  diseases: ['hipocondría', 'pereza'],
};

const dummyCustomers: Customer[] = [dummyCustomer1, dummyCustomer2];

describe('CustomerFilters', () => {
  it('should filter the customers by its name', async () => {
    const results = filterCustomers(dummyCustomers, 'gustavo');
    expect(results).toHaveLength(1);
    expect(results[0]).toBe(dummyCustomer1);
  });

  // TODO: crear otros tests para otros criterios cuando esté claro cómo será el modelo
});
