/**
 * Action Types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCES = '@repositories/LOAD_SUCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Repository {
  id: number;
  name: string;
}

/**
 * State type
 */

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
