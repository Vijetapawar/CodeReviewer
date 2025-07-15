import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("⚠️ Error in Markdown rendering:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h4 style={{ color: "red" }}>
          Something went wrong while rendering the review.
        </h4>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
