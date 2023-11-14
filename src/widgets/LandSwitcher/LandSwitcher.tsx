import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LandSwitcher.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LandSwitcherProps {
	className?: string;
}

export const LandSwitcher = ({ className }: LandSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
	};

	return (
		<Button
			className={classNames(cls.LandSwitcher, {}, [className])}
			onClick={toggleLanguage}
			theme={ButtonTheme.CLEAR}
		>
			{t('Language')}
		</Button>
	);
};
