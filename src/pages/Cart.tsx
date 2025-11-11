import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { OrderModal } from '@/components/OrderModal';

const Cart = () => {
  const { t } = useTranslation();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-lg mx-auto"
            >
              <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
              <h2 className="font-display text-3xl font-bold mb-4">{t('cart.empty')}</h2>
              <Link to="/products">
                <Button size="lg">{t('hero.cta')}</Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="py-16 pattern-uzbek">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient">
              {t('cart.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-muted-foreground">${item.price.toLocaleString()}</p>
                        {item.size && (
                          <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                        )}
                        {item.color && (
                          <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Total */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold">{t('cart.total')}:</span>
                  <span className="font-display text-3xl font-bold text-accent">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full mt-6"
                  onClick={() => setIsOrderModalOpen(true)}
                >
                  {t('cart.checkout')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <OrderModal open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen} />
    </div>
  );
};

export default Cart;
