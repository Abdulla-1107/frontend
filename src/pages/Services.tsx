import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Circle, RefreshCcw, GraduationCap, Home } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Scissors, title: t('services.custom'), desc: t('services.customDesc') },
    { icon: Sparkles, title: t('services.embroidery'), desc: t('services.embroideryDesc') },
    { icon: Circle, title: t('services.carpet'), desc: t('services.carpetDesc') },
    { icon: RefreshCcw, title: t('services.restoration'), desc: t('services.restorationDesc') },
    { icon: GraduationCap, title: t('services.masterclass'), desc: t('services.masterclassDesc') },
    { icon: Home, title: t('services.interior'), desc: t('services.interiorDesc') },
  ];

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
              {t('services.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
