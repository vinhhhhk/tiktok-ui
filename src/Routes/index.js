import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload/index.js";
import Search from "~/pages/Search/index.js";
import {HeaderOnly} from "~/layouts";

import config from "~/config";

const publicRoutes = [
    {path :config.routes.home , component: Home},
    {path :config.routes.following , component: Following},
    {path :config.routes.profile , component: Profile},
    {path :config.routes.search , component: Search, layout:null},
    {path :config.routes.upload , component: Upload ,layout:HeaderOnly},
];

const privateRoutes = [
    
]

export {privateRoutes ,publicRoutes} 