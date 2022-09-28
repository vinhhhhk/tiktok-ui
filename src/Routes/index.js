import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload/index.js";
import Search from "~/pages/Search/index.js";
import {HeaderOnly} from "~/components/Layout";

const publicRoutes = [
    {path :'/' , component: Home},
    {path :'/following' , component: Following},
    {path :'/profile' , component: Profile},
    {path :'/search' , component: Search, layout:null},
    {path :'/upload' , component: Upload ,layout:HeaderOnly},
];

const privateRoutes = [
    
]

export {privateRoutes ,publicRoutes} 