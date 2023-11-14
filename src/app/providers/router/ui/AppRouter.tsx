import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routerConfig';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routerConfig).map(({ element, path }) => (
					<Route key={path} path={path} element={element}></Route>
				))}
			</Routes>
		</Suspense>
	);
};
