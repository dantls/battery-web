
# Battery Web

Battery Web is a simple web-based application that allows users to monitor their device's battery status directly from their browser. This project leverages the Web Battery API to provide real-time information about the battery level, charging status, and estimated time until full charge or discharge.

## Features

- **Real-time Battery Status**: Displays the current battery level as a percentage.
- **Charging Status**: Indicates whether the device is currently charging or not.
- **Time Estimates**: Provides estimates for the time remaining until the battery is fully charged or discharged.
- **Responsive Design**: Works seamlessly across different devices and screen sizes.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dantls/battery-web.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd battery-web
   ```

3. **Open `index.html`**:
   Simply open the `index.html` file in your preferred web browser to start using the application.

4. **View Battery Information**:
   The application will automatically display the current battery status, including the battery level, charging status, and time estimates.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For interacting with the Web Battery API and updating the UI in real-time.

## Web Battery API

The Web Battery API provides access to the battery status of the device. This project uses the following properties and events:

- `navigator.getBattery()`: Returns a promise that resolves to a `BatteryManager` object.
- `BatteryManager.level`: The current battery level as a value between 0.0 and 1.0.
- `BatteryManager.charging`: A boolean indicating whether the device is currently charging.
- `BatteryManager.chargingTime`: The time in seconds until the battery is fully charged.
- `BatteryManager.dischargingTime`: The time in seconds until the battery is fully discharged.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

1. **Fork the Repository**:
   Click the "Fork" button at the top right of this page.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/battery-web.git
   ```

3. **Create a New Branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Commit Your Changes**:
   ```bash
   git commit -m "Add some feature"
   ```

5. **Push to the Branch**:
   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Open a Pull Request**:
   Go to the original repository and click the "New Pull Request" button.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the [Web Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) for making this project possible.
- Inspired by various open-source projects and tutorials available online.


Enjoy monitoring your battery status with Battery Web! 🔋
