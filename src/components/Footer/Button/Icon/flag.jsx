import React from 'react'

const backgroundStyle = {
  fill: '#fff',
  stroke: '#ff0',
  strokeWidth: 2
}
const unionStyle = {
  fill: '#00f'
}
const redStripeStyle = {
  fill: '#f00'
}

export const americanFlag = (
  <svg viewBox="0 0 100 56" width="100%" height="100%">
    <rect x="1" y="1" width="98" height="54" style={backgroundStyle} />
    <rect x="2" y="2" width="48" height="28" style={unionStyle} />
    <path transform="scale(.26458)" d="m188.98 7.5586v21.166h181.42v-21.166h-181.42zm0 42.771v21.166h181.42v-21.166h-181.42zm0 42.332v21.164h181.42v-21.164h-181.42zm-181.42 43.842v21.166h362.84v-21.166h-362.84zm0 46.236v21.166h362.84v-21.166h-362.84z" style={redStripeStyle} />
  </svg>
)

export const solidFlag = (
  <svg viewBox="0 0 100 56" width="100%" height="100%">
    <path transform="scale(.26458)" d="m7.5586 7.5586v105.83h177.64v-105.83h-177.64zm185.2 0v21.166h177.64v-21.166h-177.64zm0 42.822v21.166h177.64v-21.166h-177.64zm0 42.217v21.166h177.64v-21.166h-177.64zm-185.2 43.906v21.166h362.84v-21.166h-362.84zm0 46.236v21.166h362.84v-21.166h-362.84z" stroke-width="3.7795" />
  </svg>
)
