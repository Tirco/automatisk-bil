radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.stop(BBStopMode.Brake)
        KanKjøre = 0
    } else if (receivedNumber == 1) {
        KanKjøre = 1
    } else {
    	
    }
})
let KanKjøre = 0
bitbot.select_model(BBModel.XL)
radio.setGroup(21)
KanKjøre = 1
bitbot.setUpdateMode(BBMode.Auto)
basic.forever(function () {
    if (KanKjøre == 1) {
        if (bitbot.sonar(BBPingUnit.Centimeters) < 8) {
            bitbot.goms(BBDirection.Reverse, 50, 500)
            bitbot.setLedColor(0x659900)
            bitbot.rotatems(BBRobotDirection.Right, 20, 500)
        } else {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 45)
            bitbot.move(BBMotor.Right, BBDirection.Forward, 30)
            bitbot.setLedColor(0x00FF00)
        }
    } else {
        bitbot.setLedColor(0xFF0000)
    }
})
