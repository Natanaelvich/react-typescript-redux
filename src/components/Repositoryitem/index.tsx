import React from 'react';
import { Repository } from '../../store/ducks/respositories/types';

interface OwnProps {
  repository: Repository;
}

export default function Repositoryitem(props: OwnProps) {
  return <li>{props.repository.name}</li>;
}
