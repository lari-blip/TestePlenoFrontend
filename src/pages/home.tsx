import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/capys-logo.png";
import "../styles/home.css"

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="home-header">
        <img src={logo} alt="Capys Logo" className="logo" />
        <button 
          className="logout-button" 
          onClick={() => navigate("/")} 
        >
          Sair
        </button>
      </header>
      <div className="home-content">
        <h2 className="greeting">Olá, <strong>Teste Capys</strong></h2>
        <p className="role">Desenvolvedor Front-End</p>
        <motion.h3 
          className="home-title"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <strong>Que pena! Estamos em desenvolvimento :(</strong>
        </motion.h3>
        <p className="home-subtitle">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
    </motion.div>
  );
};

export default Home;
