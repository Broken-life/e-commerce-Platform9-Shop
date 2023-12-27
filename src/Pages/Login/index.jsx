import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout';

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: username,  // Assuming the API expects email instead of username
        password,
      });

      // Assuming the response has an 'access_token' property
      const { access_token } = response.data;

      // Store the token in localStorage or wherever you manage your authentication state
      localStorage.setItem('access_token', access_token);

      // Redirect to the desired page after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <Layout>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-6 shadow-[0px_0px_15px_0px_#d69e2e] rounded-lg">
          <h3 className="font-bold mb-5">Bienvenido Mago 🧙‍♂️</h3>
          <form onSubmit={handleLogin} className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="shadow-[0px_0px_5px_0px_#d69e2e] p-2 rounded-lg bg-[#000514] mt-2 mb-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-[0px_0px_5px_0px_#d69e2e] p-2 rounded-lg bg-[#000514] mt-2 mb-5"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 font-bold shadow-[0px_0px_7px_0px_#d69e2e] rounded-lg mt-4 hover:bg-[#d69e2e] hover:text-[#000514]"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
