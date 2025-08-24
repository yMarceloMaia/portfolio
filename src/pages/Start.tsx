import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const Start = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate("/home");
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-screen flex justify-center items-center">
            <h1
                onClick={() => navigate("/home")}
                className="text-4xl font-nixie blur-out-expand-fwd-target text-white">
                <span className="font-bold">Marcelo Maia</span> Portfolio
            </h1>
        </motion.div>
    );
}

export default Start;
