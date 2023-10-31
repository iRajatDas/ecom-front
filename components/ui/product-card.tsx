"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInOut } from "@/lib/anim";
import Link from "next/link";
import { slugify } from "@/lib/utils";

interface ProductCardProps {
  item: Product;
}

const ProductCard: FC<ProductCardProps> = ({
  item: { category, color, id, images, isFeatured, name, price, size },
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {hasMounted ? (
        <motion.article
          {...fadeInOut}
          className="bg-white cursor-pointer group rounded-xl border p-3 space-y-4 relative"
        >
          {/* Image and Actions */}
          <div className="relative rounded-xl bg-gray-100 aspect-square overflow-hidden">
            <Image
              src={images[0].url}
              alt={name}
              fill
              className="aspect-square rounded-xl border object-cover origin-center"
            />

            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 z-10">
              <div className="flex gap-x-6 justify-center text-gray-600">
                <IconButton icon={<Expand size={20} />} onClick={() => {}} />
                <IconButton
                  icon={<ShoppingCart size={20} />}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          {/* Description */}
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-gray-500">{category?.name}</p>
          </div>
          {/* Price */}
          <div className="flex items-center justify-between">
            <Currency value={price} />
          </div>
          <Link
            href={`/${slugify(name)}`}
            className="absolute inset-0 h-full w-full inline-block z-0"
          ></Link>
        </motion.article>
      ) : null}
    </AnimatePresence>
  );
};

export default ProductCard;
