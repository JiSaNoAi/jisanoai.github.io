import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="flex-grow flex flex-col justify-center mx-auto px-4 py-12 bg-green-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="container md:w-auto mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4" dir="rtl">مرحباً بكم في JiSaNoAi</h1>
          <p className="text-xl mb-4" dir="rtl">Insha&apos;Allah -  إن شاء الله</p>
          <p className="mb-4" dir="rtl">
            JiSaNoAi هي شركة مبتكرة تأسست في كوريا الجنوبية لخدمة المجتمعات
            الإسلامية والمسلمة. لا تعتمد مهمتنا على رأس المال، بل على الإيمان
            الخالص والشغف لتطوير تطبيقات مخصصة للمسلمين فقط. هدفنا هو تزويد
            المسلمين بأفضل تجارب التطبيقات، ومساعدتهم على عيش حياة أكثر راحة
            وذات معنى. نهدف إلى إحداث تأثير كبير على الحياة اليومية للمسلمين في
            جميع أنحاء العالم. حاليًا، نفتقر إلى رأس مال كبير، لكن مساعدتك
            القيمة لـ JiSaNoAi بالمال يمكن أن تمكننا من تحويل أحلامنا إلى حقيقة.
            من خلال دعمنا بمساهماتك، تنضم إلينا في رحلتنا لإنشاء أفضل التطبيقات
            للمسلمين. شكرًا لك.
          </p>
          <p>
            JiSaNoAi is an innovative company established in South Korea to
            serve the Islamic and Muslim communities. Our mission is driven not
            by capital, but by pure faith and passion to develop apps
            exclusively for Muslims. Our goal is to provide Muslims with the
            best app experiences, helping them lead more convenient and
            meaningful lives. We aim to make a significant impact on the daily
            lives of Muslims around the world. Currently, we lack substantial
            capital, but your valuable Help JiSaNoAi with money can empower us
            to turn our dreams into reality. By supporting us with your
            contributions, you join us on our journey to create the best apps
            for Muslims. Thank you.
          </p>
        </div>
      </div>
    </div>
  );
}
