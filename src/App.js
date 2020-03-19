import React from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {
    return (
        <>
            <h3>Corona van RIVM</h3>
            <Chart
                chartType="LineChart"
                spreadSheetUrl="https://docs.google.com/spreadsheets/d/1SNQfSo6Ia8icq_YbXrjC4JO8p-Qlr1Dvqzfjgbrnpqk/edit?usp=sharing"
                formatters={[
                    {
                        type: 'DateFormat',
                        column: 1,
                        options: {
                            formatType: 'long',
                        }
                    },
                ]}
                options={{
                    hAxis: {
                        format: 'dd-MMM'
                    },
                    vAxis: {
                        format: 'decimal',
                    },
                }}
                chartPackages={['corechart', 'controls']}
                controls={[
                    {
                        controlType: 'DateRangeFilter',
                        options: {
                            filterColumnLabel: 'datum',
                            ui: {format: {pattern: 'dd-MMM'}},
                        },
                    },
                ]}
                width="100%"
                height="600px"
            />
        </>
    );
}

export default App;
