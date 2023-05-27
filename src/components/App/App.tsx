import { motion } from 'framer-motion';

export function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={'bg-amber-200 py-6'}>
      Hello world!
    </motion.div>
  );
}
