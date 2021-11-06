import * as React from "react";
import NumberFormat from "react-number-format";

export const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
    props,
    ref
) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
});