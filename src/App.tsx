import React from 'react';
import Chart from "react-google-charts";
import Badge from "./components/Badge";
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <>
            <main>
                <Container fluid={true}>
                    <Row>
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
                                legend: {position: "none"},
                            }}
                            width="100%"
                            height={400}
                        />
                    </Row>
                    <Row>
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
                                    scaleType: 'log',
                                    title: 'aantal'
                                },
                                title: 'Corona cijfers van het RIVM',
                                legend: {position: "bottom"},
                            }}
                            width="100%"
                            height={400}
                        />
                    </Row>
                    <Row>
                        <Chart
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
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
                                    format: 'dd-MMM',
                                },
                                vAxis: {
                                    format: 'decimal',
                                    title: 'aantal'
                                },
                                title: 'Corona cijfers van het RIVM',
                                legend: {position: "bottom"},
                            }}
                            width="100%"
                            height={400}
                        />
                    </Row>
                    <Row>
                        <a href='https://www.rivm.nl/nieuws/actuele-informatie-over-coronavirus'>bron RIVM</a>
                    </Row>
                </Container>
            </main>
            <footer>
                <Container>
                    <Badge user={'bhuism'} repo={'corona'} ghash={process.env.REACT_APP_COMMIT_SHA}/>
                </Container>
            </footer>
        </>
    );
}

export default App;
