import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const playstyle = (props) => (
    <ResponsivePie
        data={[
            {
                "id": "Goals",
                "label": "Goals",
                "value": props.goals,
                "color": "hsl(350, 69%, 38%)"
            },
            {
                "id": "Assists",
                "label": "Assists",
                "value": props.assists,
                "color": "hsl(355, 65%, 59%)"
            },
            {
                "id": "Saves",
                "label": "Saves",
                "value": props.saves,
                "color": "hsl(351, 100%, 22%)"
            }
        ]}
        margin={{
            "top": -25,
            "right": 14,
            "bottom": 22,
            "left": 12
        }}
        innerRadius={0.3}
        cornerRadius={7}
        padAngle={5}
        colorBy="id"
        colors={[
            "hsl(350, 69%, 38%)",
            "hsl(355, 65%, 59%)",
            "hsl(351, 100%, 22%)"
        ]}
        borderWidth={3}
        borderColor="inherit:darker(0.5)"
        enableRadialLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#def"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={{
            "tooltip": {
                "color": "hsl(0, 0%, 13%)"
            }
        }}
    />
);

export default playstyle;