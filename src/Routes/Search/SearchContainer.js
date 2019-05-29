import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    serchTerm: "",
    error: null,
    loading: false
  };

  render() {
    const { movieResult, tvResult, serchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        serchTerm={serchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
