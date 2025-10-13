import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

const AppLayout = () => {

  const nvigation = useNavigation(); //loding state #84
  console.log(nvigation);

  // if(navigator.state === "loading") return <h1>loading ......</h1>; //file loading
    if(navigator.state === "loading") return <Loading />; //file loading  #84 env #85 dyamic route


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
