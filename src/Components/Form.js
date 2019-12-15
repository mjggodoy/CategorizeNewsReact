import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        categories: 'general'
    };

    changeCategory = e => {
        this.setState({
            category : e.target.value
        }, () => {
            this.props.retrieveNews(this.state.category);
            });
    }
        

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Find something by category</h2>
                            <div className="input-field col s12 m12">
                            <select onChange={this.changeCategory}>
                                <option value="general">General</option>
                                <option value="technology">Technology</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="business">Business</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

Form.propTypes = {
    retrieveNews : PropTypes.func.isRequired,
}
export default Form;