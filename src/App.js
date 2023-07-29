import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';

import { DefaultLayout } from './components/Layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        // set default layout when it not be set in routes
                        let Layout = DefaultLayout;

                        //set layout when it is existed in routes
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
