import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pattern-uzbek">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="font-display text-9xl font-bold text-accent mb-4">404</h1>
          <p className="text-2xl font-semibold mb-4">Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button size="lg">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
