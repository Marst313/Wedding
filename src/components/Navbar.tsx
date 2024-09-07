import { usePageContext } from '../utils/context/PageContext';
import { listNavbar } from '../utils/constant';
const Navbar = () => {
  const { setPages, pages } = usePageContext();

  const handleClickNav = (pages: string) => {
    setPages(pages);
  };

  return (
    <nav className="fixed bottom-0 sm:bottom-5 w-full  sm:p-0 inset-x-0 z-50 max-w-screen-sm mx-auto ">
      <ul className="bg-slate-600 h-20 rounded-xl w-full grid grid-cols-5 gap-3 mx-auto p-1">
        {listNavbar.map((navbar) => {
          return (
            <li
              key={navbar.no}
              className={`${pages === navbar.name ? 'bg-slate-500' : ''} max-w-20 w-full flex items-center justify-center   text-white h-full rounded-xl text-4xl cursor-pointer flex-col`}
              onClick={() => handleClickNav(navbar.name)}
            >
              {<navbar.icon />}
              <span className="text-sm capitalize">{navbar.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
