import React from "react";
import "./App.css";
import { Checkbox, DateInput, Input } from "./helpers/inputs.tsx";

const inputType2Component = {
    string: Input,
    date: DateInput,
    checkbox: Checkbox
}

class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const id2value = Object.fromEntries(
            this.props.model.paramValues.map(({ paramId, value }) => [paramId, value])
        );
        this.state = { id2value };
    }

    getModel(): Model {
        const paramValues: ParamValue[] = Object.entries(this.state.id2value)
            .map(([paramId, value]) => ({ paramId: Number(paramId), value }))

        return {
            ...this.props.model,
            paramValues,
        };
    }

    handleChange = (name: number, value: string | boolean) => {
        this.setState(prev => ({
            id2value: {
                ...prev.id2value,
                [name]: value,
            },
        }));
    }

    render() {

        return (
            <div>
                {this.props.params.map(({ id, name, type }) => {
                    const Component = inputType2Component[type] ?? Input;

                    return (
                        <label key={id}>
                            <span>{name}</span>
                            <Component
                                value={this.state.id2value[id]}
                                id={id}
                                onChange={(value) => this.handleChange(id, value)}
                            />
                        </label>
                    )
                })}
            </div>
        );
    }
}

function App() {
    const params = [
        {
            "id": 1,
            "name": "Назначение",
            "type": "string"
        },
        {
            "id": 2,
            "name": "Длина",
            "type": "string"
        },
        {
            id: 111,
            "name": "День рождения",
            "type": "date",
        },
        {
            id: 222,
            "name": "Тебе больше 18?",
            "type": "checkbox",
        },
    ]
    const model = {
        "paramValues": [
            {
                "paramId": 1,
                "value": "повседневное"
            },
            {
                "paramId": 2,
                "value": "макси"
            },
            {
                "paramId": 111,
                "value": "2024-03-14"
            },
            {
                "paramId": 222,
                "value": true,
            },
        ]
    }

    return (
        <div className="App">
            <ParamEditor params={params} model={model} />
        </div>
    );
}

export default App;

