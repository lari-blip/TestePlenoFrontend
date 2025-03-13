import { SetStateAction, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import "../styles/login.css";
import logo from "../assets/capys-logo.png";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await login(email, password);

    if (data?.token) {
      alert("Login bem-sucedido!");
      navigate("/home"); 
    } else {
      setError("Email ou senha inválidos");
    }
  };

  const handleRedirectToCadastro = () => {
    navigate("/cadastro");  
  };

  return (
    <motion.div 
      className="login-container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="login-box"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img src={logo} alt="Capys Logo" className="logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            value={email}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            value={password}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
          />

          {error && <motion.p className="error" animate={{ x: [0, -10, 10, 0] }}>{error}</motion.p>}

          <motion.button 
            type="submit" 
            className="btn-login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar
          </motion.button>
        </form>

        <p className="register-link">Ainda não possui uma conta?</p>
        <motion.button 
          className="btn-register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRedirectToCadastro}  
        >
          Cadastre-se
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Login;
