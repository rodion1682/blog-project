import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LandSwitcher } from 'widgets/LandSwitcher/LandSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button type="button" onClick={toggleCollapsed}>
				{t('Toggle')}
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LandSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
