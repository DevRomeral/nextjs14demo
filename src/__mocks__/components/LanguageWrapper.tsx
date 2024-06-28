import { LanguageConfig } from '@/__mocks__/configs/LanguageConfig';
import { NextIntlClientProvider } from 'next-intl';

interface Props {
  messages?: Record<string, string>;
  locale?: string;
  children: React.ReactNode;
}

const LanguageWrapper = ({ children, messages = {}, locale = LanguageConfig.defaultLocale }: Props) => {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};
export default LanguageWrapper;
