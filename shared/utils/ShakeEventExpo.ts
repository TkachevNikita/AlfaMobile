import {
    Accelerometer
} from 'expo-sensors';

const THRESHOLD = 450; // Adjust this value for sensitivity

export class ShakeEventExpo {
    static addListener(handler: () => void) {
        let last_x = 0;
        let last_y = 0;
        let last_z = 0;
        let lastUpdate = 0;

        Accelerometer.addListener(accelerometerData => {
            let {
                x,
                y,
                z
            } = accelerometerData;
            let currTime = Date.now();

            if ((currTime - lastUpdate) > 200) {
                let diffTime = (currTime - lastUpdate);
                lastUpdate = currTime;

                let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

                if (speed > THRESHOLD) {
                    handler();
                }

                last_x = x;
                last_y = y;
                last_z = z;
            }
        });
    }

    static removeListener() {
        Accelerometer.removeAllListeners();
    }
}