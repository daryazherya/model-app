interface Param {
    id: number;
    name: string;
    type: string;
}
interface ParamValue {
    paramId: number;
    value: string | boolean;
}
interface Model {
    paramValues: ParamValue[];
    // colors: '';
}

interface Props {
    params: Param[];
    model: Model;
}
interface State {
    id2value: { [key: number]: string | boolean };
}

interface InputProps {
    value: string;
    id: number;
    onChange: (value: string | boolean) => void;
}