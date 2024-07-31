export const Container = ({ children }) => {
  return (
    <div className="w-screen bg-slate-400">
      <div className="w-full h-full m-auto Lg:max-w-screen-xl">{children}</div>
    </div>
  );
};
