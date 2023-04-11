input.onButtonPressed(Button.A, function () {
    radio.sendString("Hoi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
