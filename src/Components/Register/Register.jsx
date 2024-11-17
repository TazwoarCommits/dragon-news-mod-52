import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    
    const {createNewUser , setUser} = useContext(AuthContext)

    const handleSubmit = e => {
       e.preventDefault();
       const form = new FormData(e.target);
       const email = form.get('email');
       const name = form.get('name');
       const password = form.get('password');
       const photo = form.get('photo');
       console.log(email,password,photo,name);

       createNewUser(email,password)
       .then(res => setUser(res.user))
       .catch(err => console.log(err.code,err.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register Your Account</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;