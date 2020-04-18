import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function ErrorBoundary(ComponentToWrap) {
    class Boundary extends Component {
        state = {
            hasError: false
        }
    
        static propTypes = {
            children: PropTypes.any
        }
    
        static getDerivedStateFromError(error) {
            return { hasError: true }
        }
    
        componentDidCatch(error, errorInfo) {
            // Do some logging here
        }
    
        render() {
            if (this.state.error) {
                return (
                    <h1> Something went wrong. </h1>
                )
            }
            return <ComponentToWrap {...this.props}/>
        }
    }

    return Boundary
}

