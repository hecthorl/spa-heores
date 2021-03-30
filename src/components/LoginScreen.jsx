const LoginScreen = ({ history }) => {
   return (
      <div className="container mt-5 animate__animated animate__fadeInRight">
         <h1>login</h1>
         <hr />
         <button
            onClick={() => history.replace('/')}
            className="btn btn-primary"
         >
            Login
         </button>
      </div>
   );
};

export default LoginScreen;
