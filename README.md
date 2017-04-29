# Webcam Viewer

This is a simple electron application to launch a frameless, borderless feed from your Webcam. You can drag and resize the window as well as click to pause and unpause the feed.

I wrote this in a few minutes for my personal use. As such it's been tested on OSX but I'm unsure of other platforms.

# What's the point?

I use it for timelogging. I take screenshots of my desktop and it helps to see whether I was at my desk or not. Also, try shooting a profile view of yourself if you want to be reminded how terrible sitting at a desk is for your posture! It's done wonders for me.

# Troubleshooting

I've noticed a few times that if my computer suddenly sleeps that the webcam may stop working. The camera doesn't get properly released by the program during a sudden shutdown. Then if you try to restart the program or use the camera in another application you may get error messages. A restart will solve it. Alternately if you're on OSX typically if you open Activity Monitor and close VDCAssistant and AppleCameraAssistant that should also solve the issues. Occassionally I need to do it a couple times..computers, right? You can also run this bash command if you prefer:
```bash
sudo killall AppleCameraAssistant; sudo killall VDCAssistant
```
# Getting started
```bash
# Clone this repository
git clone https://github.com/fredantell/electron-webcam
# Go into the repository
cd electron-webcam
# Install dependencies
npm install
# Run the app
npm start
```

# Building
If you run `npm run package` at the terminal then you should be able to build the application. On OSX you'll see an application file located in ~/Desktop/WebcamViewer/WebcamViewer-darwin-x64/
Copy this to your applications folder and launch it like any other app.

## License
[MIT](LICENSE.md)
