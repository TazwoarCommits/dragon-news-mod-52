import error from '../assets/error.jpg'
const Error = () => {
    return (
        <div>
            <img src={error} />
            <h1 className='text-5xl'>Nothing to be found</h1>
        </div>
    );
};

export default Error;