import React from 'react'
import './Plane.css' 

class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [[
                {
                    cell_type: 'entrance',
                },
                {
                    cell_type: 'aisle',
                },
                {
                    cell_type: 'aisle',
                },
                {
                    cell_type: 'aisle',
                },
                {
                    cell_type: 'aisle',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'wall',
                },
            ],
            [
                {
                    cell_type: 'wall',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'aisle',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'seat',
                },
                {
                    cell_type: 'wall',
                },
            ]]
        }
    }

    renderRows() {
        const rowsToRender = []

        for (let row of this.state.rows) {
                        
            let cellsToRender = row.map(cell => {
                let className = 'Cell ' + cell.cell_type;

            return <div className={className}>{cell.cell_type}</div>
        })
            rowsToRender.push(cellsToRender);
        }

        return rowsToRender;
    }

    render() {
        return (<div className="Plane">
                {this.renderRows()}
            </div>)
    }
}

export default Plane