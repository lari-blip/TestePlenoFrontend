import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; 
import "../styles/cadastro.css";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [bio, setBio] = useState("");
  const [contato, setContato] = useState("");
  const [cargo, setCargo] = useState("Desenvolvedor Front-End");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha || !bio || !contato) {
      setMessage("❌ Oops! Algo deu errado - Preencha todos os campos");
      return;
    }

    if (/\d/.test(nome)) {
      setMessage("❌ Oops! Algo deu errado - Nome não pode conter números");
      return;
    }

    if (senha !== confirmarSenha) {
      setMessage("❌ Oops! Algo deu errado - Senhas não coincidem");
      return;
    }

    setMessage("✅ Conta criada com sucesso!");
    
    setTimeout(() => {
      navigate("/"); 
    }, 2000);
  };

  return (
    <motion.div 
      className="cadastro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="cadastro-header">
       
        <Link to="/">
          <img 
            src="https://i.imgur.com/enJ2RZJ.png" 
            alt="Capys Logo" 
            className="logo" 
          />
        </Link>
      </header>
      
      <div className="cadastro-form">
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Digite seu nome" 
          />

          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite seu email" 
          />

          <label>Senha</label>
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            placeholder="Digite sua senha" 
          />

          <label>Confirmar Senha</label>
          <input 
            type="password" 
            value={confirmarSenha} 
            onChange={(e) => setConfirmarSenha(e.target.value)} 
            placeholder="Digite sua senha novamente" 
          />

          <label>Bio</label>
          <input 
            type="text" 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
            placeholder="Fale um pouco sobre você" 
          />

          <label>Contato</label>
          <input 
            type="text" 
            value={contato} 
            onChange={(e) => setContato(e.target.value)} 
            placeholder="Opção de contato" 
          />

          <label>Selecionar Cargo</label>
          <select 
            value={cargo} 
            onChange={(e) => setCargo(e.target.value)}
          >
            <option>Desenvolvedor Front-End</option>
          </select>

          <button type="submit" className="cadastrar-button">
            Cadastrar
          </button>
        </form>


        {message && (
          <motion.div 
            className={`toast ${message.startsWith("✅") ? "success" : "error"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Cadastro;
