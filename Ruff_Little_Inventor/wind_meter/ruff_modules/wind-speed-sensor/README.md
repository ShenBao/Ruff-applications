[![Build Status](https://travis-ci.org/jerry-weng/wind-speed-sensor.svg)](https://travis-ci.org/jerry-weng/wind-speed-sensor)

# Wind Speed Sensor Driver

Wind speed sensor driver with ADC interface.

## Device Model

- [fs-v1-30](https://rap.ruff.io/devices/fs-v1-30)

## Install

```sh
> rap device add --model fs-v1-30 --id <device-id>
```

## Usage

```js
$('#<device-id>').getVelocity(function (error, velocity) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('current wind speed is ', velocity, ' m/s.');
});
```

## API References

### Methods

#### `getVelocity(callback)`

Get the speed of wind in `m/s`.

- **callback:** The callback that takes the first argument as the possible error and the second argument as the velocity value in `m/s`.
The range of the velocity value is [0, 30].

## Supported OS

Test passed on Ruff v1.6.0

## Note

Make sure the sensor and board have the common ground.
