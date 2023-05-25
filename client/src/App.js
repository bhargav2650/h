import './App.css';
import Blog from "./blog";
import {Routes,Route,Link} from "react-router-dom";
import Header from "./header";
import Layout from './Layout';
import Indexpage from './page/indexpage';
import Loginpage from './page/loginpage';
import Regpage from './page/signuppage';
import Createpost from './page/createpost';
import Seeposts from './page/seepost';
import Seepostone from './page/seeone';
import Changepost from './page/changepost';
import Delpost from './page/delpost';
import { UserContextProvider } from './usercontext';
function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={
          <Indexpage />
      }/>
      </Route>
      <Route path={"/login"} element={
        <Loginpage/>
      }/>
      <Route path={"/Register"} element={
        <Regpage/>
      }/>
      <Route path={"/POST/posts"} element={
        <Createpost/>
      }/>
      <Route path={"/GET/posts"} element={
        <Seeposts/>
      }/>
      <Route path={"/GET/posts/:id"} element={
        <Seepostone/>
      }/>
      <Route path={"/PUT/posts/:id"} element={
        <Changepost/>
      }/>
      <Route path={"/DELETE/posts/:id"} element={
        <Delpost/>
      }/>
    </Routes>
    </UserContextProvider>
  );
}
export default App;
