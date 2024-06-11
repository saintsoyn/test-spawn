enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const redpotion = SpriteKind.create()
    export const bluepotion = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bluepotion, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 500)
    heroMagic.value += 90
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MyHero,
    [img`
        . . . . 5 5 f f f f 5 . . . . . 
        . . . 5 f f f 2 2 f f 5 5 5 . . 
        . . 5 f f f 2 2 2 2 f f f 5 5 . 
        . 5 f f f e e e e e e f f f 5 . 
        . 5 f f e 2 2 2 2 2 2 e e f 5 . 
        . 5 f e 2 f f f f f f 2 e f 5 . 
        . 5 f f f f e e e e f f f f 5 . 
        5 f f e f b f 4 4 f b f e f f 5 
        5 f e e 4 1 f d d f 1 4 e e f 5 
        . 5 f e e d d d d d d e e f 5 . 
        . . 5 f e e 4 4 4 4 e e f 5 . . 
        . 5 e 4 f 2 2 2 2 2 2 f 4 e 5 . 
        . 5 4 d f 2 2 2 2 2 2 f d 4 5 . 
        . 5 4 4 f 4 4 5 5 4 4 f 4 4 5 . 
        . 5 5 5 5 f f f f f f 5 5 5 5 . 
        . . . . 5 f f 5 5 f f 5 . . . . 
        `,img`
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 . . f f f f . . 4 4 . . 
        . 4 4 . f f f 2 2 f f f . 4 4 . 
        . 4 . f f f 2 2 2 2 f f f . . 4 
        4 4 f f f e e e e e e f f f . 4 
        4 . f f e 2 2 2 2 2 2 e e f 4 4 
        4 . f e 2 f f f f f f 2 e f . 4 
        4 . f f f f e e e e f f f f . 4 
        4 f f e f b f 4 4 f b f e f f 4 
        4 f e e 4 1 f d d f 1 4 e e f 4 
        4 . f e e d d d d d d e e f . 4 
        4 . . f e e 4 4 4 4 e e f . . 4 
        4 . e 4 f 2 2 2 2 2 2 f 4 e . 4 
        4 . 4 d f 2 2 2 2 2 2 f d 4 . 4 
        4 4 4 4 f 4 4 5 5 4 4 f 4 4 . 4 
        . 4 . . . f f . . f f . 4 4 4 4 
        `,img`
        9 9 9 9 9 . f f f f . 9 9 9 9 9 
        9 . . . f f f 2 2 f f f . . . 9 
        9 . . f f f 2 2 2 2 f f f . . 9 
        9 . f f f e e e e e e f f f . 9 
        9 . f f e 2 2 2 2 2 2 e e f . 9 
        9 . f e 2 f f f f f f 2 e f . 9 
        9 . f f f f e e e e f f f f . 9 
        9 f f e f f f 4 4 f f f e f f 9 
        9 f e e 4 1 f d d f 1 4 e e f 9 
        9 . f e e d d d d d d e e f . 9 
        . 9 . f e e 4 4 4 4 e e f . 9 . 
        . 9 e 4 f 2 2 2 2 2 2 f 4 e 9 . 
        . 9 4 d f 2 2 2 2 2 2 f d 4 9 . 
        . 9 4 4 f 4 4 5 5 4 4 f 4 4 9 . 
        . 9 9 9 9 f f f f f f 9 9 9 9 . 
        . . . . 9 f f . . f f 9 . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f f f f f f f f e f f . 
        . f e e 4 4 4 d d 4 4 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Atkstat == 1 && characterAnimations.matchesRule(MyHero, characterAnimations.rule(Predicate.MovingUp))) {
        HeroStrike = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyHero, 0, -100)
        animation.runImageAnimation(
        HeroStrike,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . 2 2 1 1 2 2 . . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . . 2 1 1 1 1 3 . . . . . 
            . . . . . 2 3 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 2 . . . . . 
            . . . . . . 2 3 1 2 . . . . . . 
            . . . . . . 2 3 1 2 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 . . . 3 . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . . . . . 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
        heroMagic.value += -5
    } else if (Atkstat == 1 && characterAnimations.matchesRule(MyHero, characterAnimations.rule(Predicate.MovingDown))) {
        HeroStrike = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyHero, 0, 100)
        animation.runImageAnimation(
        HeroStrike,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 2 1 3 2 . . . . . . 
            . . . . . . 2 1 3 2 . . . . . . 
            . . . . . 2 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 3 2 . . . . . 
            . . . . . 3 1 1 1 1 2 . . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . . 2 2 1 1 2 2 . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 3 3 3 3 3 3 3 1 1 . . . 
            . 1 3 . . . 3 1 3 . . . 3 1 . . 
            . 1 . . . 2 3 1 3 2 . . . 1 . . 
            . 3 3 . . 2 3 1 3 2 . . 3 3 . . 
            . . 3 3 2 3 3 1 3 3 2 3 3 . . . 
            . . . 2 2 1 1 1 1 1 2 2 . . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . . 3 3 1 1 1 1 1 3 3 . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 . . . 3 . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . . . . . 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
        heroMagic.value += -5
    } else if (Atkstat == 1 && characterAnimations.matchesRule(MyHero, characterAnimations.rule(Predicate.MovingLeft))) {
        HeroStrike = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyHero, -100, 0)
        animation.runImageAnimation(
        HeroStrike,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 3 1 1 . . . . 
            . . . . . . . . 3 3 . 3 1 . . . 
            . . 3 2 2 3 . . 3 . 1 . 3 . . . 
            . 3 3 1 2 2 . . 3 . 3 1 . . . . 
            . 3 1 1 1 3 2 2 3 . 3 1 . . . . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 1 1 1 1 1 3 1 1 1 1 . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 3 2 2 3 . 3 1 . . . . 
            . 3 3 1 2 2 . . 3 . 3 1 . . . . 
            . . 3 2 2 . . . 3 . . . 1 . . . 
            . . . . . . . . 3 3 . 3 1 . . . 
            . . . . . . . . . 3 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 3 1 1 . . 
            . . . . . . . . . . 3 3 . 3 1 . 
            . . 3 2 2 3 . . . . 3 . 1 . 3 . 
            . 3 3 1 2 2 . . . . 3 . 3 1 . . 
            . 3 1 1 1 3 2 2 . . 3 . 3 1 . . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 1 1 1 1 1 3 1 1 1 1 . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 3 2 2 . . 3 . 3 1 . . 
            . 3 3 1 2 2 . . . . 3 . 3 1 . . 
            . . 3 2 2 . . . . . 3 . . . 1 . 
            . . . . . . . . . . 3 3 . 3 1 . 
            . . . . . . . . . . . 3 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 2 2 3 . . . . . . . . . . 
            . 3 3 1 2 2 . . . . . . 3 . . . 
            . 3 1 1 1 3 2 2 . . . . 3 . . . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 1 1 1 1 1 3 1 1 1 1 . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 3 2 2 . . . . . . . . 
            . 3 3 1 2 2 . . . . . . . . . . 
            . . 3 2 2 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 2 2 3 . . . . . . . . . . 
            . 3 3 1 2 2 . . . . . . 3 . . . 
            . 3 1 1 1 3 2 2 . . . . 3 . . . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 1 1 1 1 1 3 1 1 1 1 . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 3 2 2 . . . . . . . . 
            . 3 3 1 2 2 . . . . . . . . . . 
            . . 3 2 2 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 2 2 3 . . . . . . . . . . 
            . 3 3 1 2 2 . . . . . . 3 . . . 
            . 3 1 1 1 3 2 2 . . . . 3 . . . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 1 1 1 1 1 3 1 1 1 1 . 
            . 3 1 1 1 3 3 3 3 3 3 1 2 2 . . 
            . 3 1 1 1 3 2 2 . . . . . . . . 
            . 3 3 1 2 2 . . . . . . . . . . 
            . . 3 2 2 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
        heroMagic.value += -5
    } else if (Atkstat == 1 && characterAnimations.matchesRule(MyHero, characterAnimations.rule(Predicate.MovingRight))) {
        HeroStrike = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyHero, 100, 0)
        animation.runImageAnimation(
        HeroStrike,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 3 . . . . . . . . . 
            . . . 1 3 . 3 3 . . . . . . . . 
            . . . 1 . . . 3 . . . 2 2 3 . . 
            . . . . 1 3 . 3 . . 2 2 1 3 3 . 
            . . . . 1 3 . 3 2 2 3 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . 1 1 1 1 3 1 1 1 1 1 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . . . . 1 3 . 3 2 2 3 1 1 1 3 . 
            . . . . 1 3 . 3 . . 2 2 1 3 3 . 
            . . . 3 . 1 . 3 . . 3 2 2 3 . . 
            . . . 1 3 . 3 3 . . . . . . . . 
            . . . . 1 1 3 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 3 . . . . . . . . . . . 
            . 1 3 . 3 3 . . . . . . . . . . 
            . 1 . . . 3 . . . . . 2 2 3 . . 
            . . 1 3 . 3 . . . . 2 2 1 3 3 . 
            . . 1 3 . 3 . . 2 2 3 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . 1 1 1 1 3 1 1 1 1 1 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . . 1 3 . 3 . . 2 2 3 1 1 1 3 . 
            . . 1 3 . 3 . . . . 2 2 1 3 3 . 
            . 3 . 1 . 3 . . . . 3 2 2 3 . . 
            . 1 3 . 3 3 . . . . . . . . . . 
            . . 1 1 3 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 2 3 . . 
            . . . . . . . . . . 2 2 1 3 3 . 
            . . . . . . . . 2 2 3 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . 1 1 1 1 3 1 1 1 1 1 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . . . 3 . . . . 2 2 3 1 1 1 3 . 
            . . . 3 . . . . . . 2 2 1 3 3 . 
            . . . . . . . . . . 3 2 2 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 2 3 . . 
            . . . . . . . . . . 2 2 1 3 3 . 
            . . . . . . . . 2 2 3 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . 1 1 1 1 3 1 1 1 1 1 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . . . 3 . . . . 2 2 3 1 1 1 3 . 
            . . . 3 . . . . . . 2 2 1 3 3 . 
            . . . . . . . . . . 3 2 2 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 2 3 . . 
            . . . . . . . . . . 2 2 1 3 3 . 
            . . . . . . . . 2 2 3 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . 1 1 1 1 3 1 1 1 1 1 1 1 1 3 . 
            . . 2 2 1 3 3 3 3 3 3 1 1 1 3 . 
            . . . 3 . . . . 2 2 3 1 1 1 3 . 
            . . . 3 . . . . . . 2 2 1 3 3 . 
            . . . . . . . . . . 3 2 2 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
        heroMagic.value += -5
    }
})
function Herofunction () {
    MyHero = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MyHero.x += -15
    heroHealth = statusbars.create(5, 40, StatusBarKind.Health)
    heroHealth.setBarBorder(1, 2)
    heroMagic = statusbars.create(5, 40, StatusBarKind.Magic)
    heroMagic.setBarBorder(1, 2)
    heroHealth.x = MyHero.left - 3
    heroHealth.y += -10
    heroHealth.value = 100
    heroMagic.right = heroHealth.right - 6
    heroMagic.bottom = heroHealth.bottom
    heroMagic.value = 100
    controller.moveSprite(MyHero, 80, 80)
    heroHealth.attachToSprite(MyHero, 3, -10)
    heroMagic.attachToSprite(MyHero, 9, -10)
    heroMoving()
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy()
})
function fn_BluePotion () {
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        BluePotion = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . 9 9 e 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 8 8 9 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 1 1 8 8 8 8 . . . . . 
            . . . . 8 1 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 9 . . . . . 
            . . . . . . 8 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bluepotion)
        tiles.placeOnTile(BluePotion, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
statusbars.onZero(StatusBarKind.Magic, function (status) {
    Atkstat = 0
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
function Enemyfunction () {
    if (MonsterCount >= 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            MyEnemy = sprites.create(img`
                . . . . f f f f f . . . . . . 
                . . f f 1 1 1 1 b f f . . . . 
                . f b 1 1 1 1 1 1 1 b f . . . 
                . f 1 1 1 1 1 1 1 1 1 f . . . 
                f d 1 1 1 1 1 1 1 f f f f . . 
                f d 1 1 1 d d 1 c 1 1 1 b f . 
                f b 1 1 f c d f 1 b 1 b f f . 
                f 1 1 1 1 1 b f b f b f f . . 
                f 1 b 1 b d f c f f f f . . . 
                f b f b f c f c c c f . . . . 
                f f f f f f f f f f . . . . . 
                . . . f f f f f f . . . . . . 
                . . . f f f f f f . . . . . . 
                . . . f f f f f f f . . f . . 
                . . . . f f f f f f f f f . . 
                . . . . . f f f f f f f . . . 
                `, SpriteKind.Enemy)
            animation.runImageAnimation(
            MyEnemy,
            [img`
                ........................
                ........................
                ........................
                ........................
                ..........fffff.........
                ........ff1111bff.......
                .......fb1111111bf......
                .......f111111111f......
                ......fd1111111ffff.....
                ......fd111dd1c111bf....
                ......fb11fcdf1b1bff....
                ......f11111bfbfbff.....
                ......f1b1bdfcffff......
                ......fbfbfcfcccf.......
                ......ffffffffff........
                .........ffffff.........
                .........ffffff.........
                .........fffffff..f.....
                ..........fffffffff.....
                ...........fffffff......
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........fffff.........
                ........ff1111bff.......
                .......fb1111111bf......
                .......f111111111f......
                ......fd111111111f......
                ......fd11111fffff......
                ......fb11f1c111bf......
                ......f1111f1b1bff......
                ......f1b1bfbfbff.......
                ......fbfbfcfffff.......
                ......ffffffffff........
                .........ffffff.........
                .........ffffff.........
                .........fffffff..f.....
                ..........fffffffff.....
                ...........fffffff......
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........fffff.........
                ........ff1111bff.......
                .......fb1111111bf......
                .......f111111111f......
                ......fd111111111f......
                ......fd111dd1111f......
                ......fb11fcd1111f......
                ......f11ffff1111f......
                ......f1c111bf111f.2....
                ......ff1b1bffccf.......
                ......ffbfbfffff........
                .......cfffffff.........
                .......2.ffffff.........
                .........fffffff..f.....
                ..........fffffffff.....
                ...........fffffff......
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff.2222...
                .......fb111111bf...2...
                .......f1111111dbf..2...
                ......fd1111111ddf..2...
                ......fd111111dddf.22...
                ......fd111ddddddf.2....
                ......fd111ddddddf22....
                ......fd1dddddddbf2.....
                ......fd1dfbddbbf22.....
                ......fbddfcdbbcf2......
                .....ffffccddbf22.......
                ....fcb1bbbfcf22f.......
                ....f1b1dc2222ffff......
                ....f22222.ffffffffff...
                ...22f.f.....ffffff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            200,
            true
            )
            enemyHP = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            enemyHP.setBarBorder(1, 2)
            enemyHP.max = 100
            enemyHP.value = 100
            enemyHP.attachToSprite(MyEnemy, 4, 0)
            tiles.placeOnTile(MyEnemy, value)
            MyEnemy.follow(MyHero, randint(5, 30))
        }
        MonsterCount += -1
    } else {
    	
    }
}
function heroMoving () {
    scene.cameraFollowSprite(MyHero)
    characterAnimations.loopFrames(
    MyHero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 3 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f f f 4 4 f f f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f f f f f f f f e f f . 
        . f e e 4 4 4 d d 4 4 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    300,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    MyHero,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    MyHero,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    MyHero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    MyHero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, MyHero)
})
function fn_RedPotion () {
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        RDPotion = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . 9 9 e 9 9 . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 2 2 9 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 1 1 2 2 2 2 . . . . . 
            . . . . 2 1 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 9 . . . . . 
            . . . . . . 2 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.redpotion)
        tiles.placeOnTile(RDPotion, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.redpotion, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 500)
    heroHealth.value += 20
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 100)
    heroHealth.value += -1
})
let RDPotion: Sprite = null
let enemyHP: StatusBarSprite = null
let MyEnemy: Sprite = null
let BluePotion: Sprite = null
let heroHealth: StatusBarSprite = null
let HeroStrike: Sprite = null
let Atkstat = 0
let MyHero: Sprite = null
let heroMagic: StatusBarSprite = null
let MonsterCount = 0
tiles.setCurrentTilemap(tilemap`level4`)
Herofunction()
fn_RedPotion()
fn_BluePotion()
MonsterCount = 2
game.onUpdate(function () {
    if (heroMagic.value >= 10) {
        Atkstat = 1
    }
})
game.onUpdateInterval(2000, function () {
    Enemyfunction()
})
game.onUpdateInterval(1000, function () {
    if (heroHealth.value <= 100) {
        heroHealth.value += 10
    }
})
game.onUpdateInterval(1000, function () {
    if (heroMagic.value <= 100) {
        heroMagic.value += 10
    }
})
game.onUpdateInterval(100, function () {
    if (controller.B.isPressed()) {
        heroMagic.value += 0.25
    }
})
