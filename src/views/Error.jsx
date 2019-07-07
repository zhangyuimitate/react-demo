import React from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>数据加载出错.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
