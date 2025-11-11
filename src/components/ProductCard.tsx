import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const lang = i18n.language as 'uz' | 'en' | 'ru';

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name[lang],
      price: product.price,
      image: product.image,
    });
    toast({
      title: t('products.addToCart'),
      description: product.name[lang],
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={product.image}
            alt={product.name[lang]}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-display text-xl font-semibold mb-2 line-clamp-2">
            {product.name[lang]}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description[lang]}
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium">{t('products.material')}:</span> {product.material[lang]}
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">{t('products.sizes')}:</span> {product.sizes.join(', ')}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-display font-bold text-accent">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button onClick={handleAddToCart} className="flex-1" variant="default">
            <ShoppingCart className="h-4 w-4 mr-2" />
            {t('products.addToCart')}
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {t('products.viewDetails')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
