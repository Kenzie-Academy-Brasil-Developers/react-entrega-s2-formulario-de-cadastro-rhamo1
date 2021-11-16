import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router";

export const Success = ({ user }) => {
  const history = useHistory();
  const params = useParams();

  const click = () => {
    history.push("/");
    toast("Até breve!", {
      icon: "👏",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container border"
    >
      <h2>Olá, {user}!</h2>
      <button className="button" onClick={click}>
        Voltar
      </button>
    </motion.div>
  );
};
