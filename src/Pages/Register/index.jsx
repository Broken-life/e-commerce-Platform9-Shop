import { useUser } from '../../context/UserContext';
import Layout from '../../Components/Layout';

function Register() {
  const { register } = useUser();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      name: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      avatar: 'https://picsum.photos/800', 
    };

    try {
      const result = await register(userData);
      console.log('Registro exitoso:', result);   
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
    window.location.href = '/';

  };

  return (
    <Layout>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-6 shadow-[0px_0px_15px_0px_#d69e2e] rounded-lg">
          <h3 className="font-bold mb-5">Cree una cuenta:</h3>
          <form onSubmit={handleRegister} className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <label htmlFor="fullName">Nombre completo:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="shadow-[0px_0px_5px_0px_#d69e2e] p-2 rounded-lg bg-[#000514] mt-2 mb-5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                id="email"
                name="email"
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
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
