import React from 'react';
    import Chart from "react-google-charts";
import Badge from "./components/Badge";

const options = {
    curveType: "function",
    hAxis: {
        format: 'dd-MMM',
    },
    vAxis: {
        format: 'decimal',
    },
    title: 'Corona cijfers van het RIVM',
    legend: { position: "bottom" },
};

function App() {
    return (
        <>
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
                options={options}
                chartPackages={['corechart', 'controls']}
                width="100%"
                height="400px"
            />
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
                    curveType: "function",
                    hAxis: {
                        format: 'dd-MMM'
                    },
                    vAxis: {
                        format: 'decimal',
                        scaleType: 'log'
                    },
                    title: 'Corona cijfers van het RIVM',
                    legend: { position: "bottom" },
                }}
                chartPackages={['corechart', 'controls']}
                width="100%"
                height="400px"
            />
            <Chart
                chartType="LineChart"
                spreadSheetUrl="https://docs.google.com/spreadsheets/d/1SNQfSo6Ia8icq_YbXrjC4JO8p-Qlr1Dvqzfjgbrnpqk/edit?usp=sharing"
                spreadSheetQueryParameters={{
                    headers: 1,
                    query: 'SELECT D, C',
                }}
                options={{
                    curveType: "function",
                    hAxis: {
                        format: 'decimal',
                        scaleType: 'log',
                        title: 'totaal'
                    },
                    vAxis: {
                        format: 'decimal',
                        scaleType: 'log',
                        title: 'nieuw per dag'
                    },
                    title: 'Corona cijfers van het RIVM',
                    legend: { position: "none" },
                }}
                chartPackages={['corechart']}
                width="100%"
                height="400px"
            />
            <a href='https://www.rivm.nl/nieuws/actuele-informatie-over-coronavirus'>bron RIVM</a>
            <p>
                <Badge user={'bhuism'} repo={'corona'} ghash={process.env.REACT_APP_COMMIT_SHA}/>
            </p>
        </>
    );
}

export default App;
