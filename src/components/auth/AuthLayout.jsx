export default function AuthLayout({ title, children }) {
  return (
    <div className="h-[calc(100dvh-112px)] bg-[url(/images/senior_community_mobile.png)] sm:bg-[url(images/senior_community.png)] bg-cover bg-center">
      <div className="h-full flex items-center justify-center p-4 bg-linear-to-b from-[rgba(255,255,255,0.5)] to-pink-300">
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 md:max-w-xl md:p-10">
          <h1 className="text-xl md:text-2xl font-bold text-center mb-8">
            {title}
          </h1>

          {children}
        </div>
      </div>
    </div>
  );
}
