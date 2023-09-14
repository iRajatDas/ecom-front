"use client";
import React, { FC, useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInOut } from "@/lib/anim";

interface NavbarActionsProps {}

const NavbarActions: FC<NavbarActionsProps> = ({}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {hasMounted ? (
        <motion.div
          {...fadeInOut}
          className="ml-auto gap-x-4 flex items-center"
        >
          <Button className="flex items-center bg-black rounded-full px-4 py-2">
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">0</span>
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavbarActions;
