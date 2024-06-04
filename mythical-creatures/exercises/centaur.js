class Centaur {
  constructor({name, type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.fatigue = 0;
  }

  shootBow() {
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }

    this.addFatigue()
    return 'Twang!!!';
  }

  run() {
    if (this.cranky || this.layingDown){
      return 'NO!'
    }

    this.addFatigue()
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing){
      return 'NO!'
    } else if (this.layingDown) {
      this.fatigue = 0;
      this.cranky = false;
      return 'ZZZZ'
    }  
  }

  drinkPotion() {
    if (this.layingDown){
      return 'Not while I\'m laying down!'
    }
    this.fatigue = 0;
    this.cranky = false;
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  addFatigue() {
    this.fatigue++;
    if (this.fatigue >= 3) {
      this.cranky = true
    }
  }
}

module.exports = Centaur;