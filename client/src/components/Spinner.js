import React from "react";
import { Dna } from 'react-loader-spinner'

const Spinner = () => {
    return (

        <
        div class = "d-flex justify-content-center spinner" >
        <
        Dna visible = { true }
        height = "110px"
        width = "200px"
        ariaLabel = "dna-loading"
        wrapperStyle = {
            {}
        }
        wrapperClass = "dna-wrapper" /
        >
        <
        /div> 


    );
};

export default Spinner;