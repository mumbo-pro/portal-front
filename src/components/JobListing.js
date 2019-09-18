import React, {Component} from 'react';
import {Button, Container, ListGroup, ListGroupItem} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteItem, getJobs} from '../actions/jobActions';
import PropTypes from 'prop-types';

class JobListing extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    };

    render() {
        const {items} = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    {this.props.isAuthenticated ? (
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                            &times;
                                        </Button>
                                    ) : null}
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    {getItems: getJobs, deleteItem}
)(JobListing);
