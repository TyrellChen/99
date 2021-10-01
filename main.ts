input.onButtonPressed(Button.A, function () {
    basic.showString("520")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I Love You")
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 99; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
