import React from "react";
import { Input, Button } from "semantic-ui-react";

function SearchLocation(props) {
  return (
    <>
      <h1>{props.value}</h1>

      <Input
        className="search-input"
        placeholder="Search weather by city name"
        value={props.place}
        onChange={props.onChange}
      />
      <Button color="teal" onClick={props.onSearch}>
        Search
      </Button>
    </>
  );
}

export default SearchLocation;
