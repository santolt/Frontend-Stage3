export interface MovieListResponse {
  data: {results: any; totalResults: number};
  error: boolean;
  Error?: string;
}

export interface MovieInfoInterface {
  poster: string;
  title: string;
  type: string;
  year: string;
  id: string;
  selected: boolean;
}

export interface MovieInterface {
  poster: string;
  title: string;
  type: string;
  year: string;
}
