import React,{Fragment} from 'react';
import { FormattedMessage } from 'react-intl';

import {getErrorCode, removeError} from 'utils/helpers';
import {ERROR_DEFAULT} from 'constants/errors';

import Button from 'components/Button';
import H3 from 'components/H3';
import P from 'components/P';
import Wrapper from './Wrapper';
import Inner from './Inner';
import Img from './Img';
import messages from './messages';
import Ico from './error.png';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        const errors = getErrorCode();
        this.state = { 
            hasError: errors ? true : false, 
            codeError: errors ? errors : ERROR_DEFAULT
        };
        this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        this.setState({ hasError: true });
        this.setState({ codeError: ERROR_DEFAULT });
    }
    
    // getDerivedStateFromError(error) {
    //     // Update state so the next render will show the fallback UI.
    //     this.setState({ hasError: true });
    //     this.setState({ codeError: ERROR_DEFAULT });
    // }

    componentDidMount() {
        removeError();
    }

    handleClick() {
        this.setState({hasError: false});
    }

    render() {
        let uiError = ""; 
        let mCodeError = messages[this.state.codeError] ? this.state.codeError : ERROR_DEFAULT;
        if (this.state.hasError) {
            uiError = (
                <Wrapper>
                    <Inner>
                        <Img src={Ico} alt="Error icon" />
                        <H3><FormattedMessage {...messages.header} /></H3>
                        <P><FormattedMessage {...messages[mCodeError]} /><br/><FormattedMessage {...messages.desc} /></P>
                        <Button onClick={this.handleClick}><FormattedMessage {...messages.close} /></Button>
                    </Inner>
                </Wrapper>
            ); 
        }
        return <Fragment>{this.props.children}{uiError}</Fragment>;
    }
}

export default ErrorBoundary;