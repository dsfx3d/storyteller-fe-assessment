type TProps = React.ComponentProps<"nav">;

export function SidebarNavMenu({children, ...navProps}: TProps) {
  return (
    <nav {...navProps}>
      <ul
        className="flex flex-col py-5 border-t"
        style={{
          borderImage:
            "linear-gradient(to right, #484848 0%, transparent 100%) 1",
        }}
      >
        {children}
      </ul>
    </nav>
  );
}
