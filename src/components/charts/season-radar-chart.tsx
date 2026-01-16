"use client"

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export type SeasonPreferenceDatum = {
  season: "Raya" | "CNY" | "Merdeka" | "Deepavali"
  value: number
}

type SeasonRadarChartProps = {
  data: SeasonPreferenceDatum[]
  maxValue?: number
}

const seasonDetails: { [key: string]: { description: string; monthRange: string } } = {
  Raya: {
    description: "Eid celebration - vibrant festivities and family gatherings",
    monthRange: "April - May",
  },
  CNY: {
    description: "Chinese New Year - colorful celebrations and cultural traditions",
    monthRange: "January - February",
  },
  Merdeka: {
    description: "Malaysia Independence Day - patriotic celebrations and festivities",
    monthRange: "August",
  },
  Deepavali: {
    description: "Festival of Lights - cultural and spiritual celebrations",
    monthRange: "October - November",
  },
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { value: number; name: string; payload: { season: string; value: number; fullMark: number } }[] }) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    const season = data.payload.season as keyof typeof seasonDetails
    const details = seasonDetails[season]
    const percentage = ((data.value / data.payload.fullMark) * 100).toFixed(0)

    return (
      <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
        <p className="font-semibold text-gray-900">{season}</p>
        <p className="mt-1 text-sm text-gray-600">{details.description}</p>
        <p className="mt-2 text-xs text-gray-500">📅 {details.monthRange}</p>
        <div className="mt-3 border-t border-gray-200 pt-2">
          <p className="text-sm font-medium text-violet-700">
            {data.value} / {data.payload.fullMark} members ({percentage}%)
          </p>
        </div>
      </div>
    )
  }

  return null
}

export function SeasonRadarChart({ data, maxValue = 4 }: SeasonRadarChartProps) {
  const chartData = data.map((d) => ({
    season: d.season,
    value: d.value,
    fullMark: maxValue,
  }))

  return (
    <div className="h-64 w-full md:h-72 lg:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={chartData}
          margin={{ top: 16, right: 24, bottom: 16, left: 24 }}
        >
          <PolarGrid
            stroke="#E5E7EB"
            radialLines={true}
            gridType="polygon"
          />
          <PolarAngleAxis
            dataKey="season"
            tick={{ fill: "#4B5563", fontSize: 12 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            contentStyle={{
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
            }}
            cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
          />
          <Radar
            name="Season Preference"
            dataKey="value"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.25}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}


