import { createBrowserRouter } from "react-router-dom"
import App from "../App";
const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: App
        }
    ]    
);
export default router