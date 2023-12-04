import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
	<div className={classNames(cls.Navbar, {}, [className])}>
		<div className={cls.links}>
			<AppLink
				className={cls.firstLink}
				theme={AppLinkTheme.INVERTED}
				to="/"
			>
				To Main
			</AppLink>
			<AppLink theme={AppLinkTheme.INVERTED} to="/about">
				To About
			</AppLink>
		</div>
	</div>
);
