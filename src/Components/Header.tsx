import { useHistory } from 'react-router-dom';

export const Header = () => {

    const history = useHistory();

    const logoutHandler = () => {
        localStorage.clear();
        history.push('/login');
    }

    const classes = {
        nav: "flex items-center justify-between flex-wrap bg-teal-500 p-6",
        logo: "font-semibold text-white ml-10 text-xl tracking-tight",
        button: "inline-block text-sm mr-10 px-4 py-2 leading-none border rounded text-yellow-200 border-yellow-200 hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
    }

    return (
        <div className='header-2 bg-gray-700'>
            <nav className={classes.nav}>
                <span className={classes.logo}>Home</span>
                <button className={classes.button} onClick={logoutHandler}>Logout</button>
            </nav>
        </div>
    )
}
