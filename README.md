# Bae Components

Custom React components used in projects.

# Stack

- React
- CSS / SASS

# Components

## Bae Calendar

`import { BaeCalendar } from 'bae-components'`

### Props

- `theme`:
  - description: Sets the style theme. If you want to custom style it, you can leave this blank and apply your own CSS styles in your style files.
  - required: `false`
  - default: `none`
  - options:
    - `salmon`
    - `monochrome`
    - `rouge`
- `activeDates`:
  - description: An array of date objects in UTC format to be passed into the calendar. This will highlight dates provided in the passed in array. Active elements will have a className `active`.
  - required: `false`
  - default: `null`
- `onDateSelect`:
  - description: Callback function to have access to the date that is selected. The date object returned will be in UTC format.
  - required: `false`
  - default: `null`
  - example: `date => console.log(date)`
