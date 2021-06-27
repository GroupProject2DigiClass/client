import React, { useState } from "react";

export default function stud() {
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
    ];
    return (<div>

        <center>
            <h2 className="a">
                Assignments
            </h2>
            <div>
                {data.map((user) => (
                    <div className="assignstu">
                        <table className="table1">
                        <tr className="tablerow">
                            <td className="tablecol">Jill</td>
                            <td className="tablecol">Smith</td>
                            <td className="tablecol">50</td>
                            <td className="tablecol" ><button type="submit">submit</button></td>
                        </tr>
                        </table>
                    </div>

                ))}
            </div>
        </center>


    </div>);
}