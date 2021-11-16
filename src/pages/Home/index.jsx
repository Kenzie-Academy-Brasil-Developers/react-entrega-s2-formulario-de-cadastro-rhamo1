import { motion } from "framer-motion";
import { Forms } from "../../components/Form";

export const Home = ({ setUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container border"
    >
      <h2>Cadastro de usuário</h2>
      <Forms setUser={setUser} />
    </motion.div>
  );
};
