import React, { Fragment } from 'react';

const LabelProp = (props) =>{
    const {description, propName} = props;
    return (
        <p>{description} {propName}</p>
    )
}

const Person = (props) => {

    const {name, age} = props;

    return (
        <Fragment>
            <LabelProp description="My name is:" propName={name} />
            <LabelProp description="Age:" propName={age} />
        </Fragment>
    )
};

export default Person;