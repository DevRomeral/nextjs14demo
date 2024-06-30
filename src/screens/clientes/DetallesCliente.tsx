import { getCustomerById } from '@/services/api/ApiCustomerService';
import { Customer } from '@/types/customer.model';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import DiseaseCard from '@/components/cards/DiseaseCard';
import DebugInfo from '@/components/DebugInfo';
import LoadingPlaceholder from '@/components/display/LoadingPlaceholder';
import PageTitle from '@/components/display/PageTitle';
import { ButtonProps } from '@/components/inputs/Button';

// export interface ISearchClientesFormConfig {
//   formId: string;
//   queryTextId: string;
//   panelNotFoundId: string;
// }

// export const SearchClientsFormConfig: ISearchClientesFormConfig = {
//   formId: 'searchCustomersForm',
//   queryTextId: 'queryTextInput',
//   panelNotFoundId: 'customersNotFound',
// };

export interface DetallesClienteProps {
  customerId: string;
}

const DetallesCliente: React.FC<DetallesClienteProps> = ({ customerId }) => {
  const t = useTranslations('Clientes.Detalles');
  // undefined: no cargado
  // null: no existe
  const [customer, setCustomer] = useState<Customer | undefined | null>(undefined);

  useEffect(() => {
    async function fetchData() {
      setCustomer(await getCustomerById(customerId));
    }

    fetchData();
  }, [customerId]);

  const btnEditar: ButtonProps = {
    id: 'btnEditarCliente',
    text: t('form.buttonEdit.title'),
    onClick: () => {
      alert('TO BE DONE');
    },
    icon: 'edit',
  };

  // const isLoading = true;
  const isLoading = customer === undefined;

  return (
    <div className={`container mx-auto flex flex-col gap-10`}>
      <div>
        <PageTitle isLoading={isLoading} title={customer?.name || ''} btnProps={btnEditar}></PageTitle>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <LoadingPlaceholder isLoading={isLoading} height="h-4" width="w-1/5">
              <h5>
                {customer?.age} {t('sections.age.title')}
              </h5>
            </LoadingPlaceholder>
            <LoadingPlaceholder isLoading={isLoading} height="h-4" width="w-1/5">
              <span className="text-sm">--/--/----</span>
            </LoadingPlaceholder>
          </div>
          {customer && customer?.diseases.length > 0 && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-secondary-500">
                <ShieldExclamationIcon className="h-4 w-4" />
                <span className="text-base">{t('sections.diseases.title')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {customer?.diseases.map((disease) => (
                  <DiseaseCard disease={disease} key={disease} customerId={customer.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <DebugInfo>
          <p>Aquí irán las citas que ha tenido</p>
        </DebugInfo>
      </div>
    </div>
  );
};

export default DetallesCliente;
