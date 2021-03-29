const LoginScreen = ({ history }) => {
   return (
      <div className="container mt-5">
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
