import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { icon: MapPin, label: t('contact.address'), value: t('contact.addressText') },
    { icon: Phone, label: t('contact.phone'), value: '+998 90 123 45 67' },
    { icon: Mail, label: t('contact.email'), value: 'info@tikuvchi.uz' },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hoursText') },
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
              {t('contact.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-display text-2xl font-bold mb-6">{t('contact.message')}</h2>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder={t('contact.name')} />
                    </div>
                    <div>
                      <Input type="email" placeholder={t('contact.email')} />
                    </div>
                    <div>
                      <Input placeholder={t('contact.subject')} />
                    </div>
                    <div>
                      <Textarea rows={5} placeholder={t('contact.messageText')} />
                    </div>
                    <Button type="submit" className="w-full">
                      {t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
