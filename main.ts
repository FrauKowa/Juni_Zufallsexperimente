input.onPinPressed(TouchPin.P0, function () {
    basic.setLedColor(0xff0000)
    led.setBrightness(50)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Kopf oder Zahl?")
    Anzahl_Münzwurf = 1
    Anzahl_Kopf = 1
    Anzahl_Zahl = 1
    Anzahl_SSPSpiele = 0
    Anzahl_Stein = 0
    Anzahl_Schere = 0
    Anzahl_Papier = 0
    Ergebnis_Kugelzug = 0
    Anzahl_blau = 0
    Anzahl_grün = 0
    Anzahl_rot = 0
    Anzahl_gelb = 0
    for (let index = 0; index < randint(3, 10); index++) {
        Anzahl_Münzwurf += 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard, 50)
            basic.showIcon(IconNames.SmallDiamond, 50)
        }
        if (randint(0, 1) == 0) {
            Anzahl_Kopf += 1
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # . .
                . # . # .
                . # . # .
                `)
        } else {
            Anzahl_Zahl += 1
            basic.showLeds(`
                . # # # .
                . . . # .
                . . # . .
                . # . . .
                . # # # .
                `)
        }
        basic.pause(1000)
    }
    basic.showNumber(Math.abs(Anzahl_Münzwurf) - 1)
    basic.pause(2000)
    basic.clearScreen()
    basic.setLedColor(0xffffff)
})
input.onButtonPressed(Button.A, function () {
    if (Math.abs(Anzahl_Kopf) != 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Kopf) - 1)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Zahl) - 1)
        basic.pause(2000)
        basic.clearScreen()
        basic.setLedColor(0xffffff)
    } else if (Math.abs(Anzahl_Stein) != 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Stein) - 1)
        basic.pause(1000)
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Schere) - 1)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Papier) - 1)
        basic.pause(2000)
        basic.clearScreen()
        basic.setLedColor(0xffffff)
    } else if (Math.abs(Anzahl_blau) != 0) {
        basic.setLedColor(0x0000ff)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_blau) - 1)
        basic.pause(2000)
        basic.setLedColor(0x00ff00)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_grün) - 1)
        basic.pause(2000)
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_rot) - 1)
        basic.pause(2000)
        basic.setLedColor(0xffff00)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_gelb) - 1)
        basic.pause(2000)
        basic.clearScreen()
        basic.setLedColor(0xffffff)
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.setLedColor(0x0000ff)
    led.setBrightness(50)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Farbkugel ziehen")
    Anzahl_Münzwurf = 0
    Anzahl_Kopf = 0
    Anzahl_Zahl = 0
    Anzahl_SSPSpiele = 0
    Anzahl_Stein = 0
    Anzahl_Schere = 0
    Anzahl_Papier = 0
    Anzahl_Kugelzug = 1
    Anzahl_blau = 1
    Anzahl_grün = 1
    Anzahl_rot = 1
    Anzahl_gelb = 1
    for (let index = 0; index < randint(3, 10); index++) {
        Anzahl_Kugelzug += 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard, 50)
            basic.showIcon(IconNames.SmallDiamond, 50)
        }
        Ergebnis_Kugelzug = randint(0, 3)
        if (Ergebnis_Kugelzug == 0) {
            Anzahl_blau += 1
            basic.setLedColor(0x0000ff)
        } else if (Ergebnis_Kugelzug == 1) {
            Anzahl_grün += 1
            basic.setLedColor(0x00ff00)
        } else if (Ergebnis_Kugelzug == 2) {
            Anzahl_rot += 1
            basic.setLedColor(0xff0000)
        } else {
            Anzahl_gelb += 1
            basic.setLedColor(0xffff00)
        }
        basic.pause(1000)
    }
    basic.showNumber(Math.abs(Anzahl_Kugelzug) - 1)
    basic.pause(2000)
    basic.clearScreen()
    basic.setLedColor(0xffffff)
})
input.onButtonPressed(Button.B, function () {
    if (Math.abs(Anzahl_Kopf) != 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Kopf) - 1) * (100 / (Math.abs(Anzahl_Münzwurf) - 1))), 150)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Zahl) - 1) * (100 / (Math.abs(Anzahl_Münzwurf) - 1))))
        basic.pause(2000)
        basic.clearScreen()
        basic.setLedColor(0xffffff)
    } else if (Math.abs(Anzahl_Papier) != 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Stein) - 1) * (100 / (Math.abs(Anzahl_SSPSpiele) - 1))))
        basic.pause(2000)
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Schere) - 1) * (100 / (Math.abs(Anzahl_SSPSpiele) - 1))))
        basic.pause(2000)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Papier) - 1) * (100 / (Math.abs(Anzahl_SSPSpiele) - 1))))
        basic.pause(2000)
        basic.clearScreen()
        basic.setLedColor(0xffffff)
    } else if (Math.abs(Anzahl_blau) != 0) {
        basic.setLedColor(0x0000ff)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_blau) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))))
        basic.pause(2000)
        basic.setLedColor(0x00ff00)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_grün) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))))
        basic.pause(2000)
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_rot) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))))
        basic.pause(2000)
        basic.setLedColor(0xffff00)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_gelb) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))))
        basic.pause(2000)
        basic.clearScreen()
        basic.setLedColor(0xffffff)
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.setLedColor(0x00ff00)
    led.setBrightness(50)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Stein, Schere, Papier")
    Anzahl_Münzwurf = 0
    Anzahl_Kopf = 0
    Anzahl_Zahl = 0
    Anzahl_SSPSpiele = 1
    Anzahl_Stein = 1
    Anzahl_Schere = 1
    Anzahl_Papier = 1
    Anzahl_Kugelzug = 0
    Anzahl_blau = 0
    Anzahl_grün = 0
    Anzahl_rot = 0
    Anzahl_gelb = 0
    for (let index = 0; index < randint(3, 10); index++) {
        Anzahl_SSPSpiele += 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard, 50)
            basic.showIcon(IconNames.SmallDiamond, 50)
        }
        Ergebnis_SSPSpiel = randint(0, 2)
        if (Ergebnis_SSPSpiel == 0) {
            Anzahl_Stein += 1
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (Ergebnis_SSPSpiel == 1) {
            Anzahl_Schere += 1
            basic.showLeds(`
                # . . # #
                . # . # #
                . . # . .
                . # # # #
                # . . # #
                `)
        } else {
            Anzahl_Papier += 1
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        }
        basic.pause(1000)
    }
    basic.showNumber(Math.abs(Anzahl_SSPSpiele) - 1)
    basic.pause(2000)
    basic.clearScreen()
    basic.setLedColor(0xffffff)
})
let Ergebnis_SSPSpiel = 0
let Anzahl_Kugelzug = 0
let Anzahl_gelb = 0
let Anzahl_rot = 0
let Anzahl_grün = 0
let Anzahl_blau = 0
let Ergebnis_Kugelzug = 0
let Anzahl_Papier = 0
let Anzahl_Schere = 0
let Anzahl_Stein = 0
let Anzahl_SSPSpiele = 0
let Anzahl_Zahl = 0
let Anzahl_Kopf = 0
let Anzahl_Münzwurf = 0
basic.showString("HALLO", 150)
basic.setLedColor(0xffffff)
led.setBrightness(50)
