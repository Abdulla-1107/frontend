import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Oferta = () => {
  const { t } = useTranslation();

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
              {t('oferta.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <h2>1. Umumiy qoidalar</h2>
            <p>{t('oferta.content')}</p>

            <h2>2. Buyurtma va toʻlov</h2>
            <p>
              Buyurtmalar sayt orqali yoki telefon aloqasi orqali qabul qilinadi. Toʻlov naqd, plastik karta
              yoki bank oʻtkazmasi orqali amalga oshiriladi.
            </p>

            <h2>3. Yetkazib berish</h2>
            <p>
              Mahsulotlar Oʻzbekiston boʻylab yetkazib beriladi. Yetkazib berish muddati va narxi har bir
              buyurtma uchun alohida kelishiladi.
            </p>

            <h2>4. Kafolat va qaytarish</h2>
            <p>
              Agar mahsulot ishlab chiqarish nuqsoniga ega boʻlsa, uni 14 kun ichida qaytarish yoki
              almashtirish mumkin. Qaytarish uchun mahsulot asl holatida va qadoqlanishida boʻlishi kerak.
            </p>

            <h2>5. Mas'uliyat</h2>
            <p>
              Tikuvchi Anoragul mahsulotlarning sifati va anʼanaviy usullarga muvofiqligiga kafolat beradi.
            </p>

            <h2>6. Nizolarni hal qilish</h2>
            <p>
              Tomonlar oʻrtasida kelib chiqadigan nizolar muzokaralar yoʻli bilan hal qilinadi. Kelishuvga
              erishilmagan taqdirda, nizolar Oʻzbekiston Respublikasi qonunchiligiga muvofiq hal qilinadi.
            </p>

            <h2>7. Aloqa</h2>
            <p>
              Barcha savollar va takliflar boʻyicha bizga quyidagi manzil orqali murojaat qilishingiz mumkin:
            </p>
            <ul>
              <li>Telefon: +998 90 123 45 67</li>
              <li>Email: info@tikuvchi.uz</li>
              <li>Manzil: Toshkent sh., Yunusobod tumani, Amir Temur koʻchasi 123</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Oferta;
