import React from 'react'

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

            let cellsToRender = row.map(cell => <div>{cell.cell_type}</div>)
            rowsToRender.push(cellsToRender);
        }

        return rowsToRender;
    }

    render() {
        return this.renderRows()
    }
}

export default Plane