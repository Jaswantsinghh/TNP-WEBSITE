import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../css/app.css';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Genconians from "./Pages/Genconians/Genconians";
import Certificates from "./Pages/Certificates/Certificate";
import PlacementRecord from "./Pages/PlacementRecords/PlacementRecord"

import ExecutiveMembers from "./Pages/ExecutiveMembers/ExecutiveMembers";
import TechnicalMembers from "./Pages/TechnicalMembers/TechnicalMembers";
import coreMembers from './Pages/coreMembers/coreMembers';

import login from "./Auth/Login";
import { AdminRoute, StudentRoute } from "./Auth/PrivateRoute";

import Email from "./EmailVer";
import Verify from "./RedirectPages/Student/Verify";

import createConnect from "./HardCoded/Create/createConnect";
import createExplore from "./HardCoded/Create/createExplore";
import createDownloads from "./HardCoded/Create/createDownloads";
import createLinks from "./HardCoded/Create/createLinks";

import EditPosts from "./HardCoded/Edit/EditPosts";
import EditConnect from "./HardCoded/Edit/EditConnect";
import EditExplore from "./HardCoded/Edit/EditExplore";
import EditDownloads from "./HardCoded/Edit/EditDownloads";
import EditLinks from "./HardCoded/Edit/EditLinks";

import Coordinator from "./RedirectPages/Coordinator/Coordinator";
import studentredirect from "./RedirectPages/Student/Student";
import Admin from "./RedirectPages/Admin/Coordinator";

import ForgetPass from "./Auth/ForgotPassword";
import ResetPass from "./Auth/ResetPass";

import ShowPost from "./HardCoded/view/ShowPost";



function App() {

    return (


        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/genconians" exact component={Genconians} />
                    <Route path="/certificate/:id" exact component={Certificates}></Route>

                    {/* Members */}
                    <Route path="/coreMembers" exact component={coreMembers} />
                    <Route path="/technicalMembers" exact component={TechnicalMembers}></Route>
                    <Route path="/executiveMembers" exact component={ExecutiveMembers}></Route>

                    {/* Auth */}
                    <Route path="/login" exact component={login} />

                    {/* Create Routes */}
                    <Route path="/addConnect" exact component={createConnect} />
                    <Route path="/addExplore" exact component={createExplore} />
                    <Route path="/addDownloads" exact component={createDownloads} />
                    <Route path="/addLinks" exact component={createLinks} />

                    {/* Edit Routes */}
                    <Route path="/edit/:id" exact component={EditPosts} />
                    <Route path="/editConnect/:id" exact component={EditConnect} />
                    <Route path="/editExplore/:id" exact component={EditExplore} />
                    <Route path="/editDownloads/:id" exact component={EditDownloads} />
                    <Route path="/editLinks/:id" exact component={EditLinks} />

                    {/*Redirect Routes*/}
                    <AdminRoute path="/coordinator" exact component={Coordinator} />
                    <StudentRoute path="/student" exact component={studentredirect} />
                    <Route path="/admin" exact component={Admin} /> {/*under development*/}

                    {/*Redirect Routes*/}
                    <StudentRoute path="/forms" exact component={Email} />
                    <StudentRoute path="/verify" exact component={Verify} />

                    {/* Reset Password */}
                    <Route path="/forgetPassword" exact component={ForgetPass} />
                    <Route path="/resetPassword/:token" exact component={ResetPass} />

                    {/* viewing Post after Read more */}
                    <Route path="/showPost/:id" exact component={ShowPost}></Route>

                    {/* Public Placement Records */}
                    <Route path="/placementRecords" exact component={PlacementRecord}></Route>
                </Switch>
            </>

        </Router>

    );
}

export default App;
