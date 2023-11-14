import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					className={cls.firstLink}
					theme={AppLinkTheme.INVERTED}
					to={'/'}
				>
					To Main
				</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>
					To About
				</AppLink>
			</div>
		</div>
	);
};
