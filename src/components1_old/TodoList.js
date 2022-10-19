import React from "react";

export default class TodoList extends React.Component {

    render() {
        return (
            <>
                {this.props.list.map((el, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.text}</td>
                        <td>X</td>
                    </tr>

                ))}

            </>
        );
    };
} 