/* eslint-disable no-undef, no-unused-vars */
let capture
let recorder

let video1, video2, video3, video4
let audio1


function setup() {
  noCanvas()
  
  // canvas = createCanvas(720, 480)
  // canvas.parent('#sketch-holder')
  // background(50)

  let constraints = {
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 240
      },
      optional: [{maxFrameRate: 30}]
    },
    audio: true
  }

  capture = createCapture(constraints, stream => {
    recorder = new MediaRecorder(stream)
  })
  capture.size(320, 240)
  capture.parent('#monitor')
  capture.style('width', '100%')
  capture.style('display', 'block')
}

function keyPressed() {

  function startRecording() {
    recorder.start()
    select('#monitor-is-recording').style('display', 'block')
  }

  if (key === 'q') {  // start reczording
    startRecording()
    select('#vid-1-is-recording').style('display', 'block')
  }

  if (key === 'w') {  // start recording
    startRecording()
    select('#vid-2-is-recording').style('display', 'block')
  }

  if (key === 'e') {  // start recording
    startRecording()
    select('#vid-3-is-recording').style('display', 'block')
  }

  if (key === 'r') {  // start recording
    startRecording()
    select('#vid-4-is-recording').style('display', 'block')
  }
  

  if (key === 'a') {  // start video playback
    // video1.stop()   // don't actually need this. makes the video flash
    video1.play().time(0.05)
  }

  if (key === 's') {  // start video playback
    // video1.stop()   // don't actually need this. makes the video flash
    video2.play().time(0.05)
  }

  if (key === 'd') {  // start video playback
    // video1.stop()   // don't actually need this. makes the video flash
    video3.play().time(0.05)
  }

  if (key === 'f') {  // start video playback
    // video1.stop()   // don't actually need this. makes the video flash
    video4.play().time(0.05)
  }
}

function keyReleased() {
  if (key === 'q') {  // create video
    recorder.ondataavailable = e => {
      if (video1) {  // if video already exists, just replace src
        video1.src = URL.createObjectURL(e.data)
      }
      else {  // if no video exists, create new one
        video1 = createVideo(URL.createObjectURL(e.data), videoLoad)
        video1.parent('#vid-1')
        styleVideo(video1)
      }
    }
    recorder.stop()

    select('#monitor-is-recording').style('display', 'none')
    select('#vid-1-is-recording').style('display', 'none')
  }

  if (key === 'w') {  // create video
    recorder.ondataavailable = e => {
      if (video2) {  // if video already exists, just replace src
        video2.src = URL.createObjectURL(e.data)
      }
      else {  // if no video exists, create new one
        video2 = createVideo(URL.createObjectURL(e.data), videoLoad)
        video2.parent('#vid-2')
        styleVideo(video2)
      }
    }
    recorder.stop()

    select('#monitor-is-recording').style('display', 'none')
    select('#vid-2-is-recording').style('display', 'none')
  }

  if (key === 'e') {  // create video
    recorder.ondataavailable = e => {
      if (video3) {  // if video already exists, just replace src
        video3.src = URL.createObjectURL(e.data)
      }
      else {  // if no video exists, create new one
        video3 = createVideo(URL.createObjectURL(e.data), videoLoad)
        video3.parent('#vid-3')
        styleVideo(video3)
      }
    }
    recorder.stop()

    select('#monitor-is-recording').style('display', 'none')
    select('#vid-3-is-recording').style('display', 'none')
  }

  if (key === 'r') {  // create video
    recorder.ondataavailable = e => {
      if (video4) {  // if video already exists, just replace src
        video4.src = URL.createObjectURL(e.data)
      }
      else {  // if no video exists, create new one
        video4 = createVideo(URL.createObjectURL(e.data), videoLoad)
        video4.parent('#vid-4')
        styleVideo(video4)
      }
    }
    recorder.stop()

    select('#monitor-is-recording').style('display', 'none')
    select('#vid-4-is-recording').style('display', 'none')
  }
}

function styleVideo(vid) {
  vid.size(320, 240)
  vid.style('display', 'block')
}


function videoLoad() {
  
}