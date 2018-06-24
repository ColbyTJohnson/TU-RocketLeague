import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const playstyle = () => (
    <ResponsivePie
        data={[
            {
                "id": "Goals",
                "label": "Goals",
                "value": 84,
                "color": "hsl(350, 69%, 38%)"
            },
            {
                "id": "Assists",
                "label": "Assists",
                "value": 578,
                "color": "hsl(291, 70%, 50%)"
            },
            {
                "id": "Saves",
                "label": "Saves",
                "value": 357,
                "color": "hsl(201, 70%, 50%)"
            }
        ]}
        margin={{
            "top": -25,
            "right": 12,
            "bottom": 20,
            "left": 12
        }}
        innerRadius={0.3}
        cornerRadius={7}
        padAngle={5}
        colorBy="id"
        borderWidth={3}
        borderColor="inherit:darker(0.5)"
        enableRadialLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={{
            "tooltip": {
                "container": {
                    "fontSize": "13px",
                    "textColor": "#222"
                }
            },
            "labels": {
                "textColor": "#222"
            }
        }}
    />
);

export default playstyle;