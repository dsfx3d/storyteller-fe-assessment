import {GlobalHeader} from "~/features/GlobalHeader";
import {GlobalSidebar} from "~/features/Sidebar";

type TProps = {
  children?: React.ReactNode;
};

export default function SidebarLayout({children}: TProps) {
  return (
    <main className="flex flex-col w-full h-full bg-primary">
      <GlobalHeader />
      <div className="flex grow lg:pr-8 lg:mb-8">
        <GlobalSidebar />
        {children}
      </div>
    </main>
  );
}
