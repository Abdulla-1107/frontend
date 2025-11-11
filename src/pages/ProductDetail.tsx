import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, ZoomIn } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products, Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { OrderModal } from '@/components/OrderModal';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addItem } = useCart();
  const lang = i18n.language as 'uz' | 'en' | 'ru';

  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display mb-4">{t('products.notFound')}</h2>
          <Button onClick={() => navigate('/products')}>{t('products.backToProducts')}</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 3);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name[lang],
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.image,
    });
    toast({
      title: t('products.addToCart'),
      description: `${product.name[lang]} ${selectedSize ? `(${selectedSize})` : ''} ${selectedColor ? `- ${selectedColor}` : ''}`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('products.backToProducts')}
          </Button>
        </motion.div>

        {/* Product Detail Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted group">
              <motion.img
                src={product.image}
                alt={product.name[lang]}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center italic">
              {t('products.clickToZoom')}
            </p>
          </motion.div>

          {/* Product Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient">
                {product.name[lang]}
              </h1>
              <p className="text-3xl font-display font-bold text-accent mb-6">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <div className="border-t border-b border-border py-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{t('products.material')}:</h3>
                <p className="text-muted-foreground">{product.material[lang]}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">{t('products.description')}:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description[lang]}
                </p>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">{t('products.sizes')}:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border transition-all ${
                      selectedSize === size
                        ? 'bg-accent text-accent-foreground border-accent'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">{t('products.colors')}:</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border transition-all capitalize ${
                      selectedColor === color
                        ? 'bg-accent text-accent-foreground border-accent'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">{t('products.features')}:</h3>
              <ul className="space-y-2">
                {product.features[lang].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">✦</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {t('products.addToCart')}
              </Button>
              <Button
                onClick={handleBuyNow}
                size="lg"
                className="flex-1"
              >
                {t('products.buyNow')}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-border pt-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              {t('products.relatedProducts')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={relatedProduct} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      <Footer />
      <OrderModal open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen} />
    </div>
  );
};

export default ProductDetail;
