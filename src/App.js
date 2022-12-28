import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import ParticlesComponent from "./component/particlesJs/ParticlesJs";
import { router } from "./router/Router";
import { SocialContext } from './contextAPI/ContextApi';

function App() {
  const {dark}= useContext(SocialContext);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    {
     dark && <ParticlesComponent />
    }  
    </div>
  );
}

export default App;
