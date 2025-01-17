import {GlobalHeader} from "~/features/GlobalHeader";
import {Sidebar} from "~/features/Sidebar";

type TProps = {
  children?: React.ReactNode;
};

export default function SidebarLayout({children}: TProps) {
  return (
    <div className="flex flex-col w-full h-full bg-primary">
      <GlobalHeader />
      <div className="flex grow desktop:pr-8 desktop:mb-8">
        <Sidebar />
        <main className="grow bg-background desktop:rounded-b-xl px-4.5 desktop:px-7.5 py-4 font-black">
          {children}
        </main>
      </div>
    </div>
  );
}
