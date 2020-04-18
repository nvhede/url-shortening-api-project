import React, { Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'react-router'
import { withRouter, Route } from 'react-router-dom'

import ErrorWrapper from './ErrorWrapper'
import Loading from '../../components/Loading'

const WelcomePage = ErrorWrapper(lazy(() => import('../Welcome.js')))
const FeaturesPage = ErrorWrapper(lazy(() => import('../Features.js')))
const PricingPage = ErrorWrapper(lazy(() => import('../Pricing.js')))
const ResourcesPage = ErrorWrapper(lazy(() => import('../Resources.js')))

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route exact path={"/"}>
                    <WelcomePage/>
                </Route>
                <Route exact path={"/features"}>
                    <FeaturesPage/>
                </Route>
                <Route exact path={"/pricing"}>
                    <PricingPage/>
                </Route>
                <Route exact path={"/resources"}>
                    <ResourcesPage/>
                </Route>
            </Switch>
        </Suspense>
    )
}

AppRoutes.propTypes = {
    location: PropTypes.object,
}

export default withRouter(AppRoutes)