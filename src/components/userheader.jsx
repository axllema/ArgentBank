import { useSelector } from 'react-redux';
import '../scss/pages/_userProfile.scss'
import '../scss/style.scss'

const UserHeader = () => {
    const user = useSelector(state => state.user);
    const isLoggedIn = user && user.userName;

    return (
        <div className="header">
            <h1> {isLoggedIn ? `Welcome back, ${user.firstName} ${user.lastName}!` : 'Welcome!'}</h1>
        </div>
    );
};

export default UserHeader;