import Image from "next/image";

export default function MainContent() {
  return (
    <div className="flex-grow flex flex-col justify-center mx-auto px-4 py-12 bg-green-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-12">
          <h1 className="text-4xl font-bold mb-4" dir="rtl">مرحباً بكم في JiSaNoAi</h1>
          <p className="text-xl mb-4" dir="rtl">Insha&apos;Allah -  إن شاء الله</p>
          <p className="mb-4" dir="rtl">
            تخطط JiSaNoAi لإنشاء تطبيقات متعلقة بالإسلام وهي في طور الإنجاز
            بمساعدتكم، يمكننا توفير الراحة للجميع.
          </p>
          <p>
            JiSaNoAi plans to create apps related to Islam and is in progress.
            With your help, we can provide convenience for everyone.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/1_WhereisKaaba_graphic.png"
            alt="App Screenshots"
            width={450}
            height={450}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
