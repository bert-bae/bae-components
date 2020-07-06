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

### Custom Styling

Below is an example of the theme styling in SASS. You can use this as a guideline to override the necessary styles for your own customizations

```
$primaryColor: #fa8072;
$secondaryColor: #ffa98f;
$highlightTextColor: #d95e39;
$activeTextColor: #f8f8ff;

.bae-calendar-container {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $activeTextColor;
  }

  .bae-calendar-header {
    background-color: $primaryColor;
  }

  .bae-weekday-indicators {
    .weekday-indicator-icon {
      color: $highlightTextColor;
      &.active {
        background-color: $primaryColor;
        color: $activeTextColor;
      }
    }
  }

  .bae-date-indicator {
    .date-icon {
      &.active {
        background-color: $secondaryColor;
        color: $activeTextColor;
      }
      &.selected {
        background-color: $primaryColor;
        color: $activeTextColor;
      }
    }
  }

  .bae-month-indicator {
    background-color: $primaryColor;
  }
}
```
