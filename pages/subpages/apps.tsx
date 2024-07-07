import Image from "next/image";

export default function AppsContent() {
  return (
    <div className="mx-auto px-4 py-12 bg-green-50 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-10">
          <h1 className="text-4xl font-bold mb-4">1. Where Is Kaaba</h1>
          <p className="mb-4" dir="rtl">
            هذا التطبيق عبارة عن بوصلة قبلة لتحديد اتجاه الكعبة. لا توجد عمليات
            شراء داخل التطبيق، ولا تظهر إعلانات عند بدء التشغيل، ولكن إذا انتقلت
            إلى صفحة &ldquo;حول&ldquo; الخاصة بالتطبيق، يمكنك مشاهدة الإعلانات
            طواعية. لا يوجد تعويض، ولكن يتم توليد عائدات الإعلانات لمساعدة
            المطور في التطوير التالي. إذا كنت لا ترغب في مشاهدة الإعلانات،
            فيمكنك استخدامه كطريق عادي.
          </p>
          <p>
            This app is a Qibla Compass to find the direction of Kaaba. There
            are no in-app purchases, and no ads appear at startup, 
            but if you go
            to the About page of the app, you can voluntarily watch ads. 
            There is no compensation, but the ad revenue is generated to help the developer with the next development. 
            If you don&apos;t want to watch ads, you can just use it as a normal road.
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
