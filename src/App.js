import {useSelector} from 'react-redux'
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Auth from './components/Auth';

function App() {
	const {isAuthenticated} = useSelector(state => state.auth)

	return (
		<>
			<Header />
			{isAuthenticated && <UserProfile />}
			{!isAuthenticated && <Auth />}
			<Counter />
		</>
	);
}

export default App;
