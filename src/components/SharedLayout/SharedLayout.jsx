import { Outlet } from "react-router-dom";
import { Header, Logo, Link, Container } from "./SharedLayout.styled";
import { IoBeer } from "react-icons/io5";
import { useBeerStore } from "../../date/beerstore";
export const SharedLayout = () => {
  const checkedid = useBeerStore((state) => state.checkedid);
  console.log(checkedid, "header", checkedid.length);
  const deleteSelectedBeer = useBeerStore((state) => state.deleteSelectedBeer);
  return (
    <Container>
      <Header>
        <Logo>
          <span>BEERLIST</span>
          <IoBeer style={{ width: 60, height: 60 }} />
        </Logo>
        <nav>
          {checkedid.length > 0 && (
            <button
              className="delbutton"
              type="button"
              onClick={deleteSelectedBeer}
            >
              Delete
            </button>
          )}
          <Link to="/" end>
            Home
          </Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
