import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme();

	return (
		<div className={classNames(cls.ThemeSwitcher, {}, [className])}>
			<Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
				<ThemeIcon className={cls.icon} />
			</Button>
		</div>
	);
};
