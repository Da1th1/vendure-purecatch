import { useTranslation } from 'react-i18next';

export function Logo() {
  const { t } = useTranslation();
  return (
    <img
      src="/Pure Catch Logo.svg"
      width={40}
      height={31}
      alt={t('common.logoAlt')}
      className="text-white w-10"
    />
  );
} 