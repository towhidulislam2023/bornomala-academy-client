import React from 'react';
import UsePaymentProduct from '../../../hook/UsePaymentProduct/UsePaymentProduct';

const EnrolledClasses = () => {
    const [Payclasses]=UsePaymentProduct()
    console.log(Payclasses);
    return (
        <div>
            <h1>This is Enrolod Class</h1>
        </div>
    );
};

export default EnrolledClasses;