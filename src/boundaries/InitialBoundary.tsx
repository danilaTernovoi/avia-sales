import React, { Component } from 'react';
import Button from '../components/Button';

interface State {
  hasError: boolean;
}

class InitialBoundary extends Component<{}, State> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error | undefined) {
    if (error instanceof Error) this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="fullHeight">
          <div className="error__inner">
            <div className="error__title">
              Что-то пошло не так <br />
              Попробуйте перезагрузить страницу
            </div>

            <Button onClick={() => console.log('try again')}>Попробывать ещё раз</Button>
          </div>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}

export default InitialBoundary;
