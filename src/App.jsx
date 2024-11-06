import { StoreDemo } from "./views/storedemo";
import { SingleItem } from './views/singleitem';
import injectContext from "./store/appContext";
import BackToTop from "./component/BackToTop";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "./views/Details";
import { Favorites } from "./views/favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	const basename = import.meta.env.VITE_BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<BackToTop>
					<Navbar />
					<Routes>S
						<Route path="/" element={<Home />} />
						<Route path="/details/:type/:id" element={<Details />} />
						<Route path="/demo" element={<StoreDemo />} />
						<Route path="/single/:theid" element={<SingleItem />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</BackToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);

