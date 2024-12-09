import React from 'react';

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: string[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: { [key: number]: string };
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const paramValues: { [key: number]: string } = {};
    props.model.paramValues.forEach(pv => {
      paramValues[pv.paramId] = pv.value;
    });

    this.state = { paramValues };
  }

  handleChange = (paramId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState(prevState => ({
      paramValues: {
        ...prevState.paramValues,
        [paramId]: value
      }
    }));
  }

  getModel(): Model {
    const paramValues: ParamValue[] = Object.entries(this.state.paramValues).map(([paramId, value]) => ({
      paramId: Number(paramId),
      value
    }));

    return {
      paramValues,
      colors: this.props.model.colors
    };
  }

  render() {
    return (
      <div>
        {this.props.params.map(param => (
          <div key={param.id}>
            <label>
              {param.name}:
              <input
                type="text"
                value={this.state.paramValues[param.id] || ''}
                onChange={event => this.handleChange(param.id, event)}
              />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;