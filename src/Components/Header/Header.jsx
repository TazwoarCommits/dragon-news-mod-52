import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <div className='logo'>
                <img className='w-[400px]' src={logo} />
            </div>
            <h4 className='text-gray-500'>Journalism Without Fear or Favour</h4>
            <div className="">{moment().format("dddd, MMMM Do YYYY")}</div>
        </div>
    );
};

export default Header;