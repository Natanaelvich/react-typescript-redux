import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/respositories/types';
import * as RepositoryActions from '../../store/ducks/respositories/actions';
import { bindActionCreators, Dispatch } from 'redux';
import Repositoryitem from '../Repositoryitem';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepoistoryList extends Component<Props> {
  componentDidMount() {
    document.title = 'Lista de Repositórios';

    const { loadRequest } = this.props;

    loadRequest();
  }
  render() {
    const { repositories } = this.props;
    return (
      <ul>
        {repositories.map(repository => (
          <Repositoryitem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoistoryList);
