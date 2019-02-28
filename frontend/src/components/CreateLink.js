import React, { Component } from "react";
import { CREATE_POST_MU } from "../queries/link";
import { Mutation } from "react-apollo";

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={CREATE_POST_MU}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>{" "}
      </div>
    );
  }
}

export default CreateLink;
